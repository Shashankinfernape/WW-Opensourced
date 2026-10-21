__d("WAWebVoipOutgoingCallPreSetup", [
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "WAWebCallCollection",
    "WAWebContactMutator",
    "WAWebLidMigrationUtils",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipOutgoingCallQpl",
    "WAWebVoipOutgoingSetupLatencyMode",
    "WAWebVoipStartCallPermissions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "#aa6627";
    function p(e, t, n, r) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            let a;
            const permissionsStartTs = R();
            (a = o("WAWebVoipOutgoingCallQpl")).voipOutgoingCallQplAddPoint(e, a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_START);
            const permission = yield o("WAWebVoipStartCallPermissions").checkStartCallPermissions(n, r);
            a.voipOutgoingCallQplAddPoint(e, a.VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_END);
            const permissionsEndTs = R();
            if (permission == null) {
                return {
                    status: "stopped",
                    stop: "no_permission"
                };
            }
            const u = yield C(e, t);
            if (u.status === "stopped") {
                return u;
            }
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SYNC_DEVICE_LIST_START);
            yield v(u.peerWid, e);
            o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SYNC_DEVICE_LIST_END);
            return babelHelpers.extends({}, u, {
                permission,
                permissionsEndTs,
                permissionsStartTs
            });
        });
        return _.apply(this, arguments);
    }
    function f(e, t, n, { signal, voipReadyTs }) {
        if (n.status === "stopped") {
            g(e, t, n.stop, signal);
            return null;
        }
        return {
            devicePermissionsMs: y(n, voipReadyTs),
            peerPnWid: n.peerPnWid,
            peerWid: n.peerWid,
            permission: n.permission,
            signal
        };
    }
    function g(t, n, r, a) {
        e: {
            if (r === "no_permission" && a.aborted) {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(t, "aborted_before_signaling");
                break e;
            }
            if (r === "no_permission") {
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(t, h());
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                break e;
            }
            if (r === "lid_resolution_failed") {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: LID resolution failed after usync, aborting call"
                ]))).sendLogs("voip: startWAWebVoipCall: LID failed after usync, call aborted");
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(t, "lid_resolution_failed");
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                break e;
            }
            if (r === "peer_wid_null") {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: peerWid is null"
                ]))).sendLogs("voip: startWAWebVoipCall: peerWid is null");
                o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(t, "peer_wid_null");
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${r}`);
        }
    }
    function h() {
        if (r("WAWebCallCollection").activeCall != null) {
            return "another_call";
        }
        return "permission_denied";
    }
    function y({ permissionsEndTs, permissionsStartTs }, voipReadyTs) {
        if (permissionsStartTs == null || permissionsEndTs == null || voipReadyTs == null) {
            return null;
        }
        return Math.max(0, permissionsEndTs - Math.max(permissionsStartTs, voipReadyTs));
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n = o("WAWebLidMigrationUtils").toLid(t);
            const peerPnWid = o("WAWebLidMigrationUtils").toPn(t);
            if (n == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution"
                ]))).color(m);
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.LID_RESOLUTION_SYNC_START);
                yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: [
                        t
                    ],
                    context: "voip",
                    phash: null
                });
                o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.LID_RESOLUTION_SYNC_END);
                n = o("WAWebLidMigrationUtils").toLid(t);
                if (n == null) {
                    return {
                        status: "stopped",
                        stop: "lid_resolution_failed"
                    };
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: startWAWebVoipCall: usync resolved LID successfully"
                ]))).color(m);
            }
            const a = n ?? peerPnWid;
            if (a == null) {
                return {
                    status: "stopped",
                    stop: "peer_wid_null"
                };
            }
            return {
                peerPnWid,
                peerWid: a,
                status: "resolved"
            };
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebVoipOutgoingSetupLatencyMode").isCacheAwareSyncEnabled()) {
                try {
                    const n = yield o("WAWebApiDeviceList").getDeviceRecord(e);
                    if (n != null && n.deleted === false && n.expectedTs == null && n.advAccountType != null) {
                        const advAccountType = n.advAccountType;
                        o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, {
                            bool: {
                                device_list_cache_hit: true
                            }
                        });
                        o("WAWebContactMutator").updateContactAdvAccountType({
                            contactId: o("WAWebWidFactory").asUserWidOrThrow(e),
                            advAccountType
                        });
                        return;
                    }
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, {
                        bool: {
                            device_list_cache_hit: false
                        }
                    });
                } catch (error) {
                    o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, {
                        bool: {
                            device_list_cache_error: true
                        }
                    });
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cache-aware device sync failed, falling back to network sync: ",
                        ""
                    ])), error);
                }
            }
            yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [
                    e
                ],
                context: "voip",
                phash: null
            });
        });
        return S.apply(this, arguments);
    }
    function R() {
        return globalThis.performance?.now() ?? null;
    }
    l.runOutgoingCallPreSetup = p;
    l.finishOutgoingCallPreSetup = f;
    l.stopOutgoingCallBeforeSetup = g;
    l.nowMs = R;
}, 98);