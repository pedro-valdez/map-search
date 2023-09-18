import { useAtom } from "jotai"
import { autocompleteIndexAtom, searchResultsAtom } from "../Search/Results"
import { Marker, Popup } from "react-leaflet"
import { divIcon } from "leaflet"
import { locationForModalAtom } from "../LocationModal"

const defaultMarkerIcon = divIcon({
	className: "default-marker",
	iconAnchor: [12, 28],
	popupAnchor: [-2, -28],
})
const redMarkerIcon = divIcon({
	className: "red-marker",
	iconAnchor: [12, 28],
	popupAnchor: [-2, -28],
})

export default function LocationMarkers() {
	const [searchResults] = useAtom(searchResultsAtom)
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [locationForModal, setLocationforModal] = useAtom(locationForModalAtom)

	return (
		<>
			{
				searchResults.map((result, i) => (
					<Marker
						key={result.id}
						position={[result.location.lat, result.location.lon]}
						icon={i === autocompleteIndex ? redMarkerIcon : defaultMarkerIcon}
						eventHandlers={{
							mouseover: (e) => {
								setAutocompleteIndex(i) 
								e.sourceTarget.openPopup()
							},
							mouseout: (e) => {
								setAutocompleteIndex(null)
								e.sourceTarget.closePopup()
							},
							click: () => {
								setLocationforModal(searchResults[i])
								const modal = document.getElementById("location_modal") as HTMLDialogElement
								modal.showModal()
							},
						}}
					>
						<Popup>
							{ result.name }
						</Popup>
					</Marker>
				))
			}
		</>
	)
}
