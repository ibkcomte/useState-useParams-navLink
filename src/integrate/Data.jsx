import Card from './Card'
import { stores } from '../pathName/stores'

const Data = () => {
  return (

    <div className='w-full min-h-screen p-[2rem]'>

      <div className="grid gap-4 grid-cols-3">
        {/* {
          stores.map((store, i) => (<Card key={i} {...store} to={`/integrate/${i++}`}/>))
        } */}

        {
          stores.map((store) => (<Card key={store.id} {...store} to={`/integrate/${store.id}`} />))
        }
      </div>
    </div>

  )
}

export default Data
