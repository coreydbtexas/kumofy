import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="text-center mt-40">
      <h4>This page does not exist.</h4>
      <p className="mt-4 title">
        Please return to the{' '}
        <Link to="/" className="text-green hover:underline">
          dashboard
        </Link>
      </p>
    </div>
  )
}

export default NotFound
