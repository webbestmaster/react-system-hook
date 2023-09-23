/* global document */
export function getDocumentIsVisible() {
    if (typeof document === "undefined") {
        return false;
    }
    return document.visibilityState === "visible";
}
//# sourceMappingURL=system.js.map