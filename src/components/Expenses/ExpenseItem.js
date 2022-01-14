import React,{useState}  from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem =(props) => {
  // function clickHandler() {}
 const [title,setTitle]= useState(props.title);
 console.log('ExpenseItem evaluted by React');


   const clickHandler= ()=>{
      setTitle('Updated!!!') 
         console.log(title);
       }
     return(
      
       <Card className='expense-item'>
         <ExpenseDate date={props.date}/>
        <div className='expense-item__description'><br />
            <h2>{title}</h2>
            <div className='expense-item__price'>$ {props.price}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
    


export default ExpenseItem;