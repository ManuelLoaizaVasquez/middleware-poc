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
        "endpoint": "/api/v1/signup",
        "method": "POST",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" },
                "defaultCategories": { "type": "string" }
            },
            "required": ["deviceId"]
        },
        "order": 1
    },
    {
        "id": "test-case-template-id-2",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/api/v1/onboarding",
        "method": "GET",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" },
                "imageType": { "type": "string" },
                "imageSize": { "type": "string" },
                "type": { "type": "string", "const": "hsChannels" }
            },
            "required": ["deviceId", "imageType", "imageSize", "type"]
        },
        "order": 2
    },
    {
        "id": "test-case-template-id-3",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/api/v1/userHSChannels",
        "method": "PUT",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" },
            },
            "required": ["deviceId"]
        },
        "requestBody": {
            "type": "object",
            "properties": {
                "favorites": { "type": "number", "minimum": 0 }
            },
            "required": ["favorites"]
        },
        "order": 3
    },
    {
        "id": "test-case-template-id-4",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/api/v1/user/me",
        "method": "GET",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" },
                "fields": { "type": "string", "const": "location" },
                "timezoneId": { "type": "string" }
            },
            "required": ["deviceId", "fields", "timezoneId"]
        },
        "order": 4
    },
    {
        "id": "test-case-template-id-5",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/api/v1/onboarding",
        "method": "GET",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" },
                "imageType": { "type": "string" },
                "imageSize": { "type": "string" },
                "type": { "type": "string", "const": "publishers" }
            },
            "required": ["deviceId", "imageType", "imageSize", "type"]
        },
        "order": 5
    },
    {
        "id": "test-case-template-id-6",
        "testSuiteTemplateId": "test-suite-template-id-1",
        "endpoint": "/api/v1/user/me",
        "method": "GET",
        "queryParams": {
            "type": "object",
            "properties": {
                "deviceId": { "type": "string" }
            },
            "required": ["deviceId"]
        },
        "order": 6
    }
];

export const testSuiteInstances = [

];

export const testCaseInstances = [

];
