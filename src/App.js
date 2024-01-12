import './style.css';
import {interviews} from "./interviews";
import {useState} from "react";
import Button from "./components/button/Button";

function App() {
  const [ready, setReady] = useState(true);
  const [interview, setInterview] = useState(interviews[0]);
  const onClickHandler = () => {
    setReady(!ready);
    const randomInterviewIndex = Math.floor(Math.random() * interviews.length);
    console.log(randomInterviewIndex);
    setInterview(interviews[randomInterviewIndex]);
  };
  return (
      <div className="App">
        <div className="container">
          {ready ? <div className="welcome">
                <p className="title">
                  Java Interview
                </p>
                <p className="descrition">
                  Are you ready?
                </p>
                <Button className="button" onClick={onClickHandler} text={"YES"}/>
              </div> :
              <div className="interview">
                <h2>
                  {interview?.level}
                </h2>
                <div>
                  {interview?.groups?.map((group, key) => <span key={key} className="group">
              <h3>{group?.name}</h3>
                        {group?.questions?.map(
                            (question, key) => <p key={key} className="question">{(key + 1) + '. ' + question}</p>)}
            </span>
                  )}
                </div>
                <Button className="button again-button" onClick={onClickHandler} text={"AGAIN"}/>
              </div>}
        </div>
      </div>
  );
}

export default App;
