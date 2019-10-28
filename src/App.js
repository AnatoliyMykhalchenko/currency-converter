import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import List from './List/List';
import Converter from './Converter/Converter'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';





class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path='/' exact component={List}></Route>
        <Route path='/converter' component={Converter}></Route>
      </div>
    )
  };


  componentDidMount() {
    const date = new Date().toLocaleDateString().split('.').reverse().join('');
    const url = `https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.props.setCurrency(data);
      })
  };


};


// function mapStateToProps(state) {
//   return {
//     currencies: state.currencies
//   }
// };

function mapDispatchToProps(dispatch) {

  return {
    setCurrency: (data) => {
      dispatch({ type: 'SHOW_CURRENCIES', payload: data })
    }
  };
};
export default connect(null, mapDispatchToProps)(App);
