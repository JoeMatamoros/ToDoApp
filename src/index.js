 import React from 'react';
 import ReactDOM from 'react-dom';
//  import { CounterApp } from './components/01-useState/CounterApp';
//  import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//  import { SimpleForm } from './components/02-useEffect/SimpleForm';
//  import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { TodoApp } from './components/08-useReducer/TodoApp';
 //import { HookApp } from './HookApp';

 ReactDOM.render(
     <TodoApp />,
   document.getElementById('root')
 );

