# codemirror-lang-quick-planner

This package implements a CodeMirror Lezer parser for the Quick Planner language, designed for quickly and easily writing routines.

## Development

1. Begin by installing dependencies with `npm install`.
2. Enhance the grammar located in `src/syntax.grammar` to better suit your language's needs. Refer to the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for insights into this file format.
3. Modify the metadata in `src/index.ts` to seamlessly integrate with your upgraded grammar.
4. Tailor the grammar tests in `test/cases.txt` to validate and accommodate your enhancements.
5. Execute the build process using `npm run prepare`, followed by running tests using `npm test`.

> Elevate your proficiency through practical exercises using [Lezer Playground](https://lezer-playground.vercel.app).
