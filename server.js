const createApp = require("./config/app");
const PORT = 3000;

const app = createApp();

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running, you better catch it!");
});