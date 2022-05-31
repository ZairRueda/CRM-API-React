import Formulary from '../components/Formulary'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const EditClient = () => {

  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

  const params = useParams()

  useEffect(() => {
    setLoading(!loading)

    const getClientApi = async () => {
      try {
        const url = `${import.meta.env.VITE_DB_HOST}/${params.id}`
        const response = await fetch(url)
        const json = await response.json()
        setClients(json)
        console.log(json);
      } catch (error) {
        console.error(error)
      }  

      setTimeout(
        () => {
          setLoading(false)
        }, 1000
      )
    }
    getClientApi()
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3 text-gray-600">Change values with safety</p>

      {clients.name ?
      <Formulary 
        client={clients}
        loading={loading}
      /> 
      :
      <p className="p-2 mt-5 text-red-500 text-center bg-red-100">Client dont found</p> 
      }
    </>
  )
}

export default EditClient