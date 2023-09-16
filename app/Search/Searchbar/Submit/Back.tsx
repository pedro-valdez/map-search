import { HiArrowLeft } from "react-icons/hi2"

export default function BackButton() {
	return (
		<button
			className="btn btn-square btn-ghost group-focus-within:inline-flex hidden sm:hidden sm:group-focus-within:hidden"
			onClick={(e) => {
				e.preventDefault()
				e.currentTarget.blur()
			}}
		>
			<HiArrowLeft />
		</button>
	)
}
