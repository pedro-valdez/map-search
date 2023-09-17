import { atom, useAtom } from "jotai"
import { searchQueryAtom } from "../Searchbar/Input"
import mapLocations from "@/app/map-locations"
import Fuse from "fuse.js"
import Result from "./Result"

const fuseOptions = { keys: [ "name", ] }
const fuse = new Fuse(mapLocations, fuseOptions)
const fuzzySearch = (query: string) => fuse.search(query).map(result => result.item)

export const searchResultsAtom = atom(get => fuzzySearch(get(searchQueryAtom)))
export const autocompleteIndexAtom = atom<null | number>(null)

export default function Results() {
	const [searchResults] = useAtom(searchResultsAtom)
	const [autocompleteIndex] = useAtom(autocompleteIndexAtom)

	return (
		<div className="hidden group-focus-within:block w-full mt-4 space-y-4">
			{ searchResults.map((result, i) => (
				<Result
					mapLocation={result}
					key={result.id}
					isSelected={autocompleteIndex === i}
					index={i}
				/>
			)) }
		</div>
	)
}
