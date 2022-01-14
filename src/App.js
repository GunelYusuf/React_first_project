import React from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App=() => {
  // const paragraph=document.createElement('p');
  // paragraph.textContent('Hi Gunel');
  // document.getElementById('root').append(paragraph);
  const expenses=[
    {
      id:'e1',
      title:'Toilet Paper',
      price:94.12,
      date:new Date('2021-5-12'),
    },
    {
      id:'e2',
      title:'New Tv',
      price:799.49,
      date:new Date('2020-10-10')
    },
    {
      id:'e3',
      title:'Car Insuance',
      price:294.67,
      date:new Date('2020-01-11'),
    },
    {
      id:'e4',
      title:'New Desk (Wooden)',
      price:1007.97,
      date:new Date('2021,01,14'),
    },
  ];
  // return React.createElement('div',
  // {},
  // React.createElement('h1',{},'Hi Software Developer'),
  // React.createElement(Expenses, {items:expenses}))
  // ;
  return (
   <div>
     <NewExpense/>
     <Expenses items={expenses}/>
   </div>
  );
}

export default App;
