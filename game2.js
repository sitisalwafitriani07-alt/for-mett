
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(teks) {
    return new Promise(resolve => rl.question(teks, resolve));
}

const pantun = [
    {
        soal: "Jalan sore membeli ketan,\nPulangnya mampir membeli jamu.\nKalau boleh aku bertanya pelan,\nKok akhir-akhir ini...",
        pilihan: [
            "Kamu sering muncul di pikiranku",
            "Aku jadi rajin minum jamu",
            "Harga ketan makin mahal"
        ],
        benar: 1,
        hasil: "Wah, peka juga kamu. Bisa baca situasi ternyata."
    },
    {
        soal: "Pergi ke toko membeli pena,\nSekalian membeli buku.\nKalau chat kita jadi agenda,\nKayaknya aku...",
        pilihan: [
            "Butuh kuota baru",
            "Nggak keberatan kalau tiap hari sama kamu",
            "Harus belajar lebih dulu"
        ],
        benar: 2,
        hasil: "Jawaban yang cukup berbahaya, nih."
    },
    {
        soal: "Pagi-pagi minum kopi,\nDitemani roti di meja.\nKalau kamu tiba-tiba nyari aku,\nItu karena...",
        pilihan: [
            "Ada tugas yang belum selesai",
            "Mau pinjam charger saja",
            "Mungkin ada yang mulai terbiasa"
        ],
        benar: 3,
        hasil: "Hmm, sepertinya kamu mulai paham maksud permainan ini."
    },
    {
        soal: "Ke perpustakaan mencari bacaan,\nPulangnya mampir membeli roti.\nKalau kita lanjut obrolan,\nKayaknya malam ini...",
        pilihan: [
            "Bisa lupa lihat notifikasi lain",
            "Aku harus tidur lebih pagi",
            "Besok ada kelas pagi"
        ],
        benar: 1,
        hasil: "Nah, obrolan yang nyambung memang suka bikin lupa waktu."
    },
    {
        soal: "Naik motor melewati taman,\nBerhenti sebentar membeli minuman.\nAku punya satu pertanyaan,\nKalau diajak jalan barengan...",
        pilihan: [
            "Tanya dulu ada parkiran atau tidak",
            "Boleh, asal jangan cuma wacana",
            "Kirim lokasi saja"
        ],
        benar: 2,
        hasil: "Oke, berarti tinggal tentukan hari dan tempatnya."
    }
];

async function mulaiGame() {
    console.log("\n================================");
    console.log("       METT, COBA TEBAK!");
    console.log("================================");
    console.log("Game pantun dan kode-kodean tipis.");
    console.log("Pilih jawaban 1, 2, atau 3.\n");

    const nama = await tanya("Nama pemain: ");

    console.log(`\nOke, ${nama || "pemain"}, kita mulai!\n`);

    let skor = 0;

    for (let i = 0; i < pantun.length; i++) {
        const p = pantun[i];

        console.log(`\n--- PERTANYAAN ${i + 1} ---`);
        console.log(p.soal + "\n");

        p.pilihan.forEach((pilihan, index) => {
            console.log(`${index + 1}. ${pilihan}`);
        });

        let jawaban;

        while (true) {
            jawaban = await tanya("\nJawaban kamu (1-3): ");

            if (["1", "2", "3"].includes(jawaban.trim())) {
                break;
            }

            console.log("Pilih angka 1, 2, atau 3 ya.");
        }

        if (Number(jawaban) === p.benar) {
            skor++;
            console.log(`\n${p.hasil}`);
        } else {
            console.log("\nWkwk, jawabanmu boleh juga.");
            console.log("Tapi coba pikirkan pilihan lainnya lain kali.");
        }
    }

    console.log("\n================================");
    console.log("           HASIL AKHIR");
    console.log("================================");
    console.log(`Pemain : ${nama || "Misterius"}`);
    console.log(`Skor   : ${skor} dari ${pantun.length}`);

    if (skor >= 4) {
        console.log("Kesimpulan: Lumayan peka, ya kamu.");
    } else if (skor >= 2) {
        console.log("Kesimpulan: Masih bisa diajak diskusi, nih.");
    } else {
        console.log("Kesimpulan: Kayaknya perlu main sekali lagi.");
    }

    console.log("\nBONUS PANTUN:");
    console.log("Beli kopi di dekat taman,");
    console.log("Minumnya sambil membaca buku.");
    console.log("Kalau seru boleh kita main lagi,");
    console.log("Siapa tahu ada alasan buat ngobrol terus. :)");

    console.log("\nMakasih sudah main!");
    rl.close();
}

mulaiGame();
