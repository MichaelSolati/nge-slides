# Remove any dist code
rm -rf dist

# Build source code
ng build --prod

# Merge JS files
cat dist/staging/runtime.js dist/staging/scripts.js dist/staging/main.js > dist/nge-slides.js

# Move license and readme
mv dist/staging/package.json dist/
cp LICENSE.md dist/
cp README.md dist/

# Remove staged build
# rm -rf dist/staging
