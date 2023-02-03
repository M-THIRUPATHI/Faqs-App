// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {bool: false}

  onChaningBoolValue = () => {
    this.setState(preState => ({bool: !preState.bool}))
  }

  render() {
    const {bool} = this.state
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="main-heading">Faqs</h1>
          <ul className="unordered-list-items">
            {faqsList.map(eachFaqs => (
              <FaqItem
                eachFaqs={eachFaqs}
                key={eachFaqs.id}
                bool={bool}
                onChaningBoolValue={this.onChaningBoolValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
