__d("WAWebMsgBarDeactivateCommunityMessageBar", [
    "fbt",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_groupMetadata = e.groupMetadata;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x126k92a"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_groupMetadata.participants) {
            a = <span {...babelHelpers.extends({}, r, {
                "data-testid": "deactivated-community-msg-bar",
                children: e_groupMetadata.participants.iAmAdmin() ? s._("This community was deactivated. You can no longer message it.") : s._("This community was deactivated")
            })}/>;
            t[1] = e_groupMetadata.participants;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = c;
}, 226);