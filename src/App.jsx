import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./constants/questions";

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const selectVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          questions={questions}
          selectVariant={selectVariant}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
};

export default App;
