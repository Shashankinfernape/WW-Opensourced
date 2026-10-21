__d("WAWebAnnouncementsOnlyMsgBar.react", [
    "fbt",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebMsgBarActions",
    "WAWebMuteGetters",
    "WAWebTabOrder",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGroupMetadataValues",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { groupMetadata, mute } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMuteGetters").getIsMuted
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        o("useWAWebMuteValues").useMuteValues(mute.id, i);
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendGroupMetadataGetters").getId
            ];
            t[1] = l;
        } else {
            l = t[1];
        }
        o("useWAWebGroupMetadataValues").useGroupMetadataValues(groupMetadata.id, l);
        let c;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            c = s._("Message admin");
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== groupMetadata) {
            d = function() {
                o("WAWebMsgBarActions").handleMsgAdmin(groupMetadata, s._("Message admin"));
            };
            t[3] = groupMetadata;
            t[4] = d;
        } else {
            d = t[4];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("admins");
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== d) {
            const Component = r("WDSTextualLink.react");
            p = <Component tabIndex={0} data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} aria-label={c} onClick={d}>{m}</Component>;
            t[6] = d;
            t[7] = p;
        } else {
            p = t[7];
        }
        const _ = p;
        let f;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x126k92a"
            };
            t[8] = f;
        } else {
            f = t[8];
        }
        let g;
        if (t[9] !== _) {
            g = <span {...babelHelpers.extends({}, f, {
                children: s._("Only {admins} can send messages", [
                    s._param("admins", _)
                ])
            })}/>;
            t[9] = _;
            t[10] = g;
        } else {
            g = t[10];
        }
        return g;
    }
    l.default = c;
}, 226);