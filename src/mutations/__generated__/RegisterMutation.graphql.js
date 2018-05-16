/**
 * @flow
 * @relayHash e69e0b52cf833170667eeba07b85b5c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterEmailInput = {
  name: string,
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type RegisterMutationVariables = {|
  input: RegisterEmailInput
|};
export type RegisterMutationResponse = {|
  +RegisterEmail: ?{|
    +token: ?string
  |}
|};
*/


/*
mutation RegisterMutation(
  $input: RegisterEmailInput!
) {
  RegisterEmail(input: $input) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RegisterEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "RegisterEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "RegisterEmailInput!"
      }
    ],
    "concreteType": "RegisterEmailPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RegisterMutation",
  "id": null,
  "text": "mutation RegisterMutation(\n  $input: RegisterEmailInput!\n) {\n  RegisterEmail(input: $input) {\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd9c0f4d4ba74195a9c99f3b0bd84743';
module.exports = node;
