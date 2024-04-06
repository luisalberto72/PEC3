
interface Plane {
    model: string;
    npassengers: number;
}

interface HangarHash {
    [key: string]: Plane;
}

let myHangar: HangarHash = {}

myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
}
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
}

for (let key in myHangar) {
    console.log(`${key}:${myHangar[key].model}(${myHangar[key].npassengers})`);
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */




