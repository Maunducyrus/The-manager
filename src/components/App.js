import react from "react";
import './App.css';
import Contactlist from './ContactList'; 
import Header from './TempHeader';
import AddContact from "./AddContact";

// main function starts here
function App() {

  const Contacts = [
    {
      id : "1", 
      "name" : "Dipesh",
      "email" : "cyrus2024@gmail.com",
    },
    {
      id : "2", 
      "name" : "Mikesh",
      "email" : "nicks2024@gmail.com",
    },
  ];

  return (
    <div className="ui container">
<header/>
<AddContact/>
<Contactlist Contacts={Contacts}/>
    </div>
  );
}

export default App;
