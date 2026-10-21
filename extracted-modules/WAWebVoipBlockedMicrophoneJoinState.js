__d("WAWebVoipBlockedMicrophoneJoinState", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set;
    let l = null;
    let s = null;
    let u = null;
    let c = null;
    function d(e) {
        l = e;
    }
    function m(e) {
        return l === e;
    }
    function p(e) {
        s = e;
        u = null;
        c = null;
        R();
    }
    function _(e) {
        if (s === e) {
            s = null;
            R();
        }
    }
    function f(e) {
        if (l === e) {
            l = null;
        }
        _(e);
    }
    function g() {
        return s;
    }
    function h(e) {
        if (s !== e || u === e) {
            return false;
        }
        u = e;
        return true;
    }
    function y(e) {
        if (s === e) {
            c = e;
        }
    }
    function C(e) {
        return s === e && c === e;
    }
    function b(e) {
        if (s !== e) {
            return false;
        }
        s = null;
        if (l === e) {
            l = null;
        }
        R();
        return true;
    }
    function v(t) {
        e.add(t);
        return function() {
            e.delete(t);
        };
    }
    function S() {
        e.clear();
        l = null;
        s = null;
        u = null;
        c = null;
    }
    function R() {
        for (const t of e){
            t();
        }
    }
    i.recordBlockedMicrophoneMute = d;
    i.isMutedForBlockedMicrophone = m;
    i.recordBlockedMicrophoneJoin = p;
    i.discardBlockedMicrophoneJoin = _;
    i.forgetBlockedMicrophoneMuteAndJoin = f;
    i.getBlockedMicrophoneJoinCallId = g;
    i.claimBlockedMicrophonePrompt = h;
    i.markBlockedMicrophoneAutoUnmuteStarted = y;
    i.isBlockedMicrophoneAutoUnmuting = C;
    i.takeBlockedMicrophoneJoin = b;
    i.subscribeToBlockedMicrophoneJoin = v;
    i.resetBlockedMicrophoneJoinForTesting = S;
}, 66);