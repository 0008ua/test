const fs = require('fs');
const path = require('path');
const process = require('process');

const args = process.argv.slice(2);
const file1 = path.resolve(__dirname, 'one.txt');
const file2 = path.resolve(__dirname, 'two.txt');

fs.writeFile(file1, args.toString(), (err) => {
  if (err) {
    console.log('error write file - ', file1);
  }
  fs.readFile(file1, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log('error read file - ', file1);
    }
    fs.writeFile(file2, data.length.toString(), (err) => {
      if (err) {
        console.log('error write file - ', file2);
      }
      fs.rm(file1, (err) => {
        if (err) {
          console.log('error delete file - ', file2);
        }
        console.log('success');
      });
    });
  });
});
