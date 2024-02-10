import React from 'react';
import './Main.css';

// Sample data for weekly specials
const weeklySpecials = [
  {
    name: "Greek Salad",
    description: "Fresh salad with tomatoes, cucumbers, red onions, feta cheese, olives, and Greek dressing.",
    price: "$8.99",
    image: require('./assets/greek salad.jpg'), // Import and set the image path
  },
  {
    name: "Bruchetta",
    description: "Toasted bread topped with diced tomatoes, garlic, basil, and balsamic glaze.",
    price: "$6.99",
    image: require('./assets/bruchetta.svg').default, // Import and set the image path
  },
  {
    name: "Lemon Dessert",
    description: "Delicious lemon-flavored dessert with a light and refreshing taste.",
    price: "$5.99",
    image: require('./assets/lemon dessert.jpg'), // Import and set the image path
  },
];

function Main() {
  return (
    <main>
      <section id="home">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Located at XYZ Street, City, The Little Lemon offers a variety of fresh and delicious food options, including salads, sandwiches, and smoothies.</p>
            <button className="reserve-table-btn" onClick={() => window.location.href = '/reserve-table'}>
              Reserve a Table
            </button>
          </div>
          <img src={require('./assets/Mario and Adrian A.jpg')} alt="Restaurant Image" />
        </div>
      </section>

      <section id="highlights">
        <h1>Weekly Specials</h1>
        <div className="highlights-container">
          {weeklySpecials.map((dish, index) => (
            <div className="dish-card" key={index}>
              <img src={dish.image} alt={dish.name} />
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              <p>Price: {dish.price}</p>
              {/* Add a link to another screen for more details */}
              <button className="more-details-btn" onClick={() => window.location.href = `/dish/${index}`}>
                More Details
              </button>
            </div>
          ))}
        </div>
        {/* Button for ordering online */}
        <button className="order-online-btn" onClick={() => window.location.href = '/order-online'}>
          Order Online
        </button>
      </section>

      <section id="testimonials" style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
        <h1>Testimonials</h1>
        <div className="testimonials-container">
          {/* Placeholder for reviews */}
          <div className="testimonial-card">
            <h3>User1</h3>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            <p>Review: Great food, will definitely come back!</p>
          </div>
          <div className="testimonial-card">
            <h3>User2</h3>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>Review: Enjoyed the atmosphere, but food was a bit pricey.</p>
          </div>
          {/* Add more placeholder reviews as needed */}
        </div>
      </section>

      <section id="about" style={{ padding: "20px" }}>
        <div className="about-content">
          <div className="about-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>This section will contain information about the Little Lemon. Stay tuned for updates!</p>
          </div>
          <div className="about-images">
            <div className="about-image">
              <img src={require('./assets/restaurant.jpg')} alt="Restaurant Image 1" />
            </div>
            <div className="about-image">
              <img src={require('./assets/restaurant chef B.jpg')} alt="Restaurant Image 2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
