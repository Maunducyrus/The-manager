import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import api from "../api/contacts";
import './App.css';
import ContactList from './ContactList'; 
import AddContact from "./AddContact";  
import TempHeader from "./TempHeader";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [Contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request);
    setContacts([...Contacts, response.data]);
  };

  const updateContactHandler = async (updatedContact) => {
    const response = await api.put(`/contacts/${updatedContact.id}`, updatedContact);
    const updatedContacts = Contacts.map((contact) =>
      contact.id === updatedContact.id ? response.data : contact
    );
    setContacts(updatedContacts);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = Contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = Contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(Contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
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
        <Routes>
          <Route 
            path="/" 
            exact 
            element={
              <ContactList
                Contacts={searchTerm.length < 1 ? Contacts : searchResults} 
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddContact addContactHandler={addContactHandler} />} 
          />
          <Route 
            path="/edit" 
            element={<EditContact updateContactHandler={updateContactHandler} />} 
          />
          <Route 
            path="/contact/:id" 
            element={<ContactDetail />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
