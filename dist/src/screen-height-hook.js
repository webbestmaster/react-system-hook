/* global window */
import { useCallback, useEffect, useState } from "react";
import { getScreenSize } from "./system-hook-helper";
import { debounce } from "./util/function";
export function useScreenHeight() {
    const { height: defaultHeight } = getScreenSize();
    const [height, setHeight] = useState(defaultHeight);
    const handleResize = useCallback(() => {
        const { height: updatedHeight } = getScreenSize();
        setHeight(updatedHeight);
    }, []);
    useEffect(() => {
        const handleResizeDebounced = debounce(handleResize, 150);
        window.addEventListener("resize", handleResizeDebounced, { capture: false, passive: true });
        return () => {
            window.removeEventListener("resize", handleResizeDebounced, { capture: false });
        };
    }, [handleResize]);
    return height;
}
//# sourceMappingURL=screen-height-hook.js.map