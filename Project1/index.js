// DESIGNING REST API

const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("hello from middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("hello from middleware 2");
  next()
});

// Client side rendering
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// Server side rendering
// Rest API

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .delete((req, res) => {
    // TODO: Delete the user with id
    return res.json({ status: "pending" });
  })
  .patch((req, res) => {
    // TODO: Edit the user with id
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  //Create New user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
  });
  y 
});

app.patch("/api/users/:id", (req, res) => {
  // TODO: Edit the user with id
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
