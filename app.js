// 1. Inisialisasi State Data Mahasiswa (Single Source of Truth)
let dataMahasiswa = [
    {
        npm: "230101001",
        nama: "Ahmad Fauzi",
        program_studi: "Teknik Informatika",
        angkatan: 2023,
        email: "ahmad.fauzi@example.com"
    },
    {
        npm: "230101002",
        nama: "Siti Nurhaliza",
        program_studi: "Sistem Informasi",
        angkatan: 2023,
        email: "siti.nurhaliza@example.com"
    },
    {
        npm: "240101015",
        nama: "Budi Santoso",
        program_studi: "Teknologi Informasi",
        angkatan: 2024,
        email: "budi.santoso@example.com"
    }
];

// 2. Elemen Dom Utama.
const alertBox = document.getElementById("alert-box");
const tabelBody = document.getElementById("tabel-body-mahasiswa");
const totalBadge = document.getElementById("total-mahasiswa-badge");
const totalInfo = document.getElementById("total-mahasiswa-info");

/*
// Seleksi Elemen Formulir Tambah Mahasiswa
const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNim = document.getElementById("nim");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");
*/


// 3. Fungsi Menampilkan Notifikasi Alert Interaktif (Percobaan 3-1).
function showAlert(message, type = "success") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alert-box alert-${type} show`

    setTimeout(() => {
        alertBox.className = 'alert-box'
    }, 4000)
}
    
    // Percobaan 3-1 langkah 4


// 4. Fungsi Pembaruan Counter Statistik Real-Time.
document.addEventListener(
    "DOMContentLoaded", function () {
        showAlert("Selamat Datang di Aplikasi SIMA", "info");
    }
)

function updateCounter(displayedCount, totalCount = dataMahasiswa.length) {
    if (totalBadge) {
        totalBadge.textContent = totalCount;
    }
    if (totalInfo) {
        totalInfo.textContent = `Total: ${totalCount} mahasiswa`;
    }
    if (totalInfo) {
        totalInfo.textContent = `Menampilkan: ${displayedCount} mahasiswa`;
    }
}

// 5. Fungsi Render Tabel ke DOM Secara Dinamis (Percobaan 3-2).

function renderTable(data = dataMahasiswa) {
    if (!tabelBody) return;
    tabelBody.innerHTML = "";

    // Percobaan 3-2 langkah 6

    if (data.length === 0) {
        tabelBody.innerHTML = `
        <tr>
        <td colspan="6" class="empty-row"
        Tidak ada data mahasiswa cocok atau tersimpan dalam sistem 
        </td>
        </tr>
        `;
        updateCounter(0);
        return;
    }
        // Percobaan 3-2 langkah 7
       
    

    
    data.forEach((mhs, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>
        <img src="img/avatar-default.svg" alt="Foto" ${mhs.nama}" class="avatar"-img" width="40" height="40">
        </td>
        <td><strong>${mhs.nama}</strong></td>
        <td>${mhs.nama}</td>
        <td><span class="badge">${mhs.program_studi}</span></td>
        <td>${mhs.angkatan}</td>
        <td><a href="mailto:${mhs.email}" class="link-email">${mhs.email}</a></td>
        <td>
        <button class="button" class="btn btn-danger btn-sm" onclick="hapusMahasiswa('${mhs.npm}')">
        Hapus
        </button>
        </td>
        `;
        tabelBody.appendChild(tr);
    });
    updateCounter(data.length);
}
document.addEventListener("DOMContentLoaded", function () {
    renderTable();
});
        // Percobaan 3-2 langkah 8


        // Percobaan 3-2 langkah 9
        


    // Percobaan 3-2 langkah 10



// 6. Validasi Form Sisi Klien Menggunakan Regular Expression (Percobaan 3-3).
function validateForm(npm, nama, prodi, angkatan, email) {
if (!/^[0-9]{8,12}$/.test(npm)) {
    return { isValid: false, message: "NPM harus berupa angka dan memiliki panjang 8-12 digit." };
}
if (dataMahasiswa.some(mhs => mhs.nim === nim)) {
    return { isValid: false, message: `NIM ${nim} sudah terdaftar.` };
}
if (nama.trim().length < 3) {
    return { isValid: false, message: "Nama harus memiliki panjang minimal 3 karakter." };
}
if (!prodi) {
    return { isValid: false, message: "Silahkan pilih satu program studi." }; 
}
const angk = parseInt(angkatan, 10);
if (isNaN(angk) || angk < 2018 || angk > 2026) {
    return { isValid: false, message: "Angkatan harus berupa angka antara 2000 hingga tahun sekarang." };
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { isValid: false, message: "Format email tidak valid." };
}
return { isValid: true, message: "Data valid." };
}

// 7. Event Handling Tambah Data Tanpa Reload (Percobaan 3-4).
const formTambah = document.getElementById("form-tambah-mahasiswa");
const inputNim = document.getElementById("nim");
const inputNama = document.getElementById("nama");
const selectProdi = document.getElementById("program_studi");
const inputAngkatan = document.getElementById("angkatan");
const inputEmail = document.getElementById("email");
if (formTambah) {
    formTambah.addEventListener("submit", function (event) {
        // Percobaan 3-4 Langkah 4

        // Percobaan 3-4 Langkah 5

        const npm = inputNim.value;
        const nama = inputNama.value;
        const prodi = selectProdi.value;
        const angkatan = inputAngkatan.value;
        const email = inputEmail.value;

        const validation = validateForm(npm, nama, prodi, angkatan, email);
        if (!validation.isValid) {
            showAlert(validation.message, "error");
            return;
        }
        const mahasiswaBaru = {
            nim,
            nama,
            program_studi: prodi,
            angkatan: parseInt(angkatan, 10),
            email
        };
        dataMahasiswa.push(mahasiswaBaru);
        renderTable();
        showAlert(`Data mahasiswa ${nama} berhasil ditambahkan.`, "success");
        formTambah.reset();
    });
}

        // Percobaan 3-4 Langkah 7



        // Percobaan 3-4 Langkah 8
        


// 8. Event Handling Hapus Data Mahasiswa (Percobaan 3-5).

function hapusMahasiswa(npm) {
const mhs = dataMahasiswa.find(item => item.nim === nim);
if (!mhs) return;
const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus data mahasiswa ${mhs.nama}?`);
if (konfirmasi) {
    dataMahasiswa = dataMahasiswa.filter(item => item.nim !== nim);
    renderTable();
    showAlert(`Data mahasiswa ${mhs.nama} berhasil dihapus.`, "info");
}
}


// 9. Fitur Pencarian Langsung Real-Time / Live Search (Percobaan 3-5)

if (inputSearch) {
    inputSearch.addEventListener("input", function () {
        const keyword = inputSearch.value.trim().toLowerCase();
        if (keyword === "") {
            renderTable(dataMahasiswa);
        } else {
            const hasilPencarian = dataMahasiswa.filter(mhs =>
                mhs.nim.toLowerCase().includes(keyword) ||
                mhs.nama.toLowerCase().includes(keyword) ||
                mhs.program_studi.toLocaleLowerCase().includes(keyword)
            
            );
            renderTable(hasilPencarian);
        }
    });
}

// Inisialisasi saat DOM selesai dimuat

document.addEventListener(
    "DOMContentLoaded", function () {
        showAlert("Selamat Datang di Aplikasi SIMA", "info");
    }
)
