import { Grid, Link, CardMedia, Button } from '@mui/material'
import React, { useState } from 'react'
import Burger from './Images/burger.png'
import Fries from './Images/fries.png'
import Pizza from './Images/pizza.png'
import './Home.css'

function Home() {

    const [state, setState] = useState(0)
    return (
        <>
            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid item>
                    <Grid container>
                        <Grid item md={1}></Grid>
                        <Grid item md={6} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '4em', fontWeight: '600', margin: '0', padding: '0' }}>It's not just Food</h2>
                            <p style={{ margin: '0', padding: '0' }}>If you talk about food just as much as you eat it, you're in good company. We've got famous chefs and stars—Julia Child, Sophia Loren, Virginia Woolf—to thank for some of the greatest food quotes of all time. Do what you will with these: Memorize them, pin them, or print them out and tack them up all over your kitchen.</p>
                            <Link href='/search' style={{ textDecoration: 'none', marginTop: '10px', fontWeight: '600', padding: '10px', borderRadius: '7px' }}>Find Recipes</Link>
                        </Grid>
                        <Grid item md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={state == 0 ? Burger : (state == 1 ? Fries : Pizza)} style={{ objectFit: 'cover' }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button onClick={() => setState(0)}><img src={Burger} style={{ width: '70px', height: '70px', objectFit: 'cover' }} /></Button>
                    <Button onClick={() => setState(1)}><img src={Fries} style={{ width: '70px', height: '70px', objectFit: 'cover' }} /></Button>
                    <Button onClick={() => setState(2)}><img src={Pizza} style={{ width: '70px', height: '70px', objectFit: 'cover' }} /></Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Home