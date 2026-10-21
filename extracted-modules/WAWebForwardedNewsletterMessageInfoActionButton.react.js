__d("WAWebForwardedNewsletterMessageInfoActionButton.react", [
    "WAWebCommonNewsletterStrings",
    "WAWebMessageBubbleActions.react",
    "WAWebNewsletterGatingUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedNewsletterMessageClickHandler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingBottom8: {
            paddingBottom: "x12xbjc7",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { isAlbum, msg } = e;
        const a = isAlbum === undefined ? false : isAlbum;
        const i = o("useWAWebForwardedNewsletterMessageClickHandler").useForwardedNewsletterMessageClickHandler(msg.id, o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled);
        if (i == null) {
            return null;
        }
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel("view");
            t[0] = l;
        } else {
            l = t[0];
        }
        let c;
        if (t[1] !== i) {
            c = [
                {
                    label: l,
                    onClick: i,
                    testid: "newsletter-invite-link-action",
                    xstyle: u.paddingBottom8
                }
            ];
            t[1] = i;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = a ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme.ALBUM : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.FORWARDED_NEWSLETTER;
        let m;
        if (t[3] !== c || t[4] !== d) {
            m = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: c,
                theme: d
            });
            t[3] = c;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        return m;
    }
    l.default = c;
}, 98);