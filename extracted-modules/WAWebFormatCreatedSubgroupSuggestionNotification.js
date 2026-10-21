__d("WAWebFormatCreatedSubgroupSuggestionNotification", [
    "fbt",
    "WAWebFormatParticipantNames",
    "WAWebSystemMessageGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
        const r = o("WAWebFormatParticipantNames").getFormattedName({
            clickable: n,
            jid: e
        });
        const a = t[0];
        const i = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
        if (i) {
            return s._("{suggestion-owner} suggested the group \"{suggested-group-name}\"", [
                s._param("suggestion-owner", r),
                s._param("suggested-group-name", a)
            ]);
        }
        return s._("{suggestion-owner} suggested the group \"{suggested-group-name}\". Click to approve or reject.", [
            s._param("suggestion-owner", r),
            s._param("suggested-group-name", a)
        ]);
    }
    l.default = e;
}, 226);