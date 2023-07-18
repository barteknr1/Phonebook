import { selectContacts, selectFilter } from "../../redux/contacts/selectors"
import { useSelector } from "react-redux";
import css from './ContactsBar.module.css'

const ContactsBar = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    const isAnyContactSaved = contacts.length > 0;
    return (
        <>
            {isAnyContactSaved && filter &&
                <div className={css.progressWrapper}>
                    <h3>Found {filteredContacts.length} of {contacts.length} contacts</h3>
                    <progress value={filteredContacts.length} max={contacts.length} />
                </div>}
        </>
    )
}

export default ContactsBar