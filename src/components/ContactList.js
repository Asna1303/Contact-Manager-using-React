import React from "react";
const ContactList = (props) => {
    console.logs(props);
const renderContactList = props.contacts.map((contact) => {

}return(
<div classname="item">
    <div className="content">
        <div classname="header"></div>
    </div>
</div>
);
});
return(

    <div className="ui celled list">CONTACT LIST</div>
);
}

export default ContactList;