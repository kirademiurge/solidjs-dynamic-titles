import type { Component } from "solid-js";
import { TitlesProvider } from "./providers";

export const App: Component = () => {
  return (
    <TitlesProvider>
      <div>app</div>
    </TitlesProvider>
  );
};
