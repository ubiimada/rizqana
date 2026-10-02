const modal = document.getElementById('modalTransaksi');

function bukaModal() {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function tutupModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function simpanData(event) {
  function simpanData(event) {
  event.preventDefault(); // Mencegah halaman refresh

  // 1. Mengambil angka dan teks dari form
  const nominalAngka = document.getElementById('inputNominal').value;
  const teksKeterangan = document.getElementById('inputKeterangan').value;

  // 2. Mengirim data ke tabel 'transaksi' di Firebase
  db.collection("transaksi").add({
    nominal: Number(nominalAngka),
    keterangan: teksKeterangan,
    tipe: "pengeluaran",
    tanggal: firebase.firestore.FieldValue.serverTimestamp() // Jam otomatis dari server
  })
  .then(() => {
    // 3. Jika sukses tersimpan
    alert("Berhasil! Transaksi sudah tersimpan.");
    
    // Kosongkan form kembali
    document.getElementById('inputNominal').value = '';
    document.getElementById('inputKeterangan').value = '';
    
    tutupModal();
  })
  .catch((error) => {
    // 4. Jika gagal
    console.error("Gagal menyimpan:", error);
    alert("Terjadi kesalahan. Pastikan internet Anda aktif.");
  });
}
