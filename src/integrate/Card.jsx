import { Link } from "react-router-dom"
const Card = ({image, title, price, description, to}) => {
  return (
  
    <Link to={to}>
      <div className='w-[20rem] h-fit rounded-[0.5rem] space-x-3 space-y-3 drop-shadow-xl p-3 bg-blue-100 border-2'>

        <div className="mx-auto w-[5rem]">
         <img src={image} alt=""/>
        </div>
        <h1>{title}</h1>
        <h2>#{price}</h2>
        <p className="w-[15rem]">{description}</p>
      </div>
      </Link>
  )
}

export default Card
