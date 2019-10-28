import React from 'react';
import { connect } from 'react-redux';
import c from './Converter.module.scss';


function Converter(props) {

  const handlerSelect = (e, num) => {
    const value = e.target.value;
    if(num === 1) {
      props.setFirstCurrency(value);
    } else props.setSecondCurrency(value);
  };

  const changeCurrency = (event) => {
    const value = event.target.value;
    if(isNaN(value)) return;
    props.changeCurrency(value);
  };

  return (

    <div className={c.converter}>
      <select className={`custom-select ${c.select}`} onChange={(event) => handlerSelect(event, 1)}>
        {props.currencies.map(currency => {
          return <option key={currency.cc} value={currency.rate}>{currency.txt}</option>
        })}
      </select>


      <select className={`custom-select ${c.select}`} onChange={(event) => handlerSelect(event, 2)}>
        {props.currencies.map(currency => {
          return <option key={currency.cc} value={currency.rate}>{currency.txt}</option>
        })}
      </select>

      <input className={`form-control ${c.select}`} type="number" placeholder="Enter the amount of money" onInput={changeCurrency} min="1"></input>
      <div className={`form-control ${c.select} ${c.modific}`}>{props.changedValue}</div>
    </div>
  );




};

function mapStateToProps(state) {
  console.log(state);
  
  return {
    currencies: state.constCurrencies,
    inputValue: state.inputValue,
    changedValue: state.changedValue
  }
};

function mapDispatchToProps(dispatch) {

  return {
    changeCurrency: (value) => {
      dispatch({ type: 'CHANGE_CURRENCY',payload: value })
    },
    setFirstCurrency: (currency) => {
      dispatch({ type: 'SET_FIRST_CURRENCY', payload: currency })
    },
    setSecondCurrency: (currency) => {
      dispatch({ type: 'SET_SECOND_CURRENCY', payload: currency })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Converter);