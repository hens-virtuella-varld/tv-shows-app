import showsData from "../shows-data"

export function getShowByID(id) {
  return showsData.find( show => show.id.toString() === id)
}