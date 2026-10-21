__d("WAWebStatusSetAndSyncPrivacy", [
    "WATimeUtils",
    "WAWebCrosspostingBackendGatingUtils",
    "WAWebStatusPrivacySettingSync",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ list, overrideShareToFB, overrideShareToIG, setting }) {
            const s = o("WAWebCrosspostingBackendGatingUtils").crosspostSettingsSyncSenderEnabled();
            const shareToFB = s ? overrideShareToFB ?? (yield o("WAWebUserPrefsStatus").getShareToFB()) : undefined;
            const shareToIG = s ? overrideShareToIG ?? (yield o("WAWebUserPrefsStatus").getShareToIG()) : undefined;
            const d = r("WAWebStatusPrivacySettingSync").getStatusPrivacySettingMutation({
                list: Array.from(new Set(list.map((e)=>e.toString({
                        legacy: true
                    })))),
                setting,
                shareToFB,
                shareToIG,
                timestamp: o("WATimeUtils").unixTimeMs()
            });
            yield o("WAWebSyncdCoreApi").lockForSync([
                "user-prefs"
            ], [
                d
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (s) {
                    if (overrideShareToFB != null) {
                        yield o("WAWebUserPrefsStatus").persistShareToFB(overrideShareToFB);
                    }
                    if (overrideShareToIG != null) {
                        yield o("WAWebUserPrefsStatus").persistShareToIG(overrideShareToIG);
                    }
                }
                return o("WAWebUserPrefsStatus").setStatusPrivacyConfig({
                    setting,
                    list
                });
            }));
        });
        return s.apply(this, arguments);
    }
    l.setAndSyncStatusPrivacy = e;
}, 98);