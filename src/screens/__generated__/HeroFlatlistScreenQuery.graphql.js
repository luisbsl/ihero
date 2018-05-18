/**
 * @flow
 * @relayHash f0e3f860f7202c65c47fa64b60b3a218
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeroCard_hero$ref = any;
export type HeroFlatlistScreenQueryVariables = {||};
export type HeroFlatlistScreenQueryResponse = {|
  +heroes: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: HeroCard_hero$ref
      |}
    |}>
  |}
|};
*/


/*
query HeroFlatlistScreenQuery {
  heroes(first: 10) {
    edges {
      node {
        ...HeroCard_hero
        id
      }
    }
  }
}

fragment HeroCard_hero on Hero {
  id
  name
  description
  image
  comics
  series
  stories
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HeroFlatlistScreenQuery",
  "id": null,
  "text": "query HeroFlatlistScreenQuery {\n  heroes(first: 10) {\n    edges {\n      node {\n        ...HeroCard_hero\n        id\n      }\n    }\n  }\n}\n\nfragment HeroCard_hero on Hero {\n  id\n  name\n  description\n  image\n  comics\n  series\n  stories\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeroFlatlistScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "heroes",
        "storageKey": "heroes(first:10)",
        "args": v0,
        "concreteType": "HeroConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "HeroEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Hero",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "HeroCard_hero",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeroFlatlistScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "heroes",
        "storageKey": "heroes(first:10)",
        "args": v0,
        "concreteType": "HeroConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "HeroEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Hero",
                "plural": false,
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
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '41dfd06e1e770a21a011193016b9f0cb';
module.exports = node;
