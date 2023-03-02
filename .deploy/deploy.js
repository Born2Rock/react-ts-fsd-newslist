const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const sourceDir = path.resolve(__dirname,'..', 'build');
const destinationDir = '/var/www/html/deep-react';

fs.readdir(destinationDir, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.rm(
      path.join(destinationDir, file),
      { recursive: true, force: true },
      (err) => {
        if (err) throw err;
      },
    );
  }
});

fs.cp(sourceDir, destinationDir, { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
