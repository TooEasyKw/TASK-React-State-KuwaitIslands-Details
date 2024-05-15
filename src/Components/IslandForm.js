import React, { useState } from "react";

export default function IslandForm({ island, updateIsland }) {
  const [type, setType] = useState("");
  const [pets, setPets] = useState("");
  const bookClick = () => {
    if (
      window.confirm(
        "Are you sure you want to book to " +
          island.name +
          " with the Name: " +
          type +
          " , phone: " +
          pets
      )
    ) {
      updateIsland(island.id);
      alert("Trip to " + island.name + " booked successfully!");
    }
  };
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        onChange={(event) => setType(event.target.value)}
      />
      <input
        type="tel"
        placeholder="Type Phone Number"
        onChange={(event) => setPets(event.target.value)}
      />
      <button className="book" onClick={bookClick}>
        Book for today!
      </button>
    </div>
  );
}
