import Database from './database.js';

async function readAll() {
  const db = await Database.connect();

  const sql = `
    SELECT
      *
    FROM
      meliponario
  `;

  const meliponario = await db.all(sql);

  return meliponario;
}

async function read(id) {
  const db = await Database.connect();

  const sql = `
    SELECT
      *
    FROM
      meliponario
    WHERE
      codmeliponario = ?
  `;

  const meliponario = await db.get(sql, [id]);

  return meliponario;
}

async function create(meliponario) {
  const db = await Database.connect();

  const {name, caixas, bairro, rua, CEP, descricao} = meliponario;

  const sql = `
    INSERT INTO
      meliponario (name, caixas, bairro, rua, CEP, descricao)
    VALUES
      (?, ?, ?, ?, ?, ?)
  `;

  const {lastID} = await db.run(sql, [name, caixas, bairro, rua, CEP, descricao]);

  // return read(lastID);
}

async function update(meliponario, id) {
  const db = await Database.connect();

  const {name, caixas, bairro, rua, CEP, descricao} = meliponario;

  const sql = `
    UPDATE 
      meliponario
    SET
      name = ?, caixas = ?, bairro = ?, rua =?, CEP = ?, descricao = ?
    WHERE
      codmeliponario = ?
  `;

  const {changes} = await db.run(sql, [name, caixas, bairro, rua, CEP, descricao, codmeliponario]);

  if (changes === 1) {
    return read(codmeliponario);
  } else {
    return false;
  }
}

async function destroy(id) {
  const db = await Database.connect();

  const sql = `
    DELETE FROM
      meliponario
    WHERE
      codmeliponario = ?
  `;

  const {changes} = await db.run(sql, [id]);
  
  return changes === 1;
}

export default { readAll, read, create, update, destroy };