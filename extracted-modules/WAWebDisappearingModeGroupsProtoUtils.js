__d("WAWebDisappearingModeGroupsProtoUtils", [
    "WAWebBackendApi",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityTypes",
    "asyncToGeneratorRuntime",
    "cr:13547"
], function(t, n, r, o, a, i, l) {
    const s = n("cr:13547") ?? {};
    const u = s.syncDisappearingModeTriggerToDB;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            const r = n?.disappearingModeInitiatedByMe;
            if (n != null && e != null && n.disappearingModeTrigger === o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups && e !== o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups) {
                if (u != null) {
                    u(t, e);
                }
                o("WAWebBackendApi").frontendFireAndForget("syncEphemeralTriggerCollectionForGroup", {
                    chatId: t,
                    trigger: e
                });
            }
            if (r != null) {
                return {
                    disappearingModeTrigger: e,
                    disappearingModeInitiatedByMe: r
                };
            }
        });
        return d.apply(this, arguments);
    }
    l.updateDisappearingModeForGroups = c;
}, 98);