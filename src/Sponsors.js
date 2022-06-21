import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Articles from './data.json'
import { Box } from '@mui/system';

const Sponsors = ({ locale }) => {
    const [articles, setArticles] = useState(Articles.articles);

    // Sort articles by date and filter articles that are sponsors
    const filterArticles = (filteredData) => {

        let filteredArticles = filteredData.sort(function compare(a, b) {
            var dateA = new Date(a.attributes.publishedAt);
            var dateB = new Date(b.attributes.publishedAt);
            return dateB - dateA;
        });

        filteredArticles = filteredData.filter(
            (article) => article.attributes.locale === locale && article.attributes.sponsors === true
        );
        return filteredArticles;
    };

    useEffect(() => {
        var filteredData = filterArticles(Articles.articles);
        setArticles(filteredData);
    }, [locale]);


    return (
        <>
            <Grid item xs={12} >
                <Card elevation={5} >
                    <CardContent >
                        <Typography variant="h5" textAlign={'center'}>Sponsors</Typography>
                        <Divider sx={{ margin: 1 }} />

                        <Grid container spacing={2} >

                            {articles.slice(0, 6).map((article, index) => {
                                return (
                                    <Grid item xs={12} md={6} key={index + 1} >
                                        <Card sx={{ height: 205, margin: 1, display: { xs: 'inline', md: 'flex' } }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: { xs: 200, md: "100%" }, width: { md: 200 } }}
                                                    image={article.attributes.image.data.attributes.url}
                                                    alt="green iguana"
                                                />
                                            </Box>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: 18, md: 18 } }}>
                                                        {article.attributes.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, md: 13 } }}>
                                                        {article.attributes.exerpt}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Sponsors