import { testSuiteMiddleware, testCaseMiddleware } from './middlewares.js';
import express from 'express';
import bodyParser from 'body-parser';   

const app = express();
const port = 3000;

app.use(
    bodyParser.json(),
    express.json(),
    testSuiteMiddleware,
    testCaseMiddleware
);

app.post('/api/v1/signup', (request, response) => {
    console.log('signup');
    response.send('signup');
});

app.get('/api/v1/onboarding', (request, response) => {
    console.log('onboarding');
    response.send('onboarding');
});

app.put('/api/v1/userHSChannels', (request, response) => {
    console.log('userHSChannels');
    response.send('userHSChannels');
});

app.get('/api/v1/user/me', (request, response) => {
    console.log('userme');
    response.send('userme');
});

app.get('/onboardingTags', (request, response) => {
    console.log('onboardingTags');
    response.send('onboardingTags');
});

app.put('/userTopics', (request, response) => {
    console.log('userTopics');
    response.send('userTopics');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
