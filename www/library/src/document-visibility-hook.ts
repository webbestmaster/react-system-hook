/* global document */

import {useCallback, useEffect, useMemo, useState} from "react";

import {debounce} from "./util/function";
import {getDocumentIsVisible} from "./util/system";

export function useDocumentVisibility(): boolean {
    const [isVisible, setIsVisible] = useState<boolean>(getDocumentIsVisible());

    const handleVisibilityChange = useCallback(() => {
        setIsVisible(getDocumentIsVisible());
    }, []);

    useEffect(() => {
        const handleVisibilityChangeDebounced = debounce<[]>(handleVisibilityChange, 150);

        document.addEventListener("visibilitychange", handleVisibilityChangeDebounced, {capture: false, passive: true});

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChangeDebounced, {capture: false});
        };
    }, [handleVisibilityChange]);

    return useMemo((): boolean => {
        return isVisible;
    }, [isVisible]);
}
