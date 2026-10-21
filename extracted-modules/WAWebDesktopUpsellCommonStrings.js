__d("WAWebDesktopUpsellCommonStrings", [
    "fbt",
    "WAWebDesktopUpsellUtils"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("Get the app");
    }
    function u(t) {
        const n = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        if (n == null) {
            return e();
        }
        const r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
        if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2 || r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) {
            return s._("Download app");
        }
        switch(n){
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                return s._("Download");
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                if (t === true) {
                    return s._("Download beta app");
                }
                return s._("Get from App Store");
        }
    }
    function c(e) {
        const t = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        if (t == null) {
            return null;
        }
        switch(t){
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                return s._("Get WhatsApp for Windows");
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                if (e) {
                    return s._("Download the beta Mac app");
                }
                return s._("Get WhatsApp for Mac");
        }
    }
    function d(e) {
        const n = o("WAWebDesktopUpsellUtils").getUserDesktopOs() ?? o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS;
        const r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
        if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2) {
            switch(n){
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                    return s._("Calling is available on the Windows app");
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                    return s._("Calling is available on the Mac app");
            }
        }
        if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) {
            switch(n){
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                    return s._("Get more features on the Windows app");
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                    return s._("Get more features on the Mac app");
            }
        }
        switch(n){
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                return s._("Download WhatsApp for Windows");
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                if (e === true) {
                    return s._("Download the beta Mac app");
                }
                return s._("Download WhatsApp for Mac");
        }
    }
    function m(e) {
        const n = o("WAWebDesktopUpsellUtils").getUserDesktopOs() ?? o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS;
        const r = o("WAWebDesktopUpsellUtils").getEmptyStateUpsellBannerVariant();
        if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant2) {
            switch(n){
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                    return s._("Get all the features from WhatsApp Web, plus calls and screen share.");
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                    return s._("Get all the features from WhatsApp Web, plus calls and screen share.");
            }
        }
        if (r === o("WAWebDesktopUpsellUtils").EmptyStateUpsellBannerVariantEnum.Variant3) {
            switch(n){
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                    return s._("Join calls, share your screen, and get a faster experience.");
                case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                    return s._("Join calls, share your screen, and get a faster experience.");
            }
        }
        switch(n){
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS:
                return s._("Get extra features like voice and video calling, screen sharing and more.");
            case o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS:
                if (e === true) {
                    return s._("Be the first to try out new features, share your feedback, and help make WhatsApp even better.");
                }
                return s._("Make calls and get a faster experience when you download the Mac app.");
        }
    }
    l.getDesktopAppDownloadBtnLabel = e;
    l.getDesktopAppDownloadFromStoreBtnLabel = u;
    l.getDesktopUpsellToastbarLabel = c;
    l.getDesktopUpsellDownloadWhatsAppTitle = d;
    l.getDesktopUpsellIntroPanelText = m;
}, 226);