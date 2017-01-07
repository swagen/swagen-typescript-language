'use strict';

function getPrimitiveTypeName(property) {
    switch (property.primitive) {
        case 'integer':
        case 'number':
            return 'number';
        case 'string': {
            switch (property.subType) {
                case 'date-time':
                    return 'Date';
                case 'uuid':
                    return 'string';
                case 'byte':
                    return 'number';
                default:
                    return 'string';
            }
        }
        case 'boolean':
            return 'boolean';
        case 'file':
        case 'object':
            return 'any';
        default:
            throw new Error(`Cannot translate primitive type ${JSON.stringify(property, null, 4)}`);
    }
}

function prefixNamespace(name, ns) {
    return ns ? `${ns}.${name}` : name;
}

module.exports = function(property, ns) {
    let typeName;
    if (property.primitive) {
        typeName = getPrimitiveTypeName(property);
    } else if (property.complex) {
        typeName = prefixNamespace(property.complex, ns);
    } else if (property.enum) {
        typeName = prefixNamespace(property.enum, ns);
    } else {
        throw new Error(`Cannot understand type of property in definition: ${JSON.stringify(property, null, 4)}`);
    }
    return property.isArray ? typeName + '[]' : typeName;
};
