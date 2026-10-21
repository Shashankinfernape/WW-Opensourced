__d("WAWebBizAgentTerminationMsgBar.react", [
    "fbt",
    "WAWebAuthAgentConsumerJourneyLogger",
    "WAWebBizAgentTerminationModal.react",
    "WAWebModalManager",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(businessJid, parentCompanyName, offboardingType) {
        const r = o("react-compiler-runtime").c(5);
        let a;
        let i;
        if (r[0] !== businessJid || r[1] !== offboardingType || r[2] !== parentCompanyName) {
            a = function() {
                o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerImpression({
                    businessJid,
                    offboardingType,
                    parentCompanyJid: null,
                    parentCompanyName
                });
            };
            i = [
                businessJid,
                parentCompanyName,
                offboardingType
            ];
            r[0] = businessJid;
            r[1] = offboardingType;
            r[2] = parentCompanyName;
            r[3] = a;
            r[4] = i;
        } else {
            a = r[3];
            i = r[4];
        }
        e_useEffect(a, i);
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(15);
        const { businessJid, obaPhoneNumber, offboardingType, parentCompanyName } = e;
        d(businessJid, parentCompanyName, offboardingType);
        let c;
        if (t[0] !== businessJid || t[1] !== obaPhoneNumber || t[2] !== offboardingType || t[3] !== parentCompanyName) {
            c = function() {
                o("WAWebAuthAgentConsumerJourneyLogger").logBlockedComposerLearnMoreClick({
                    businessJid,
                    offboardingType,
                    parentCompanyJid: null,
                    parentCompanyName
                });
                o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizAgentTerminationModal.react"), {
                    businessJid,
                    obaPhoneNumber,
                    offboardingType,
                    parentCompanyName
                }));
            };
            t[0] = businessJid;
            t[1] = obaPhoneNumber;
            t[2] = offboardingType;
            t[3] = parentCompanyName;
            t[4] = c;
        } else {
            c = t[4];
        }
        const m = c;
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Learn more");
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] !== m) {
            const Component = r("WDSTextualLink.react");
            _ = <Component testid="agent-termination-msgbar-learn-more" onClick={m}>{p}</Component>;
            t[6] = m;
            t[7] = _;
        } else {
            _ = t[7];
        }
        const f = _;
        const g = parentCompanyName !== "";
        let h;
        if (t[8] !== g || t[9] !== f || t[10] !== parentCompanyName) {
            h = g ? s._("This {companyName} representative is no longer available. {learnMore}", [
                s._param("companyName", parentCompanyName),
                s._param("learnMore", f)
            ]) : s._("This representative is no longer available. {learnMore}", [
                s._param("learnMore", f)
            ]);
            t[8] = g;
            t[9] = f;
            t[10] = parentCompanyName;
            t[11] = h;
        } else {
            h = t[11];
        }
        const y = h;
        let C;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "x126k92a"
            };
            t[12] = C;
        } else {
            C = t[12];
        }
        let b;
        if (t[13] !== y) {
            b = <span {...babelHelpers.extends({
                "data-testid": "agent-termination-msgbar"
            }, C, {
                children: y
            })}/>;
            t[13] = y;
            t[14] = b;
        } else {
            b = t[14];
        }
        return b;
    }
    l.default = m;
}, 226);