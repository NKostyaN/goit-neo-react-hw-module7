import css from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length === 0 ? (
        <p>Tere is no contacts yet, try to add some</p>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map((el) => {
            return (
              <li key={el.id}>
                <ContactListItem item={el} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
