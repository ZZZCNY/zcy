import { Button, Space } from 'antd'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Space>
          <Link to='/'>
            <Button type='text' size='large'>
              主页
            </Button>
          </Link>
          <Button type='text' size='large'>
            知识
          </Button>
          <Link to='/about'>
            <Button type='text' size='large'>
              关于我
            </Button>
          </Link>
        </Space>
      </header>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
