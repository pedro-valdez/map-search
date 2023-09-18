"use client"

import { atom } from "jotai"
import { MapLocation } from "../map-locations"
import dynamic from "next/dynamic"

export const locationForModalAtom = atom<MapLocation | null>(null)

/*
 * LocationModal gives errors if next/dynamic is not used.
 * It must be because there's an import from LeafletMap.
 * Isolating the subcomponent importing from LeafletMap,
 * leaflet or leaflet-react and then using next/dynamic
 * on it could potentially load the page faster.
*/
const LocationModal = dynamic(() => import("./Modal"), { ssr: false })

export default LocationModal
