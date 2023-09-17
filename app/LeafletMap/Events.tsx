import { atom, useAtom } from "jotai"
import { LatLngTuple } from "leaflet"
import { useMap } from "react-leaflet"
import { boston } from "./Map"
import { useEffect } from "react"

export const mapCenterAtom = atom<LatLngTuple>(boston)

export default function Events() {
	const [mapCenter, setMapCenter] = useAtom(mapCenterAtom)
	const bostonMap = useMap()

	useEffect(() => {
		bostonMap.flyTo(mapCenter)
	}, [mapCenter])

	return <></>
}
