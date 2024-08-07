import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"
import Business from "./Business"


const Blog = ({image, title, price, category, description}) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className=" space-y-3 rounded-[1rem] shadow-lg w-[20rem] h-fit p-[1rem] ">
        <div className="mx-auto w-[8rem]">
          <img src={image} alt="" />
        </div>
        <h1 className="font-semibold">{title}
        </h1>
        <div className="text-purple-400 flex justify-between">
          <h2> &euro; {price}</h2>
          <h3>{category}</h3>
        </div>
        <p className="text-[0.8rem]">{description}</p>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default Blog
