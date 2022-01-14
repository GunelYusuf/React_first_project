import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css'
import Card from '../Card';
function ExcpenceItem(props) {
     return(
       <Card className='expense-item'>
         <ExpenceDate date={props.date}/>
        <div className='expense-item__description'><br />
            <h2>{props.title}</h2>
            <div className='expense-item__price'>$ {props.price}</div>
          </div>
        </Card>
    );
}
    


export default ExcpenceItem;