__d("WAWebPresenceChatAction", [
    "WAFilteredCatch",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebChatStateBridge",
    "WAWebContactPresenceBridge",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 2500;
    const _ = 10000;
    const f = new WeakMap;
    function g(e, t) {
        if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot() || o("WAWebChatGetters").getIsBroadcast(e))) {
            const n = o("WAWebStateUtils").unproxy(e);
            return E(n, h(n, t));
        }
    }
    function h(e, t) {
        const a = e.groupMetadata?.participants;
        if (a == null || t == null || t.some((e)=>o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e))) {
            return null;
        }
        const i = t.filter((e)=>o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && a.get(e) != null);
        const l = i.find(C) ?? y(i);
        if (l == null) {
            return null;
        }
        if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            return l;
        }
        return null;
    }
    function y(e) {
        const t = e[0];
        if (t == null || e.some((e)=>!e.equals(t))) {
            return null;
        }
        return t;
    }
    function C(e) {
        return o("WAWebBotProduct").botProductFromServerValue(o("WAWebBotProfileCollection").BotProfileCollection.get(e)?.product) === o("WAWebBotProduct").BotProduct.MUSE;
    }
    function b(e) {
        if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot())) {
            return k(o("WAWebStateUtils").unproxy(e));
        }
    }
    function v(e) {
        if (!(o("WAWebChatGetters").getIsNewsletter(e) || e.id.isBot())) {
            return D(o("WAWebStateUtils").unproxy(e));
        }
    }
    function S() {
        o("WAWebContactPresenceBridge").setPresenceAvailable();
    }
    function R() {
        o("WAWebContactPresenceBridge").setPresenceUnavailable();
    }
    function L(t) {
        if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)) {
            return t.id;
        }
        if (t.accountLid == null) {
            const n = "[presence] getChatIdentifier: lid-migrated client does not have an accountLid!";
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ""
            ])), n).sendLogs("lid-migrated-client-with-null-account-lid");
            throw r("err")(n);
        }
        return t.accountLid;
    }
    function E(e, t) {
        const n = !I(f.get(e), t);
        T(e, t);
        if (!e.typing || n) {
            const r = L(e);
            o("WAWebChatStateBridge").sendChatStateComposing(r, t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status >= 400) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence composing error ",
                        ""
                    ])), r.toLogString());
                }
            }));
        }
        if (!e.typing) {
            e.presenceResendTimerId = self.setTimeout(function() {
                return x(e);
            }, _);
        }
        e.typing = true;
        if (e.pausedTimerId) {
            self.clearTimeout(e.pausedTimerId);
        }
        e.pausedTimerId = self.setTimeout(function() {
            return k(e);
        }, p);
    }
    function k(e) {
        if (e.typing || e.recording) {
            const t = L(e);
            o("WAWebChatStateBridge").sendChatStatePaused(t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status >= 400) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence paused error ",
                        ""
                    ])), t.toLogString());
                }
            }));
        }
        if (e.presenceResendTimerId) {
            self.clearTimeout(e.presenceResendTimerId);
            e.unset("presenceResendTimerId");
        }
        if (e.pausedTimerId) {
            self.clearTimeout(e.pausedTimerId);
            e.unset("pausedTimerId");
        }
        e.typing = e.recording = false;
        f.delete(e);
    }
    function I(e, t) {
        if (e == null || t == null) {
            return e == null && t == null;
        }
        return e.equals(t);
    }
    function T(e, t) {
        if (t == null) {
            f.delete(e);
        } else {
            f.set(e, t);
        }
    }
    function D(e) {
        if (!e.recording) {
            const t = L(e);
            o("WAWebChatStateBridge").sendChatStateRecording(t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status >= 400) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence recording error ",
                        ""
                    ])), t.toLogString());
                }
            }));
            e.presenceResendTimerId = self.setTimeout(function() {
                return x(e);
            }, _);
        }
        if (e.pausedTimerId) {
            self.clearTimeout(e.pausedTimerId);
            e.unset("pausedTimerId");
        }
        e.recording = true;
        e.typing = false;
    }
    function x(e) {
        const t = L(e);
        if (e.recording) {
            o("WAWebChatStateBridge").sendChatStateRecording(t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status >= 400) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence resend recording error ",
                        ""
                    ])), t.toLogString());
                }
            }));
        } else if (e.typing) {
            o("WAWebChatStateBridge").sendChatStateComposing(t, f.get(e)).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status >= 400) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "models:chat send presence resend composing error ",
                        ""
                    ])), t.toLogString());
                }
            }));
        } else {
            e.unset("presenceResendTimerId");
            return;
        }
        e.presenceResendTimerId = self.setTimeout(function() {
            return x(e);
        }, _);
    }
    function $(e) {
        if (e.presence.isOnline) {
            x(e);
        } else if (e.presenceResendTimerId) {
            self.clearTimeout(e.presenceResendTimerId);
            e.unset("presenceResendTimerId");
        }
    }
    function P(e) {
        if (e.presenceResendTimerId) {
            self.clearTimeout(e.presenceResendTimerId);
            e.unset("presenceResendTimerId");
        }
        if (e.pausedTimerId) {
            self.clearTimeout(e.pausedTimerId);
            e.unset("pausedTimerId");
        }
        f.delete(o("WAWebStateUtils").unproxy(e));
        e.typing = false;
    }
    l.markComposing = g;
    l.markPaused = b;
    l.markRecording = v;
    l.sendPresenceAvailable = S;
    l.sendPresenceUnavailable = R;
    l.presenceOnlineChanged = $;
    l.clearPresence = P;
}, 98);