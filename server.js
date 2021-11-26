const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());

const whitelist = ["https://kayahan-todo-list-react.herokuapp.com"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))


app.use('/', require('./routes/routes'));

//Global error handler
app.use((err, req, res, next) => {
    console.log(err);
    if(err && err.code) res.status(err.code).json({ message: err.message });
    else res.status(500).json({ message: 'Opps! Something went wrong!'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on port ${port}`));