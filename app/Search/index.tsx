"use client"

import { useAtom } from "jotai"
import Results, { autocompleteIndexAtom, searchResultsAtom } from "./Results"
import Searchbar from "./Searchbar"
import { locationForModalAtom } from "../LocationModal"
import { searchQueryAtom, searchTextAtom } from "./Searchbar/Input"

export default function Search() {
	const [searchResults] = useAtom(searchResultsAtom)
	const [autocompleteIndex, setAutocompleteIndex] = useAtom(autocompleteIndexAtom)
	const [locationForModal, setLocationForModal] = useAtom(locationForModalAtom)
	const [searchText, setSearchText] = useAtom(searchTextAtom)
	const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)

	return (
		<form
			id="search"
			className="group fixed z-20 left-4 top-4 w-[calc(100%-2rem)] sm:max-w-sm"
			onSubmit={e => {
				e.preventDefault()
				const isAutocompletePossible = searchResults.length !== 0
				const isIndexInteger = autocompleteIndex !== null
				const shouldOpenModal = isAutocompletePossible && isIndexInteger
				if (shouldOpenModal) {
					const modal = document.getElementById("location_modal") as HTMLDialogElement
					setLocationForModal(searchResults[autocompleteIndex])
					modal.showModal()
					setSearchQuery(searchResults[autocompleteIndex].name)
					setSearchText(searchResults[autocompleteIndex].name)
					setAutocompleteIndex(null)
				}
			}}
		>
			<Searchbar />
			<Results />
		</form>
	)
}
