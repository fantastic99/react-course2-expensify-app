import {createStore, combineReducers} from 'redux'

import React from 'react';
import AppRouter from './routers/AppRouter'
// import {ExpenseList} from './components/ExpenseList'
// import ExpenseListItems from './components/ExpenseListItems'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import selectExpenses from './selectors/selectExpenses'
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


  // const state = store.getState();
// const expenseOne=store.dispatch(addExpense(
//   {description:'water Bill',
//   note:'this was the final payment for that address',
//   amount:4500,
//   createdAt:-1
// }
// ))

// const expenseTwo=store.dispatch(addExpense(
//   {description:'Gas bill',
//   note:'splurging today bc its my birthday',
//   amount:0,
//   createdAt:-2
// }))
// const expenseThree=store.dispatch(addExpense(
//   {description:'Rent',
//   note:'finale rent payment',
//   amount:109500,
//   createdAt:-3
// }))

// store.subscribe(()=>{
//   const state = store.getState();
//   const visibleExpenses = selectExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses)
      
//   })

// // console.log(store.getState());
// store.dispatch(setTextFilter({text:''}))

// setTimeout(() =>{
//   store.dispatch(setTextFilter({text:'wa'}))
// },3000)


  const jsx =(
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
  )
    
  
  
  ReactDOM.render(jsx, document.getElementById('app'))
  
 