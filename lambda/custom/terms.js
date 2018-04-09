const recology = require("./recology");
var fs = require('fs');

function extractTerms(dataset, termsSet) {
    for (let i = 0; i < dataset.length; i++) {
        let searchTerms = dataset[i].terms;
        for (let j = 0; j < searchTerms.length; j++) {
            termsSet.set(searchTerms[j].toLowerCase(), true);
        }
    }
}

let termsSet = new Map();
extractTerms(recology.compost, termsSet);
extractTerms(recology.recycling, termsSet);
extractTerms(recology.landfill, termsSet);

values = [];
termsSet.forEach(function (value, key, map) {
    values.push({
        "name": {
            "value": key,
        }
    });
});


fs.writeFileSync('terms.json', JSON.stringify(values));
