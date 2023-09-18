import { HiArrowLeft } from "react-icons/hi2"

export default function BackButton() {
	return (
		<button
			className="btn btn-square btn-ghost hidden group-focus-within:inline-flex sm:group-focus-within:hidden"
			onClick={(e) => {
				e.preventDefault()
				e.currentTarget.blur()
			}}
		>
			<HiArrowLeft />
		</button>
	)
}
