import react, {useState} from "react";
import './App.css';
import Contactlist from './ContactList'; 
import AddContact from "./AddContact";
import TempHeader from "./TempHeader";

// main function starts here
function App() {
const [Contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact);
}
  return (
    <div className="ui container">
<TempHeader/>
<AddContact addContactHandler={addContactHandler}/>
{/* <ContactCard/> */}
<Contactlist Contacts={Contacts}/>
    </div>
  );
}

export default App;
