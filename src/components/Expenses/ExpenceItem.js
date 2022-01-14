import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css'
import Card from '../UI/Card';
import React {useState} from 'react';


const ExcpenceItem=(props) => {
  // function clickHandler() {}
 const [title,setTitle]= useState(props.title);


   const clickHandler= ()=>{
      setTitle('Updated!!!') 
         console.log(title);
       }
     return(
      
       <Card className='expense-item'>
         <ExpenceDate date={props.date}/>
        <div className='expense-item__description'><br />
            <h2>{title}</h2>
            <div className='expense-item__price'>$ {props.price}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
    


export default ExcpenceItem;