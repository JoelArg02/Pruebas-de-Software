import React, { useState } from 'react'
import { Button, Container, Form, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
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
      <Form>
        <Form.Group className="mb-3" controlId="formTask">
          <Form.Label>Agregar Tarea</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu tarea..." value={input} onChange={(e) => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAdd}>
          Agregar
        </Button>
      </Form>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
