const assert = require("assert");
const { calcularTotal, buscarCliente } = require("./pedidos");

assert.strictEqual(calcularTotal([{ preco: 50, quantidade: 2 }, { preco: 10, quantidade: 1 }], 10), 99);
assert.strictEqual(calcularTotal([], 0), 0);
assert.throws(() => calcularTotal(null, 0), TypeError);
assert.throws(() => calcularTotal([], 101), RangeError);
assert.throws(() => calcularTotal([], -1), RangeError);

(async () => {
  let chamada;
  const db = { query: async (sql, params) => { chamada = [sql, params]; return []; } };
  await buscarCliente(db, "a@b.com");
  assert.deepStrictEqual(chamada, ["SELECT * FROM clientes WHERE email = $1", ["a@b.com"]]);
  await assert.rejects(() => buscarCliente(db, "x' OR '1'='1"), TypeError);
  console.log("ok");
})();
