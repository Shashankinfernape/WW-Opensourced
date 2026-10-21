__d("WAWebWamMemoryStat", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebEnvironment",
    "WAWebLidAwareContactsDB",
    "WAWebMemoryPressureCacheClear",
    "WAWebMemoryStatWamEvent",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcMemoryStatWamEvent",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m = self.performance.now();
    let p = false;
    const _ = 100;
    let f = 0;
    function g() {
        return self.performance?.memory != null;
    }
    function h() {
        const t = self.performance?.memory;
        if (t) {
            E = Math.max(E, t.usedJSHeapSize);
            k += t.usedJSHeapSize;
            I++;
            return C(t);
        }
    }
    function y() {
        const t = self.performance?.memory;
        if (t) {
            return C(t);
        }
    }
    function C(e) {
        return {
            uptime: Math.round((self.performance.now() - m) / 1000),
            jsHeapSizeLimit: Math.round(e.jsHeapSizeLimit / 1000 / 1000),
            totalJsHeapSize: Math.round(e.totalJSHeapSize / 1000 / 1000),
            usedJsHeapSize: Math.round(e.usedJSHeapSize / 1000 / 1000)
        };
    }
    function b() {
        const e = h();
        if (e) {
            return (d || (d = n("Promise"))).resolve([
                {
                    label: "Main Window",
                    memory: e.usedJsHeapSize,
                    uptime: e.uptime
                }
            ]);
        }
        return (d || (d = n("Promise"))).resolve();
    }
    const v = 5000;
    const S = 60;
    const R = 2 * 1024;
    let L = o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE;
    var E = 0;
    var k = 0;
    var I = 0;
    let T;
    function D(t) {
        try {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker() || self.performance?.memory == null) {
                return;
            }
            if (t !== L) {
                if (L !== o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE) {
                    T?.cancel();
                    T = null;
                    A();
                    m = self.performance.now();
                }
                L = t;
                M();
            }
            if (T == null) {
                N();
            }
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[MemoryStat] failed to set new scenario: ",
                ""
            ])), t).sendLogs("set-memory-stat-scenario-failed", {
                sampling: 0.01
            });
        }
    }
    let x = null;
    function $(e) {
        if (x != null && !x.equals(e)) {
            P();
        }
        x = e;
    }
    function P() {
        if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            const e = h();
            if (e != null) {
                q().then((t)=>{
                    const r = new (o("WAWebWebcMemoryStatWamEvent")).WebcMemoryStatWamEvent(babelHelpers.extends({}, e, {
                        scenario: o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.CHAT_NAVIGATION,
                        peakUsedJsHeapSize: Math.round(E / 1000 / 1000),
                        usedJsHeapSize: Math.round(k / I / 1000 / 1000),
                        isForeground: self.document?.visibilityState === "visible"
                    }, t, O));
                    o("WAWebAppTracker").attachWAMAppContext(r);
                    r.commit();
                });
            }
        }
    }
    function N() {
        T = new (o("WAShiftTimer")).ShiftTimer(function() {
            const e = h();
            if (e != null) {
                if (Math.abs(e.usedJsHeapSize - f) > _) {
                    f = e.usedJsHeapSize;
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[MemoryStat] js heap size: ",
                        "Gb"
                    ])), (e.usedJsHeapSize / 1024).toFixed(2));
                }
                o("WAWebMemoryPressureCacheClear").maybeClearCachesForMemoryPressure({
                    jsHeapSizeLimitMb: e.jsHeapSizeLimit,
                    usedJsHeapSizeMb: e.usedJsHeapSize
                });
            }
            if (L === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE && I !== 0 && I % S === 0) {
                A();
                M();
            }
            N();
        });
        T.onOrAfter(v);
    }
    function M() {
        E = 0;
        k = 0;
        I = 0;
    }
    function w(e, t) {
        if (r("WAWebEnvironment").isWeb) {
            const n = new (o("WAWebMemoryStatWamEvent")).MemoryStatWamEvent({
                workingSetSize: e.usedJsHeapSize * 1000,
                workingSetPeakSize: Math.round(E / 1000),
                uptime: e.uptime,
                numMessages: t.messageCollectionSize,
                processType: "main"
            });
            o("WAWebAppTracker").attachWAMAppContext(n);
            n.commit();
        }
    }
    function A() {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield (d || (d = n("Promise"))).all([
                q(),
                B()
            ]);
            const a = t[0];
            const i = t[1];
            const l = r("nullthrows")(h());
            const s = Math.round(k / I / 1000 / 1000);
            const m = new (o("WAWebWebcMemoryStatWamEvent")).WebcMemoryStatWamEvent(babelHelpers.extends({}, l, {
                scenario: L,
                peakUsedJsHeapSize: Math.round(E / 1000 / 1000),
                usedJsHeapSize: s,
                isForeground: self.document?.visibilityState === "visible"
            }, a, i));
            o("WAWebAppTracker").attachWAMAppContext(m);
            m.commit();
            w(l, a);
            const _ = (s / 1024).toFixed(2);
            const f = (l.usedJsHeapSize / 1024).toFixed(2);
            const g = `average: ${_}Gb, current: ${f}Gb`;
            if (!p && s > R) {
                p = true;
                const y = R / 1024;
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MemoryStat] memory usage exceeded ",
                    "Gb: ",
                    ""
                ])), y, g).sendLogs(`memory-usage-exceeded-${y}gb`, {
                    sampling: 0.01
                });
            } else {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[MemoryStat] memory usage: ",
                    " (cores: ",
                    ")"
                ])), g, self.navigator?.hardwareConcurrency);
            }
        });
        return F.apply(this, arguments);
    }
    var O = null;
    function B() {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (d || (d = n("Promise"))).all([
                o("WAWebSchemaChat").getChatTable().count(),
                r("WAWebLidAwareContactsDB").count(),
                o("WAWebSchemaMessage").getMessageTable().count()
            ]);
            const t = e[0];
            const a = e[1];
            const i = e[2];
            O = {
                chatDbSize: V(t),
                contactDbSize: V(a),
                messageDbSize: V(i)
            };
            return O;
        });
        return W.apply(this, arguments);
    }
    function q() {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebBackendApi").frontendSendAndReceive("getCollectionSizes");
            return {
                chatCollectionSize: V(e.chat),
                contactCollectionSize: V(e.contact),
                messageCollectionSize: V(e.message)
            };
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        if (e > 1000) {
            return Math.round(e / 100) * 100;
        }
        return Math.round(e / 10) * 10;
    }
    l.isPerformanceMemoryApiSupported = g;
    l.readMemoryInfo = y;
    l.getMemoryTableRows = b;
    l.setCurrentMemoryScenario = D;
    l.uploadMemoryIfChatWasOpened = $;
    l.uploadMemoryInfoOnChatClose = P;
    l.roundIntForMetrics = V;
}, 98);