import molisanaLogo from '/logo.png'

export default function AppLogo({ slogan }) {


  console.log(slogan);
  

  return (
    <>
      <img src={molisanaLogo} alt="" />
      <div>{slogan || 'La pasta' }</div>
    </>
  )
}