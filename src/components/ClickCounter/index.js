// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-bg">
        <h1 className="heading">
          The Button has ben clicked <span className="count">{count}</span>
          times.
        </h1>
        <p>click the button to increase the count !</p>
        <div>
          <button type="button" onClick={this.onIncrease}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
