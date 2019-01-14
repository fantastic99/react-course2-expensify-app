import {createStore, combineReducers} from 'redux'
import {addExpense} from '../actions/expenses'
import {expensesReducer} from '../reducers/expenses'
import configureStore from '../store/configureStore'
import getVisibleExpenses from '../selectors/getVisibleExpenses'
const store = configureStore();
export const expenseOne= store.dispatch(addExpense(
    {description:'water Bill',
    note:'this was the final payment for that address',
    amount:100,
    createdAt:-2000
  }
  ))
  
  export const expenseTwo=store.dispatch(addExpense(
    {description:'Gas bill',
    note:'splurging today bc of my birthday',
    amount:300,
    createdAt:-1000
  }))