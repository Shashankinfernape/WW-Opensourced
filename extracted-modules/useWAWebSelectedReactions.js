__d("useWAWebSelectedReactions", [
    "react-compiler-runtime",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    const e = function() {};
    function s(t) {
        const n = o("react-compiler-runtime").c(2);
        let a;
        if (n[0] !== t) {
            a = [
                t
            ];
            n[0] = t;
            n[1] = a;
        } else {
            a = n[1];
        }
        const i = r("useWAWebReactions")(a, e);
        const i_reactionsModels = i.reactionsModels;
        if (i_reactionsModels[0]) {
            return i_reactionsModels[0].reactionByMe?.reactionText;
        }
        return null;
    }
    l.default = s;
}, 98);