# deeplearn-iris

## Machine Learning in the Browser

This demo project uses the JavaScript library [deeplearn.js](https://deeplearnjs.org/) for machine learning in the browser. It reads the famous [Iris flower database](https://en.wikipedia.org/wiki/Iris_flower_data_set), uses 120 datasets for training and 30 for testing. Then the user can enter values and let the computer guess which of the three Iris species are described by these values. Watch the console for details.

This project accompanies an article in [c't Magazin](https://ct.de/) which is to appear in November 2017. The two `train-only` files contain the core of the project as discussed in the article. `index.html` and `iris.js` have the full functionality, mostly adding boring DOM operations to make it look nicer and useful. `node-test.js` is a minimal demo to prove that deeplearn.js can also be used in Node.js.

The text in the demo project is German only. If you want to see it translated, send me a Pull Request.

## Image credits

### setosa.jpg
CC BY-SA 3.0 - Wikipedia/Radomil, https://commons.wikimedia.org/wiki/File:Kosaciec_szczecinkowaty_Iris_setosa.jpg

### versicolor.jpg
CC BY-SA 3.0 - Wikipedia/Dlanglois, https://de.wikipedia.org/wiki/Verschiedenfarbige_Schwertlilie#/media/File:Iris_versicolor_1.jpg

### virginica.jpg
CC BY-SA 2.0 - Wikipedia/Frank Mayfield (Flickr), https://en.wikipedia.org/wiki/Iris_virginica#/media/File:Iris_virginica.jpg