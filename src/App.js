import logo from './logo.svg';
import './App.css';
import ExcpenceItem from './components/ExpenceItem';
function App() {
  const expenses=[
    {
      id:'e1',
      title:'Toilet Paper',
      price:94.12,
      date:new Date(2022,01,14),
    },
    {
      id:'e2',
      title:'New Tv',
      price:799.49,
      date:new Date(2022,01,10),
    },
    {
      id:'e3',
      title:'Car Insuance',
      price:294.67,
      date:new Date(2022,01,11),
    },
    {
      id:'e4',
      title:'New Desk (Wooden)',
      price:1007.97,
      date:new Date(2022,01,14),
    }
  ]
  return (
   <div>
     <h1>Hi Developer!</h1>
     <Expenses items={expenses}/>
    
   </div>
  );
}

export default App;
