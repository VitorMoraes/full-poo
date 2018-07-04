import {Conta} from './conta.js';
const minhaConta = new Conta(3300, 33345);
console.log(minhaConta.agencia === 3300);
console.log(minhaConta.numero === 33345);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 500.00');
console.log(minhaConta.numero === 33345);
console.log(minhaConta.saldo === 500.0);
minhaConta.sacar(600.0);
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);
minhaConta.sacar(60.0); // 500.0 - 60.0 === 440.0
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 440.00');
minhaConta.depositarEmDinheiro(1100.0);
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);
minhaConta.depositarEmDinheiro(500.0); // 440.0 + 500.0 === 940.0
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);
minhaConta.depositarEmCheque(11100.0);
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);
minhaConta.depositarEmCheque(5000.0); // 940.0 + 5000.0 === 5940.0
console.log(minhaConta.saldo); // 5940.0
console.log(minhaConta.saldo === 5940.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 5940.00');
