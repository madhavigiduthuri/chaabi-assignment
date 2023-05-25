import NavBar from '../NavBar'
import './index.css'

const Result = props => {
    const {name, score, nthCharIndex} = props
    return(
      <div className="result-container">
        <NavBar />
        <div className="result-wrap">
            <div className="time-up-wrapper">
              <h1>Time Up</h1>
            </div>
            <div className="time-up-wrap">
                <p className="result-name">Name</p>
                <p className="count">{name}</p>
            </div>
            <div className="time-up-wrap">
                <p className="result-name">Score</p>
                <p className="count">{score}</p>
            </div>
            <div className="time-up-wrap">
                <p className="result-name">Correct Keys</p>
                <p className="count">{score}</p>
            </div>
            <div className="time-up-wrap">
                <p className="result-name">Wrong Keys</p>
                <p className="count">{nthCharIndex + 1 - score}</p>
            </div>
            <div className="time-up-wrap">
                <p className="result-name">Accuracy</p>
                <p className="count">{Math.round((score/(nthCharIndex + 1)*100), 2)}%</p>
            </div>
            <div className="time-up-wrap">
              <p className="result-name">Keys per minute</p>
              <p className="count">~{Math.round((nthCharIndex+1)/5)}</p>
            </div>
        </div>
      </div>
    )
}

export default Result
