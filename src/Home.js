import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, Grid, Typography } from '@mui/material';
import LatestArticles from "./LatestArticles";
import Sponsors from "./Sponsors";

const Home = () => {
    let navigate = useNavigate();
    const [locale, setLocale] = useState('en');

    // Set the locale and send the props the the child components
    const handleChange = (event, newLocale) => {
        if (newLocale !== null) {
            setLocale(newLocale);
        }
    };

    useEffect(() => {
        if (locale === 'en') {
            navigate("/recent-articles");
        } else if (locale === 'zh-Hant') {
            navigate("/zh/recent-articles");
        }
        if (window.location.href === "/") {
            window.location.href = "/recent-articles";
        }
    }, [locale, navigate])



    return (
        <>
            <Container maxWidth="xl">
                <Grid container spacing={4} style={{ marginTop: "4px" }} >
                    <Grid item xs={12} md={8} >
                        <Typography variant="h4" textAlign={'center'}>Healthy Matters</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ToggleButtonGroup
                            value={locale}
                            exclusive
                            onChange={handleChange}
                            style={{ justifyContent: "center" }}
                        >
                            <ToggleButton value="en" >English</ToggleButton>
                            <ToggleButton value="zh-Hant" >Cantonese</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <LatestArticles locale={locale} />
                    <Sponsors locale={locale} />
                </Grid>
            </Container>
        </>
    )
}

export default Home