__d("WAWebAcp2SendFailView.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFailIcon.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { displayType, faqUrl } = e;
        let i;
        if (t[0] !== faqUrl) {
            const l = function() {
                o("WAWebExternalLink.react").openExternalLink(faqUrl);
            };
            i = function() {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager} cancelText={s._("Learn more")} onCancel={l}>{s._("Your message couldn't be sent because this is a restricted chat. To send messages here, use your primary phone.")}</Component>, {
                    transition: "modal-flow"
                });
            };
            t[0] = faqUrl;
            t[1] = i;
        } else {
            i = t[1];
        }
        const c = i;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Your message couldn't be sent because this is a restricted chat. Click to learn more.");
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = d;
        let p;
        if (t[3] !== displayType || t[4] !== c) {
            const Component = r("WAWebFailIcon.react");
            p = <Component displayType={displayType} tooltip={m} ariaLabel={m} onClick={c}/>;
            t[3] = displayType;
            t[4] = c;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    l.default = c;
}, 226);