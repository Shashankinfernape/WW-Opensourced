__d("WAWebNewsletterQuizOptionShuffler", [
    "WACryptoSha256BuilderV2",
    "WAHex",
    "WALogger",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new TextEncoder;
    function u(t, { isFromMe: a, isNewsletter: i, isQuiz: l, stanzaId: s }) {
        if (!c({
            isFromMe: a,
            isNewsletter: i,
            isQuiz: l
        }) || !o("WAWebNewsletterGatingUtils").isQuizOptionReshuffleEnabledWithoutExposure()) {
            return t;
        }
        const u = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()?.user;
        if (u == null || u === "") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[quizOptionShuffler] no LID, keeping the authored quiz order"
            ]))).sendLogs("quiz-option-order-no-lid");
            return t;
        }
        return d(t, u, s);
    }
    function c({ isFromMe: t, isNewsletter: n, isQuiz: r }) {
        return r && n && !t;
    }
    function d(e, t, n) {
        const r = `${t}|${n}|`;
        const o = e.map((e, t)=>({
                index: t,
                key: m(r + String(t))
            }));
        o.sort((e, t)=>{
            if (e.key === t.key) {
                return 0;
            }
            if (e.key < t.key) {
                return -1;
            }
            return 1;
        });
        return o.map(({ index: n })=>e[n]);
    }
    function m(e) {
        return o("WAHex").toLowerCaseHex(new (o("WACryptoSha256BuilderV2")).Sha256BuilderV2().update(s.encode(e)).finish());
    }
    l.applyViewerQuizOptionOrder = u;
    l.isQuizOptionOrderExperimentEligible = c;
    l.viewerOptionOrder = d;
}, 98);