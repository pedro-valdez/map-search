import { MapLocation } from "@/app/map-locations"
import Image from "next/image"

type ResultProps = {
	mapLocation: MapLocation,
	isSelected: boolean,
}

export default function Result({ mapLocation, isSelected } : ResultProps) {
	return (
		<article className={`flex gap-x-4 ${isSelected ? "bg-base-300" : "bg-base-100"} rounded-btn hover:bg-base-300 hover:cursor-pointer`}>
			<button className="btn btn-ghost btn-square">
				<Image
					src={"pin.svg"}
					alt="Locate button"
					width={16}
					height={16}
				/>
			</button>

			<div className="my-auto">
				<h1 className="leading-none font-bold">{ mapLocation.name }</h1>
				<p className="leading-none text-sm">{ mapLocation.location.lat }, { mapLocation.location.lon }</p>
			</div>
		</article>
	)
}
