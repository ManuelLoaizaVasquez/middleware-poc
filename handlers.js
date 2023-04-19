import {
    userConfigs,
    testCaseTemplates,
    testSuiteInstances,
    testCaseInstances
} from "./schemas.js"

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
};

export const findTestCaseTemplate = function(testSuiteTemplateId, endpoint, method, order) {
    for (const testCaseTemplate of testCaseTemplates) {
        if (testCaseTemplate.endpoint === endpoint &&
            testCaseTemplate.method === method &&
            testCaseTemplate.order === order &&
            testCaseTemplate.testSuiteTemplateId === testSuiteTemplateId) {
            return testCaseTemplate;
        }
    }
};

export const findUserConfig = function(userId, deviceId, testSuiteTemplateId, status) {
    for (const userConfig of userConfigs) {
        if (userConfig.userId === userId
            && userConfig.deviceId === deviceId
            && userConfig.testSuiteTemplateId === testSuiteTemplateId
            && userConfig.status === status) {
            return userConfig;
        }
    }
};

export const updateTestCaseInstance = function(updatedTestCaseInstance) {
    for (const [index, testCaseInstance] of testCaseInstances.entries()) {
        if (testCaseInstance.id === updatedTestCaseInstance.id) {
            testCaseInstances[index] = updatedTestCaseInstance;
            console.log('Test case instance updated:', updatedTestCaseInstance);
            break;
        }
    }
};

export const updateTestSuiteInstance = function(updatedTestSuiteInstance) {
    for (const [index, testSuiteInstance] of testSuiteInstances.entries()) {
        if (testSuiteInstance.id === updatedTestSuiteInstance.id) {
            testSuiteInstances[index] = updatedTestSuiteInstance;
            console.log('Test suite instance updaetd:', updatedTestSuiteInstance);
            break;
        }
    }
}

export const findTestSuiteInstanceById = function(testSuiteInstanceId) {
    for (const testSuiteInstance of testSuiteInstances) {
        if (testSuiteInstance.id === testSuiteInstanceId) {
            return testSuiteInstance;
        }
    }
}

export const updateTestSuiteInstanceDueToTestCaseUpdate = function(updatedTestCaseInstance) {
    const testSuiteInstance = findTestSuiteInstanceById(updatedTestCaseInstance.testSuiteInstanceId);
    if (testSuiteInstance === undefined) {
        return;
    }
    testSuiteInstance.numberOfSetUpTestCases += 1;
    if (updatedTestCaseInstance.status === 'failed') {
        testSuiteInstance.status = 'failed';
        testSuiteInstance.endTimestamp = Date.now();
    } else if (testSuiteInstance.numberOfSetUpTestCases === testSuiteInstance.numberOfTestCases) {
        testSuiteInstance.status = 'passed';
        testSuiteInstance.endTimestamp = Date.now();
    }
    updateTestSuiteInstance(testSuiteInstance);
}
