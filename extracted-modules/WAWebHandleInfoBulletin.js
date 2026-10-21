__d("WAWebHandleInfoBulletin", [
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxClientExpirationClientExpirationRPC",
    "WATimeUtils",
    "WAWebDirtyBitsConsts",
    "WAWebHandleInfoBulletinTypes",
    "WAWebHandleRecoveryNonceIB",
    "WAWebHandleReportServerSyncNotification",
    "WAWebHandleRoutingInfo",
    "WAWebHandleServerClientExpiration",
    "WAWebMessageDedupUtils",
    "WAWebOfflineHandler",
    "WAWebParseThreadMetadata",
    "WAWebThreadMetadata",
    "WAWebTos",
    "asyncToGeneratorRuntime",
    "cr:1175",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = n("cr:1175") ?? {};
    const p_handleDirtyBits = p.handleDirtyBits;
    const f = new (r("WADeprecatedWapParser"))("infoBulletinParser", function(e) {
        e.assertTag("ib");
        e.assertFromServer();
        if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.DIRTY)) {
            const unsupported = [];
            const supported = [];
            const protocols = [];
            e.forEachChildWithTag(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.DIRTY, function(e) {
                const a = {
                    type: e.attrString("type"),
                    timestamp: e.attrInt("timestamp")
                };
                if (a.type === "account_sync") {
                    const i = e.mapChildren(function(e) {
                        return e.tag();
                    });
                    i.forEach((e)=>{
                        if (Object.hasOwn(o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_PROTOCOLS, e)) {
                            protocols.push(e);
                        }
                    });
                    supported.push(a);
                } else {
                    if (Object.hasOwn(o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE, a.type)) {
                        supported.push(a);
                    } else {
                        unsupported.push(a);
                    }
                }
            });
            return {
                type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.DIRTY,
                supported,
                unsupported,
                protocols
            };
        } else if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING)) {
            const a = e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING);
            return {
                type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING,
                edgeRouting: a.child("routing_info").contentBytes(),
                domain: a.hasChild("dns_domain") ? a.child("dns_domain").contentEnum(o("WAWebHandleRoutingInfo").DOMAINS) : null
            };
        } else {
            if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE)) {
                return {
                    count: e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE).attrInt("count"),
                    type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE
                };
            }
            if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PRIORITY_COMPLETE)) {
                return {
                    type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PRIORITY_COMPLETE
                };
            }
            if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PREVIEW)) {
                let i;
                return {
                    count: {
                        count: e.child((i = o("WAWebHandleInfoBulletinTypes")).INFO_TYPE.OFFLINE_PREVIEW).attrInt("count"),
                        message: e.child(i.INFO_TYPE.OFFLINE_PREVIEW).attrInt("message"),
                        receipt: e.child(i.INFO_TYPE.OFFLINE_PREVIEW).attrInt("receipt"),
                        notification: e.child(i.INFO_TYPE.OFFLINE_PREVIEW).attrInt("notification"),
                        call: e.child(i.INFO_TYPE.OFFLINE_PREVIEW).attrInt("call")
                    },
                    type: i.INFO_TYPE.OFFLINE_PREVIEW
                };
            } else if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.TOS)) {
                const noticeIds = [];
                e.child("tos").forEachChildWithTag("notice", function(e) {
                    noticeIds.push(e.attrString("id"));
                });
                return {
                    type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.TOS,
                    noticeIds
                };
            } else {
                if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.THREAD_META)) {
                    return {
                        type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.THREAD_META,
                        threadMeta: o("WAWebParseThreadMetadata").parseThreadMetadata(e)
                    };
                }
                if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.CLIENT_EXPIRATION)) {
                    const s = o("WASmaxClientExpirationClientExpirationRPC").receiveClientExpirationRPC(e.getNode());
                    const u = s.parsedRequest.clientExpirationT;
                    const newClientExpirationTime = u != null ? o("WATimeUtils").castToUnixTime(u) : null;
                    return {
                        type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.CLIENT_EXPIRATION,
                        newClientExpirationTime
                    };
                } else if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.RECOVERY_NONCE)) {
                    const d = e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.RECOVERY_NONCE);
                    return {
                        type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.RECOVERY_NONCE,
                        code: d.attrString("code"),
                        useCase: d.attrInt("use_case")
                    };
                }
            }
        }
        return null;
    });
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = f.parse(e);
            if (t.error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                throw t.error;
            }
            const t_success = t.success;
            if (!t_success) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleInfoBulletin unrecognized info bulletin"
                ])));
                return;
            }
            switch(t_success.type){
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.DIRTY:
                    if (!p_handleDirtyBits) {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "handleInfoBulletin dirty bits not supported"
                        ])));
                        return;
                    }
                    yield p_handleDirtyBits(t_success);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING:
                    yield o("WAWebHandleRoutingInfo").handleRoutingInfo(t_success);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE:
                    o("WAWebOfflineHandler").OfflineMessageHandler.processOfflineIb(t_success.count).catch((e)=>{
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "handleInfoBulletin processOfflineIb failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("offline-ib-failed", {
                            sampling: 0.01
                        });
                    });
                    o("WAWebHandleReportServerSyncNotification").reportOfflineNotifications();
                    o("WAWebMessageDedupUtils").maybeClearPendingMessages(t_success.count);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PREVIEW:
                    yield o("WAWebOfflineHandler").OfflineMessageHandler.processOfflinePreviewIb(t_success.count);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.TOS:
                    o("WAWebTos").TosManager.maybeUpdateServer(t_success.noticeIds).catch((e)=>{
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "handleInfoBulletin maybeUpdateServer failed"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("tos-update-failed", {
                            sampling: 0.01
                        });
                    });
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.THREAD_META:
                    o("WAWebThreadMetadata").setOfflineThreadMeta(t_success.threadMeta);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.CLIENT_EXPIRATION:
                    yield o("WAWebHandleServerClientExpiration").handleServerClientExpiration(t_success.newClientExpirationTime);
                    return "NO_ACK";
                case o("WAWebHandleInfoBulletinTypes").INFO_TYPE.RECOVERY_NONCE:
                    r("WAWebHandleRecoveryNonceIB")(t_success.code, t_success.useCase);
                    return "NO_ACK";
                default:
                    return;
            }
        });
        return h.apply(this, arguments);
    }
    l.default = g;
}, 98);