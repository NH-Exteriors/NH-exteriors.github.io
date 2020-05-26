# jQuery template, built from scratch to be used as a template for web applications

- This is a free front-end template powered by jQuery, SASS, bootstrap, you can fork and clone this repository or you can follow the instructions to create your own template.
- If you would like to use this as a template DO NOT FORK OR CLONE. Download as a zip file, unzip it and follow the instructions.
- You can also visit [The HTML5 boilerplate website](https://html5boilerplate.com/) if you need another front-end template.

## If downloading this repository:

We will be using npm to install the dependencies.
If your repository is not running npm you can always run `npm init`.

- Make sure you move it to your desired folder in your computer
- Change all entries for jQuery-Template to the name of your project
- run `git init`
- run `npm install`
- This template was created on May 2020. Please read the file packagenote.md for instructions on how to update the packages to the most recent ones to avoid deprecation.
- Save, commit and happy coding!

## If creating your own template:

### First Steps

- On terminal or folder create a new directory, make sure to create your directory
inside of a directory that is set up for git usage:
- `mkdir jQuery-template`
- Navigate to your directory:
- `cd jQuery-template`
- Open your text editor in my case, I am using atom:
- `atom .`
- Create your readme file on the terminal:
- `touch README.md`
- And add your basic README

- Initiate git with `git init`, now you should be working on the master branch
- Create a file for your future licence: `LICENCE.md` and leave it aside for now
- Create your HTML file: `touch index.html`

### Dependencies and instructions

- We will be using npm packages, to start you must navigate to the root branch `git checkout master` and initiate npm on the command line with (you might have a hard time switching back, you might get an error from the command line, that is because you haven't commit or added your code to your repository, if that is the case just "create " your branch master again `git checkout -b master`):
- `npm init` - Your command line will ask you a couple of questions, make sure you answer who the author is and enter the URL or the repository, if you miss it you can always use the command again. This will create a 'package.json' file with the information entered.
- Install npm dependencies with `npm install --save`. This should generate a 'package-lock.json' file and a node_modules file.
- Make a directory for your style files `mkdir stylesheets`
- Navigate to your new directory and create you CSS file: `touch style.css`
- If you like to use SASS in adition to CSS install SASS `npm install sass --save`
- Create a file for your sass style `touch styleSASS.scss`, for the purpose of giving the option, I am creating both.
- You will need to add a boilerplate, which can be typed or copied from an online open source or you can use the following:
```
<!DOCTYPE html>
<html>
<head>
<title>
  jQuery Template by Patricia Antlitz
</title>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="./logo-title copy.png" rel="icon">
  <link href="./../stylesheets/style.css" rel="stylesheet">
  <link href="./../stylesheets/styleSASS.scss" rel="stylesheet">
</head>
<body>
<h1> This is a jQuery Template </h1>
</body>
</html>
```
- Any changes made to to this boilerplate can be viewed locally by typing `open index.html` on your command line for now. Please keep in mind that the logo above will only be displayed if you save an image with that name on your root directory.

### Commit your changes

- Time to make your first commit
- On the command line, type `git status` You should see a list of files created and modified.
- Next, type `git add .` This should add all your files. DO NOT use this more than once.
- Proceed with `git status` again to make sure it was all added.
- Type `git commit` and add a commit note, I like to use "Initial Commit" as
my first commit.
- DO NOT PUSH IT yet.

### Link it to your repository

I am assuming you are following the instructions and creating your own Template from scratch. If that is the case, you will need to create a GitHub reporsitory. Under your GitHub account got to "New Repository" and create a public or private repository with no inital "README". Once that is done, under your head branch (master) copy and paste the second option provided by GitHub:
- `…or push an existing repository from the command line
git remote add origin https://github.com/patybn3/jQuery-template.git
git push -u origin master`
You should be all set now, this will push your changes to your repository.

### Other Dependencies

Time to install the other dependencies and create the files we will need. When we ran the npm command on the terminal you set the main javascript file to be index.js however that file was not automatically generated. Lets do that now.
On your command line run the following command:
`touch index.js`
You can leave this file aside for now.

We will now install some of the other dependencies needed for this repository.
We will start with bootstrap, boostrap is a styling tool for html files. You can read more about bootstrap [HERE](https://getbootstrap.com/docs/4.0/getting-started/download/)
- `npm install bootstrap --save`
- Install jQuery `npm install jquery --save`

Install babel-polyfill for the usage of Promises and prototypes (just in case). Vist [this webpage](https://babeljs.io/docs/en/6.26.3/babel-polyfill) for more details.
- `npm install --save babel-polyfill`

Install popper.js which is a tool to better facilitate the positioning of elements on the screen:
- `npm i @popperjs/core` [Popper website](https://popper.js.org/), [Documentation](https://popper.js.org/docs/v2/).
- `npm install popper.js --save`

### devDependencies

To make things easier with will install the webpack package to avoid having to install each package one by one but I always like to manually install some packages I know I am going to need. To install webpack:
- `npm install --save-dev webpack`
- `npm install webpack-dev-server --save-dev`

Install babel/core, babel-loader and babel/present-env [Documentation](https://babeljs.io/docs/en/next/), [More Documentation](https://github.com/babel/babel-loader) witch is a JavaScript compiler that allows you to convert ECMAScript 2015+ into a compatible version of JavaScript.
- `npm install -D babel-loader @babel/core @babel/preset-env webpack`

Install "clone", allow deep cloning of objects. [Documentation](https://www.npmjs.com/package/clone)
- `npm install clone --save-dev`

Install ESLint. This is a package that will identifying and reporting on patterns found in ECMAScript/JavaScript code:
- `npm install eslint --save-dev`
- `npm install eslint-plugin-import --save-dev`
- `npm install --save-dev eslint eslint-plugin-node`
- `npm install eslint-config-standard --save-dev`
- `npm install --save-dev eslint-plugin-standard`

#### Grunt

We are going to run this file on grunt.
To intall [Grunt](https://gruntjs.com/getting-started):

- `npm install -g grunt-cli`
- `npm install grunt --save-dev`
- `npm install --save-dev grunt-eslint`
- `npm install grunt-mocha-phantomjs --save-dev`
- `npm install grunt-sass-lint --save-dev`
- `npm install --save-dev grunt-shell`
- `npm i webpack grunt-webpack --save-dev`

#### Loaders:

Install Expose loader:
- `npm install expose-loader --save-dev`
Install File loader:
- `npm install file-loader --save-dev`

Install css-loader whitch will allow you to @import the CSS files and use URLs on CSS. [Read More](https://webpack.js.org/loaders/css-loader/).
- `npm install --save-dev css-loader`

Handlebars loader:
- `npm i handlebars-loader --save-dev`

Grunt:
- `npm install -D load-grunt-config`

Post CSS:
- `npm i -D postcss-loader`

SASS loader:
- `npm install sass-loader sass webpack --save-dev`

Style loader:
- `npm install --save-dev style-loader`

URL loader:
- `npm install url-loader --save-dev`

### devDependencies continued...

This template will alllow the usage of Handlebars.
This can be left off in case you do not want to use handlebars.

To install handlebars:
- `npm install handlebars --save-dev`

Install Node SASS
- `npm install node-sass --save-dev`

Install On build, gives the ability to call back after build
- `npm install --save-dev on-build-webpack`


Save and commit your changes.
