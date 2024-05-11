import React from "react";
const ContactList = (props) => {
    console.logs(props);
const renderContactList = props.contacts.map((contact) => {

}return(
<div classname="item">
    <div className="content">
        <div className="header">{contact.name}</div>
        <div>{contact.email}</div>
    </div>
    <i className="trash alternate outline icon"></i>
</div>
);
});
return(

    <div className="ui celled list">CONTACT LIST</div>
);
}

export default ContactList;