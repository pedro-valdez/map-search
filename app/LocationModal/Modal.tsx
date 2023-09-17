"use client"

import Backdrop from "./Backdrop"
import ModalBox from "./ModalBox"


export default function LocationModal() {
	return (
		<dialog id="location_modal" className="modal">
			<ModalBox />
			<Backdrop />
		</dialog>
	)
}
