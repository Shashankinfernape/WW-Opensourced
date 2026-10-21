__d("WAWebBroadcastEphemeralUtils", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebEphemeralEncodeBroadcastSetting",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityUtils",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "conversation"
    ];
    let d;
    function m(e, { buffer }) {
        if (e.conversation != null) {
            const r = e.conversation;
            const o = babelHelpers.objectWithoutPropertiesLoose(e, c);
            return {
                proto: babelHelpers.extends({}, o, {
                    extendedTextMessage: {
                        text: r,
                        contextInfo: {
                            ephemeralSharedSecret: buffer
                        }
                    }
                }),
                injected: true
            };
        }
        if (e.extendedTextMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    extendedTextMessage: babelHelpers.extends({}, e.extendedTextMessage, {
                        contextInfo: babelHelpers.extends({}, e.extendedTextMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.imageMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    imageMessage: babelHelpers.extends({}, e.imageMessage, {
                        contextInfo: babelHelpers.extends({}, e.imageMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.videoMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    videoMessage: babelHelpers.extends({}, e.videoMessage, {
                        contextInfo: babelHelpers.extends({}, e.videoMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.documentMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    documentMessage: babelHelpers.extends({}, e.documentMessage, {
                        contextInfo: babelHelpers.extends({}, e.documentMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.audioMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    audioMessage: babelHelpers.extends({}, e.audioMessage, {
                        contextInfo: babelHelpers.extends({}, e.audioMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.stickerMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    stickerMessage: babelHelpers.extends({}, e.stickerMessage, {
                        contextInfo: babelHelpers.extends({}, e.stickerMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.interactiveMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    interactiveMessage: babelHelpers.extends({}, e.interactiveMessage, {
                        contextInfo: babelHelpers.extends({}, e.interactiveMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        if (e.productMessage != null) {
            return {
                proto: babelHelpers.extends({}, e, {
                    productMessage: babelHelpers.extends({}, e.productMessage, {
                        contextInfo: babelHelpers.extends({}, e.productMessage.contextInfo, {
                            ephemeralSharedSecret: buffer
                        })
                    })
                }),
                injected: true
            };
        }
        return {
            proto: e,
            injected: false
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = yield o("WAWebSchemaChat").getChatTable().get(e.toString(), false);
            if (a != null) {
                return {
                    duration: a.ephemeralDuration ?? 0,
                    timestamp: a.ephemeralSettingTimestamp ?? 0
                };
            }
            const s = yield (d || (d = n("Promise"))).all([
                o("WAWebApiContact").getContactRecord(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()),
                o("WAWebApiContact").getContactRecord(e)
            ]);
            const u = s[0];
            const c = s[1];
            if (c != null && o("WAWebEphemeralityUtils").isEphemeralityDisabledForMessagingWithContact(c)) {
                return {
                    duration: 0,
                    timestamp: 0
                };
            }
            const m = o("WAWebEphemeralityResolver").resolveNewChatDMSettings(u, c);
            return {
                duration: m?.duration ?? 0,
                timestamp: m?.settingTimestamp ?? 0
            };
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ authorId, broadcastJid, proto, recipient }) {
            const l = yield p(recipient);
            const { duration, timestamp } = l;
            if (duration <= 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] no DM, skip eph rcpt=",
                    " dur=",
                    ""
                ])), recipient.toString(), duration).tags("messaging");
                return {
                    content: proto,
                    ephSetting: null
                };
            }
            const sharedSecret = o("WAWebEphemeralEncodeBroadcastSetting").generateEphemeralSharedSecret();
            const f = m(proto, sharedSecret);
            const { injected, proto: proto_1 } = f;
            if (!injected) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:retry] no secret inject, drop eph rcpt=",
                    ""
                ])), recipient.toString()).tags("messaging");
                return {
                    content: proto,
                    ephSetting: null
                };
            }
            const ephSetting = yield o("WAWebEphemeralEncodeBroadcastSetting").encodeBroadcastEphemeralSetting({
                broadcastJid,
                duration,
                recipient,
                sender: authorId,
                sharedSecret,
                timestamp
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:retry] eph + rcpt=",
                " bcast=",
                " dur=",
                " ts=",
                " len=",
                ""
            ])), recipient.toString(), broadcastJid.toString(), duration, timestamp, ephSetting.length).tags("messaging");
            return {
                content: proto_1,
                ephSetting
            };
        });
        return g.apply(this, arguments);
    }
    l.addSharedSecretToProto = m;
    l.getBroadcastEphemeralSettingForRecipient = p;
    l.buildBroadcastRetryEphemeral = f;
}, 98);