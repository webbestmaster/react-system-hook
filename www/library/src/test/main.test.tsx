/* global window, Event */

import {describe, expect,it} from "@jest/globals";
import {act,render} from "@testing-library/react";

import {waitForTime} from "../../../../test-unit/util";
import {useDocumentVisibility,useScreenHeight, useScreenSize, useScreenWidth, useSystem} from "../../library";

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
