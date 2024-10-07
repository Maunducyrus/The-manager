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


import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // Check if props.contacts exists and is an array
  if (!props.contacts || props.contacts.length === 0) {
    return <div>No contacts available</div>; // Fallback if no contacts are passed
  }

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  // If contacts are available, render them
  const renderContactList = props.contacts.map((contact, index) => {
    return <ContactCard key={index} contact={contact} clickHandler={deleteContactHandler} Key={contact.id}  />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
