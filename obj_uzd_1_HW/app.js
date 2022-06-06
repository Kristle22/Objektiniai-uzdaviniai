console.log('1)---------------------------');
//1.  Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- **kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0
  }
  prideti1Akmeni() {
    return this.akmenuKiekis += 1
  }
  pridetiDaugAkmenu(kiekis) {
    return this.akmenuKiekis += kiekis;
  }
  kiekPririnktaAkmenu() {
    console.log(`Viso pririnkta ${this.akmenuKiekis} akmenu.`)
  }
}
const kbr = new Kibiras1();
kbr.pridetiDaugAkmenu(10);
kbr.prideti1Akmeni();
kbr.pridetiDaugAkmenu(8);
kbr.prideti1Akmeni();
kbr.kiekPririnktaAkmenu();

console.log('2)---------------------------');
// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

// 6.Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.monetuKiekis = 0;
    this.banknotuKiekis = 0;
  }
  ideti(kiekis) {
    if (kiekis <= 2) {
      this.monetuKiekis++;
      this.metaliniaiPinigai += kiekis;
      return `viso ${this.metaliniaiPinigai} metaliniu pinigu.`;
    } else {
      this.banknotuKiekis++;
      this.popieriniaiPinigai += kiekis;
      return `viso ${this.popieriniaiPinigai} popieriniu pinigu.`;
    }
  }
  skaiciuoti() {
    return this.popieriniaiPinigai + this.metaliniaiPinigai;
  }
  monetos() {
    return this.monetuKiekis
  }
  banknotai() {
    return this.banknotuKiekis;
  }
}

const wallet = new Pinigine();
wallet.ideti(4)
wallet.ideti(2)
wallet.ideti(6)
wallet.ideti(1)
console.log('Banknotai:', wallet.popieriniaiPinigai)
console.log('Metaliniai:', wallet.metaliniaiPinigai)
wallet.ideti(9);
wallet.ideti(2);
console.log('Skaiciuoti pinigus:', wallet.skaiciuoti());
console.log('Monetu kiekis:', wallet.monetos())
console.log('Banknotu kiekis:', wallet.banknotai());

console.log('3)---------------------------')
// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
    this.ilipeKeleiviai = 0;
    this.islipeKeleiviai = 0;
  }
  ilipa(ilipeSkaicius) {
    return this.keleiviuSkaicius += ilipeSkaicius;
  }
  islipa(islipeSkaicius) {
    return this.keleiviuSkaicius -= islipeSkaicius;
  }
  vaziuoja() {

    if (this.keleiviuSkaicius < 1) {
      console.log('Autobuse neliko keleiviu.')
    } else {
      console.log(`Autobuse vaziuoja ${this.keleiviuSkaicius} keleiviu.`);
    }
  }
}

const stotele = new Troleibusas();

stotele.ilipa(5);
stotele.vaziuoja();
stotele.islipa(2);
stotele.vaziuoja();
stotele.ilipa(4);
stotele.islipa(7);
stotele.vaziuoja();

console.log('8)---------------------------')
// 8.Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }
  ipilti(kiekis) {
    if (this.turis < kiekis) {
      this.kiekis = this.turis;
    } else {
      return this.kiekis += kiekis;
    }
  }
  ispilti() {
    return this.kiekis = 0;
  }
  stiklinejeYra() {
    console.log(this.kiekis + ' ml.');
  }

}

let st1 = new Stikline(200);
let st2 = new Stikline(150);
let st3 = new Stikline(100);

st1.ipilti(200);
console.log('Pirmoje stiklineje yra:');
st1.stiklinejeYra();
st1.ispilti();
console.log('Pirmoje stiklineje liko:');
st1.stiklinejeYra();

st2.ipilti(200);
console.log('Antroje stiklineje yra:');
st2.stiklinejeYra();
st2.ispilti();
console.log('Antroje stiklineje liko:');
st2.stiklinejeYra();
st3.ipilti(150);
console.log('Trecioje stiklineje yra:');
st3.stiklinejeYra();
st3.ispilti();
console.log('Trecioje stiklineje liko:');
st3.stiklinejeYra();

console.log('9)---------------------------')
// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// class Grybas {
//   constructor() {
//     this.valgomas = Math.random() < 0.9;
//     this.sukirmijes = Math.random() < 0.1;
//     this.svoris = rand(5, 45);
//   }
// }

// const gryb = new Grybas();
// console.log(gryb.valgomas, gryb.sukirmijes, gryb.svoris);

// class Krepsys {
//   constructor() {
//     this.dydis = 500;
//     this.prikrauta = 0;
//   }
//   deti(grybas) {
//     this.prikrauta++
//     return grybas;
//   }
// }
// const krep = new Krepsys();

// const grybuKrepselis = [];

// const gerasGrybas = (grybas) => {
//   if (grybas.valgomas && !grybas.sukirmijes) {
//     return grybas;
//   }
//   grybuKrepselis.push(gerasGrybas(new Grybas))
// }

// do {
//   krep.deti(gerasGrybas)
//   grybuKrepselis.push(gerasGrybas(new Grybas));
// } while (krep.prikrauta < 500);

// console.log(krep.prikrauta);

// console.log('Grybu krepselis:', grybuKrepselis);

// console.log(krep.deti(gerasGrybas(new Grybas)));


// Klaseje

class Grybas {

  constructor() {
    this.valgomas = !this.rand(0, 1);
    this.sukirmijes = !this.rand(0, 1)
    this.svoris = rand(5, 45);
  }
  rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

class Krepsys {

  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;

  }
  deti(grybas) {
    if (grybas.valgomas && !grybas.sukirmijes) {
      this.prikrauta += grybas.svoris
    }
    return this.prikrauta < this.dydis;
  }

}

const Kr = new Krepsys();

let count = 0; // tik vizualizacijai
while (Kr.deti(new Grybas())) {
  console.log('grybauju...', ++count); // tik vizualizacijai
}
console.log(Kr);