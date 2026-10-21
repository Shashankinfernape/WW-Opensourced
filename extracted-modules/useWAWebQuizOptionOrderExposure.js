__d("useWAWebQuizOptionOrderExposure", [
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterQuizOptionShuffler",
    "WAWebPollCreationUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(10);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebMsgGetters").getIsNewsletterMsg,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getPollType
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e, n);
        const isNewsletter = a[0];
        const isFromMe = a[1];
        const s = a[2];
        const isQuiz = s === o("WAWebPollCreationUtils").PollType.QUIZ;
        let m;
        if (t[1] !== isFromMe || t[2] !== isNewsletter || t[3] !== isQuiz) {
            m = o("WAWebNewsletterQuizOptionShuffler").isQuizOptionOrderExperimentEligible({
                isFromMe,
                isNewsletter,
                isQuiz
            });
            t[1] = isFromMe;
            t[2] = isNewsletter;
            t[3] = isQuiz;
            t[4] = m;
        } else {
            m = t[4];
        }
        const p = m;
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                root: null,
                threshold: 0
            };
            t[5] = _;
        } else {
            _ = t[5];
        }
        const f = r("useWAWebIntersection")(_);
        const g = f[0];
        const h = f[1];
        const h_isIntersecting = h.isIntersecting;
        const CRef = useRef(false);
        let b;
        let v;
        if (t[6] !== h_isIntersecting || t[7] !== p) {
            b = function() {
                if (!(!p || !h_isIntersecting || CRef.current)) {
                    CRef.current = true;
                    o("WAWebNewsletterGatingUtils").isQuizOptionReshuffleEnabled();
                }
            };
            v = [
                p,
                h_isIntersecting
            ];
            t[6] = h_isIntersecting;
            t[7] = p;
            t[8] = b;
            t[9] = v;
        } else {
            b = t[8];
            v = t[9];
        }
        useEffect(b, v);
        if (p) {
            return g;
        }
        return null;
    }
    l.default = d;
}, 98);