import React from 'react'

const Button = ({ title, styles, handleSubmit }) => {
  return (
    <div>
      <button className={styles} onSubmit={handleSubmit}>
        {title}
      </button>
    </div>
  )
}

export default Button