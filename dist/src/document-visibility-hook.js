/* global document */
import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "./util/function";
import { getDocumentIsVisible } from "./util/system";
export function useDocumentVisibility() {
    const [isVisible, setIsVisible] = useState(getDocumentIsVisible());
    const handleVisibilityChange = useCallback(() => {
        setIsVisible(getDocumentIsVisible());
    }, []);
    useEffect(() => {
        const handleVisibilityChangeDebounced = debounce(handleVisibilityChange, 150);
        document.addEventListener("visibilitychange", handleVisibilityChangeDebounced, { capture: false, passive: true });
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChangeDebounced, { capture: false });
        };
    }, [handleVisibilityChange]);
    return useMemo(() => {
        return isVisible;
    }, [isVisible]);
}
//# sourceMappingURL=document-visibility-hook.js.map