// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaqs, onChaningBoolValue, bool} = props
  const {questionText, answerText} = eachFaqs

  const onPlusOrMins = () => {
    onChaningBoolValue()
  }

  return (
    <li className="list-items">
      <div className="img-ques-container">
        <h1 className="question-text">{questionText}</h1>
        <button type="button" className="button" onClick={onPlusOrMins}>
          <img
            src={
              bool
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
            }
            alt={bool ? 'minus' : 'plus'}
            className="image"
          />
        </button>
      </div>
      {bool && (
        <>
          <hr className="hr-line" />
          <div className="ans-container">
            <p className="answer-text">{answerText}</p>
          </div>
        </>
      )}
    </li>
  )
}
export default FaqItem
