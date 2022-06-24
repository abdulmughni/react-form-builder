import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import MainComponent from "../ContentArea/MainComponent";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MainComponent />
    </DndProvider>
  );
}

export default App;
