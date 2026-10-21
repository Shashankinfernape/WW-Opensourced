__d("WAWebChatThreadLogging", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebDbEncryptionKey",
    "WAWebUserPrefsMeUser",
    "WAWebUserThreadIdHmac",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S = null;
    function R() {
        if (S == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChatThreadLoggingState: init incomplete!"
            ])));
        }
        return S;
    }
    function L(e) {
        S = e;
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "chat_thread_logging: setting offset"
            ])));
            const r = (yield R()?.metadataStore.setOffset(e)) ?? false;
            if (r) {
                $(e);
            }
            return r;
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: setting thread_id_user_secret"
        ])));
        return R()?.metadataStore.setSecret(e) ?? (v || (v = n("Promise"))).resolve(false);
    }
    function T(e) {
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "chat_thread_logging: handling ",
            " message(s)"
        ])), e.length);
        R()?.eventStore.handleMessages(e).catch(function(e) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "chat_thread_logging: error handling activities"
            ])));
        });
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = yield R()?.metadataStore.getOffset();
            if (a == null) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] upload failed: offset unset"
                ])));
                return;
            }
            const i = yield R()?.metadataStore.getSecret();
            if (i == null) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] upload failed: secret unset"
                ])));
                return;
            }
            const l = yield R()?.eventUploader.uploadEvents(e);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        const t = o("WATimeUtils").unixTime();
        const a = t - t % 86400;
        const i = a + e;
        let l = i - t;
        if (l < 0) {
            l += o("WATimeUtils").DAY_SECONDS;
        }
        self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = "wait-msg-key";
            try {
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                t = "upload";
                yield R()?.eventUploader.uploadEvents({
                    onStage: function(n) {
                        t = n;
                    }
                });
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] scheduled upload failed"
                ]))).catching(r("getErrorSafe")(error)).tags(`ctl_stage:${t}`, `ctl_msg_key:${P() ? "loaded" : "missing"}`).sendLogs("ctl-scheduled-upload-failed");
            } finally{
                $(e);
            }
        }), l * 1000);
    }
    function P() {
        try {
            o("WAWebDbEncryptionKey").DbEncKeyStore.getDbMsgEncKeys({
                tableName: "ctl"
            });
            return true;
        } catch (e) {
            return false;
        }
    }
    function N() {
        if (!r("gkx")("26258")) {
            return R();
        }
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield R();
            const t = yield e == null ? undefined : e.metadataStore.getSecret();
            return t ?? (o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ctl] secret unavailable"
            ]))).sendLogs("ctl-secret-unset"), null);
        });
        return w.apply(this, arguments);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield M();
            if (n == null) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getChatThreadID failed: secret unset"
                ])));
                return;
            }
            const r = o("WAWebChatThreadLoggingUtils").getThreadDs(t ?? o("WATimeUtils").unixTime());
            return o("WAWebChatThreadLoggingUtils").generateThreadID(n, e, r);
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield M();
            if (t == null) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] getChatThreadIDHMAC failed: secret unset"
                ]))).sendLogs("ctwa-labels-thread-id-hmac-error");
                return null;
            }
            return o("WAWebChatThreadLoggingUtils").generateThreadIDHMAC(t, e);
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield M();
            if (t == null) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] getCtwa3pdAggregatedThreadIDHMAC failed: secret unset"
                ]))).sendLogs("ctwa-3pd-aggregated-thread-id-hmac-error");
                return null;
            }
            return o("WAWebChatThreadLoggingUtils").generateCtwa3pdAggregatedThreadIDHMAC(t, e);
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield M();
            if (t == null) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getMessageIDHMAC failed: secret unset"
                ])));
                return null;
            }
            return o("WAWebChatThreadLoggingUtils").generateMessageIDHMAC(t, e);
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().toJid();
                const n = e.key.id;
                return o("WAWebUserThreadIdHmac").generateUserThreadIDHMAC(t, n);
            } catch (error) {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctl] getThreadIDHMAC failed: ",
                    ""
                ])), error);
                return null;
            }
        });
        return G.apply(this, arguments);
    }
    l.setChatThreadLoggingState = L;
    l.setThreadDsTimeframeOffset = E;
    l.setThreadIdUserSecret = I;
    l.handleActivitiesForChatThreadLogging = T;
    l.uploadChatThreadLoggingEvents = D;
    l.initUploadTimer = $;
    l.getChatThreadLoggingStateDebug = N;
    l.getChatThreadID = A;
    l.getChatThreadIDHMAC = O;
    l.getCtwa3pdAggregatedThreadIDHMAC = W;
    l.getMessageIDHMAC = U;
    l.getThreadIDHMAC = H;
}, 98);