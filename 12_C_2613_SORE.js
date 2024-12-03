console.log("[BARATIE RESTAURANT]");
console.log('_'.repeat(50));

function processPayment(hargaTotal, bayar) {
    try {
        if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
            throw new Error("Error: Both total price and amount given must be numbers");
        }

        if (bayar < hargaTotal) {
            throw new Error("Error: Amount given is less than the total price");
        }

        const kembalian = bayar - hargaTotal;
        console.log(`Transaction successful. Change to return: ${kembalian}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Cleaning up resources...");
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: "fifty" },
    { label: "[2]", total: 50, bayar: 35 },
    { label: "[3]", total: 50, bayar: 175 },
];

testCases.forEach(({ label, total, bayar }) => {
    console.log(`${label}`);
    processPayment(total, bayar);
    console.log('_'.repeat(50));
});