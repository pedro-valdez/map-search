import { atom, useAtom } from "jotai"
import { autocompleteIndexAtom, searchResultsAtom } from "../Results"

export const searchQueryAtom = atom("")
export const searchTextAtom = atom("")

/*
 * From this component the user can:
 * - Type and search results are shown
 * - Navigate through search results with up/down arrow keys
 * - Open modal my pressing enter
*/
export default function SearchbarInput() {
	const [searchText, setSearchText] = useAtom(searchTextAtom)
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom)

	return (
		<input
			type="search"
			placeholder="Search..."
			className="input bg-transparent w-full focus:outline-0"
			value={searchText}
			onChange={e => {
				/*
				 * When user types:
				 * - Reset autocompleteIndex
				 * - Update input value
				 * - Change search results
				*/
				const text = e.currentTarget.value
				setAutocompleteIndex(null)
				setSearchText(text)
				setSearchQuery(text.trim())
			}}
			onKeyDown={e => {
				/*
				 * Basically:
				 * - When user presses up and down arrows keys:
				 *   - Update autocompleteIndex
				 *   - Update searchText
				 * - When pressing enter, update form
				*/
				const isUpArrow = e.key === "ArrowUp"
				const isDownArrow = e.key === "ArrowDown"
				const isVerticalArrow = isUpArrow || isDownArrow
				const isEnter = e.key === "Enter"
				const isAutocompletePossible = searchResults.length !== 0
				const isIndexNull = autocompleteIndex === null
				const isIndexZero = autocompleteIndex === 0
				const lastResultIndex = searchResults.length - 1
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

					if (isEnter) {
						const form = document.getElementById("search") as HTMLFormElement
						form.requestSubmit()
					}
				}
			}}
		/>
	)
}
