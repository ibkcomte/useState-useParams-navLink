import error from '../assets/images/error.png'

const ErrorPage = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
         <div>Looks like you are lost</div>
        <div className="w-[40rem]">
      <img src={error} 
      alt="" />
      <div>Looks like you are lost</div>
    </div>
    </div>
  )
}

export default ErrorPage
