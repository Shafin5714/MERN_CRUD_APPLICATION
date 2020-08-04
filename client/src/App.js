import React from 'react';
import './App.css';
import Header from "./components/Header";
import ItemInput from "./components/ItemInput";
import ItemList from "./components/ItemList";
// Redux
import { Provider } from "react-redux";
import store from "./store";
function App() {


  return (
    <Provider store={store}>
    <div className="App">
       <Header/>
       <ItemInput/>
       <ItemList/>
       
    </div>
    </Provider>
  );
 
}

export default App;
