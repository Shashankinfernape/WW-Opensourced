__d("useWAWebScheduledMsgCount", [
    "WAJids",
    "WALogger",
    "WAWebCmd",
    "WAWebScheduledMsgStore",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useRef, useState } = u;
    function _(e) {
        const t = o("react-compiler-runtime").c(5);
        const n = useState(0);
        const r = n[0];
        const a = n[1];
        const iRef = useRef(null);
        let l;
        if (t[0] !== e) {
            l = function() {
                iRef.current?.();
                if (e != null) {
                    let t = false;
                    iRef.current = function() {
                        t = true;
                    };
                    const n = o("WAJids").unsafeCoerceToChatJid(e.toJid());
                    o("WAWebScheduledMsgStore").getScheduledMessageCount(n).then((e)=>{
                        if (!t) {
                            a(e);
                        }
                    }).catch(f);
                }
            };
            t[0] = e;
            t[1] = l;
        } else {
            l = t[1];
        }
        const s = l;
        let u;
        let c;
        if (t[2] !== s) {
            u = function() {
                s();
                return function() {
                    iRef.current?.();
                };
            };
            c = [
                s
            ];
            t[2] = s;
            t[3] = u;
            t[4] = c;
        } else {
            u = t[3];
            c = t[4];
        }
        useEffect(u, c);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", s);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", s);
        return r;
    }
    function f(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] Failed to load scheduled message count"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("scheduled-msg-count-fail");
    }
    l.default = _;
}, 98);