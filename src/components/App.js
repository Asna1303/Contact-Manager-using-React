import React from 'react';
import './App.css'; 
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const contacts = [
    {
      id="1",
      "name":"kuttan",
      "email":"kuttan@gmail.com"
    },
    {
      id="2",
      "name":"anna",
      "email":"anna@gmail.com"
    },
    {
      id="3",
      "name":"achu",
      "email":"achu@gmail.com"
    }
  ]
  return (
    <div classname="ui container">
      <Header/>
     <AddContact/>
      <ContactList/>
    </div>
  );
}

export default App;