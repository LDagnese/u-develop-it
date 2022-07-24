const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for a bad request
app.use((req, res) => {
    res.status(404).end();
})

db.connect(err => {
    if (err) throw err;
    console.log('Database Connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

