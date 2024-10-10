// import React from "react";
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//   console.log(props);


//   const renderContactList = props.contacts.map((contact) => {
//     return (
//       <ContactCard contact={contact}/>
//     );
//   });
//   return <div className="ui celled list">{renderContactList}</div>;
// };

// export default ContactList;


import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // Check if props.contacts exists and is an array
  if (!props.contacts || props.contacts.length === 0) {
    return <div>No contacts available</div>; // Fallback if no contacts are passed
  }

  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id); 
  };
  // If contacts are available, render them

  const renderContactList = props.Contacts.map((contact, index) => {
    return ( <ContactCard key={index} 
    contact={contact} 
    clickHandler={deleteContactHandler} 
    Key={contact.id}  />
    );
  }
);

const getSearchTerm = () => {
  props.searchkeyword(inputEl.current.valueOf);
}

  return (
    <div class="main">
      <h2>Contact List
        <Link to="/add"> 
               <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>

      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onchange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
  <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts Available"}</div>
  </div>
);
};

export default ContactList;
