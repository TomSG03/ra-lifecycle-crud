import React, { useEffect, useState } from 'react'
import Head from './Head';
import InputText from './InputText';
import ShowCards from './ShowCards';

function Crud(props) {
  const [cards, setCards] = useState([]);
  const [textArea, setTextArea] = useState('');
  const [data, setData] = useState({})

  function send() {
    if (textArea === '') return
    setData(textArea);
    setTextArea('');
  }

  function sendData(params) {
    fetch(props.url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id": 0,
        "content": data
      })
    }).then(loadData)
  }

  function loadData() {
    fetch(props.url)
      .then(res => res.json())
      .then(data => {
        setCards([...data]);
      })
  }

  function delData(id) {
    fetch(`${props.url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(loadData);
  }

  function handlerDelete({ target }) {
    delData(target.dataset.id);
  }

  function handlerTextArea({ target }) {
    setTextArea(target.value);
  }

  useEffect(() => {
    loadData();
  }, [])

  useEffect(() => {
    if (Object.keys(data).length === 0) return
    sendData();
  }, [data])

  return (
    <>
      <Head />
      <InputText handlerSend={send} handlerInput={handlerTextArea} text={textArea} />
      <ShowCards cards={cards} onDelete={handlerDelete} />
    </>
  )
}

export default Crud