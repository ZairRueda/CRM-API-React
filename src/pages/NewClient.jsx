import Formulary from '../components/Formulary'

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3 text-gray-600">Fill the next fieldset to register a client</p>

      <Formulary />
    </>
  )
}

export default NewClient