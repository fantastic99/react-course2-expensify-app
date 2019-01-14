import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import selecExpenses from '../selectors/selectExpenses'
import {removeExpense} from '../actions/expenses'

const ExpenseList = (props) => (
    <div>
    <h1>Expense List</h1>
       {props.expenses.map((expense)=>{
        return <ExpenseListItems key={expense.id}{...expense} />
    })}       
        
    </div>
)

const mapStateToProps = (state)=>{
    return {
        // expenses:state.expenses,
        // filters: state.filters
        expenses:selecExpenses(state.expenses, state.filters)
        
    };
};

export default connect(mapStateToProps)(ExpenseList)

// export default connectedExpenseList;
