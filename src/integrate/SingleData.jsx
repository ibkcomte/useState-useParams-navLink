
import { useParams } from 'react-router-dom'
import { stores } from '../pathName/stores'

const SingleData = () => {

    const { id } = useParams()

    let result = stores[id-1]

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className='w-[20rem] h-fit rounded-[0.5rem] space-x-3 space-y-3 drop-shadow-xl p-3 bg-blue-100 border-2'>

                <div className="mx-auto w-[5rem]">
                    <img src={result.image} alt="" />
                </div>
                <h1>{result.title}</h1>
                <h2>#{result.price}</h2>
                <p className="w-[15rem]">{result.description}</p>
            </div>
        </div>
    )
}

export default SingleData

