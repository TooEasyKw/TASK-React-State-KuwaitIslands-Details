import React, { useEffect } from "react";

export default function Island({
  island,
  setIsland,
  islandsList,
  updateIsland,
}) {
  const petIsland = () => {
    setIsland(island);
    updateIsland(island.id);
  };
  useEffect(() => {
    console.log("Count for " + island.name + ": " + island.visitors);
  }, [island.visitors]);
  return (
    <div className="Island" onClick={petIsland}>
      <h3>{island.name}</h3>
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
