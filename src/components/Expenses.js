import ExcpenceItem from "./ExpenceItem";
import "./Expenses.css";

function Expenses(props) {
  return (
   <div className="expenses">
     <h1>Hi Developer!</h1>
     <ExcpenceItem 
     title={props.items[0].title}
     price={props.items[0].price}
     date={props.items[0].date}
     />

     <ExcpenceItem 
     title={props.items[1].title}
     price={props.items[1].price}
     date={props.items[1].date}
     />

     <ExcpenceItem 
     title={props.items[2].title}
     price={props.items[2].price}
     date={props.items[2].date}
     />

     <ExcpenceItem 
     title={props.items[3].title}
     price={props.items[3].price}
     date={props.items[3].date}
     />
       
    
   </div>
  );
}