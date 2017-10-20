'use strict';
performance.mark('start');
const debug = false;

/* Data and settings */

// Raw data
const allData = [
	[6.4, 2.8, 5.6, 2.2],
	[5.0, 2.3, 3.3, 1.0],
	[4.9, 2.5, 4.5, 1.7],
	[4.9, 3.1, 1.5, 0.1],
	[5.7, 3.8, 1.7, 0.3],
	[4.4, 3.2, 1.3, 0.2],
	[5.4, 3.4, 1.5, 0.4],
	[6.9, 3.1, 5.1, 2.3],
	[6.7, 3.1, 4.4, 1.4],
	[5.1, 3.7, 1.5, 0.4],
	[5.2, 2.7, 3.9, 1.4],
	[6.9, 3.1, 4.9, 1.5],
	[5.8, 4.0, 1.2, 0.2],
	[5.4, 3.9, 1.7, 0.4],
	[7.7, 3.8, 6.7, 2.2],
	[6.3, 3.3, 4.7, 1.6],
	[6.8, 3.2, 5.9, 2.3],
	[7.6, 3.0, 6.6, 2.1],
	[6.4, 3.2, 5.3, 2.3],
	[5.7, 4.4, 1.5, 0.4],
	[6.7, 3.3, 5.7, 2.1],
	[6.4, 2.8, 5.6, 2.1],
	[5.4, 3.9, 1.3, 0.4],
	[6.1, 2.6, 5.6, 1.4],
	[7.2, 3.0, 5.8, 1.6],
	[5.2, 3.5, 1.5, 0.2],
	[5.8, 2.6, 4.0, 1.2],
	[5.9, 3.0, 5.1, 1.8],
	[5.4, 3.0, 4.5, 1.5],
	[6.7, 3.0, 5.0, 1.7],
	[6.3, 2.3, 4.4, 1.3],
	[5.1, 2.5, 3.0, 1.1],
	[6.4, 3.2, 4.5, 1.5],
	[6.8, 3.0, 5.5, 2.1],
	[6.2, 2.8, 4.8, 1.8],
	[6.9, 3.2, 5.7, 2.3],
	[6.5, 3.2, 5.1, 2.0],
	[5.8, 2.8, 5.1, 2.4],
	[5.1, 3.8, 1.5, 0.3],
	[4.8, 3.0, 1.4, 0.3],
	[7.9, 3.8, 6.4, 2.0],
	[5.8, 2.7, 5.1, 1.9],
	[6.7, 3.0, 5.2, 2.3],
	[5.1, 3.8, 1.9, 0.4],
	[4.7, 3.2, 1.6, 0.2],
	[6.0, 2.2, 5.0, 1.5],
	[4.8, 3.4, 1.6, 0.2],
	[7.7, 2.6, 6.9, 2.3],
	[4.6, 3.6, 1.0, 0.2],
	[7.2, 3.2, 6.0, 1.8],
	[5.0, 3.3, 1.4, 0.2],
	[6.6, 3.0, 4.4, 1.4],
	[6.1, 2.8, 4.0, 1.3],
	[5.0, 3.2, 1.2, 0.2],
	[7.0, 3.2, 4.7, 1.4],
	[6.0, 3.0, 4.8, 1.8],
	[7.4, 2.8, 6.1, 1.9],
	[5.8, 2.7, 5.1, 1.9],
	[6.2, 3.4, 5.4, 2.3],
	[5.0, 2.0, 3.5, 1.0],
	[5.6, 2.5, 3.9, 1.1],
	[6.7, 3.1, 5.6, 2.4],
	[6.3, 2.5, 5.0, 1.9],
	[6.4, 3.1, 5.5, 1.8],
	[6.2, 2.2, 4.5, 1.5],
	[7.3, 2.9, 6.3, 1.8],
	[4.4, 3.0, 1.3, 0.2],
	[7.2, 3.6, 6.1, 2.5],
	[6.5, 3.0, 5.5, 1.8],
	[5.0, 3.4, 1.5, 0.2],
	[4.7, 3.2, 1.3, 0.2],
	[6.6, 2.9, 4.6, 1.3],
	[5.5, 3.5, 1.3, 0.2],
	[7.7, 3.0, 6.1, 2.3],
	[6.1, 3.0, 4.9, 1.8],
	[4.9, 3.1, 1.5, 0.1],
	[5.5, 2.4, 3.8, 1.1],
	[5.7, 2.9, 4.2, 1.3],
	[6.0, 2.9, 4.5, 1.5],
	[6.4, 2.7, 5.3, 1.9],
	[5.4, 3.7, 1.5, 0.2],
	[6.1, 2.9, 4.7, 1.4],
	[6.5, 2.8, 4.6, 1.5],
	[5.6, 2.7, 4.2, 1.3],
	[6.3, 3.4, 5.6, 2.4],
	[4.9, 3.1, 1.5, 0.1],
	[6.8, 2.8, 4.8, 1.4],
	[5.7, 2.8, 4.5, 1.3],
	[6.0, 2.7, 5.1, 1.6],
	[5.0, 3.5, 1.3, 0.3],
	[6.5, 3.0, 5.2, 2.0],
	[6.1, 2.8, 4.7, 1.2],
	[5.1, 3.5, 1.4, 0.3],
	[4.6, 3.1, 1.5, 0.2],
	[6.5, 3.0, 5.8, 2.2],
	[4.6, 3.4, 1.4, 0.3],
	[4.6, 3.2, 1.4, 0.2],
	[7.7, 2.8, 6.7, 2.0],
	[5.9, 3.2, 4.8, 1.8],
	[5.1, 3.8, 1.6, 0.2],
	[4.9, 3.0, 1.4, 0.2],
	[4.9, 2.4, 3.3, 1.0],
	[4.5, 2.3, 1.3, 0.3],
	[5.8, 2.7, 4.1, 1.0],
	[5.0, 3.4, 1.6, 0.4],
	[5.2, 3.4, 1.4, 0.2],
	[5.3, 3.7, 1.5, 0.2],
	[5.0, 3.6, 1.4, 0.2],
	[5.6, 2.9, 3.6, 1.3],
	[4.8, 3.1, 1.6, 0.2],
	[6.3, 2.7, 4.9, 1.8],
	[5.7, 2.8, 4.1, 1.3],
	[5.0, 3.0, 1.6, 0.2],
	[6.3, 3.3, 6.0, 2.5],
	[5.0, 3.5, 1.6, 0.6],
	[5.5, 2.6, 4.4, 1.2],
	[5.7, 3.0, 4.2, 1.2],
	[4.4, 2.9, 1.4, 0.2],
	[4.8, 3.0, 1.4, 0.1],
	[5.5, 2.4, 3.7, 1.0],
	[5.9, 3.0, 4.2, 1.5],
	[6.9, 3.1, 5.4, 2.1],
	[5.1, 3.3, 1.7, 0.5],
	[6.0, 3.4, 4.5, 1.6],
	[5.5, 2.5, 4.0, 1.3],
	[6.2, 2.9, 4.3, 1.3],
	[5.5, 4.2, 1.4, 0.2],
	[6.3, 2.8, 5.1, 1.5],
	[5.6, 3.0, 4.1, 1.3],
	[6.7, 2.5, 5.8, 1.8],
	[7.1, 3.0, 5.9, 2.1],
	[4.3, 3.0, 1.1, 0.1],
	[5.6, 2.8, 4.9, 2.0],
	[5.5, 2.3, 4.0, 1.3],
	[6.0, 2.2, 4.0, 1.0],
	[5.1, 3.5, 1.4, 0.2],
	[5.7, 2.6, 3.5, 1.0],
	[4.8, 3.4, 1.9, 0.2],
	[5.1, 3.4, 1.5, 0.2],
	[5.7, 2.5, 5.0, 2.0],
	[5.4, 3.4, 1.7, 0.2],
	[5.6, 3.0, 4.5, 1.5],
	[6.3, 2.9, 5.6, 1.8],
	[6.3, 2.5, 4.9, 1.5],
	[5.8, 2.7, 3.9, 1.2],
	[6.1, 3.0, 4.6, 1.4],
	[5.2, 4.1, 1.5, 0.1],
	[6.7, 3.1, 4.7, 1.5],
	[6.7, 3.3, 5.7, 2.5],
	[6.4, 2.9, 4.3, 1.3]
];
const allLabels = [2, 1, 2, 0, 0, 0, 0, 2, 1, 0, 1, 1, 0, 0, 2, 1, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 2, 0, 2, 0, 1, 1, 0, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 0, 2, 2, 0, 0, 1, 0, 2, 2, 0, 1, 1, 1, 2, 0, 1, 1, 1, 2, 0, 1, 1, 1, 0, 2, 1, 0, 0, 2, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 1, 1, 0, 0, 1, 1, 2, 0, 1, 1, 1, 0, 2, 1, 2, 2, 0, 2, 1, 1, 0, 1, 0, 0, 2, 0, 1, 2, 1, 1, 1, 0, 1, 2, 1];

// Information for output
const variationNames = ['setosa', 'versicolor', 'virginica'];
const imgCredits = ['CC BY-SA 3.0 - Wikipedia/Radomil, https://commons.wikimedia.org/wiki/File:Kosaciec_szczecinkowaty_Iris_setosa.jpg', 'CC BY-SA 3.0 - Wikipedia/Dlanglois, https://de.wikipedia.org/wiki/Verschiedenfarbige_Schwertlilie#/media/File:Iris_versicolor_1.jpg', 'CC BY-SA 2.0 - Wikipedia/Frank Mayfield (Flickr), https://en.wikipedia.org/wiki/Iris_virginica#/media/File:Iris_virginica.jpg']
const attributes = [
	{name: 'Kelchblattlänge'},
	{name: 'Kelchblattbreite'},
	{name: 'Kronblattlänge'},
	{name: 'Kronblattbreite'}
];

// Settings for training and testing
const testSize = allData.length/5;
const batchSize = (allData.length - testSize) / 3;
const steps = batchSize * (debug? 1 : 10);
const stepsBeforeFeedback = 50;
const learningRate = {initial: .006, change: .995, frequency: steps/20};

// DOM helpers
const $ = el => document.querySelector(el);
const $log = $('#log');
const $form = $('form');
const $img = $('figure');

/* Set up deeplearn */

// Import classes
[
	'Graph',
	'Session',
	'NDArrayMathGPU',
	'Array1D',
	'Array2D',
	'SGDOptimizer',
	'InGPUMemoryShuffledInputProviderBuilder',
	'CostReduction'
].forEach(el => window[el] = deeplearn[el]);

// Create graph and tensors
const graph = new Graph();
const math = new NDArrayMathGPU();
const session = new Session(graph, math);
const dataTensor = graph.placeholder('input', [allData[0].length]);
const labelTensor = graph.placeholder('label', [1]);
const multiplier = graph.variable('multiplier', Array2D.randNormal([1, allData[0].length]));
const outputTensor = graph.matmul(multiplier, dataTensor);

/* Train model */

$log.innerHTML += '<li>Trainiere mit ' + (allData.length - testSize) + ' Datensätzen</li>';
const data = [], testData = [], labels = [], testLabels = [];
math.scope((keep, track) => {

	// Transform data into NDArrays
	allData.forEach((array, i) => {
		if (i < allData.length - testSize)
			data.push(track(Array1D.new(array)));
		else
			testData.push(keep(Array1D.new(array)));
	});
	allLabels.forEach((value, i) => {
		if (i < allLabels.length - testSize)
			labels.push(track(Array1D.new([value])));
		else
			testLabels.push(keep(Array1D.new([value])));
	});

	// Shuffle input, create feed entries, cost tensor and optimizer
	const shuffledInputProviderBuilder = new InGPUMemoryShuffledInputProviderBuilder([data, labels]);
	const [dataProvider, labelProvider] = shuffledInputProviderBuilder.getInputProviders();
	const feedEntries = [
		{tensor: dataTensor, data: dataProvider},
		{tensor: labelTensor, data: labelProvider}
	];
	const costTensor = graph.meanSquaredCost(outputTensor, labelTensor);
	const optimizer = new SGDOptimizer(learningRate.initial);

	// Train
	for (let step = 0; step < steps; ++step) {
		const fetchCost = (step+1) % stepsBeforeFeedback? false : true;
		const currentLearningRate = learningRate.initial * Math.pow(learningRate.change, Math.floor(step / learningRate.frequency));
		optimizer.setLearningRate(currentLearningRate);
		const cost = track(session.train(
			costTensor, feedEntries, batchSize, optimizer, fetchCost? CostReduction.MEAN : CostReduction.NONE
		));
		if (fetchCost)
			console.log('last average cost (' + step + '): ' + cost.get());
	}
});
performance.mark('train_finish');
$log.innerHTML += '<li>Training abgeschlossen</li>';

/* Test model */

$log.innerHTML += '<li>Teste mit ' + testData.length + ' Datensätzen</li>';
const good = [], deviations = [];
for (let i = 0; i < testData.length; i++) {
	const test = dataInfer(testData[i], testLabels[i].get(0));
	if (test.ok)
		good.push(i);
	else
		console.warn('test ' + (i+1) + ': ' + test.resInt + ' (' + test.result + '), expected: ' + test.correct);
	deviations.push(test.deviation)
}
testData.forEach(el => el.dispose());
testLabels.forEach(el => el.dispose());
performance.mark('test_finish');
$log.innerHTML += '<li>' + good.length + ' von ' + testData.length + ' Tests erfolgreich</li>';
$log.innerHTML += '<li>Durchschnittliche Testabweichung: ' + Math.round(1000 *deviations.reduce((a, b) => a + b)/deviations.length) / 1000;

/* HTML form and data table */

// Calculate min and max attribute values for input
const maxVals = Array(allData[0].length).fill(0);
const minVals = Array(allData[0].length).fill(999);
allData.forEach((el, i) => {
	if (i >= allData.length - testSize) return;
	for (let i = 0; i < data[0].size; i++) {
		if (el[i] > maxVals[i]) maxVals[i] = el[i];
		if (el[i] < minVals[i]) minVals[i] = el[i];
	}
});
for (let i = 0; i < maxVals.length; i++) {
	minVals[i] = parseInt(minVals[i] * 8);
	maxVals[i] = parseInt(maxVals[i] * 12);
	attributes[i].max = maxVals[i];
	attributes[i].min = minVals[i];
}

// Show input form
let $table = '<table><thead><tr><th></th>';
attributes.forEach((el, i) => $table += '<th>' + el.name + '<br>' + minVals[i] + '–' + maxVals[i] + ' mm</th>');
$table += '</tr></thead><tbody><tr>';
$table += '<td><button type="button" tabindex="' + (attributes.length + 1) + '">Art bestimmen</button></td>';
attributes.forEach((el, i) => $table += '<td><input name="attr' + i + '" type="number" min="' + el.min + '" max="' + el.max + '" tabindex="' + (i + 1) + '"></td>');
$table += '</tr>';

// Show data table
allData.forEach((dataset, i) => {
	$table += '<tr><td><strong>' + variationNames[allLabels[i]] + '</strong></td>';
	for (let j = 0; j < attributes.length; j++) {
		let ds = dataset[j];
		$table += '<td>' + parseInt(ds * 10) + '</td>';
	}
	$table += '</tr>';
});
$table += '</tbody></table>';
$form.innerHTML = $table;
$log.innerHTML += '<li>Bereit für Eingabe</li>';

// On click: classify input data
$('button').addEventListener('click', ev => {
	// Check input
	const inputVals = [];
	const $els = ev.target.form.elements;
	for (let i = 0, inpNum = -1; i < $els.length; i++) {
		if ($els[i].nodeName !== 'INPUT') continue;
		if (!$els[i].value) continue;
		let val = parseInt($els[i].value);
		if (val < minVals[++inpNum] || val > maxVals[inpNum]) continue;
		inputVals.push(val / 10);
	}
	if (inputVals.length !== 4) {
		alert('Problem mit Eingaben!');
		console.error(inputVals);
		return;
	}
	$log.innerHTML += '<li>Eingaben: ' + inputVals.join(', ') + '</li>';

	// Get result
	const test = dataInfer(Array1D.new(inputVals));
	if (test.resInt < 0 || test.resInt > variationNames.length - 1) {
		alert('Daten konnten nicht zugeordnet werden!');
		$log.innerHTML += '<li>Ungültiges Ergebnis: ' + Math.round(test.result*1000)/1000 + '</li>';
		console.error('Invalid result', test);
		return;
	}
	$log.innerHTML += '<li>Iris ' + variationNames[test.resInt] + ' erkannt (Ergebnis ' + Math.round(test.result*1000)/1000 + ', Abweichung ' + Math.round(test.deviation * 1000)/1000 + ')</li>';

	// Show image
	$img.innerHTML = '<img src="./imgs/' + variationNames[test.resInt] + '.jpg" alt="Iris ' + variationNames[test.resInt] + '">';
	$img.innerHTML += '<figcaption><strong>Iris ' + variationNames[test.resInt] + '</strong><br><small>Bildrechte: ' + imgCredits[test.resInt] + '</small></figcaption>';
});
performance.mark('complete');

/* Calculate performance */

performance.measure('total', 'start', 'complete');
performance.measure('train', 'start', 'train_finish');
performance.measure('test', 'train_finish', 'test_finish');
performance.measure('dom', 'test_finish', 'complete');
const perf = performance.getEntriesByType('measure');
$log.innerHTML += '<li>Trainingsdauer: ' + Math.round(perf[1].duration/100)/10 + ' Sekunden</li>';
$log.innerHTML += '<li>Gesamtdauer: ' + Math.round(perf[0].duration/100)/10 + ' Sekunden</li>';

/* Identify data and compare to correct result (if known) */

function dataInfer(data, correct = null) {
	const returnVal = {};
	math.scope((keep, track) => {
	  const testFeedEntry = [
	    {tensor: dataTensor, data: track(data)}
	  ];
		const testOutput = session.eval(outputTensor, testFeedEntry);
		returnVal.result = testOutput.get(0);
		returnVal.resInt = Math.round(returnVal.result);
		returnVal.deviation = Math.abs(returnVal.result - returnVal.resInt);
		returnVal.correct = correct;
		if (correct !== null)
			returnVal.ok = returnVal.resInt === correct;
	});
	return returnVal;
}
