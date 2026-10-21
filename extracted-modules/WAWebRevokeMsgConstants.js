__d("WAWebRevokeMsgConstants", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    const e = 2.5 * o("WATimeUtils").DAY_SECONDS;
    const s = 12 * o("WATimeUtils").HOUR_SECONDS;
    const u = 30 * o("WATimeUtils").DAY_SECONDS;
    l.REVOKE_WINDOW = e;
    l.REVOKE_WINDOW_RECEIVER_MARGIN = s;
    l.NEWSLETTER_REVOKE_WINDOW = u;
}, 98);