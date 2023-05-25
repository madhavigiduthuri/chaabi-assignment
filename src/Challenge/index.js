import { Component } from 'react'
import randomWords from "random-words";
import NavBar from '../NavBar'
import './index.css'
import StyledNthCharacter from '../Common/StyledNthCharacter'
import Result from '../Result';

class Challenge extends Component {
  state = {
    score: 0,
    timer : 300,
    typedText: "",
    nthCharIndex: 0,
    challengeText: "",
    showResult: false,
  }

  componentWillMount() {
    const {challengeType} = this.props;
    const word = randomWords({ minLength: 1, maxLength: challengeType === "keys" ? 2 : 1, exactly: challengeType === "keys" ? 370 : 160, join: " " })
    this.setState({ challengeText: word })

    this.timerId = setInterval(() => this.runTimer(), 1000)
  }

  runTimer = () => {
    const {timer} = this.state;
    
    if (timer === 0) {
      clearInterval(this.timerId)
      this.setState({showResult: true})
    } else {
      this.setState(prev => ({
        timer: prev.timer - 1
      }))
    }
  }

  onChangeText = event => {
    // this.setState({typedText: event.target.value})
    const {challengeText, nthCharIndex, score} = this.state
    // if (event.key === 'Backspace') {
    const value = event.target.value
    // console.log(value[value.length - 1]) last char
    // console.log(challengeText[nthCharIndex]) highlight char
    const currentScore = value[value.length - 1] === challengeText[nthCharIndex] ? score + 1 : score
    this.setState({ typedText: value, nthCharIndex: value.length, score: currentScore })
  }

  handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      event.preventDefault();
    }
  };

  render (){
    const {timer,score, typedText, nthCharIndex, challengeText, showResult} = this.state
    const {name} = this.props

    if (showResult) {
      return <Result name={name} score={score} nthCharIndex={nthCharIndex} />
    }
  return(
    <div className="challenge-container">
      <NavBar showScoreTimer={true} score={score} timer={timer} />
      <div className="challenge-wrap">
        <div className="challenge-wrap-top">
          {/* <p className="alphabets">a a a a a a a a a a a a a a a a a a a a</p> */}
          <StyledNthCharacter
            text={challengeText}
            nthCharacter={nthCharIndex}
            className="nth-char"
          />
        </div>
        <div className="challenge-wrap-top">
          <textarea
            type="textarea"
            className="textarea-input"
            value={typedText}
            onChange={e => this.onChangeText(e)}
            onKeyDown={e => this.handleKeyDown(e)}
          />
        </div>
      </div>
    </div>
  )
}
}

export default Challenge
