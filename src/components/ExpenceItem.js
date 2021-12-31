import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate';

function ExcpenceItem(props) {

     return(
       <div className='expense-item'>
         <ExpenceDate></ExpenceDate>
          <div className='expense-item_description'><br />
            <h2>{props.title}</h2>
            <div className='expense-item_price'>$ {props.price}</div>
          </div>
        </div>
    )
}
    


export default ExcpenceItem;