import './index.css'

const NavBar = props => {
    const {showScoreTimer=false,score, timer} = props
    return(
        <div className="navbar-container">
          <div className="logo-heading-wrap">
            <img src="https://softwarevilla.com/uploads/boxshot/bed7e950-e9ac-4f2c-8636-8d3ee8a11e78_typing-master.png" className="typing-logo" alt="logo" />
            <h1 className="heading">Typing Game</h1>
          </div>
          {showScoreTimer && (
            <div className="score-timer-wrap">
              <div>
                <h1>Score: {score}</h1>
              </div>
              <div>
                <h1>Timer: {timer}</h1>
              </div>
            </div>
          )}
        </div>
    )
}

export default NavBar