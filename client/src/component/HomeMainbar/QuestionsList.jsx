import React from 'react'
import Questions from './Questions'

const QuestionsList = ({questionsList}) => {
  return (
    <div>
      {questionsList?.map((questions)=>(
        <Questions questions={questions}/>
      ))}
    </div>
  )
}

export default QuestionsList