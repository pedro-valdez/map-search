import SearchbarInput from "./Input";
import SubmitButton from "./Submit";


export default function Searchbar() {
	return (
		<form className="flex bg-base-100 rounded-btn outline-2 outline-[hsl(var(--bc)/0.2)] focus-within:outline">
			<SubmitButton />
			<SearchbarInput />
		</form>
	)
}
