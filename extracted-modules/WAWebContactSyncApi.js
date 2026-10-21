__d("WAWebContactSyncApi", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebBizVerifiedNameAction",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetIdentityKeysJob",
    "WAWebHandleUsernameSync",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebPhashUtils",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUpdateTextStatusForContact",
    "WAWebUserPrefsKeys",
    "WAWebUsernameTypes",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "getErrorSafe",
    "nullthrows"
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
    let S;
    const R = 500;
    const L = 20;
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactIds, mode, shouldDelayBetweenChunks }) {
            const a = R;
            const i = Math.ceil(contactIds.length / a);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-sync] start ",
                " contacts, ",
                " chunks, size=",
                ""
            ])), contactIds.length, i, a).tags("contact-sync");
            for(let l = 0; l < contactIds.length; l += a){
                const s = contactIds.slice(l, l + a);
                if (shouldDelayBetweenChunks) {
                    yield o("WAPromiseDelays").delayMs(L * 1000);
                }
                yield I({
                    contactIds: s,
                    shouldSyncDevice: true,
                    mode
                }, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PERIODIC_SYNC);
            }
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contactIds, mode, shouldSyncDevice }, t) {
            if (contactIds.length !== 0) {
                o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.ContactSync);
                try {
                    const s = yield V(contactIds);
                    const u = new (o("WAWebUsync")).USyncQuery().withContext("background").withMode(mode).withBusinessProtocol().withStatusProtocol();
                    if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                        u.withTextStatusProtocol();
                    }
                    if (shouldSyncDevice) {
                        u.withDeviceProtocol();
                    }
                    u.withDisappearingModeProtocol();
                    u.withLidProtocol();
                    u.withUsernameProtocol();
                    const c = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                        syncType: o("WAWebContactSyncLogger").getSyncTypeString("background", mode),
                        requestOrigin: t ?? o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
                        requestedCount: s.length,
                        protocols: u.protocols
                    });
                    const d = s.filter((e)=>!e.id.isLid()).map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id));
                    const p = new Map(r("compactMap")(d, function(e) {
                        const t = o("WAWebApiContact").getCurrentLid(e);
                        if (t == null) {
                            return null;
                        }
                        return [
                            e.toString(),
                            t
                        ];
                    }));
                    const _ = s.filter((e)=>!e.id.isLid()).map((e)=>e.id);
                    const f = yield q(s);
                    s.forEach((e)=>{
                        const t = new (o("WAWebUsyncUser")).USyncUser().withId(e.id).withDeviceHash(String(e.hash));
                        if (!e.id.isLid()) {
                            const n = p.get(e.id.toString());
                            if (n != null) {
                                t.withLid(n);
                            }
                        }
                        const r = o("WAWebUsernameTypes").serializeMaybeUsername(f.get(o("WAWebWidFactory").asUserWidOrThrow(e.id)));
                        if (r != null) {
                            t.withUsername(r);
                        }
                        u.withUser(t);
                    });
                    let g = null;
                    for(let h = 3, y = 10 * Math.random(); h-- > 0;){
                        try {
                            g = yield u.execute();
                            const C = g.error.all;
                            if (C) {
                                y = C.errorBackoff ?? 10 * Math.random();
                                throw r("err")(`syncContactList: error ${C.errorCode}: ${C.errorText}`);
                            } else {
                                h = 0;
                            }
                        } catch (error) {
                            const v = r("getErrorSafe")(error);
                            if (h === 0) {
                                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "failed to execute usync query"
                                ]))).verbose().sendLogs(`failed to execute usync query: ${v.message}`);
                                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(c, v.errorCode, g ?? undefined, o("WAWebContactSyncErrorCodes").BACKGROUND_SYNC);
                            }
                            yield o("WAPromiseDelays").delayMs(y * 1000);
                        }
                    }
                    if (g == null || g.error.all) {
                        return;
                    }
                    const R = g.refresh;
                    const L = [];
                    for (const E of Object.keys(R)){
                        L.push(R[E]);
                    }
                    if (L.length > 0) {
                        const k = Math.min(...L);
                        G(k);
                    }
                    yield M(g);
                    const I = o("WAWebContactSyncLogger").createUpdateCounter();
                    yield (S || (S = n("Promise"))).all([
                        shouldSyncDevice ? B(g, _, I) : (S || (S = n("Promise"))).resolve(),
                        P(g, I),
                        o("WAWebHandleUsernameSync").handleUsernameSync(g),
                        D(g, I),
                        x(g),
                        A(g, I)
                    ]);
                    o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(c, g, I);
                    yield O(contactIds);
                } finally{
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.ContactSync);
                }
            }
        });
        return T.apply(this, arguments);
    }
    function D(t, n) {
        const status = t.error.status;
        if (status) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleSyncStatus: failed ",
                " : ",
                ""
            ])), status.errorCode, status.errorText);
            return;
        }
        t.list.map((e)=>{
            const t = o("WAWebTextStatusCollection").TextStatusCollection.get(e.id);
            if (t && e.status) {
                t.set({
                    status: e.status
                });
                n.statusChange++;
            }
        });
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
                return (S || (S = n("Promise"))).resolve();
            }
            const text_status = e.error.text_status;
            if (text_status) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSyncTextStatus: failed ",
                    " : ",
                    ""
                ])), text_status.errorCode, text_status.errorText);
                return;
            }
            yield (S || (S = n("Promise"))).all(e.list.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e.text_status) {
                        const t = e.text_status;
                        const { emoji, ephemeralDurationSeconds, lastUpdateTime, text } = t;
                        yield o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
                            contactId: e.id,
                            textString: text,
                            emoji,
                            ephemeralDuration: ephemeralDurationSeconds,
                            newUpdateTime: lastUpdateTime,
                            source: "contact-sync"
                        });
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const status = e.error.status;
            if (status) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleDisappearingMode: failed ",
                    " : ",
                    ""
                ])), status.errorCode, status.errorText);
                return;
            }
            yield (S || (S = n("Promise"))).all(e.list.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    if (e.disappearing_mode) {
                        yield o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
                            contactId: e.id,
                            newDuration: e.disappearing_mode.duration,
                            newSettingTimestamp: e.disappearing_mode.t,
                            newEphemeralityDisabled: e.disappearing_mode.ephemeralityDisabled === true
                        });
                        t.disappearingModeChange++;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const lid = e.error.lid;
            if (lid) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: error ",
                    ": ",
                    ""
                ])), lid.errorCode, lid.errorText);
            }
            const n = [];
            const r = [];
            let a = 0;
            const i = [];
            let l = 0;
            const s = [];
            let u = 0;
            e.list.forEach(({ id, lid, pn })=>{
                if (id == null) {
                    a++;
                    return;
                }
                if (lid != null) {
                    if (id.isLid()) {
                        l++;
                        if (i.length < 3) {
                            i.push(id.toLogString());
                        }
                        return;
                    }
                    n.push({
                        lid: o("WAWebWidFactory").createUserWidOrThrow(lid, "lid"),
                        pn: id
                    });
                } else if (pn != null) {
                    if (!id.isLid()) {
                        u++;
                        if (s.length < 3) {
                            s.push(id.toLogString());
                        }
                        return;
                    }
                    r.push({
                        lid: id,
                        pn
                    });
                }
            });
            if (a > 0) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " missing id"
                ])), a);
            }
            if (l > 0) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " lidResults (lid as id) => ",
                    ""
                ])), l, i);
            }
            if (u > 0) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: skip ",
                    " pnResults (pn as id) => ",
                    ""
                ])), u, s);
            }
            if (n.length > 0 && r.length > 0) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "handleLidSync: mixed types - lid: ",
                    ", pn: ",
                    ""
                ])), n.length, r.length);
            }
            const c = [].concat(n, r);
            if (c.length > 0) {
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: c,
                    flushImmediately: true,
                    learningSource: "usync"
                });
            }
        });
        return w.apply(this, arguments);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.list.filter(({ business })=>!!business);
            t.businessChange = n.length;
            yield o("WAWebBizVerifiedNameAction").handleVerifiedNameSync(n.map((e)=>{
                const verifiedName = e.business.verifiedName;
                const n = e.id;
                return {
                    id: n,
                    verifiedName
                };
            }));
        });
        return F.apply(this, arguments);
    }
    function O(e) {
        const t = e.map((e)=>{
            const t = o("WAWebWidToJid").widToUserJid(e);
            return {
                id: t,
                isContactSyncCompleted: 1
            };
        });
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "mark ",
            " contacts completed for contact sync"
        ])), t.length).tags("contact-sync");
        return r("WAWebLidAwareContactsDB").bulkCreateOrMerge(t, "ContactSyncApi.markContactsSyncCompleted");
    }
    function B(e, t, n) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const devices = e.error.devices;
            if (devices) {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSyncDevice: error ",
                    ": ",
                    ""
                ])), devices.errorCode, devices.errorText);
            }
            let a = e.list.filter((e)=>e.devices && e.devices.deviceList != null && e.devices.keyIndex != null && !("errorCode" in e.devices)).map((e)=>({
                    wid: e.id,
                    devices: e.devices
                }));
            n.deviceChange = a.length;
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "handleSyncDevice: skipping ",
                " out of ",
                " records"
            ])), e.list.length - a.length, e.list.length);
            a = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(t, a);
            yield o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(a.map((e)=>e.wid));
            return o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(a);
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebABProps").getABPropConfigValue("username_antiscraping_send_cached_un") !== true) {
                return new Map;
            }
            const t = new Map;
            const n = e.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e.id));
            const r = yield o("WAWebApiContactUsernameFields").bulkGetContactToUsernameInfoMap([].concat(n));
            n.forEach((e)=>{
                const o = r.get(e.toJid())?.username;
                if (o != null) {
                    t.set(e, o);
                }
            });
            return t;
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebApiDeviceList").getDeviceIds(e);
            const r = t.map((e)=>{
                if (e == null) {
                    return [];
                }
                return e.devices.map((t)=>o("WAWebWidFactory").createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted));
            });
            const a = yield (S || (S = n("Promise"))).all(r.map((e)=>{
                if (e.length === 0) {
                    return "";
                }
                return o("WAWebPhashUtils").phashV2(e);
            }));
            const i = e.map((e, t)=>({
                    id: e,
                    hash: a[t]
                }));
            return i;
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        if (Number.isNaN(e) || e <= o("WATimeUtils").HOUR_SECONDS) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "invalid contact sync refresh period: ",
                ""
            ])), e).tags("contact-sync");
            return;
        }
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "set contact sync refresh period: ",
            ""
        ])), e).tags("contact-sync");
        r("nullthrows")(r("WAWebLocalStorage")).setItem(o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH, String(e));
    }
    l.syncContactListInChunks = E;
    l.syncContactList = I;
    l.handleLidSync = M;
    l.markContactsSyncCompleted = O;
}, 98);