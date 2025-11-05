import yargs from 'yargs';

import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false
    })
    .check((argv, options) => {
        const { b } = argv;
        if (b < 1) throw 'Error: base must be greater than 0';
        return true;
    })
    .parseSync();