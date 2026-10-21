__d("WAWebQrDeviceLinkingQpl", [
    "WAWebAutoLogoutGating",
    "WAWebLinkDeviceExperience",
    "WAWebPairingType",
    "WAWebQplFlowWrapper",
    "justknobx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const s = r("justknobx")._("4967") ?? 300000;
    const u = r("qpl")._(891431698, "3260");
    function c(e) {
        window.addEventListener("beforeunload", e);
        return function() {
            window.removeEventListener("beforeunload", e);
        };
    }
    const d = (()=>{
        function e() {}
        const t = e.prototype;
        t.$4 = function(t) {
            this.$1?.addPoint(t);
        };
        t.$5 = function(t) {
            this.$1?.end(t);
            this.$1 = null;
            window.clearTimeout(this.$2);
            this.$3?.();
        };
        t.initialize = function(t) {
            const e = this;
            if (this.$1 != null) {
                this.$5(105);
            }
            if (r("justknobx")._("4836")) {
                this.$1 = o("WAWebQplFlowWrapper").QPL.markerStart(u, {
                    trackedForLoss: true,
                    cancelOnUnload: true,
                    annotations: {
                        bool: {
                            in_auto_logout_iframe: o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()
                        },
                        int: {
                            md_link_device_experience_id: o("WAWebLinkDeviceExperience").getWebCompanionLinkDeviceExperienceId(t)
                        },
                        string: {
                            code_type: o("WAWebPairingType").PairingType.QR_CODE
                        }
                    }
                });
            }
            this.$2 = window.setTimeout(function() {
                e.$4("timeout_expired_2min");
                e.$5(113);
            }, s);
            this.$3 = c(function() {
                e.$4("before_unload");
                e.$5(706);
            });
        };
        t.switchToPhoneNumber = function() {
            this.$4("switch_to_phone_number");
            this.$5(105);
        };
        t.qrCodeInitialised = function() {
            this.$4("qr_code_initialised");
        };
        t.qrCodeRefreshed = function() {
            this.$4("qr_code_refreshed");
        };
        t.qrCodeRegRefreshed = function() {
            this.$4("qr_code_reg_refreshed");
        };
        t.qrCodeExpired = function() {
            this.$4("qr_code_expired");
        };
        t.qrCodeReloaded = function() {
            this.$4("qr_code_reloaded");
        };
        t.regRefreshNotificationReceived = function() {
            this.$4("companion_reg_refresh_notification_received");
        };
        t.pairStarted = function() {
            this.$4("pair_started");
        };
        t.pairSuccess = function() {
            this.$4("pair_success");
            this.$5(2);
        };
        t.pairFailed = function() {
            this.$4("pair_failed");
            this.$5(3);
        };
        t.stayLoggedInToggleClicked = function(t) {
            this.$4(t ? "stay_logged_in_enabled" : "stay_logged_in_disabled");
            this.$5(105);
        };
        return e;
    })();
    const m = new d;
    l.companionDeviceLinkingScreenQpl = m;
}, 98);