__d("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob", [
    "Promise",
    "WAWebDBCreateLidPnMappings",
    "WAWebEnvironment",
    "WAWebRunInBatches",
    "WAWebUpdateLidMetadataApi",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (r("WAWebEnvironment").isWindows) {
                yield o("WAWebRunInBatches").runInBatches(e, function(e) {
                    return c(e, t);
                });
            } else {
                yield c(e, t);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = [];
            const i = [];
            for (const l of t){
                if (l != null) {
                    const s = l.id;
                    const u = o("WAWebWidFactory").asUserWidOrThrow(s);
                    if (u.isLid()) {
                        const { displayName: c, phoneNumber: d } = l;
                        if (c != null) {
                            a.push({
                                lid: u,
                                data: {
                                    displayNameLID: c
                                }
                            });
                        }
                        if (d != null) {
                            i.push({
                                lid: u,
                                pn: o("WAWebWidFactory").asUserWidOrThrow(d)
                            });
                        }
                    } else {
                        const m = l.lid;
                        if (m != null) {
                            i.push({
                                lid: o("WAWebWidFactory").asUserLidOrThrow(m),
                                pn: o("WAWebWidFactory").asUserWidOrThrow(s)
                            });
                        }
                    }
                }
            }
            yield (e || (e = n("Promise"))).all([
                a.length > 0 ? o("WAWebUpdateLidMetadataApi").updateLidMetadata({
                    updates: a
                }) : null,
                i.length > 0 ? o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: i,
                    flushImmediately: r,
                    learningSource: "create-or-replace-display-names"
                }) : null
            ].filter(Boolean));
        });
        return d.apply(this, arguments);
    }
    l.createOrReplaceDisplayNamesAndLidPnMappingsInBatches = s;
    l.createOrReplaceDisplayNamesAndLidPnMappings = c;
}, 98);