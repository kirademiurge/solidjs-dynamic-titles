import { JSX, createEffect } from "solid-js";
import { titlesStore } from "../model";

export interface TitlesProviderProps {
	children: JSX.Element,
}

export const TitlesProvider = (props: TitlesProviderProps) => {
	createEffect( () => {
		updateView();
	} );

	return (
		<>
			{props.children}
		</>
	)
}



function updateView () {
	document.title = `
		${titlesStore.title.number ? `(${titlesStore.title.number})` : ""}
		${titlesStore.title.section ? titlesStore.title.section : ""}
		${titlesStore.title.name && titlesStore.title.section ? "|" : ""}
		${titlesStore.title.name ? titlesStore.title.name : ""}
	`;
}
