import React from "react";
import "./SelectedBoard.css";
import cat from "../Assets/cat.avif";
import dog from "../Assets/dog.jpg";
import redPanda from "../Assets/red-panda.jpg";
import sailorMoon from "../Assets/sailor-moon-anime.gif";
import sloth from "../Assets/sloth.avif";
import PropTypes from "prop-types";

const images = {
  cat,
  dog,
  sloth,
  redPanda,
  sailorMoon,
};

const SelectedBoard = ({ selectedBoard, clearSelectedBoard }) => {
  const preSelected = images.hasOwnProperty(selectedBoard.image);

  const handleClearSelectedBoard = () => {
    clearSelectedBoard();
  };

  return (
    <section>
      <li className="selected-polaroid">
        <img
          src={preSelected ? images[selectedBoard.image] : selectedBoard.image}
          alt="Animal"
          className="dog-image"
        />
        <figcaption>
          <div className="selected-board-label">
            {selectedBoard.title} - {selectedBoard.owner}
          </div>
        </figcaption>
      </li>
      <button className="x-button" onClick={handleClearSelectedBoard}>
        X
      </button>
    </section>
  );
};

SelectedBoard.propTypes = {
  selectedBoard: PropTypes.object.isRequired,
  clearSelectedBoard: PropTypes.func.isRequired,
};

export default SelectedBoard;
