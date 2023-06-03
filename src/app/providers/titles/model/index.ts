import { createStore } from "solid-js/store";
import { Title } from "../api";

export interface TitleStore {
	title: Title,
	changeTitle: (values: Title) => void,
}

export const [titlesStore, setTitlesStore] = createStore<TitleStore>({
	title: {
		name: "Title",
		section: "",
		number: 0,
	},

	changeTitle: (values) => {
		setTitlesStore("title", "name", () => values.name ? values.name : "");
		setTitlesStore("title", "section", () => values.section ? values.section : "");
		setTitlesStore("title", "number", () => values.number ? values.number : 0);
	},
});
