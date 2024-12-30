import type { CompileResult } from 'svelte/compiler';
type Ast = CompileResult['ast'];

type DecoratedString = { text: string, decoration?: string }

let indent = 0; // should not be module level

export type DriverRule = {
  selector: string;
  hiliteCSSClass?: string;
  fun: (ast: Ast) => DecoratedString[];
}


function elementRuleFun(ast: Ast): DecoratedString[] {
  // console.log('elementRuleFun', ast);

  const decoratedElt = [{ text: '  '.repeat(indent) + ast['name'], decoration: 'Element' }];
  indent++;

  const innerDecorated = rec(null, ast['fragment']['nodes'], driverMap);
  indent--;
  const decorated = decoratedElt.concat(innerDecorated, [{ text: "\n", decoration: "" }]);
  // console.log(decorated);

  return decorated

}

function textRuleFun(ast: Ast): DecoratedString[] {
  return [{ text: ast.data, decoration: "Text" }]
}

const textRule: DriverRule = {
  selector: 'Text',
  hiliteCSSClass: 'Text',
  fun: textRuleFun
}

const elementRule: DriverRule = {
  selector: 'RegularElement',
  hiliteCSSClass: 'Element',
  fun: elementRuleFun
}


type DriverMap = Map<string, DriverRule>;
let driverMap: DriverMap = new Map();

driverMap.set('RegularElement', elementRule);
driverMap.set('Text', textRule);


const scalarTypes = [
  Number,
  String,
  Boolean,
];
function isScalar(value) {
  if (value === undefined) return true;
  if (value === null) return true;

  return scalarTypes.some(type => value === null || typeof value === type.name.toLowerCase());
}

// the rec function traverses the ast with the help of
// drivers in the driver map and returns a Decorating[]
// when no drvier it will recurse


// rec-kless but could enough for now. should sort the value by source location
function rec(k: string | null, ast: Ast, driver: DriverMap)  {
  // console.log('ast',ast);
  if (ast === null || ast == undefined) return [];
  const typeName = ast['type']
  const driverRule: DriverRule | undefined = driver.get(typeName);
  if (driverRule) {
    return driverRule.fun(ast);
  } else {
    if (isScalar(ast)) {
      return [];
    } else {
      if (Array.isArray(ast)) {

        return ast.flatMap(element => rec(null, element, driver));
      } else {
        const kvs = Object.entries(ast)
        return kvs.flatMap(([k, v]) => rec(k, v, driver));

      }
    }
  }
}


// export function unparse(view: EditorView, ast: Ast) : string {
export function unparse(ast: Ast): DecoratedString[] {
  // console.log('unparse', ast);

  return rec(null, ast, driverMap);
  // return "Hello again, world!"
  // rec(ast, [])
  // const transaction = view.state.update({
  //   changes: {
  //     from: view.state.doc.length,
  //     insert: "\n\nconsole.log('Hello reagain, world!')"
  //   }
  // })
  // view.dispatch(transaction)
}