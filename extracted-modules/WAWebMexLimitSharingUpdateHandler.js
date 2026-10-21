__d("WAWebMexLimitSharingUpdateHandler", [
    "WAWebLimitSharingPropMappingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { xwa2_notify_group_on_prop_change }) {
            const initiatedBy = o("WAWebWidFactory").createWid(xwa2_notify_group_on_prop_change.updated_by.id);
            const u = o("WAWebLimitSharingPropMappingUtils").getLimitSharingTriggerFromGroupSettingsChange(xwa2_notify_group_on_prop_change.properties.limit_sharing?.limit_sharing_trigger);
            const c = Number(xwa2_notify_group_on_prop_change.update_time);
            const d = {
                initiatedBy,
                sharingLimited: xwa2_notify_group_on_prop_change.properties.limit_sharing?.limit_sharing_enabled ?? false,
                trigger: u,
                limitSharingSettingTimestamp: c
            };
            const m = xwa2_notify_group_on_prop_change.properties.limit_sharing?.limit_companion_sharing_enabled;
            const p = m == null ? null : {
                enabled: m,
                trigger: u,
                settingTimestamp: c,
                initiatedBy
            };
            yield o("WAWebLimitSharingProtoUtils").updateGroupWithLimitSharingIfNewer(e.from.toString(), d, p);
        });
        return s.apply(this, arguments);
    }
    l.mexHandleLimitSharingUpdate = e;
}, 98);