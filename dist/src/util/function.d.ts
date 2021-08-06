export declare function debounce<ArgsType extends Array<unknown>>(wrappedFunction: (...args: ArgsType) => unknown, waitInMs: number): (...args: ArgsType) => void;
