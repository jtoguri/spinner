const loading = ['|', '/', '-', '\\', '|'];
let counter = 100;
for (const sym of loading) {
  setTimeout(() => {
    process.stdout.write(`\r${sym}   `);
  }, counter);
  counter += 200;
}