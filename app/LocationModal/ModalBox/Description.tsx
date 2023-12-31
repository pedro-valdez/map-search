type DescriptionProps = {
	description: string | null,
}

// Display description if it exists.
export default function Description({ description } : DescriptionProps) {
	if (!description) { return null }

	return (
		<div className="pt-4">
			<p className="border-t pt-2">{ description }</p>
		</div>
	)
}
