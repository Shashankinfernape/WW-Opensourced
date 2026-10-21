__d("WAWebReactionAddonMessageProcessor", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMsgType",
    "WAWebReactAddonMessageProcessorUtils",
    "WAWebReactionDataUtils",
    "WAWebReactionEncryptMsgData",
    "WAWebReactionFromHistorySyncMsg",
    "WAWebReactionsBEUtils",
    "WAWebReactionsEncryption",
    "WAWebShouldUpdateLastAddOnPreview",
    "WAWebStatusReactionCTLLogging",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return babelHelpers.extends({}, e, {
            reactionParentKey: o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(e.reactionParentKey)
        });
    }
    const m = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessorDualEncrypted({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
            fromHistorySyncMsg: r("WAWebReactionFromHistorySyncMsg"),
            toDualEncryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted) {
                        return e;
                    }
                    return o("WAWebReactionEncryptMsgData").encryptReactionMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })(),
            toDualDecryptedMsgData: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    if (e.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted) {
                        return e;
                    }
                    return o("WAWebReactionsEncryption").decryptReactionMsgData(e, t);
                });
                function t(t, n) {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebBackendApi").frontendSendAndReceive("updateReactionCollection", {
                    msgs: e.add.map(d),
                    removeReactions: e.remove.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert),
                    allowNotifications: _(t)
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { parents: a }) {
                const i = [];
                const l = [];
                for (const d of t){
                    if (d.kind === o("WAWebMsgType").MsgKind.ReactionEncrypted) {
                        l.push(d);
                    } else if (d.kind === o("WAWebMsgType").MsgKind.ReactionDecrypted) {
                        i.push(d);
                    }
                }
                yield (c || (c = n("Promise"))).allSettled(l.map((e)=>o("WAWebReactionsEncryption").decryptReactionMsgData(e, a.getForAddon(e)))).then((t)=>{
                    let n = 0;
                    const r = [];
                    for (const a of t){
                        if (a.status === "fulfilled" && a.value != null) {
                            i.push(a.value);
                        } else {
                            n++;
                            if (r.length < 3 && a.status === "rejected") {
                                r.push(a.reason);
                            }
                        }
                    }
                    if (n > 0) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Cannot decrypt ",
                            " reactions: ",
                            ""
                        ])), n, r);
                    }
                    if (t.some((e)=>e.status === "rejected")) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed decrypted enc reactions"
                        ]))).tags("messaging", "addons").sendLogs("decrypt-enc-reaction-failed", {
                            sampling: 0.01
                        });
                    }
                });
                let m = i;
                try {
                    m = yield o("WAWebReactAddonMessageProcessorUtils").overrideExistingReactions(i);
                } catch (e) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to override existing reactions: ",
                        ""
                    ])), e).sendLogs("override-existing-reactions-failed");
                }
                const p = yield o("WAWebReactAddonMessageProcessorUtils").createGetReactionTimestamp(m);
                const _ = m.filter((e)=>{
                    const t = p(e);
                    return t == null || t < e.reactionTimestamp;
                });
                return _;
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        afterUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { processMode: n }) {
                const r = e.map(o("WAWebReactionDataUtils").reactionMsgDataToReactionRow);
                yield o("WAWebReactionsBEUtils").updateHasReactionFromParent(r);
                yield o("WAWebShouldUpdateLastAddOnPreview").filterAndUpdateChatPreviews(r.map(o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType));
                if (n === o("WAWebAddonConstants").AddonProcessMode.OnlineReceive) {
                    yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e.map((e)=>e.id.toString()));
                    o("WAWebStatusReactionCTLLogging").logReceivedStatusReactionEngagement(e);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { processMode: n }) {
                if (_(n)) {
                    o("WAWebBackendApi").frontendFireAndForget("handleReactionNotification", {
                        reactions: e.add.map(d)
                    });
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    const p = m;
    function _(e) {
        return !new Set([
            o("WAWebAddonConstants").AddonProcessMode.HistorySync,
            o("WAWebAddonConstants").AddonProcessMode.Hydration
        ]).has(e);
    }
    l.default = p;
}, 98);