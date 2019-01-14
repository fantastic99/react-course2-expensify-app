import React from 'react'
import {editExpense} from '../actions/expenses'
import {Route, Link} from 'react-router-dom'

const ExpenseListItems = (props)=>(
    <div>
    <h3>
    <Link 
    to= {`/edit/${props.id}`}>{props.description}
    </Link>
    </h3>
    <p>{props.amount}-{props.createdAt}</p>
    <p>{props.note}</p>
   
    </div>
    
)
    

    
    // export default connect()(ExpenseListItems)
    
export default ExpenseListItems