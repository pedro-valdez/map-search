import Image from "next/image"
import WebsiteLink from "./WebsiteLink"

type HeaderProps = {
	name: string,
	coords: {
		lat: number,
		lon: number,
	},
	website: string | null,
}

export default function Header({ name, coords, website } : HeaderProps) {
	return (
		<div className="flex justify-between flex-col sm:flex-row">
			<div className="flex items-center gap-x-4">
				<button className="btn btn-ghost">
					<Image
						src={"pin.svg"}
						alt="Locate button"
						width={16}
						height={16}
					/>
				</button>
				<div>
					<h2 className="font-bold text-lg">{ name }</h2>
					<p className="text-sm">{ coords.lat }, { coords.lon }</p>
				</div>
			</div>

			<WebsiteLink website={website}/>
		</div>
	)
}
