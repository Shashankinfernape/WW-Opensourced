__d("WAWebPresenceCollection", [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactPresenceBridge",
    "WAWebGroupPresencePoller",
    "WAWebGroupPresenceUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebPresenceGetters",
    "WAWebPresenceModel",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...i) {
            let e;
            e = t.call(this, ...i) || this;
            e.findImpl = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t.toString());
                    const a = e.gadd(n);
                    if (o("WAWebPresenceGetters").getIsGroup(a)) {
                        yield e._subscribe(n);
                        return {
                            id: n
                        };
                    }
                    if (!o("WAWebPresenceGetters").getIsUser(a) || r("WAWebWid").isServer(n) || r("WAWebWid").isPSA(n) || r("WAWebWid").isBot(n) || o("WAWebUserPrefsMeUser").isMeAccount(a.id)) {
                        return {
                            id: n
                        };
                    }
                    yield e._subscribe(n);
                    return {
                        id: n
                    };
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype._subscribe = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.isGroup()) {
                    const n = o("WAWebChatCollection").ChatCollection.get(t);
                    if (n == null) {
                        return;
                    }
                    yield this._subscribeGroup(n);
                    return;
                }
                if (!t.isLid()) {
                    if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "presence key for 1:1 is not a LID: ",
                            ""
                        ])), t.toLogString()).sendLogs("presence-key-not-lid");
                    }
                    return;
                }
                yield o("WAWebContactPresenceBridge").subscribeUserPresence(t);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype._subscribeGroup = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(e)) {
                    const r = e.groupMetadata;
                    if (r != null) {
                        const a = r.participants.length;
                        if (a <= o("WAWebGroupPresenceUtils").getSmallGroupPresenceThreshold()) {
                            if (!o("WAWebGroupPresenceUtils").isSmallGroupPresenceEnabled()) {
                                return;
                            }
                            const i = [];
                            r.participants.forEach(({ id })=>{
                                if (!o("WAWebUserPrefsMeUser").isMeAccount(id) && id.isLid()) {
                                    const r = o("WAWebWidFactory").asUserLidOrThrow(id);
                                    t.gadd(r);
                                    i.push(o("WAWebContactPresenceBridge").subscribeUserPresence(r));
                                }
                            });
                            yield (s || (s = n("Promise"))).allSettled(i);
                        } else {
                            if (a <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX && o("WAWebGroupPresenceUtils").isLargeGroupPresenceEnabled()) {
                                o("WAWebGroupPresencePoller").startLargeGroupPresencePoll(e);
                            }
                        }
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.reSubscribeWhenActive = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.get(e);
                if (!(t == null || t.isSubscribed === false)) {
                    yield this._subscribe(e);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.clearAllPresence = function() {
            o("WAWebGroupPresencePoller").stopAllLargeGroupPresencePolls();
            this.forEach((e)=>{
                e.reset();
                e.set({
                    stale: true,
                    isSubscribed: false
                });
            });
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebPresenceModel").Presence;
    const c = new u;
    l.PresenceCollection = c;
}, 98);