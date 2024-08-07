/* global window */

import {useCallback, useEffect, useMemo, useState} from "react";

import {getScreenSize} from "./system-hook-helper";
import type {RectangleSizeType} from "./system-hook-type";
import {debounce} from "./util/function";

export function useScreenSize(): RectangleSizeType {
    const {width: defaultWidth, height: defaultHeight} = getScreenSize();

    const [width, setWidth] = useState<number>(defaultWidth);
    const [height, setHeight] = useState<number>(defaultHeight);

    const handleResize = useCallback(() => {
        const {width: updatedWidth, height: updatedHeight} = getScreenSize();

        setWidth(updatedWidth);
        setHeight(updatedHeight);
    }, []);

    useEffect(() => {
        const handleResizeDebounced = debounce<[]>(handleResize, 150);

        window.addEventListener("resize", handleResizeDebounced, {capture: false, passive: true});

        return (): undefined => {
            window.removeEventListener("resize", handleResizeDebounced, {capture: false});
        };
    }, [handleResize]);

    return useMemo((): RectangleSizeType => {
        return {height, width};
    }, [height, width]);
}
