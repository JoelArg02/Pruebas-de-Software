import React from 'react';
import { Table } from 'react-bootstrap';

export default function TaskTable({ items }) {
  return (
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
  )
}
