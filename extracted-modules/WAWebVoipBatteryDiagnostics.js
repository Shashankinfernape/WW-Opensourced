__d("WAWebVoipBatteryDiagnostics", [
    "WALogger",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _ = null;
    let f = null;
    let browserBatteryChargingAtStart = null;
    let h = null;
    let y = false;
    let C = null;
    let b = null;
    function v() {
        if (navigator === undefined) {
            return false;
        }
        return navigator.getBattery != null;
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!v()) {
                return null;
            }
            try {
                const e = yield navigator.getBattery?.();
                return e;
            } catch (error) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] Failed to get battery manager: ",
                    ""
                ])), error);
                return null;
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return {
            level: e.level,
            charging: e.charging,
            chargingTime: e.chargingTime,
            dischargingTime: e.dischargingTime
        };
    }
    function E() {
        _ = null;
        f = null;
        browserBatteryChargingAtStart = null;
        h = null;
        b = null;
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield S();
            if (e == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] Battery API not available"
                ])));
                return;
            }
            if (!y) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] init completed but metrics already stopped, discarding"
                ])));
                return;
            }
            _ = e;
            const t = L(e);
            f = t.level;
            browserBatteryChargingAtStart = t.charging;
            h = t.level;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:batteryDiagnostics] started (level=",
                "%, charging=",
                ")"
            ])), Math.round(t.level * 100), String(t.charging));
        });
        return I.apply(this, arguments);
    }
    function T() {
        if (y) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:batteryDiagnostics] was already active, resetting for new call"
            ])));
        }
        E();
        C = null;
        y = true;
        b = k();
    }
    function D() {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (y) {
                if (b != null) {
                    yield b;
                    b = null;
                }
                C = $();
                y = false;
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:batteryDiagnostics] stopped"
                ])));
            }
        });
        return x.apply(this, arguments);
    }
    function $() {
        if (!y) {
            return C;
        }
        const e = f;
        if (_ == null || e == null) {
            return null;
        }
        const t = L(_);
        const browserBatteryLevelStartPct = Math.round(e * 100);
        const browserBatteryLevelEndPct = Math.round(t.level * 100);
        let browserBatteryChargingTimeSec = null;
        if (isFinite(t.chargingTime) && t.chargingTime > 0) {
            browserBatteryChargingTimeSec = Math.round(t.chargingTime);
        }
        let browserBatteryDischargingTimeSec = null;
        if (isFinite(t.dischargingTime) && t.dischargingTime > 0) {
            browserBatteryDischargingTimeSec = Math.round(t.dischargingTime);
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:batteryDiagnostics] snapshot: start=",
            "% end=",
            "% drain=",
            "% chargingStart=",
            " chargingEnd=",
            ""
        ])), browserBatteryLevelStartPct, browserBatteryLevelEndPct, Math.max(0, browserBatteryLevelStartPct - browserBatteryLevelEndPct), String(browserBatteryChargingAtStart), String(t.charging));
        return {
            browserBatterySupported: v(),
            browserBatteryLevelStartPct,
            browserBatteryLevelEndPct,
            browserBatteryDrainPct: Math.max(0, browserBatteryLevelStartPct - browserBatteryLevelEndPct),
            browserBatteryChargingAtStart,
            browserBatteryChargingAtEnd: t.charging,
            browserBatteryChargingTimeSec,
            browserBatteryDischargingTimeSec
        };
    }
    function P() {
        if (_ != null) {
            f = _.level;
            browserBatteryChargingAtStart = _.charging;
        }
    }
    function N() {
        if (h == null) {
            return null;
        }
        return Math.round(h * 100);
    }
    function M() {
        return {
            browserBatterySupported: v()
        };
    }
    l.startBatteryDiagnostics = T;
    l.stopBatteryDiagnostics = D;
    l.snapshotBatteryDiagnostics = $;
    l.resetBatteryDiagnostics = P;
    l.getBatteryLevelAtCallStart = N;
    l.getBatteryDiagnosticsCapabilities = M;
}, 98);