__d("WAWebPipController", [
    "WALogger",
    "WAWebEventEmitter",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPipConst",
    "WAWebVoipGatingUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = ((t)=>{
        function n(...i_1) {
            let n;
            n = t.call(this, ...i_1) || this;
            n.openPiP = function(e, t, r) {
                n.manager?.openPiP(o("WAWebPipConst").PiPVideoType.MSG, {
                    msg: e,
                    startTime: t,
                    zoomRect: r,
                    videoSrc: null,
                    preview: null
                });
            };
            n.closePiP = function() {
                n.__pendingAction = null;
                n.manager?.closePiP();
            };
            n.pausePiP = function() {
                n.manager?.pausePiP();
            };
            n.openYoutubePiP = function(videoSrc, a, i, l) {
                o("WAWebMsgRcatUtils").genNonceForMsg(a).then((nonce)=>{
                    const counterAbuseToken = o("WAWebMsgGetters").getRcatString(a);
                    const counterAbuseData = nonce != null && counterAbuseToken != null ? {
                        nonce,
                        counterAbuseToken
                    } : null;
                    n.manager?.openPiP(o("WAWebPipConst").PiPVideoType.YOUTUBE, {
                        msg: a,
                        startTime: i,
                        zoomRect: l,
                        videoSrc,
                        preview: null,
                        counterAbuseData
                    });
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[PiP] openYoutubePiP failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("pip-open-youtube-failed");
                });
            };
            n.openVoipUiPiP = function(e) {
                if (!o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[PiP] openVoipUiPiP: suppressed, native platform owns the call UI"
                    ])));
                    return;
                }
                if (n.manager != null) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[PiP] openVoipUiPiP: delegating to PiPManager"
                    ])));
                    n.__openVoipPiP(e);
                    return;
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiP: manager not ready, deferring"
                ])));
                n.__pendingAction = function() {
                    return n.__openVoipPiP(e);
                };
            };
            n.openVoipUiPiPForCallLink = function() {
                if (!o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[PiP] openVoipUiPiPForCallLink: suppressed, native platform owns the call UI"
                    ])));
                    return;
                }
                if (n.manager != null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[PiP] openVoipUiPiPForCallLink: delegating to PiPManager"
                    ])));
                    n.__openVoipCallLinkPiP();
                    return;
                }
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiPForCallLink: manager not ready, deferring"
                ])));
                n.__pendingAction = function() {
                    return n.__openVoipCallLinkPiP();
                };
            };
            n.openVoipUiPiPForOutgoing = function() {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiPForOutgoing: opening msg-less PiP for outgoing call"
                ])));
                n.openVoipUiPiPForCallLink();
            };
            n.isOpened = function(e) {
                return n.manager?.isOpened(e) ?? false;
            };
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.register = function(t) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[PiP] PiPManager registered"
            ])));
            this.manager = t;
            if (this.__pendingAction != null) {
                const e = this.__pendingAction;
                this.__pendingAction = null;
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] flushing pending PiP action after manager registration"
                ])));
                e();
            }
        };
        n_prototype.unregister = function() {
            this.__pendingAction = null;
            this.manager = null;
        };
        n_prototype.__openVoipPiP = function(t) {
            this.manager?.openPiP(o("WAWebPipConst").PiPVideoType.VOIP, {
                msg: t,
                preview: null,
                startTime: null,
                videoSrc: null,
                zoomRect: null
            });
        };
        n_prototype.__openVoipCallLinkPiP = function() {
            this.manager?.openPiP(o("WAWebPipConst").PiPVideoType.VOIP, {
                msg: null,
                preview: null,
                startTime: null,
                videoSrc: null,
                zoomRect: null
            });
        };
        n_prototype.didOpen = function(t) {
            this.trigger(`${t.id.toString()}_pip_did_open`);
        };
        n_prototype.didClose = function(t) {
            this.trigger(`${t.id.toString()}_pip_did_close`);
        };
        n_prototype.didError = function(t) {
            this.trigger(`${t.id.toString()}_pip_did_error`);
        };
        return n;
    })(r("WAWebEventEmitter"));
    const y = new h;
    l.default = y;
}, 98);