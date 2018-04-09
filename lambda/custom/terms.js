const recology = require("./recology");
var fs = require('fs');

function writeTerms(dataset, fd) {
    for (let i = 0; i < dataset.length; i++) {
        let searchTerms = dataset[i].terms;
        for (let j = 0; j < searchTerms.length; j++) {
            fs.writeSync(fd, searchTerms[j] + "\n");
        }
    }
}

fs.open('terms.txt', 'w', (err, fd) => {
    if (err) throw err;

    writeTerms(recology.compost, fd);
    writeTerms(recology.compost, fd);
    writeTerms(recology.compost, fd);
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});
