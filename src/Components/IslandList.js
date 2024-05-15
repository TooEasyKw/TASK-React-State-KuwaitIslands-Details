import { useState } from "react";
import islands from "../data/islands";
import Island from "./Island";

export default function IslandList({ setIsland, islandsList, updateIsland }) {
  const [query, setQuery] = useState("");

  let islandsArray = islandsList
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => (
      <Island
        island={island}
        setIsland={setIsland}
        islandsList={islandsList}
        updateIsland={updateIsland}
      />
    ));
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
