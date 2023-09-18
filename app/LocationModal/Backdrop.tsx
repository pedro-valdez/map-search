// This component closes the modal by clicking on the background.
export default function Backdrop() {
	return (
		<form method="dialog" className="modal-backdrop">
			<button>close</button>
		</form>
	)
}
