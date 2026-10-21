__d("WAWebExternalLinkPopup.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebPremiumMessagesGatingUtils",
    "WAWebText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = 200;
    const p = 140;
    const _ = 60;
    function f(e) {
        if (e.length > m) {
            return `${e.substr(0, p)}...${e.substr(e.length - _)}`;
        }
        return e;
    }
    const g = "https:";
    function h(t, url) {
        const r = "w.meta.me";
        if (url === t) {
            return true;
        }
        let a;
        try {
            a = new URL(url);
        } catch (error) {
            if (!(error instanceof TypeError)) {
                throw error;
            }
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Trackable link verification failed - invalid url format"
            ]))).sendLogs("trackable-link-verification-failed");
            return false;
        }
        return !(a.protocol !== g || a.hostname !== r);
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(16);
        const { merchantUrl, onOkClick, url, verifyTrackableLink } = e;
        const l = merchantUrl ?? url;
        if (verifyTrackableLink === true && !h(l, url)) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Trackable link verification failed"
            ]))).sendLogs("trackable-link-verification-failed");
            return null;
        }
        let c;
        if (t[0] !== onOkClick || t[1] !== url) {
            c = function() {
                o("WAWebExternalLink.react").openExternalLink(url, {
                    noApiCmdHandling: true
                });
                onOkClick?.();
                o("WAWebModalManager").ModalManager.close();
            };
            t[0] = onOkClick;
            t[1] = url;
            t[2] = c;
        } else {
            c = t[2];
        }
        const m = c;
        const p = merchantUrl ?? url;
        let _;
        if (t[3] !== p) {
            _ = f(p);
            t[3] = p;
            t[4] = _;
        } else {
            _ = t[4];
        }
        const g = _;
        let y;
        if (t[5] !== g) {
            y = o("WAWebPremiumMessagesGatingUtils").isPremiumMessagesNewLeavingWAContentEnabled() ? s._("You will leave WhatsApp and go to {url}.", [
                s._param("url", g)
            ]) : g;
            t[5] = g;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        if (t[7] !== C) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            b = <Component testid="popup-url-text">{C}</Component>;
            t[7] = C;
            t[8] = b;
        } else {
            b = t[8];
        }
        const v = b;
        let S;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                surface: "unknown",
                viewName: "external-link"
            };
            t[9] = S;
        } else {
            S = t[9];
        }
        let R;
        let L;
        let E;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Open this link?");
            L = s._("Yes, open");
            E = s._("No, cancel");
            t[10] = R;
            t[11] = L;
            t[12] = E;
        } else {
            R = t[10];
            L = t[11];
            E = t[12];
        }
        let k;
        if (t[13] !== v || t[14] !== m) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            k = <Component tsNavigationData={S} testid="external_link_popup" title={R} okText={L} cancelText={E} onOK={m} onCancel={o("WAWebModalManager").closeModalManager}>{v}</Component>;
            t[13] = v;
            t[14] = m;
            t[15] = k;
        } else {
            k = t[15];
        }
        return k;
    }
    l.default = y;
}, 226);