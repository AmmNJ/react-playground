import React from 'react'
import AppHeader from '../AppHeader'
import Card from '../Card'

export default function App() {
  return (
    <>
      <AppHeader title="React Intro" />
      <Card
        color="plum"
        question="Foo bar?"
        answer="Baz bar!"
        showAnswer={true}
      />
      <Card
        color="#abccba"
        question="Foo baz?"
        answer="Baz bar!"
        showAnswer={false}
      />
      <Card
        color="rgb(100, 150, 180)"
        question="Foo foo?"
        answer="Baz bar!"
        showAnswer={true}
      />
    </>
  )
}
