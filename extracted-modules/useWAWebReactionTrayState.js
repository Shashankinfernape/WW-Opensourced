__d("useWAWebReactionTrayState", [
    "WAWebDefaultReactions",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU(e) {
        const n = o("react-compiler-runtime").c(12);
        const a = useState(null);
        const i = a[0];
        const l = a[1];
        let u;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = function([a]) {
                if (!a) {
                    l(null);
                    return;
                }
                const i = a.reactionByMe?.reactionText ?? "";
                const s = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, a.reactionByMe?.reactionText).indexOf(i);
                if (s === -1) {
                    l(null);
                    return;
                }
                l(s);
            };
            n[0] = u;
        } else {
            u = n[0];
        }
        const c = u;
        let d;
        if (n[1] !== e) {
            d = [
                e
            ];
            n[1] = e;
            n[2] = d;
        } else {
            d = n[2];
        }
        const m = r("useWAWebReactions")(d, c);
        const m_reactionsModels = m.reactionsModels;
        const _ = m_reactionsModels[0]?.reactionByMe?.reactionText;
        let f;
        if (n[3] !== _) {
            f = o("WAWebReactionsUtils").getReactionsForTray(o("WAWebDefaultReactions").DEFAULT_REACTIONS, _);
            n[3] = _;
            n[4] = f;
        } else {
            f = n[4];
        }
        const g = f;
        let h;
        if (n[5] !== g || n[6] !== m_reactionsModels[0]) {
            h = function(t) {
                if (m_reactionsModels[0] && t === m_reactionsModels[0].reactionByMe?.reactionText) {
                    l(null);
                    return o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
                }
                const n = g.indexOf(t);
                l(o("WAWebReactionsUtils").indexOrNull(n));
                return t;
            };
            n[5] = g;
            n[6] = m_reactionsModels[0];
            n[7] = h;
        } else {
            h = n[7];
        }
        const handleSelection = h;
        let C;
        if (n[8] !== handleSelection || n[9] !== g || n[10] !== i) {
            C = {
                selectedIndex: i,
                reactionOptions: g,
                handleSelection
            };
            n[8] = handleSelection;
            n[9] = g;
            n[10] = i;
            n[11] = C;
        } else {
            C = n[11];
        }
        return C;
    }
    l.default = useU;
}, 98);