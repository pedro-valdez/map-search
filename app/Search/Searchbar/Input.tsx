import { atom, useAtom } from "jotai"
import { useState } from "react"

export const searchQueryAtom = atom("")

export default function SearchbarInput() {
	const [searchText, setSearchText] = useState("")
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)

	return (
		<input
			type="search"
			placeholder="Search..."
			className="input bg-transparent w-full focus:outline-0"
			value={searchText}
			onChange={e => {
				const text = e.currentTarget.value
				setSearchText(text)
				setSearchQuery(text.trim())
			}}
		/>
	)
}
