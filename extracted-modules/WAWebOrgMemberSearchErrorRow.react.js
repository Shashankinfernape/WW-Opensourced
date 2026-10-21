__d("WAWebOrgMemberSearchErrorRow.react", [
    "fbt",
    "WAWebOrgMemberSearchErrorRowLayout",
    "WAWebOrgMemberSearchStrings",
    "WAWebTabOrder",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { failure, onRetry } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x1cy8zhl x78zum5 xdt5ytf x5yr21d xl56j7k x6ikm8r x10wlt62 x1mzt3pk xv54qhq xf7dkkf"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== failure) {
            l = o("WAWebOrgMemberSearchStrings").getOrgMemberSearchErrorText(failure);
            t[1] = failure;
            t[2] = l;
        } else {
            l = t[2];
        }
        let c;
        if (t[3] !== l) {
            const Component = r("WDSText.react");
            c = <Component colorName="contentDeemphasized" maxLines={o("WAWebOrgMemberSearchErrorRowLayout").ORG_MEMBER_SEARCH_ERROR_LINES} type="Body2">{l}</Component>;
            t[3] = l;
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== failure || t[6] !== onRetry) {
            const Component = r("WDSTextualLink.react");
            d = o("WAWebOrgMemberSearchErrorRowLayout").orgMemberSearchErrorOffersRetry(failure) && <Component data-tab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} onClick={onRetry} testid="org_member_search_retry" textConfig="Body2Emphasized">{s._("Try again")}</Component>;
            t[5] = failure;
            t[6] = onRetry;
            t[7] = d;
        } else {
            d = t[7];
        }
        let m;
        if (t[8] !== c || t[9] !== d) {
            m = <div {...babelHelpers.extends({}, i, {
                "data-testid": "org_member_search_error_row",
                role: "status",
                children: [
                    c,
                    d
                ]
            })}/>;
            t[8] = c;
            t[9] = d;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    l.default = c;
}, 226);