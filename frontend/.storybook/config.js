import { configure } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";
addDecorator(withKnobs);
setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const reqComponents = require.context("../src/components/", true, /.stories.tsx$/);
function loadStories() {
  reqComponents.keys().forEach(reqComponents);
}

configure(loadStories, module);
