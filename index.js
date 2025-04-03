const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/api/donnees") {
    // Lire le fichier JSON et renvoyer les données
    const filePath = path.join(__dirname, "data.json");
    console.log("Chemin du fichier JSON :", filePath); // Debugging
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier :", err.message); // Debugging
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Erreur lors de la lecture des données" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(content); // Retourne le contenu du fichier JSON
      }
    });
  } else {
    // Servir les fichiers statiques (HTML, CSS, JS)
    let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    const ext = path.extname(filePath);
    let contentType = "text/html";

    switch (ext) {
      case ".css":
        contentType = "text/css";
        break;
      case ".js":
        contentType = "application/javascript";
        break;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.error("Fichier non trouvé :", filePath); // Debugging
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Fichier non trouvé");
        } else {
          console.error("Erreur interne au serveur :", err.message); // Debugging
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Erreur interne au serveur");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
