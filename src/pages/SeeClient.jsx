import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// The way to we get the id is by using the useParams()
import Spinner from '../components/Spinner'


const SeeClient = () => {

  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

  const params = useParams()

  useEffect(() => {
    setLoading(!loading)
    const getClientApi = async () => {
      try {
        const url = `http://localhost:4000/clients/${params.id}`
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
        }, 3000
      )
    }
    getClientApi()
  }, [])

  return (
    loading ? <Spinner/> :
      Object.keys(clients).length === 0 ? 
        <p>Client dont found</p> 
      : (
      <div>
        
        <>
          {clients.name && (
            <>
              <h1 className="font-black text-4xl text-blue-900">{clients.name}</h1>
              <p className="mt-3 text-gray-600">Client Information</p>
            </>
          )}

          
          {clients.factory && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Factory: </span>
              {clients.factory}
            </p>    
          )}

          {clients.email && (
          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-gray-800 uppercase font-bold">Email: : </span>
            {clients.email}
          </p>
          )}

          {clients.phone && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Phone: </span>
              {clients.phone}
            </p>  
          )}
          
          {clients.notes && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notes: </span>
              {clients.notes}
            </p>
          )}
        </>
        
      </div>
      )
  )
}

export default SeeClient