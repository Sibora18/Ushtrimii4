//Detyra 1
let cmimiLibrit = 12.50;
let sasiaLibrave = 3;
let cmimiFletores = 1.80;
let sasiaFletoreve = 4;

let kostoLibrave = cmimiLibrit * sasiaLibrave;
let kostoFletoreve = cmimiFletores * sasiaFletoreve;
let shumaTotale = kostoLibrave + kostoFletoreve;

shumaTotale += 2.50; 

console.log("--- 01. Fatura e librarisë ---");
console.log("Kosto e librave: " + kostoLibrave + " €");
console.log("Kosto e fletoreve: " + kostoFletoreve + " €");
console.log("Shuma totale (përfshirë transportin): " + shumaTotale + " €");

//Detyra 2
let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totaliPikeve = aktiviteti + projekti + provimi;
let perqindja = (totaliPikeve / 100) * 100; 
console.log("--- 02. Rezultati i vlerësimit ---");
console.log("Totali fillestar i pikëve: " + totaliPikeve);
console.log("Përqindja e arritur: " + perqindja + "%");


provimi = 48;
let totaliIri = aktiviteti + projekti + provimi;

console.log("Totali i ri pas korrigjimit të provimit: " + totaliIri);


//Detyra 3

let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;
let nrPersonave = 3;

let kostoTotale = akomodimi + transporti + ushqimi;
let pjesaPerPerson = kostoTotale / nrPersonave;
let buxhetiFillestar = 80;
let mbetjaSecilit = buxhetiFillestar - pjesaPerPerson;

console.log("--- 03. Buxheti i një udhëtimi ---");
console.log("Kosto totale e udhëtimit: " + kostoTotale + " €");
console.log("Pjesa që i takon secilit person: " + pjesaPerPerson + " €");
console.log("Paratë që i mbeten secilit nga buxheti prej 80 €: " + mbetjaSecilit + " €");

//Detyra 4

let produkti1 = 35;
let produkti2 = 24; // 1 produkt me 24

let shumaPaZbritje = (produkti1 * 2) + produkti2;
let zbritja = shumaPaZbritje * 0.15;
let cmimiPasZbritjes = shumaPaZbritje - zbritja;
let vleraPerfundimtare = cmimiPasZbritjes + 4; 

console.log("--- 04. Porosia online me zbritje ---");
console.log("Çmimi para zbritjes: " + shumaPaZbritje + " €");
console.log("Shuma e zbritjes (15%): " + zbritja + " €");
console.log("Çmimi pas zbritjes: " + cmimiPasZbritjes + " €");
console.log("Vlera përfundimtare (me transport): " + vleraPerfundimtare + " €");



