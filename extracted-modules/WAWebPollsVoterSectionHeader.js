__d("WAWebPollsVoterSectionHeader", [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        root: {
            height: "x5yr21d",
            $$css: true
        },
        paddingHoriz28: {
            paddingInlineStart: "xdylf7x",
            paddingInlineEnd: "x5s3kwk",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        paddingHoriz2: {
            paddingInlineStart: "x4tra6z",
            paddingInlineEnd: "x1j8ymqv",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const c = {
        itemKey: "contacts",
        section: "contacts",
        kind: "section"
    };
    const d = {
        itemKey: "others",
        section: "others",
        kind: "section"
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_sectionType = e.sectionType;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                u.root,
                u.paddingHoriz28,
                u.paddingHoriz2
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_sectionType) {
            a = p(e_sectionType);
            t[1] = e_sectionType;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            const Component_1 = o("WAWebFlex.react").FlexRow;
            i = <Component_1 align="center" xstyle={r}><Component>{a}</Component></Component_1>;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    function p(e) {
        switch(e){
            case "contacts":
                return r("WAWebFbtCommon")("In your contacts");
            case "others":
                return r("WAWebFbtCommon")("Not in your contacts");
            default:
                return "";
        }
    }
    l.ContactSection = c;
    l.OthersSection = d;
    l.PollsVoterSectionHeader = m;
}, 98);