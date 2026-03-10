// option1: destructuring multiple props {title, image, time, type}
// option2: single prop that represetns the entire object {product}
export default function AppCard({ title, image, time, type }){

  //console.log(props);
  

  return (
    <div className="col">
      <div className="card rounded-0 h-100">
        <img className="card-img-top" src={image} alt='' />
        <div className="card-body">
          <h3>{title}</h3>
          <div>Type: {type}</div>
          <div>Time: {time}</div>

        </div>
      </div>
    </div>
  )
}