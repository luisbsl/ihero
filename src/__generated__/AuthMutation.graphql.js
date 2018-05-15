/**
 * @flow
 * @relayHash a93050c265bd10d2f880937daaed739d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginEmailInput = {
  email: string,
  password: string,
  clientMutationId?: ?string,
};
export type AuthMutationVariables = {|
  input: LoginEmailInput
|};
export type AuthMutationResponse = {|
  +LoginEmail: ?{|
    +token: ?string
  |}
|};
*/


/*
mutation AuthMutation(
  $input: LoginEmailInput!
) {
  LoginEmail(input: $input) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LoginEmailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "LoginEmail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginEmailInput!"
      }
    ],
    "concreteType": "LoginEmailPayload",
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
  "name": "AuthMutation",
  "id": null,
  "text": "mutation AuthMutation(\n  $input: LoginEmailInput!\n) {\n  LoginEmail(input: $input) {\n    token\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AuthMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '72f0b1bd9e4b7f9a81b9df1782ab1103';
module.exports = node;
