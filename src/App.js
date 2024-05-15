import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
  const [island, setIsland] = useState(islands[1]);
  const [islandsList, setIslandsList] = useState(islands);

  const updateIsland = (id) => {
    const newIslands = islandsList.map((island) => {
      if (island.id === id) {
        return { ...island, visitors: island.visitors + 1 };
      }
      return island;
    });
    setIslandsList(newIslands);
    const newIsland = newIslands.find((x) => x.id === id);
    setIsland(newIsland);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islandsList={islandsList} />
        <IslandForm island={island} updateIsland={updateIsland} />
      </div>
    </div>
  );
}

export default App;
