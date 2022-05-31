import { Formik, Form, Field, ErrorMessage } from 'formik'
// React Router Dom Component
import { useNavigate } from 'react-router-dom'
// Import Yup
import * as Yup from 'yup'
import Spinner from '../components/Spinner'

const Formulary = ({client, loading}) => {
  
  const navigate = useNavigate()
  
  // Schema for Yup
  const newClientSchema = Yup.object().shape({ 
    name: Yup.string()
      .min(3, 'Name is Too Short!')
      .required("The name is required"), 
    factory: Yup.string().required("The factory is required"),
    email: Yup.string().email("The email is not valid").required("The email is required"),
    phone: Yup.number()
      .positive("The phone is not valid")
      .integer().required("The phone its not valid")
      .max(9999999999, 'The phone number is too long')
      .min(1000000000, 'The phone number is too short'),
    notes: Yup.string()
      .min(10, 'The notes is too short')
      .required("The notes is required for identification purposes")
  })

  const handleSubmit = async (values) => {
    try {
      let response

      if (client.id) {
        // Edit Register
        const url = `http://localhost:4000/clients/${client.id}`
        response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
      } else {
        // New Register
        const url = 'http://localhost:4000/clients'
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
      }

      await response.json()
      navigate('/clients')

    } catch (error) {
      console.error(error)
    }
    // More information about JsonServer https://www.npmjs.com/package/json-server


  }

  return (
    loading ? <Spinner /> : (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow shadow-gray-400 md:w-3/4 mx-auto md:h-5/6 md:overflow-scroll">
        <h1 className="font-black text-xl uppercase text-gray-600 text-center">
          {client.name ? 'Edit Client' : 'New Client'}</h1>

        <Formik
          initialValues={{ 
            name: client?.name ?? '', 
            factory: client?.factory ?? '', 
            email: client?.email ?? '', 
            phone: client?.phone ?? '', 
            notes: client?.notes ?? ''
          }}
          // For alow to change the values of the form
          enableReinitialize={true}
          onSubmit={ async (values, {resetForm}) => {
            await handleSubmit(values)

            resetForm()
          }}
          validationSchema={newClientSchema}
        >
        {({errors})=> {
          // In this case, we are using the Formik's Form component and is necessary return that component
          return ( 
              <Form className="mt-10">
                {/* Name */}
                <div>

                  <label 
                    className="block text-gray-700 text-base mb-2" 
                    htmlFor="name"
                  >Name:</label>
                  <Field 
                    id="name"
                    name="name" 
                    type="text" 
                    className="bg-gray-100 mx-1 my-1 py-2 px-2 rounded-md withe w-full "
                    placeholder="Client Name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                </div>
                {/* Factory */}
                <div>

                  <label 
                    className="block text-gray-700 text-base mb-2" 
                    htmlFor="factory"
                  >Factoty Name:</label>
                  <Field 
                    id="factory"
                    name="factory"
                    type="text" 
                    className="bg-gray-100 mx-1 my-1 py-2 px-2 rounded-md withe w-full "
                    placeholder="Client Factory"
                  />
                  <ErrorMessage name="factory" component="div" className="text-red-500 text-sm" />

                </div>
                {/* Email */}
                <div>

                  <label 
                    className="block text-gray-700 text-base mb-2" 
                    htmlFor="email"
                  >Email:</label>
                  <Field 
                    id="email"
                    name="email" 
                    type="email" 
                    className="bg-gray-100 mx-1 my-1 py-2 px-2 rounded-md withe w-full "
                    placeholder="Client Email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                </div>
                {/* Phone */}
                <div>

                  <label 
                    className="block text-gray-700 text-base mb-2" 
                    htmlFor="phone"
                  >Phone:</label>
                  <Field 
                    id="phone"
                    name="phone" 
                    type="phone" 
                    className="bg-gray-100 mx-1 my-1 py-2 px-2 rounded-md withe w-full "
                    placeholder="Client Phone"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

                </div>
                {/* Notes */}
                <div>

                  <label 
                    className="block text-gray-700 text-base mb-2" 
                    htmlFor="notes"
                  >Notes:</label>
                  <Field 
                    id="notes"
                    as="textarea"
                    name="notes" 
                    type="text" 
                    className="bg-gray-100 mx-1 my-1 py-2 px-2 rounded-md withe w-full h-40 "
                    placeholder="Client Notes"
                  />
                  <ErrorMessage name="notes" component="div" className="text-red-500 text-sm" />

                </div>

                <input 
                  type="submit" 
                  value={client?.name ? 'Edit Client' : 'New Client'}
                  className="mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold text-lg rounded-md"
                />
              </Form>
          )}}
        </Formik>

      </div>
    )
  )
}

// The way in react in case of a component do not have a values waiting 
Formulary.defaultProps = {
  client: {},
  loading: false
}

export default Formulary