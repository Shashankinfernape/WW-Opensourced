__d("WAWebBroadcastMessageDropdownMenu.react", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastProMessageActions.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebCopyUtils",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcContentCopy.react",
    "WDSIconIcGrade.react",
    "WDSIconIcInfo.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastEntrypointEnabled",
    "useWAWebIsBizBroadcastProChat"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useState } = c;
    const p = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastMessageDropdownMenu.react");
    const _ = r("JSResourceForInteraction")("WAWebBroadcastDuplicateFromThreadHandler").__setRef("WAWebBroadcastMessageDropdownMenu.react");
    function f(e) {
        const t = o("react-compiler-runtime").c(48);
        const { msg, onStarClick, onUnstarClick } = e;
        const isBusinessBroadcastEnabled = o("useWAWebBizBroadcastEntrypointEnabled").useWAWebBizBroadcastEntrypointEnabled(false);
        let c;
        if (t[0] !== msg) {
            c = o("WAWebFrontendMsgGetters").getChat(msg);
            t[0] = msg;
            t[1] = c;
        } else {
            c = t[1];
        }
        const f = r("useWAWebIsBizBroadcastProChat")(c);
        const h = useState(false);
        const y = h[0];
        const C = h[1];
        const b = msg.id.fromMe ? msg.pmCampaignId : null;
        const v = isBusinessBroadcastEnabled && b == null;
        let S;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            S = [];
            t[2] = S;
        } else {
            S = t[2];
        }
        useEffect(g, S);
        let R;
        let L;
        if (t[3] !== v || t[4] !== msg.id.id) {
            R = function() {
                if (v) {
                    o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(msg.id.id).then((e)=>{
                        C(e != null);
                    });
                }
            };
            L = [
                v,
                msg.id.id
            ];
            t[3] = v;
            t[4] = msg.id.id;
            t[5] = R;
            t[6] = L;
        } else {
            R = t[5];
            L = t[6];
        }
        useEffect(R, L);
        let E;
        let k;
        if (t[7] !== v) {
            E = function() {
                if (v && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled()) {
                    o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastTileViewed(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD);
                }
            };
            k = [
                v
            ];
            t[7] = v;
            t[8] = E;
            t[9] = k;
        } else {
            E = t[8];
            k = t[9];
        }
        useEffect(E, k);
        let I;
        if (t[10] !== y || t[11] !== f || t[12] !== isBusinessBroadcastEnabled || t[13] !== v || t[14] !== msg || t[15] !== onStarClick || t[16] !== onUnstarClick || t[17] !== b) {
            I = [];
            if (b != null) {
                let T;
                if (t[19] !== isBusinessBroadcastEnabled || t[20] !== msg || t[21] !== b) {
                    T = u.jsx(r("WAWebBizBroadcastProMessageActions.react"), {
                        campaignId: b,
                        isBusinessBroadcastEnabled,
                        msg
                    }, "pro-message-actions");
                    t[19] = isBusinessBroadcastEnabled;
                    t[20] = msg;
                    t[21] = b;
                    t[22] = T;
                } else {
                    T = t[22];
                }
                I.push(T);
            }
            if (v && y) {
                let D;
                if (t[23] !== msg) {
                    D = function() {
                        const e = o("WAWebFrontendMsgGetters").getChat(msg);
                        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, msg.id.toString());
                        p.load().then((T1)=>{
                            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<T1 chat={e} msgId={msg.id.id}/>, {
                                transition: "slide-left"
                            });
                        });
                    };
                    t[23] = msg;
                    t[24] = D;
                } else {
                    D = t[24];
                }
                const x = D;
                let $;
                if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
                    $ = s._("Broadcast details");
                    t[25] = $;
                } else {
                    $ = t[25];
                }
                let P;
                if (t[26] !== x) {
                    const Component = r("WDSMenuItem.react");
                    P = <Component key="broadcast-details" Icon={r("WDSIconIcInfo.react")} title={$} onPress={x} testid="mi-broadcast-details"/>;
                    t[26] = x;
                    t[27] = P;
                } else {
                    P = t[27];
                }
                I.push(P);
            }
            if (v && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled()) {
                let N;
                if (t[28] !== msg) {
                    N = function() {
                        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD);
                        _.load().then((e)=>e(msg));
                    };
                    t[28] = msg;
                    t[29] = N;
                } else {
                    N = t[29];
                }
                const M = N;
                let w;
                if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
                    w = s._("Duplicate broadcast");
                    t[30] = w;
                } else {
                    w = t[30];
                }
                let A;
                if (t[31] !== M) {
                    const Component = r("WDSMenuItem.react");
                    A = <Component key="duplicate-broadcast" Icon={r("WDSIconIcContentCopy.react")} title={w} onPress={M} testid="mi-duplicate-broadcast"/>;
                    t[31] = M;
                    t[32] = A;
                } else {
                    A = t[32];
                }
                I.push(A);
            }
            if (f && o("WAWebCopyUtils").canCopyMessage(msg)) {
                let F;
                if (t[33] === Symbol.for("react.memo_cache_sentinel")) {
                    F = s._("Copy");
                    t[33] = F;
                } else {
                    F = t[33];
                }
                let O;
                if (t[34] !== msg) {
                    const Component = r("WDSMenuItem.react");
                    O = <Component key="copy" Icon={r("WDSIconIcContentCopy.react")} title={F} onPress={function() {
                        return o("WAWebCopyUtils").copyMessageToClipboard(msg);
                    }} testid="copy-label"/>;
                    t[34] = msg;
                    t[35] = O;
                } else {
                    O = t[35];
                }
                I.push(O);
            }
            if (o("WAWebMsgActionCapability").canStarMsg(msg)) {
                let B;
                if (t[36] !== msg.id || t[37] !== onStarClick) {
                    B = function() {
                        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, msg.id.toString(), true);
                        onStarClick();
                    };
                    t[36] = msg.id;
                    t[37] = onStarClick;
                    t[38] = B;
                } else {
                    B = t[38];
                }
                const W = B;
                let q;
                if (t[39] !== msg.id || t[40] !== onUnstarClick) {
                    q = function() {
                        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, msg.id.toString(), false);
                        onUnstarClick();
                    };
                    t[39] = msg.id;
                    t[40] = onUnstarClick;
                    t[41] = q;
                } else {
                    q = t[41];
                }
                const U = q;
                if (msg.star) {
                    let V;
                    if (t[42] === Symbol.for("react.memo_cache_sentinel")) {
                        V = s._("Unstar");
                        t[42] = V;
                    } else {
                        V = t[42];
                    }
                    let H;
                    if (t[43] !== U) {
                        const Component = r("WDSMenuItem.react");
                        H = <Component key="star" Icon={r("WDSIconWdsIcGradeSlash.react")} title={V} onPress={U} testid="mi-msg-unstar"/>;
                        t[43] = U;
                        t[44] = H;
                    } else {
                        H = t[44];
                    }
                    I.push(H);
                } else if (!o("WAWebMsgGetters").getIsKept(msg)) {
                    let G;
                    if (t[45] === Symbol.for("react.memo_cache_sentinel")) {
                        G = s._("Star");
                        t[45] = G;
                    } else {
                        G = t[45];
                    }
                    let z;
                    if (t[46] !== W) {
                        const Component = r("WDSMenuItem.react");
                        z = <Component key="star" Icon={r("WDSIconIcGrade.react")} title={G} onPress={W} testid="mi-msg-star"/>;
                        t[46] = W;
                        t[47] = z;
                    } else {
                        z = t[47];
                    }
                    I.push(z);
                }
            }
            t[10] = y;
            t[11] = f;
            t[12] = isBusinessBroadcastEnabled;
            t[13] = v;
            t[14] = msg;
            t[15] = onStarClick;
            t[16] = onUnstarClick;
            t[17] = b;
            t[18] = I;
        } else {
            I = t[18];
        }
        return I;
    }
    function g() {
        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.messageContextMenuOpened();
    }
    l.default = f;
}, 226);