import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'
import { Link } from "react-router-dom";

function RecipeCard({ list }) {


    return <>
        <Grid container spacing={4} sx={{ margingLeft: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                list.map((recipeFiltered) => {
                    return <>
                        <Grid item md={4} xs={12} sm={12} key={recipeFiltered.recipe.label}>
                            <Card sx={{ display: 'flex', width: '90%', padding: '12px' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, borderRadius: '3.5px' }}
                                    image={recipeFiltered.recipe.image}
                                    alt={recipeFiltered.recipe.label}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography>
                                            {recipeFiltered.recipe.label}
                                        </Typography>
                                        <Typography style={{ fontSize: '13px', fontWeight: 'bold', color: 'gray' }}>
                                            {recipeFiltered.recipe.source}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        {/* <Button onClick={() => { handleIngrClick(recipeFiltered.recipe.label) }} sx={{ fontSize: '14px', fontWeight: 'bold' }} target='_blank'>Know More</Button> */}
                                        <Link to={"/ingredients"} state={{ list: list, name: recipeFiltered.recipe.label }} sx={{ fontSize: '14px', fontWeight: 'bold' }}>Know More</Link>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    </>
                })
            }
        </Grid>
    </>
}

export default RecipeCard;
