"use client"

import { atom } from "jotai"
import { MapLocation } from "../map-locations"
import Backdrop from "./Backdrop"
import ModalBox from "./ModalBox"

export const locationForModalAtom = atom<MapLocation | null>(null)

export default function LocationModal() {
	return (
		<dialog id="location_modal" className="modal">
			<ModalBox />
			<Backdrop />
		</dialog>
	)
}
