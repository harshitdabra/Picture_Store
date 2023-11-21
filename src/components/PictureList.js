import React from "react";

const picturesData = [
  { id: 1, name: "Picture 1", price: 10, image: "images/picture1.jpeg" },
  { id: 2, name: "Picture 2", price: 15, image: "images/picture2.jpeg" },
  { id: 3, name: "Picture 3", price: 20, image: "images/picture3.jpeg" },
];

const PictureList = ({ onBuy }) => {
  return (
    <div className="picture-container">
      <h2>Picture Store</h2>
      {picturesData.map((picture) => (
        <div className="picture-item" key={picture.id}>
          <img
            src={process.env.PUBLIC_URL + "/" + picture.image}
            alt={picture.name}
          />
          <p>
            {picture.name} - ${picture.price}
            <button onClick={() => onBuy(picture)}>Buy</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PictureList;
