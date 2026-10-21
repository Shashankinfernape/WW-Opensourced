__d("WAWebWamTimeSpentLogger", [
    "WAWebCmd",
    "WAWebPathfinderLogger",
    "WAWebTimeSpentLoggingBitArray",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebTimeSpentLoggingSession",
    "WAWebUseIdleSessionRotation",
    "WAWebUserActivityWamEvent",
    "WAWebUserPrefsKeys",
    "WAWebWamTimeSpentArray",
    "react",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    const d = -5;
    const m = [
        {
            source: window,
            name: "focus"
        },
        {
            source: document,
            name: "wheel"
        },
        {
            source: document,
            name: "keydown"
        },
        {
            source: document,
            name: "mouseover"
        },
        {
            source: document,
            name: "mousemove"
        },
        {
            source: document,
            name: "click"
        },
        {
            source: document,
            name: "scroll"
        }
    ];
    const loggingCallback = function(t) {
        const e = new (o("WAWebUserActivityWamEvent")).UserActivityWamEvent({
            userActivitySessionId: t.sessionId,
            userActivityStartTime: t.startTime,
            userActivityBitmapLen: t.bitmapLen,
            userActivityBitmapLow: t.bitmap[0],
            userActivitySessionSeq: t.sessionSeq,
            userActivitySessionCum: t.sessionCum
        });
        if (t.bitmapLen > 32) {
            e.userActivityBitmapHigh = t.bitmap[1];
        }
        e.commit();
    };
    function _() {
        let e;
        const t = r("useLazyRef")(function() {
            return Date.now();
        });
        const nRef = useRef(-1);
        const aRef = useRef(-1);
        const i = r("useLazyRef")(function() {
            return new (r("WAWebWamTimeSpentArray"))({
                loggingCallback
            });
        });
        const l = r("useLazyRef")(o("WAWebTimeSpentLoggingSession").createTimeSpentArray);
        const callback = function(r) {
            const i_current = i.current;
            const l_current = l.current;
            if (!(!i_current && !l_current)) {
                if (r instanceof MouseEvent) {
                    if (r.pageX === nRef.current && r.pageY === aRef.current && r.type !== "click") {
                        return;
                    }
                    nRef.current = r.pageX;
                    aRef.current = r.pageY;
                }
                const s = f(t.current);
                if (s != null) {
                    t.current = s.now;
                    if (s.shouldUpdateArrays) {
                        if (i_current != null) {
                            i_current.update(t.current);
                        }
                        if (l_current != null) {
                            l_current.update(t.current);
                        }
                    }
                }
            }
        };
        const d = function() {
            if (i.current) {
                i.current.ship(function(e) {
                    o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(e, o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT);
                });
                i.current = null;
            }
            if (l.current) {
                l.current.ship(function(e) {
                    o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(o("WAWebTimeSpentLoggingSession").preprocessTsArrayData(e), o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT);
                });
                i.current = null;
            }
            o("WAWebTimeSpentLoggingNavigation").setPendingBackgroundNavigation();
        };
        useEffect(function() {
            o("WAWebTimeSpentLoggingBitArray").flushBitarrays(o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT, loggingCallback);
            return function() {
                if (i.current) {
                    i.current.ship();
                    i.current = null;
                }
            };
        }, []);
        useEffect(function() {
            o("WAWebTimeSpentLoggingBitArray").flushBitarrays(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT, o("WAWebTimeSpentLoggingBitArray").postTsBitArrayEvent);
            return function() {
                if (l.current) {
                    l.current.ship();
                    l.current = null;
                }
            };
        }, []);
        o("WAWebUseIdleSessionRotation").useIdleSessionRotation(o("WAWebPathfinderLogger").resetPathfinderSessionState);
        (e = o("useWAWebListener")).useListener(window, "beforeunload", d);
        e.useListener(window, "blur", o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation);
        e.useListener(o("WAWebCmd").Cmd, "logout_from_bridge", function() {
            o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation();
        });
        e.useListener(window, "focus", o("WAWebTimeSpentLoggingNavigation").logTsForegroundNavigation);
        e.useListeners(m.map(({ name, source })=>({
                source,
                eventOrEvents: name,
                callback,
                opts: {
                    passive: true,
                    capture: true
                }
            })));
        return null;
    }
    function f(e) {
        const now = Date.now();
        const n = now - e;
        if (n > 0) {
            return {
                now,
                shouldUpdateArrays: true
            };
        }
        if (n < d) {
            return {
                now,
                shouldUpdateArrays: false
            };
        }
        return null;
    }
    l.default = _;
}, 98);