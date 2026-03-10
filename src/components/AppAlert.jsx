export default function AppAlert({ type, children }) {

  console.log(type, children);

  return (

    <div className={`alert alert-${type || 'info'}`} role="alert">

      {children}
    </div>


  )
}