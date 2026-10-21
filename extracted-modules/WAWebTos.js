__d("WAWebTos", [
    "Promise",
    "WACustomError",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizBroadcastGenAIToS",
    "WAWebBizBroadcastTos",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotTosIds",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebEventEmitter",
    "WAWebGetUserDisclosuresAction",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebTosGatingUtils",
    "WAWebTosJob",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWamoNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = "20210210";
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `Unknown user notice id: ${t}`) || this;
            n.name = "UnknownUserNoticeIdError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const g = {
        minTimeout: 1000,
        maxTimeout: 16000,
        retries: 5,
        signal: new AbortController().signal
    };
    const h = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$TosManagerImpl$p_1 = [];
            e.$TosManagerImpl$p_2 = o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL * 1000;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.clearDisclosureNoticeIds_TESTONLY = function() {
            this.$TosManagerImpl$p_1 = [];
        };
        a_prototype.$TosManagerImpl$p_3 = function() {
            const e = new Set;
            if (o("WAWebTosGatingUtils").tosFetchEnabled()) {
                e.add(_);
            }
            if (o("WAWebBotBaseGating").isBotEnabled()) {
                let t;
                e.add((t = o("WAWebBotTosIds")).getBotAgentTosId());
                e.add(t.getBotInvokeTosId());
                e.add(t.getBotShortcutTosId());
                e.add(t.getBotLegacyShortcutTosId());
                e.add(t.getBotLegacyInvokeTosId());
                const n = o("WAWebBotGating").getMasterBotNoticeId();
                if (n != null) {
                    e.add(n.toString());
                }
                const r = o("WAWebBotTosIds").getBusinessAssistantLegacyNoticeId();
                if (r != null) {
                    e.add(r.toString());
                }
            }
            if (o("WAWebBotBaseGating").isBizBot1pEnabled() || o("WAWebBotBaseGating").isBizBot3pEnabled()) {
                e.add(o("WAWebBotTosIds").getBizBotTosId());
            }
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
                e.add(o("WAWebMmSignalSharingTos").getMmSignalSharingDisclosureTosId());
            }
            return Array.from(e);
        };
        a_prototype.$TosManagerImpl$p_4 = function() {
            const e = this.$TosManagerImpl$p_3().concat(this.$TosManagerImpl$p_1);
            return e;
        };
        a_prototype.$TosManagerImpl$p_5 = function(t) {
            const e = new Set(this.$TosManagerImpl$p_1.concat(t));
            this.$TosManagerImpl$p_1 = Array.from(e);
        };
        a_prototype.registerDisclosureNoticeIds = function(t) {
            this.$TosManagerImpl$p_5(t);
        };
        a_prototype.getLastAcceptedTime = function(t) {
            const e = this.$TosManagerImpl$p_6(t);
            const n = r("WAWebUserPrefsStore").getUser(e);
            if (n != null && typeof n === "number") {
                return o("WATimeUtils").castToUnixTime(n);
            }
            return null;
        };
        a_prototype.getState = function(n) {
            try {
                const t = this.getStoreKey(n);
                const a = r("WAWebUserPrefsStore").getUser(t);
                const i = typeof a === "string" && (a === "UNKNOWN" || a === "NOT_ACCEPTED" || a === "SHOWN" || a === "SOFT_OPT_IN" || a === "ACCEPTED") ? a : "UNKNOWN";
                return i;
            } catch (error) {
                if (!(error instanceof f)) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unexpected error when getting notice id state: ",
                        ""
                    ])), n).tags("tos-manager").sendLogs("Unexpected error when getting notice id state");
                }
                return "UNKNOWN";
            }
        };
        a_prototype.setState = function(t, n, r) {
            if (this.$TosManagerImpl$p_1.includes(t) || y() && this.$TosManagerImpl$p_3().includes(t)) {
                this.$TosManagerImpl$p_7(t, n, r);
                this.trigger("change");
            } else {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ToS state manager unrecognized user notice id: ",
                    ""
                ])), t);
            }
        };
        a_prototype.$TosManagerImpl$p_7 = function(t, n, o) {
            r("WAWebUserPrefsStore").setUser(this.getStoreKey(t), n);
            if (n === "ACCEPTED" && o != null) {
                r("WAWebUserPrefsStore").setUser(this.$TosManagerImpl$p_6(t), o);
            } else {
                r("WAWebUserPrefsStore").setUser(this.$TosManagerImpl$p_6(t), undefined);
            }
        };
        a_prototype.run = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (!(!y() && !o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure() && this.$TosManagerImpl$p_1.length === 0)) {
                    try {
                        yield o("WAExponentialBackoff").exponentialBackoff(g, function(e, n) {
                            return t.$TosManagerImpl$p_8().catch((t)=>{
                                if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                                    e: {
                                        if (t.statusCode === 500) {
                                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                                "[TosManager] query failed: ",
                                                " (retry ",
                                                ")"
                                            ])), t.message, n);
                                            return e(t);
                                            break e;
                                        }
                                        break e;
                                    }
                                }
                                throw t;
                            });
                        });
                    } catch (error) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "ToS state manager state pull failed, error: ",
                            ""
                        ])), error).verbose().sendLogs("ToS state manager run failed");
                        if (!(error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.statusCode === 500)) {
                            return;
                        }
                    }
                    if (e?.singleRun !== true && this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_4()).length > 0) {
                        const n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
                        yield o("WAPromiseDelays").delayMs(this.$TosManagerImpl$p_2);
                        if (o("WAWebUserPrefsMeUser").getMaybeMePnUser() === n) {
                            this.run();
                        }
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$TosManagerImpl$p_8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
                    const t = yield (p || (p = n("Promise"))).all([
                        this.$TosManagerImpl$p_10(),
                        this.$TosManagerImpl$p_11()
                    ]);
                    const a = t[0];
                    const i = t[1];
                    this.$TosManagerImpl$p_2 = Math.min(a.refresh, i.refresh) * 1000;
                    const l = a.notice.concat(i.notice);
                    const s = new Set(this.$TosManagerImpl$p_4());
                    let u = false;
                    l.filter((e)=>s.has(e.id)).forEach((t)=>{
                        const n = t.state ? "ACCEPTED" : "NOT_ACCEPTED";
                        const o = e.getStoreKey(t.id);
                        const a = r("WAWebUserPrefsStore").getUser(o);
                        if (!(a === "SHOWN" && n === "NOT_ACCEPTED")) {
                            if (a !== n) {
                                r("WAWebUserPrefsStore").setUser(o, n);
                                e.$TosManagerImpl$p_7(t.id, n, t.timestamp);
                                u = true;
                            }
                        }
                    });
                    r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION, o("WAWebTosGatingUtils").tosFetchIteration());
                    if (u) {
                        this.trigger("change");
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$TosManagerImpl$p_12 = function() {
            return {
                refresh: o("WAWebTosJob").DEFAULT_TOS_REFRESH_INTERVAL,
                notice: []
            };
        };
        a_prototype.$TosManagerImpl$p_10 = function() {
            if (!y()) {
                return (p || (p = n("Promise"))).resolve(this.$TosManagerImpl$p_12());
            }
            const e = this.$TosManagerImpl$p_9(this.$TosManagerImpl$p_3());
            if (e.length > 0) {
                return o("WAWebTosJob").queryTosState(e);
            }
            return (p || (p = n("Promise"))).resolve(this.$TosManagerImpl$p_12());
        };
        a_prototype.$TosManagerImpl$p_11 = function() {
            if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                this.populateTosManagerNewsletterIds();
            }
            if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure()) {
                this.populateTosManagerBizBroadcastIds();
            }
            if (this.$TosManagerImpl$p_1.length === 0) {
                return (p || (p = n("Promise"))).resolve(this.$TosManagerImpl$p_12());
            }
            return o("WAWebGetUserDisclosuresAction").getUserDisclosuresAction();
        };
        a_prototype.$TosManagerImpl$p_9 = function(t) {
            const e = this;
            const n = parseInt(r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.TOS_STATE_FETCH_ITERATION), 10) || 0;
            if (o("WAWebTosGatingUtils").tosFetchIteration() > n) {
                return t;
            }
            const a = t.map((t)=>e.getState(t));
            return t.filter((e, t)=>a[t] !== "ACCEPTED");
        };
        a_prototype.getStoreKey = function(t) {
            const e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) {
                return `TOS_STATE_${t}`;
            }
            throw new f(t);
        };
        a_prototype.$TosManagerImpl$p_6 = function(t) {
            const e = new Set(this.$TosManagerImpl$p_4());
            if (e.has(t)) {
                return `TOS_STATE_${t}_LAST_ACCEPTED_TIME`;
            }
            throw new f(t);
        };
        a_prototype.maybeUpdateServer = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (y()) {
                    try {
                        const r = new Set(e);
                        yield o("WAExponentialBackoff").exponentialBackoff(g, function(e, a) {
                            const i = t.$TosManagerImpl$p_13(r);
                            if (i.length > 0) {
                                return o("WAWebTosJob").updateTosState(i).catch((t)=>{
                                    if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError && t.statusCode === 500) {
                                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                            "[TosManager] session update failed: ",
                                            " (retry ",
                                            ")"
                                        ])), t.message, a);
                                        return e(t);
                                    }
                                    throw t;
                                });
                            }
                            return (p || (p = n("Promise"))).resolve();
                        });
                    } catch (error) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[TosManager] session update failed: ",
                            ""
                        ])), error).verbose().sendLogs("ToS state manager server session state update failed");
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$TosManagerImpl$p_13 = function(t) {
            const e = this;
            if (o("WAWebUserPrefsMeUser").getMaybeMePnUser()) {
                const n = this.$TosManagerImpl$p_3().map((t)=>e.getState(t));
                return this.$TosManagerImpl$p_3().filter((e, r)=>n[r] === "ACCEPTED" && t.has(e));
            }
            return [];
        };
        a_prototype.$TosManagerImpl$p_14 = function(t) {
            r("WAWebUserPrefsStore").setUser(this.getStoreKey(t), undefined);
            r("WAWebUserPrefsStore").setUser(this.$TosManagerImpl$p_6(t), undefined);
        };
        a_prototype.resetAllState = function() {
            const e = this;
            this.$TosManagerImpl$p_4().forEach((t)=>{
                e.$TosManagerImpl$p_14(t);
            });
            o("WAWebTosJob").deleteTosState(_);
        };
        a_prototype.resetState = function(t) {
            this.$TosManagerImpl$p_14(t);
            o("WAWebTosJob").deleteTosState(t);
        };
        a_prototype.populateTosManagerNewsletterIds = function() {
            const e = [
                o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
                o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
                o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos()
            ].concat(o("WAWebWamoNewsletterGatingUtils").getWamoNotices());
            this.$TosManagerImpl$p_5(e);
        };
        a_prototype.populateTosManagerBizBroadcastIds = function() {
            if (o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastSendWebEnabledNoExposure()) {
                const e = o("WAWebBizBroadcastTos").getBizBroadcastTosId();
                if (e !== "") {
                    this.$TosManagerImpl$p_5([
                        e
                    ]);
                }
                const t = o("WAWebBizBroadcastGenAIToS").getBizBroadcastGenAITosId();
                if (t !== "") {
                    this.$TosManagerImpl$p_5([
                        t
                    ]);
                }
            }
        };
        return a;
    })(r("WAWebEventEmitter"));
    function y() {
        return o("WAWebTosGatingUtils").tosFetchEnabled() || o("WAWebBotBaseGating").isBizBot1pEnabled() || o("WAWebBotBaseGating").isBizBot3pEnabled() || o("WAWebMobilePlatforms").isSMB() && o("WAWebBotBaseGating").isBotEnabled();
    }
    const C = new h;
    l.TOS_3_ID = _;
    l.TosManager = C;
}, 98);