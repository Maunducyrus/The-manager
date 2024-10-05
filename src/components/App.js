import react, {useState} from "react";
import './App.css';
import Contactlist from './ContactList'; 
import AddContact from "./AddContact";
import TempHeader from "./TempHeader";

// main function starts here
function App() {
const [Contacts, setContacts] = useState([]);
  return (
    <div className="ui container">
<TempHeader/>
<AddContact/>
{/* <ContactCard/> */}
<Contactlist Contacts={Contacts}/>
    </div>
  );
}

export default App;
