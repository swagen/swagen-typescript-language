/**
 * Generates a file header based on the Swagen profile and definition details.
 * @param profile Swagen profile that is being processed
 * @param definition Swagen definition that is being processed
 * @returns {string[]} A string array of the lines in the generated header
 */
export declare function buildHeader(profile: Profile, definition: Definition): string[];
/**
 * Builds documentation comments for a given operation definition.
 * @param operation Operation definition
 * @returns {string[]} A string array of the lines in the generated doc comments.
 */
export declare function buildOperationDocComments(operation: Operation): string[];
/**
 * Returns the Typescript data type of the given property definition.
 * @param property Property definition
 * @param {string} ns Optional namespace to be prefixed for non-primitve types
 * @returns {string} The Typescript data type.
 */
export declare function getDataType(property: Property, ns?: string): string;
/**
 * Creates a Typescript method signature from the given operation details.
 * @param {string} operationName Name of the operation
 * @param operation Operation definition
 * @param options Options to customize generation
 * @returns {string} A string containing the method signature
 */
export declare function getMethodSignature(operationName: string, operation: Operation, options: MethodSignatureOptions): string;
/**
 * Returns a Typescript data type from the responses of the given operation definition.
 * @param operation Operation definition
 * @param options Options to customize return type
 * @returns {string} Typescript data type of the operation's responses.
 */
export declare function getReturnType(operation: Operation, options: ReturnTypeOptions): string;
export interface Profile {
    generator: string;
    mode: string;
}
export interface Definition {
    metadata: {
        title: string;
        description: string;
        baseUrl: string;
    };
}
export interface Property {
    primitive?: 'integer' | 'number' | 'string' | 'boolean' | 'file' | 'object';
    subType?: 'date-time' | 'uuid' | 'byte';
    complex?: string;
    enum?: string;
    isArray: boolean;
}
export interface Operation {
    description: string;
    description2: string;
    parameters: {
        name: string;
        description: string;
        dataType: Property;
    }[];
    responses: {
        dataType: Property;
    }[];
}
export interface ReturnTypeOptions {
    modelsNs?: string;
    voidType?: 'void' | 'any' | 'string' | 'Object' | 'object' | '{}';
}
export interface MethodSignatureOptions extends ReturnTypeOptions {
    returnTypeTransformer: (returnType: string) => string;
}
