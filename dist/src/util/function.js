/* global NodeJS, setTimeout, clearTimeout */
export function debounce(wrappedFunction, waitInMs) {
    let timeout = null;
    return function debouncedFunction(...args) {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            wrappedFunction(...args);
        }, waitInMs);
    };
}
//# sourceMappingURL=function.js.map