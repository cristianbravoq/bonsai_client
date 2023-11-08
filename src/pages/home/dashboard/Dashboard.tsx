import React from 'react'
import "./dashboard.scss"

interface IDashboard {
    children: React.JSX.Element | React.JSX.Element[]
}

const Dashboard : React.FC<IDashboard> = ({ children }) => {

  return (
    <div className='dashboard'>
        {children}
    </div>
  )
}

export default Dashboard