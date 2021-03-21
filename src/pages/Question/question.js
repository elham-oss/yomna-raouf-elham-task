import {useEffect} from 'react';
import { Answers } from "../../components/Answers/Answers";
import { GameBoard } from "../../components/GameBoard/GameBoard";
import { Question } from "../../components/Question/Question";
import "./question.css";
import questionsData from "../../questions.json";

const question = () => {
console.log(questionsData)
  return (
    <div>
      <Question  />
      <GameBoard questionsCount={questionsData["Questions"].length} />
      <Answers />
    </div>
  );
};

export { question };
