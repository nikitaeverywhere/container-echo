import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 80;
const jsonToText = (obj) => JSON.stringify(obj, null, 1).replace(/\n\s*/g, " ");

app.use(bodyParser.text({ type: "*/*" }));

app.all("*", (req, res) => {
  const response = {
    "request-path": req.url,
    "request-headers": req.headers,
    "request-body": req.body,
    "container-envs": process.env,
  };
  console.log(jsonToText(response));
  res.send(response);
});

app.listen(port, () => {
  console.log(
    `${jsonToText({
      "listening-on-port": port,
      "container-envs": process.env,
    })}`
  );
});
