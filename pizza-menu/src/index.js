import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaobj }) {
  console.log(pizzaobj);

  //   if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  //   const style = {
  //     color: "red",
  //     fontSize: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numpizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;
  console.log(isopen);

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We are currently open!");
  //   } else {
  //     alert("We are currently closed!");
  //   }

  return (
    <footer className="footer">
      {isopen ? (
        <RestaurantOpen closeHour={closeHour} />
      ) : (
        <RestaurantClosed openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We are currently open!");
}

function RestaurantOpen({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Please visit us or order online!!</p>
      <button className="btn">Order Online</button>"
    </div>
  );
}

function RestaurantClosed({ closeHour, openHour }) {
  return (
    <p>
      We are closed right now, please come back between {openHour}:00 and{" "}
      {closeHour}:00{" "}
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
