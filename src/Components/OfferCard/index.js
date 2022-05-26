import React from "react";

function Card({ offerOne }) {
  console.log(offerOne);
  return (
    <div>
      <img src={offerOne.ImagePath} alt="photo" />
      <h3>Firma Adı:{offerOne.FirmName}</h3>
      <p>cash:{offerOne.Cash}</p>
      <h5>{offerOne.ProductDesc}</h5>
    </div>
  );
}

export default Card;
