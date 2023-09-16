"use client"
export default function Search() {
	return (
		<div className="fixed z-20 group">
			<form className="flex">
				<button
					className="btn btn-square"
					onClick={(e) => {
						e.preventDefault()
						e.currentTarget.blur()
					}}
				>
				</button>
				<input
					type="search"
					placeholder="Search..."
					className="input"
				/>
			</form>

			<div className="hidden group-focus-within:block bg-base-100 aspect-square">
			</div>
		</div>
	)
}
