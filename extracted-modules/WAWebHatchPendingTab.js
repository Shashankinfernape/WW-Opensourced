__d("WAWebHatchPendingTab", [
    "WAWebExternalLink.react",
    "WAWebHatchConnectInfoDecoder"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = window.open("", "_blank");
        if (e != null) {
            e.opener = null;
        }
        return {
            close: function() {
                e?.close();
            },
            navigate: function(n) {
                if (!o("WAWebHatchConnectInfoDecoder").isUsableHttpsUrl(n)) {
                    e?.close();
                    return;
                }
                if (e == null || e.closed === true) {
                    o("WAWebExternalLink.react").openExternalLink(n, {
                        noApiCmdHandling: true
                    });
                    return;
                }
                e.location.replace(n);
            }
        };
    }
    l.openHatchPendingTab = e;
}, 98);