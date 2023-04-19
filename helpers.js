import { testCaseInstances, testSuiteInstances } from './schemas.js';
import {
    findUserConfig,
    findFirstTestCaseTemplate,
    findTestCaseTemplate,
    findTestCaseTemplates,
    findRunningTestSuiteInstance,
    findUserConfigById,
    updateTestSuiteInstanceDueToTestCaseUpdate,
    updateTestCaseInstance
} from './handlers.js';

export const setUpTestSuite = function(userId, deviceId, endpoint, method) {
    const testCaseTemplate = findFirstTestCaseTemplate(endpoint, method);
    const userConfig = findUserConfig(userId, deviceId, testCaseTemplate.testSuiteTemplateId, "active");
    const testCaseTemplates = findTestCaseTemplates(testCaseTemplate.testSuiteTemplateId);

    // TODO(Manuel): status, numberOfSetUpTestCases and numberOfTestCases
    // should be properties that are calculated in runtime
    const newTestSuiteInstance =
    {
        id: testSuiteInstances.length,
        userConfigId: userConfig.id,
        status: 'running',
        startTimestamp: Date.now(),
        endTimestamp: null,
        numberOfSetUpTestCases: 0,
        numberOfTestCases: testCaseTemplates.length
    };

    testSuiteInstances.push(newTestSuiteInstance);
    console.log("New test suite instance created:", newTestSuiteInstance);
    return newTestSuiteInstance;
};

export const shouldSetUpTestSuite = function (userId, deviceId, endpoint, method) {
    const runningTestSuiteInstance = findRunningTestSuiteInstance(userId, deviceId);
    if (runningTestSuiteInstance !== undefined) {
        return false;
    }

    // Find a test case template associated with the current request
    // which is the first one of a test suite template
    const testCaseTemplate = findFirstTestCaseTemplate(endpoint, method);
    if (testCaseTemplate === undefined) {
        return false;
    }

    // Find an active user configuration associated with our user and found test case template
    const userConfig = findUserConfig(userId, deviceId, testCaseTemplate.testSuiteTemplateId, "active");
    return userConfig !== undefined;
};

export const runTestCase = function(testCase) {
    const updatedTestCase = testCase;
    if (testCase.params.magic <= 42) {
        updatedTestCase.status = 'passed';
    } else {
        updatedTestCase.status = 'failed';
    }
    console.log("Test case result:", updatedTestCase.status);
    updateTestCaseInstance(updatedTestCase);
    updateTestSuiteInstanceDueToTestCaseUpdate(updatedTestCase);
    return updatedTestCase;
};

export const setUpTestCase = function(userId, deviceId, endpoint, method, params) {
    const runningTestSuiteInstance = findRunningTestSuiteInstance(userId, deviceId);

    const newTestCaseInstance = {
        id: Date.now(),
        testSuiteInstanceId: runningTestSuiteInstance.id,
        status: "running",
        startTimestamp: Date.now(),
        endpoint: endpoint,
        method: method,
        params: params,
        order: runningTestSuiteInstance.numberOfSetUpTestCases + 1
    };

    testCaseInstances.push(newTestCaseInstance);
    console.log("New test case instance created:", newTestCaseInstance);
    return newTestCaseInstance;
};

export const shouldSetUpTestCase = function (userId, deviceId, endpoint, method) {
    const runningTestSuiteInstance = findRunningTestSuiteInstance(userId, deviceId);
    if (runningTestSuiteInstance === undefined) {
        return false;
    }
    
    const userConfig = findUserConfigById(runningTestSuiteInstance.userConfigId);

    if (userConfig === undefined) {
        return false;
    }

    const testCaseTemplate = findTestCaseTemplate(userConfig.testSuiteTemplateId, endpoint, method, runningTestSuiteInstance.numberOfSetUpTestCases + 1);
    return testCaseTemplate !== undefined;
};
