import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li className={s.contactListItem} key={contact.id}>
          <div className={s.contactWrapper}>
            <div className={s.iconContainer}>
              <IoMdContact />
              <FaPhone />
            </div>

            <Contact name={contact.name} number={contact.number} />

            <button
              className={s.contactListBtn}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
