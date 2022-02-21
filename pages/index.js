import React, { useEffect, useState } from 'react'
import {Jutsu} from 'react-jutsu'
import Head from 'next/head'

const Index = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <>
      <Head dangerouslySetInnerHTML={{ __html: "<script src='https://meet.jit.si/external_api.js'></script>" }} />
      {
        call ? (
          <Jutsu
            roomName={room}
            userName={name}
            loadingComponent={<p>loading ...</p>} />
        ) : (
          <form>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )
      }
    </>
  )
}

export default Index
