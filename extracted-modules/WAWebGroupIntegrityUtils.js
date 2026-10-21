__d("WAWebGroupIntegrityUtils", [
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebStateUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        marginInline15: {
            marginInlineStart: "xx6jrq6",
            marginInlineEnd: "xjx09e3",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        marginTop15: {
            marginTop: "xcxhlts",
            $$css: true
        }
    };
    function c(e) {
        let n = r("WAWebFbtCommon")("Exit Group");
        if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) && o("WAWebStateUtils").unproxy(e).groupMetadata?.getParentGroupChat() != null) {
            n = r("WAWebFbtCommon")("Exit Community");
        }
        return n;
    }
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const { content, icon, testId } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                u.marginInline15,
                u.marginTop15
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        let c;
        if (t[1] !== content) {
            const Component = r("WDSText.react");
            c = <Component type="Body2" colorName="contentDefault">{content}</Component>;
            t[1] = content;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== icon || t[4] !== c || t[5] !== testId) {
            const Component = o("WAWebFlex.react").FlexRow;
            d = <Component justify="center" align="center" xstyle={l} testid={testId}>{icon}{c}</Component>;
            t[3] = icon;
            t[4] = c;
            t[5] = testId;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.getLeaveGroupString = c;
    l.SuspendedModalBodyParagraph = DComponent;
}, 98);