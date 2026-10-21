__d("WAWebAddReactionPill.react", [
    "fbt",
    "WDSChip.react",
    "WDSIconWdsIcMoodAdd.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(4);
        const { onClick, ref } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Add reaction");
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== onClick || t[2] !== ref) {
            const Component = r("WDSChip.react");
            l = <Component Icon={r("WDSIconWdsIcMoodAdd.react")} iconOnly label={i} onPress={onClick} ref={ref} testid="chat_thread_add_reaction_chip"/>;
            t[1] = onClick;
            t[2] = ref;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.default = c;
}, 226);