import React from "react";
const ContactCard = (props) => {
    return (
        <div className="item" key={contact.id}>
                    <div className="content">
                        <div className="header">{contact.name}</div>
                        <div>{contact.email}</div>
                    </div>
                    <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
                </div>)


}
        
export default ContactCard;