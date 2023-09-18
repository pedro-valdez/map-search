import BackButton from "./Back";
import FindButton from "./Find";

/*
 * Because of the CSS, BackButton and FindButton
 * are never visible simultaneously.
*/
export default function SubmitButton() {
	return (
		<>
			<BackButton />
			<FindButton />
		</>
	)
}
