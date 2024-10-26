const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Dummy database menggunakan array
let mahasiswa = [
    { id: 1, nama: 'Budi', jurusan: 'Informatika' },
    { id: 2, nama: 'Siti', jurusan: 'Sistem Informasi' },
];

// Create (Menambahkan Mahasiswa)
app.post('/mahasiswa', (req, res) => {
    const { nama, jurusan } = req.body;
    const newId = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
    const newMahasiswa = { id: newId, nama, jurusan };
    mahasiswa.push(newMahasiswa);
    res.status(201).json({ message: 'Mahasiswa berhasil ditambahkan', data: newMahasiswa });
});

// Read (Mengambil Semua Data Mahasiswa)
app.get('/mahasiswa', (req, res) => {
    res.json({ data: mahasiswa });
});

// Read (Mengambil Data Mahasiswa Berdasarkan ID)
app.get('/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const mhs = mahasiswa.find(m => m.id == id);
    if (mhs) {
        res.json({ data: mhs });
    } else {
        res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
    }
});

// Update (Mengubah Data Mahasiswa Berdasarkan ID)
app.put('/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const { nama, jurusan } = req.body;
    const index = mahasiswa.findIndex(m => m.id == id);

    if (index !== -1) {
        mahasiswa[index] = { id: Number(id), nama, jurusan };
        res.json({ message: 'Mahasiswa berhasil diubah', data: mahasiswa[index] });
    } else {
        res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
    }
});

// Delete (Menghapus Data Mahasiswa Berdasarkan ID)
app.delete('/mahasiswa/:id', (req, res) => {
    const { id } = req.params;
    const index = mahasiswa.findIndex(m => m.id == id);

    if (index !== -1) {
        const deletedMahasiswa = mahasiswa.splice(index, 1);
        res.json({ message: 'Mahasiswa berhasil dihapus', data: deletedMahasiswa[0] });
    } else {
        res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
