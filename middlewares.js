import {
    shouldSetUpTestSuite,
    setUpTestSuite,
    shouldSetUpTestCase,
    setUpTestCase,
    runTestCase,
    getBaseUrl
} from "./helpers.js";

export const testSuiteMiddleware = function(request, response, next) {
    const userId = request.body.userId;
    const deviceId = request.body.deviceId;
    const endpoint = getBaseUrl(request.url);
    const method = request.method;

    if (shouldSetUpTestSuite(userId, deviceId, endpoint, method)) {
        console.log("Setting up test suite ...");
        setUpTestSuite(userId, deviceId, endpoint, method);
    } else {
        console.log("Should NOT set up test suite");
    }
    next();
};

export const testCaseMiddleware = function(request, response, next) {
    const userId = request.body.userId;
    const deviceId = request.body.deviceId;
    const endpoint = getBaseUrl(request.url);
    const method = request.method;
    const queryParams = request.query;
    const requestBody = request.body;
    if (shouldSetUpTestCase(userId, deviceId, endpoint, method)) {
        console.log("Setting up test case ...");
        const testCase = setUpTestCase(userId, deviceId, endpoint, method, queryParams, requestBody);
        console.log("Running test case ...");
        runTestCase(testCase);
    } else {
        console.log("Should NOT set up test case");
    }
    next();
};
