import React, { useState, useEffect, Fragment } from 'react';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem, EuiComboBox } from '@elastic/eui';

import axios from 'axios';
import { EuiFieldNumber } from '@elastic/eui';
import { EuiButtonIcon } from '@elastic/eui';
import { EuiStat } from '@elastic/eui';
const API = axios.create({});


const Converter = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [value, setValue] = useState(10);
  const [destCurrency, setDestCurrency] = useState('');
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await API.get('/currency');
        setCurrencies(res.data.map(label => ({ label })));
      } catch (e) {
      }
    };
    fetchData();
  }, [])

  const selectedbaseCurrency = currencies.filter(c => c.label === baseCurrency);
  const selecteddestCurrency = currencies.filter(c => c.label === destCurrency);

  const convert = async () => {
    try {
      let res = await API.post('/currency/convert', {
        baseCurrency, destCurrency, value
      });
      setResult(res.data.value);
    } catch (e) {

    }
  }

  return (
    <Fragment>
      <EuiFlexGroup justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiFieldNumber
            min={1}
            defaultValue={value}
            onChange={e => {
              setValue(e.target.value);
              setResult(0);
            }}>
          </EuiFieldNumber>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiComboBox
            style={{ width: 150 }}
            placeholder="From"
            singleSelection={{ asPlainText: false }}
            options={currencies}
            selectedOptions={selectedbaseCurrency}
            onChange={option => {
              setBaseCurrency(option[0].label);
              setResult(0);
            }}
            isClearable={false}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiComboBox
            style={{ width: 150 }}
            placeholder="To"
            singleSelection={{ asPlainText: false }}
            options={currencies}
            selectedOptions={selecteddestCurrency}
            onChange={option => {
              setDestCurrency(option[0].label);
              setResult(0);
            }}
            isClearable={false}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButtonIcon
            iconType="play"
            iconSize="xl"
            onClick={convert}>
          </EuiButtonIcon>
        </EuiFlexItem>
      </EuiFlexGroup>
      {
        (destCurrency && result > 0) ?
          <EuiFlexGroup justifyContent="center">
            <EuiFlexItem grow={false}>
              <EuiStat
                title={new Intl.NumberFormat('en-GB', { style: 'currency', currency: baseCurrency }).format(value)}
                textAlign="left"
                titleSize="m"
                titleColor="secondary">
              </EuiStat>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiStat title={'>'}
                textAlign="right"
                titleSize="m"
                titleColor="secondary">
              </EuiStat>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiStat
                title={new Intl.NumberFormat('en-GB', { style: 'currency', currency: destCurrency }).format(result)}
                textAlign="right"
                titleSize="m"
                titleColor="secondary">
              </EuiStat>
            </EuiFlexItem>
          </EuiFlexGroup> : null
      }
    </Fragment>
  )
}

export default Converter;