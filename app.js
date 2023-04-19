import { testSuiteMiddleware, testCaseMiddleware } from './middlewares.js';
import express from 'express';

const app = express();
const port = 3000;

app.use(testSuiteMiddleware, testCaseMiddleware);

app.post('/signup', (request, response) => {
    console.log('signup');
    response.send('signup');
});

app.get('/user/me', (request, response) => {
    console.log('userme');
    response.send('userme');
});

app.put('/categories', (request, response) => {
    console.log('categories');
    response.send('categories');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
