// @ts-types="https://esm.sh/baklavajs@2.6.0/dist/bundle"
import { createBaklava } from "https://esm.sh/baklavajs@2.6.0/dist/esm/bundle"

import {
    defineNode,
    NumberInterface,
    NodeInterface,
} from "https://esm.sh/baklavajs@2.6.0"

const baklava = createBaklava(document.body)
baklava.editor.registerNodeType(defineNode({
    type: "Add",
    inputs: {
        a: () => new NumberInterface("a", 1),
        b: () => new NumberInterface("b", 1),
    },
    outputs: {
        c: () => new NodeInterface("c", 1),
    },
    calculate({ a, b }) {
        return { c: a + b }
    }
}))
