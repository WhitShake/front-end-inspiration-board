import React from "react";
import "./Board.css";
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

const Board = ({
  boardId,
  title,
  owner,
  image,
  onBoardSelect,
  onDeleteBoard,
}) => {
  const preSelected = images.hasOwnProperty(image);

  const handleBoardSelect = () => {
    onBoardSelect(boardId);
  };

  const handleDeleteCard = () => {
    onDeleteBoard(boardId);
  };

  return (
    <section>
      <li onClick={handleBoardSelect} className="polaroid">
        <img
          src={preSelected ? images[image] : image}
          alt="Animal"
          className="dog-image"
        />
        <figcaption>
          <div className="board-label">
            {title} - {owner}
          </div>
        </figcaption>
        <button
          className="board-delete-button"
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteCard();
          }}
        >
          🗑️
        </button>
      </li>
    </section>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onBoardSelect: PropTypes.func.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
};

export default Board;
