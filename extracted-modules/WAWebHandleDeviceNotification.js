__d("WAWebHandleDeviceNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvDeviceUpdateNotificationApi",
    "WAWebApiContact",
    "WAWebApiPendingDeviceSync",
    "WAWebCommsWapMd",
    "WAWebDBCreateLidPnMappings",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineHandler",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
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
    const g = {
        add: "add",
        remove: "remove",
        update: "update"
    };
    const h = new (r("WADeprecatedWapParser"))("incomingDevicesNotification", function(t) {
        t.assertTag("notification");
        t.assertTag("notification");
        t.assertAttr("type", "devices");
        let n;
        let r;
        let keyIndex_1;
        let deviceList = [];
        if (t.hasChild("remove")) {
            r = g.remove;
            n = t.child("remove");
        } else if (t.hasChild("add")) {
            r = g.add;
            n = t.child("add");
        } else if (t.hasChild("update")) {
            r = g.update;
            n = t.child("update");
        } else {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                '[devices] notif missing "remove" or "add" node'
            ])));
            throw t.createParseError("Failed to parse devices notification");
        }
        if (r === g.add || r === g.remove) {
            const l = n.maybeChild("key-index-list");
            if (!l) {
                throw t.createParseError("key index node is required to handle device add or remove notification");
            }
            const u = l.attrTime("ts");
            if (r === g.remove && !u) {
                throw t.createParseError("timestamp is required to handle device remove notification");
            }
            keyIndex_1 = {
                ts: u,
                signedKeyIndexBytes: r === g.add ? l.contentBytes() : null
            };
            const c = n.child("device");
            const d = o("WAJids").extractDeviceId(c.attrDeviceJid("jid"));
            const keyIndex = c.hasAttr("key-index") ? c.attrInt("key-index") : null;
            if (c.hasAttr("lid")) {
                const p = o("WAJids").extractDeviceId(c.attrDeviceJid("lid"));
                if (p !== d) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[devices] device id mismatch: jid vs lid attr"
                    ])));
                    throw t.createParseError("mismatched device jid and lid attributes");
                }
            }
            deviceList = [
                {
                    id: d,
                    keyIndex
                }
            ];
        }
        return {
            type: r,
            stanzaId: t.attrString("id"),
            hash: r === g.update ? n.attrString("hash") : null,
            user: o("WAWebJidToWid").deviceJidToUserWid(t.attrDeviceJid("from")),
            lidUser: t.hasAttr("lid") ? o("WAWebJidToWid").lidDeviceJidToUserLid(t.attrLidDeviceJid("lid")) : null,
            deviceList,
            keyIndex: keyIndex_1
        };
    });
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = h.parse(e);
            if (t.error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), t.error.toString());
                throw t.error;
            }
            const t_success = t.success;
            const i = o("WAWap").wap("ack", {
                to: o("WAWebCommsWapMd").USER_JID(t_success.user),
                id: o("WAWap").CUSTOM_STRING(t_success.stanzaId),
                class: "notification"
            });
            const l = {
                wid: t_success.user,
                devices: {
                    deviceList: t_success.deviceList,
                    keyIndex: t_success.keyIndex
                },
                type: t_success.type,
                hash: t_success.hash
            };
            const s = t_success.user.isLid() ? o("WAWebLidMigrationUtils").toPn(t_success.user) : t_success.lidUser;
            let y = null;
            if (s != null) {
                y = {
                    wid: s,
                    devices: {
                        deviceList: t_success.deviceList,
                        keyIndex: t_success.keyIndex
                    },
                    type: t_success.type,
                    hash: t_success.hash
                };
            }
            const C = [
                l,
                y
            ].filter(Boolean);
            const b = [];
            if (t_success.lidUser != null && t_success.user != null) {
                b.push({
                    lid: t_success.lidUser,
                    pn: t_success.user
                });
            }
            if (!o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                if (b.length > 0) {
                    yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: b,
                        flushImmediately: false,
                        learningSource: "device-notification"
                    });
                }
                C.forEach(({ wid })=>o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(wid.toString(), i));
                return "NO_ACK";
            }
            if (b.length > 0) {
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: b,
                    flushImmediately: true,
                    learningSource: "device-notification"
                });
            }
            let v = 0;
            let S = 0;
            yield (f || (f = n("Promise"))).all(C.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ devices, hash, type, wid }) {
                    if (o("WAWebOfflineHandler").OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
                        yield o("WAWebApiPendingDeviceSync").addUserToPendingDeviceSync([
                            wid.toString()
                        ]);
                    } else if (t_success.type === g.add) {
                        try {
                            yield o("WAWebAdvDeviceUpdateNotificationApi").handleADVDeviceNotification({
                                wid,
                                devices,
                                type
                            });
                        } catch (error) {
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "handleDevicesNotification - add error: ",
                                ""
                            ])), error);
                        }
                    } else if (t_success.type === g.remove) {
                        try {
                            yield o("WAWebAdvDeviceUpdateNotificationApi").handleADVDeviceNotification({
                                wid,
                                devices,
                                type
                            });
                        } catch (error) {
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "handleDevicesNotification - remove error: ",
                                ""
                            ])), error);
                        }
                    } else if (t_success.type === g.update) {
                        const s = yield o("WAWebApiContact").getContactRecordByHash(r("nullthrows")(hash));
                        if (s == null) {
                            v++;
                        } else {
                            try {
                                yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                                    o("WAWebWidFactory").createWid(s.id)
                                ], "notification", null);
                            } catch (error) {
                                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleDevicesNotification - update error: ",
                                    ""
                                ])), error);
                            }
                        }
                    } else {
                        S++;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (v > 0) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[devices] missing side contact hash for ",
                    " updates"
                ])), v);
            }
            if (S > 0) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleDevicesNotification - ",
                    " unknown notification types: ",
                    ""
                ])), S, t_success.type);
            }
            return i;
        });
        return C.apply(this, arguments);
    }
    l.handleDevicesNotification = y;
}, 98);