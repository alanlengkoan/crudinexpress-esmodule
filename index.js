import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";

import router from "./src/routes/routes.js";
import mySql from "./src/configs/database.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// untuk cek koneksi database
mySql.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database terkoneksi!");
    }
});

// untuk mengakses file static
app.use(express.static(path.join(__dirname, "public")));

// untuk set template engine
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
// app.set('layout', 'pages/base');
app.set('layout extractScripts', true);

// untuk routes
app.use(router);
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`);
});