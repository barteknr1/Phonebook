import ContactForm from "../../components/contactForm/ContactForm"
import Filter from "../../components/filter/Filter";
import ContactsBar from "../../components/contactsBar/ContactsBar";
import ContactList from "../../components/contactList/ContactList";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { Helmet, HelmetProvider } from "react-helmet-async";
import css from './Contacts.module.css'

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.contacts}>
            <HelmetProvider>
                <Helmet>
                    <title>Phonebook</title>
                </Helmet>
            </HelmetProvider>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactsBar />
            {isLoading && !error ? (
                <p>Loading contacts...</p>
            ) : (
                < ContactList />)}
        </div>
    )
}

export default Contacts