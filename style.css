<?php
// Cek apakah ada file yang diunggah
if ($_FILES['gambar']['error'] === UPLOAD_ERR_OK) {
    // Tentukan direktori penyimpanan gambar
    $uploadDir = 'uploads/';

    // Ambil informasi file yang diunggah
    $fileName = $_FILES['gambar']['name'];
    $fileTmpName = $_FILES['gambar']['tmp_name'];

    // Pindahkan file yang diunggah ke direktori penyimpanan
    if (move_uploaded_file($fileTmpName, $uploadDir . $fileName)) {
        echo 'Gambar berhasil diunggah.';
    } else {
        echo 'Terjadi kesalahan saat mengunggah gambar.';
    }
} else {
    echo 'Terjadi kesalahan saat mengunggah gambar.';
}
?>
