import { atom, useAtom } from "jotai"
import { LatLngTuple } from "leaflet"
import { useMap } from "react-leaflet"
import { useEffect } from "react"

const boston: LatLngTuple = [42.354022, -71.046245]
export const mapCenterAtom = atom<LatLngTuple>(boston)

/*
 * NOTE: You can only access the map object from the MapContainer
 * by consuming its context.
 *
 * This component is meant to interact with the map object when
 * external state changes.
*/
export default function Events() {
	const [mapCenter, setMapCenter] = useAtom(mapCenterAtom)
	const bostonMap = useMap()

	useEffect(() => {
		bostonMap.flyTo(mapCenter)
	}, [mapCenter])

	return <></>
}
