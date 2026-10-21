__d("WAWebContactSearchExperienceLogger", [
    "WAWebContactSearchExperienceWamEvent",
    "WAWebWamEnumSearchActionName"
], function(t, n, r, o, a, i, l) {
    class e {
        log(t) {
            const e = new (o("WAWebContactSearchExperienceWamEvent")).ContactSearchExperienceWamEvent(t);
            if (e.isUsernameSearch == null) {
                e.isUsernameSearch = false;
            }
            e.commit();
        }
        logKeyPromptShown(t) {
            this.log(babelHelpers.extends({}, t, {
                isUsernameSearch: true,
                searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION
            }));
        }
        logKeyEntryErrorShown(t, keyEntryErrorType) {
            this.log(babelHelpers.extends({}, t, {
                isUsernameSearch: true,
                searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.PIN_VERFICATION_ERROR_SHOWN,
                keyEntryErrorType
            }));
        }
    }
    const s = new e;
    l.ContactSearchExperienceLogger = s;
}, 98);