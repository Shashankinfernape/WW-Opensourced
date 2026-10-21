__d("WAWebDBCreateLidPnMappings", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebDBContactRemoveSoftDeletedUsernames",
    "WAWebDynamicThrottlingManager",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebUsernameGatingUtils",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
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
    let _;
    let f;
    let g;
    let h;
    const y = new (o("WAWebDynamicThrottlingManager")).DynamicThrottlingManager({
        targetTimeMs: 100,
        maxDelayTimeMs: 1000,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30
    });
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ flushImmediately: t, identityChangeHandlingEnabled: n, learningSource: r, mappings: o }) {
            yield v({
                mappings: o,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r
            });
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ flushImmediately: t, identityChangeHandlingEnabled: n, learningSource: r, mappings: a }) {
            if (a.length !== 0) {
                for(let i = 0; i < a.length;){
                    const l = y.getThrottleRate();
                    const s = Math.min(l.batchSize, a.length - i);
                    const u = a.slice(i, i + s);
                    const c = self.performance.now();
                    yield L({
                        mappings: u,
                        flushImmediately: t,
                        identityChangeHandlingEnabled: n,
                        learningSource: r
                    });
                    const d = self.performance.now() - c;
                    y.setLastProcessTime(d, u.length);
                    if (l.delayMs > 0) {
                        yield o("WAPromiseDelays").delayMs(l.delayMs);
                    }
                    i += s;
                }
            }
        });
        return S.apply(this, arguments);
    }
    function R({ cachedPnForMappingLid: n, learningSource: r, mappingLid: a, mappingPn: i }) {
        const l = o("WAWebApiContact").lidPnCache.getPhoneNumber(o("WAWebWidFactory").createUserLidOrThrow(i.user, "lid")) != null;
        if (l) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] new PN ",
                " is actually a LID src ",
                ""
            ])), i, r).sendLogs("lid-pn-mapping-conflict-pn-is-lid");
            return;
        }
        if (o("WAWebWidDevTools").isWidClientAssigned(a)) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] fake LID ",
                " cached PN ",
                " != new PN ",
                ""
            ])), a, n, i).sendLogs(`lid-pn-mapping-conflict-fake-lid-${r}`);
            return;
        }
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[createLidPnMappings] LID ",
            " cached PN ",
            " != new PN ",
            ""
        ])), a, n, i).sendLogs(`lid-pn-mapping-conflict-${r}`);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ flushImmediately: t, identityChangeHandlingEnabled: r, learningSource: a, mappings: i }) {
            const l = r ?? true;
            const s = [];
            const u = [];
            const c = new Map(i.map((e)=>[
                    e.pn,
                    e.lid
                ]));
            const d = o("WATimeUtils").unixTime();
            const _ = o("WATimeUtils").castToUnixTime(0);
            const f = [];
            const g = new Set;
            i.forEach(({ lid: n, pn: r })=>{
                const i = o("WAWebApiContact").lidPnCache.getCurrentLid(r);
                const m = o("WAWebApiContact").lidPnCache.getPhoneNumber(n);
                const p = m == null;
                const h = !p;
                const y = i?.equals(n) === true;
                const C = h && !y;
                if (m?.equals(r) === false) {
                    R({
                        cachedPnForMappingLid: m,
                        learningSource: a,
                        mappingLid: n,
                        mappingPn: r
                    });
                }
                let b;
                let v;
                switch(a){
                    case "usync":
                        b = false;
                        v = p || C;
                        break;
                    case "peer-pn-message":
                    case "peer-lid-message":
                        b = false;
                        v = p;
                        break;
                    case "recipient-latest-lid":
                    case "migration-sync-latest":
                    case "migration-sync-old":
                    case "blocklist-active":
                    case "blocklist-inactive":
                        b = false;
                        v = !y;
                        break;
                    default:
                        b = C;
                        v = p;
                }
                if (v) {
                    if (i != null && l) {
                        f.push(o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(r, !t));
                    }
                    let S;
                    if (a === "migration-sync-old" || a === "blocklist-inactive") {
                        S = true;
                    } else {
                        S = c.get(r) !== n;
                    }
                    const L = S ? _ : d;
                    o("WAWebApiContact").warmUpLidPnMapping(n, r, L);
                    s.push({
                        lid: n.toString(),
                        phoneNumber: r.toString()
                    });
                    if (t) {
                        u.push({
                            lid: n,
                            pn: r,
                            phoneNumberCreatedAt: L
                        });
                    } else {
                        o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString());
                    }
                }
                if (b) {
                    g.add(r);
                }
            });
            if (t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0) {
                x(u);
            }
            const y = f.length > 0 ? (h || (h = n("Promise"))).all(f).then((e)=>{
                let t = 0;
                for (const n of e){
                    t += n?.notifications?.length ?? 0;
                }
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "createLidPnMappings: ",
                    " id change notifs gen, src ",
                    ""
                ])), t, a);
            }) : (h || (h = n("Promise"))).resolve();
            if (g.size !== 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "createLidPnMappings: ",
                    " contacts requiring usync, source ",
                    ""
                ])), g.size, a);
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
                    contactIds: Array.from(g),
                    shouldSyncDevice: false,
                    mode: "query"
                });
            }
            const C = u.length > 0 ? $(u) : (h || (h = n("Promise"))).resolve([]);
            const b = yield (h || (h = n("Promise"))).all([
                y,
                C
            ]);
            const v = b[1];
            if (s.length > 0) {
                yield N(s);
            }
            yield o("WAWebDBContactRemoveSoftDeletedUsernames").applySoftDeletedUsernameClearsToFrontend(v);
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkGet(e);
                return new Map(t.filter(Boolean).map((e)=>[
                        e.id,
                        e
                    ]));
            } catch (e) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "getPnRowData failed! ",
                    ""
                ])), r("getErrorSafe")(e).stack);
            }
            return new Map;
        });
        return I.apply(this, arguments);
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const e = [];
                x(e);
                const t = yield $(e);
                yield o("WAWebDBContactRemoveSoftDeletedUsernames").applySoftDeletedUsernameClearsToFrontend(t);
            } catch (e) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb failed!"
                ]))).sendLogs("Failed to flushLidPnMappingsToDb");
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "flush lidPnCacheDirtySet: get dirty updates for ",
            ""
        ])), Array.from(o("WAWebApiContact").lidPnCacheDirtySet).join(","));
        o("WAWebApiContact").lidPnCacheDirtySet.forEach((t)=>{
            const n = o("WAWebWidFactory").createUserLidOrThrow(t);
            const r = o("WAWebApiContact").lidPnCache.getLidEntry(n);
            if (r != null) {
                e.push({
                    lid: n,
                    pn: r.phoneNumber,
                    phoneNumberCreatedAt: o("WATimeUtils").castToUnixTime(r.phoneNumberCreatedAt)
                });
            }
        });
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "lidPnCacheDirtySet: ",
            " flushed"
        ])), o("WAWebApiContact").lidPnCacheDirtySet.size);
        o("WAWebApiContact").lidPnCacheDirtySet.clear();
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return [];
            }
            const t = yield k(e.map(({ pn: t })=>t.toJid()));
            const n = e.map(({ lid: n, phoneNumberCreatedAt: r, pn: a })=>{
                const i = t.get(a.toJid());
                return babelHelpers.extends({
                    id: n.toString(),
                    phoneNumber: a.toString(),
                    phoneNumberCreatedAt: r
                }, i ? o("WAWebContactsDbLidMigrationUtils").createContactLidRowFromPnRow(n, i) : {
                    contactHash: o("WAWebApiContact").getContactHash(n.toJid())
                });
            });
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "flushLidPnMappingsToDbImpl: ",
                " records to update"
            ])), n.length);
            yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkCreateOrMerge(n);
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                return o("WAWebDBContactRemoveSoftDeletedUsernames").removeSoftDeletedUsernames(e.map(({ lid: t })=>t));
            }
            return [];
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebBackendApi").frontendSendAndReceive("bulkUpdatePhoneNumberJids", {
                lidPhoneNumberMappings: e
            });
        });
        return M.apply(this, arguments);
    }
    l.createLidPnMappingsInBatches = C;
    l.createLidPnMappings = L;
    l.flushLidPnMappingsToDb = T;
}, 98);