import React from "react";
import { useState } from "react";
import "./NewCardForm.css";
import PropTypes from "prop-types";

const NewCardForm = ({ createNewCard }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      message: message,
      likesCount: 0,
    };

    createNewCard(newCard);
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-card-form">
        <h1 className="create-card-label">Create New Card</h1>
        <section>
          <input
            type="text"
            id="message"
            name="message"
            maxLength={40}
            onChange={handleMessageChange}
            value={message}
            required
            className="message-field"
            placeholder="Enter a message"
          ></input>
          {message.length > 39 && <p>Please limit characters to under 40.</p>}
          <div>
            <input
              type="submit"
              value="Create new Card"
              id="create-button"
            ></input>
          </div>
        </section>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  createNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;
