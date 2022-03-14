import React from 'react'
import PropTypes from 'prop-types'

function InputText({ handlerSend, handlerInput, text }) {
  return (
    <div className='input-form'>
      <textarea className='input-field' name="text" cols="8" rows="5" id="" value={text} onChange={handlerInput}></textarea>
      <button className='btn-send' onClick={handlerSend}>send</button>
    </div>

  )
}

InputText.propTypes = {}

export default InputText
