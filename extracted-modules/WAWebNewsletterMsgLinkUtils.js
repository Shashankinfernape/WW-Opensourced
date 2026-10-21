__d("WAWebNewsletterMsgLinkUtils", [
    "fbt",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebFrontendMsgGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    function _(t) {
        const n = o("WAWebFrontendMsgGetters").getChat(t);
        if (!(n.newsletterMetadata == null || t.serverId == null)) {
            const r = n.newsletterMetadata.inviteCode;
            const a = `https://whatsapp.com/channel/${r}/${t.serverId}`;
            o("WAWebCopyToClipboard").copyTextToClipboard(a).then((e)=>{
                if (e) {
                    o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Link copied to clipboard")
                    }));
                } else {
                    o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("Couldn't copy to clipboard")
                    }));
                }
            }).catch(()=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter msg link] failed to copy link to clipboard"
                ])));
            });
        }
    }
    function f(e) {
        const n = o("WAWebFrontendMsgGetters").getChat(e).newsletterMetadata?.inviteCode;
        if (n == null || e.serverId == null) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter embed] no invite code or post id for the post snippet"
            ]))).tags("newsletter", "embed").sendLogs("newsletter-embed-nothing-to-copy");
            return;
        }
        C(h(n, e.serverId));
    }
    function g(e) {
        const n = e.newsletterMetadata?.inviteCode;
        if (n == null) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter embed] no invite code for the channel snippet"
            ]))).tags("newsletter", "embed").sendLogs("newsletter-embed-nothing-to-copy");
            return;
        }
        C(h(n, null));
    }
    function h(e, t) {
        const n = `https://whatsapp.com/channel/${y(e)}`;
        const r = t != null ? `${n}/${t}` : n;
        const o = t != null ? `
  data-wa-channel-post="${t}"` : "";
        const a = t != null ? "View this update on WhatsApp" : "View this channel on WhatsApp";
        return `<blockquote class="wa-channel-embed"
${`  data-wa-channel-permalink="${n}"${o}>
`}${`  <a href="${r}">${a}</a>
`}</blockquote>`;
    }
    function y(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#039;");
    }
    function C(e) {
        o("WAWebCopyToClipboard").copyTextToClipboard(e).then((e)=>{
            if (e) {
                o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Embed code copied to clipboard")
                }));
            } else {
                b();
            }
        }).catch((e)=>{
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter embed] failed to copy embed code to clipboard"
            ]))).catching(r("getErrorSafe")(e)).tags("newsletter", "embed").sendLogs("newsletter-embed-copy-fail");
            b();
        });
    }
    function b() {
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Couldn't copy to clipboard")
        }));
    }
    l.handleNewsletterMessageLinkCopyClick = _;
    l.handleNewsletterMsgEmbedClick = f;
    l.handleNewsletterChannelEmbedClick = g;
}, 226);