__d("WAWebConversationDeprecatedLidChatBanner.react", [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConversationNewBanner.react",
    "WAWebFindChatAction",
    "WDSIconIcCheck.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_latestLid = e.latestLid;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("This phone number is connected to a new WhatsApp account.");
            t[0] = i;
        } else {
            i = t[0];
        }
        const primaryText = i;
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("Message the new account");
            t[1] = u;
        } else {
            u = t[1];
        }
        const d = u;
        let _;
        if (t[2] !== e_latestLid) {
            const f = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    o("WAWebFindChatAction").findOrCreateLatestChat(e_latestLid, "deprecatedLidOrPnChat").then(p).catch(m);
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            const Component = o("WAWebButton.react").WAWebButtonSecondary;
            _ = <Component key="go_to_latest_lid_chat" onClick={f} icon={r("WDSIconIcCheck.react")}>{d}</Component>;
            t[2] = e_latestLid;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const g = _;
        let h;
        if (t[4] !== g) {
            h = c.jsx(r("WAWebConversationNewBanner.react"), {
                primaryText,
                buttons: [
                    g
                ]
            });
            t[4] = g;
            t[5] = h;
        } else {
            h = t[5];
        }
        return h;
    }
    function m() {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[deprecated lid chat] find/create latest chat failed"
        ]))).sendLogs("failed-to-find-or-create-latest-chat-from-deprecated-chat");
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat }) {
            const n = yield o("WAWebCmd").Cmd.openChatFromUnread({
                chat,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DeprecatedLidChatBanner
            });
            if (n) {
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
            }
        });
        return _.apply(this, arguments);
    }
    l.default = d;
}, 226);