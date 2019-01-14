import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListItems from './ExpenseListItems'
import ExpenseListFilters from './ExpenseListFilters'
// import {connect} from 'react-redux'
const ExpenseDashboardPage =()=>(
  <div>
  <ExpenseListFilters />
  <ExpenseList />
  
  
  </div>
)
 
    
   
    
  
  export default ExpenseDashboardPage