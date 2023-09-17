import { atom, useAtom } from "jotai"
import { searchResultsAtom } from "../Search/Results"
import { Marker } from "react-leaflet"
import { Icon } from "leaflet"

const defaultMarkerIcon = new Icon.Default()
const redMarkerIcon = new Icon.Default()
redMarkerIcon.options = {
	...redMarkerIcon.options,
	iconUrl: "marker-icon-red.png",
	iconRetinaUrl: "marker-icon-red-2x.png",
}

export const highlightIndexAtom = atom<number | null>(null)

export default function LocationMarkers() {
	const [searchResults] = useAtom(searchResultsAtom)
	const [highlightIndex] = useAtom(highlightIndexAtom)

	return (
		<>
			{
				searchResults.map((result, i) => (
					<Marker
						position={[result.location.lat, result.location.lon]}
						icon={i === highlightIndex ? redMarkerIcon : defaultMarkerIcon}
					>
					</Marker>
				))
			}
		</>
	)
}
