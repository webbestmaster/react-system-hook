/* global window */
import { useCallback, useEffect, useMemo, useState } from "react";
import { getScreenSize } from "./system-hook-helper";
import { debounce } from "./util/function";
export function useScreenSize() {
    const { width: defaultWidth, height: defaultHeight } = getScreenSize();
    const [width, setWidth] = useState(defaultWidth);
    const [height, setHeight] = useState(defaultHeight);
    const handleResize = useCallback(() => {
        const { width: updatedWidth, height: updatedHeight } = getScreenSize();
        setWidth(updatedWidth);
        setHeight(updatedHeight);
    }, []);
    useEffect(() => {
        const handleResizeDebounced = debounce(handleResize, 150);
        window.addEventListener("resize", handleResizeDebounced, { capture: false, passive: true });
        return () => {
            window.removeEventListener("resize", handleResizeDebounced, { capture: false });
        };
    }, [handleResize]);
    return useMemo(() => {
        return { height, width };
    }, [height, width]);
}
//# sourceMappingURL=screen-size-hook.js.map