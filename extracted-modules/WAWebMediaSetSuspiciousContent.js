__d("WAWebMediaSetSuspiciousContent", [
    "WAWebSuspiciousContent"
], function(t, n, r, o, a, i, l) {
    function e(e, suspiciousContent) {
        for (const [r] of e.msgs){
            const a = r.mediaData;
            if (a != null && a.suspiciousContent !== o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_IGNORE) {
                a.set({
                    suspiciousContent
                });
            }
        }
    }
    l.setSuspiciousContentOnMediaObject = e;
}, 98);