__d("WAWebReportToAdminPopup.react", [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminJob",
    "WAWebToastManager",
    "WAWebWamEnumReportToAdminInteraction",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(18);
        const e_msg = e.msg;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Send for admin review?");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("This message will be sent to group admins for review. Other group members won't be notified.");
            t[1] = l;
        } else {
            l = t[1];
        }
        const c = l;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Ok");
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = d;
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Sending for admin review");
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Sent for admin review");
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Couldn't send for admin review");
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] !== e_msg) {
            C = o("WAWebFrontendMsgGetters").getChat(e_msg);
            t[6] = e_msg;
            t[7] = C;
        } else {
            C = t[7];
        }
        const b = C.id;
        let v;
        if (t[8] !== b || t[9] !== e_msg) {
            v = function() {
                o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
                    reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CONFIRM_SEND_FOR_ADMIN_REVIEW,
                    groupId: b.user
                });
                const e = new (o("WAWebActionToast.react")).ActionType(_);
                const t = o("WAWebReportToAdminJob").sendForAdminReview(e_msg, b).then(()=>new (o("WAWebActionToast.react")).ActionType(g)).catch(()=>new (o("WAWebActionToast.react")).ActionType(y)).finally(o("WAWebModalManager").closeModalManager);
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
                    initialAction: e,
                    pendingAction: t
                }));
            };
            t[8] = b;
            t[9] = e_msg;
            t[10] = v;
        } else {
            v = t[10];
        }
        const S = v;
        let R;
        if (t[11] !== b.user) {
            R = function() {
                o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
                    reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CANCEL_SEND_FOR_ADMIN_REVIEW,
                    groupId: b.user
                });
                o("WAWebModalManager").ModalManager.close();
            };
            t[11] = b.user;
            t[12] = R;
        } else {
            R = t[12];
        }
        const L = R;
        let E;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                surface: "unknown",
                viewName: "report-to-admin"
            };
            t[13] = E;
        } else {
            E = t[13];
        }
        let k;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebBox.react");
            k = <Component_1><Component type="Body2" colorName="contentDeemphasized">{c}</Component></Component_1>;
            t[14] = k;
        } else {
            k = t[14];
        }
        let I;
        if (t[15] !== L || t[16] !== S) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            I = <Component tsNavigationData={E} onOK={S} okText={m} okButtonType="solid-warning" onCancel={L} title={i}>{k}</Component>;
            t[15] = L;
            t[16] = S;
            t[17] = I;
        } else {
            I = t[17];
        }
        return I;
    }
    l.default = c;
}, 226);