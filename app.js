// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk menyajikan file statis dari folder 'public'
app.use(express.static('public'));

// Routing untuk halaman home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://0.0.0.0:${port}`);
});
