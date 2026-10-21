__d("WAWebAddonCommentMsgProcessor", [
    "Promise",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebApiLatestChatBulkUpdates",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebCommentParseWebMsgInfoComment",
    "WAWebCommentUtils",
    "WAWebDBCommentMessageSerialization",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgType",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    var s = o("WAWebAddonCreateMsgProcessor").createAddonMessageProcessorDualEncryptedWithMessageTraits({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
            fromHistorySyncMsg: function(r) {
                const t = o("WAWebCommentParseWebMsgInfoComment").parseWebMsgInfoComment(r);
                return (e || (e = n("Promise"))).resolve(t);
            },
            toDualEncryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.CommentEncrypted) {
                        return e;
                    }
                    return o("WAWebCommentUtils").commentMsgDataToEncCommentMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            toDualDecryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.CommentDecrypted) {
                        return e;
                    }
                    return o("WAWebCommentUtils").encCommentMsgDataToCommentMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebBackendApi").frontendSendAndReceive("upsertCommentModelCollection", {
                    comments: e.add,
                    commentsToRemove: e.remove
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { parents: n }) {
                const r = [];
                for (const a of e){
                    if (a.kind === o("WAWebMsgType").MsgKind.CommentEncrypted) {
                        const i = yield s.convert.toDualDecryptedMsgData(a, n.getForAddon(a));
                        r.push(i);
                    } else {
                        r.push(a);
                    }
                }
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        afterUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { existingPlaceholderKeys: n, parents: r, processMode: a }) {
                if (a !== o("WAWebAddonConstants").AddonProcessMode.SendRetry && (yield o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(e.map((e)=>o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromCommentRowType(o("WAWebDBCommentMessageSerialization").dbRowFromCommentMessage(e)))), a !== o("WAWebAddonConstants").AddonProcessMode.HistorySync)) {
                    const i = n.size > 0 ? e.filter((e)=>!n.has(e.id.toString())) : e;
                    yield o("WAWebCommentUtils").updateReplyCount(i, r, []);
                    const l = yield o("WAWebCommentUtils").genChatIdToLastTimestamp(e);
                    yield o("WAWebApiLatestChatBulkUpdates").latestChatBulkUpdates(l);
                    o("WAWebBackendApi").frontendFireAndForget("updateChatToLatest", {
                        chatIdToLatestUpdates: l
                    });
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WAWebBackendApi").frontendFireAndForget("handleCommentNotification", {
                    comments: e.add,
                    revokes: e.remove
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    l.default = s;
}, 98);