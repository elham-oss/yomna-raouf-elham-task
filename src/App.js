import "./App.css";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { Question } from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Question />
      <GameBoard questionsCount={3} />
    </div>
  );
}

export default App;
