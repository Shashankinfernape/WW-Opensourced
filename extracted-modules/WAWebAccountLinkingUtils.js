__d("WAWebAccountLinkingUtils", [
    "WAWebAccountLinkingConstants"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case 0:
                return o("WAWebAccountLinkingConstants").AccountLinkState.Active;
            case 1:
                return o("WAWebAccountLinkingConstants").AccountLinkState.Paused;
            case 2:
                return o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked;
            default:
                return o("WAWebAccountLinkingConstants").AccountLinkState.Unknown;
        }
    }
    function s() {
        const e = navigator;
        const t = e.globalPrivacyControl;
        return t ?? false;
    }
    l.mapToAccountLinkState = e;
    l.checkGPCSetting = s;
}, 98);