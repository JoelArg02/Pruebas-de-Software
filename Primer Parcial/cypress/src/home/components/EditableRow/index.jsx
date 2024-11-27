import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

export default function EditableRow({ index, value, onSave, onCancel, onChange }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <FormControl value={value} onChange={(e) => onChange(e.target.value)} />
      </td>
      <td>
        <Button variant="success" onClick={() => onSave(index)}>
          Guardar
        </Button>{' '}
        <Button variant="danger" onClick={onCancel}>
          Cancelar
        </Button>
      </td>
    </tr>
  )
}
