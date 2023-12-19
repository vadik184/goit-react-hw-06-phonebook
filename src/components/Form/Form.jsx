import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import {
  StyledButton,
  StyledFormIput,
  StyledFormLabel,
  StyledForm,
} from 'components/Form/FormStyle';
const getContacts = state => state.contacts.contacts;

export const Form = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isAdded) {
      Notify.warning(`${name}: is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
      return;
    }
    dispatch(addContact({ id: nanoid(), name: name, number: number }));

    resetForm();
  };

  const hendleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormLabel>
        {' '}
        Name
        <StyledFormIput
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          onChange={hendleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </StyledFormLabel>
      <StyledFormLabel>
        Number
        <StyledFormIput
          type="tel"
          name="number"
          value={number}
          onChange={hendleChange}
          placeholder="Enter 7-digit number"
          pattern="[0-9]{7}"
          required
        />
      </StyledFormLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
