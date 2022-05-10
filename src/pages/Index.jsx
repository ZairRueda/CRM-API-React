import {useState ,useEffect} from 'react'
import Clients from '../components/Clients'

const Index = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
  
    const getClientsApi = async () => {
      try {
        const url = 'http://localhost:4000/clients'
        const response = await fetch(url)
        const json = await response.json()
        setClients(json)
      } catch (error) {
        console.error(error)
      }   
    }
    getClientsApi()
  
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 text-gray-600">Admin your clients</p>

      <div className="md:h-5/6 md:overflow-scroll text-base">
        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th> 
              <th className="p-2">Factory</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {clients.map(client => (
              <Clients
                // When we go trough a list need a Key
                key={client.id}
                client={client}
              />
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Index