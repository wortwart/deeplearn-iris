const DL = require('./node_modules/deeplearn/dist/deeplearn.js');
const math = new DL.NDArrayMathCPU();

console.info('Simple calculation')
const a = DL.Array1D.new([1, 2, 3]);
const b = DL.Scalar.new(2);
math.scope(() => {
  const result = math.add(a, b);
  console.log(result.getValues());  // Float32Array([3, 4, 5])
});
