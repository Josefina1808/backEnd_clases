console.log(process.argv);

const port = process.argv[2]

for(j=0; j < process.argv.length; j++) {
    console.log(`${j} -> ${process.argv[j]}`);
}