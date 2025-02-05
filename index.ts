// @ts-types="https://esm.sh/baklavajs@2.6.0/dist/bundle"
import { createBaklava } from "https://esm.sh/baklavajs@2.6.0/dist/esm/bundle"

import {
    defineNode,
    NumberInterface,
    NodeInterface,
    ButtonInterfaceComponent
} from "https://esm.sh/baklavajs@2.6.0"

import { defineComponent, markRaw, h } from "https://esm.sh/vue@3.5.13"

const baklava = createBaklava(document.body)
baklava.editor.registerNodeType(defineNode({
    type: "Add",
    inputs: {
        a: () => new NumberInterface("a", 1),
        b: () => new NumberInterface("b", 1),
    },
    outputs: {
        c: () => new NodeInterface("c", 1)
            .setComponent(markRaw(defineComponent({
                render() {
                    return h("canvas")
                },
                mounted() {
                    const el = this.$el as HTMLCanvasElement
                    const ctx = el.getContext("2d")!
                    ctx.fillRect(0, 0, 300, 150)
                },
            })))
    },
    calculate({ a, b }) {
        return { c: a + b }
    }
}))
