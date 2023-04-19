export const users = [
    {
        "id": "user-id-1",
        "name": "user-name-1"
    },
    {
        "id": "user-id-2",
        "name": "user-name-2"
    }
];

export const userConfigs = [
    {
        "id": "userconfig-id-1",
        "userId": "user-id-1",
        "deviceId": "roku",
        "status": "active",
        "testSuiteTemplateId": "test-suite-template-id-1"
    },
    {
        "id": "userconfig-id-2",
        "userId": "user-id-1",
        "deviceId": "roku",
        "status": "active",
        "testSuiteTemplateId": "test-suite-template-id-1"
    },
    {
        "id": "userconfig-id-3",
        "userId": "user-id-1",
        "deviceId": "android",
        "status": "inactive",
        "testSuiteTemplateId": "test-suite-template-id-1"
    },
    {
        "id": "userconfig-id-4",
        "userId": "user-id-2",
        "deviceId": "ios",
        "status": "active",
        "testSuiteTemplateId": "test-suite-template-id-1"
    }
];

export const testSuiteTemplates = [
    {
        "id": "test-suite-template-id-1",
        "name": "test-suite-name-1"
    },
    {
        "id": "test-suite-template-id-2",
        "name": "test-suite-name-2"
    }
];

export const testCaseTemplates = [
    {
        "id": "test-case-template-id-1",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/signup",
        "method": "POST",
        "order": 1
    },
    {
        "id": "test-case-template-id-2",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/user/me",
        "method": "GET",
        "order": 2
    },
    {
        "id": "test-case-template-id-3",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/categories",
        "method": "PUT",
        "order": 3
    },
    {
        "id": "test-case-template-id-4",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/user/me",
        "method": "GET",
        "order": 4
    }
];

export const testSuiteInstances = [

];

export const testCaseInstances = [

];
