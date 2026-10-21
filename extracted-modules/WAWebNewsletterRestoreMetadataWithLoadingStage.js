__d("WAWebNewsletterRestoreMetadataWithLoadingStage", [
    "WAWebNewsletterLoadingStageManager",
    "WAWebNewsletterMetadataInitFromStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped() && o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.stage === o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.None;
            if (e) {
                o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.start();
            }
            try {
                yield o("WAWebNewsletterMetadataInitFromStorage").restoreNewsletterMetadata();
                if (e && o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.stage === o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Loading) {
                    o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.end();
                }
            } catch (t) {
                if (e && o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.stage === o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.Loading) {
                    o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.end();
                }
                throw t;
            }
        });
        return s.apply(this, arguments);
    }
    l.restoreNewsletterMetadataWithLoadingStage = e;
}, 98);