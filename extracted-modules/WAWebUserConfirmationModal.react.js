__d("WAWebUserConfirmationModal.react", [
    "WAWebEmailConfirmationModal.react",
    "WAWebPhoneNumberConfirmationModal.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(19);
        const { actions, actionText, actionType, emailContentText, onCancel, onCompletion, phoneContentText, successText, tsNavigationData } = e;
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            t[0] = _;
        } else {
            _ = t[0];
        }
        const mePn = _;
        if (mePn == null) {
            let g;
            if (t[1] !== actionText || t[2] !== actionType || t[3] !== actions || t[4] !== emailContentText || t[5] !== onCancel || t[6] !== onCompletion || t[7] !== successText || t[8] !== tsNavigationData) {
                const Component = r("WAWebEmailConfirmationModal.react");
                g = <Component actions={actions} actionType={actionType} actionText={actionText} contentText={emailContentText} onCancel={onCancel} onCompletion={onCompletion} successText={successText} tsNavigationData={tsNavigationData}/>;
                t[1] = actionText;
                t[2] = actionType;
                t[3] = actions;
                t[4] = emailContentText;
                t[5] = onCancel;
                t[6] = onCompletion;
                t[7] = successText;
                t[8] = tsNavigationData;
                t[9] = g;
            } else {
                g = t[9];
            }
            return g;
        }
        let h;
        if (t[10] !== actionText || t[11] !== actionType || t[12] !== actions || t[13] !== onCancel || t[14] !== onCompletion || t[15] !== phoneContentText || t[16] !== successText || t[17] !== tsNavigationData) {
            const Component = r("WAWebPhoneNumberConfirmationModal.react");
            h = <Component actions={actions} actionType={actionType} actionText={actionText} contentText={phoneContentText} mePn={mePn} onCancel={onCancel} onCompletion={onCompletion} successText={successText} tsNavigationData={tsNavigationData}/>;
            t[10] = actionText;
            t[11] = actionType;
            t[12] = actions;
            t[13] = onCancel;
            t[14] = onCompletion;
            t[15] = phoneContentText;
            t[16] = successText;
            t[17] = tsNavigationData;
            t[18] = h;
        } else {
            h = t[18];
        }
        return h;
    }
    l.default = UComponent;
}, 98);