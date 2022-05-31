import { useNavigate } from 'react-router-dom'

const Clients = ({client, handleDelete}) => {
  const navigate = useNavigate()

  const {id, name, phone, email, factory, notes} = client

  return (
    <tr className="text-center border-b hover:bg-gray-50" key={id}>
      <td className="p-3 ">{name}</td>
      <td className="p-3">
        <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
        <p><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone}</p>
      </td>
      <td className="p-3 ">{factory}</td>
      <td className="p-3">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold m-1 py-2 px-4 rounded uppercase"
          onClick={() => navigate(`/clients/${id}`)}
        >See</button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-2 px-4 rounded uppercase"
          onClick={() => navigate(`/clients/editClient/${id}`)}
        >Edit</button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold m-1 py-2 px-4 rounded uppercase"
          onClick={() => handleDelete(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Clients