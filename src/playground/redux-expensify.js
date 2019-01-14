import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'
// import {addExpense,removeExpense,editExpense} from './actions/expenses'
// import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters'
// import expenses from './actions/expenses'

// ADD_EXPENSE
const addExpense = ({
    description = '', 
    note='',
    amount=0, 
    createdAt= 0
}= {}) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt  
    }
})
// REMOVE_EXPENSE
const removeExpense = ({id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id

})
// EDIT_EXPENSE
const editExpense = (id,updates )  =>({
    type: 'EDIT_EXPENSE',
   id,
   updates
})

// SET_TEXT_FILTER
const setTextFilter = (text='') =>({
    type:'SET_TEXT_FILTER',
    text
})
// SORT_BY_AMOUNT
const sortByAmount =()=>({
type: 'SORT_BY_AMOUNT',
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
// SET_START_DATE
const setStartDate =(startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
//make expenses visible

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate }) =>{
    // return expenses; 
   
return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate  
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
       if(sortBy === 'date'){
        return a.createdAt - b.createdAt
       }
       else if(sortBy === 'amount'){
           return b.amount-a.amount
           
       }
     
    })
}

// expenseReducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState , action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
        // return state.concat(action.expense)
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
       return  state.filter(({id}) => id !== action.id)

       case 'EDIT_EXPENSE':
      return state.map((expense) =>{
          if(expense.id === action.id){
              return{
                  ...expense,
                  ...action.updates
              }
          }
          else{
              return expense;
          }
      })
        
        default:
        return state;
    
}
}

//filterReducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state =  filtersReducerDefaultState , action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            ...action.text
        }

        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SET_START_DATE':
         return{
                ...state,
                startDate:action.startDate
            }
        
       

        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.endDate
        }
                
           

        default:
        return state
    }
    
}

const store= createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
) 

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
//         console.log(store.getState());
    })

const expenseOne=store.dispatch(addExpense(
    {description:'January Rent',
    note:'this was the final payment for that address',
    amount:100,
    createdAt:-2000
}
))
const expenseTwo=store.dispatch(addExpense(
    {description:'coffee purchase',
    note:'splurging today bc of my birthday',
    amount:300,
    createdAt:-1000
}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:600}))
// store.dispatch(setTextFilter({text:'re'}))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount());
store.dispatch(sortByDate(-5000));

// store.dispatch(setStartDate(-5000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(0))

const demoState = {
    expenses:[{
        id:'poijasdforleow',
        description:'January Rent',
        note:'this was the final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined

    }   
   
}
// console.log(demoState.filters.text) 
// console.log(filters.text)
// const user={
//     name:'Jen',
//     age: 24
// };
// console.log(
//     {...user, location:'columbus,ohio', age:34}
// );

const test= {
    text: '',
    sortBy: 'date',
    startDate: 'undefined',
    endDate: 'undefined'
};
//  console.log(test.startDate)
    // {
    //     ...test,
    //   startDate:125
    // // }
    // const str = 'To be, or not to be, that is the question.  description:'January Rent',';
    // const str2= str.toLowerCase()
    // console.log(str2)
    // console.log(str2.includes('to'));     
    // console.log(str.includes('quest'));    // true
    // console.log(str.includes('nonexistent')); // false
    // console.log(str.includes('To be', 1));    // false
    // console.log(str.includes('TO BE'));      //false