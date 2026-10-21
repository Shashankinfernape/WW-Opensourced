__d("WAWebSubgroupSuggestionsBanner.react", [
    "fbt",
    "WAWebCmd",
    "WAWebConversationBanner.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebNux",
    "WAWebSubgroupsNuxIcon.react",
    "WAWebUimUie.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingInlineEnd18: {
            paddingInlineEnd: "x1x5flf6",
            $$css: true
        }
    };
    const m = {
        banner: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        icon: {
            color: "x11askks",
            $$css: true
        }
    };
    function p(t) {
        const a = o("react-compiler-runtime").c(14);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const u = i;
        const { chat, onClose, subgroupSuggestionsCount } = u;
        let g;
        if (a[3] !== chat.groupMetadata?.parentGroup || a[4] !== onClose) {
            g = function() {
                const t = chat.groupMetadata?.parentGroup;
                if (t) {
                    o("WAWebCmd").Cmd.openCommunityPendingGroupsDrawer(t);
                    onClose();
                }
            };
            a[3] = chat.groupMetadata?.parentGroup;
            a[4] = onClose;
            a[5] = g;
        } else {
            g = a[5];
        }
        const y = g;
        let C;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebFlexItem.react");
            C = <Component xstyle={d.paddingInlineEnd18}>{c.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
                xstyle: m.icon,
                height: 20
            })}</Component>;
            a[6] = C;
        } else {
            C = a[6];
        }
        let b;
        if (a[7] !== subgroupSuggestionsCount) {
            let v;
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            const Component_2 = r("WAWebFlexItem.react");
            const Component_3 = o("WAWebFlex.react").FlexRow;
            b = <Component_3 align="center">{C}<Component_2><Component_1 type="Body2" colorName="contentDeemphasized" testid="community-suggestions-banner-text">{(v = s._plural(subgroupSuggestionsCount, "group_suggestions"), s._("_j{\"*\":\"{=m0} {group_suggestions} group suggestions\",\"_1\":\"{=m0} 1 group suggestion\"}", [
                v,
                s._implicitParam("=m0", <Component type="Body2Emphasized" colorName="accent" testid="community-suggestions-banner-review">{s._("_j{\"*\":\"Review\"}", [
                    v
                ])}</Component>)
            ]))}</Component_1></Component_2></Component_3>;
            a[7] = subgroupSuggestionsCount;
            a[8] = b;
        } else {
            b = a[8];
        }
        let S;
        if (a[9] !== y || a[10] !== onClose || a[11] !== l || a[12] !== b) {
            const Component = r("WAWebConversationBanner.react");
            const Component_1 = o("WAWebUimUie.react").UIE;
            S = <Component_1 displayName="SubgroupSuggestionsBanner" escapable><Component ref={l} xstyle={m.banner} onClick={y} onClose={onClose}>{b}</Component></Component_1>;
            a[9] = y;
            a[10] = onClose;
            a[11] = l;
            a[12] = b;
            a[13] = S;
        } else {
            S = a[13];
        }
        return S;
    }
    function _(e) {
        const n = o("react-compiler-runtime").c(3);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                "add",
                "remove",
                "reset"
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        let i;
        if (n[1] !== e?.groupMetadata) {
            i = function() {
                return e?.groupMetadata?.getSubgroupSuggestions().length ?? 0;
            };
            n[1] = e?.groupMetadata;
            n[2] = i;
        } else {
            i = n[2];
        }
        const l = r("useWAWebEventTargetValue")(e?.groupMetadata?.subgroupSuggestions, a, i);
        return l;
    }
    function f(e) {
        const a = o("react-compiler-runtime").c(17);
        let i;
        if (a[0] !== e.groupMetadata) {
            i = e.groupMetadata?.getParentGroupChat();
            a[0] = e.groupMetadata;
            a[1] = i;
        } else {
            i = a[1];
        }
        const s = i;
        const u = _(s);
        let c;
        if (a[2] !== s) {
            const d = s != null && s.id ? s.id.toString() : "";
            c = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(d);
            a[2] = s;
            a[3] = c;
        } else {
            c = a[3];
        }
        const m = c;
        let p;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                "bulk_add",
                "bulk_remove",
                "reset",
                "change:isAdmin"
            ];
            a[4] = p;
        } else {
            p = a[4];
        }
        let f;
        if (a[5] !== e.groupMetadata?.participants) {
            f = function() {
                let t;
                return !!((t = e.groupMetadata) != null && t.participants.iAmAdmin());
            };
            a[5] = e.groupMetadata?.participants;
            a[6] = f;
        } else {
            f = a[6];
        }
        const h = r("useWAWebEventTargetValue")(e.groupMetadata?.participants, p, f);
        const y = r("useWAWebNux")(m);
        const C = y[0];
        const b = y[1];
        let v;
        if (a[7] !== e.groupMetadata || a[8] !== h || a[9] !== s || a[10] !== C || a[11] !== u) {
            v = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !!s && u > 0 && h && C;
            a[7] = e.groupMetadata;
            a[8] = h;
            a[9] = s;
            a[10] = C;
            a[11] = u;
            a[12] = v;
        } else {
            v = a[12];
        }
        const S = v;
        let R;
        if (a[13] !== S || a[14] !== u || a[15] !== b) {
            R = [
                S,
                b,
                u
            ];
            a[13] = S;
            a[14] = u;
            a[15] = b;
            a[16] = R;
        } else {
            R = a[16];
        }
        return R;
    }
    l.SubgroupSuggestionsBanner = p;
    l.useSubgroupSuggestionsBanner = f;
}, 226);