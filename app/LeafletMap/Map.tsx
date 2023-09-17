import "leaflet/dist/leaflet.css"
import { LatLngTuple } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import LocationMarkers from "./LocationMarkers"
import Events from "./Events"

export const boston: LatLngTuple = [42.354022, -71.046245]

export default function Map() {
	return (
		<div className="h-screen w-screen relative z-10">
			<MapContainer
				center={boston}
				zoom={13}
				zoomControl={false}
				className="h-full w-full"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LocationMarkers />
				<Events />
			</MapContainer>
		</div>
	)
}
