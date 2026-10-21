__d("WAWebBizAgentTerminationModal.react", [
    "fbt",
    "WALogger",
    "WAWebAuthAgentConsumerJourneyLogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebWidFactory",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useEffect = c.useEffect;
    function p(businessJid, parentCompanyName, offboardingType) {
        const r = o("react-compiler-runtime").c(5);
        let a;
        let i;
        if (r[0] !== businessJid || r[1] !== offboardingType || r[2] !== parentCompanyName) {
            a = function() {
                o("WAWebAuthAgentConsumerJourneyLogger").logBottomSheetImpression(businessJid, parentCompanyName, null, offboardingType);
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
        c_useEffect(a, i);
    }
    function _(t) {
        const n = o("react-compiler-runtime").c(32);
        const { businessJid, obaPhoneNumber, offboardingType, parentCompanyName } = t;
        p(businessJid, parentCompanyName, offboardingType);
        let c;
        if (n[0] !== obaPhoneNumber) {
            c = function() {
                let t;
                try {
                    t = o("WAWebWidFactory").createUserWidOrThrow(obaPhoneNumber);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "agent-termination-modal: invalid obaPhoneNumber"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("agent-termination-invalid-oba");
                    return;
                }
                o("WAWebModalManager").ModalManager.close();
                o("WAWebFindChatAction").findOrCreateLatestChat(t, "agentOffboardTermination").then(g).catch(f);
            };
            n[0] = obaPhoneNumber;
            n[1] = c;
        } else {
            c = n[1];
        }
        const m = c;
        const _ = parentCompanyName !== "";
        let h;
        if (n[2] !== _ || n[3] !== parentCompanyName) {
            h = _ ? s._("Contact {companyName}", [
                s._param("companyName", parentCompanyName)
            ]) : s._("Contact");
            n[2] = _;
            n[3] = parentCompanyName;
            n[4] = h;
        } else {
            h = n[4];
        }
        const y = h;
        let C;
        if (n[5] !== _ || n[6] !== parentCompanyName) {
            C = _ ? s._("This {companyName} representative is no longer available", [
                s._param("companyName", parentCompanyName)
            ]) : s._("This representative is no longer available");
            n[5] = _;
            n[6] = parentCompanyName;
            n[7] = C;
        } else {
            C = n[7];
        }
        const b = C;
        let v;
        if (n[8] !== _ || n[9] !== parentCompanyName) {
            v = _ ? s._("This representative is not with {companyName} anymore.", [
                s._param("companyName", parentCompanyName)
            ]) : s._("This representative is no longer available.");
            n[8] = _;
            n[9] = parentCompanyName;
            n[10] = v;
        } else {
            v = n[10];
        }
        const S = v;
        let R;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("You can't call or send messages.");
            n[11] = R;
        } else {
            R = n[11];
        }
        const L = R;
        let E;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                className: "x2b8uid"
            };
            n[12] = E;
        } else {
            E = n[12];
        }
        let k;
        if (n[13] !== b) {
            k = <div {...babelHelpers.extends({
                "data-testid": "agent-termination-modal-title"
            }, E, {
                children: <strong>{b}</strong>
            })}/>;
            n[13] = b;
            n[14] = k;
        } else {
            k = n[14];
        }
        let I;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x78zum5 xdt5ytf xp1r0qw xw7yly9 x1yc453h"
            };
            n[15] = I;
        } else {
            I = n[15];
        }
        let T;
        let D;
        let x;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "x1cy8zhl x78zum5 x1q0g3np xtqikln"
            };
            T = <span className="x2lah0s xr9ek0c">⊘</span>;
            D = {
                className: "x1iyjqo2 xs83m0k x1t1x2f9"
            };
            n[16] = T;
            n[17] = D;
            n[18] = x;
        } else {
            T = n[16];
            D = n[17];
            x = n[18];
        }
        let $;
        if (n[19] !== S) {
            $ = <div {...babelHelpers.extends({
                "data-testid": "agent-termination-modal-bullet-1"
            }, x, {
                children: [
                    T,
                    <span {...babelHelpers.extends({}, D, {
                        children: S
                    })}/>
                ]
            })}/>;
            n[19] = S;
            n[20] = $;
        } else {
            $ = n[20];
        }
        let P;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            P = <div data-testid="agent-termination-modal-bullet-2" className="x1cy8zhl x78zum5 x1q0g3np xtqikln"><span className="x2lah0s xr9ek0c">✕</span><span className="x1iyjqo2 xs83m0k x1t1x2f9">{L}</span></div>;
            n[21] = P;
        } else {
            P = n[21];
        }
        let N;
        if (n[22] !== $) {
            N = <div {...babelHelpers.extends({
                "data-testid": "agent-termination-modal-bullets"
            }, I, {
                children: [
                    $,
                    P
                ]
            })}/>;
            n[22] = $;
            n[23] = N;
        } else {
            N = n[23];
        }
        let M;
        if (n[24] !== N || n[25] !== k) {
            M = <>{k}{N}</>;
            n[24] = N;
            n[25] = k;
            n[26] = M;
        } else {
            M = n[26];
        }
        const w = M;
        let A;
        if (n[27] === Symbol.for("react.memo_cache_sentinel")) {
            A = s._("OK");
            n[27] = A;
        } else {
            A = n[27];
        }
        let F;
        if (n[28] !== w || n[29] !== y || n[30] !== m) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            F = <Component testid="agent-termination-modal" onOK={o("WAWebModalManager").closeModalManager} okText={A} cancelText={y} onCancel={m}>{w}</Component>;
            n[28] = w;
            n[29] = y;
            n[30] = m;
            n[31] = F;
        } else {
            F = n[31];
        }
        return F;
    }
    function f(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "agent-termination-modal: failed to navigate to company chat"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("agent-termination-nav-failed");
    }
    function g({ chat }) {
        return o("WAWebCmd").Cmd.openChatFromUnread({
            chat,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
        });
    }
    l.default = _;
}, 226);