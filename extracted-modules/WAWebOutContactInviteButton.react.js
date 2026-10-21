__d("WAWebOutContactInviteButton.react", [
    "fbt",
    "WDSButton.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { isSending, onInvitePress } = e;
        let i;
        if (t[0] !== onInvitePress) {
            i = function(t) {
                t.stopPropagation();
                onInvitePress();
            };
            t[0] = onInvitePress;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Invite");
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== l || t[4] !== isSending) {
            const Component = r("WDSButton.react");
            d = <Component testid="out-contact-invite-button" size="small" variant="tonal" aria-disabled={isSending} loading={isSending} onPress={l} label={c}/>;
            t[3] = l;
            t[4] = isSending;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    l.default = d;
}, 226);