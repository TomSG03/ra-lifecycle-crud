import React from 'react'
import PropTypes from 'prop-types'

function ShowCards({ cards, onDelete }) {
  const cardList = cards.map((e) => {
    return (
      <div className='cards' key={e.id}>
        <div className='cards-content'>
          <span>{e.content}</span>
        </div>
        <button className='btn-del' onClick={onDelete} data-id={e.id}></button>
      </div>
    )
  })
  return (
    <div className='cards-list'>
      {cardList}
    </div>
  )
}

ShowCards.propTypes = {}

export default ShowCards
