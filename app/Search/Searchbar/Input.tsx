import { atom, useAtom } from "jotai"
import { autocompleteIndexAtom, resultsLengthAtom, searchResultsAtom } from "../Results"
import { useState } from "react"

export const searchQueryAtom = atom("")

export default function SearchbarInput() {
	const [searchText, setSearchText] = useState("")
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
	const [resultsLength] = useAtom(resultsLengthAtom)
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom)

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
			onKeyDown={e => {
				const isUpArrow = e.key === "ArrowUp"
				const isDownArrow = e.key === "ArrowDown"
				const isVerticalArrow = isUpArrow || isDownArrow
				const isAutocompletePossible = resultsLength !== 0
				const isIndexNull = autocompleteIndex === null
				const isIndexZero = autocompleteIndex === 0
				const lastResultIndex = resultsLength - 1
				const isIndexLast = lastResultIndex === autocompleteIndex
				let newIndex = null

				if (isAutocompletePossible) {
					if (isUpArrow) {
						if (isIndexNull) { newIndex = lastResultIndex }
						else if (isIndexZero) { newIndex = null }
						else { newIndex = autocompleteIndex - 1 }
					}
					else if (isDownArrow) {
						if (isIndexNull) { newIndex = 0 }
						else if (isIndexLast) { newIndex = null }
						else { newIndex = autocompleteIndex + 1 }
					}

					if (isVerticalArrow) {
						e.preventDefault()
						setAutocompleteIndex(newIndex)
						if (newIndex === null) {
							setSearchText(searchQuery)
						} else {
							setSearchText(searchResults[newIndex].name)
						}
					}
				}
			}}
		/>
	)
}
