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

const math = new NDArrayMathGPU();
const graph = new Graph();
const session = new Session(graph, math);
const dataTensor = graph.placeholder('input', [allData[0].length]);
const labelTensor = graph.placeholder('label', [1]);
const multiplier = graph.variable('multiplier', Array2D.randNormal([1, allData[0].length]));
const outputTensor = graph.matmul(multiplier, dataTensor);

const testSize = allData.length/5;
const data = [], testData = [], labels = [], testLabels = [];
math.scope((keep, track) => {
	for (let i = 0; i < allData.length; i++) {
		if (i < allData.length - testSize) {
			data.push(track(Array1D.new(allData[i])));
			labels.push(track(Array1D.new([allLabels[i]])));
		} else {
			testData.push(keep(Array1D.new(allData[i])));
			testLabels.push(keep(Array1D.new([allLabels[i]])));
		}
	}

	const Ipb = new InGPUMemoryShuffledInputProviderBuilder([data, labels]);
	const [dataProvider, labelProvider] = Ipb.getInputProviders();
	const feedEntries = [
		{tensor: dataTensor, data: dataProvider},
		{tensor: labelTensor, data: labelProvider}
	];
	const costTensor = graph.meanSquaredCost(outputTensor, labelTensor);
	const optimizer = new SGDOptimizer(.006);

	for (let step = 0; step < 400; ++step) {
		const fetchCost = (step+1) % 50? false : true;
		const cost = track(session.train(
			costTensor, feedEntries, 40, optimizer, fetchCost? CostReduction.MEAN : CostReduction.NONE
		));
		if (fetchCost)
			console.log('Cost (' + step + '): ' + cost.get());
	}
});

for (let i = 0; i < testData.length; i++) {
	const test = dataInfer(testData[i], testLabels[i].get(0));
	if (!test.ok)
		console.warn('Test ' + (i+1) + ': ' + test.resInt + ' (' + test.result + '), expected: ' + test.correct);
}
testData.forEach(el => el.dispose());
testLabels.forEach(el => el.dispose());


function dataInfer(data, correct = null) {
	const returnVal = {};
	math.scope((keep, track) => {
	  const testFeedEntry = [
	    {tensor: dataTensor, data: track(data)}
	  ];
		const testOutput = session.eval(outputTensor, testFeedEntry);
		returnVal.result = testOutput.get(0);
		returnVal.resInt = Math.round(returnVal.result);
		returnVal.correct = correct;
		if (correct !== null)
			returnVal.ok = returnVal.resInt === correct;
	});
	return returnVal;
}
