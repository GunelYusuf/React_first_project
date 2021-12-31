import logo from './logo.svg';
import './App.css';
import ExcpenceItem from './components/ExpenceItem';
function App() {
  return (
   <div>
     <h1>Hi Developer!</h1>
     <ExcpenceItem 
     title={expenses[0].title}
     price={expenses[0].price}
     date={expenses[0].date}
     />

     <ExcpenceItem 
     title={expenses[1].title}
     price={expenses[1].price}
     date={expenses[1].date}
     />

     <ExcpenceItem 
     title={expenses[2].title}
     price={expenses[2].price}
     date={expenses[2].date}
     />

     <ExcpenceItem 
     title={expenses[3].title}
     price={expenses[3].price}
     date={expenses[3].date}
     />
       
    
   </div>
  );
}

export default App;
