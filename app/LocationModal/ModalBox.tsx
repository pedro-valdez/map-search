import { useAtom } from "jotai"
import { locationForModalAtom } from "."
import Gallery from "./Gallery"
import Description from "./Description"
import Header from "./Header"

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
