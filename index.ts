// @ts-types="https://esm.sh/baklavajs@2.6.0/dist/bundle"
import { createBaklava } from "https://esm.sh/baklavajs@2.6.0/dist/esm/bundle"

import {
    defineNode,
    NumberInterface,
} from "https://esm.sh/baklavajs@2.6.0"

const baklava = createBaklava(document.body)
baklava.editor.registerNodeType(defineNode({
    type: "MyNode",
    inputs: {
        a: () => new NumberInterface("Number", 1),
    }
}))
