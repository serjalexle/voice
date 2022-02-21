import React, { useState } from 'react'
import {JitsiMeeting} from '@jitsi/web-sdk'

const Index = () => {
  return (
    <>
      <h2>My First Meeting!</h2>
      <JitsiMeeting
    domain="localhost:3000"
/>
    </>
  )
}

export default Index
