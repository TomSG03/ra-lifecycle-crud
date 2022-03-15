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
    console.log('Send');
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
    console.log('Delete');
  }

  function handlerTextArea({ target }) {
    setTextArea(target.value);
  }

  function handlerUpdate(params) {
    loadData();
    console.log('UpDate');
  }

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (Object.keys(data).length === 0) return
    sendData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <>
      <Head handlerUpdate={handlerUpdate}/>
      <ShowCards cards={cards} onDelete={handlerDelete} />
      <InputText handlerSend={send} handlerInput={handlerTextArea} text={textArea} />
    </>
  )
}

export default Crud