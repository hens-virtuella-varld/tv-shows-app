import { useParams } from "react-router-dom"
import { getShowByID } from "../helpers/showsHelper"
function ShowPage () {
  const params = useParams()
  const show = getShowByID(params.showID)
  return (
    <div className="ShowPage">
      <h1>{show.name}</h1>
      <img src={show.image.medium} />
      <h2>Language: {show.language}</h2>
      <h3>Rating: {show.rating.average}</h3>
    </div>
  )
}
export default ShowPage