# Setup ESLint and esbuild

1. **Install ESLint, and esbuild:** Use `npm install --save-dev eslint esbuild` to install ESLint and esbuild as development dependencies.

2. **Initialize ESLint:** Use `npm`, `pnpm`, `npx` to isntall `eslint --init` to create a new ESLint configuration file. Follow the prompts to set up ESLint according to your preferences.

3. **Configure ES modules:** Add `"type": "module"` to your `package.json` file to enable ES modules in Node.js.

4. **Create a build script:** Create a `build.js` file that uses esbuild to bundle your application. The build script should import the `build` function from esbuild, call it with the appropriate options, and handle any errors that occur.

5. **Add scripts to package.json:** Add `"start"`, `"build"`, and `"lint"` scripts to your `package.json` file. The "start" script should run your bundled application, the "build" script should run your build script, and the "lint" script should lint your code with ESLint.

6. **Write your application:** Write your Express application using ES modules. Make sure to use the `.mjs` extension for your source files.

7. **Build and run your application:** Use `npm run build` to bundle your application, and `npm run dev` to run it. Use `npm run lint` to lint your code.