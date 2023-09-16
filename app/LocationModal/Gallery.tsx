type GalleryProps = {
	images: string[] | null,
}

export default function Gallery({ images } : GalleryProps) {
	if (!images) { return null }

	return (
		<div className="grid grid-cols-3 pt-4">
			{
				images.map((image, i) => (
					<img src={image} alt="" key={i}/>
				))
			}
		</div>
	)
}
