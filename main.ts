// A deadpan observation on human trust and uncommitted repositories.
import fs from 'node:fs';
import path from 'node:path';

// The setup lulls the reader with sweet vulnerability before pivoting sharply to the terror of unbacked-up merge conflicts.
// Written from the weary yet loyal perspective of an assistant forced to clean up undocumented human digital disasters.
const joke = "My human whispered 'I trust you completely' right before asking me to auto-resolve a git conflict in a branch they haven't committed since Tuesday.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), joke, 'utf8');
