__d("useWAWebDisclosureShownTracking", [
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { disclosureContentVersion, noticeId, ready } = e;
        const l = ready === undefined ? true : ready;
        const s = r("useVisibility")();
        const d = s[0];
        const m = s[1];
        const pRef = useRef(false);
        let _;
        let f;
        if (t[0] !== disclosureContentVersion || t[1] !== m || t[2] !== noticeId || t[3] !== l) {
            _ = function() {
                if (m && l && !pRef.current) {
                    const e = o("WAWebUserDisclosureCollection").UserDisclosureCollection.get(noticeId);
                    const t = o("WAWebTos").TosManager.getState(noticeId);
                    if (e?.stage != null || t === "SHOWN" || t === "ACCEPTED") {
                        return;
                    }
                    pRef.current = true;
                    o("WAWebSetUserDisclosureStageAction").updateUserDisclosureStateAction(Number(noticeId), o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0, disclosureContentVersion != null ? {
                        disclosureContentVersion
                    } : undefined);
                }
            };
            f = [
                m,
                noticeId,
                disclosureContentVersion,
                l
            ];
            t[0] = disclosureContentVersion;
            t[1] = m;
            t[2] = noticeId;
            t[3] = l;
            t[4] = _;
            t[5] = f;
        } else {
            _ = t[4];
            f = t[5];
        }
        useEffect(_, f);
        return d;
    }
    l.default = d;
}, 98);