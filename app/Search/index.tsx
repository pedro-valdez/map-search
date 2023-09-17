"use client"

import Results from "./Results"
import Searchbar from "./Searchbar"

export default function Search() {
	return (
		<form
			className="group fixed z-20 left-4 top-4 w-[calc(100%-2rem)] sm:max-w-sm"
			onSubmit={e => {
				e.preventDefault()
			}}
		>
			<Searchbar />
			<Results />
		</form>
	)
}
