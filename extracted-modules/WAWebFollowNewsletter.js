__d("WAWebFollowNewsletter", [
    "fbt",
    "Promise",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNewsletterFollowQPLLogger",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSubscribeAction",
    "WAWebPDFNGatingUtils",
    "WAWebPDFNModal.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t, a) {
        if (o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos()) {
            return t();
        }
        return new (e || (e = n("Promise")))((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                a.markPDFNShown();
                const Component = r("WAWebPDFNModal.react");
                o("WAWebModalManager").ModalManager.open(<Component pdfnId={o("WAWebPDFNGatingUtils").getNewsletterNuxOrTos()} verifyTosAccepted={o("WAWebPDFNGatingUtils").hasAckedNewsletterNuxOrTos} runIfTosAccepted={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    a.markPDFNDismissed();
                    yield t();
                    e();
                })} onCancel={function() {
                    a.markPDFNDismissed();
                    a.end(105);
                    e();
                }}/>);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function m(e) {
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: e
        }));
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = new (o("WAWebNewsletterFollowQPLLogger")).WAWebNewsletterFollowQPLLogger({
                markerId: 1026960759,
                eventSurface: t.eventSurface,
                discoverySurface: t.discoverySurface,
                eventUnit: t.eventUnit
            });
            const a = (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        yield o("WAWebNewsletterSubscribeAction").subscribeToNewsletterAction(e, t, r);
                        r.end(2);
                        m(s._("{=m0}", [
                            s._implicitParam("=m0", <div>{s._("Following {channel_name}", [
                                s._param("channel_name", c.jsx(o("WAWebName.react").Name, {
                                    chat: e
                                }))
                            ])}</div>)
                        ]));
                    } catch (error) {
                        yield h(error, r);
                    }
                });
                return function() {
                    return a.apply(this, arguments);
                };
            })();
            return d(a, r);
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = new (o("WAWebNewsletterFollowQPLLogger")).WAWebNewsletterFollowQPLLogger({
                markerId: 1026960759,
                eventSurface: t.eventSurface,
                discoverySurface: t.discoverySurface,
                eventUnit: t.eventUnit
            });
            const e_newsletterMetadata = e.newsletterMetadata;
            if (e_newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsPreview(e_newsletterMetadata)) {
                const i = (()=>{
                    const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            if (e.msgs.length === 0) {
                                yield o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(e, {
                                    messageCount: 1
                                });
                            }
                            yield o("WAWebNewsletterSubscribeAction").subscribeToNewsletterAction(e, t, r);
                            r.end(2);
                        } catch (error) {
                            yield h(error, r);
                            throw error;
                        }
                    });
                    return function() {
                        return a.apply(this, arguments);
                    };
                })();
                yield d(i, r);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                n = e.status;
            }
            t?.end(3);
            if (n === 419) {
                m(s._("This channel has reached the follower limit. Please try again later."));
            } else if (n === 405) {
                m(s._("This channel is closed to new followers. Try again later."));
            } else if (n === 451) {
                const r = yield o("WAWebCommonNewsletterIntegrityStrings").getGeosuspendedInYourCountryString();
                m(r);
            } else {
                m(s._("Couldn't follow this channel. Please try again later."));
            }
        });
        return y.apply(this, arguments);
    }
    l.followNewsletter = p;
    l.followDirectoryNewsletter = f;
}, 226);