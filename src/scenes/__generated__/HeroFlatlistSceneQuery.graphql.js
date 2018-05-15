/**
 * @flow
 * @relayHash 8c13873bfd31ab7fd786f7514c84abd3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HeroFlatlistSceneQueryVariables = {||};
export type HeroFlatlistSceneQueryResponse = {|
  +heroes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +description: ?string,
    +image: ?string,
  |}>
|};
*/


/*
query HeroFlatlistSceneQuery {
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
  "name": "HeroFlatlistSceneQuery",
  "id": null,
  "text": "query HeroFlatlistSceneQuery {\n  heroes {\n    id\n    name\n    description\n    image\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeroFlatlistSceneQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "HeroFlatlistSceneQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9784bba61bfe048e922620e1ff9430aa';
module.exports = node;
