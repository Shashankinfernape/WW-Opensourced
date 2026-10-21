__d("WAWebSpoilerMutatorComponent.react", [
    "WAWebSpoiler.react",
    "WAWebSpoilerRevealLogger",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, interactive, selectable, spoilerRevealContext } = e;
        const u = children === undefined ? "" : children;
        const c = spoilerRevealContext?.chatWid;
        const isOwnMessage = spoilerRevealContext?.isOwnMessage;
        let m;
        e: {
            if (c == null || isOwnMessage == null) {
                m = undefined;
                break e;
            }
            let p;
            if (t[0] !== c || t[1] !== isOwnMessage) {
                p = function() {
                    return o("WAWebSpoilerRevealLogger").logSpoilerReveal({
                        chatWid: c,
                        isOwnMessage
                    });
                };
                t[0] = c;
                t[1] = isOwnMessage;
                t[2] = p;
            } else {
                p = t[2];
            }
            m = p;
        }
        const onReveal = m;
        const interactive_1 = interactive ?? selectable;
        let g;
        if (t[3] !== u || t[4] !== onReveal || t[5] !== interactive_1) {
            const Component = r("WAWebSpoiler.react");
            g = <Component interactive={interactive_1} onReveal={onReveal}>{u}</Component>;
            t[3] = u;
            t[4] = onReveal;
            t[5] = interactive_1;
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    l.default = c;
}, 98);