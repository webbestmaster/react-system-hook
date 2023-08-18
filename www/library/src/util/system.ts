/* global document */

export function getDocumentIsVisible(): boolean {
    if (typeof document === "undefined") {
        return false;
    }

    return document.visibilityState === "visible";
}
