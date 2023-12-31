import { MapLocation } from "@/app/map-locations"
import { useAtom } from "jotai"
import Image from "next/image"
import { autocompleteIndexAtom } from "."
import { mapCenterAtom } from "@/app/LeafletMap/Events"

type ResultProps = {
	mapLocation: MapLocation,
	isSelected: boolean,
	index: number,
}

/*
 * Component to display an item in searchResults array.
 * When component is clicked it opens a modal displaying
 * further information on result.
 *
 * When locate button gets pressed, map gets centered
 * around corresponding location.
*/
export default function Result({ mapLocation, isSelected, index } : ResultProps) {
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [mapCenter, setMapCenter] = useAtom(mapCenterAtom)

	return (
		<article
			className={`flex ${isSelected ? "bg-base-300" : "bg-base-100"} hover:bg-base-300`}
			onMouseOver={() => { setAutocompleteIndex(index) }}
			onMouseOut={() => setAutocompleteIndex(null)}
		>
			<button
				className="btn btn-ghost btn-square rounded-none"
				onClick={(e) => {
					e.preventDefault()
					setMapCenter([mapLocation.location.lat, mapLocation.location.lon])
				}}
			>
				<Image
					src={"pin.svg"}
					alt="Locate button"
					width={16}
					height={16}
				/>
			</button>

			<button
				onClick={() => {
					setAutocompleteIndex(index)
				}}
				className="hover:cursor-pointer pl-4 w-full"
			>
				<div className="my-auto text-left">
					<h1 className="font-bold">{ mapLocation.name }</h1>
					<p className="text-sm text-gray-400">{ mapLocation.location.lat }, { mapLocation.location.lon }</p>
				</div>
			</button>
		</article>
	)
}
