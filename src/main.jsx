import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Lottie from 'react-lottie';
import animationData from '../anim.json'

import Marquee from "react-fast-marquee";

import { FaBeer } from 'react-icons/fa';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FaBeer />
    <Marquee>
      I can be a React component, multiple React components, or just some text.
    </Marquee>
    {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
    <Lottie render={animationData}></Lottie>
  </React.StrictMode>,
)
