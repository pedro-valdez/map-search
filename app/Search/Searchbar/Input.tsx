import { useState } from "react"

export default function SearchbarInput() {
	const [searchText, setSearchText] = useState("")

	return (
		<input
			type="search"
			placeholder="Search..."
			className="input bg-transparent w-full focus:outline-0"
			value={searchText}
			onChange={e => {
				setSearchText(e.currentTarget.value)
			}}
		/>
	)
}
