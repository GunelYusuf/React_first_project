import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css'

function ExcpenceItem(props) {
     return(
       <div className='expense-item'>
         <ExpenceDate date={props.date}/>
        <div className='expense-item_description'><br />
            <h2>{props.title}</h2>
            <div className='expense-item_price'>$ {props.price}</div>
          </div>
        </div>
    )
}
    


export default ExcpenceItem;