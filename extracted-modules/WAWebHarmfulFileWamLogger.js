__d("WAWebHarmfulFileWamLogger", [
    "WAWebABProps",
    "WAWebDangerousFileOpenStatsV2WamEvent",
    "WAWebHarmfulFileSenderRelationshipResolver",
    "WAWebWamEnumHarmfulFileWarningSenderRelationship"
], function(t, n, r, o, a, i, l) {
    function e(harmfulFileWarningClickthroughAction, t) {
        if (o("WAWebABProps").getABPropConfigValue("harmful_file_dialog_logging") === true) {
            new (o("WAWebDangerousFileOpenStatsV2WamEvent")).DangerousFileOpenStatsV2WamEvent({
                harmfulFileWarningClickthroughAction,
                harmfulFileWarningSenderRelationship: s(t)
            }).commit();
        }
    }
    function s(e) {
        if (e === o("WAWebHarmfulFileSenderRelationshipResolver").HarmfulFileSenderRelationship.CONTACT) {
            return o("WAWebWamEnumHarmfulFileWarningSenderRelationship").HARMFUL_FILE_WARNING_SENDER_RELATIONSHIP.CONTACT;
        }
        return o("WAWebWamEnumHarmfulFileWarningSenderRelationship").HARMFUL_FILE_WARNING_SENDER_RELATIONSHIP.NON_CONTACT;
    }
    l.logHarmfulFileWarningInteraction = e;
}, 98);