    const express = require("express");
    const app = express();
    const bookRoutes = require("./routes/bookRoutes");
    const logger = require("./middleware/logger");

    app.use(express.json());
    app.use(logger);

    app.use("/api/books", bookRoutes);

    app.get("/", (req, res) => {
        res.send("BookStore API Running...");
    });

    const PORT = 3005;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })