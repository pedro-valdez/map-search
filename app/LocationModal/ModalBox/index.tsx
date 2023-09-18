import { useAtom } from "jotai"
import { locationForModalAtom } from ".."
import Header from "./Header"
import Description from "./Description"
import Gallery from "./Gallery"

/*
 * Modal only opens when:
 *	- Clicking a Marker on map
 *	- Clicking on a search result
 *	- Pressing enter on Input
 * Once the modal opens, it displays the selected location.
*/
export default function ModalBox() {
	const [mapLocation] = useAtom(locationForModalAtom)

	if (!mapLocation) { return <article className="modal-box"></article> }

	return (
		<article className="modal-box">
			<Header
				name={mapLocation.name}
				coords={{...mapLocation.location}}
				website={mapLocation.details?.website ?? null}
			/>
			<Description description={mapLocation.details?.description ?? null}/>
			<Gallery images={mapLocation.images ?? null}/>
		</article>
	)
}
