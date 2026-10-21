__d("WAWebCommunityAnnouncementsMsgBar.react", [
    "fbt",
    "WALogger",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgBarActions",
    "WAWebTabOrder",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGroupMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        wrapper: {
            width: "xh8yej3",
            marginTop: "x16z1lm9",
            marginBottom: "x11tup63",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(14);
        const t_groupMetadata = t.groupMetadata;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendGroupMetadataGetters").getParentGroup,
                o("WAWebFrontendGroupMetadataGetters").getId
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebGroupMetadataValues").useGroupMetadataValues(t_groupMetadata.id, i);
        const u = l[0];
        if (!u) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "CommunityAnnouncementsMsgBar null parent"
            ])));
            return null;
        }
        let m;
        if (n[1] !== t_groupMetadata) {
            m = function(t) {
                t.stopPropagation();
                o("WAWebMsgBarActions").handleMsgAdmin(t_groupMetadata, s._("Message community admin"));
            };
            n[1] = t_groupMetadata;
            n[2] = m;
        } else {
            m = n[2];
        }
        const _ = m;
        const f = p;
        let g;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("community admins");
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] !== _) {
            const Component = r("WDSTextualLink.react");
            h = <Component data-tab={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} onClick={_} onKeyDown={f}>{g}</Component>;
            n[4] = _;
            n[5] = h;
        } else {
            h = n[5];
        }
        const y = h;
        let C;
        if (n[6] !== u) {
            C = function() {
                o("WAWebCmd").Cmd.openCommunityHome(u);
            };
            n[6] = u;
            n[7] = C;
        } else {
            C = n[7];
        }
        let b;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x126k92a"
            };
            n[8] = b;
        } else {
            b = n[8];
        }
        let v;
        if (n[9] !== y) {
            const Component = r("WAWebFlexItem.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            v = <Component_1 align="center" justify="center"><Component><span {...babelHelpers.extends({}, b, {
                children: s._("Only {community admins link} can send messages", [
                    s._param("community admins link", y)
                ])
            })}/></Component></Component_1>;
            n[9] = y;
            n[10] = v;
        } else {
            v = n[10];
        }
        let S;
        if (n[11] !== C || n[12] !== v) {
            const Component = o("WAWebClickable.react").Clickable;
            S = <Component onClick={C} xstyle={d.wrapper}>{v}</Component>;
            n[11] = C;
            n[12] = v;
            n[13] = S;
        } else {
            S = n[13];
        }
        return S;
    }
    function p(e) {
        if (r("WAWebKeyboardIsKeyActivation")(e)) {
            e.stopPropagation();
        }
    }
    l.default = m;
}, 226);