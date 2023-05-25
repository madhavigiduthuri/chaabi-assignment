import { Component } from 'react'
import './index.css'
import Challenge from '../Challenge'

class Home extends Component {
  state = {
    name: "",
    challengeType: "",
    showChallenge: false,
  }

  onEntering = () => {
    const {name, challengeType} = this.state;
    name && challengeType && this.setState({showChallenge: true})
  }

  onChangingName = e => {
    this.setState({name: e.target.value})
  }

  onChangingType = e => {
    this.setState({ challengeType: e.target.value})
  }

  render (){
    const {name, challengeType, showChallenge} = this.state;
// console.log(name, challengeType)
    if (showChallenge) {
      return <Challenge name={name} challengeType={challengeType} />
    }
    return(
      <div className="main-container">
        <h1 className="home-title">Typing Game</h1>
        <div className="input-wrap">
          <label htmlFor="name" className='label-input'>
            Name: 
          </label>
          <input type="text" id="name" className="input-value" value={name} onChange={e => this.onChangingName(e)} 
          />
        </div>
        <div className="radio-button-wrap">
          <div className="radio-btn">
            <label htmlFor="keys">Keys</label>
            <input type="radio" id="keys" name="name" value="keys" onChange={e => this.onChangingType(e)}  checked={challengeType === "keys"}/>
          </div>
          <div className="radio-btn">
            <label htmlFor="word">Words</label>
            <input type="radio" id="word" value="word" name="name" onChange={e => this.onChangingType(e)}  checked={challengeType === "word"}/>
          </div>
          {/* <div className="radio-btn">
            <label htmlFor="sentence">Sentence</label>
            <input type="radio" id="sentence" value="sentence" name="name" onChange={e => this.onChangingType(e)}  checked={challengeType === "sentence"}/>
          </div> */}
        </div>
          <button type="button" className="enter-button" onClick={() => this.onEntering()}>Enter</button>
      </div>
    )
  }
}

export default Home