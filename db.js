const mongoose = require("mongoose");

const url = process.env
  .ATLAS_URI`mongodb+srv://root:root@cluster0.nfkwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams = {
  url,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
