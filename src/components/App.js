import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { uuid } from "uuidv44";
import './App.css';
import Contactlist from './ContactList'; 
import AddContact from "./AddContact";  
import TempHeader from "./TempHeader";

// main function starts here
function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
const [Contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...Contacts, {id: uuid(), ...Contacts}]);
};

const removeContactHandler = (id) => {
  const newContactList = Contacts.filter((contact) => {
return contact.id !== id;
  });

  setContacts(newContactList);
};

useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retrieveContacts) setContacts(retrieveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts));
}, [Contacts]);

  return (
    <div className="ui container">
      <Router>
      <TempHeader/>
      <Switch>
        <Route path="/"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        exact 
        render={(props)  => (<AddContact{...props}/>)}
         />
      <Route path="/add" component={() => 
      <AddContact addContactHandler={addContactHandler}/>} />
      </Switch>
      

{/* <AddContact addContactHandler={addContactHandler}/> */}
{/* <ContactCard/> */}
{/* <Contactlist Contacts={Contacts} getContactId={removeContactHandler}/>   */}
      </Router>

    </div>
  );
}

export default App;
