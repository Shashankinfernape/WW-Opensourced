__d("HasteResponse", [
    "Bootloader",
    "BootloaderConfig",
    "BootloaderEvents",
    "ClientConsistency",
    "ClientConsistencyEventEmitter",
    "HasteSupportData",
    "ServerJS",
    "TimeSlice",
    "__debug",
    "fb-error",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set;
    var u = {
        handleSRPayload: function({ hblp, hsdp }, n) {
            const i = hblp?.consistency;
            r("ClientConsistency").recordResponseRevision(i?.rev);
            if (hsdp) {
                o("HasteSupportData").handle(hsdp, n?.hsdp);
            }
            if (hblp) {
                r("Bootloader").handlePayload(hblp, n?.hblp);
            }
            if (i != null) {
                r("ClientConsistencyEventEmitter").emit("newEntry", i);
            }
        },
        handle: function({ allResources, hsrp, jsmods, tieredResources }, { onAll, onBlocking, onLog, source, sourceDetail }) {
            const h = (e || (e = r("performanceAbsoluteNow")))();
            let isFirstIdentical;
            if (sourceDetail == null) {
                isFirstIdentical = true;
            } else {
                const C = r("fb-error").getSimpleHash(source, sourceDetail);
                if (s.has(C)) {
                    isFirstIdentical = false;
                } else {
                    isFirstIdentical = true;
                    s.add(C);
                }
            }
            const payloadStats = {
                hsdp: {
                    entry: 0,
                    dup_entry: 0
                },
                hblp: {
                    rsrc: 0,
                    dup_rsrc: 0,
                    comp: 0,
                    dup_comp: 0
                },
                sjsp: {
                    define: 0,
                    dup_user_define: 0,
                    dup_system_define: 0,
                    require: 0
                }
            };
            if (hsrp) {
                u.handleSRPayload(hsrp, payloadStats);
            }
            let jsmodsStart = 0;
            let jsmodsEnd = 0;
            const onBlocking_1 = function() {
                payloadStats.sjsp.require += (jsmods?.require || []).length;
                payloadStats.sjsp.define += (jsmods?.define || []).length;
                const t = n("__debug").getDupCount();
                let o = t[0];
                let a = t[1];
                payloadStats.sjsp.dup_user_define -= o;
                payloadStats.sjsp.dup_system_define -= a;
                jsmodsStart = (e || (e = r("performanceAbsoluteNow")))();
                new (r("ServerJS"))().handle(jsmods || {});
                jsmodsEnd = e();
                const i = n("__debug").getDupCount();
                o = i[0];
                a = i[1];
                payloadStats.sjsp.dup_user_define += o;
                payloadStats.sjsp.dup_system_define += a;
                onBlocking?.();
            };
            const onLog_1 = function(rsrcs) {
                const t = {
                    source,
                    sourceDetail,
                    isFirstIdentical,
                    timesliceContext: r("TimeSlice").getContext(),
                    startTime: h,
                    logTime: (e || (e = r("performanceAbsoluteNow")))(),
                    jsmodsStart,
                    jsmodsEnd,
                    rsrcs,
                    payloadStats
                };
                onLog?.(t);
                o("BootloaderEvents").notifyHasteResponse(t);
            };
            if (r("BootloaderConfig").tieredLoadingFromTier <= 3 && tieredResources != null) {
                r("Bootloader").loadTieredResources(tieredResources, {
                    onBlocking: onBlocking_1,
                    onAll,
                    onLog: onLog_1
                });
            } else {
                r("Bootloader").loadResources(allResources ?? [], {
                    onBlocking: onBlocking_1,
                    onAll,
                    onLog: onLog_1
                });
            }
        }
    };
    const { handle, handleSRPayload } = u;
    l.handle = handle;
    l.handleSRPayload = handleSRPayload;
}, 98);