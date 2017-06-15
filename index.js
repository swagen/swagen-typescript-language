'use strict';

module.exports = {
    buildHeader: require('./lib/build-header'),
    buildModelFactoryClass: require('./lib/build-model-factory-class'),
    buildOperationDocComments: require('./lib/build-operation-doc-comments'),
    getDataType: require('./lib/get-data-type'),
    getMethodSignature: require('./lib/get-method-signature'),
    getReturnType: require('./lib/get-return-type')
};
