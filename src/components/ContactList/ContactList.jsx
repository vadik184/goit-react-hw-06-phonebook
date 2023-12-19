import { useSelector } from 'react-redux';

import { ContactListItem } from 'components/Contacts/Contacts';
import { StyledList } from './ContactListStyle';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.filter.filter;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterContacts = getFilteredContacts();

  return (
    <StyledList>
      {filterContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </StyledList>
  );
};
