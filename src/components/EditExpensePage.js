import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'
const EditExpensePage = (props)=>{
  console.log(props);
   return (
    <div>
   <ExpenseForm 
   expense = {props.expense}
   onSubmit= {(expense)=>{
     props.dispatch(editExpense(props.expense.id,expense))
    props.history.push('/')
   }}/>

   <button 
   type='text'
  onClick ={()=>{
      props.dispatch(removeExpense(props.expense.id))
      props.history.push('/')
  }}
  >delete
  </button>
     </div>
     
 )}
    const mapStateToProps = (state, props) =>{
      // console.log(state.expenses.id)
        return {
          
          expense: state.expenses.find((expense)=>{
            // console.log(expense.id)
           return  expense.id === props.match.params.id
          })
      }
    
    };
  export default connect(mapStateToProps)(EditExpensePage)