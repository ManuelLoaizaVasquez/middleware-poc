import { testSuiteInstances } from './schemas.js';
import {
    findUserConfig,
    findTestCaseTemplate,
    findTestCaseTemplates
} from './handlers.js';

export const setUpTestSuite = function(userId, deviceId, endpoint, method) {
    const testCaseTemplate = findTestCaseTemplate(endpoint, method, 1);
    const userConfig = findUserConfig(userId, deviceId, testCaseTemplate.testSuiteTemplateId, "active");
    const testCaseTemplates = findTestCaseTemplates(testCaseTemplate.testSuiteTemplateId);

    // TODO(Manuel): numberOfSetUpTestCases and numberOfTestCases
    // should be properties that are calculated in runtime
    const newTestSuiteInstance =
    {
        'id': testSuiteInstances.length,
        'userConfigId': userConfig.id,
        status: 'running',
        startTimestamp: Date.now(),
        endTimestamp: null,
        numberOfSetUpTestCases: 0,
        numberOfTestCases: testCaseTemplates.length
    };

    testSuiteInstances.push(newTestSuiteInstance);
    console.log("New test suite instance created:", newTestSuiteInstance);
    return newTestSuiteInstance;
}

export const shouldSetUpTestSuite = function (userId, deviceId, endpoint, method) {
    // Find a test case template associated with the current request
    // which is the first one of a test suite template
    const testCaseTemplate = findTestCaseTemplate(endpoint, method, 1);
    if (testCaseTemplate === undefined) {
        return false;
    }

    // Find an active user configuration associated with our user and found test case template
    const userConfig = findUserConfig(userId, deviceId, testCaseTemplate.testSuiteTemplateId, "active");
    return userConfig !== undefined;
};
