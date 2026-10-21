__d("WAWebBackendJobsCommon", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAStanzaUtils",
    "WAWap",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebGetPlatformFromStanzaId",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebSendMsgCommonApi",
    "WAWebSignalCommonErrors",
    "WAWebUserPrefsMeUser",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eCiphertextType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPlaceholderReasonType",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 2;
    function p(e) {
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) {
            return o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE.SENDER_KEY_MESSAGE;
        }
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
            return o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE.PREKEY_MESSAGE;
        }
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Msg) {
            return o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE.MESSAGE;
        }
        if (e === o("WAWebBackendJobs.flow").CiphertextType.Msmsg) {
            return o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE.MESSAGE_SECRET_MESSAGE;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _({ encMediaType: t, msgPollType: n, msgType: r }) {
        if (r === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
        }
        if (r === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.medianotify) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.MEDIA_EXPRESS_NOTIFY;
        }
        if (n === o("WAWebHandleMsgCommon").POLL_TYPES.creation) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
        }
        if (n === o("WAWebHandleMsgCommon").POLL_TYPES.vote) {
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE;
        }
        if (t) {
            switch(t){
                case o("WAWebBackendJobs.flow").EncMediaType.Image:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
                case o("WAWebBackendJobs.flow").EncMediaType.Video:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
                case o("WAWebBackendJobs.flow").EncMediaType.Ptv:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
                case o("WAWebBackendJobs.flow").EncMediaType.Audio:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
                case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
                case o("WAWebBackendJobs.flow").EncMediaType.Location:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.LOCATION;
                case o("WAWebBackendJobs.flow").EncMediaType.VCard:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT;
                case o("WAWebBackendJobs.flow").EncMediaType.Document:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
                case o("WAWebBackendJobs.flow").EncMediaType.Url:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
                case o("WAWebBackendJobs.flow").EncMediaType.Call:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.CALL;
                case o("WAWebBackendJobs.flow").EncMediaType.Gif:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF;
                case o("WAWebBackendJobs.flow").EncMediaType.Future:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.FUTURE;
                case o("WAWebBackendJobs.flow").EncMediaType.ContactArray:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT_ARRAY;
                case o("WAWebBackendJobs.flow").EncMediaType.LiveLocation:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIVE_LOCATION;
                case o("WAWebBackendJobs.flow").EncMediaType.ProfilePic:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PROFILE_PIC;
                case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
                case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
                case o("WAWebBackendJobs.flow").EncMediaType.Hsm:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.HSM;
                case o("WAWebBackendJobs.flow").EncMediaType.ProductImage:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
                case o("WAWebBackendJobs.flow").EncMediaType.Template:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE;
                case o("WAWebBackendJobs.flow").EncMediaType.MdAppState:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_APP_STATE;
                case o("WAWebBackendJobs.flow").EncMediaType.MdHistorySync:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_HISTORY_SYNC;
                case o("WAWebBackendJobs.flow").EncMediaType.List:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST;
                case o("WAWebBackendJobs.flow").EncMediaType.ListResponse:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST_REPLY;
                case o("WAWebBackendJobs.flow").EncMediaType.Button:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_MESSAGE;
                case o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_RESPONSE_MESSAGE;
                case o("WAWebBackendJobs.flow").EncMediaType.Order:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.ORDER;
                case o("WAWebBackendJobs.flow").EncMediaType.Product:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
                case o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_RESPONSE_NFM;
                case o("WAWebBackendJobs.flow").EncMediaType.GroupHistory:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.GROUP_HISTORY;
                case o("WAWebBackendJobs.flow").EncMediaType.Music:
                    return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            }
        }
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
    }
    function f(e) {
        if (e.deviceSentMessage) {
            const n = e.deviceSentMessage.message;
            if (n) {
                return f(n);
            }
            return null;
        } else if (e.ephemeralMessage) {
            const r = e.ephemeralMessage.message;
            if (r) {
                return f(r);
            }
            return null;
        } else if (e.groupMentionedMessage) {
            const a = e.groupMentionedMessage.message;
            if (a) {
                return f(a);
            }
            return null;
        } else if (e.viewOnceMessageV2Extension) {
            const i = e.viewOnceMessageV2Extension.message;
            if (i) {
                return f(i);
            }
            return null;
        } else if (e.viewOnceMessage) {
            const l = e.viewOnceMessage.message;
            if (l) {
                return f(l);
            }
            return null;
        } else if (e.documentWithCaptionMessage) {
            const s = e.documentWithCaptionMessage.message;
            if (s) {
                return f(s);
            }
            return null;
        } else if (e.spoilerMessage) {
            const u = e.spoilerMessage.message;
            if (u) {
                return f(u);
            }
            return null;
        } else if (e.botInvokeMessage) {
            const c = e.botInvokeMessage.message;
            if (c) {
                return f(c);
            }
            return null;
        } else if (e.associatedChildMessage) {
            const d = e.associatedChildMessage.message;
            if (d) {
                return f(d);
            }
            return null;
        } else if (e.pollCreationOptionImageMessage) {
            const m = e.pollCreationOptionImageMessage.message;
            if (m) {
                return f(m);
            }
            return null;
        } else {
            if (e.imageMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Image;
            }
            if (e.stickerMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Sticker;
            }
            if (e.stickerPackMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.StickerPack;
            }
            if (e.lottieStickerMessage || e.audioStickerMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Sticker;
            }
            if (e.locationMessage) {
                if (e.locationMessage.isLive === true) {
                    return o("WAWebBackendJobs.flow").EncMediaType.LiveLocation;
                }
                return o("WAWebBackendJobs.flow").EncMediaType.Location;
            }
            if (e.contactMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.VCard;
            }
            if (e.contactsArrayMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.ContactArray;
            }
            if (e.documentMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Document;
            }
            if (e.audioMessage) {
                if (e.audioMessage.ptt === true) {
                    return o("WAWebBackendJobs.flow").EncMediaType.Ptt;
                }
                return o("WAWebBackendJobs.flow").EncMediaType.Audio;
            }
            if (e.videoMessage) {
                if (e.videoMessage.gifPlayback === true) {
                    return o("WAWebBackendJobs.flow").EncMediaType.Gif;
                }
                return o("WAWebBackendJobs.flow").EncMediaType.Video;
            }
            if (e.ptvMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Ptv;
            }
            if (e.buttonsMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Button;
            }
            if (e.buttonsResponseMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse;
            }
            if (e.listMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.List;
            }
            if (e.listResponseMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.ListResponse;
            }
            if (e.orderMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Order;
            }
            if (e.productMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Product;
            }
            if (e.groupInviteMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Url;
            }
            if (e.interactiveResponseMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse;
            }
            if (e.messageHistoryBundle) {
                return o("WAWebBackendJobs.flow").EncMediaType.GroupHistory;
            }
            if (e.musicMessage) {
                return o("WAWebBackendJobs.flow").EncMediaType.Music;
            }
            if (e.extendedTextMessage?.matchedText != null && e.extendedTextMessage.matchedText.trim() !== "") {
                return o("WAWebBackendJobs.flow").EncMediaType.Url;
            }
            if (e.questionMessage) {
                const p = e.questionMessage.message;
                if (p) {
                    return f(p);
                }
                return null;
            } else if (e.questionReplyMessage) {
                const _ = e.questionReplyMessage.message;
                if (_) {
                    return f(_);
                }
                return null;
            } else if (e.newsletterAdminProfileMessage) {
                const g = e.newsletterAdminProfileMessage.message;
                if (g) {
                    return f(g);
                }
                return null;
            }
        }
        return null;
    }
    function g(e) {
        const t = function() {
            switch(e){
                case o("WAWebBackendJobs.flow").EncMediaType.Image:
                    return "image";
                case o("WAWebBackendJobs.flow").EncMediaType.Video:
                    return "video";
                case o("WAWebBackendJobs.flow").EncMediaType.Ptv:
                    return "ptv";
                case o("WAWebBackendJobs.flow").EncMediaType.Audio:
                    return "audio";
                case o("WAWebBackendJobs.flow").EncMediaType.Ptt:
                    return "ptt";
                case o("WAWebBackendJobs.flow").EncMediaType.VCard:
                    return "vcard";
                case o("WAWebBackendJobs.flow").EncMediaType.Document:
                    return "document";
                case o("WAWebBackendJobs.flow").EncMediaType.Gif:
                    return "gif";
                case o("WAWebBackendJobs.flow").EncMediaType.ContactArray:
                    return "contact_array";
                case o("WAWebBackendJobs.flow").EncMediaType.Location:
                    return "location";
                case o("WAWebBackendJobs.flow").EncMediaType.LiveLocation:
                    return "livelocation";
                case o("WAWebBackendJobs.flow").EncMediaType.Sticker:
                    return "sticker";
                case o("WAWebBackendJobs.flow").EncMediaType.List:
                    return "list";
                case o("WAWebBackendJobs.flow").EncMediaType.ListResponse:
                    return "list_response";
                case o("WAWebBackendJobs.flow").EncMediaType.ButtonResponse:
                    return "buttons_response";
                case o("WAWebBackendJobs.flow").EncMediaType.Order:
                    return "order";
                case o("WAWebBackendJobs.flow").EncMediaType.Product:
                    return "product";
                case o("WAWebBackendJobs.flow").EncMediaType.Url:
                    return "url";
                case o("WAWebBackendJobs.flow").EncMediaType.NativeFlowResponse:
                    return "native_flow_response";
                case o("WAWebBackendJobs.flow").EncMediaType.StickerPack:
                    return "sticker_pack";
                case o("WAWebBackendJobs.flow").EncMediaType.GroupHistory:
                    return "group_history";
                case o("WAWebBackendJobs.flow").EncMediaType.Music:
                    return "music";
                default:
                    return null;
            }
        };
        const n = t();
        if (n) {
            return o("WAWap").CUSTOM_STRING(n);
        }
        throw r("err")("Unsupported type");
    }
    function h(e) {
        return function(t) {
            if (t == null) {
                return o("WAWap").DROP_ATTR;
            }
            return e(t);
        };
    }
    const y = h(g);
    function C(e) {
        switch(e){
            case o("WAWebBackendJobs.flow").DecryptFailType.Show:
                return o("WAWap").DROP_ATTR;
            case o("WAWebBackendJobs.flow").DecryptFailType.Hide:
                return "hide";
        }
    }
    function b(t, n) {
        if (t instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError) {
            return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.UNKNOWN_COMPANION_NO_PREKEY;
        }
        if (t instanceof o("WAWebSignalCommonErrors").SignalDecryptionError) {
            const a = r("gkx")("26258") ? 0.001 : 0.01;
            switch(t.message){
                case "errSignalNoSession":
                case "errLoadSenderKeySession":
                    return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.SIGNAL_NO_SESSION;
                case "errSignalInvalidMsg":
                    return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.SIGNAL_INVALID_MESSAGE;
                case "errSignalInvalidKey":
                case "errSignalInvalidOneTimeKey":
                case "errSignalInvalidSignedPreKey":
                    try {
                        if (n.msgInfo.chat.isStatus()) {
                            const i = o("WAWebUserPrefsMeUser").isMeAccount(n.msgInfo.author);
                            const l = o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(o("WAStanzaUtils").toStanzaId(n.msgInfo.externalId));
                            const m = n.msgInfo.participantLid == null;
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[getPlaceholderAddReason] invalidKey peer=",
                                " plat=",
                                " lid=",
                                ""
                            ])), i, l, m);
                        }
                    } catch (e) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "error printing extra details for placeholder: ",
                            ""
                        ])), e);
                    }
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "getPlaceholderAddReason errSignalInvalidKey reason"
                    ]))).catching(t).sendLogs("placeholder-add-reason-errSignalInvalidKey", {
                        sampling: a
                    });
                    return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.SIGNAL_INVALID_KEY;
                case "errSignalTooManyMessagesInFuture":
                case "errSignalGrpTooManyMessagesInFuture":
                    return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.SIGNAL_FUTURE_MESSAGE;
                case "errInvalidMacWithDecryptedPlaintext":
                case "errInvalidMacInvalidCipherKey":
                case "errInvalidMacInvalidCipherKeyNewChain":
                    {
                        const p = `MsgPlaceholderBadMac-${t.message}`;
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "getPlaceholderAddReason SignalBadMac reason"
                        ]))).sendLogs(p, {
                            sampling: a
                        });
                        return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.SIGNAL_BAD_MAC;
                    }
            }
            const _ = `MsgPlaceholderOther-${t.message}`;
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "getPlaceholderAddReason Other reason"
            ]))).sendLogs(_, {
                sampling: a
            });
            return o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE.OTHER;
        }
    }
    function v(e) {
        if (e.interactiveResponseMessage) {
            return e.interactiveResponseMessage.nativeFlowResponseMessage?.name;
        }
        return null;
    }
    const S = h(function(e) {
        return o("WAWap").CUSTOM_STRING(e);
    });
    function R(e) {
        switch(e){
            case o("WAWebAck").EDIT_ATTR.SENDER_REVOKE:
                return o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE;
            case o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE:
                return o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE;
            case o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT:
                return o("WAWebWamEnumEditType").EDIT_TYPE.EDITED;
            default:
                return o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
        }
    }
    function L(e, t) {
        const r = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(e) ?? e;
        if (o("WAWebSendMsgCommonApi").isRevokeMsg(r)) {
            if (t.subtype === "admin_revoke") {
                return o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE;
            }
            return o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE;
        }
        if (o("WAWebSendMsgCommonApi").isEditMsg(r)) {
            return o("WAWebWamEnumEditType").EDIT_TYPE.EDITED;
        }
        return o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
    }
    function E(e) {
        if (e) {
            return o("WAJobOrchestratorTypes").JOB_PRIORITY.OFFLINE;
        }
        return o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW;
    }
    l.CIPHERTEXT_VERSION = m;
    l.getMetricE2eCiphertextType = p;
    l.getMetricMediaType = _;
    l.mediaTypeFromProtobuf = f;
    l.encodeMaybeMediaType = y;
    l.encodeMaybeDecryptFail = C;
    l.getPlaceholderAddReason = b;
    l.nativeFlowNameTypeFromProtobuf = v;
    l.encodeMaybeNativeFlowName = S;
    l.getMetricEditType = R;
    l.getMetricEditTypeFromMsg = L;
    l.getNonCriticalNotificationPriority = E;
}, 98);