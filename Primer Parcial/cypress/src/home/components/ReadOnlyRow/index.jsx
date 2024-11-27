import React from 'react';
import { Button } from 'react-bootstrap';

export default function ReadOnlyRow({ index, value, onEdit, onDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{value}</td>
      <td>
        <Button variant="primary" onClick={() => onEdit(index)}>Editar</Button>{' '}
        <Button variant="danger" onClick={() => onDelete(index)}>Borrar</Button>
      </td>
    </tr>
  );
}
