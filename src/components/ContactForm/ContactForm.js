import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

import uuid from "react-uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={s.form}>
        <label>
          Name:
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="enter name"
            onChange={this.changeHandler}
          />
        </label>

        <label>
          Number:
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            placeholder="enter number"
            onChange={this.changeHandler}
          />
        </label>
        <button type="submit" disabled={!name.length || !number.length}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
