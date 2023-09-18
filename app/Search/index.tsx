"use client"

import dynamic from "next/dynamic"

/*
 * Must use next/dynamic for similar reasons stated in LocationModal and LeafletMap.
*/
const Search = dynamic(() => import("./Search"), { ssr: false })

export default Search
