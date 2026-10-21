__d("WAWebPollPendingUpdatesCleanup", [
    "WALogger",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() && !o("WAWebPollsGatingUtils").isPollTCCleanupEnabled())) {
                yield o("WAWebDBPollsPendingUpdatesStore").deleteForPollKeys(e);
            }
        });
        return u.apply(this, arguments);
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebPollsGatingUtils").isPollTCCleanupEnabled()) {
                try {
                    yield o("WAWebDBPollsPendingUpdatesStore").purgeExpiredPendingUpdates(o("WAWebPollsGatingUtils").getPollPendingUpdatesDaysValid());
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[polls/tc] failed to purge expired poll pending updates"
                    ]))).sendLogs("poll-tc-pending-updates-purge-failed");
                }
            }
        });
        return d.apply(this, arguments);
    }
    l.deletePollPendingUpdatesForParents = s;
    l.cleanExpiredPollPendingUpdates = c;
}, 98);