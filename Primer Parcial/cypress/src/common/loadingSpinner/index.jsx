import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingSpinner() {
  return (
    <div className="text-center">
      <Spinner animation="border" />
      <p>Cargando datos...</p>
    </div>
  )
}
