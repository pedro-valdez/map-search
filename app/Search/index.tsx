"use client"

import { useAtom } from "jotai"
import Results, { autocompleteIndexAtom, searchResultsAtom } from "./Results"
import Searchbar from "./Searchbar"
import { locationModalAtom } from "../LocationModal"

export default function Search() {
	const [business, setBusiness] = useAtom(locationModalAtom)
	const [searchResults, setSearchResults] = useAtom(searchResultsAtom)
	const [autocompleteIndex] = useAtom(autocompleteIndexAtom)

	return (
		<form
			className="group fixed z-20 left-4 top-4 w-[calc(100%-2rem)] sm:max-w-sm"
			onSubmit={e => {
				e.preventDefault()
				const isAutocompletePossible = searchResults.length !== 0
				if (isAutocompletePossible) {
					setBusiness(searchResults[autocompleteIndex ?? 0])
				}
			}}
		>
			<Searchbar />
			<Results />
		</form>
	)
}
