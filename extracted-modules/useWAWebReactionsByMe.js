__d("useWAWebReactionsByMe", [
    "WAWebEmoji",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebReactions"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function useU(e, t) {
        const n = o("react-compiler-runtime").c(4);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [];
            n[0] = a;
        } else {
            a = n[0];
        }
        const i = useState(a);
        const l = i[0];
        const u = i[1];
        let p;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = function(t) {
                const e = t.filter(m);
                const n = r("compactMap")(e, d);
                u(n);
            };
            n[1] = p;
        } else {
            p = n[1];
        }
        const _ = p;
        let f;
        if (n[2] !== e) {
            f = e.map(c);
            n[2] = e;
            n[3] = f;
        } else {
            f = n[3];
        }
        r("useWAWebReactions")(f, _, t);
        return l;
    }
    function c(e) {
        return e.toString();
    }
    function d(e) {
        if (e.reactionByMe != null) {
            const t = e.reactionByMe;
            const { reactionText, senderUserJid } = t;
            const a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(reactionText);
            const i = e.getReactionSenderModel(a, senderUserJid);
            return i;
        }
    }
    function m(e) {
        return e.reactionByMe != null;
    }
    l.default = useU;
}, 98);