__d("WAWebCheckmarkInfoModal.react", [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("WAWebFaqUrl").getBlueFaqUrl();
        const t = function(n) {
            n.preventDefault();
            o("WAWebModalManager").ModalManager.close();
            self.setTimeout(function() {
                return o("WAWebExternalLink.react").openExternalLink(e);
            }, 10);
        };
        const n = d();
        const Component = r("WAWebClickableLink.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 title={s._("Verified")} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Close")}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: n
        })}<br/><br/><Component href={e} onClick={t}>{s._("Learn more about verified accounts")}</Component></Component_1>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d() {
        return s._("WhatsApp's parent company Meta has verified this account based on their activity and information or documents they provide.");
    }
    l.default = c;
}, 226);