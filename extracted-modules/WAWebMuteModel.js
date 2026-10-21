__d("WAWebMuteModel", [
    "fbt",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAlarm",
    "WAWebBaseModel",
    "WAWebChatMuteBridge",
    "WAWebMiscErrors",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebMuteMentionAllUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebToastManager",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWid",
    "err",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
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
    function S(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const R = v || (v = o("react"));
    const L = -1;
    const E = "global_reactions_mute";
    function k(e, t) {
        if (r("WAWebWid").isGroup(e) && !t) {
            return "group";
        }
        if (r("WAWebWid").isNewsletter(e) && !t) {
            return "newsletter";
        }
        return "chat";
    }
    const I = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.expiration = o("WAWebBaseModel").prop(0);
            e.callExpiration = o("WAWebBaseModel").prop(0);
            e.mentionAllMuteExpiration = o("WAWebBaseModel").prop(0);
            e.isAutoMuted = o("WAWebBaseModel").prop(false);
            e.$MuteImpl$p_1 = o("WAWebBaseModel").session();
            e.$MuteImpl$p_2 = o("WAWebBaseModel").session();
            e.promises = o("WAWebBaseModel").session(function() {
                return {
                    mute: null,
                    unmute: null,
                    muteMentionAll: null,
                    unmuteMentionAll: null
                };
            });
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            if (this.expiration != null && this.expiration !== 0) {
                this.mute({
                    expiration: this.expiration,
                    isAutoMuted: this.isAutoMuted
                });
            }
            if (this.callExpiration != null && this.callExpiration !== 0) {
                this.muteCall(this.callExpiration);
            }
            if (r("WAWebWid").isGroup(this.id) && this.mentionAllMuteExpiration != null && this.mentionAllMuteExpiration !== 0) {
                o("WAWebMuteMentionAllUtils").muteMentionAll(this, this.mentionAllMuteExpiration);
            }
        };
        a_prototype.setMute = function(t, n = false, sendDevice, o) {
            if (!((t == null || t === 0) && (this.expiration == null || this.expiration === 0) || t === this.expiration)) {
                if (t) {
                    this.mute({
                        expiration: t,
                        fromMultiselect: o,
                        isAutoMuted: n,
                        sendDevice
                    });
                } else {
                    this.unmute({
                        fromMultiselect: o,
                        sendDevice
                    });
                }
            }
        };
        a_prototype.setAutoMuted = function(t) {
            this.set({
                isAutoMuted: t
            });
        };
        a_prototype.mute = function(a) {
            const t = this;
            const { expiration, fromMultiselect } = a;
            const p = fromMultiselect === undefined ? false : fromMultiselect;
            const a_isAutoMuted = a.isAutoMuted;
            const f = a_isAutoMuted === undefined ? false : a_isAutoMuted;
            const { sendDevice, showToast } = a;
            const y = showToast === undefined ? true : showToast;
            const a_toastId = a.toastId;
            let v = expiration;
            if (typeof v !== "number") {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with invalid expiration ",
                    ""
                ])), v);
                return (b || (b = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            v = Math.round(v);
            if (v > 2000000000) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with wrong units?",
                    " exp:",
                    ""
                ])), this.id.toString(), v);
            }
            const S = ()=>{
                if (o("WAWebMuteGetters").getIsMuted(t)) {
                    r("WAWebAlarm").clearTimeout(t.$MuteImpl$p_1);
                    t.unset("_unmuteTimer");
                }
                if (v === L) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:mute ",
                        " muted, no expiration"
                    ])), t.id.toString());
                } else {
                    const e = v - o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:mute ",
                        " duration:",
                        ""
                    ])), t.id.toString(), e);
                    t.$MuteImpl$p_1 = r("WAWebAlarm").setGlobalTimeout(function() {
                        t.unmute();
                    }, v * 1000);
                }
                t.set({
                    expiration: v,
                    isAutoMuted: f
                });
            };
            const E = k(this.id, p && !r("WAWebWid").isNewsletter(this.id));
            if (sendDevice === true) {
                if (!r("WAWebWid").isNewsletter(this.id) && this.promises.mute != null) {
                    return this.promises.mute;
                }
                const T = r("WAWebWid").isNewsletter(this.id) ? this.promises.mute ?? (b || (b = n("Promise"))).reject(r("err")("No promise for newsletter mute")) : this.promises.mute = o("WAWebChatMuteBridge").sendConversationMute({
                    $MuteImpl3: this.expiration,
                    chatId: this.id,
                    expiration: v,
                    mentionAllMuteExpiration: r("WAWebWid").isGroup(this.id) ? this.mentionAllMuteExpiration : undefined
                });
                let D = new (o("WAWebActionToast.react")).ActionType(s._("Muting chat"));
                if (E === "group") {
                    D = new (o("WAWebActionToast.react")).ActionType(s._("Muting group"));
                } else if (E === "newsletter") {
                    D = new (o("WAWebActionToast.react")).ActionType(s._("Muting channel"));
                }
                const x = a_toastId ?? o("WAWebActionToast.react").genId();
                const $ = T.catch((e)=>{
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:mute dropped"
                    ])));
                    let n = s._("Couldn't mute chat.");
                    if (E === "group") {
                        n = s._("Couldn't mute group.");
                    } else if (E === "newsletter") {
                        D = new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mute channel"));
                    }
                    if (!r("WAWebWid").isNewsletter(t.id)) {
                        throw new (o("WAWebActionToast.react")).ActionType(n, {
                            actionText: s._("Try again."),
                            actionHandler: function() {
                                return t.mute({
                                    expiration: v,
                                    isAutoMuted: f,
                                    sendDevice,
                                    toastId: x
                                });
                            }
                        });
                    }
                }).then((e)=>{
                    if (e.status === 200) {
                        let n = s._("Chat muted");
                        if (E === "group") {
                            n = s._("Group muted");
                        } else if (E === "newsletter") {
                            n = s._("Channel muted");
                        }
                        if (p) {
                            return new (o("WAWebActionToast.react")).ActionType(n);
                        }
                        return new (o("WAWebActionToast.react")).ActionType(n, {
                            actionText: s._("Undo"),
                            actionHandler: function() {
                                if (r("WAWebWid").isNewsletter(t.id)) {
                                    return o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(t.id, o("WAWebNewsletterModelUtils").UNMUTED_STATE, [
                                        o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity
                                    ], {
                                        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                                    });
                                }
                                return t.unmute({
                                    sendDevice,
                                    toastId: x
                                });
                            }
                        });
                    } else if (e.status >= 400) {
                        throw E === "newsletter" ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mute channel")) : E === "group" ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mute group.")) : new (o("WAWebActionToast.react")).ActionType(s._("Couldn't mute chat."));
                    }
                });
                if (y) {
                    o("WAWebToastManager").ToastManager.open(R.jsx(o("WAWebActionToast.react").ActionToast, {
                        id: x,
                        initialAction: D,
                        pendingAction: $
                    }));
                }
                return T.then((e)=>{
                    if (e.status === 200) {
                        S();
                    }
                }).finally(()=>{
                    t.promises.mute = null;
                });
            }
            S();
            return (b || (b = n("Promise"))).resolve();
        };
        a_prototype.muteCall = function(t) {
            const e = this;
            let callExpiration = t;
            if (typeof callExpiration !== "number") {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with invalid expiration ",
                    ""
                ])), callExpiration);
                return (b || (b = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
            }
            callExpiration = Math.round(callExpiration);
            if (callExpiration > 2000000000) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with wrong units?",
                    " exp:",
                    ""
                ])), this.id.toString(), callExpiration);
            }
            if (o("WAWebMuteGetters").getIsCallMuted(this)) {
                r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2);
                this.unset("_unmuteCallTimer");
            }
            if (callExpiration === L) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall ",
                    " muted, no expiration"
                ])), this.id.toString());
            } else {
                const i = callExpiration - o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall ",
                    " duration:",
                    ""
                ])), this.id.toString(), i);
                this.$MuteImpl$p_2 = r("WAWebAlarm").setGlobalTimeout(function() {
                    e.$MuteImpl$p_4();
                }, callExpiration * 1000);
            }
            this.set({
                callExpiration
            });
            return (b || (b = n("Promise"))).resolve();
        };
        a_prototype.$MuteImpl$p_5 = function() {
            r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_1);
            this.unset("_unmuteTimer");
            this.expiration = 0;
        };
        a_prototype.$MuteImpl$p_6 = function() {
            r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2);
            this.unset("_unmuteCallTimer");
            this.callExpiration = 0;
        };
        a_prototype.unmute = function(t) {
            const e = this;
            const { fromMultiselect = false, sendDevice, showToast = true, toastId } = t === undefined ? {} : t;
            const p = false;
            const _ = ()=>{
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:unmute ",
                    ""
                ])), e.id.toString());
                e.$MuteImpl$p_5();
                e.set(babelHelpers.extends({
                    isAutoMuted: p
                }, r("WAWebWid").isGroup(e.id) && {
                    mentionAllMuteExpiration: 0
                }));
            };
            const f = k(this.id, fromMultiselect && !r("WAWebWid").isNewsletter(this.id));
            if (sendDevice === true) {
                if (!r("WAWebWid").isNewsletter(this.id) && this.promises.unmute) {
                    return this.promises.unmute;
                }
                const C = r("WAWebWid").isNewsletter(this.id) ? this.promises.unmute ?? (b || (b = n("Promise"))).reject(r("err")("No promise for newsletter mute")) : this.promises.unmute = o("WAWebChatMuteBridge").sendConversationMute({
                    $MuteImpl3: this.expiration,
                    chatId: this.id,
                    expiration: 0
                });
                let v = new (o("WAWebActionToast.react")).ActionType(s._("Unmuting chat"));
                if (f === "group") {
                    v = new (o("WAWebActionToast.react")).ActionType(s._("Unmuting group"));
                } else if (f === "newsletter") {
                    v = new (o("WAWebActionToast.react")).ActionType(s._("Unmuting channel"));
                }
                const S = toastId ?? o("WAWebActionToast.react").genId();
                const L = this.promises.unmute.catch((t)=>{
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:unmute dropped"
                    ])));
                    let n = s._("Couldn't unmute chat.");
                    if (f === "group") {
                        n = s._("Couldn't unmute group.");
                    } else if (f === "newsletter") {
                        n = s._("Couldn't unmute channel.");
                    }
                    if (!r("WAWebWid").isNewsletter(e.id)) {
                        throw new (o("WAWebActionToast.react")).ActionType(n, {
                            actionText: s._("Try again."),
                            actionHandler: function() {
                                return e.unmute({
                                    sendDevice,
                                    toastId: S
                                });
                            }
                        });
                    }
                }).then((t)=>{
                    if (t.status === 200) {
                        if (f === "group") {
                            return new (o("WAWebActionToast.react")).ActionType(s._("Group unmuted"));
                        }
                        if (f === "newsletter") {
                            const n = s._("Channel unmuted");
                            if (fromMultiselect) {
                                return new (o("WAWebActionToast.react")).ActionType(n);
                            }
                            return new (o("WAWebActionToast.react")).ActionType(n, {
                                actionText: s._("Undo"),
                                actionHandler: function() {
                                    return o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(e.id, o("WAWebNewsletterModelUtils").MUTED_STATE, [
                                        o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity
                                    ], {
                                        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
                                    });
                                }
                            });
                        }
                        return new (o("WAWebActionToast.react")).ActionType(s._("Chat unmuted"));
                    } else if (t.status >= 400) {
                        throw f === "newsletter" ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't unmute channel")) : f === "group" ? new (o("WAWebActionToast.react")).ActionType(s._("Couldn't unmute group.")) : new (o("WAWebActionToast.react")).ActionType(s._("Couldn't unmute chat."));
                    }
                });
                if (showToast) {
                    o("WAWebToastManager").ToastManager.open(R.jsx(o("WAWebActionToast.react").ActionToast, {
                        id: S,
                        initialAction: v,
                        pendingAction: L
                    }));
                }
                return C.then((e)=>{
                    if (e.status === 200) {
                        _();
                    }
                }).finally(()=>{
                    e.promises.unmute = null;
                });
            }
            _();
            return (b || (b = n("Promise"))).resolve();
        };
        a_prototype.$MuteImpl$p_4 = function() {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:unmuteCall ",
                ""
            ])), this.id.toString());
            this.$MuteImpl$p_6();
            return (b || (b = n("Promise"))).resolve();
        };
        a_prototype.delete = function() {
            t.prototype.delete.call(this);
            this.getCollection().remove(this.id);
            this.$MuteImpl$p_5();
            o("WAWebMuteGetters").clearMuteGetterCacheFor(this);
        };
        a_prototype.getCollection = function() {
            return o("WAWebMuteCollection").MuteCollection;
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    I.Proxy = "mute";
    I.idClass = r("WAWebWid");
    I.allowedIds = [
        E
    ];
    const T = o("WAWebBaseModel").defineModel(I);
    l.GLOBAL_REACTIONS_MUTE = E;
    l.Mute = T;
}, 226);