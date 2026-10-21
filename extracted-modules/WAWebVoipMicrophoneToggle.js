__d("WAWebVoipMicrophoneToggle", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipCallStateUtils",
    "WAWebVoipMicrophoneToggleRequest",
    "WAWebVoipRecoverMicrophoneLoadable",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = {}) {
            const t = e;
            const { onPermissionPrompt, onToggleStarted, targetWindow } = t;
            const a = d();
            if (a == null) {
                return "cancelled";
            }
            try {
                onToggleStarted?.();
                return yield m(a, {
                    onPermissionPrompt,
                    targetWindow
                });
            } finally{
                a.toggleRequest.finish();
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null) {
            return null;
        }
        const newMuteState = !activeCall.selfMicMuted;
        const n = !newMuteState;
        const toggleRequest = o("WAWebVoipMicrophoneToggleRequest").beginMicrophoneToggleRequest({
            isOwnerCurrent: function() {
                return r("WAWebCallCollection").activeCall === activeCall;
            },
            isUnmuting: n
        });
        if (toggleRequest == null) {
            return null;
        }
        const a_isCurrent = toggleRequest.isCurrent;
        const l = function() {
            return a_isCurrent() && o("WAWebVoipCallStateUtils").isCallConnected(activeCall.getState());
        };
        return {
            activeCall,
            isRecoveryCurrent: l,
            isToggleCurrent: a_isCurrent,
            isUnmuting: n,
            newMuteState,
            toggleRequest
        };
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { onPermissionPrompt, targetWindow }) {
            const o = yield _(e, {
                onPermissionPrompt,
                targetWindow
            });
            if (o.result !== "ready") {
                return o.result;
            }
            return g(e, o, {
                onPermissionPrompt,
                targetWindow
            });
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { onPermissionPrompt, targetWindow }) {
            const o = e.isUnmuting && e.isRecoveryCurrent();
            if (e.isUnmuting && !(yield v(e.isToggleCurrent))) {
                return {
                    requiresRecovery: false,
                    result: "cancelled"
                };
            }
            const requiresRecovery = e.isUnmuting && (o || e.isRecoveryCurrent());
            const i = yield E({
                isRecoveryCurrent: e.isRecoveryCurrent,
                isToggleCurrent: e.isToggleCurrent,
                isUnmuting: e.isUnmuting,
                onPermissionPrompt,
                requiresRecovery,
                targetWindow
            });
            return {
                requiresRecovery,
                result: i
            };
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, { onPermissionPrompt, targetWindow }) {
            const l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (l?.type !== "web") {
                return "cancelled";
            }
            const s = yield y(t, n, {
                onPermissionPrompt,
                targetWindow
            });
            if (s.result !== "ready") {
                return s.result;
            }
            if (!b({
                isConnectedAtApply: o("WAWebVoipCallStateUtils").isCallConnected(t.activeCall.getState()),
                isRecoveryCurrent: t.isRecoveryCurrent,
                isToggleCurrent: t.isToggleCurrent,
                isUnmuting: t.isUnmuting,
                requiresRecovery: s.requiresRecovery
            })) {
                return "cancelled";
            }
            o("WAWebVoipBlockedMicrophoneJoinState").forgetBlockedMicrophoneMuteAndJoin(t.activeCall.id);
            const u = yield l.setCallMute(t.newMuteState);
            if (u !== 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [microphone toggle] setCallMute failed with status: ",
                    ""
                ])), u);
                return "cancelled";
            }
            return "applied";
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { onPermissionPrompt, targetWindow }) {
            if (!e.isUnmuting || t.requiresRecovery || !e.isRecoveryCurrent()) {
                return t;
            }
            return {
                requiresRecovery: true,
                result: yield E({
                    isRecoveryCurrent: e.isRecoveryCurrent,
                    isToggleCurrent: e.isToggleCurrent,
                    isUnmuting: e.isUnmuting,
                    onPermissionPrompt,
                    requiresRecovery: true,
                    targetWindow
                })
            };
        });
        return C.apply(this, arguments);
    }
    function b({ isConnectedAtApply, isRecoveryCurrent, isToggleCurrent, isUnmuting, requiresRecovery }) {
        const i = requiresRecovery ? isRecoveryCurrent() : isToggleCurrent();
        return i && (!isUnmuting || requiresRecovery || !isConnectedAtApply);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebVoipStackInterface").getCachedVoipStackInterface() ?? (yield o("WAWebVoipStackInterface").getVoipStackInterface());
            return e() && n?.type === "web";
        });
        return S.apply(this, arguments);
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const activeCall = r("WAWebCallCollection").activeCall;
            const t = activeCall?.getState();
            if (activeCall == null || activeCall.selfMicMuted || t == null || o("WAWebVoipCallStateUtils").isCallTerminal(t)) {
                return "cancelled";
            }
            const n = o("WAWebVoipMicrophoneToggleRequest").beginMicrophoneToggleRequest({
                isOwnerCurrent: function() {
                    return r("WAWebCallCollection").activeCall === activeCall;
                },
                isUnmuting: false
            });
            if (n == null) {
                return "cancelled";
            }
            try {
                const a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                const i = activeCall.getState();
                if (!n.isCurrent() || activeCall.selfMicMuted || i == null || o("WAWebVoipCallStateUtils").isCallTerminal(i) || a?.type !== "web") {
                    return "cancelled";
                }
                const l = yield a.setCallMute(true);
                if (l !== 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [permission-loss mute] setCallMute failed with status: ",
                        ""
                    ])), l);
                    return "cancelled";
                }
                return "applied";
            } finally{
                n.finish();
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isRecoveryCurrent, isToggleCurrent, isUnmuting, onPermissionPrompt, requiresRecovery, targetWindow }) {
            if (!isUnmuting) {
                return "ready";
            }
            if (!requiresRecovery) {
                const s = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone", targetWindow?.navigator);
                if (isToggleCurrent()) {
                    if (s === "denied") {
                        return "permission_denied";
                    }
                    if (s === "prompt") {
                        if (onPermissionPrompt != null) {
                            onPermissionPrompt();
                        }
                    }
                    return "ready";
                }
                return "cancelled";
            }
            const u = yield o("WAWebVoipRecoverMicrophoneLoadable").prepareMicrophoneForUnmuteLoadable({
                isCallCurrent: isRecoveryCurrent,
                onPermissionPrompt,
                targetWindow
            });
            if (u === "permission_denied") {
                return "permission_denied";
            }
            if (u !== "ready" || !isRecoveryCurrent()) {
                return "cancelled";
            }
            return "ready";
        });
        return k.apply(this, arguments);
    }
    l.toggleActiveCallMicrophone = u;
    l.muteActiveCallMicrophoneForPermissionLoss = R;
}, 98);