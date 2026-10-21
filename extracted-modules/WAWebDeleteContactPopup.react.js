__d("WAWebDeleteContactPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(13);
        const { hasCustomerData, onCancel, onOK, syncToAddressbook } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Delete contact?");
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = l;
        let d;
        if (hasCustomerData === true) {
            let m;
            if (t[1] !== syncToAddressbook) {
                m = syncToAddressbook ? s._("This contact and customer information will be deleted from WhatsApp and your phone.") : s._("This contact and customer information will be deleted from WhatsApp.");
                t[1] = syncToAddressbook;
                t[2] = m;
            } else {
                m = t[2];
            }
            d = m;
        } else {
            let p;
            if (t[3] !== syncToAddressbook) {
                p = syncToAddressbook ? s._("This contact will be deleted from WhatsApp and your phone.") : s._("This contact will be deleted from WhatsApp.");
                t[3] = syncToAddressbook;
                t[4] = p;
            } else {
                p = t[4];
            }
            d = p;
        }
        let _;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Delete");
            t[5] = _;
        } else {
            _ = t[5];
        }
        const f = _;
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Cancel, keep contact");
            t[6] = g;
        } else {
            g = t[6];
        }
        const h = g;
        let y;
        if (t[7] !== d) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            y = <Component>{d}</Component>;
            t[7] = d;
            t[8] = y;
        } else {
            y = t[8];
        }
        let C;
        if (t[9] !== onCancel || t[10] !== onOK || t[11] !== y) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            C = <Component onOK={onOK} okText={f} okButtonType="solid-warning" onCancel={onCancel} cancelText={h} title={c}>{y}</Component>;
            t[9] = onCancel;
            t[10] = onOK;
            t[11] = y;
            t[12] = C;
        } else {
            C = t[12];
        }
        return C;
    }
    l.default = c;
}, 226);