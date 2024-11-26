import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function TaskInput({ input, setInput, onAdd }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTask">
        <Form.Label>Agregar Tarea</Form.Label>
        <Form.Control type="text" placeholder="Escribe tu tarea..." value={input} onChange={(e) => setInput(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={onAdd}>
        Agregar
      </Button>
    </Form>
  )
}
