__d("WAWebAudioDeviceManager", [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebMediaPermissionsUtils",
    "WAWebUA",
    "WAWebUserPrefsVoip",
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
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    const re = 200;
    const oe = new WeakMap;
    function ae(e) {
        const t = oe.get(e);
        if (t != null) {
            return t;
        }
        var n = e.enumerateDevices().finally(()=>{
            window.setTimeout(function() {
                if (oe.get(e) === n) {
                    oe.delete(e);
                }
            }, re);
        });
        oe.set(e, n);
        return n;
    }
    function ie(e) {
        return e.every((e)=>e.deviceId === "");
    }
    let le = null;
    function se(t) {
        if (le !== t) {
            le = t;
            if (t != null) {
                o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger("deviceSelectionChanged", t);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] Device selection changed, emitted event for deviceId:\n        ",
                    ""
                ])), t);
            }
        }
    }
    function ue() {
        return le;
    }
    let ce = null;
    let de = null;
    function me(e) {
        if (ce !== e) {
            ce = e;
            if (e != null) {
                o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger("speakerDeviceSelectionChanged", e);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] Speaker device selection updated: ",
                    ""
                ])), e);
            }
        }
    }
    function pe() {
        return ce ?? o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function _e(e, t) {
        o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e);
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [",
            "] saved output device preference: ",
            ""
        ])), t, e.slice(0, 8));
    }
    function fe(e) {
        return ge.apply(this, arguments);
    }
    function ge() {
        ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield Se(e);
                if (t.length === 0) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] No audio output devices found"
                    ])));
                    return null;
                }
                if (ie(t)) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Output device list is anonymized, keeping current selection"
                    ])));
                    return ce ?? null;
                }
                let n = ce;
                if (n != null) {
                    const r = t.find((e)=>e.deviceId === n);
                    if (!r) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV] Current output device ",
                            " no longer available, will select fallback"
                        ])), n);
                        n = null;
                        me(null);
                    }
                }
                const a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
                if (a != null && n !== a) {
                    const i = t.find((e)=>e.deviceId === a);
                    if (i) {
                        n = a;
                    }
                }
                if (n != null && n !== ce) {
                    me(n);
                }
                if (ce == null && t.length > 0) {
                    me(t[0].deviceId);
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio output device: ",
                        ""
                    ])), t[0].label ?? "unknown");
                }
                return ce ?? null;
            } catch (error) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] Error selecting audio output device: ",
                    ""
                ])), error).sendLogs("voip: [AV] Error selecting audio output device: ${e}");
                return null;
            }
        });
        return ge.apply(this, arguments);
    }
    function he(e, t, n, r) {
        return ye.apply(this, arguments);
    }
    function ye() {
        ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, skipPermissionRequest, isInActiveCall, allowPermissionPrompt) {
            try {
                const a = yield be({
                    allowPermissionPrompt,
                    isInActiveCall,
                    skipPermissionRequest,
                    targetWindow: e
                });
                if (a.length === 0) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] No audio input devices found"
                    ])));
                    return null;
                }
                if (ie(a)) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Device list is anonymized, keeping current selection"
                    ])));
                    return ue() ?? null;
                }
                let l = le;
                if (l != null) {
                    const s = a.find((e)=>e.deviceId === l);
                    if (!s) {
                        l = null;
                        se(null);
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV] Current selected device is no longer available,\n          clearing selection"
                        ])));
                    }
                }
                const u = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
                if (u != null && l !== u) {
                    const c = a.find((e)=>e.deviceId === u);
                    if (c) {
                        l = u;
                    }
                }
                if (l != null && l !== le) {
                    const d = a.find((e)=>e.deviceId === l);
                    if (d) {
                        se(l);
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV] Using selected audio device:\n          ",
                            ""
                        ])), d.label ?? "unknown");
                    }
                }
                if (le == null) {
                    se(a[0].deviceId);
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio device:\n        ",
                        ""
                    ])), a[0].label ?? "unknown");
                }
                const _ = ue();
                return _ ?? null;
            } catch (error) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] Error selecting audio device: ",
                    ""
                ])), error).sendLogs("voip: [AV] Error selecting audio device: ${e}");
                return null;
            }
        });
        return ye.apply(this, arguments);
    }
    function Ce(e) {
        return e.sort((e, t)=>{
            const n = e.deviceId === "default";
            const r = t.deviceId === "default";
            if (n && !r) {
                return -1;
            }
            if (!n && r) {
                return 1;
            }
            return 0;
        });
    }
    function be(e) {
        return ve.apply(this, arguments);
    }
    function ve() {
        ve = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = {}) {
            const t = e;
            const { allowPermissionPrompt, isInActiveCall, skipPermissionRequest, targetWindow } = t;
            try {
                const u = targetWindow?.navigator?.mediaDevices ?? navigator.mediaDevices;
                if (!(u != null && u.enumerateDevices)) {
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported"
                    ])));
                    return [];
                }
                const c = allowPermissionPrompt === true && skipPermissionRequest !== true && !(o("WAWebUA").UA.isSafari && isInActiveCall === true);
                const d = o("WAWebUA").UA.isFirefox && targetWindow != null;
                if (c) {
                    const m = d ? {
                        denied: false,
                        granted: false
                    } : yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState("microphone", targetWindow?.navigator);
                    const { denied, granted } = m;
                    const f = granted || denied;
                    if (!f) {
                        try {
                            const g = yield u.getUserMedia({
                                audio: true
                            });
                            g.getTracks().forEach((e)=>e.stop());
                        } catch (error) {
                            if (isInActiveCall !== true) {
                                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:getAvailableAudioDevices] microphone permission denied"
                                ])));
                                throw error;
                            }
                        }
                    }
                }
                const h = yield ae(u);
                const y = Ce(h.filter((e)=>e.kind === "audioinput").map((e)=>({
                        deviceId: e.deviceId,
                        groupId: ke(e),
                        label: e.label || `Microphone ${e.deviceId.slice(0, 8)}`
                    })));
                o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioDevices] loaded ",
                    " devices: ",
                    ""
                ])), y.length, y.map(Le));
                return y;
            } catch (error) {
                if (!(error instanceof Error) || !error.name.includes("NotAllowed")) {
                    o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioDevices] error loading devices: ",
                        ""
                    ])), error);
                }
                return [];
            }
        });
        return ve.apply(this, arguments);
    }
    function Se(e, t) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const a = t === true && e != null;
                const i = a ? navigator.mediaDevices : e?.navigator?.mediaDevices ?? navigator.mediaDevices;
                if (!(i != null && i.enumerateDevices)) {
                    o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioOutputDevices] mediaDevices API not supported"
                    ])));
                    return [];
                }
                const l = yield ae(i);
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] enumerated ",
                    " total devices (kinds: ",
                    ")"
                ])), l.length, l.map((e)=>e.kind).filter((e, t, n)=>n.indexOf(e) === t));
                const s = Ce(l.filter((e)=>e.kind === "audiooutput").map((e)=>({
                        deviceId: e.deviceId,
                        groupId: ke(e),
                        label: e.label || `Speaker ${e.deviceId.slice(0, 8)}`
                    })));
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] found ",
                    " output devices: ",
                    ""
                ])), s.length, s.map(Le));
                return s;
            } catch (error) {
                o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] error loading devices: ",
                    ""
                ])), error);
                return [];
            }
        });
        return Re.apply(this, arguments);
    }
    function Le(e) {
        const t = e.groupId == null ? "none" : e.groupId.slice(0, 8);
        return `${e.label} (${e.deviceId.slice(0, 8)}, group ${t})`;
    }
    function Ee(e, t, n) {
        if (e != null) {
            return `${e.label || "unlabeled"} (${e.deviceId.slice(0, 8)})`;
        }
        if (t != null) {
            return `(not in device list: ${t.slice(0, 8)})`;
        }
        return n;
    }
    function ke(e) {
        const t = e?.groupId;
        if (t != null && t !== "") {
            return t;
        }
        return null;
    }
    function Ie(e, t, n, r) {
        return Te.apply(this, arguments);
    }
    function Te() {
        Te = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            try {
                const a = navigator.mediaDevices;
                if (!(a != null && a.enumerateDevices)) {
                    return;
                }
                const i = yield ae(a);
                const l = i.filter((e)=>e.kind === "audioinput");
                const s = i.filter((e)=>e.kind === "audiooutput");
                const u = l.find((e)=>e.deviceId === n);
                const c = s.find((e)=>e.deviceId === r);
                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] audio topology (",
                    "): ",
                    " mic(s), ",
                    " speaker(s), mic=",
                    ", speaker=",
                    ""
                ])), e, t, l.length, s.length, Ee(u, n, "(none)"), Ee(c, r, "(browser default)"));
                const d = ke(u);
                const m = ke(c);
                if (d == null || m == null) {
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] mic/speaker (",
                        ") pairing unknown, groupId unavailable"
                    ])), e, t);
                } else if (d === m) {
                    o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] mic/speaker (",
                        ") paired on one device, group ",
                        ""
                    ])), e, t, d.slice(0, 8));
                } else {
                    o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] mic/speaker (",
                        ") group mismatch, mic group ",
                        " vs speaker group ",
                        ""
                    ])), e, t, d.slice(0, 8), m.slice(0, 8));
                }
            } catch (error) {
                o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] failed to log audio topology (",
                    "): ",
                    ""
                ])), e, t, error);
            }
        });
        return Te.apply(this, arguments);
    }
    function De(e) {
        return xe.apply(this, arguments);
    }
    function xe() {
        xe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchAudioInputDeviceInternal] switching to device: ",
                ""
            ])), e.deviceId.slice(0, 8));
            try {
                const params = o("WAWebUA").UA.isFirefox ? babelHelpers.extends({}, e.captureParams, {
                    sampleRate: e.audioContext.sampleRate
                }) : e.captureParams;
                const r = e.grantedStream ?? (yield o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
                    type: "microphone",
                    selectedDeviceId: e.deviceId,
                    params,
                    targetWindow: e.targetWindow,
                    keepExistingModal: e.isAutoSwitch === true
                }));
                if (r) {
                    se(e.deviceId);
                    if (e.isAutoSwitch !== true) {
                        o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.deviceId);
                    }
                    e.onStreamUpdate(r);
                    o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device"
                    ])));
                    Ie("AV:switchAudioInputDeviceInternal", "input-switch", e.deviceId, de);
                    return true;
                }
                o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream"
                ])));
                return false;
            } catch (error) {
                o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioInputDeviceInternal] error: ",
                    ""
                ])), error).sendLogs("voip: switchAudioInputDeviceInternal error: ${error}");
                return false;
            }
        });
        return xe.apply(this, arguments);
    }
    function $e(e, t, n) {
        return Pe.apply(this, arguments);
    }
    function Pe() {
        Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const e_setSinkId = e.setSinkId;
            if (typeof e_setSinkId !== "function") {
                o("WALogger").WARN(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId not available, output will use browser default"
                ])), r);
                return false;
            }
            try {
                yield e_setSinkId.call(e, t);
                o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] output device set to ",
                    ""
                ])), r, t.slice(0, 8));
                return true;
            } catch (error) {
                const i = error instanceof Error ? error.name : String(error);
                o("WALogger").WARN(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId initial attempt failed for ",
                    ": ",
                    ""
                ])), r, t.slice(0, 8), i);
                if (i === "NotFoundError") {
                    o("WALogger").WARN(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] device ",
                        " not found, skipping retries"
                    ])), r, t.slice(0, 8));
                    return false;
                }
            }
            let u;
            for(var l = [
                200,
                500,
                1000
            ], s = function*() {
                const i = l[c];
                o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] retrying setSinkId in ",
                    "ms (attempt ",
                    "/",
                    ")"
                ])), r, i, c + 2, l.length + 1);
                yield new (ne || (ne = n("Promise")))(function(e) {
                    return window.setTimeout(e, i);
                });
                try {
                    yield e_setSinkId.call(e, t);
                    o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId succeeded on attempt ",
                        " for ",
                        ""
                    ])), r, c + 2, t.slice(0, 8));
                    return {
                        v: true
                    };
                } catch (error) {
                    const s = error instanceof Error ? error.name : String(error);
                    o("WALogger").WARN(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId attempt ",
                        " failed for ",
                        ": ",
                        ""
                    ])), r, c + 2, t.slice(0, 8), s);
                    if (s === "NotFoundError") {
                        o("WALogger").WARN(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [",
                            "] device ",
                            " not found, aborting retries"
                        ])), r, t.slice(0, 8));
                        return {
                            v: false
                        };
                    }
                }
            }, c = 0; c < l.length; c++){
                u = yield* s();
                if (u) {
                    return u.v;
                }
            }
            o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] setSinkId failed after ",
                " attempts for ",
                ""
            ])), r, l.length + 1, t.slice(0, 8));
            return false;
        });
        return Pe.apply(this, arguments);
    }
    function Ne(e, t) {
        return Me.apply(this, arguments);
    }
    function Me() {
        Me = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield we(e, t);
            if (n != null) {
                de = n;
            }
            Ie(t, "call-start", ue(), n);
            return n != null;
        });
        return Me.apply(this, arguments);
    }
    function we(e, t) {
        return Ae.apply(this, arguments);
    }
    function Ae() {
        Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = pe();
            o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] applying output device preference: ",
                ""
            ])), t, n ?? "(none)");
            if (n != null) {
                const r = yield $e(e, n, t);
                if (r) {
                    return n;
                }
            }
            const a = yield fe();
            if (a != null && a !== n) {
                o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] preferred device failed, falling back to ",
                    ""
                ])), t, a.slice(0, 8));
                const i = yield $e(e, a, t);
                if (i) {
                    return a;
                }
                return null;
            }
            return null;
        });
        return Ae.apply(this, arguments);
    }
    function Fe(e, t, n, r) {
        return Oe.apply(this, arguments);
    }
    function Oe() {
        Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] switching to device: ",
                ", browser=",
                "/",
                ", os=",
                ""
            ])), n, e.slice(0, 8), o("WAWebUA").UA.browser ?? "unknown", o("WAWebUA").UA.browserVersion ?? "?", o("WAWebUA").UA.os ?? "unknown");
            if (!t) {
                o("WALogger").WARN(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] output sink not initialized",
                    ""
                ])), n, r === true ? "" : ", saving preference");
                if (r !== true) {
                    _e(e, n);
                }
                return false;
            }
            try {
                const u = typeof t.setSinkId === "function";
                const c = t.sinkId ?? "(unknown)";
                o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId supported=",
                    ", currentSinkId=",
                    ""
                ])), n, String(u), c);
                if (!u) {
                    o("WALogger").WARN(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] setSinkId not supported in this browser",
                        ""
                    ])), n, r === true ? "" : ", saving preference");
                    if (r !== true) {
                        _e(e, n);
                    }
                    return false;
                }
                if (Be(t, e, r)) {
                    o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] output already on the default device, skipping setSinkId"
                    ])), n);
                    We(e, n, r);
                    return true;
                }
                const d = yield $e(t, e, n);
                if (d) {
                    o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] successfully switched to device: ",
                        ""
                    ])), n, e.slice(0, 8));
                    We(e, n, r);
                }
                return d;
            } catch (error) {
                const m = error instanceof Error ? error.name : String(error);
                const p = error instanceof Error ? error.message : "";
                o("WALogger").ERROR(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId failed: name=",
                    ", message=",
                    ", targetDevice=",
                    ""
                ])), n, m, p, e.slice(0, 8)).sendLogs("voip: switchAudioOutputSinkIdInternal setSinkId failed");
                return false;
            }
        });
        return Oe.apply(this, arguments);
    }
    function Be(e, t, n) {
        return n === true && t === "default" && (e.sinkId === "" || e.sinkId === "default");
    }
    function We(e, t, n) {
        if (n !== true) {
            o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e);
        }
        me(e);
        de = e;
        Ie(t, "output-switch", ue(), e);
    }
    function qe(e, t, n) {
        return Ue.apply(this, arguments);
    }
    function Ue() {
        Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            return Fe(e, t, "AV:switchAudioOutputDeviceInternal", n);
        });
        return Ue.apply(this, arguments);
    }
    l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents;
    l.coalescedEnumerateDevices = ae;
    l.isAnonymizedDeviceList = ie;
    l.getCurrentSelectedAudioDevice = ue;
    l.getCurrentSelectedAudioOutputDevice = pe;
    l.saveAudioOutputDevicePreference = _e;
    l.selectAudioOutputDevice = fe;
    l.selectAudioDevice = he;
    l.getAvailableAudioDevices = be;
    l.getAvailableAudioOutputDevices = Se;
    l.switchAudioInputDeviceInternal = De;
    l.applyPreferredAudioOutputSink = Ne;
    l.switchAudioOutputSinkIdInternal = Fe;
    l.switchAudioOutputDeviceInternal = qe;
}, 98);