import express from 'express';

const app: express.Application = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Health-Net authentication service listening on port ${port}!`);
});
