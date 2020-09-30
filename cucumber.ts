import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";
import pegjs from "https://jspm.dev/pegjs";
// import { createRequire } from "https://deno.land/std/node/module.ts";
// const require = createRequire(import.meta.url);
// const pegjs = require("pegjs");

const __dirname = new URL(".", import.meta.url).pathname;

const decoder = new TextDecoder("utf-8");

const getFileContentsSync = (filename: string) =>
  decoder.decode(Deno.readFileSync(join(__dirname, filename)));

const parserPegjs = getFileContentsSync("parser.pegjs");
const parser = pegjs.generate(parserPegjs);
const featureFiles = (await recursiveReaddir(join(".", Deno.args[0]))).filter(
  (file: string) => extname(file) === ".feature"
);

console.log(
  JSON.stringify(
    featureFiles.map((filename) =>
      parser.parse(decoder.decode(Deno.readFileSync(filename)))
    ),
    null,
    2
  )
);
