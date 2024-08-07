import Contain from "../container/Contain"
import { stores } from "../pathName/stores"
import Blog from "./Blog"
const Business = () => {
  return (


    <div className="p-9">
       <div className="grid grid-cols-3 gap-y-8">
        {stores.map((store) => (
      <Blog {...store} key={store.id} />
      ))}
</div>
    </div>


  )
}

export default Business
