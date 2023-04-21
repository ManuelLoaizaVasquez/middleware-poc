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

app.post('/signup', (request, response) => {
    console.log('signup');
    response.send('signup');
});

app.get('/user/me', (request, response) => {
    console.log('userme');
    response.send('userme');
});

app.put('/headlineCategories', (request, response) => {
    console.log('headlineCategories');
    response.send('headlineCategories');
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
