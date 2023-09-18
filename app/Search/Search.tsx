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
			className="group fixed z-20 left-4 top-4 w-[calc(100%-2rem)] sm:max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto"
			onSubmit={e => {
				e.preventDefault()
				const shouldOpenModal = searchResults.length > 0
				if (shouldOpenModal) {
					const resultsIndex = autocompleteIndex ? autocompleteIndex : 0
					const modal = document.getElementById("location_modal") as HTMLDialogElement
					setLocationForModal(searchResults[resultsIndex])
					modal.showModal()
					setSearchQuery(searchResults[resultsIndex].name)
					setSearchText(searchResults[resultsIndex].name)
					setAutocompleteIndex(null)
				}
			}}
		>
			<Searchbar />
			<Results />
		</form>
	)
}
