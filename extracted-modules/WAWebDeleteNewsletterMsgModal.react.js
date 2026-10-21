__d("WAWebDeleteNewsletterMsgModal.react", [
    "fbt",
    "WAAckLevel",
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebWamEnumInteractionSurface",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m(t) {
        const n = o("react-compiler-runtime").c(15);
        let r;
        let a;
        if (n[0] !== t) {
            a = t.ref;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        const i = r;
        const { fromChannelAlerts, msgList, onCancel, onRevoke } = i;
        let g;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = [];
            n[3] = g;
        } else {
            g = n[3];
        }
        u_useEffect(_, g);
        let h;
        if (n[4] !== fromChannelAlerts || n[5] !== msgList.length) {
            h = fromChannelAlerts === true ? s._("_j{\"*\":\"Followers will no longer be able to see these updates on your channel.\",\"_1\":\"Followers will no longer be able to see this update on your channel.\"}", [
                s._plural(msgList.length)
            ]) : s._("_j{\"*\":\"Delete updates?\",\"_1\":\"Delete update?\"}", [
                s._plural(msgList.length)
            ]);
            n[4] = fromChannelAlerts;
            n[5] = msgList.length;
            n[6] = h;
        } else {
            h = n[6];
        }
        const y = h;
        let C;
        if (n[7] !== msgList) {
            C = msgList.every(p) ? s._("Delete for me") : s._("Delete for everyone");
            n[7] = msgList;
            n[8] = C;
        } else {
            C = n[8];
        }
        const b = C;
        let v;
        if (n[9] !== b || n[10] !== onCancel || n[11] !== onRevoke || n[12] !== a || n[13] !== y) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            v = <Component title={y} okText={b} onOK={onRevoke} okButtonType="solid-warning" onCancel={onCancel} ref={a}/>;
            n[9] = b;
            n[10] = onCancel;
            n[11] = onRevoke;
            n[12] = a;
            n[13] = y;
            n[14] = v;
        } else {
            v = n[14];
        }
        return v;
    }
    function p(e) {
        return e.ack < o("WAAckLevel").ACK.SENT;
    }
    function _() {
        r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.DELETE_CHANNEL_MSG_CONFIRMATION_SCREEN);
    }
    l.default = m;
}, 226);