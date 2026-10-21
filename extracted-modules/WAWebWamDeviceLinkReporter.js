__d("WAWebWamDeviceLinkReporter", [
    "WABase64",
    "WABinary",
    "WACryptoSha256",
    "WAResolvable",
    "WATimeUtils",
    "WAWebAndroidTabletVisitId",
    "WAWebAppTracker",
    "WAWebLinkDeviceExperience",
    "WAWebLocalStorage",
    "WAWebMdLinkDeviceCompanionWamEvent",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e = null;
    let s = null;
    let u = null;
    let c = null;
    const d = "deviceLinkWamState";
    function m() {
        if (s != null) {
            if (r("WAWebLocalStorage") != null) {
                r("WAWebLocalStorage").setItem(d, JSON.stringify(s));
            }
        }
    }
    function p() {
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").removeItem(d);
        }
    }
    function _() {
        try {
            const e = r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(d);
            if (e != null) {
                p();
                return JSON.parse(e);
            }
        } catch (e) {}
        return null;
    }
    function f(e, t, n) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            p();
            e = new (o("WAWebMdLinkDeviceCompanionWamEvent")).MdLinkDeviceCompanionWamEvent;
            const a = yield C(t, n);
            s = {
                regStartTime: r,
                sessionId: a,
                visitId: o("WAWebAndroidTabletVisitId").getExistingAndroidTabletVisitId()
            };
            return a;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!e) {
                const r = _();
                if (r == null) {
                    return;
                }
                s = r;
                e = new (o("WAWebMdLinkDeviceCompanionWamEvent")).MdLinkDeviceCompanionWamEvent;
            }
            yield c?.promise;
            c = new (o("WAResolvable")).Resolvable;
            u = t;
            yield v();
            m();
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WABinary")).Binary;
            n.writeBuffer(e);
            n.write(95);
            n.writeBuffer(t);
            const r = n.readByteArrayView();
            const a = yield o("WACryptoSha256").sha256(r);
            return o("WABase64").encodeB64(a);
        });
        return b.apply(this, arguments);
    }
    function v(t) {
        if (!(!e || !s)) {
            const r = s;
            const a = o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - r.regStartTime;
            if (u != null) {
                const i = u;
                e = new (o("WAWebMdLinkDeviceCompanionWamEvent")).MdLinkDeviceCompanionWamEvent({
                    mdDurationS: a,
                    mdSessionId: r.sessionId,
                    mdTimestampS: r.regStartTime,
                    mdLinkDeviceCompanionErrorCode: t ?? 0,
                    mdLinkDeviceCompanionStage: i,
                    mdLinkDeviceExperienceId: o("WAWebLinkDeviceExperience").getWebCompanionLinkDeviceExperienceId()
                });
                const l = e;
                const d = r.visitId;
                if (d != null) {
                    l.waWebVisitId = d;
                }
                o("WAWebAppTracker").attachWAMAppContext(l, a * 1000);
                l.commitAndWaitForFlush(true);
                c?.resolve();
                if (t != null || l.mdLinkDeviceCompanionStage === o("WAWebWamEnumMdLinkDeviceCompanionStage").MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE) {
                    e = null;
                    s = null;
                    u = null;
                    p();
                }
            }
        }
    }
    l.initDeviceLinkEvent = f;
    l.setDeviceLinkPairStage = h;
    l.commitDeviceLinkEvent = v;
}, 98);