__d("useWAWebOutContactInviteSend", [
    "WALogger",
    "WAWebOutContactInviteAction",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useRef, useState } = u;
    function p(e, t, n) {
        const r = o("react-compiler-runtime").c(7);
        const a = useState(false);
        const isSending = a[0];
        const l = a[1];
        const sRef = useRef(false);
        let u;
        if (r[0] !== t || r[1] !== n || r[2] !== e) {
            u = function() {
                if (!sRef.current) {
                    sRef.current = true;
                    o("WAWebOutContactInviteAction").sendInvite(e, t, n, function() {
                        return l(true);
                    }).catch(_).finally(()=>{
                        sRef.current = false;
                        l(false);
                    });
                }
            };
            r[0] = t;
            r[1] = n;
            r[2] = e;
            r[3] = u;
        } else {
            u = r[3];
        }
        const sendInviteOnce = u;
        let p;
        if (r[4] !== isSending || r[5] !== sendInviteOnce) {
            p = {
                isSending,
                sendInviteOnce
            };
            r[4] = isSending;
            r[5] = sendInviteOnce;
            r[6] = p;
        } else {
            p = r[6];
        }
        return p;
    }
    function _(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[out-contact-invite] sendInvite failed unexpectedly"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("out-contact-invite-button-failed");
    }
    l.useWAWebOutContactInviteSend = p;
}, 98);