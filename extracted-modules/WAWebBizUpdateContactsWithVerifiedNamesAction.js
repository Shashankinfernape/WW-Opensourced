__d("WAWebBizUpdateContactsWithVerifiedNamesAction", [
    "WAWebApiVerifiedBusinessName",
    "WAWebBusinessProfileTypes",
    "WAWebContactCollection",
    "WAWebHandleMsgTypes.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = {};
        for (const r of e){
            const a = r.id;
            n[a.user] = r;
        }
        for (const i of t){
            const l = i.id;
            if (!l.isBot()) {
                const s = n[l.user];
                const isBusiness = !!s;
                const c = s || {};
                const { isApi, isSmb, level, name, privacyMode } = c;
                const isEnterprise = !!isApi;
                const h = {
                    isBusiness,
                    isEnterprise,
                    isSmb: !!isSmb,
                    verifiedLevel: o("WAWebBusinessProfileTypes").convertLevel(level),
                    verifiedName: name,
                    privacyMode
                };
                i.set(h);
            }
        }
    }
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = (yield o("WAWebApiVerifiedBusinessName").getAllVerifiedNames()).map(({ id, isApi, isSmb, level, name, privacyMode })=>({
                    id: o("WAWebWidFactory").createUserWidOrThrow(id),
                    name,
                    level,
                    isApi,
                    isSmb,
                    privacyMode: privacyMode ? {
                        actualActors: r("nullthrows")(o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(privacyMode.actualActors)),
                        hostStorage: r("nullthrows")(o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(privacyMode.hostStorage)),
                        privacyModeTs: privacyMode.privacyModeTs
                    } : null
                }));
            e(t, o("WAWebContactCollection").ContactCollection.toArray());
        });
        return u.apply(this, arguments);
    }
    l.updateContactsWithVerifiedNames = e;
    l.applyContactBusinessProps = s;
}, 98);