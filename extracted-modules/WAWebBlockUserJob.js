__d("WAWebBlockUserJob", [
    "WALogger",
    "WASmaxBlocklistsUpdateBlockListRPC",
    "WASmaxPsaChatBlockSetRPC",
    "WAWebApiContact",
    "WAWebLidAwareContactsDB",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(blockingAction) {
            const n = {
                blockingAction
            };
            const r = yield o("WASmaxPsaChatBlockSetRPC").sendChatBlockSetRPC(n);
            e: {
                const a = r;
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.name === "ChatBlockSetResponseServerError" && (typeof a.value === "object" && a.value !== null || typeof a.value === "function") && (typeof a.value.errorChatBlockError === "object" && a.value.errorChatBlockError !== null || typeof a.value.errorChatBlockError === "function") && (typeof a.value.errorChatBlockError.value === "object" && a.value.errorChatBlockError.value !== null || typeof a.value.errorChatBlockError.value === "function") && "code" in a.value.errorChatBlockError.value && "text" in a.value.errorChatBlockError.value) {
                    const i = a.value.errorChatBlockError.value.code;
                    const l = a.value.errorChatBlockError.value.text;
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "blockUnblockPSAUser: server response with ",
                        ", ",
                        ""
                    ])), i, l);
                    return {
                        errorCode: Number(i),
                        errorText: l
                    };
                    break e;
                }
                if ((typeof a === "object" && a !== null || typeof a === "function") && a.name === "ChatBlockSetResponseSuccess") {
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${a}`);
            }
        });
        return p.apply(this, arguments);
    }
    function _(bizOptOutArgs) {
        if (bizOptOutArgs == null) {
            return null;
        }
        return {
            bizOptOutReason: bizOptOutArgs.reason,
            bizOptOutReasonDescription: bizOptOutArgs.reasonDescription,
            bizOptOutEntryPoint: bizOptOutArgs.entryPoint,
            bizOptOutFirstMessage: bizOptOutArgs.firstMessage,
            bizOptOutBusinessDiscoveryEntryPoint: bizOptOutArgs.businessDiscoveryEntryPoint,
            bizOptOutBusinessDiscoveryTimestamp: bizOptOutArgs.businessDiscoveryTimestamp,
            bizOptOutBusinessDiscoveryId: bizOptOutArgs.businessDiscoveryId
        };
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebUserPrefsMultiDevice").getBlocklistHash();
            const updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs = e.lid ? yield h(e.lid, e.action) : C(e.wid, e.action);
            const r = _(e.bizOptOutArgs);
            const a = {
                bizOptOutArgs: r ?? null,
                itemDhash: t ?? null,
                updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs
            };
            const i = yield o("WASmaxBlocklistsUpdateBlockListRPC").sendUpdateBlockListRPC(a);
            switch(i.name){
                case "UpdateBlockListResponseInvalidRequest":
                    {
                        const l = i.value.errorUpdateBlocklistErrors.value;
                        const { code, text } = l;
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "blockUnblockUser: server response with ",
                            ", ",
                            ""
                        ])), code, text);
                        return {
                            errorCode: Number(code),
                            errorText: text
                        };
                    }
                case "UpdateBlockListResponseServerError":
                    {
                        const p = i.value.errorServerErrors.value;
                        const { code, text } = p;
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "blockUnblockUser: server response with ",
                            ", ",
                            ""
                        ])), code, text);
                        return {
                            errorCode: Number(code),
                            errorText: text
                        };
                    }
                default:
                    i.name;
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "block/unblock ",
                        ": success"
                    ])), e.bizOptOutArgs != null ? "biz" : "user");
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebWidToJid").userLidtoLidUserJid(e);
            if (t === "block") {
                const r = yield b(e);
                return {
                    updateBlockListBlockItem: {
                        updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs: {
                            updateBlockListMigratedBlockItem: {
                                itemJid: n,
                                blocklistIdsArgs: S(r)
                            }
                        }
                    }
                };
            }
            return {
                updateBlockListUnblockItem: {
                    itemJid: n
                }
            };
        });
        return y.apply(this, arguments);
    }
    function C(wid, action) {
        const n = o("WAWebWidToJid").widToUserJid(wid);
        if (action === "block") {
            return {
                updateBlockListBlockItem: {
                    updateBlockListOrUpdateBlockListNonMigratedBlockItemMixinGroupArgs: {
                        updateBlockListNonMigratedBlockItem: {
                            itemJid: n
                        }
                    }
                }
            };
        }
        return {
            updateBlockListUnblockItem: {
                itemJid: n
            }
        };
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield r("WAWebLidAwareContactsDB").get(e.toString());
            if (!t) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] getBlocklistIdentifier: no lid contact ",
                    ""
                ])), e).sendLogs("no-lid-contact");
                return null;
            }
            if (t.phoneNumber != null && t.username != null) {
                if (t.name != null) {
                    return {
                        pn: o("WAWebWidFactory").createUserWidOrThrow(t.phoneNumber)
                    };
                }
                return {
                    username: o("WAWebUsernameTypes").serializeUsername(t.username)
                };
            }
            if (t.username != null) {
                return {
                    username: o("WAWebUsernameTypes").serializeUsername(t.username)
                };
            }
            const pn = o("WAWebApiContact").getPhoneNumber(e);
            if (pn != null) {
                return {
                    pn
                };
            }
            if (t.displayNameLID != null) {
                return {
                    displayName: t.displayNameLID
                };
            }
            return null;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        if (e == null) {
            return {
                isUnknownIdentifier: true
            };
        }
        if (e.pn != null) {
            return {
                pnJid: {
                    anyPnJid: o("WAWebWidToJid").widToUserJid(e.pn)
                }
            };
        }
        if (e.username != null) {
            return {
                username: {
                    anyUsername: e.username
                }
            };
        }
        e.displayName;
        return {
            displayName: {
                anyDisplayName: e.displayName
            }
        };
    }
    l.blockUnblockPSAUser = m;
    l.blockUnblockUser = f;
    l.getBlocklistIdentifier = b;
}, 98);