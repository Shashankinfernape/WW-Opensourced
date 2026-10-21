__d("useWAWebDesktopUpsellQplImpression", [
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebLinkDeviceExperience",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891423256, "3261");
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(context, n, r) {
            try {
                const a = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
                    annotations: {
                        string: {
                            context
                        },
                        bool: {
                            showing_content_variation: false
                        },
                        int: {
                            md_link_device_experience_id: o("WAWebLinkDeviceExperience").getWebCompanionLinkDeviceExperienceId(r),
                            sourceType: n,
                            upsellExperimentGroup: o("WAWebDesktopUpsellQRCodeBannerExperiment").getWAWebDesktopUpsellQRCodeBannerExperiment()
                        }
                    }
                });
                a.end(2);
            } catch (e) {}
        });
        return u.apply(this, arguments);
    }
    l.logDesktopUpsellQplEvent = s;
}, 98);