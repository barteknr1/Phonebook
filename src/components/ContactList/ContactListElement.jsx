import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortedFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactListElement = () => {
  const sortedFilteredContacts = useSelector(selectSortedFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  return (
    <>
      {
        sortedFilteredContacts.map(({ id, name, number }) =>
          <li key={id} className={css.contactElement}>
            <p>{name}:</p>
            <a href={"tel:"+{number}}>{number}</a>
            <button className={css.delete} onClick={() => handleDelete(id)} id={id} type='button'>Delete</button>
          </li>
        )
      }
    </>
  )
}

export default ContactListElement