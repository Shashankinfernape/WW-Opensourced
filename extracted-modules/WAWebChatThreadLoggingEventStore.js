__d("WAWebChatThreadLoggingEventStore", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebApiChatThreadLoggingPendingEvents",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBotTypes",
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBBulkGetIsContactABusiness",
    "WAWebDBGetStarredMessagesForChat",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetBizCatalogType",
    "WAWebGetChatTypeInd",
    "WAWebGetThreadType",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaParticipant",
    "WAWebSchemaProfilePicThumb",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumChatType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = 5;
    const f = (()=>{
        function t(t, n) {
            const r = this;
            this.metadataStore = t;
            this.$1 = new Map;
            this.$2 = n ?? _;
            this.$3 = new (o("WAShiftTimer")).ShiftTimer(function() {
                r.$4().catch((t)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ChatThreadLoggingEventStoreImpl: flush error"
                    ])));
                });
            });
        }
        const a = t.prototype;
        a.handleMessages = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = yield this.metadataStore.getOffset();
                if (n == null) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ChatThreadLoggingEventStoreImpl] handleMessages: no offset"
                    ])));
                    return;
                }
                const r = yield this.metadataStore.getLastUploadedStartTs();
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "ChatThreadLoggingEventStoreImpl: lastUploadedStartTs=",
                    ""
                ])), r);
                const a = [];
                let i = 0;
                e.forEach((e)=>{
                    if (o("WAWebChatThreadLoggingUtils").shouldUpdateChatEvent(n, e.ts, r)) {
                        const l = o("WAWebChatThreadLoggingUtils").computeStartTs(n, e.ts);
                        const s = e.chatId.toString({
                            legacy: true
                        });
                        const u = `${s}_${String(l)}`;
                        const c = t.$1.get(u);
                        const d = c ?? babelHelpers.extends({}, o("WAWebChatThreadLoggingCountFields").COUNT_FIELDS, o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELDS, {
                            startTs: l,
                            chatId: s,
                            addMsgsSent: 0,
                            addMsgsReceived: 0,
                            addMsgsRead: 0,
                            addViewOnceMsgsSent: 0,
                            addViewOnceMsgsReceived: 0,
                            addViewOnceMsgsOpened: 0,
                            addCallOffersSent: 0,
                            addCallOffersReceived: 0,
                            addTotalCallDuration: 0,
                            addCommerceMsgsSent: 0,
                            addCommerceMsgsReceived: 0,
                            addPdpInquiriesSent: 0,
                            addReactionsSent: 0,
                            addReactionsReceived: 0,
                            addForwardMessagesSent: 0,
                            addForwardMessagesReceived: 0,
                            addEditedMsgsSent: 0,
                            addBotMessagesSent: 0,
                            addBotMessagesReceived: 0,
                            addBotMessagesEdited: 0,
                            addEventCreationMessagesSent: 0,
                            addEventCreationMessagesReceived: 0,
                            addEventResponseMessagesSent: 0,
                            addEventResponseMessagesReceived: 0,
                            addEventGroupStatusReplyOthersToOwn: 0,
                            addEventGroupStatusReplyOthersToOthers: 0,
                            addEventGroupStatusReplyOwnToOwn: 0,
                            addEventGroupStatusReplyOwnToOthers: 0,
                            addEventGroupStatusLikeOthersToOthers: 0,
                            addEventGroupStatusLikeOthersToOwn: 0
                        });
                        if (c == null) {
                            t.$1.set(u, d);
                        }
                        const m = o("WAWebChatThreadLoggingCountFields").toMaybeCountActionType(e.activityType);
                        const p = o("WAWebChatThreadLoggingBoolFlagFields").toMaybeBoolFlagActionType(e.activityType);
                        if (m != null) {
                            d[m] += 1;
                        } else if (p != null) {
                            d[p] = e.boolValue === void 0 ? true : e.boolValue;
                        } else {
                            switch(e.activityType){
                                case "msgSend":
                                    d.addMsgsSent += 1;
                                    if (e.isViewOnce) {
                                        d.addViewOnceMsgsSent += 1;
                                    }
                                    if (e.isCommerceMessage === true) {
                                        d.addCommerceMsgsSent += 1;
                                    }
                                    if (e.isPdpInquiry === true) {
                                        d.addPdpInquiriesSent += 1;
                                    }
                                    if (e.isReply) {
                                        d.repliesSent += 1;
                                    }
                                    if (e.isReaction) {
                                        d.addReactionsSent += 1;
                                    }
                                    if (e.isForwarded) {
                                        d.addForwardMessagesSent += 1;
                                    }
                                    if (e.isEdit) {
                                        d.addEditedMsgsSent += 1;
                                    }
                                    if (e.isBot) {
                                        d.addBotMessagesSent += 1;
                                    }
                                    if (e.isEventCreation) {
                                        d.addEventCreationMessagesSent += 1;
                                    }
                                    if (e.isEventResponse) {
                                        d.addEventResponseMessagesSent += 1;
                                    }
                                    if (e.isAfterRead === true) {
                                        d.afterReadMessagesSent += 1;
                                    }
                                    h(d, e.isAfterRead);
                                    break;
                                case "msgReceive":
                                    g(d, e);
                                    break;
                                case "msgRead":
                                    d.addMsgsRead += e.readCount;
                                    break;
                                case "afterReadMsgExpired":
                                    d.afterReadMessagesExpired += 1;
                                    if (e.wasUnread) {
                                        d.afterReadMessagesUnreadExpired += 1;
                                    }
                                    break;
                                case "groupStatusMsgReceive":
                                    d.addMsgsReceived += 1;
                                    if (e.isGroupStatusReplyOthersToOwn) {
                                        d.addEventGroupStatusReplyOthersToOwn += 1;
                                    }
                                    if (e.isGroupStatusReplyOthersToOthers) {
                                        d.addEventGroupStatusReplyOthersToOthers += 1;
                                    }
                                    if (e.isGroupStatusLikeOthersToOthers) {
                                        d.addEventGroupStatusLikeOthersToOthers += 1;
                                    }
                                    if (e.isGroupStatusLikeOthersToOwn) {
                                        d.addEventGroupStatusLikeOthersToOwn += 1;
                                    }
                                    break;
                                case "groupStatusMsgSend":
                                    d.addMsgsSent += 1;
                                    if (e.isGroupStatusReplyOwnToOwn) {
                                        d.addEventGroupStatusReplyOwnToOwn += 1;
                                    }
                                    if (e.isGroupStatusReplyOwnToOthers) {
                                        d.addEventGroupStatusReplyOwnToOthers += 1;
                                    }
                                    break;
                                case "viewOnceOpen":
                                    d.addViewOnceMsgsOpened += 1;
                                    break;
                                case "voipCall":
                                    if (e.outgoing) {
                                        d.addCallOffersSent += 1;
                                    } else {
                                        d.addCallOffersReceived += 1;
                                    }
                                    d.addTotalCallDuration += e.durationInSeconds;
                                    break;
                                default:
                                    i++;
                                    if (a.length < 3) {
                                        a.push(e.activityType);
                                    }
                            }
                        }
                    }
                });
                if (i > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " invalid event store info types => ",
                        ""
                    ])), i, a);
                }
                yield this.$5();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$5 = function() {
            this.$3.onOrBefore(this.$2 * 1000);
        };
        a.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = Array.from(this.$1.values());
                this.$1.clear();
                yield o("WAWebApiChatThreadLoggingPendingEvents").createOrUpdateChatEvents(e);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.$6 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = o("WAWebApiBulkGetChats").bulkGetChats(e.map((e)=>o("WAWebWidFactory").createWid(e.chatId)));
                const a = t.then((e)=>A(e));
                const i = t.then((e)=>F(e));
                const l = t.then((e)=>O(e));
                const s = t.then((e)=>U(e));
                const u = t.then((e)=>V(e));
                const c = t.then(q);
                const _ = l.then(B);
                const f = t.then((e)=>H(e));
                const g = t.then((e)=>G(e));
                const h = yield (p || (p = n("Promise"))).all([
                    t,
                    a,
                    i,
                    l,
                    c,
                    s,
                    u,
                    f,
                    g,
                    _
                ]);
                const y = h[0];
                const C = h[1];
                const b = h[2];
                const v = h[3];
                const S = h[4];
                const R = h[5];
                const L = h[6];
                const E = h[7];
                const k = h[8];
                const I = h[9];
                const T = yield p.all([
                    o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
                    o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin()
                ]);
                const D = T[0];
                const x = T[1];
                const $ = e.length;
                const P = {
                    chatRows: y.length,
                    starredCounts: C.length,
                    isABusiness: b.length,
                    groupMetadataRows: v.length,
                    groupParticipantsRows: S.length,
                    businessProfileRows: R.length,
                    contactFromChatRows: L.length,
                    profilePicThumbRows: E.length
                };
                for (const [M, w] of Object.entries(P)){
                    if (w !== $) {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[ChatThreadLoggingEventStore] len mismatch ",
                            " exp=",
                            " got=",
                            ""
                        ])), M, $, w).sendLogs(`chatThreadLoggingEventStore-array-length-mismatch-${M}`);
                    }
                }
                return p.all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                        const m = y[t];
                        const p = o("WAWebWidFactory").createWid(e.chatId);
                        const _ = p.isGroup();
                        const f = v[t];
                        const g = o("WAWebBotTypes").BizBotAutomatedType.cast(R[t]?.automatedType);
                        const h = _ ? {
                            isAGroup: _,
                            groupSize: S[t]?.participants?.length ?? 1,
                            groupType: f == null ? o("WAWebGroupType").GroupType.DEFAULT : o("WAWebGroupMetadataGetters").getGroupType(f)
                        } : {
                            isAGroup: _,
                            isAContact: p.isUserNotPSA() ? yield o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(p)) : false,
                            automatedType: g
                        };
                        const T = (m?.pin ?? 0) > 0;
                        const $ = m?.archive ?? false;
                        const P = C[t];
                        const N = m?.unreadCount ?? 0;
                        const M = (m?.muteExpiration ?? 0) !== 0;
                        const w = b[t] ? yield o("WAWebGetBizCatalogType").getBizCatalogType(p) : null;
                        const A = r("WAWebWid").isStringLid(e.chatId) || f?.defaultSubgroup === true;
                        const F = o("WAWebUserPrefsMeUser").isMeAccount(p);
                        const O = p.isBot();
                        let B = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeInitiatedByMe(m?.disappearingModeInitiatedByMe);
                        let W = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeTrigger(m?.disappearingModeTrigger);
                        if (r("WAWebWid").isGroup(m?.id)) {
                            B = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeInitiatedByMe(f?.disappearingModeInitiatedByMe);
                            W = o("WAWebChatThreadLoggingUtils").getWamDisappearingModeTriggerGroups(f?.disappearingModeTrigger);
                        }
                        const q = D;
                        const U = x;
                        let V = null;
                        let H = false;
                        const G = L[t];
                        if (G != null) {
                            const z = o("WAWebWidFactory").createWid(G.id);
                            V = o("WAWebChatThreadLoggingUtils").getOppositeVisibleIdentificationType(G, z.isLid() ? "lid" : "pn");
                            const j = o("WAWebLidMigrationUtils").toPn(z) != null;
                            const K = o("WAWebUsernameTypes").isPresentUsername(G.username);
                            H = !j && K;
                        }
                        let Q = null;
                        let X = null;
                        let Y = null;
                        if (!_ && p.isRegularUser()) {
                            Q = e.msgsSent > 0;
                            X = E[t]?.eurl != null || E[t]?.previewEurl != null;
                            Y = m != null && k.has(m.id);
                        }
                        let ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                        if (p.isLid()) {
                            ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                        }
                        if (m != null && m.lidOriginType) {
                            switch(m?.lidOriginType){
                                case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                                    ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                                    break;
                                case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                                    ee = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                                    break;
                            }
                        }
                        return babelHelpers.extends({}, e, {
                            isPinned: T,
                            isArchived: $,
                            contactInfo: h,
                            threadType: o("WAWebGetThreadType").getThreadTypeFromWid(p, f == null ? null : o("WAWebGroupMetadataGetters").getGroupType(f)),
                            chatTypeInd: I[t],
                            messagesStarred: P,
                            messagesUnread: N,
                            isMuted: M,
                            bizCatalogType: w,
                            isPnhEnabledChat: A,
                            isMessageYourself: F,
                            isUserAgent: O,
                            ephemeralityInitiator: B,
                            ephemeralityTriggerAction: W,
                            isUsernameThread: H,
                            hasUsername: q,
                            hasUsernamePin: U,
                            oppositeVisibleIdentification: V,
                            isUsernameThreadAtCreation: m?.isUsernameThreadAtCreation ?? void 0,
                            hasReplied1On1: Q ?? void 0,
                            sharesCommonGroup: Y ?? void 0,
                            oppositePartyHasProfilePhoto: X ?? void 0,
                            chatOrigins: ee,
                            afterReadDuration: m?.afterReadDuration != null && o("WAWebAfterReadUtils").isAfterReadEnabled() ? m.afterReadDuration : void 0
                        });
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })()));
                function A(e) {
                    return (p || (p = n("Promise"))).all(e.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            if (e == null) {
                                return 0;
                            }
                            return (yield o("WAWebDBGetStarredMessagesForChat").getStarredMessagesForChat(o("WAWebWidFactory").createWid(e.id), Number.MAX_SAFE_INTEGER)).length;
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                }
                function F(e) {
                    return o("WAWebDBBulkGetIsContactABusiness").bulkGetIsContactABusiness(e.map((e)=>{
                        if (e == null) {
                            return null;
                        }
                        return o("WAWebWidFactory").createWid(e.id);
                    }));
                }
                function O(e) {
                    return o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(e.map((e)=>{
                        if (e == null) {
                            return null;
                        }
                        return o("WAWebWidFactory").createWid(e.id);
                    }));
                }
                function B(e) {
                    return W.apply(this, arguments);
                }
                function W() {
                    W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        try {
                            const n = e.map((e, n)=>o("WAWebGetChatTypeInd").getChatTypeWid(o("WAWebWidFactory").createWid(e.chatId), t[n]?.owner));
                            const a = Array.from(new Set(n));
                            const i = yield o("WAWebApiVerifiedBusinessName").bulkGetVerifiedBusinessNameRecordsLidAware(a);
                            const l = new Map(a.map((e, t)=>[
                                    e,
                                    o("WAWebGetChatTypeInd").getChatTypeInd(i[t])
                                ]));
                            return n.map((e)=>l.get(e) ?? o("WAWebWamEnumChatType").CHAT_TYPE.UNKNOWN);
                        } catch (t) {
                            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[ChatThreadLoggingEventStore] chat type lookup failed"
                            ]))).catching(r("getErrorSafe")(t)).sendLogs("chatThreadLoggingEventStore-chat-type-lookup-failed");
                            return e.map(()=>o("WAWebWamEnumChatType").CHAT_TYPE.UNKNOWN);
                        }
                    });
                    return W.apply(this, arguments);
                }
                function q(e) {
                    return o("WAWebSchemaParticipant").getParticipantTable().bulkGet(e.map((e)=>{
                        if (e == null) {
                            return "";
                        }
                        return o("WAWebWidFactory").createWid(e.id).toString();
                    }));
                }
                function U(e) {
                    return o("WAWebSchemaBusinessProfile").getBusinessProfileTable().bulkGet(e.map((e)=>{
                        if (e == null) {
                            return "";
                        }
                        return o("WAWebWidFactory").createWid(e.id).toString();
                    }));
                }
                function V(e) {
                    return r("WAWebLidAwareContactsDB").bulkGet(e.map((e)=>{
                        if (e == null) {
                            return "";
                        }
                        const t = o("WAWebWidFactory").createWid(e.id);
                        if (!t.isRegularUser()) {
                            return "";
                        }
                        if (!t.isLid()) {
                            return t.toJid();
                        }
                        const n = o("WAWebApiContact").getPhoneNumber(t);
                        if (n == null) {
                            return t.toJid();
                        }
                        return "";
                    }));
                }
                function H(e) {
                    return o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().bulkGet(e.map((e)=>{
                        if (e == null) {
                            return "";
                        }
                        return o("WAWebWidFactory").createWid(e.id).toString();
                    }));
                }
                function G(e) {
                    return z.apply(this, arguments);
                }
                function z() {
                    z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = new Map;
                        for (const n of e){
                            if (n != null) {
                                const a = o("WAWebWidFactory").createWid(n.id);
                                if (!(!a.isRegularUser() || r("WAWebWid").isGroup(n.id))) {
                                    t.set(n.id, n.id);
                                    const i = n.id.replace("@c.us", "@s.whatsapp.net");
                                    if (i !== n.id) {
                                        t.set(i, n.id);
                                    }
                                    const l = o("WAWebApiContact").getAlternateUserWid(a);
                                    if (l != null) {
                                        t.set(l.toString(), n.id);
                                    }
                                }
                            }
                        }
                        if (t.size === 0) {
                            return new Set;
                        }
                        const s = yield o("WAWebSchemaParticipant").getParticipantTable().anyOf([
                            "participants"
                        ], Array.from(t.keys()));
                        const u = new Set;
                        for (const c of s){
                            const m = c.participants ?? [];
                            if (m.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e)))) {
                                for (const p of m){
                                    const _ = t.get(p);
                                    if (_ != null) {
                                        u.add(_);
                                    }
                                }
                            }
                        }
                        return u;
                    });
                    return z.apply(this, arguments);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.getEvent = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (this.$1.size > 0) {
                    yield this.$4();
                }
                const n = yield o("WAWebApiChatThreadLoggingPendingEvents").getChatEvent(e, t);
                if (n == null) {
                    return null;
                }
                return (yield this.$6([
                    n
                ]))[0];
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.getBeforeInclusive = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.$1.size > 0) {
                    yield this.$4();
                }
                return this.$6((yield o("WAWebApiChatThreadLoggingPendingEvents").getBeforeInclusive(e)));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.deleteBeforeInclusive = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.$1.size > 0) {
                    yield this.$4();
                }
                return o("WAWebApiChatThreadLoggingPendingEvents").deleteBeforeInclusive(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function g(e, t) {
        if (t.isExcludedModification === true) {
            if (t.isBot && t.isEdit) {
                e.addBotMessagesEdited += 1;
            }
            return;
        }
        e.addMsgsReceived += 1;
        if (t.isViewOnce) {
            e.addViewOnceMsgsReceived += 1;
        }
        if (t.isCommerceMessage === true) {
            e.addCommerceMsgsReceived += 1;
        }
        if (t.isReaction) {
            e.addReactionsReceived += 1;
        }
        if (t.isForwarded) {
            e.addForwardMessagesReceived += 1;
        }
        if (t.isBot) {
            if (t.isEdit) {
                e.addBotMessagesEdited += 1;
            } else {
                e.addBotMessagesReceived += 1;
            }
        }
        if (t.isEventCreation) {
            e.addEventCreationMessagesReceived += 1;
        }
        if (t.isEventResponse) {
            e.addEventResponseMessagesReceived += 1;
        }
        if (t.isAfterRead === true) {
            e.afterReadMessagesReceived += 1;
        }
        h(e, t.isAfterRead);
    }
    function h(e, t) {
        if (t === true) {
            e.afterReadTurnedOn = true;
        } else {
            e.afterReadTurnedOff = true;
        }
    }
    l.ChatThreadLoggingEventStoreImpl = f;
}, 98);