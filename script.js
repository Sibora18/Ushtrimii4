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


//Detyra 5

let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

let mbledhjaPaKonvertim = vlera1 + vlera2 + vlera3;
console.log("--- 05. Konvertimi i të dhënave ---");
console.log("Rezultati pa konvertim: " + mbledhjaPaKonvertim);


let numri1 = Number(vlera1);
let numri2 = Number(vlera2);
let numri3 = Number(vlera3);

let shuma = numri1 + numri2 + numri3;
let mesatarja = shuma / 3;

console.log("Shuma e numrave: " + shuma);
console.log("Mesatarja e numrave: " + mesatarja);
console.log("Tipi i rezultatit të shumës: " + typeof shuma);

//Detyra 6

let hena = 95;
let eMarte = 80;
let eMerkure = 115;

let gjithsejMinuta = hena + eMarte + eMerkure;
let kohaNeOre = gjithsejMinuta / 60;
let minutaMbetura = gjithsejMinuta % 60;

console.log("--- 06. Analiza e kohës së studimit ---");
console.log("Gjithsej minuta: " + gjithsejMinuta);
console.log("Koha në orë (numër dhjetor): " + kohaNeOre);
console.log("Minuta që mbeten pas ndarjes me 60: " + minutaMbetura);


//Detyra 7

let stoku = 120;
stoku -= 18; 
stoku -= 27; 
stoku += 35; 

let çmimiPerNjesi = 6.75;
let vleraPerfundimtareStokut = stoku * çmimiPerNjesi;

console.log("--- 07. Inventari i dyqanit ---");
console.log("Stoku përfundimtar (njësi): " + stoku);
console.log("Vlera e stokut përfundimtar në euro: " + vleraPerfundimtareStokut + " €");

//Detyra 8

let fletetPune = 157;
let fletePerStudent = 6;

let grupePlota = parseInt(fletetPune / fletePerStudent);
let fleteMetura = fletetPune % fletePerStudent;

console.log("--- 08. Shpërndarja e materialeve ---");
console.log("Numri i grupeve të plota: " + grupePlota);
console.log("Fletët e mbetura: " + fleteMetura);
console.log("Kontrolli i llogaritjes: (" + grupePlota + " * 6) + " + fleteMetura + " = " + ((grupePlota * fletePerStudent) + fleteMetura));


//Detyra 9

let cmim1Txt = "19.90";
let cmim2Txt = "8.50";
let sasia1 = 2;
let sasia2 = 3;

let cmim1 = Number(cmim1Txt);
let cmim2 = Number(cmim2Txt);

let totaliArtikullit1 = cmim1 * sasia1;
let totaliArtikullit2 = cmim2 * sasia2;
let shumaPorosise = totaliArtikullit1 + totaliArtikullit2;

let tarifaSherbimi = shumaPorosise * 0.10;
let shumaFInale = shumaPorosise + tarifaSherbimi;

console.log("--- 09. Fatura me të dhëna tekstuale ---");
console.log("Totali i artikullit 1: " + totaliArtikullit1);
console.log("Totali i artikullit 2: " + totaliArtikullit2);
console.log("Shuma e porosisë: " + shumaPorosise);
console.log("Shuma finale me dy shifra pas presjes: " + shumaFInale.toFixed(2));
console.log("Tipi i vlerës së formatuar (.toFixed): " + typeof shumaFInale.toFixed(2));


//Detyra 10

let pjesemarres = 45;
let pagesaPerPerson = 12;

let teArdhurat = pjesemarres * pagesaPerPerson;
let salla = 180;
let materialet = 95;
let reklama = 60;

let shpenzimetTotale = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimetTotale;


let diferencaEre = teArdhurat - shpenzimetTotale;

console.log("--- 10. Raporti financiar i një aktiviteti ---");
console.log("Të ardhurat totale: " + teArdhurat + " €");
console.log("Shpenzimet totale (fillestare): " + (shpenzimetTotale - 25) + " €");
console.log("Diferenca paraprake: " + diferenca + " €");
console.log("Shpenzimet totale pas shtimit të 25 €: " + shpenzimetTotale + " €");
console.log("Diferenca përfundimtare: " + diferencaEre + " €");
