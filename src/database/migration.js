import Database from './database.js'

async function up() {
  const db = await Database.connect();

  const sql = `
    CREATE TABLE meliponario (
        codmeliponario INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(20) NOT NULL,
        caixas INTEGER NOT NULL,
        bairro VARCHAR(20) NOT NULL,
        rua VARCHAR(20) NOT NULL,
        CEP INTEGER NOT NULL,
        descricao VARCHAR(20)
    )
    `;

  db.run(sql);
}

export default { up };
