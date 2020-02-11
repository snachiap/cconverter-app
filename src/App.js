import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import './App.css';


const API = axios.create({});

const App = () => {
  const [source, setSource] = useState('');
  const [value, setValue] = useState('');
  const [dest, setDest] = useState('');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await API.get('/currency');
      setCurrencies(res.data)
      console.log(res);
    };
    fetchData();
  }, [])

  return (
    <div className="App">
      <Grid container alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item style={{ padding: 5 }}>
          <TextField
            style={{ width: 150 }}
            variant="outlined"
            id="app-currencyValue"
            type="number"
            size="small"
            label="Amount"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item style={{ padding: 5 }}>
          <TextField
            style={{ width: 150 }}
            variant="outlined"
            id="app-sourceCurrency"
            size="small"
            label="From"
            value={source}
            onChange={e => setSource(e.target.value)}
          ></TextField>
        </Grid>

        <Grid item style={{ padding: 5 }}>
          <TextField
            style={{ width: 150 }}
            variant="outlined"
            id="app-destCurrency"
            size="small"
            label="To"
            value={dest}
            onChange={e => setDest(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
