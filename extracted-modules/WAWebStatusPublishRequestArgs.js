__d("WAWebStatusPublishRequestArgs", [
    "WALogger",
    "WAStanzaUtils",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgCommon",
    "WAWebLidMigrationUtils",
    "WAWebSendMsgCommonApi",
    "WAWebUserPrefsStatusType",
    "WAWebWidToJid",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const encElementValue = new Uint8Array(0);
    function p(e) {
        e: {
            if (e === o("WAWebBackendJobs.flow").CiphertextType.Msg) {
                return "msg";
            }
            if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
                return "pkmsg";
            }
            throw e === o("WAWebBackendJobs.flow").CiphertextType.Skmsg || e === o("WAWebBackendJobs.flow").CiphertextType.Msmsg ? r("err")(`toStatusEncType: unsupported sender key distribution type ${String(e)}`) : Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        }
    }
    function _(encV) {
        switch(encV){
            case 2:
                return {
                    isEncVersion2: true
                };
            case 3:
                return {
                    isEncVersion3: true
                };
            default:
                return {
                    encVersionFutureproof: {
                        encV
                    }
                };
        }
    }
    const f = {
        isStatusContentTypeText: true
    };
    function g(t) {
        e: {
            if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media) {
                return {
                    isStatusContentTypeMedia: true
                };
            }
            if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction) {
                return {
                    isStatusContentTypeReaction: true
                };
            }
            if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text) {
                return {
                    isStatusContentTypeText: true
                };
            }
            if (t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event || t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify || t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.pay || t === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "toStatusContentTypeArgs: unmodelled status content type sent as text"
                ]))).sendLogs("status-publish-unmodelled-content-type");
                return f;
                break e;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        }
    }
    const h = new Map([
        [
            o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction,
            {
                metaContentType: "add_on"
            }
        ]
    ]);
    function y(e) {
        if (e == null) {
            return null;
        }
        const encMediatype = b(e);
        if (encMediatype == null) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "toStatusEncMediaTypeArgs: media type not modelled by status_publish"
            ]))).sendLogs("status-publish-unmodelled-media-type");
            return null;
        }
        return {
            encMediatype
        };
    }
    function C(encMediaType) {
        const t = y(encMediaType);
        if (t != null) {
            return {
                encMediaType: t
            };
        }
        return null;
    }
    function b(e) {
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Image) {
            return "image";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Video) {
            return "video";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Ptv) {
            return "ptv";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Audio) {
            return "audio";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Ptt) {
            return "ptt";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Location) {
            return "location";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.VCard) {
            return "vcard";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Document) {
            return "document";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Url) {
            return "url";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Gif) {
            return "gif";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.ContactArray) {
            return "contact_array";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Sticker) {
            return "sticker";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.StickerPack) {
            return "sticker_pack";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.ListResponse) {
            return "list_response";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Order) {
            return "order";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Product) {
            return "product";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse) {
            return "native_flow_response";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.GroupHistory) {
            return "group_history";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse) {
            return "buttons_response";
        }
        if (e === o("WAWebBackendJobs.flow").EncMediaType.Button || e === o("WAWebBackendJobs.flow").EncMediaType.Call || e === o("WAWebBackendJobs.flow").EncMediaType.Future || e === o("WAWebBackendJobs.flow").EncMediaType.Hsm || e === o("WAWebBackendJobs.flow").EncMediaType.List || e === o("WAWebBackendJobs.flow").EncMediaType.LiveLocation || e === o("WAWebBackendJobs.flow").EncMediaType.MdAppState || e === o("WAWebBackendJobs.flow").EncMediaType.MdHistorySync || e === o("WAWebBackendJobs.flow").EncMediaType.Music || e === o("WAWebBackendJobs.flow").EncMediaType.ProductImage || e === o("WAWebBackendJobs.flow").EncMediaType.ProfilePic || e === o("WAWebBackendJobs.flow").EncMediaType.Template) {
            return null;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function v(e, t) {
        const n = o("WAWebSendMsgCommonApi").getEditAttrValue(e, t);
        if (n == null) {
            return null;
        }
        if (n === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
            return {
                isStatusRevoke: true
            };
        }
        if (n === o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT) {
            return {
                isStatusEdit: true
            };
        }
        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "toStatusEditOrRevokeArgs: edit value not modelled by status_publish"
        ]))).sendLogs("status-publish-unmodelled-edit-attr");
        return null;
    }
    function S(e) {
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList) {
            return "allowlist";
        }
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList) {
            return "denylist";
        }
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) {
            return "contacts";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function R(e) {
        return {
            metaStatusSetting: S(e)
        };
    }
    function L({ ciphertextVersion, encMediaType, hideDecryptFail, participants, senderKeyDistributions }) {
        const encVersionArgs = _(ciphertextVersion);
        const encMediaTypeOrListMixinGroupArgs = C(encMediaType);
        const toArgs = senderKeyDistributions.map(({ ciphertext, isPqSession, participant, type })=>({
                statusToDeviceOrUserMixinGroupArgs: {
                    statusToDevice: {
                        toJid: o("WAWebWidToJid").widToDeviceJid(participant),
                        encTypeIndividualMixinArgs: {
                            encType: p(type),
                            encElementValue: new Uint8Array(ciphertext),
                            encMediaTypeOrListMixinGroupArgs,
                            encStateOrSessionTypeMixinGroupArgs: isPqSession ? {
                                isEncSessionType: true
                            } : null
                        },
                        hasStatusEncHideDecryptFail: hideDecryptFail ? true : null,
                        encVersionArgs
                    }
                }
            }));
        let m = 0;
        let f = 0;
        for (const g of participants){
            const h = o("WAWebLidMigrationUtils").toUserLid(g);
            if (h == null) {
                f++;
                continue;
            }
            if (!o("WAWebSendMsgCommonApi").isPrimaryDevice(g)) {
                m++;
            }
            toArgs.push({
                statusToDeviceOrUserMixinGroupArgs: {
                    statusToUser: {
                        toJid: o("WAWebWidToJid").userLidtoLidUserJid(h)
                    }
                }
            });
        }
        if (m > 0) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "toStatusFanoutArgs: a bare <to> cannot carry a device number, so ",
                " of ",
                " participants lost theirs"
            ])), m, participants.length).sendLogs("status-publish-companion-participant");
        }
        if (f > 0) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "toStatusFanoutArgs: skipped ",
                " of ",
                " participants without a LID mapping"
            ])), f, participants.length).sendLogs("status-publish-participant-without-lid");
        }
        if (toArgs.length > 0) {
            return {
                toArgs
            };
        }
        return null;
    }
    function E(reportingTokenElementMixinArgs) {
        if (reportingTokenElementMixinArgs != null) {
            return {
                clientReportingTokenMixinArgs: {
                    reportingTokenElementMixinArgs
                }
            };
        }
        return null;
    }
    function k(e) {
        const { ciphertextVersion, clientReportingToken, editOrRevoke, encMediaType, participants, senderKeyCiphertext, senderKeyDistributions, statusSetting } = e;
        return babelHelpers.extends({}, D(e), {
            statusEncSettingMixinArgs: statusSetting != null ? R(statusSetting) : null,
            statusBroadcastPublishTypeMixinsArgs: {
                statusBroadcastRegular: {
                    encArgs: [
                        {
                            encMediaTypeMixinArgs: y(encMediaType),
                            encVersionArgs: _(ciphertextVersion),
                            encTypeEncTypeSenderKeyOrEncTypeOneTimeSenderKeySenderKeyMixinGroupArgs: {
                                encTypeSenderKey: {
                                    encElementValue: senderKeyCiphertext
                                }
                            }
                        }
                    ],
                    statusEncFanoutMixinArgs: L({
                        ciphertextVersion,
                        encMediaType: null,
                        hideDecryptFail: false,
                        participants,
                        senderKeyDistributions
                    }),
                    statusReportingMixinArgs: E(clientReportingToken),
                    statusEditOrRevokeMixinGroupArgs: editOrRevoke
                }
            }
        });
    }
    function I(e) {
        const { ciphertextVersion, clientReportingToken, deviceEncs, editOrRevoke, encMediaType, hideDecryptFail } = e;
        const s = L({
            ciphertextVersion,
            encMediaType,
            hideDecryptFail,
            participants: [],
            senderKeyDistributions: deviceEncs
        });
        if (s == null) {
            throw r("err")("toStatusDirectPublishArgs: directed status has no recipients");
        }
        return babelHelpers.extends({}, D(e), {
            statusBroadcastPublishTypeMixinsArgs: {
                statusBroadcastDirected: {
                    statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs: {
                        statusEncFanoutSenderKeyEmpty: babelHelpers.extends({}, s, {
                            encTypeSenderKeyEmptyMixinArgs: {
                                encElementValue
                            },
                            encVersionArgs: _(ciphertextVersion)
                        })
                    },
                    statusReportingMixinArgs: E(clientReportingToken),
                    statusEditOrRevokeMixinGroupArgs: editOrRevoke
                }
            }
        });
    }
    function T(e) {
        const { ciphertextVersion, clientReportingToken, editOrRevoke, encMediaType, hideDecryptFail, retryCount, retryEnc } = e;
        const { ciphertext, isPqSession, participant, type } = retryEnc;
        return babelHelpers.extends({}, D(e), {
            statusBroadcastPublishTypeMixinsArgs: {
                statusBroadcastDirected: {
                    statusDirectedRetryParticipantMixinArgs: {
                        statusParticipant: o("WAWebWidToJid").widToDeviceJid(participant)
                    },
                    statusEncFanoutSenderKeyEmptyOrRetryOrFanoutMixinGroupArgs: {
                        statusEncRetry: {
                            encTypeIndividualMixinArgs: {
                                encType: p(type),
                                encElementValue: new Uint8Array(ciphertext),
                                encMediaTypeOrListMixinGroupArgs: C(encMediaType),
                                encStateOrSessionTypeMixinGroupArgs: isPqSession ? {
                                    isEncSessionType: true
                                } : null
                            },
                            hasStatusEncHideDecryptFail: hideDecryptFail ? true : null,
                            encRetryMixinArgs: retryCount > 0 ? {
                                encCount: retryCount
                            } : null,
                            encVersionArgs: _(ciphertextVersion)
                        }
                    },
                    statusReportingMixinArgs: E(clientReportingToken),
                    statusEditOrRevokeMixinGroupArgs: editOrRevoke
                }
            }
        });
    }
    function D({ deviceIdentity, msgType, statusId, useStatusSessionScope }) {
        return {
            statusId: o("WAStanzaUtils").toStanzaId(statusId),
            deviceIdentityMixinArgs: deviceIdentity != null ? {
                deviceIdentityElementValue: deviceIdentity
            } : null,
            hasStatusEncSessionScope: useStatusSessionScope ? true : null,
            statusEncContentTypeMixinArgs: h.get(msgType) ?? null,
            statusEncContentTypeMixinsArgs: g(msgType)
        };
    }
    l.toStatusEncType = p;
    l.toEncVersionArgs = _;
    l.toStatusContentTypeArgs = g;
    l.toStatusEncMediaTypeArgs = y;
    l.toStatusEditOrRevokeArgs = v;
    l.toStatusSettingMetaAttribute = S;
    l.toStatusSettingArgs = R;
    l.toStatusFanoutArgs = L;
    l.toStatusBroadcastPublishArgs = k;
    l.toStatusDirectPublishArgs = I;
    l.toStatusRetryPublishArgs = T;
}, 98);