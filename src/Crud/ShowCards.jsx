import React from 'react'
import PropTypes from 'prop-types'

function ShowCards({ cards, onDelete }) {
  const cardList = cards.map((e) => {
    return (
      <div className='cards' key={e.id}>
        <p>{e.content}</p>
        <button onClick={onDelete} data-id={e.id}>del</button>
      </div>
    )
  })
  return (
    <div>
      {cardList}
    </div>
  )
}

ShowCards.propTypes = {}

export default ShowCards
