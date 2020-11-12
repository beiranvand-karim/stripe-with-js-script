import React, { useEffect } from "react";
export const cardStyle = {
  base: {
    color: "#32325d",
    fontSmoothing: "antialiased",
    fontSize: "14px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

function App() {
  const loadIt = async () => {
    const stripe = await window.Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

    const elements = stripe.elements();

    const cardElement = elements.create("card", {
      hidePostalCode: true,
      style: cardStyle
    });
    cardElement.mount("#card-element");
  };

  useEffect(() => {
    loadIt();
  }, []);

  return (
    <div>
      <div id="card-element" />
      Stripe.js module
    </div>
  );
}

export default App;
