import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from './RecipeCard';
import './App.css'
import LocalDiningIcon from '@mui/icons-material/LocalDining';

function Recipe() {

    const [field, setField] = useState({ filter: 'all' });
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [button, setbutton] = useState(1);
    const API_ID = 'c9bc25d6';
    const API_KEY = '8706cc1dc6163a482a85eaa72f1386db';

    const handleSearchChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setField({ ...field, [name]: value })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setbutton(Math.random());
    }

    useEffect(() => {
        setLoading(true);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Access-Control-Allow-Origin': "*",
            },
        };

        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${field.filter}&app_id=${API_ID}&app_key=${API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setList(result.hits);
                setLoading(false);
            })
            .catch(error => console.log('error', error));
    }, [button])
    return <>
        <div className="SearchBar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '2%' }}>
            <form className='searchForm' style={{ marginBottom: '4%' }}>
                <Paper>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        onChange={handleSearchChange}
                        value={field.filter}
                        placeholder="Are you craving for Something? Find it here!"
                        id="filter" name="filter" label="Filter"
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper></form>
            {loading ? <div className="loader-wrapper">
                <div className="loader-box">
                    <div className="icon">
                        <LocalDiningIcon style={{ width: '70%', height: '70%' }} />
                    </div>
                </div>
            </div> : <RecipeCard list={list} />}
        </div>
    </>;
}

export default Recipe;
