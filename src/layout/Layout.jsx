// Use of react router dom and Nested Router
// Instead of use <a> in tag React Router we use Link tag or NavLink tag
// and also href tag change as a to tag
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const urlNow = location.pathname

  return (
    <div className="md:flex md:min-h-screen">

      <div className="md:w-1/4 bg-blue-700 px-5 py-10 mx-5 my-5 rounded-md shadow-2xl shadow-gray-700">
        <h2 className="text-3xl font-black text-center text-white">CRM Clients</h2>

        <nav className="mt-10 p-5 bg-blue-500 rounded-md shadow-inner shadow-blue-600">
          <Link
            className={ `${urlNow === '/clients' ? 'text-white' : 'text-blue-300'}  text-2xl block font-medium mt-2 hover:text-white` }
            to="/clients"
          >Clients</Link>
          <Link
            className={ `${urlNow === '/clients/newClient' ? 'text-white' : 'text-blue-300'}  text-2xl block font-medium mt-2 hover:text-white` }
            to="/clients/newClient"
          >New Client</Link>
        </nav>
      </div>

      <div className="md:w-3/4 px-10 py-10 mx-5 my-5 rounded-md shadow-2xl shadow-gray-700 bg-white">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout