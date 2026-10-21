__d("WAWebAdvDeviceInfoCheckJob", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvStoredTimestampExpiredWamEvent",
    "WAWebApiDeviceList",
    "WAWebApiPendingDeviceSync",
    "WAWebApiTasksScheduledTime",
    "WAWebCoreActionsODS",
    "WAWebCurrentUser",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 25 * o("WATimeUtils").HOUR_SECONDS;
    const f = (()=>{
        function t(e) {
            this.advToSystemBridge = e;
        }
        const a = t.prototype;
        a.run = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[adv] running device info check with t=",
                    ""
                ])), t);
                const n = this.advToSystemBridge;
                const a = yield n.getUsersForExpiration(t);
                const { usersCloseToExpiration: i, usersExpired: l } = a;
                n.removeCompanions(l).catch((e)=>o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to remove companions"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("adv-remove-companions-failed"));
                n.sendADVStoredTimestampExpiredEvents(l, t);
                const u = Array.from(l.keys()).concat(Array.from(i.keys())).filter((e)=>!n.canRemoveUserDevices(e));
                n.sendOrQueueDeviceUsyncQuery(u).catch((e)=>{});
                return n.recordLocalTimestamp();
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return t;
    })();
    const g = (()=>{
        function e() {}
        const t = e.prototype;
        t.getNumDaysKeyIndexListExpiration = function() {
            return o("WAWebABProps").getABPropConfigValue("num_days_key_index_list_expiration");
        };
        t.getNumDaysBeforeDeviceExpiryCheck = function() {
            return o("WAWebABProps").getABPropConfigValue("num_days_before_device_expiry_check");
        };
        t.getUsersForExpiration = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = yield o("WAWebApiDeviceList").getAllDeviceLists();
                const r = yield o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
                const a = this.getNumDaysKeyIndexListExpiration() * o("WATimeUtils").DAY_SECONDS;
                const i = new Map;
                const l = new Map;
                n.forEach((n)=>{
                    if (!(n.deleted || R(n))) {
                        if (L(e, a, n, r)) {
                            i.set(o("WAWebWidFactory").createUserWidOrThrow(n.id), n);
                        } else if (E({
                            currentTs: e,
                            deviceListRow: n,
                            numSecondsCloseExpiration: a - t.getNumDaysBeforeDeviceExpiryCheck() * o("WATimeUtils").DAY_SECONDS
                        })) {
                            l.set(o("WAWebWidFactory").createUserWidOrThrow(n.id), n);
                        }
                    }
                });
                return {
                    usersExpired: i,
                    usersCloseToExpiration: l
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.sendADVStoredTimestampExpiredEvents = function(t, n) {
            const e = this;
            t.forEach((t)=>{
                const r = n - (t.timestamp + e.getNumDaysKeyIndexListExpiration() * o("WATimeUtils").DAY_SECONDS);
                if (!(r < 0)) {
                    const a = Math.round(r / o("WATimeUtils").HOUR_SECONDS);
                    new (o("WAWebAdvStoredTimestampExpiredWamEvent")).AdvStoredTimestampExpiredWamEvent({
                        advExpireTimeInHours: a
                    }).commit();
                }
            });
        };
        t.sendOrQueueDeviceUsyncQuery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync(e.map((e)=>e.toString()));
                return o("WAWebApiPendingDeviceSync").doPendingDeviceSync();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.canRemoveUserDevices = function(t) {
            return false;
        };
        t.removeCompanions = function(t) {
            const e = Array.from(t.entries());
            const r = e.some(([t, n])=>k(t));
            if (r && o("WAWebABProps").getABPropConfigValue("web_adv_logout_on_self_device_list_expired")) {
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[adv] logging out due to own expired device"
                    ]))).sendLogs("web-own-device-list-expired");
                } else {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[adv] logging out due to own expired device"
                    ])));
                }
                o("WAWebCoreActionsODS").logSessionForcedLogout();
                o("WAWebSocketLogoutJob").socketLogout(o("WAWebLogoutReasonConstants").LogoutReason.InvalidAdvStatus);
                return (p || (p = n("Promise"))).resolve();
            }
            return (p || (p = n("Promise"))).all(Array.from(t.entries(), function([t, n]) {
                return o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(t, n.devices);
            }));
        };
        t.recordLocalTimestamp = function() {
            return (p || (p = n("Promise"))).resolve();
        };
        return e;
    })();
    const h = "advDeviceInfoCheck";
    let y;
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (y != null) {
                self.clearTimeout(y);
                y = null;
            }
            const e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
            const t = yield o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
            let a = 0;
            let i = function() {
                return (p || (p = n("Promise"))).resolve();
            };
            if (t != null) {
                a = Math.max(o("WATimeUtils").DAY_SECONDS - (e - t), 0);
                i = function() {
                    return S();
                };
            }
            y = self.setTimeout(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield i();
                } catch (e) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "error running the adv device check job"
                    ]))).tags("automated-device-verification");
                }
                y = null;
                const e = o("WATimeUtils").unixTimeWithoutClockSkewCorrection();
                o("WAWebLastADVCheckTimeApi").setLastADVDeviceInfoCheckTime(e);
                o("WAWebApiTasksScheduledTime").updateTaskScheduledTime(h, o("WATimeUtils").castToUnixTime(e)).catch((e)=>o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to update task scheduled time"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("adv-update-task-scheduled-time-failed"));
                yield C();
            }), a * 1000);
        });
        return b.apply(this, arguments);
    }
    let v;
    function S() {
        if (v == null) {
            v = new f(new g);
        }
        return v.run(o("WATimeUtils").unixTimeWithoutClockSkewCorrection());
    }
    function R(e) {
        return e.devices.length === 1 && e.devices[0].id === o("WAJids").DEFAULT_DEVICE_ID;
    }
    function L(e, t, n, r) {
        if (e - n.timestamp >= t) {
            return true;
        }
        if (n.expectedTsUpdateTs != null) {
            return e - n.expectedTsUpdateTs >= _ && n.expectedTsLastDeviceJobTs !== r;
        }
        return false;
    }
    function E({ currentTs: t, deviceListRow: n, numSecondsCloseExpiration: r }) {
        if (t - n.timestamp >= r) {
            return true;
        }
        if (n.expectedTs != null) {
            return n.expectedTs > n.timestamp;
        }
        return false;
    }
    function k(e) {
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            if (o("WAWebABProps").getABPropConfigValue("web_self_adv_daily_use_lid")) {
                return e.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
            }
            return true;
        }
        return false;
    }
    l.AdvToSystemBridgeImpl = g;
    l.scheduleAdvDeviceInfoCheck = C;
    l.runAdvDeviceInfoCheck = S;
}, 98);