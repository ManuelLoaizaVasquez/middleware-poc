import {
    shouldSetUpTestSuite,
    setUpTestSuite
} from "./helpers.js";

export const testSuiteMiddleware = function(request, response, next) {
    const userId = request.query.userId;
    const deviceId = request.query.deviceId;
    const endpoint = request.url.slice(0, request.url.indexOf('?'));
    const method = request.method;

    if (shouldSetUpTestSuite(userId, deviceId, endpoint, method)) {
        console.log("Setting up test suite ...");
        setUpTestSuite(userId, deviceId, endpoint, method);
    } else {
        console.log("Should NOT set up test suite");
    }
    next();
};
