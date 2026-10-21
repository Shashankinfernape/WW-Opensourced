__d("getPrivacyAwareEditorState", [
    "Lexical"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return {
            nodes: s(e),
            selection: c(e)
        };
    }
    function s(e) {
        const t = [];
        const n = [
            "key",
            "type",
            "detail",
            "format",
            "mode",
            "children",
            "parent",
            "first",
            "last",
            "size",
            "next",
            "prev"
        ];
        for (const [o, a] of e._nodeMap){
            const i = {};
            for (const l of n){
                const s = `__${l}`;
                const c = a[s];
                if (!(c == null || u(l, c))) {
                    i[l] = c;
                }
            }
            t.push(i);
        }
        return t;
    }
    function u(e, t) {
        const n = new Set([
            "detail",
            "format"
        ]);
        return !!(n.has(e) && t === 0 || e === "mode" && t === "normal");
    }
    function c({ _selection }) {
        if (!o("Lexical").$isRangeSelection(_selection)) {
            return null;
        }
        const { anchor, focus } = _selection;
        return {
            anchor: {
                key: anchor.key,
                offset: anchor.offset,
                type: anchor.type
            },
            focus: {
                key: focus.key,
                offset: focus.offset,
                type: focus.type
            }
        };
    }
    l.default = e;
}, 98);