const assert = require("assert");
const { calcularTotal } = require("./pedidos");

const itens = [
  { preco: 10, quantidade: 2 },
  { preco: 5, quantidade: 4 },
];
assert.strictEqual(calcularTotal(itens, 0), 40);
assert.strictEqual(calcularTotal(itens, 25), 30);
assert.strictEqual(calcularTotal([], 10), 0);
console.log("ok");
