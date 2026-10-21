__d("WAWebGetInteractiveActionsForCarouselCard", [
    "WAWebCarouselMsgUtils",
    "WAWebGetInteractiveActionsFromButtons",
    "WAWebGetInteractiveButtonActionValues",
    "WAWebGetInteractiveCtaActions",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebWamEnumPaidMessagingUserInteractionsActionTarget",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let l = [];
        if (!s(e, t) || e.interactivePayload?.buttons == null) {
            return l;
        }
        for(var c = e.interactivePayload?.buttons ?? [], d = [], m = 0; m < c.length; m++){
            const button = c[m];
            if (button != null) {
                const _ = o("WAWebGetInteractiveCtaActions").nativeFlowButtonToCtaButton({
                    button,
                    index: m,
                    messageNativeFlowName: e.nativeFlowName
                });
                if (_ != null) {
                    d.push(_);
                }
            }
        }
        const f = u(d, t);
        l = r("WAWebGetInteractiveActionsFromButtons")(f, e.id, r("WAWebGetInteractiveButtonActionValues")(e));
        return l.map((t, n)=>{
            const a = f[n];
            let i = null;
            switch(a.name){
                case "cta_url":
                    i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.CTA_URL;
                    break;
                case "quick_reply":
                    i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.QUICK_REPLY;
                    break;
                case "cta_call":
                    i = o("WAWebWamEnumPaidMessagingUserInteractionsActionTarget").PAID_MESSAGING_USER_INTERACTIONS_ACTION_TARGET.CTA_CALL;
                    break;
                case "cta_catalog":
                    break;
            }
            if (i == null) {
                return t;
            }
            return babelHelpers.extends({}, t, {
                onClick: function() {
                    if (t.onClick != null) {
                        t.onClick();
                    }
                    o("WAWebInteractiveMessageCarouselLogEvents").logCarouselCardClickCTA(e.unsafe(), r("nullthrows")(i), n);
                }
            });
        });
    }
    function s(e, t) {
        if (t === true) {
            return true;
        }
        return o("WAWebCarouselMsgUtils").isOutgoingBizBotMessage(e.unsafe());
    }
    function u(e, t) {
        if (t === true) {
            return e;
        }
        return e.filter((e)=>e.name === "quick_reply");
    }
    l.default = e;
}, 98);