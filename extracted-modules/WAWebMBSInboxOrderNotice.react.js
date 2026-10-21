__d("WAWebMBSInboxOrderNotice.react", [
    "fbt",
    "WAWebABProps",
    "WAWebMsgGetters",
    "WAWebOrderStatusButton",
    "WAWebWrapperSystemBubble.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        spacing: {
            marginTop: "x1de0gy",
            $$css: true
        }
    };
    function d(e) {
        const n = o("react-compiler-runtime").c(2);
        const e_msgKey = e.msgKey;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getType,
                o("WAWebMsgGetters").getInteractivePayload,
                o("WAWebMsgGetters").getIsSentByMe
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e_msgKey, i);
        const d = l[0];
        const m = l[1];
        const p = l[2];
        const _ = o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            type: d,
            interactivePayload: m
        });
        const f = _?.order?.order_creator_surface === "biz_inbox";
        const g = f && p && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled");
        if (!g) {
            return null;
        }
        let h;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebWrapperSystemBubble.react");
            h = <Component testid="mbs_inbox_order_admin_notice" xstyle={c.spacing}>{s._("Order accepted from Inbox in Meta Business Suite. Manage its status there.")}</Component>;
            n[1] = h;
        } else {
            h = n[1];
        }
        return h;
    }
    l.default = d;
}, 226);