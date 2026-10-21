__d("WAWebBootstrapNewsletter", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetMyAddOnsJob",
    "WAWebNewsletterLoadingStageManager",
    "WAWebNoop",
    "WAWebPrimaryFeaturesModel",
    "WAWebQplFlowWrapper",
    "WAWebQueryAndUpdateAllNewslettersMetadataAction",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 5000;
    const _ = r("qpl")._(891434294, "3266");
    let f = null;
    function g() {
        if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
            if (f != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-bootstrap] Bootstrap already ongoing, returning"
                ])));
                return f;
            }
            if (!o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped()) {
                if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterEnabledOnPrimary()) {
                    f = h();
                    return f;
                }
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:newsletter", function() {
                    if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterEnabledOnPrimary()) {
                        f = h();
                        return f;
                    }
                });
            }
        }
    }
    function h() {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-bootstrap] Bootstrap started"
            ])));
            const e = o("WAWebQplFlowWrapper").QPL.markerStart(_);
            const t = ()=>e.end(2);
            const n = ()=>e.end(3);
            const qplEvent = {
                instanceKey: e.instanceKey,
                addPoint: function(n, r) {
                    return e.addPoint(n, r);
                },
                annotate: function(n) {
                    return e.annotate(n);
                },
                end: r("WAWebNoop"),
                drop: function() {
                    return e.drop();
                }
            };
            o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.start();
            try {
                const i = yield o("WAWebQueryAndUpdateAllNewslettersMetadataAction").queryAndUpdateAllNewsletterMetadataAction(o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint.Bootstrap, {
                    messageCount: 1,
                    addSystemMsgs: true,
                    qplEvent
                });
                if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterReactionEnabled()) {
                    yield o("WAWebNewsletterGetMyAddOnsJob").getMyNewsletterAddOnsJob({
                        count: p
                    }).catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[newsletter] Failed to retrieve my reactions on bootstrap"
                        ]))).tags("newsletter").sendLogs("newsletter-bootstrap-my-reactions-failed");
                    });
                }
                o("WAWebUserPrefsMultiDevice").setNewsletterWasBootstrapped();
                if (i.success) {
                    yield o("WAWebSyncdOrphan").checkOrphanChats(i.chats.map((e)=>e.id.toString()));
                    o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.end();
                    t();
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter-bootstrap] Bootstrap completed"
                    ])));
                    if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                        o("WAWebBackendApi").frontendFireAndForget("fillSubscribedStatusGaps", {});
                    }
                } else {
                    n();
                    o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.fail();
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter-bootstrap] Bootstrap failed"
                    ]))).tags("newsletter").sendLogs("newsletter-bootstrap-failed");
                }
            } catch (e) {
                n();
                o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager.fail();
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-bootstrap] Bootstrap failed"
                ]))).tags("newsletter").sendLogs("newsletter-bootstrap-failed");
            } finally{
                f = null;
            }
        });
        return y.apply(this, arguments);
    }
    l.bootstrapNewsletterBackend = g;
}, 98);