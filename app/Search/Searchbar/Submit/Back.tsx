import { HiArrowLeft } from "react-icons/hi2"

/*
 * This button is for mobile users.
 * When pressed, the search results aren't shown anymore.
*/
export default function BackButton() {
	return (
		<button
			className="btn btn-square btn-ghost hidden group-focus-within:inline-flex sm:group-focus-within:hidden"
			onClick={(e) => {
				e.preventDefault()
				e.currentTarget.blur()
			}}
			type="button"
		>
			<HiArrowLeft />
		</button>
	)
}
