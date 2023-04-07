"use strict";
// ///Very basics about type
// let dammn: number = 23; //You need to define Type with each variable you use or consider it as a good practice tbh
// //Sometimes dammn might give error when .js and .ts file is opened at the same time. Its a bug of vs code
function work(parameter) {
    console.log(parameter.rn, parameter.name);
    return parameter;
}
const obj = {
    name: "Hey",
    rn: 183,
    subjects: 123
};
work(obj);
