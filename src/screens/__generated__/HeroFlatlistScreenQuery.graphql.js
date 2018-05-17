/**
 * @flow
 * @relayHash ddcb7be9869554c565f94254ca23292f
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
    +comics: ?number,
    +series: ?number,
    +stories: ?number,
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
    comics
    series
    stories
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "comics",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "series",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "stories",
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
  "text": "query HeroFlatlistScreenQuery {\n  heroes {\n    id\n    name\n    description\n    image\n    comics\n    series\n    stories\n  }\n}\n",
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
(node/*: any*/).hash = '9383a2fa1a4cdfb10a9d7a3dcb8e096b';
module.exports = node;
