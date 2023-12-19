import { useDispatch } from 'react-redux';
import {
  StyledDeletButton,
  StyledListItem,
  StyledListItemText,
} from 'components/ContactList/ContactListStyle';
import { deleteContact } from '../../redux/contactSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <StyledListItem key={contact.id}>
      <StyledListItemText>
        {contact.name}: {contact.number}
      </StyledListItemText>
      <StyledDeletButton
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </StyledDeletButton>
    </StyledListItem>
  );
};
