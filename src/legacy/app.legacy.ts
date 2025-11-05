import { yarg } from "./config/plugins/yargs.plugin";
import { writeFileSync } from 'fs';

const { b: base, l: limit, s: show } = yarg;

const head: string = `===============\nTabla del ${base}\n===============\n`;
let body: string = "";

for (let i = 1; i <= limit; i++) {
    const line: string = `${base} x ${i} = ${base * i}\n`;
    body += line;
}

const multiplicationTable: string = `${head}${body}`;

if (show) console.log(multiplicationTable);

writeFileSync(`src/legacy/files/tabla-del-${base}.txt`, multiplicationTable);

console.log(`La tabla del ${base} se ha guardado en files/tabla-del-${base}\n`);