import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre : { contact.name }
            </h2>

            <h3>
                Apellido : { contact.lastName }
            </h3>
            <h4>
                Email : { contact.email }
            </h4>
            <h5>
             Disponibilidad : { contact.conected ? 'Contacto en linea':'Contacto no disponible' }
            </h5> 
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
