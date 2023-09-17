type DescriptionProps = {
	description: string | null,
}

export default function Description({ description } : DescriptionProps) {
	if (!description) { return null }

	return (
		<p className="pt-4">{ description }</p>
	)
}
