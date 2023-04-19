import { userConfigs, testCaseTemplates, testSuiteInstances } from "./schemas.js"

export const findUserConfigById = function(userConfigId) {
    for (const userConfig of userConfigs) {
        if (userConfig.id === userConfigId) {
            return userConfig;
        }
    }
};

export const findRunningTestSuiteInstance = function(userId, deviceId) {
    for (const testSuiteInstance of testSuiteInstances) {
        const userConfig = findUserConfigById(testSuiteInstance.userConfigId);
        if (userConfig === undefined) {
            continue;
        }
        if (userConfig.userId === userId &&
            userConfig.deviceId === deviceId &&
            userConfig.status === 'active' &&
            testSuiteInstance.status === 'running'
        ) {
            return testSuiteInstance;
        }
    }
};

export const findTestCaseTemplates = function(testSuiteTemplateId) {
    const result = [];
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.testSuiteTemplateId === testSuiteTemplateId) {
            result.push(testCaseTemplate);
        }
    }
    return result;
};

export const findFirstTestCaseTemplate = function(endpoint, method) {
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.endpoint === endpoint
            && testCaseTemplate.method === method
            && testCaseTemplate.order === 1) {
            return testCaseTemplate;
        }
    }
}

export const findTestCaseTemplate = function(testSuiteTemplateId, endpoint, method, order) {
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.endpoint === endpoint &&
            testCaseTemplate.method === method &&
            testCaseTemplate.order === order &&
            testCaseTemplate.testSuiteTemplateId === testSuiteTemplateId) {
            return testCaseTemplate;
        }
    }
}

export const findUserConfig = function(userId, deviceId, testSuiteTemplateId, status) {
    for (const userConfig of userConfigs) {
        if (userConfig.userId === userId
            && userConfig.deviceId === deviceId
            && userConfig.testSuiteTemplateId === testSuiteTemplateId
            && userConfig.status === status) {
            return userConfig;
        }
    }
}