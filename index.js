let csvToJson = require('convert-csv-to-json');
csvToJson.fieldDelimiter(',') .getJsonFromCsv("basic.csv");
csvToJson.formatValueByType().getJsonFromCsv("basic.csv");
let json = csvToJson.getJsonFromCsv("basic.csv");

for(let i=0; i<json.length;i++){
    console.log(json[i]);
}