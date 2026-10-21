__d("WAWebLogStatusPogImpression", [
    "Promise",
    "WAWebClock",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPogImpressionWamEvent",
    "WAWebWamEnumStatusCategory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg, pogIndex, pogOwnerId, statusViewEntrypoint, tsSurface }) {
            const l = yield c(pogOwnerId, msg);
            const { statusGroupId, statusPosterHashId, statusPosterId } = l;
            const p = new (o("WAWebStatusPogImpressionWamEvent")).StatusPogImpressionWamEvent({
                cid: o("WAWebStatusLoggingUtils").channelStatusCid(pogOwnerId),
                pogIndex,
                statusCategory: m(pogOwnerId),
                statusGroupId: statusGroupId ?? undefined,
                statusPosterHashId: statusPosterHashId ?? undefined,
                statusPosterId: statusPosterId ?? undefined,
                statusViewEntrypoint,
                tsSurface
            });
            p.commit();
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = o("WAWebClock").Clock.getServerTime();
            if (t.isNewsletter()) {
                const i = yield o("WAWebStatusLoggingUtils").channelStatusPosterHashId(t, a);
                return {
                    statusGroupId: null,
                    statusPosterHashId: i,
                    statusPosterId: i
                };
            }
            if (r == null) {
                return {
                    statusGroupId: null,
                    statusPosterHashId: null,
                    statusPosterId: null
                };
            }
            const l = yield (e || (e = n("Promise"))).all([
                o("WAWebStatusLoggingUtils").statusPosterIdForLogging(r, a),
                o("WAWebStatusLoggingUtils").statusPosterHashIdForLogging(r, a),
                o("WAWebStatusLoggingUtils").statusGroupIdForLogging(r, a)
            ]);
            const statusPosterId = l[0];
            const statusPosterHashId = l[1];
            const statusGroupId = l[2];
            return {
                statusGroupId,
                statusPosterHashId,
                statusPosterId
            };
        });
        return d.apply(this, arguments);
    }
    function m(pogOwnerId) {
        if (pogOwnerId.isNewsletter()) {
            return o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS;
        }
        if (pogOwnerId.isGroup()) {
            return o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS;
        }
        return o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    l.logStatusPogImpression = s;
}, 98);