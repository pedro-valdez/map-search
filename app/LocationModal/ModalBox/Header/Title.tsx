type ModalTitleProps = {
	name: string,
	coords: {
		lat: number,
		lon: number,
	},
}

export default function ModalTitle({ name, coords }: ModalTitleProps) {
	return (
		<div>
			<h2 className="font-bold text-lg">{ name }</h2>
			<p className="text-sm">{ coords.lat }, { coords.lon }</p>
		</div>
	)
}
