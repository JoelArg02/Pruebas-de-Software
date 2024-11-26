import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TaskInput from '../components/TaskInput'
import TaskTable from '../components/TaskTable'

export default function Home() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input) {
      setItems([...items, input])
      setInput('')
    }
  }

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <TaskInput input={input} setInput={setInput} onAdd={handleAdd} />
      <TaskTable items={items} />
    </Container>
  )
}
