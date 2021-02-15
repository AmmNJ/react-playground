import './Card.css'
import React from 'react'

export default function Card({ question, answer, color, showAnswer }) {
  console.log(color)

  const styleObject = {
    backgroundColor: color,
    borderRadius: '20px',
  }

  return (
    <section style={styleObject} className="Card">
      <h2>{question}</h2>
      {showAnswer && <p>{answer}</p>}
    </section>
  )
}
