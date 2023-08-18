/* global document */

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import {selector} from "./const";
import {ExampleApp} from "./component/app/example-app";

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper === null) {
    console.error("Can not find nodeWrapper");
} else {
    createRoot(nodeWrapper).render(
        <StrictMode>
            <ExampleApp />
        </StrictMode>
    );
}
