import Image from "next/image"
import { useAtom } from "jotai"
import { mapCenterAtom } from "@/app/LeafletMap/Events"

type CenterButtonProps = {
	coords: {
		lat: number,
		lon: number,
	},
}

export default function CenterButton({ coords }: CenterButtonProps) {
	const [mapCenter, setMapCenter] = useAtom(mapCenterAtom)
	return (
		<button
			className="btn btn-ghost"
			onClick={(e) => {
				e.preventDefault()
				setMapCenter([coords.lat, coords.lon])
			}}
		>
			<Image
				src={"pin.svg"}
				alt="Locate button"
				width={16}
				height={16}
			/>
		</button>
	)
}
