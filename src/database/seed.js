import { resolve } from 'path';
import { readFileSync} from 'fs';
import Meliponario from './Meliponario.js';

async function up() {
  const file = resolve(process.cwd(), "src", "database", "seeders.json");

  const content = JSON.parse(readFileSync(file));

  for (const meliponario of content.meliponario) {
    await Meliponario.create(meliponario);
  }
}

export default { up };