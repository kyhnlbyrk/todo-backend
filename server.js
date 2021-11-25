const express = require('express');
const app = express();
app.use(express.json());


app.use('/', require('./routes/routes'));

//Global error handler
app.use((err, req, res, next) => {
    console.log(err);
    if(err && err.code) res.status(err.code).json({ message: err.message });
    else res.status(500).json({ message: 'Opps! Something went wrong!'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on port ${port}`));