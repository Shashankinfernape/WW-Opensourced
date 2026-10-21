__d("WAWebTextStatusAction", [
    "fbt",
    "Promise",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebApiTextStatusSuggestions",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactTextStatusBridge",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebToastManager",
    "WAWebUpdateTextStatusForContact",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = 60000;
    const m = new Map;
    function p(e) {
        const t = m.get(e);
        if (t == null) {
            return false;
        }
        if (Date.now() - t < d) {
            return true;
        }
        m.delete(e);
        return false;
    }
    function _({ contactModel, id, lastUpdateTime }) {
        const a = contactModel?.promises.getTextStatus;
        if (a != null) {
            return {
                fetchPromise: a,
                isOwnFetch: false
            };
        }
        const i = o("WAWebContactTextStatusBridge").getTextStatus(id, lastUpdateTime);
        if (contactModel != null) {
            contactModel.promises.getTextStatus = i;
            i.finally(()=>{
                if (contactModel.promises.getTextStatus === i) {
                    delete contactModel.promises.getTextStatus;
                }
            });
        }
        return {
            fetchPromise: i,
            isOwnFetch: true
        };
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lastUpdateTime) {
            if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() && !e.isPSA()) {
                const n = e.toString();
                if (!p(n)) {
                    const contactModel = o("WAWebContactCollection").ContactCollection.get(e);
                    const a = _({
                        contactModel,
                        id: e,
                        lastUpdateTime
                    });
                    const { fetchPromise, isOwnFetch } = a;
                    const s = yield fetchPromise;
                    if (isOwnFetch) {
                        if (s.error) {
                            m.set(n, Date.now());
                            if (s.error instanceof o("WAWebBackendErrors").ServerStatusCodeError && s.error.statusCode === 401) {
                                o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                                    contactId: e,
                                    textString: null,
                                    emoji: null,
                                    ephemeralDuration: null,
                                    newUpdateTime: o("WAWebTextStatusUtils").TEXT_STATUS_NOT_AUTHORIZED,
                                    source: "fetch"
                                });
                            }
                            return;
                        }
                        m.delete(n);
                        o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                            contactId: e,
                            textString: s.text,
                            emoji: s.emoji,
                            ephemeralDuration: s.ephemeralDurationSeconds,
                            newUpdateTime: s.lastUpdateTime,
                            source: "fetch"
                        });
                    }
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ duration, emoji, isUndoAction = false, text, toastId = o("WAWebActionToast.react").genId() }) {
            if (o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()) {
                const p = o("WAWebContactCollection").ContactCollection.getMeContact();
                if (p) {
                    const _ = !text && !emoji;
                    const f = o("WAWebContactTextStatusBridge").setTextStatus(text, emoji, duration);
                    const g = s._("Updating About");
                    const y = s._("Couldn't update About");
                    const C = new (o("WAWebActionToast.react")).ActionType(g);
                    const { textStatusEmoji, textStatusEphemeralDuration, textStatusString } = p;
                    const R = f.then((t)=>{
                        if (t.result === "SUCCESS") {
                            o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                                contactId: p.id,
                                textString: text,
                                emoji,
                                ephemeralDuration: duration,
                                newUpdateTime: _ ? 0 : o("WATimeUtils").unixTime(),
                                source: "set-self"
                            });
                            const i = isUndoAction ? undefined : {
                                actionText: s._("Undo"),
                                actionHandler: function() {
                                    if (textStatusString != null && textStatusEphemeralDuration != null) {
                                        return h({
                                            duration: textStatusEphemeralDuration,
                                            emoji: textStatusEmoji,
                                            isUndoAction: true,
                                            text: textStatusString,
                                            toastId
                                        });
                                    }
                                    return (e || (e = n("Promise"))).resolve();
                                }
                            };
                            return new (o("WAWebActionToast.react")).ActionType(g, i);
                        } else if (t.result === "FAILURE") {
                            return new (o("WAWebActionToast.react")).ActionType(y);
                        }
                    }).catch((e)=>{
                        throw new (o("WAWebActionToast.react")).ActionType(y, {
                            actionText: s._("Try again."),
                            actionHandler: function() {
                                return h({
                                    duration,
                                    emoji,
                                    text,
                                    toastId
                                });
                            }
                        });
                    });
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                        id: toastId,
                        initialAction: C,
                        pendingAction: R
                    }));
                    return R;
                }
            }
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebApiTextStatusSuggestions").getTextStatusSuggestions();
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.slice(0, o("WAWebTextStatusUtils").SUGGESTIONS_MAX_COUNT);
            return o("WAWebApiTextStatusSuggestions").setTextStatusSuggestions(t);
        });
        return S.apply(this, arguments);
    }
    l.getTextStatus = f;
    l.setMyTextStatus = h;
    l.getSuggestions = C;
    l.setSuggestions = v;
}, 226);