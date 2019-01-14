import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now)


export default class ExpenseForm extends React.Component {
// constructor(props){
    // super(props)
    state={
        description:this.props.expense?this.props.expense.description:'',
        note: this.props.expense?this.props.expense.note:'',
        amount:this.props.expense?(this.props.expense.amount/ 100).toString():'',
        createdAt:this.props.expense ? moment(this.props.expense.createdAt):moment(),
        calendarFocus:false,
        error:'',
        buttonText:this.props.expense? 'edit expense':'add expense'
     }
// }
     
     onChangeDescription = (e)=>{
         const description = e.target.value
         this.setState(()=>{
             return{
                 description:description
             }
         })
        
    }

   onChangeNote = (e)=>{
       const note = e.target.value;
       this.setState(()=>{
           return {
               note:note
           }
       })

   }
    
   onChangeAmount = (e)=>{
       const amount= e.target.value;
       if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>{
            return{
                amount:amount
            }
        })
       }
      
   }
   onDateChange=(createdAt)=>{
       if(createdAt){
        this.setState(()=>{
            return{
                createdAt:createdAt
            }
        })
       }
   }
   onFocusChange=({focused})=>{
       this.setState(()=>{
           return{
               calendarFocus:focused
           }

       })
   }
   
   onSubmit=(e)=>{
    e.preventDefault();
    const error='Please provide description and amount'
    if(!this.state.description || !this.state.amount){
        this.setState(()=>{
            console.log(error)
            return {
                error:error
            }
            })
    } else{
       this.setState(()=>{
           return{
               error:''
           }
           
       })
    }
    this.props.onSubmit({
        description:this.state.description,
        amount:parseFloat(this.state.amount, 10) *100,
        note:this.state.note,
        createdAt:moment(this.state.createdAt).valueOf()

    })
    // console.log('submited!')
}

   

    
    render(){
      
       return(
            <div>
            <h3>A list of Expenses</h3>
            {this.state.description && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input
            type='text'
            value = {this.state.description}
            onChange = {this.onChangeDescription}
            placeholder='description'
            autoFocus 
            />
            <input
            type='number'
            placeholder='Amount' 
            value={this.state.amount}
            onChange= {this.onChangeAmount}
            />
            <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            <textarea
            type='text'
            placeholder='Add a note for your expense(optional)' 
            value={this.state.note}
            onChange = {this.onChangeNote}
            >
            </textarea>
            <button>{this.state.buttonText}</button>

            </form>
            </div>
        )
    }
} 