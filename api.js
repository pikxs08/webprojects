const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Get Json data
app.get("/api", (req, res) => {
  fs.readFile("web-projects.json", (err, data) => {
    if (err) {
      console.log("Error getting data");
    } else {
      const jsonData = JSON.parse(data);
      res.send(jsonData);
    }
  });
});

// Get all projects

function getProjects() {
  try {
    const projects = fs.readFileSync("web-projects.json");
    return JSON.parse(projects);
  } catch (e) {
    // file non-existent
    fs.writeFileSync("web-projects.json", "[]");
    return [];
  }
}

function addProject(id, title, description, url) {
  const projects = getProjects();
  projects.push({
    id: id,
    title: title,
    description: description,
    url: url,
  });
  console.log(projects);
  fs.writeFileSync("web-projects.json", JSON.stringify(projects));
}

// Post New entry

app.post("/", (req, res) => {
  const projects = getProjects();
  const newTitle = req.query.title;
  const newDescription = req.query.description;
  const newURL = req.query.url;

  // Check if the project already exists
  const projectExists = projects.some((project) => project.title === newTitle);

  if (projectExists) {
    res.send("Project already exists!");
  } else {
    // If project doesn't exist, add it
    const newId = projects.length + 1;
    addProject(newId, newTitle, newDescription, newURL);
    res.send("Project Successfully added!");
  }
});

// Put project update
app.put("/:id", (req, res) => {
  const projects = getProjects();
  const projectId = parseInt(req.params.id); // Corrected to extract from URL path
  const updatedTitle = req.query.title;
  const updatedDescription = req.query.description;

  // Find index of project
  const projectIndex = projects.findIndex(
    (project) => project.id === projectId
  );

  // If project exists, update it
  if (projectIndex > -1) {
    projects[projectIndex].title = updatedTitle;
    projects[projectIndex].description = updatedDescription;
    fs.writeFileSync("web-projects.json", JSON.stringify(projects));
    res.send("Project Successfully updated!");
  } else {
    res.send("Project does not exist!");
  }
});

// Delete project

app.delete("/:id", (req, res) => {
  const projects = getProjects();
  const projectId = parseInt(req.params.id);

  // Find index of project
  const projectIndex = projects.findIndex(
    (project) => project.id === projectId
  );

  // If project exists, delete it
  if (projectIndex > -1) {
    projects.splice(projectIndex, 1);
    fs.writeFileSync("web-projects.json", JSON.stringify(projects));
    res.send("Project Successfully deleted!");
  } else {
    res.send("Project does not exist!");
  }
});
