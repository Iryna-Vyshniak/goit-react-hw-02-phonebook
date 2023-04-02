import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPersonXFill } from 'react-icons/bs';
import { Btn, Item, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  //console.log(contacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Btn type="button" onClick={() => onDelete(id)}>
              <BsFillPersonXFill size="16" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
