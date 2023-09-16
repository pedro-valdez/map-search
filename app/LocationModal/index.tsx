"use client"

import Image from "next/image"
import Description from "./Description"
import Gallery from "./Gallery"
import { atom, useAtom } from "jotai"
import { MapLocation } from "../map-locations"
import { useEffect, useRef } from "react"

export const locationModalAtom = atom<MapLocation | null>(null)

export default function LocationModal() {
	const [business] = useAtom(locationModalAtom)
	const modalRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (business) { modalRef.current?.showModal() }
	}, [business])

	return (
			<dialog id="business_modal" className="modal z-30" ref={modalRef}>
				<div className="modal-box">
					<div className="flex justify-between flex-col sm:flex-row">
						<div className="flex items-center gap-x-4">
							<button
								className="btn btn-ghost"
								onClick={() => {
									if (business) {
										modalRef.current?.close()
									}
								}}
							>
								<Image
									src={"pin.svg"}
									alt="Locate button"
									width={16}
									height={16}
								/>
							</button>
							<div>
								<h2 className="font-bold text-lg">{ business?.name }</h2>
								<p className="text-sm">{ business?.location.lat }, { business?.location.lon }</p>
							</div>
						</div>
						<a
							href={business?.details?.website}
							target="_blank"
							className={`btn ${business?.details?.website ? "" : "btn-disabled"} mt-4 sm:mt-0`}
						>
							Visit website
						</a>
					</div>

					<Description description={business?.details?.description ?? null}/>

					<Gallery images={business?.images ?? null} />
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
	)
}
