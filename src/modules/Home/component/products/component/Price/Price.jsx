import React from "react";
import "./Price.scss";

export function FormatNumber({ price }) {
  return price?.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
}

export default function Price(props) {
  const { price, price_sale } = props;

  return (
    <div className="price">
      <span className="price__noSale">
        <FormatNumber price={price} />
      </span>

      {price_sale > 0 ? (
        <del className="price__sale">
          <FormatNumber price={price_sale} />
        </del>
      ) : (
        ""
      )}
    </div>
  );
}
