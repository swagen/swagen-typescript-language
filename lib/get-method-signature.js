'use strict';

const getDataType = require('./get-data-type');
const getReturnType = require('./get-return-type');

function getMethodSignature(operationName, operation, options) {
    let parameters = '';
    for (let p = 0; p < (operation.parameters || []).length; p++) {
        let parameter = operation.parameters[p];
        if (parameters) {
            parameters += ', '
        }
        parameters += `${parameter.name}: ${getDataType(parameter.dataType, parameter.name, options.modelsNs)}`;
    }

    let returnType = getReturnType(operation, { modelsNs: options.modelsNs });
    if (typeof options.returnTypeTransformer === 'function') {
        returnType = options.returnTypeTransformer(returnType);
    }

    let methodSig = `${operationName}(${parameters}): ${returnType}`;
    return methodSig;
}

module.exports = getMethodSignature;
