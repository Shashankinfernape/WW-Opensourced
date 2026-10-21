__d("WAWebAIAgentAIReplyUtils", [
    "Promise",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiCapiThreadControl",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        skipSideEffects: true
    };
    const p = new WeakMap;
    function _(desired) {
        if (desired === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN) {
            return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED;
        }
        return o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
    }
    function f(e) {
        let t = p.get(e);
        if (t == null) {
            t = {
                desired: e.capiThreadControl,
                serverConfirmed: e.capiThreadControl,
                watermarkMs: 0,
                inFlight: false,
                pendingMutations: 0
            };
            p.set(e, t);
        }
        return t;
    }
    function g(e, t) {
        e.pendingMutations += 1;
        return t().finally(()=>{
            e.pendingMutations = Math.max(0, e.pendingMutations - 1);
        });
    }
    function h(e) {
        const t = f(e);
        const { isAiHandoff, aiHandoffStartedAt } = e;
        if (t.inFlight) {
            t.desired = _(t.desired);
        } else {
            t.serverConfirmed = e.capiThreadControl;
            t.desired = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e) ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED : o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN;
        }
        o("WAWebBizAiCapiThreadControl").setCapiThreadControl(e, t.desired, m);
        if (t.inFlight) {
            return (u || (u = n("Promise"))).resolve(true);
        }
        t.inFlight = true;
        return g(t, ()=>y({
                chat: e,
                previousAiHandoffStartedAt: aiHandoffStartedAt,
                previousIsAiHandoff: isAiHandoff,
                previousUnreadCount: e.unreadCount,
                state: t
            })).finally(()=>{
            t.inFlight = false;
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, previousAiHandoffStartedAt, previousIsAiHandoff, previousUnreadCount, state }) {
            if (state.desired === state.serverConfirmed) {
                return true;
            }
            const state_desired = state.desired;
            let c = false;
            let p = null;
            try {
                const _ = yield o("WAWebAiAgentAutoReplyControlMutation").changeAiReplyStatus(chat.id, state_desired === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN ? "ENABLED" : "MUTED");
                c = _.isSuccess === true;
                if (_.isSuccess === true) {
                    p = _.updateTimestampMs;
                }
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] mutateAiReplyStatus failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("maiba-mutate-ai-reply-fail");
            }
            if (c) {
                state.serverConfirmed = state_desired;
                if (p != null) {
                    state.watermarkMs = Math.max(state.watermarkMs, p);
                }
                b(chat);
                return y({
                    chat,
                    previousAiHandoffStartedAt,
                    previousIsAiHandoff,
                    previousUnreadCount,
                    state
                });
            }
            state.desired = state.serverConfirmed;
            chat.unreadCount = previousUnreadCount;
            chat.isAiHandoff = previousIsAiHandoff;
            chat.aiHandoffStartedAt = previousAiHandoffStartedAt;
            o("WAWebBizAiCapiThreadControl").setCapiThreadControl(chat, state.serverConfirmed, m);
            o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {
                isTurnOn: state_desired === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN
            }));
            return false;
        });
        return C.apply(this, arguments);
    }
    function b(chat) {
        o("WAWebBizAiCapiThreadControl").setAiLastHandoffActor(chat, "BUSINESS").catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] recordBusinessToggle actor write failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("maiba-record-business-toggle-actor-fail");
        });
    }
    function v(e, t) {
        return g(f(e), t);
    }
    function S(e, t, n) {
        const r = f(e);
        if (n != null) {
            r.watermarkMs = Math.max(r.watermarkMs, n);
        }
        r.serverConfirmed = t;
    }
    function R({ chat, options, status, timestampMs }) {
        const i = f(chat);
        if (timestampMs != null) {
            if (timestampMs <= i.watermarkMs) {
                return;
            }
            i.watermarkMs = timestampMs;
        }
        if (!(i.pendingMutations > 0)) {
            const l = E(chat, status, options);
            i.serverConfirmed = status;
            i.desired = status;
            if (chat.capiThreadControl !== status) {
                const s = k(chat, options, l);
                if (s == null) {
                    o("WAWebBizAiCapiThreadControl").setCapiThreadControl(chat, status);
                } else {
                    o("WAWebBizAiCapiThreadControl").setCapiThreadControl(chat, status, s);
                }
                return;
            }
            I({
                chat,
                suggestedRepliesEnabled: options?.suggestedRepliesEnabled
            });
            if (l != null) {
                o("WAWebBizAiCapiThreadControl").setAiLastHandoffActor(chat, l);
            }
        }
    }
    function L(chat, status, n) {
        return chat.capiThreadControl !== status || status === o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_PASSED && typeof n === "boolean" && chat.suggestedRepliesEnabled === true !== n;
    }
    function E(chat, status, options) {
        const r = options?.lastHandoffActor;
        if (r == null) {
            return null;
        }
        return r.actor ?? (L(chat, status, options?.suggestedRepliesEnabled) ? "UNKNOWN" : null);
    }
    function k(chat, options, n) {
        const r = options?.suppressNotification === true ? babelHelpers.extends({}, m) : {};
        const o = options?.suggestedRepliesEnabled;
        if (typeof o === "boolean" && chat.suggestedRepliesEnabled !== o) {
            r.suggestedRepliesEnabled = o;
        }
        if (n != null && chat.aiLastHandoffActor !== n) {
            r.aiLastHandoffActor = n;
        }
        if (Object.keys(r).length > 0) {
            return r;
        }
        return null;
    }
    function I({ chat, suggestedRepliesEnabled }) {
        if (typeof suggestedRepliesEnabled === "boolean" && chat.suggestedRepliesEnabled === true !== suggestedRepliesEnabled) {
            chat.setSuggestedRepliesEnabled(suggestedRepliesEnabled);
        }
    }
    l.mutateAiReplyStatus = h;
    l.trackAiReplyMutation = v;
    l.recordAiReplyServerConfirmation = S;
    l.applyServerEchoThreadControl = R;
}, 98);