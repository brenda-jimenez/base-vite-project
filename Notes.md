- Vite is very fast because uses `esbuild` for pre-bundling dependencies during the development. `esbuild` is an extremely fast JavaScript bundler written in the Go language.
- Vite uses `Rollup` for production build.
- Vite handles transpilation, not type-checking
- Vite ships with an integrated development server that’s blazing fast, thanks to its use of native ES modules and pre-bundling with esbuild.
- With vitest.globals things like `describe`, `it`, `expect`, `vi`, etc., become globally recognized without needing to import them in every test file.
- Vite creates two different config environments as we have kind of two environments:
1. the application environment (`config.app.json`). the src which will be targeting the browser since it will be running there.
2. the local node environment (`config.node.json`). The outside files which are on the local computer, eventually server with different API's and constraints
 
