import express from 'express';
import bodyParser from 'body-parser';

import tasksRoutes from './routes/tasks.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
    console.log('[Test]!')

    res.send('Hello from Homepage')
});

app.listen(PORT, () => console.log(`Server Runing on port: http://localhost:${PORT}`));