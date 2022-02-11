import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#18392B',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'theme.palette.action.hover',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Ingredients(props) {
    const location = useLocation();
    const name = location.state.name;
    const list = location.state.list;
    const search = (list.filter((recipeClicked) => recipeClicked.recipe.label === name)[0]);
    const ingredients = search.recipe.ingredients;
    const dietLabels = search.recipe.dietLabels;
    const healthLabels = search.recipe.healthLabels;
    const cautions = search.recipe.cautions;
    const cuisineType = search.recipe.cuisineType;
    const mealType = search.recipe.mealType;
    const dishType = search.recipe.dishType;
    const image = search.recipe.image;
    const label = search.recipe.label;

    const onTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        onTop();
    }, [])

    return (
        <>
            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid item style={{ height: '300px', backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5%', position: 'relative' }}>
                    <p className='title' style={{ position: 'absolute', zIndex: '10' }}>{label}</p>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: '100%', backgroundColor: 'black', position: 'absolute', zIndex: '0', opacity: '0.5' }}
                        image={image}
                    />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    <Grid container>
                        <Grid item md={9} sm={12} xs={12} style={{ marginBottom: '5%' }}>
                            <Card>
                                <CardContent>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>Ingredient</StyledTableCell>
                                                    <StyledTableCell align="right">Quantity</StyledTableCell>
                                                    <StyledTableCell align="right">Measure</StyledTableCell>
                                                    <StyledTableCell align="right">Weight</StyledTableCell>
                                                    <StyledTableCell align="right">Image</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {ingredients.map((singleIngredient) => (
                                                    <StyledTableRow key={singleIngredient.food} >
                                                        <StyledTableCell component="th" scope="row">
                                                            {singleIngredient.food}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">{singleIngredient.quantity}</StyledTableCell>
                                                        <StyledTableCell align="right">{singleIngredient.measure}</StyledTableCell>
                                                        <StyledTableCell align="right">{singleIngredient.weight}</StyledTableCell>
                                                        <StyledTableCell align="right">
                                                            <CardMedia
                                                                component="img"
                                                                sx={{ width: 60, borderRadius: '3.5px', height: 60 }}
                                                                image={singleIngredient.image}
                                                                alt={singleIngredient.food}
                                                            />
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={3} sm={12} xs={12}>
                            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <Grid item style={{ width: '100%' }}>
                                    <Card style={{ marginLeft: '40px', marginRight: '40px' }}>
                                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <h3 className='sigTitles'>Diet Labels</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    dietLabels.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px' }}>
                                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <h3 className='sigTitles'>Health Labels</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    healthLabels.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item style={{ width: '100%' }}>
                                    <Card style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px' }}>
                                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <h3 className='sigTitles'>Cautions</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    cautions.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item style={{ width: '100%' }}>
                                    <Card style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px' }}>
                                        <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <h3 className='sigTitles'>Cuisine Type</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    cuisineType.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                            <h3 className='sigTitles'>Meal Type</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    mealType.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                            <h3 className='sigTitles'>Dish Type</h3>
                                            <Box style={{ textAlign: 'center' }}>
                                                {
                                                    dishType.map((label) => {
                                                        return <Chip
                                                            style={{ marginRight: '5px', marginBottom: '5px' }}
                                                            label={label}
                                                            deleteIcon={<DoneIcon />}
                                                        />
                                                    })
                                                }
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Ingredients;
