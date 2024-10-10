import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { uuid } from "uuidv44";
import api from "../api/contacts";
import './App.css';
import Contactlist from './ContactList'; 
import AddContact from "./AddContact";  
import TempHeader from "./TempHeader";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

// main function starts here
function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
const [Contacts, setContacts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchresults, setSearchResults] = useState([]);

//retrieveContacts
const retrieveContacts = aysnc () => {
  const response = await api.get("/contacts")
  return response.data;
};

const addContactHandler = (contact) => {
  console.log(contact);
  const request = {
    id: uuid(),
    ...contact
  }

  const response = await api.post("/contacts", request)
  console.log(response);
  setContacts([...Contacts, response.data]);

  const updateContactHandler = () =>{};

};

const removeContactHandler = async (id) => {
  await api.delete("/contacts/${id}");
  const newContactList = Contacts.filter((contact) => {
return contact.id !== id;
  });

  setContacts(newContactList);
};

const searchHandler = (searchTerm) => {
setSearchTerm(searchTerm);
if (searchTerm !=="") {
  const newContactList = Contacts.filter((contact) => {
    return
    Object.values(contact).join("").toLowerCase().includes (searchTerm.toLowerCase())
  });
  setSearchResults(newContactList);
} else {
  setSearchResults(Contacts);
}
}

useEffect(() => {
  // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // if (retrieveContacts) setContacts(retrieveContacts);

  const getAllContacts = async () => {
    const allContacts = await retrieveContacts(),
    if (allContacts) setContacts(allContacts);
  };

  getAllContacts();
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
        render={(props)  => 
          (<Contactlist{...props}
            Contacts={ searchTerm.length < 1 ? Contacts : searchresults} 
            getContactId={removeContactHandler}
            term ={searchTerm}
            searchkeyword = { }
            />)}
         />
      <Route path="/add" 
      render={(props) => 
      <AddContact {...props} addContactHandler={addContactHandler}/>} />

<Route path="/edit" 
      render={(props) => 
      <EditContact {...props} updateContactHandler={updateContactHandler}/>} />

      <Route path="/contact/:id" component={ContactDetail} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;
