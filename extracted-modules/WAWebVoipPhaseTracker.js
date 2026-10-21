__d("WAWebVoipPhaseTracker", [
    "WALogger",
    "WAWebAppTracker",
    "WAWebCallCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set;
    const u = new Set;
    let c = 0;
    function d(e, t) {
        if (t && !o("WAWebAppTracker").AppTracker.isRunning(e)) {
            o("WAWebAppTracker").AppTracker.start(e);
        } else if (!t && o("WAWebAppTracker").AppTracker.isRunning(e)) {
            o("WAWebAppTracker").AppTracker.stop(e);
        }
    }
    function m() {
        const e = r("WAWebCallCollection").activeCall != null;
        if (e && s.size > 0) {
            s.clear();
        }
        d(o("WAWebAppTracker").AppTrackerType.VoipPreCall, s.size > 0);
        d(o("WAWebAppTracker").AppTrackerType.VoipPostCall, u.size > 0 && !e && s.size === 0);
    }
    function p(e) {
        s.add(e);
        m();
    }
    function _(e) {
        if (s.delete(e)) {
            m();
        }
    }
    function f() {
        const e = `pcw:${++c}`;
        u.add(e);
        m();
        return e;
    }
    function g(e) {
        if (u.delete(e)) {
            m();
        }
    }
    function h() {
        r("WAWebCallCollection").on("change:activeCall", m);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[voip:phaseTracker] observer started"
        ])));
    }
    function y() {
        let e;
        s.clear();
        u.clear();
        c = 0;
        (e = o("WAWebAppTracker")).AppTracker.stop(e.AppTrackerType.VoipPreCall);
        e.AppTracker.stop(e.AppTrackerType.VoipPostCall);
    }
    l.reconcileVoipPhases = m;
    l.notePreCallStart = p;
    l.notePreCallEnd = _;
    l.beginPostCallWork = f;
    l.endPostCallWork = g;
    l.startVoipPhaseObserver = h;
    l.resetVoipPhasesForTest = y;
}, 98);