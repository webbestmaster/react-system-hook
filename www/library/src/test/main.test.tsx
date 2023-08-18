/* global window, Event */
/* eslint-disable sonarjs/no-duplicate-string */

import {describe, it, expect} from "@jest/globals";

import {render, act} from "@testing-library/react";

import {useSystem, useScreenSize, useScreenWidth, useScreenHeight, useDocumentVisibility} from "../../library";
import {waitForTime} from "../../../../test-unit/util";

describe("system hooks", () => {
    it("just get all available data", async () => {
        expect.assertions(0);

        function InnerComponent(): JSX.Element {
            const system = useSystem();
            const screenSize = useScreenSize();
            const screenWidth = useScreenWidth();
            const screenHeight = useScreenHeight();
            const documentVisibility = useDocumentVisibility();

            return (
                <div>
                    <span>{JSON.stringify(system)}</span>
                    <span>{JSON.stringify(screenSize)}</span>
                    <span>{JSON.stringify(screenWidth)}</span>
                    <span>{JSON.stringify(screenHeight)}</span>
                    <span>{JSON.stringify(documentVisibility)}</span>
                </div>
            );
        }

        const {unmount} = render(<InnerComponent />);

        act(() => {
            window.dispatchEvent(new Event("resize"));
            window.document.dispatchEvent(new Event("visibilitychange"));
        });

        await waitForTime(1000);

        unmount();
    });
});
