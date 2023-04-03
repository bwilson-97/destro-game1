import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [userName, setUserName] = useState("");
  const [randomNames, setRandomNames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  function handleStart() {
    setShowModal(true);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setUserName(event.target.elements.userName.value);
    setShowModal(false);
    setShowOptions(true);
    setUserChoice("");
    setComputerChoice("");
    setRandomNames(generateRandomNames());
  }

  function generateRandomNames() {
    const names = [
      "Alice",
      "Bob",
      "Charlie",
      "Dave",
      "Eve",
      "Frank",
      "Grace",
      "Heidi",
      "Ivan",
      "Judy",
      "Kelly",
      "Liam",
      "Mia",
      "Noah",
      "Olivia",
      "Peter",
      "Quinn",
      "Ryan",
      "Samantha",
      "Tom",
      "Ursula",
      "Victoria",
      "Wendy",
      "Xavier",
      "Yara",
      "Zach",
    ];
    const randomNames = [];
    while (randomNames.length < 7) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];
      if (!randomNames.includes(randomName)) {
        randomNames.push(randomName);
      }
    }
    return randomNames;
  }

  function handleOptionClick(option) {
    setUserChoice(option);

    const computerOption = Math.floor(Math.random() * 3) + 1;
    switch (computerOption) {
      case 1:
        setComputerChoice("ROCK");
        break;
      case 2:
        setComputerChoice("PAPER");
        break;
      case 3:
        setComputerChoice("SCISSORS");
        break;
      default:
        break;
    }
  }

  function gameResult() {
    if (userChoice === computerChoice) {
      return <h3 className="GameResult">It's a tie!</h3>;
    } else if (
      (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (userChoice === "PAPER" && computerChoice === "ROCK") ||
      (userChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      return <h3 className="GameResult win">You win!</h3>;
    } else {
      return <h3 className="GameResult lose">Computer wins!</h3>;
    }
  }

  return (
    <div className="App">
      <header className="Header">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="MainContent">
        <main className="MainContainer">
          <h1>
            Welcome{" "}
            {userName ? `${userName} to my React App!` : "to my React App!"}
          </h1>
          <p>This is the home page.</p>
          {!showOptions && (
            <button className="StartButton" onClick={handleStart}>
              START GAME
            </button>
          )}
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            contentLabel="Enter your name"
            className="Modal"
          >
            <form onSubmit={handleFormSubmit}>
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title"></div>
                  <div className="modal-body">
                    <label>
                      Enter your name:
                      <br></br>
                      <textarea
                        name="userName"
                        style={{ resize: "none", height: "50px" }}
                      />
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setShowModal(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Modal>
          {showOptions && (
            <div>
              <button
                className="OptionButton"
                onClick={() => handleOptionClick("ROCK")}
              >
                ROCK
              </button>
              <button
                className="OptionButton"
                onClick={() => handleOptionClick("PAPER")}
              >
                PAPER
              </button>
              <button
                className="OptionButton"
                onClick={() => handleOptionClick("SCISSORS")}
              >
                SCISSORS
              </button>
              {userChoice && (
                <div>
                  <h2>You chose {userChoice}</h2>
                  {computerChoice && (
                    <div>
                      <h2>The computer chose {computerChoice}</h2>
                      <h3>{gameResult()}</h3>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </main>
        <main className="bracketContainer">
          <div className="bracket">
            <section className="round quarterfinals">
              <div className="winners">
                <div className="matchups">
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant winner">
                        <span>{userName}</span>
                      </div>
                      <div className="participant">
                        <span>{randomNames[6]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant">
                        <span>{randomNames[0]}</span>
                      </div>
                      <div className="participant winner">
                        <span>{randomNames[5]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connector">
                  <div className="merger"></div>
                  <div className="line"></div>
                </div>
              </div>
              <div className="winners">
                <div className="matchups">
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant">
                        <span>{randomNames[1]}</span>
                      </div>
                      <div className="participant winner">
                        <span>{randomNames[4]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant">
                        <span>{randomNames[2]}</span>
                      </div>
                      <div className="participant winner">
                        <span>{randomNames[3]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connector">
                  <div className="merger"></div>
                  <div className="line"></div>
                </div>
              </div>
            </section>
            <section className="round semifinals">
              <div className="winners">
                <div className="matchups">
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant winner">
                        <span>{userName}</span>
                      </div>
                      <div className="participant">
                        <span>{randomNames[0]}</span>
                      </div>
                    </div>
                  </div>
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant winner">
                        <span>{randomNames[4]}</span>
                      </div>
                      <div className="participant">
                        <span>{randomNames[3]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connector">
                  <div className="merger"></div>
                  <div className="line"></div>
                </div>
              </div>
            </section>
            <section className="round finals">
              <div className="winners">
                <div className="matchups">
                  <div className="matchup">
                    <div className="participants">
                      <div className="participant winner">
                        <span>{userName}</span>
                      </div>
                      <div className="participant">
                        <span>{randomNames[4]}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connector">
                  <div className="merger"></div>
                  <div className="line"></div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </main>
      <footer className="Footer">
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;