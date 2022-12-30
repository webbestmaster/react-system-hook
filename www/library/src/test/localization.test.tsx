/* eslint-disable sonarjs/no-duplicate-string */

import assert from 'node:assert/strict';

import {describe, test} from '@jest/globals';

import {render} from '@testing-library/react';

import {useSystem, useScreenSize, useScreenWidth, useScreenHeight, useDocumentVisibility} from '../../library';

describe('System hooks', () => {
    test('Just get all available data', async () => {
        assert.equal(1, 1);

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

        unmount();
    });
});
