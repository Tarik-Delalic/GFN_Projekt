const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.json());
const apiRoutes = require('./routes/routes');
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when the root URL (/) is visited
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use('/', apiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
