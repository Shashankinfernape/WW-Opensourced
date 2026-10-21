__d("WAWebFailedMessageEditResendModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebSendMessageEditAction",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const { failedEditedMsg, ref } = e;
        const i = o("WAWebMsgActionCapability").canEditText(failedEditedMsg);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Try again");
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = l;
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Cancel");
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = d;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Your edited message was not sent. Please try again.");
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== failedEditedMsg) {
            f = function() {
                o("WAWebModalManager").ModalManager.close();
                return o("WAWebSendMessageEditAction").resendLatestEdit(failedEditedMsg);
            };
            t[3] = failedEditedMsg;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                surface: "unknown",
                viewName: "failed-message-edit-resend"
            };
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            y = <Component_1 align="center" justify="center"><p data-testid="failed-message-edit-resend-description-paragraph" className="x98l61r xg6s713"><Component type="Body2" colorName="contentDefault" testid="failed-message-edit-resend-description">{_}</Component></p></Component_1>;
            t[6] = y;
        } else {
            y = t[6];
        }
        let C;
        if (t[7] !== g || t[8] !== ref) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            C = <Component ref={ref} tsNavigationData={h} okText={c} onOK={g} cancelText={m} onCancel={o("WAWebModalManager").closeModalManager}>{y}</Component>;
            t[7] = g;
            t[8] = ref;
            t[9] = C;
        } else {
            C = t[9];
        }
        return C;
    }
    l.default = c;
}, 226);