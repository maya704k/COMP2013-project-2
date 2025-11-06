import "./App.css";
import colors from "./data/data.js";
import ColorBoxesContainer from "./components/ColorBoxesContainer";

export default function App(){
  return (
    <div className="main">
      <ColorBoxesContainer colors={colors}/>
    </div>
  );
}