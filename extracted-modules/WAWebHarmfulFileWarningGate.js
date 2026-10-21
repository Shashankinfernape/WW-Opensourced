__d("WAWebHarmfulFileWarningGate", [
    "WAWebL10N",
    "WAWebMediaTypes",
    "WAWebSuspiciousContent"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = e.mediaData?.mediaStage;
        if (n !== o("WAWebMediaTypes").MediaDataStage.RESOLVED && n !== o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED) {
            return false;
        }
        return s(e);
    }
    function s(e) {
        return e.mediaData?.suspiciousContent === o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP;
    }
    function u(e) {
        e.mediaData?.set({
            suspiciousContent: o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_IGNORE
        });
    }
    function c() {
        const e = r("WAWebL10N").getNormalizedLocale();
        return `https://faq.whatsapp.com/cxt/?entrypointid=maybe-harmful-file&platform=web&lang=${e}`;
    }
    l.shouldOpenHarmfulFileWarningModal = e;
    l.shouldShowHarmfulFileWarning = s;
    l.markUserAcceptedHarmfulFileWarning = u;
    l.getHarmfulFileLearnMoreUrl = c;
}, 98);