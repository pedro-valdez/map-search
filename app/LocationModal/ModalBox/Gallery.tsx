type GalleryProps = {
	images: string[] | null,
}

// Display images only when images are provided.
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
