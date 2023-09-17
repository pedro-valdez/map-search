"use client"

import { atom } from "jotai"
import { MapLocation } from "../map-locations"
import dynamic from "next/dynamic"

export const locationForModalAtom = atom<MapLocation | null>(null)

const LocationModal = dynamic(() => import("./Modal"), { ssr: false })

export default LocationModal
