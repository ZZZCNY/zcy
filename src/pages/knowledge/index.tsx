import React from 'react'
import { Route, Routes } from 'react-router-dom'
import KnowledgeList from './components/KnowledgeList'
import DesignPatterns from './content/design-patterns'
import './index.css'

const Knowledge: React.FC = () => {
  return (
    <>
      <div className='Knowledge'>
        <Routes>
          <Route path='/Design-Patterns' element={<DesignPatterns />} />
          <Route path='*' element={<KnowledgeList />} />
        </Routes>
      </div>
      <div className='leave_blank' />
    </>
  )
}

export default Knowledge
