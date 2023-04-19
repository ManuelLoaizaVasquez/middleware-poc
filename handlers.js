import { userConfigs, testCaseTemplates } from "./schemas.js"

export const findRunningUserConfig = function(userId, deviceId) {
    for (const userConfig of userConfigs) {
        if (userConfig.userId === userId &&
            userConfig.deviceId === deviceId &&
            userConfig.status === "running") {
            return userConfig;
        }
    }
}

export const findTestCaseTemplates = function(testSuiteTemplateId) {
    const result = [];
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.testSuiteTemplateId === testSuiteTemplateId) {
            result.push(testCaseTemplate);
        }
    }
    return result;
}

export const findTestCaseTemplate = function(endpoint, method, order) {
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.endpoint === endpoint
            && testCaseTemplate.method === method
            && testCaseTemplate.order === order) {
            return testCaseTemplate;
        }
    }
}

export const findUserConfig = function(userId, deviceId, testSuiteTemplateId, status) {
    console.log(userId, deviceId, testSuiteTemplateId, status);
    for (const userConfig of userConfigs) {
        if (userConfig.userId === userId
            && userConfig.deviceId === deviceId
            && userConfig.testSuiteTemplateId === testSuiteTemplateId
            && userConfig.status === status) {
            return userConfig;
        }
    }
}