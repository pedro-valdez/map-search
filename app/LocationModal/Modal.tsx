"use client"

import Backdrop from "./Backdrop"
import ModalBox from "./ModalBox"

/*
 * WARNING: do not use this component directly.
 * For similar reasons as in LeafletMap/index, this component
 * musn't be used directly. Read ./index for more reasons.
*/
export default function LocationModal() {
	return (
		<dialog id="location_modal" className="modal">
			<ModalBox />
			<Backdrop />
		</dialog>
	)
}
