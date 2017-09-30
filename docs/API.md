## Functions

<dl>
<dt><a href="#buildHeader">buildHeader(profile, definition)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Generates a file header based on the Swagen profile and definition details.</p>
</dd>
<dt><a href="#buildOperationDocComments">buildOperationDocComments(operation)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Builds documentation comments for a given operation definition.</p>
</dd>
<dt><a href="#getDataType">getDataType(property, ns)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the Typescript data type of the given property definition.</p>
</dd>
<dt><a href="#getMethodSignature">getMethodSignature(operationName, operation, options)</a> ⇒ <code>string</code></dt>
<dd><p>Creates a Typescript method signature from the given operation details.</p>
</dd>
<dt><a href="#getReturnType">getReturnType(operation, options)</a> ⇒ <code>string</code></dt>
<dd><p>Returns a Typescript data type from the responses of the given operation definition.</p>
</dd>
</dl>

<a name="buildHeader"></a>

## buildHeader(profile, definition) ⇒ <code>Array.&lt;string&gt;</code>
Generates a file header based on the Swagen profile and definition details.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - A string array of the lines in the generated header  

| Param | Description |
| --- | --- |
| profile | Swagen profile that is being processed |
| definition | Swagen definition that is being processed |

<a name="buildOperationDocComments"></a>

## buildOperationDocComments(operation) ⇒ <code>Array.&lt;string&gt;</code>
Builds documentation comments for a given operation definition.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - A string array of the lines in the generated doc comments.  

| Param | Description |
| --- | --- |
| operation | Operation definition |

<a name="getDataType"></a>

## getDataType(property, ns) ⇒ <code>string</code>
Returns the Typescript data type of the given property definition.

**Kind**: global function  
**Returns**: <code>string</code> - The Typescript data type.  

| Param | Type | Description |
| --- | --- | --- |
| property |  | Property definition |
| ns | <code>string</code> | Optional namespace to be prefixed for non-primitve types |

<a name="getMethodSignature"></a>

## getMethodSignature(operationName, operation, options) ⇒ <code>string</code>
Creates a Typescript method signature from the given operation details.

**Kind**: global function  
**Returns**: <code>string</code> - A string containing the method signature  

| Param | Type | Description |
| --- | --- | --- |
| operationName | <code>string</code> | Name of the operation |
| operation |  | Operation definition |
| options |  | Options to customize generation |

<a name="getReturnType"></a>

## getReturnType(operation, options) ⇒ <code>string</code>
Returns a Typescript data type from the responses of the given operation definition.

**Kind**: global function  
**Returns**: <code>string</code> - Typescript data type of the operation's responses.  

| Param | Description |
| --- | --- |
| operation | Operation definition |
| options | Options to customize return type |

