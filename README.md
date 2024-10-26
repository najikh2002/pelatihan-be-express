## Pelatihan BE menggunakan express.js

- **Membuat Mahasiswa (POST)**: Menambahkan objek mahasiswa baru ke dalam array `mahasiswa`.
- **Membaca Semua Mahasiswa (GET)**: Mengambil semua data dari array `mahasiswa`.
- **Membaca Mahasiswa Berdasarkan ID (GET)**: Mengambil data dari array berdasarkan ID.
- **Memperbarui Mahasiswa (PUT)**: Mengubah data mahasiswa berdasarkan ID yang diberikan.
- **Menghapus Mahasiswa (DELETE)**: Menghapus data mahasiswa dari array berdasarkan ID.

### Cara Menjalankan

1. **Install & Jalankan Server**:

   ```bash
    npm install
   ```

   ```bash
   node app.js
   ```

2. **Cobalah Akses Endpoint** dengan aplikasi seperti **Postman** atau **cURL**:
   - **POST** `/mahasiswa` untuk menambahkan data baru.
   - **GET** `/mahasiswa` untuk mendapatkan semua data.
   - **GET** `/mahasiswa/:id` untuk mendapatkan data tertentu.
   - **PUT** `/mahasiswa/:id` untuk memperbarui data.
   - **DELETE** `/mahasiswa/:id` untuk menghapus data.
