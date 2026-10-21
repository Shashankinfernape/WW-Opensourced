__d("WAWebPaymentLinkComponents.react", [
    "fbt",
    "WALogger",
    "WAWebExternalLink.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMsgGetters",
    "WAWebPaymentLinkWamLogger",
    "WAWebPaymentLinkWithCTAFeature",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    function d() {
        return s._("Open payment link");
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(msg, interaction_component, psp) {
        const t_matchedText = msg.matchedText;
        o("WAWebExternalLink.react").openExternalLink(t_matchedText);
        if (o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(msg)) {
            o("WAWebPaymentLinkWamLogger").genLogClickEvent({
                interaction_component,
                msg
            }, psp).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error logging payment link message click: ",
                    ""
                ])), t);
            });
        }
    }
    function p(e) {
        const n = o("react-compiler-runtime").c(7);
        const { msg, psp } = e;
        if (o("WAWebPaymentLinkWithCTAFeature").isKillSwitchEnabled()) {
            return null;
        }
        const l = o("WAWebMsgGetters").getPaymentLinkMetadata(msg.unsafe());
        if (l?.button?.displayText == null) {
            return null;
        }
        let s;
        if (n[0] !== msg || n[1] !== psp) {
            s = function(t) {
                const msg_matchedText = msg.matchedText;
                o("WAWebExternalLink.react").openExternalLink(msg_matchedText);
                m(msg, o("WAWebPaymentLinkWamLogger").ClickInteractionComponent.LINK_CTA, psp);
            };
            n[0] = msg;
            n[1] = psp;
            n[2] = s;
        } else {
            s = n[2];
        }
        const u = s;
        let p;
        let _;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = d();
            _ = d();
            n[3] = p;
            n[4] = _;
        } else {
            p = n[3];
            _ = n[4];
        }
        let f;
        if (n[5] !== u) {
            f = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: p,
                        title: _,
                        onClick: u,
                        disabled: false,
                        testid: "payment-link-cta",
                        Icon: r("WDSIconIcOpenInNew.react")
                    }
                ]
            });
            n[5] = u;
            n[6] = f;
        } else {
            f = n[6];
        }
        return f;
    }
    l.default = p;
}, 226);