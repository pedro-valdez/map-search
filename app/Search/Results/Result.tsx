import { MapLocation } from "@/app/map-locations"
import { useAtom } from "jotai"
import Image from "next/image"
import { autocompleteIndexAtom } from "."
import { highlightIndexAtom } from "@/app/LeafletMap/LocationMarkers"

type ResultProps = {
	mapLocation: MapLocation,
	isSelected: boolean,
	index: number,
}

export default function Result({ mapLocation, isSelected, index } : ResultProps) {
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [highlightIndex, setHighlightIndex] = useAtom(highlightIndexAtom)

	return (
		<article
			className={`flex ${isSelected ? "bg-base-300" : "bg-base-100"} rounded-btn hover:bg-base-300`}
			onMouseOver={() => {
				setHighlightIndex(index)
			}}
		>
			<button className="btn btn-ghost btn-square">
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
					<h1 className="leading-none font-bold">{ mapLocation.name }</h1>
					<p className="leading-none text-sm">{ mapLocation.location.lat }, { mapLocation.location.lon }</p>
				</div>
			</button>
		</article>
	)
}
