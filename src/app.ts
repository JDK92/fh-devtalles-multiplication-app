import { yarg } from "./config/plugins/yargs.plugin";
import { writeFileSync } from 'fs';

(async () => {
    await main();
})()


async function main() {
    // console.log(yarg);
    const { b, l, s } = yarg;
    const tableHeader: string = multiplicationHeader(b);
    const tableBody: string = multiplicationBody(b, l);
    const table: string = `${tableHeader}${tableBody}`;

    writeFileSync(`src/files/tabla-del-${b}.txt`, table);

    console.log(`La tabla del ${b} se ha guardado en files/tabla-del-${b}\n`);

    if (s) {
        console.log(table);
    }

}


function multiplicationBody(base: number, limit: number): string {
    let multiplicationTable: string = "";

    for (let i = 1; i <= limit; i++) {
        const currentLine: string = `${base} x ${i} = ${base * i}\n`;
        multiplicationTable += currentLine;
    }

    return multiplicationTable;
}

function multiplicationHeader(base: number): string {
    return `====================\n   Tabla del ${base}   \n====================\n\n`;
}