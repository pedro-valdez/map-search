type WebsiteLink = {
	website: string | null
}

export default function WebsiteLink({ website } : WebsiteLink) {
	return (
		<a
			href={website ?? undefined}
			target="_blank"
			className={`btn ${website ? "" : "btn-disabled"} mt-4 sm:mt-0`}
		>
			Visit website
		</a>
	)
}
