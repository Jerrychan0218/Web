import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cardlist from './CardList';
import 'tachyons'
import { robot } from './robot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( //ReactDOM 是react顯示在網站的必需要的工具//
  <Cardlist robots={robot}/>); 
