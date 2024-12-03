console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log('_'.repeat(50));

function validateData(studentData) {
    if (!studentData.nama || !studentData.umur || !studentData.ktp) {
        return "An error occurred: Invalid data";
    } else if (studentData.umur < 17) {
        return "An error occurred: Student is too young";
    } else if (studentData.ktp.length !== 16 || isNaN(studentData.ktp)) {
        return "An error occurred: Invalid KTP number";
    } else {
        return "berhasil";
    }
}

async function processData(studentData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const validationMessage = validateData(studentData);

    if (validationMessage === "berhasil") {
        console.log(`Student ${studentData.nama} has been successfully registered.`);
    } else {
        console.log(validationMessage);
    }
}


processData({ nama: "", umur: 22, ktp: "124567890123456" });
processData({ nama: "Fahmy", umur: 16, ktp: "124567890123456" });
processData({ nama: "Kevin", umur: 20, ktp: "1245" });
processData({ nama: "Faiz", umur: 19, ktp: "2317126131234567" });
processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });
