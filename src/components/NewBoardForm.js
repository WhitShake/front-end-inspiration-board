import React from "react";
import { useState } from "react";
import "./NewBoardForm.css";
import PropTypes from "prop-types";

const NewBoardForm = ({ onBoardSubmit, selectedBoardId }) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("dog");
  const [customImage, setCustomImage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleCustomerImage = (event) => {
    setCustomImage(event.target.value);
  };

  const handleVisibilityButton = (event) => {
    event.preventDefault();
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBoard = {
      title: title,
      owner: owner,
      cards: [],
      image: selectedImage === "custom" ? customImage : selectedImage,
    };

    onBoardSubmit(newBoard);
    setTitle("");
    setOwner("");
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const isSelectedBoardVisible =
    selectedBoardId === null ? "visible" : "hidden";

  return (
    <div>
      {!isBoardFormVisible && (
        <button
          onClick={handleVisibilityButton}
          className={`visibility-button ${isSelectedBoardVisible}`}
          id="create-button"
        >
          Create New Board
        </button>
      )}
      <form
        className={`visibility-button ${
          isBoardFormVisible ? "visible" : "hidden"
        }`}
        onSubmit={handleSubmit}
      >
        <section className="board-form">
          <div className="card-form-inputs">
            <div className="title-owner">
              <input
                type="text"
                maxLength={40}
                id="title"
                name="title"
                onChange={handleTitleChange}
                value={title}
                required
                className="form-field"
                placeholder="Enter Board Title"
              ></input>
              {title.length > 39 && <p>Please limit characters to under 40.</p>}
              <input
                type="text"
                maxLength={40}
                id="owner"
                name="owner"
                onChange={handleOwnerChange}
                value={owner}
                required
                className="form-field"
                placeholder="Enter Your Name"
              ></input>
              {owner.length > 39 && <p>Please limit characters to under 40.</p>}
            </div>
            <div className="image-selector">
              <label htmlFor="image">Choose an image:</label>
              <select
                name="images"
                id="images"
                onChange={handleImageSelect}
                className="image-form-field"
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="sloth">Sloth</option>
                <option value="redPanda">Red Panda</option>
                <option value="sailorMoon">Sailor Moon</option>
                <option value="custom">Custom</option>
              </select>
              {selectedImage === "custom" && (
                <div>
                  <label htmlFor="custom">Image Url:</label>
                  <input
                    type="text"
                    id="custom"
                    name="custom"
                    onChange={handleCustomerImage}
                    value={customImage}
                    required
                  ></input>
                </div>
              )}
            </div>
            {/* <div> */}
            {/* <p> */}
            {/* Preview: {title} - {owner} */}
            {/* </p> */}
            {/* </div> */}
            <input
              type="submit"
              value="Add a Board"
              // onClick={handleVisibilityButton}
              id="create-button"
            ></input>
          </div>
        </section>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  selectedBoardId: PropTypes.number,
  onBoardSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;
