/**
 * @flow
 * @relayHash 2e9aa6b45a86c501532d0e2e1c757f5e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HeroFlatlistScreenQueryVariables = {||};
export type HeroFlatlistScreenQueryResponse = {|
  +heroes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +description: ?string,
    +image: ?string,
  |}>
|};
*/


/*
query HeroFlatlistScreenQuery {
  heroes {
    id
    name
    description
    image
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "heroes",
    "storageKey": null,
    "args": null,
    "concreteType": "Hero",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "image",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeroFlatlistScreenQuery",
  "id": null,
  "text": "query HeroFlatlistScreenQuery {\n  heroes {\n    id\n    name\n    description\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeroFlatlistScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "HeroFlatlistScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71bba345d26b3d7a0fd66b7891281df0';
module.exports = node;
