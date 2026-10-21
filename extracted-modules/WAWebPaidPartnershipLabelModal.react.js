__d("WAWebPaidPartnershipLabelModal.react", [
    "fbt",
    "Promise",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddPaidPartnershipLabelAction",
    "WAWebToastManager",
    "WDSIllustrationWdsPictoMegaphoneAds.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        icon: {
            color: "x1v5yvga",
            marginBottom: "x1ua1l7f",
            $$css: true
        },
        titleText: {
            textAlign: "x2b8uid",
            marginBottom: "x1ua1l7f",
            $$css: true
        },
        centeredText: {
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i = o("WAWebActionToast.react").genId()) {
            const l = o("WAWebFrontendMsgGetters").getChat(t);
            const u = o("WAJids").toNewsletterJid(l.id.toJid());
            const t_serverId = t.serverId;
            const p = t_serverId != null ? o("WAWebNewsletterAddPaidPartnershipLabelAction").WAWebNewsletterAddPaidPartnershipLabelAction(u, t_serverId.toString(), a) : (e || (e = n("Promise"))).resolve(false);
            const _ = s._("Please wait a moment");
            const f = s._("Paid partnership label added.");
            const g = s._("Label not added.");
            const h = new (o("WAWebActionToast.react")).ActionType(_);
            const y = p.then((e)=>{
                if (e === true) {
                    return new (o("WAWebActionToast.react")).ActionType(f);
                }
                throw r("err")("Label not added");
            }).catch(()=>new (o("WAWebActionToast.react")).ActionType(g, {
                    actionText: r("WAWebFbtCommon")("Try again"),
                    actionHandler: function() {
                        return m(t, a, i);
                    }
                }));
            return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                id: i,
                initialAction: h,
                pendingAction: y
            }));
        });
        return p.apply(this, arguments);
    }
    function _(t, a, i = o("WAWebActionToast.react").genId()) {
        const l = s._("Check your internet connection");
        const u = new (o("WAWebActionToast.react")).ActionType(l, {
            actionText: r("WAWebFbtCommon")("Try again"),
            actionHandler: function() {
                if (r("WAWebNetworkStatus").online) {
                    return m(t, a, i);
                }
                _(t, a, i);
                return (e || (e = n("Promise"))).resolve();
            }
        });
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: u,
            pendingAction: (e || (e = n("Promise"))).resolve(u)
        }));
    }
    function f(e) {
        const t = o("react-compiler-runtime").c(26);
        const { msg, onClose } = e;
        const i = msg.isNewsletterStatus === true;
        const l = i ? "STATUS" : "MESSAGE";
        let u;
        if (t[0] !== onClose) {
            u = function() {
                o("WAWebModalManager").ModalManager.close();
                onClose?.();
            };
            t[0] = onClose;
            t[1] = u;
        } else {
            u = t[1];
        }
        const p = u;
        let f;
        if (t[2] !== p || t[3] !== l || t[4] !== msg) {
            f = function() {
                if (!r("WAWebNetworkStatus").online) {
                    _(msg, l);
                    p();
                    return;
                }
                m(msg, l);
                p();
            };
            t[2] = p;
            t[3] = l;
            t[4] = msg;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        let h;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            h = <Component href={o("WAWebFaqUrl").getPaidPartnershipLabelFaqUrl()}>{s._("Learn more")}</Component>;
            t[6] = h;
        } else {
            h = t[6];
        }
        const y = h;
        let C;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                surface: "unknown",
                viewName: "paid-partnership-label"
            };
            t[7] = C;
        } else {
            C = t[7];
        }
        const b = i ? o("WAWebModal.react").ModalTheme.StatusReport : undefined;
        let v;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            v = s._("Add label");
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            S = c.jsx(r("WDSIllustrationWdsPictoMegaphoneAds.react"), {
                testid: "wds-picto-megaphone-ads",
                xstyle: d.icon
            });
            t[9] = S;
        } else {
            S = t[9];
        }
        let R;
        if (t[10] !== i) {
            const Component = r("WDSText.react");
            R = <Component type="Headline1" colorName="contentDefault" xstyle={d.titleText}>{i ? s._("Label your status as paid partnership") : s._("Label your update as paid partnership")}</Component>;
            t[10] = i;
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x78zum5 xdt5ytf x6s0dn4 x1j3ira4"
            };
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== i) {
            const Component = r("WDSText.react");
            E = <Component type="Body1" colorName="contentDeemphasized" xstyle={d.centeredText}>{i ? s._("Only add this label to let followers know when a brand or business has compensated you to share a status. {learnMoreLink}", [
                s._param("learnMoreLink", y)
            ]) : s._("Only add this label to let followers know when a brand or business has compensated you to share an update. {learnMoreLink}", [
                s._param("learnMoreLink", y)
            ])}</Component>;
            t[13] = i;
            t[14] = E;
        } else {
            E = t[14];
        }
        let k;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            k = <Component type="Body2" colorName="contentDeemphasized" xstyle={d.centeredText}>{s._("Once added, this label can't be removed.")}</Component>;
            t[15] = k;
        } else {
            k = t[15];
        }
        let I;
        if (t[16] !== E) {
            I = <div {...babelHelpers.extends({}, L, {
                children: [
                    E,
                    k
                ]
            })}/>;
            t[16] = E;
            t[17] = I;
        } else {
            I = t[17];
        }
        let T;
        if (t[18] !== I || t[19] !== R) {
            const Component = o("WAWebFlex.react").FlexColumn;
            T = <Component align="center">{S}{R}{I}</Component>;
            t[18] = I;
            t[19] = R;
            t[20] = T;
        } else {
            T = t[20];
        }
        let D;
        if (t[21] !== p || t[22] !== g || t[23] !== T || t[24] !== b) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            D = <Component tsNavigationData={C} type={b} onOK={g} okText={v} onCancel={p} buttonWidth="hug">{T}</Component>;
            t[21] = p;
            t[22] = g;
            t[23] = T;
            t[24] = b;
            t[25] = D;
        } else {
            D = t[25];
        }
        return D;
    }
    l.default = f;
}, 226);