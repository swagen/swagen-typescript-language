'use strict';

const getDataType = require('./get-data-type');

function getReturnType(operation, options) {
    if (!operation.responses) {
        return 'any';
    }

    for (let statusKey in operation.responses) {
        let statusCode = +statusKey;
        if (statusCode >= 200 && statusCode < 300 && operation.responses[statusKey].dataType) {
            return getDataType(operation.responses[statusKey].dataType, undefined, options.modelsNs);
        }
    }

    return 'any';
}

module.exports = getReturnType;
