__d("WAWebSetPinChatAction", [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAuraGating",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatPinBridge",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPinChatLimits",
    "WAWebPinnedChatsWamEvent",
    "WAWebPinnedChatsWamUtils",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebWaPlusBenefitJourneyLogger",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujSurface",
    "asyncToGeneratorRuntime",
    "react",
    "requireDeferred"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebSetPinChatAction");
    function m(e, pinned_chat_number) {
        if (!e.isNewsletter() && !(pinned_chat_number <= o("WAWebPinChatLimits").MAX_PINNED_CHATS) && !(!r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive())) {
            const success = r("WAWebAuraGating").isPinnedChatsBenefitActive();
            new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
                surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
            }).logApply({
                success,
                errorMessage: success ? undefined : "not_active_user_exceeded_base_limit",
                customFields: {
                    pinned_chat_number
                }
            });
        }
    }
    function p(e) {
        if (!e.isNewsletter() && r("WAWebAuraGating").isPinnedChatsBenefitActive()) {
            const t = o("WAWebChatPinBridge").getPinLimit(e);
            if (!(t > o("WAWebPinChatLimits").MAX_PINNED_CHATS)) {
                new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
                    benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
                    surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
                }).logApply({
                    success: false,
                    errorMessage: "active_user_blocked_below_premium_limit"
                });
            }
        }
    }
    function _(e, t) {
        return f(o("WAWebStateUtils").unproxy(e), t);
    }
    function f(t, a, i = o("WAWebActionToast.react").genId()) {
        const t_promises = t.promises;
        if (t_promises.setPin) {
            t_promises.setPin.abortController.abort();
        }
        let newPinTime = 0;
        let _lastPinTime;
        const timestamp = o("WATimeUtils").unixTimeMs();
        if (a) {
            newPinTime = timestamp;
        } else {
            _lastPinTime = t.pin;
        }
        const y = new AbortController;
        const y_signal = y.signal;
        const b = !!(a && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive());
        const v = b ? o("WAWebChatPinBridge").getNumConversationsPinned(t.id).then((e)=>{
            const n = o("WAWebChatPinBridge").getPinLimit(t.id);
            if (e >= n) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(405, "Pin limit exceeded");
            }
            return o("WAWebChatPinBridge").setPin({
                _lastPinTime,
                chatId: t.id,
                newPinTime,
                timestamp
            });
        }) : o("WAWebChatPinBridge").setPin({
            _lastPinTime,
            chatId: t.id,
            newPinTime,
            timestamp
        });
        const S = a ? new (o("WAWebActionToast.react")).ActionType(g.getPinningText(t)) : new (o("WAWebActionToast.react")).ActionType(g.getUnpinningText(t));
        const R = v.then(()=>{
            if (y_signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            if (a) {
                o("WAWebChatPinBridge").getNumConversationsPinned(t.id).then((pinnedChatNumber)=>{
                    const pinnedChatsPremiumStatus = o("WAWebPinnedChatsWamUtils").getPinnedChatsPremiumStatus();
                    new (o("WAWebPinnedChatsWamEvent")).PinnedChatsWamEvent({
                        pinnedChatNumber,
                        pinnedChatsPremiumStatus
                    }).commit();
                    m(t.id, pinnedChatNumber);
                });
            }
            const e = a ? g.getPinnedText(t) : g.getUnpinnedText(t);
            return new (o("WAWebActionToast.react")).ActionType(e, {
                actionText: s._("Undo"),
                actionHandler: function() {
                    return f(t, !a, i);
                }
            });
        }).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                if (n.status === 405) {
                    o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert();
                    p(t.id);
                    if (b) {
                        o("WAWebToastManager").ToastManager.close(i);
                        const R = yield d.load();
                        o("WAWebModalManager").ModalManager.openAlert(<R/>);
                        return new (o("WAWebActionToast.react")).ActionType(g.getFailedToPinText(t));
                    }
                    return new (o("WAWebActionToast.react")).ActionType(g.getPinLimitExceededText(t));
                } else if (n.status >= 400) {
                    if (a) {
                        return new (o("WAWebActionToast.react")).ActionType(g.getFailedToPinText(t));
                    }
                    return new (o("WAWebActionToast.react")).ActionType(g.getFailedToUnpinText(t));
                }
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:setPin dropped"
                ])));
                const l = a ? g.getFailedToPinText(t) : g.getFailedToUnpinText(t);
                return new (o("WAWebActionToast.react")).ActionType(l, {
                    actionText: s._("Try again."),
                    actionHandler: function() {
                        return f(t, a, i);
                    }
                });
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: S,
            pendingAction: R
        }));
        const L = v.then(()=>{
            t.pin = newPinTime;
        }).finally(()=>{
            t_promises.setPin = null;
        });
        t_promises.setPin = {
            promise: L,
            abortController: y
        };
        return L;
    }
    var g = {
        getPinnedText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Channel pinned");
            }
            return s._("Chat pinned");
        },
        getUnpinnedText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Channel unpinned");
            }
            return s._("Chat unpinned");
        },
        getPinningText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Pinning channel");
            }
            return s._("Pinning chat");
        },
        getUnpinningText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Unpinning channel");
            }
            return s._("Unpinning chat");
        },
        getFailedToPinText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Couldn't pin channel");
            }
            return s._("Couldn't pin chat");
        },
        getFailedToUnpinText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Couldn't unpin channel");
            }
            return s._("Couldn't unpin chat");
        },
        getPinLimitExceededText: function(t) {
            const e = o("WAWebChatPinBridge").getPinLimit(t.id);
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("_j{\"*\":\"You can only pin up to {number} channels.\",\"_1\":\"You can only pin up to 1 channel.\"}", [
                    s._plural(e, "number")
                ]);
            }
            return s._("_j{\"*\":\"You can only pin up to {number} chats.\",\"_1\":\"You can only pin up to 1 chat.\"}", [
                s._plural(e, "number")
            ]);
        }
    };
    l.setPin = _;
}, 226);