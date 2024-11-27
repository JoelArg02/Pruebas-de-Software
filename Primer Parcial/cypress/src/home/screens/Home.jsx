import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { TaskInput, TaskTable } from '../components'

export default function Home() {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input) {
      setItems([...items, input])
      setInput('')
    }
  }

  const handleUpdate = (index, newValue) => {
    const updatedItems = [...items]
    updatedItems[index] = newValue
    setItems(updatedItems)
  }

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index)
    setItems(updatedItems)
  }

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Lista de Tareas</h1>
      <TaskInput input={input} setInput={setInput} onAdd={handleAdd} />
      <TaskTable items={items} onUpdate={handleUpdate} onDelete={handleDelete} />
    </Container>
  )
}
