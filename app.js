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
  event.preventDefault(); // Mencegah halaman me-refresh
  alert('Hore! Transaksi berhasil dicatat.');
  tutupModal();
}
