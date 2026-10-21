__d("WAWebUserPrefsStatus", [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiUserPrefs",
    "WAWebModelStorageUtils",
    "WAWebSendMsgCommonApi",
    "WAWebStatusContactUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c({ list: t, setting: n }) {
        if (n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING, n);
        }
        const r = d({
            setting: n,
            allowList: n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList ? t : void 0,
            denyList: n === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList ? t : void 0
        });
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.bulkSetItemsToIndexedDB(r);
    }
    function d(e) {
        const t = [];
        const { allowList: n, denyList: r, setting: a } = e;
        if (a != null) {
            t.push({
                key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING,
                value: a
            });
        }
        if (n != null) {
            t.push({
                key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_ALLOW_LIST,
                value: Array.from(new Set(n.map((e)=>String(o("WAWebWidFactory").asUserWidOrThrow(e)))))
            });
        }
        if (r != null) {
            t.push({
                key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_DENY_LIST,
                value: Array.from(new Set(r.map((e)=>String(o("WAWebWidFactory").asUserWidOrThrow(e)))))
            });
        }
        return t;
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_PRIVACY_SETTING) || o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact;
        });
        return p.apply(this, arguments);
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "UserPrefsStatus: staring to getStatusAllowList"
            ])));
            const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_ALLOW_LIST);
            if (t != null) {
                return t.map(o("WAWebWidFactory").createWid);
            }
            return [];
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "UserPrefsStatus: staring to getStatusDenyList"
            ])));
            const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_DENY_LIST);
            if (e != null) {
                return e.map(o("WAWebWidFactory").createWid);
            }
            return [];
        });
        return h.apply(this, arguments);
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs",
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield m();
                let t;
                switch(e){
                    case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
                        return {
                            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList,
                            list: yield _()
                        };
                    case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
                        t = new Set((yield g()).map(String));
                        return {
                            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList,
                            list: (yield o("WAWebStatusContactUtils").getStatusContacts()).filter((e)=>{
                                const n = e.isUser() ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e)) : null;
                                const r = t.has(e.toString());
                                const a = n == null ? false : t.has(n.toString());
                                return !r && !a;
                            })
                        };
                    case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
                        return {
                            setting: o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact,
                            list: yield o("WAWebStatusContactUtils").getStatusContacts()
                        };
                }
            }));
        });
        return C.apply(this, arguments);
    }
    function b() {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB) === true;
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG) === true;
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_FB, e);
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SHARE_TO_IG, e);
        });
        return I.apply(this, arguments);
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED) === true;
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_RESHARE_ALLOWED, e);
        });
        return $.apply(this, arguments);
    }
    function P() {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield m();
                const t = yield _();
                const n = yield g();
                return {
                    setting: e,
                    allowList: t,
                    denyList: n
                };
            }));
        });
        return N.apply(this, arguments);
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY);
            return e || {
                rotateKey: false,
                senderKey: new Set
            };
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield M();
                const n = t.rotateKey ? new Set : t.senderKey;
                e.forEach((e)=>{
                    n.add(String(e));
                });
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY, {
                    rotateKey: false,
                    senderKey: n
                });
            }));
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield M();
                if (!t.rotateKey) {
                    const n = e.some((e)=>t.senderKey.has(String(e)));
                    if (n) {
                        yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY, {
                            rotateKey: true,
                            senderKey: new Set
                        });
                    }
                }
            }));
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield M();
                e.forEach((e)=>{
                    t.senderKey.delete(String(e));
                    if (e.isUser()) {
                        const n = o("WAWebApiContact").getAlternateDeviceWid(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e));
                        if (n != null) {
                            t.senderKey.delete(String(n));
                        }
                    }
                });
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY, {
                    rotateKey: t.rotateKey,
                    senderKey: t.senderKey
                });
            }));
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield H(e);
            const r = yield z(n, t);
            const { after: o, before: a, changed: i } = r;
            return {
                alternateDeviceWid: n.alternate,
                aliasResolution: n.aliasResolution,
                before: a,
                after: o,
                changed: i
            };
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebApiContact").warmUpAllLidPnMappings(null);
            const t = String(e);
            const n = o("WAWebApiContact").getAlternateDeviceWid(e);
            const r = n != null ? String(n) : null;
            const a = r != null ? "resolved" : "unresolved";
            return {
                exact: t,
                alternate: r,
                aliasResolution: a,
                all: r != null ? [
                    t,
                    r
                ] : [
                    t
                ]
            };
        });
        return G.apply(this, arguments);
    }
    function z(e, t) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "user-prefs"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = yield M();
                const a = K(e, n.senderKey);
                if (t === "preview" || e.aliasResolution === "unresolved") {
                    return {
                        before: a,
                        after: a,
                        changed: false
                    };
                }
                const i = new Set(n.senderKey);
                let l = false;
                e.all.forEach((e)=>{
                    l = i.delete(e) || l;
                });
                if (!l) {
                    return {
                        before: a,
                        after: a,
                        changed: false
                    };
                }
                const s = {
                    rotateKey: n.rotateKey,
                    senderKey: i
                };
                yield o("WAWebApiUserPrefs").createOrReplaceUserPref({
                    key: o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY,
                    value: s
                });
                try {
                    o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applyCommittedSet(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY, s);
                } catch (e) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "UserPrefsStatus: durable sender-key reset committed, cache sync failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("status-sender-key-cache-sync-failed");
                }
                return {
                    before: a,
                    after: K(e, i),
                    changed: true
                };
            }));
        });
        return j.apply(this, arguments);
    }
    function K(e, t) {
        const n = e.alternate;
        return {
            exact: t.has(e.exact) ? [
                e.exact
            ] : [],
            alternate: n != null && t.has(n) ? [
                n
            ] : []
        };
    }
    function Q(e, t) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { isFullAudience: n }) {
            const r = yield M();
            if (r.rotateKey || r.senderKey.size === 0) {
                return {
                    rotateKey: r.rotateKey,
                    skDistribList: e,
                    participantList: []
                };
            }
            const a = [];
            const i = [];
            let l = 0;
            e.forEach((e)=>{
                if (r.senderKey.has(String(e))) {
                    if (o("WAWebSendMsgCommonApi").isPrimaryDevice(e)) {
                        a.push(e);
                    }
                    l++;
                } else if (!o("WAWebUserPrefsMeUser").isMeDevice(e)) {
                    i.push(e);
                }
            });
            if (n && l < r.senderKey.size) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.STATUS_SENDER_KEY, {
                    rotateKey: true,
                    senderKey: new Set
                });
                return {
                    rotateKey: true,
                    skDistribList: e,
                    participantList: []
                };
            }
            return {
                rotateKey: r.rotateKey,
                skDistribList: i,
                participantList: a
            };
        });
        return X.apply(this, arguments);
    }
    l.getStatusContacts = o("WAWebStatusContactUtils").getStatusContacts;
    l.setStatusPrivacyConfig = c;
    l.calculateStatusPrivacyUpdateEntries = d;
    l.getStatusPrivacySetting = m;
    l.getStatusAllowList = _;
    l.getStatusDenyList = g;
    l.getStatusList = y;
    l.getShareToFB = b;
    l.getShareToIG = S;
    l.persistShareToFB = L;
    l.persistShareToIG = k;
    l.getStatusReshareAllowed = T;
    l.persistStatusReshareAllowed = x;
    l.getStatusPrivacySettingConfig = P;
    l.getStatusSenderKeyMap = M;
    l.markStatusHasSenderKey = A;
    l.markStatusSenderKeyRotate = O;
    l.markForgetStatusSenderKey = W;
    l.previewOrResetStatusSenderKeyDistribution = U;
    l.getStatusSkDistribList = Q;
}, 98);