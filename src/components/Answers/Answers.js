import "./Answers.css"
import { AnswerOption } from '../AnswerOption/AnswerOption'

const Answers = () => {
    return (
      <div className="Answers">
        <div className="Answers__container">
          <AnswerOption option="خطأ" />
          <AnswerOption option="صح" />
        </div>
      </div>
    );
}

export  {Answers}
