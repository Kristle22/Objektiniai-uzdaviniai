class Senelis {

  constructor() {
    console.log('senelis');
    this.name = 'Bronius';
  }

  bliauti() {
    console.log('uuuuuuuuuuuuuu');
  }
  miegoti() {
    console.log('psssssssss...');
  }
}

class Tevas extends Senelis {

  constructor() {
    console.log('tevas');
    super();
    this.name = 'Kazys';
    // this.barti = this.barti.bind(this);
  }

  barti = () => {
    // console.log('nu nu nu nu');
    console.log(this);
  }
}

class Vaikutis extends Tevas {

  constructor() {
    console.log('vaikutis');
    super();
    this.name = 'Petras';
  }
  bliauti() {
    console.log('Beeee...');
  }
}

const v = new Vaikutis();
const t = new Tevas();

console.log(v.name);

v.bliauti();
// t.barti();
v.barti();
v.miegoti();

document.querySelector('button').addEventListener('click', () => v.barti());

// setInterval(v.barti, 1000);
