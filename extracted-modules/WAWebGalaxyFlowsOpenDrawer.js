__d("WAWebGalaxyFlowsOpenDrawer", [
    "fbt",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c({ chat, flowId, messageData, msg }) {
        if (flowId != null) {
            const messageData_1 = babelHelpers.extends({}, messageData, {
                isResponseFlow: messageData.flowResponseMessage != null
            });
            const l = s._("No response to display");
            if (messageData.isResponseFlow && m(messageData)) {
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: l
                }));
            } else {
                o("WAWebCmd").Cmd.galaxyFlowDrawer({
                    chat,
                    messageData: messageData_1,
                    msg,
                    onClose: o("WAWebDrawerManager").closeDrawerRight
                });
            }
        }
    }
    function d(e, messageData, n, flowId) {
        const i = o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(e, e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ? messageData.flowMessageVersion : null);
        if (i) {
            return function() {
                c({
                    chat: n,
                    flowId,
                    messageData,
                    msg: e
                });
            };
        }
        return r("WAWebNoop");
    }
    function m(messageData) {
        if (messageData.flowResponseMessage == null) {
            return true;
        }
        const t = JSON.parse(messageData.flowResponseMessage);
        let n = true;
        for (const r of t.response){
            if (n) {
                for (const o of r.components){
                    if (o.value != null) {
                        n = false;
                        break;
                    }
                }
            }
        }
        return n;
    }
    function p(e) {
        const t = e.flowId != null && e.flowMessageVersion != null && e.label != null;
        return t || false;
    }
    l.openGalaxyFlowsDrawer = d;
    l.isValidGalaxyFlowBtnParamsJson = p;
}, 226);