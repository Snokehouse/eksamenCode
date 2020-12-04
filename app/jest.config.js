module.exports = {

    collectiveCoverageFrom: [
        'src/**/*.js?(x)'
    ],

    setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],

    testEnvironment: "jsdom",

    testMatch: [
        "<rootDir>/test/**/?(*.)+(spec|test).[tj]s?(x)"
    ],

}