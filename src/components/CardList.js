import React from "react";
import Card from "./Card";
import "./CardList.css";
import PropTypes from "prop-types";

const CardList = ({
  selectedBoard,
  onUpdateLikes,
  selectedCardsData,
  onDeleteCard,
  onUpdateCardMessage,
}) => {
  return (
    <div>
      {selectedCardsData.length !== 0 && (
        <h2 className="cards-for-label">Cards for {selectedBoard.title}</h2>
      )}
      {selectedCardsData.length === 0 && (
        <h2 className="cards-for-label">
          Please add a card to {selectedBoard.title}
        </h2>
      )}
      <section className="card-list">
        {selectedCardsData.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              likesCount={card.likesCount}
              message={card.message}
              onUpdateLikes={onUpdateLikes}
              onDeleteCard={onDeleteCard}
              onUpdateCardMessage={onUpdateCardMessage}
            />
          );
        })}
      </section>
    </div>
  );
};

CardList.propTypes = {
  selectedCardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      likesCount: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedBoard: PropTypes.object.isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onUpdateCardMessage: PropTypes.func.isRequired,
};

export default CardList;
