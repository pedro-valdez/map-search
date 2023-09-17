import LeafletMap from "./LeafletMap";
import LocationModal from "./LocationModal";
import Search from "./Search";

export default function Home() {
  return (
		<main>
			<Search />
			<LeafletMap />
			<LocationModal />
		</main>
  )
}
