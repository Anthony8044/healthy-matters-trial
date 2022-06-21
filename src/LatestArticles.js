import React, { useEffect, useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Articles from './data.json'
import { Box } from '@mui/system';

const LatestArticles = ({ locale }) => {
    const [articles, setArticles] = useState(Articles.articles);

    // Sort articles by date and filter articles that are not sponsors
    const filterArticles = (filteredData) => {

        let filteredArticles = filteredData.sort(function compare(a, b) {
            var dateA = new Date(a.attributes.publishedAt);
            var dateB = new Date(b.attributes.publishedAt);
            return dateB - dateA;
        });

        filteredArticles = filteredData.filter(
            (article) => article.attributes.locale === locale && article.attributes.sponsors === false
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
                        <Typography variant="h5" textAlign={'center'}>Latest Articles</Typography>
                        <Divider sx={{ margin: 1 }} />

                        <Grid container spacing={2} >
                            <Grid item xs={12} md={6} >
                                {articles.slice(0, 1).map((article, index) => {
                                    return (
                                        <Card sx={{ height: { xs: 400, md: 620 }, margin: 1 }} key={index + 1}>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: { xs: 200, md: 400 } }}
                                                image={article.attributes.image.data.attributes.url}
                                                alt="green iguana"
                                            />
                                            <CardActionArea sx={{ height: { xs: "20%", md: "35%" } }}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: 18, md: 26 } }} >
                                                        {article.attributes.title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: 12, md: 15 } }} >
                                                        {article.attributes.exerpt}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    );
                                })}
                            </Grid>

                            <Grid item xs={12} md={6} >
                                {articles.slice(1, 4).map((article, index) => {
                                    return (
                                        <Card sx={{ display: { xs: 'inline', md: 'flex' }, height: 202, margin: 1 }} key={index + 1}>
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
                                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: 18, md: 18 } }}>
                                                        {article.attributes.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, md: 13 } }}>
                                                        {article.attributes.exerpt}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default LatestArticles