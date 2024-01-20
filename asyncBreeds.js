const fs = require('fs')

//asyncBreeds.js

const breedDetailsFromFile = function(breed, callback) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      callback(undefined);
      return; // needed or the second callback will be called
    }
    callback(data);
  });
};

// we try to get the return value
const printBreedDetails = data => console.log(data);
breedDetailsFromFile('Bombay',printBreedDetails);



module.exports = breedDetailsFromFile;