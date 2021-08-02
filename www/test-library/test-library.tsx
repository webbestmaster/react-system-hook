import {ReactNode} from 'react';

import testLibraryStyle from './test-library.scss';

export type TestLibraryPropsType = {
    children: ReactNode;
    textContent: string;
};

export function TestLibrary(props: TestLibraryPropsType): JSX.Element {
    const {children, textContent} = props;

    return (
        <div className={testLibraryStyle.test_library}>
            <h3 className={testLibraryStyle.test_library__header}>{textContent}</h3>
            {children}
        </div>
    );
}
