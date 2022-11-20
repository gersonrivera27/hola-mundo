import React from 'react';
import { Contact} from '../../models/contact.class'
import ContactComponent from '../pure/task';


const ContactListComponent = () => {

    

    const  defaultContact = new Contact ('Gerson', 'Hernandez','gersonrivera02@hotmail.com',true);

    




    return (
        <div>
           <div>
            <h1>Contactos:</h1>
           </div>
           <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
