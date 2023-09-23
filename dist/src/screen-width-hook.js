/* global window */
import { useCallback, useEffect, useState } from "react";
import { debounce } from "./util/function";
import { getScreenSize } from "./system-hook-helper";
export function useScreenWidth() {
    const { width: defaultWidth } = getScreenSize();
    const [width, setWidth] = useState(defaultWidth);
    const handleResize = useCallback(() => {
        const { width: updatedWidth } = getScreenSize();
        setWidth(updatedWidth);
    }, []);
    useEffect(() => {
        const handleResizeDebounced = debounce(handleResize, 150);
        window.addEventListener("resize", handleResizeDebounced, { capture: false, passive: true });
        return () => {
            window.removeEventListener("resize", handleResizeDebounced, { capture: false });
        };
    }, [handleResize]);
    return width;
}
//# sourceMappingURL=screen-width-hook.js.map