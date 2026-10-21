__d("WAWebViewRepliesModel", [
    "WALogger",
    "WAWebBaseModel",
    "WAWebMsgCollection",
    "WAWebThreadId",
    "WAWebThreadModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            const e = this.getParentChat();
            if (e != null) {
                this.seedFromChat(e);
            }
        };
        a_prototype.seedFromChat = function(a) {
            t.prototype.seedFromChat.call(this, a);
            const n = this.id.key.toString();
            if (this.msgs.get(n) == null) {
                const i = a.msgs.get(this.id.key);
                if (i != null) {
                    this.msgs.add(i, {
                        at: 0
                    });
                }
            }
            if (this.msgs.get(n) == null) {
                this.hydrateRootMessage().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] hydrateRootMessage failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("hydrate-root-msg-fail");
                });
            }
        };
        a_prototype.hydrateRootMessage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.id.key.toString();
                if (this.msgs.get(e) == null) {
                    let t;
                    try {
                        const n = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
                            e
                        ]);
                        t = n[0];
                    } catch (error) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[ThreadChatParity] hydrateRootMessage: DB lookup failed"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("hydrate-root-msg-db-fail");
                        return;
                    }
                    if (t != null && this.msgs.get(e) == null) {
                        this.msgs.add(t, {
                            at: 0
                        });
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[ThreadChatParity] hydrateRootMessage: added root to MRM"
                        ])));
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(r("WAWebThreadModel"));
    c.Proxy = "viewRepliesThread";
    c.idClass = r("WAWebThreadId");
    const d = o("WAWebBaseModel").defineModel(c);
    l.default = d;
}, 98);