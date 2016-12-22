'use strict';

const getDataType = require('./get-data-type');

function buildOperationDocComments(operation) {
    let comments = [];
    if (operation.description) {
        comments.push(` * ${operation.description}`);
    }
    if (operation.description2) {
        comments.push(` * ${operation.description2}`);
    }
    let describedParams = (operation.parameters || []).filter(p => !!p.description);
    for (let i = 0; i < describedParams.length; i++) {
        let dataType = getDataType(describedParams[i].dataType);
        comments.push(` * @param {${dataType}} ${describedParams[i].name} - ${describedParams[i].description}`);
    }
    if (comments.length > 0) {
        comments.unshift(`/**`);
        comments.push(` */`);
    }
    return comments;
}

module.exports = buildOperationDocComments;
