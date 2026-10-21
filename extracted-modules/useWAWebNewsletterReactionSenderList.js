__d("useWAWebNewsletterReactionSenderList", [
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMessageReactionSenderListAction",
    "WAWebNewsletterReactionFrontendUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useState } = u;
    function p(t, a, i) {
        const l = useState(true);
        const s = l[0];
        const u = l[1];
        const p = useState(false);
        const _ = p[0];
        const f = p[1];
        const g = useState([]);
        const h = g[0];
        const y = g[1];
        const C = useState(new Map);
        const b = C[0];
        const v = C[1];
        const S = r("useWAWebEventTargetValue")(r("WAWebNetworkStatus"), "change:online", function() {
            return !r("WAWebNetworkStatus").online;
        });
        const R = useCallback(function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!(!o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionSenderListEnabled(t, i) || S || _)) {
                    const n = yield o("WAWebNewsletterMessageReactionSenderListAction").getNewsletterMessageReactionSenderListAction(t, a);
                    if (n == null) {
                        f(true);
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[useNewsletterReactionSenderList] Failed to get reaction senders for message ",
                            " from newsletter ",
                            ""
                        ])), a.id, t.id).sendLogs("newsletter-hook-failed-to-get-reaction-senders");
                        return;
                    }
                    y(o("WAWebNewsletterReactionFrontendUtils").getContactReactionSenders(n));
                    v(o("WAWebNewsletterReactionFrontendUtils").getReactionSendersForFacePile(n));
                }
            })().finally(()=>{
                u(false);
            });
        }, [
            t,
            a,
            i,
            S,
            _
        ]);
        useEffect(function() {
            return R();
        }, []);
        return [
            b,
            h,
            s,
            _,
            S,
            f,
            R
        ];
    }
    l.useNewsletterReactionSenderList = p;
}, 98);