__d("WAWebCreateEmojiIcon", [
    "WAWebReactionEmoji.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = 24;
    const m = 22;
    const p = 20;
    const _ = "scale(0.8)";
    const f = "scale(0.7333)";
    const g = "scale(0.6667)";
    const h = {
        scaledEmoji: {
            transform: "x12y6twl",
            transformOrigin: "x1g0ag68",
            $$css: true
        },
        scaledEmojiSmall: {
            transform: "x1stetx1",
            transformOrigin: "x1g0ag68",
            $$css: true
        },
        scaledEmojiExtraSmall: {
            transform: "x11qwu0y",
            transformOrigin: "x1g0ag68",
            $$css: true
        }
    };
    const y = {
        [p]: h.scaledEmojiExtraSmall,
        [m]: h.scaledEmojiSmall,
        [d]: h.scaledEmoji
    };
    const C = new Map;
    function b(e, t = d) {
        const n = `${e}:${t}`;
        let a = C.get(n);
        if (a == null) {
            a = function() {
                return <span {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(y[t]), {
                    children: c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                        reaction: e,
                        size: "large",
                        scale: "tray"
                    })
                })}/>;
            };
            C.set(n, a);
        }
        return a;
    }
    l.default = b;
}, 98);