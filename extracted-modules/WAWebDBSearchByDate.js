__d("WAWebDBSearchByDate", [
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, endTimestampSeconds, incoming, searchingBefore, startTimestampSeconds }) {
            const s = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(chatId, incoming, false, startTimestampSeconds);
            const u = o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(chatId, incoming, false, endTimestampSeconds);
            const c = yield o("WAWebSchemaMessage").getMessageTable().between([
                "messageRangeIndex"
            ], s, u, {
                lowerInclusive: true,
                upperInclusive: true,
                reverse: searchingBefore,
                limit: e
            }, function(e) {
                return !o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.SEARCH, e.viewMode) || !o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, undefined);
            });
            return c[0];
        });
        return u.apply(this, arguments);
    }
    l.getClosestMessageBetweenDates = s;
}, 98);