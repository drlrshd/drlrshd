const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const CleanCSS = require('clean-css');
const fs = require('fs');
const { PassThrough } = require('stream');

const pathToDir = __dirname.replace('\\drlrshd.dev\\scripts', '\\drlrshd.dev\\');
const pathToStyle = __dirname.replace('\\drlrshd.dev\\scripts', '\\drlrshd.dev\\styles\\');
const pathToDist = __dirname.replace('\\drlrshd.dev\\scripts', '\\drlrshd.dev\\dist\\');
const pathToCSS = pathToDist + "css\\";

const productionMode = (process.env.NODE_ENV === 'Production') ? true : false;

// Start to build css
console.log((productionMode ? "Building..." : "Compiling..."));

if (productionMode) {
  if (!fs.existsSync(pathToDist)) {
    fs.mkdirSync(pathToDist);
  }
}

// Compile SCSS
try {
  var compiled = sass.compile(pathToStyle + "style.scss", { style: 'compressed' });
  console.log("CSS compiled...");
} catch (e) {
  console.error("Error 1: Could not compile scss:\n" + e.message, 1);
  return 1;
};

// Autoprefixer
try {
  var prefixed = postcss([autoprefixer]).process(compiled.css);
  console.log("Prefixes added...");
} catch(e) {
  console.error("Error 2: Could not add prefixes:\n" + e.toString(),2);
}

if (productionMode) {
  // Minify with clean-css
  new CleanCSS({ inline: ['remote'], returnPromise: true, rebaseTo: pathToDist + '\\css\\' })
    .minify(prefixed.css)
    .then((output) => {
      if (!fs.existsSync(pathToCSS)) {
        fs.mkdirSync(pathToCSS);
      }
      fs.writeFileSync(pathToCSS + 'index.min.css', output.styles);
      console.log("CSS minified");
    })
    .catch(function (error) {
      console.error("Error 3: Could not minify:\n" + error.toString(), 3);
      return 3;
    });

  // Copy index.html
  fs.copyFile(pathToDir + 'index.html', pathToDist + 'index.html', function (error) {
    if (error) {
      console.error("Error 5: Could not copy index.html:\n" + error.toString(), 5);
      return 5;
    };

    fs.readFile(pathToDist + 'index.html', 'utf-8', function (error, data) {
      if (error) {
        console.error("Error 6: Could not read index.html:\n" + error.toString(), 6);
        return 6;
      };

      var out = data.replace("./styles/index.css", "./css/index.min.css");

      fs.writeFile(pathToDist + "index.html", out, function (error) {
        if (error) {
          console.error("Error 6: Could not rewrite index.html:\n" + error.toString(), 6);
          return 6;
        }
        console.log("index.html copied...");
      });
    });

  });

  // Copy 404.html
  fs.copyFile(pathToDir + '404.html', pathToDist + '404.html', function (error) {
    if (error) {
      console.error("Error 5: Could not copy 404.html:\n" + error.toString(), 5);
      return 5;
    };

    fs.readFile(pathToDist + '404.html', 'utf-8', function (error, data) {
      if (error) {
        console.error("Error 6: Could not read 404.html:\n" + error.toString(), 6);
        return 6;
      };

      var out = data.replace("./styles/index.css", "./css/index.min.css");

      fs.writeFile(pathToDist + "index.html", out, function (error) {
        if (error) {
          console.error("Error 6: Could not rewrite 404.html:\n" + error.toString(), 6);
          return 6;
        }
        console.log("404.html copied...");
      });
    });
  });

} else {
  fs.writeFile(pathToStyle + 'index.css', compiled.css, (error) => {
    if (error) {
      console.error("Error 4: Could not write index.css:\n" + error.toString(), 4);
      return 4;
    };
    console.log("CSS written...")
  });
}

