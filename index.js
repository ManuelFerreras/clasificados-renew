const reader = require("xlsx");
const fetch = require("node-fetch");

const file = reader.readFile("./avisos.xls");
const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    const id = res.Id;
    console.log(id)
    const url = `https://adminclasificados.lavoz.com.ar/republicacion-individual-aviso/${id}/107172`;
    fetch(url);
  });
}
