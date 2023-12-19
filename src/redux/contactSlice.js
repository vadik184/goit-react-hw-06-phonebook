import { createSlice } from '@reduxjs/toolkit';
import { formatName, formatPhoneNumber } from 'helpers/script';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const formattedContact = {
        id: nanoid(),
        name: name.split(' ').map(formatName).join(' '),
        number: formatPhoneNumber(number),
      };
      state.contacts = [...state.contacts, formattedContact];
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
