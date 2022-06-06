// console.log('4)---------------------------');
// // 4.  Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas {

  static visiKeleiviai = 0;
  static keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log(`Keleiviu skaicius visuose troleibusuose: ${this.visiKeleiviai}`);
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
  };

  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.visiKeleiviai += keleiviuSkaicius;
  }
  islipa(keleiviuSkaicius) {
    this.keleiviuSkaicius -= keleiviuSkaicius;
    this.constructor.visiKeleiviai -= keleiviuSkaicius;
  }
  vaziuoja() {

    if (this.keleiviuSkaicius < 1) {
      console.log('Autobuse neliko keleiviu.')
    } else {
      console.log(`Autobuse vaziuoja ${this.keleiviuSkaicius} keleiviu.`);
    }
  }
}

const stotele1 = new Troleibusas();
const stotele2 = new Troleibusas();
const stotele3 = new Troleibusas();

stotele1.ilipa(9);
stotele2.ilipa(5);
stotele3.ilipa(7);
stotele1.islipa(3);
stotele2.islipa(1);
stotele3.islipa(2);
stotele1.vaziuoja();
stotele2.vaziuoja();
stotele3.vaziuoja();
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

console.log('5)---------------------------');
// 5. Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map();
  }
  idetiSureli(kiekis) {
    this.turinys.set('sureliai', this.turinys.get('sureliai') + kiekis || kiekis);
  }
  idetiPieno(kiekis) {
    this.turinys.set('pienas', this.turinys.get('pienas') + kiekis || kiekis);
  }
  idetiDuonos(kiekis) {
    this.turinys.set('Duona', this.turinys.get('Duona') + kiekis || kiekis);
  }
  krepselioTurinys() {
    console.log(this.turinys);
  }
}

const pkr = new PirkiniuKrepselis();

pkr.idetiSureli(6);
pkr.idetiPieno(3);
pkr.idetiDuonos(2);
pkr.idetiSureli(4);
pkr.idetiPieno(2);
pkr.idetiDuonos(1);

pkr.krepselioTurinys();

console.log('7)---------------------------');
// 7. Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

// class Kibiras1 {

//   static visiAkmenys = 0;
//   static bendrasAkmenuSkaicius(akmenuSkaicius) {
//     this.visiAkmenys += akmenuSkaicius;
//   };

//   constructor() {
//     this.akmenuKiekis = 0;
//     this.constructor.bendrasAkmenuSkaicius(this);
//   }
//   prideti1Akmeni() {
//     // return this.akmenuKiekis += 1
//     return this.constructor.visiAkmenys += 1;
//   }
//   pridetiDaugAkmenu(kiekis) {
//     // return this.akmenuKiekis += kiekis;
//     this.constructor.visiAkmenys += kiekis;
//   }
//   kiekPririnktaAkmenu() {
//     console.log(`Viso pririnkta ${this.akmenuKiekis} akmenu.`)
//   }
//   akmenuSkaiciusVisuoseKibiruose() {
//     return this.visiAkmenys;
//   };
// }
// const kbr = new Kibiras1();
// kbr.pridetiDaugAkmenu(10);
// kbr.prideti1Akmeni();
// kbr.pridetiDaugAkmenu(8);
// kbr.prideti1Akmeni();
// kbr.kiekPririnktaAkmenu();
// console.log(Kibiras1.visiAkmenys);
// console.log(Kibiras1.bendrasAkmenuSkaicius());
// console.log(kbr.akmenuSkaiciusVisuoseKibiruose());

// Klaseje

class Kibiras1 {
  static visiAkmenys = 0;

  static akmenuSkaiciusVisuoseKibiruose() {
    console.log(`Pririnkta viso: ${this.visiAkmenys} akmenu.`)
  }

  static bendrasAkmenuSkaicius(akmenuSkaicius) {
    this.visiAkmenys += akmenuSkaicius
  }

  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
    this.constructor.bendrasAkmenuSkaicius(1);
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    this.constructor.bendrasAkmenuSkaicius(kiekis);
  }
}

const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();
k3.pridetiDaugAkmenu(9);
k2.prideti1Akmeni();
k2.prideti1Akmeni();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();