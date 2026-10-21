__d("WAWebSyncdValidateMutations", [
    "WACryptoUtils",
    "WALogger",
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = [
        (m = o("WAWebSyncdConst")).Actions.Agent,
        m.Actions.AndroidUnsupportedActions,
        m.Actions.Archive,
        m.Actions.BotWelcomeRequest,
        m.Actions.ChatAssignment,
        m.Actions.ChatAssignmentOpenedStatus,
        m.Actions.ChatLockSettings,
        m.Actions.ClearChat,
        m.Actions.Contact,
        m.Actions.CustomPaymentMethods,
        m.Actions.DeleteChat,
        m.Actions.DeleteMessageForMe,
        m.Actions.DeviceCapabilities,
        m.Actions.DisableLinkPreviews,
        m.Actions.ExternalWebBeta,
        m.Actions.FavoriteSticker,
        m.Actions.LabelEdit,
        m.Actions.LabelJid,
        m.Actions.LabelReordering,
        m.Actions.LocaleSetting,
        m.Actions.LockChat,
        m.Actions.MarkChatAsRead,
        m.Actions.MarketingMessage,
        m.Actions.MarketingMessageBroadcast,
        m.Actions.Mute,
        m.Actions.Nux,
        m.Actions.PaymentInfo,
        m.Actions.Pin,
        m.Actions.PinDEPRECATED,
        m.Actions.PnForLidChat,
        m.Actions.PrimaryFeature,
        m.Actions.PrimaryVersion,
        m.Actions.QuickReply,
        m.Actions.RemoveRecentSticker,
        m.Actions.Sentinel,
        m.Actions.SettingPushName,
        m.Actions.ShareOwnPn,
        m.Actions.Star,
        m.Actions.StatusPrivacy,
        m.Actions.Subscription,
        m.Actions.TimeFormat,
        m.Actions.UnarchiveChatsSetting,
        m.Actions.UserStatusMute,
        m.Actions.Favorites,
        m.Actions.NoteEdit
    ];
    function _(e, t) {
        const n = new Set;
        t.forEach((t)=>{
            const version = t.version.version;
            if (n.has(version)) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.DUPLICATE_PATCH_VERSION_IN_COLLECTION, {
                    collection: e
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("duplicate patch version in collection");
            }
            n.add(version);
        });
    }
    function f(e) {
        if (e == null) {
            return true;
        }
        return p.includes(e);
    }
    function g(t) {
        const n = o("WAWebSyncdConst").Actions.cast(o("WAWebSyncdActionUtils").getMutationNameFromIndex(t.collection, t.index));
        const r = t.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET ? "SET" : "REMOVE";
        if (f(n)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: duplicate ",
                " mutation: ",
                ""
            ])), r, n);
        } else {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: duplicate ",
                " mutation: [not specified]"
            ])), r);
        }
    }
    function h(e, t, n) {
        const r = new Set;
        const a = new Set;
        t.forEach((i)=>{
            let l = false;
            if (i.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET) {
                if (r.has(i.index)) {
                    g(i);
                    l = true;
                } else {
                    r.add(i.index);
                }
            }
            if (i.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE) {
                if (a.has(i.index)) {
                    g(i);
                    l = true;
                } else {
                    a.add(i.index);
                }
            }
            if (l) {
                e: {
                    if (n === o("WAWebSyncdConst").SyncDataType.Patch) {
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH, {
                            collection: e
                        });
                        throw new (o("WAWebSyncdError")).SyncdFatalError("same index for multiple mutations in patch");
                        break e;
                    }
                    if (n === o("WAWebSyncdConst").SyncDataType.Snapshot) {
                        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT, {
                            collection: e,
                            isFatal: false
                        });
                        y(t);
                        break e;
                    }
                    if (n === o("WAWebSyncdConst").SyncDataType.Local) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "validation not required for local mutations"
                        ])));
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                }
            }
        });
    }
    function y(e) {
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: all duplicated actions:"
        ])));
        const t = new Map;
        e.forEach((e)=>{
            if (t.has(e.index)) {
                g(e);
                const n = t.get(e.index);
                if (n == null) {
                    return;
                }
                const r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e.binarySyncData).value;
                const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, n.binarySyncData).value;
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: is using same timestamp? ",
                    "\n          is same key? ",
                    ""
                ])), r?.timestamp === a?.timestamp, o("WACryptoUtils").arrayBuffersEqual(e.keyId, n?.keyId));
            }
            t.set(e.index, e);
        });
    }
    function C(e, t) {
        return t.map((t)=>{
            const n = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t.binarySyncData);
            const n_value = n.value;
            if (!n_value) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VALUE, {
                    collection: e
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing action value");
            }
            const a = o("WALongInt").maybeNumberOrThrowIfTooLarge(n_value.timestamp);
            if (a == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_TIMESTAMP, {
                    collection: e
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing action timestamp");
            }
            return {
                index: t.index,
                version: t.version,
                keyId: t.keyId,
                indexMac: t.indexMac,
                valueMac: t.valueMac,
                collection: t.collection,
                binarySyncData: t.binarySyncData,
                timestamp: a
            };
        });
    }
    l.validateNoDuplicatePatchVersionInCollection = _;
    l.validateNoSameIndexForMultipleMutations = h;
    l.validateAndTypeSetMutations = C;
}, 98);