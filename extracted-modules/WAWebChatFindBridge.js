__d("WAWebChatFindBridge", [
    "WAWebApiHydrateWidsUtil",
    "WAWebChatViewMode.flow",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().get(e, false);
            if (t) {
                return o("WAWebApiHydrateWidsUtil").hydrateWids(babelHelpers.extends({}, t, {
                    chatViewMode: t.chatViewMode ?? o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE
                }));
            }
            return null;
        });
        return s.apply(this, arguments);
    }
    l.findLocal = e;
}, 98);