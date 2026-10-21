__d("WAWebSearchByDateUtils", [
    "WAWebDBSearchByDate",
    "WAWebMsgKey",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return Math.floor(e / 1000);
    }
    function s({ beforeSearch, incomingCandidate, outgoingCandidate }) {
        let a = null;
        if (incomingCandidate != null && outgoingCandidate != null) {
            if (beforeSearch) {
                a = incomingCandidate.t >= outgoingCandidate.t ? incomingCandidate.id : outgoingCandidate.id;
            } else {
                a = incomingCandidate.t <= outgoingCandidate.t ? incomingCandidate.id : outgoingCandidate.id;
            }
        } else if (incomingCandidate) {
            a = incomingCandidate.id;
        } else if (outgoingCandidate) {
            a = outgoingCandidate.id;
        }
        if (a != null) {
            return r("WAWebMsgKey").fromString(a);
        }
        return null;
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, endTimestampSeconds, searchingBefore, startTimestampSeconds }) {
            const incomingCandidate = yield o("WAWebDBSearchByDate").getClosestMessageBetweenDates({
                chatId,
                endTimestampSeconds,
                incoming: true,
                searchingBefore,
                startTimestampSeconds
            });
            const outgoingCandidate = yield o("WAWebDBSearchByDate").getClosestMessageBetweenDates({
                chatId,
                endTimestampSeconds,
                incoming: false,
                searchingBefore,
                startTimestampSeconds
            });
            return s({
                beforeSearch: searchingBefore,
                incomingCandidate,
                outgoingCandidate
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = e(n.getTime());
            const startTimestampSeconds = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1000;
            const endTimestampSeconds = Date.now();
            const l = yield u({
                chatId: t,
                endTimestampSeconds,
                searchingBefore: false,
                startTimestampSeconds: r
            });
            if (l != null) {
                return l;
            }
            const s = yield u({
                chatId: t,
                endTimestampSeconds: r,
                searchingBefore: true,
                startTimestampSeconds
            });
            s != null;
            return s;
        });
        return m.apply(this, arguments);
    }
    l.fromMillisecondsToSeconds = e;
    l.getClosestMessageFromDate = d;
}, 98);