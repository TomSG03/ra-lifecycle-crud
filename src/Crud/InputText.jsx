import React from 'react'
import PropTypes from 'prop-types'

function InputText({ handlerSend, handlerInput, text }) {
  return (
    <div>
      <textarea name="text" id="" cols="30" rows="4" value={text} onChange={handlerInput}></textarea>
      <button onClick={handlerSend}>send</button>
    </div>

  )
}

InputText.propTypes = {}

export default InputText
