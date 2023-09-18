import Image from "next/image"

export default function FindButton() {
	return (
		<button
			className="btn btn-square btn-ghost group-focus-within:hidden sm:group-focus-within:inline-flex"
			type="submit"
			onClick={(e) => {
				e.currentTarget.blur()
			}}
		>
			<Image
				src={"search.svg"}
				alt="Search button"
				width={16}
				height={16}
			/>
		</button>
	)
}
