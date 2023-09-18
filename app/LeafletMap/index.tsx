"use client"

import dynamic from "next/dynamic"

/*
 * NOTE: the Map component needs to be exported with next/dynamic.
 *
 * next/dynamic lazily loads components on the client side with
 * React.lazy and Suspense. leaflet and react-leaflet need this
 * since the window object must be defined to use those libraries,
 * and Next.js uses SSR by default.
*/
const LeafletMap = dynamic(() => import("./Map"), { ssr: false })

export default LeafletMap
