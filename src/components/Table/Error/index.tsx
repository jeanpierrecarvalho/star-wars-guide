import React from 'react'

interface IProps {
  error: string
}

const Error: React.FC<IProps> = ({ error }) => {
  return (
    <p
      className="mt-8 text-center text-red-500"
      role="alert"
      aria-live="assertive"
    >
      {error}
    </p>
  )
}

export default Error
