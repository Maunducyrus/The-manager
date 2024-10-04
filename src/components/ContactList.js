// import React from "react";
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//     console.log(props);

//     const renderContactList = props.contacts.map((contact) => {
//         return (
//            <ContactCard contact={contact}></ContactCard>
//         );
//     })
//     return (
// <div className="ui celled list">
//     {renderContactList }
// </div>
//     );
// };


// export default ContactList;


import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // Ensure props.contacts has a default empty array if it's undefined
    const contacts = props.contacts || [];

    const renderContactList = contacts.map((contact) => {
        return (
           <ContactCard key={contact.id} contact={contact} />
        );
    });

    return (
        <div className="ui celled list">
            {renderContactList.length > 0 ? renderContactList : <p>Add new contacts here</p>}
        </div>
    );
};

export default ContactList;
