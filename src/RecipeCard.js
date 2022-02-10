import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import './App.css'
import { useNavigate } from "react-router-dom";
import Ingredients from './Ingredients';
import { Link } from "react-router-dom";


function RecipeCard({ list }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [search, setSearch] = useState([])
    const handleIngrClick = (name) => {
        console.log(name);
        const search2 = list.filter((searchItem) => searchItem.recipe.label === name)
        setSearch(search2[0].recipe.ingredientLines);
    }
    console.log(search);

    return <>
        <Grid container spacing={4} sx={{ margingLeft: '50px' }}>
            {
                list.map((recipeFiltered) => {
                    return <>
                        <Grid item>
                            <Card sx={{ display: 'flex', width: '450px', padding: '12px' }}>
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
                                        <Link to={{ pathname: "/ingredients", state: { list: list, name: recipeFiltered.recipe.label } }} sx={{ fontSize: '14px', fontWeight: 'bold' }}>Know More</Link>
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
