import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledContainer } from './AppStyle';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <StyledContainer>
        <Section title="Phonebook">
          <Form />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </StyledContainer>
    </>
  );
};
