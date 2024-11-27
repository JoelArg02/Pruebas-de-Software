import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import EditableRow from '../EditableRow'
import ReadOnlyRow from '../ReadOnlyRow'

export default function TaskTable({ items, onUpdate, onDelete }) {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleEdit = (index) => {
    setEditingIndex(index)
    setEditValue(items[index])
  }

  const handleCancel = () => {
    setEditingIndex(null)
    setEditValue('')
  }

  const handleSave = (index) => {
    onUpdate(index, editValue)
    setEditingIndex(null)
    setEditValue('')
  }

  return (
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) =>
          editingIndex === index ? <EditableRow key={index} index={index} value={editValue} onSave={handleSave} onCancel={handleCancel} onChange={setEditValue} /> : <ReadOnlyRow key={index} index={index} value={item} onEdit={handleEdit} onDelete={onDelete} />
        )}
      </tbody>
    </Table>
  )
}
