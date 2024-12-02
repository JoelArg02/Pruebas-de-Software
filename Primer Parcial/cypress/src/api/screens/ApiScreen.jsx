import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ApiTable from '../components/ApiTable'
import LoadingSpinner from '../../common/loadingSpinner'

export default function ApiScreen() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data.slice(0, 10))
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Datos de la API</h1>
      {loading ? <LoadingSpinner /> : <ApiTable data={data} />}
    </Container>
  )
}
