import Image from "next/image"

export default function FindButton() {
	return (
		<button
			className="btn btn-square btn-ghost group-focus-within:hidden sm:group-focus-within:inline-flex"
			onClick={e => {
				e.currentTarget.blur()
			}}
			type="submit"
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
