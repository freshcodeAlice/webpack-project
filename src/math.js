const sum = (a,b) => a+b;

const secret = 'secret value';

function sumWithValue() {
    const value = 5;
    return function sumValue(a) {
        return a+value;
    }
}

const sumInnerFunc = sumWithValue();


export default sumInnerFunc