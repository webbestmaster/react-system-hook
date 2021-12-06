/* global document */

import {useCallback, useEffect, useMemo, useState} from 'react';

import {debounce} from './util/function';
import {getDocumentIsVisible} from './util/system';

export function useDocumentVisibility(): boolean {
    const [isVisible, setIsVisible] = useState<boolean>(getDocumentIsVisible());

    const handleVisibilityChange = useCallback(() => {
        setIsVisible(getDocumentIsVisible());
    }, []);

    useEffect(() => {
        const handleResizeDebounced = debounce<[]>(handleVisibilityChange, 150);

        document.addEventListener('visibilitychange', handleResizeDebounced, {capture: false, passive: true});

        return () => {
            document.removeEventListener('visibilitychange', handleResizeDebounced, {capture: false});
        };
    }, [handleVisibilityChange]);

    return useMemo((): boolean => isVisible, [isVisible]);
}
