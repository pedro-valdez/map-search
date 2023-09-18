import WebsiteLink from "./WebsiteLink"
import CenterButton from "./Center"
import ModalTitle from "./Title"

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
				<CenterButton coords={coords}/>
				<ModalTitle name={name} coords={coords}/>
			</div>

			<WebsiteLink website={website}/>
		</div>
	)
}
