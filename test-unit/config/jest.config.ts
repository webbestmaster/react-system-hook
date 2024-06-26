import type {Config} from "jest";

const config: Config = {
    // Use true - stop after first failing test
    bail: false,
    collectCoverage: true,
    errorOnDeprecated: true,
    injectGlobals: true,
    maxConcurrency: 1,
    maxWorkers: 1,
    moduleNameMapper: {
        "^\\S+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    },
    modulePathIgnorePatterns: ["<rootDir>/tsc-check/"],
    passWithNoTests: true,
    preset: "ts-jest",
    rootDir: "../../",
    setupFilesAfterEnv: [],
    silent: true,
    testEnvironment: "jsdom",
    testTimeout: 10e3,
};

export default config;
