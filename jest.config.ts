import type { Config } from "jest";

const config: Config = {
  testMatch: ["**/tests-unit/**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/tests-e2e/"],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
