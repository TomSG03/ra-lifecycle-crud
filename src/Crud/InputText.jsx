import React from 'react'
import PropTypes from 'prop-types'

function InputText({ handlerSend, handlerInput, text }) {
  return (
    <div className='input-form'>
      <label>New Note</label>
      <textarea className='input-field' name="text" cols="8" rows="5" id="" value={text} onChange={handlerInput}></textarea>
      <button className='btn-send material-icons' onClick={handlerSend}>
          send
      </button>
    </div>
  )
}

InputText.propTypes = {
  text: PropTypes.string,
  handlerInput: PropTypes.func,
  handlerSend: PropTypes.func
}

export default InputText
