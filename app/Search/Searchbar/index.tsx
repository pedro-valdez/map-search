import SearchbarInput from "./Input";
import SubmitButton from "./Submit";


// Dumb component simply displaying input and buttons
export default function Searchbar() {
	return (
		<div className="flex bg-base-100 rounded-btn outline-2 outline-[hsl(var(--bc)/0.2)] focus-within:outline">
			<SubmitButton />
			<SearchbarInput />
		</div>
	)
}
