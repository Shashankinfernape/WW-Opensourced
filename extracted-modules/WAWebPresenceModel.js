__d("WAWebPresenceModel", [
    "fbt",
    "WAArraysShallowEqual",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatstateGetters",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDebounce",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendPresenceGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupPresenceUtils",
    "WAWebGroupType",
    "WAWebLid1X1MigrationGating",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberLidEligibility",
    "WAWebPresenceCollection",
    "WAWebPresenceEnum",
    "WAWebPresenceGetters",
    "WAWebPresenceOrder",
    "WAWebPrivacyGatingUtils",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFormat",
    "getErrorSafe"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = 3000;
    const _ = 5000;
    const f = 2000;
    const g = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.type = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.deny = o("WAWebBaseModel").prop();
            t.updateTime = o("WAWebBaseModel").session();
            t.expireTimerId = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebChatstateGetters").clearChatstateGetterCacheFor(this);
        };
        return t;
    })((m = o("WAWebBaseModel")).BaseModel);
    g.Proxy = "chatstate";
    g.idClass = r("WAWebWid");
    const h = m.defineModel(g);
    const y = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    y.model = h;
    const C = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.isOnline = o("WAWebBaseModel").session(false);
            e.stale = o("WAWebBaseModel").session(true);
            e.hasData = o("WAWebBaseModel").session(false);
            e.isSubscribed = o("WAWebBaseModel").session(false);
            e.withholdDisplayStage = o("WAWebBaseModel").session(o("WAWebPresenceEnum").WithholdDisplayStage.None);
            e.forceDisplay = o("WAWebBaseModel").session(false);
            e.chatActive = o("WAWebBaseModel").session(false);
            e.groupOnlineCount = o("WAWebBaseModel").session(0);
            e.withholdDisplayTimer = o("WAWebBaseModel").session();
            e.forceDisplayTimer = o("WAWebBaseModel").session();
            e.chatstate = o("WAWebBaseModel").session();
            e.typingUserIds = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.recordingUserIds = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.chatstates = o("WAWebBaseModel").collection(y);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            const n = o("WAWebPresenceGetters").getIsGroup(this) ? {
                id: "",
                type: "unavailable"
            } : {
                id: this.id
            };
            this.addChild("chatstate", new h(n));
            if (o("WAWebPresenceGetters").getIsGroup(this)) {
                const a = r("WAWebDebounce")(function() {
                    let t;
                    let isOnline = false;
                    const a = [];
                    const i = [];
                    e.chatstates.forEach((e)=>{
                        if (e.type === "typing" || e.type === "recording_audio") {
                            if (e.type === "typing") {
                                a.push({
                                    id: e.id,
                                    updateTime: e.updateTime
                                });
                            } else {
                                i.push({
                                    id: e.id,
                                    updateTime: e.updateTime
                                });
                            }
                            if (!t || t.updateTime < e.updateTime) {
                                t = e;
                            }
                        }
                        isOnline = isOnline || e.type === "available";
                    });
                    const l = a.sort((e, t)=>e.updateTime - t.updateTime).map((e)=>e.id);
                    const s = i.sort((e, t)=>e.updateTime - t.updateTime).map((e)=>e.id);
                    const typingUserIds = o("WAWebPresenceOrder").preserveUserOrder(e.typingUserIds, l);
                    const recordingUserIds = o("WAWebPresenceOrder").preserveUserOrder(e.recordingUserIds, s);
                    const d = !r("WAArraysShallowEqual")(typingUserIds, e.typingUserIds);
                    const m = !r("WAArraysShallowEqual")(recordingUserIds, e.recordingUserIds);
                    if (d || m || e.isOnline !== isOnline) {
                        e.set({
                            isOnline,
                            typingUserIds,
                            recordingUserIds
                        });
                    }
                    e.chatstate.set({
                        id: t ? t.id : "",
                        type: t ? t.type : "unavailable"
                    });
                }, 0);
                this.listenTo(this.chatstates, "add", a);
                this.listenTo(this.chatstates, "change", a);
                this.listenTo(o("WAWebPresenceCollection").PresenceCollection, "change:isOnline", r("WAWebDebounce")(function() {
                    return e.$PresenceImpl$p_1();
                }, 100));
            } else {
                this.listenTo(this.chatstate, "change:type", function() {
                    if (e.chatstate.type === "available") {
                        e.isOnline = true;
                    } else if (e.chatstate.type === "unavailable") {
                        e.isOnline = false;
                    }
                });
            }
            this.listenTo(this, "change:chatActive", this.$PresenceImpl$p_2);
        };
        n_prototype.delete = function() {
            t.prototype.delete.call(this);
            o("WAWebPresenceGetters").clearPresenceGetterCacheFor(this);
            o("WAWebFrontendPresenceGetters").clearFrontendPresenceGetterCacheFor(this);
            this.getCollection().remove(this.id);
            this.chatstate.delete();
            this.chatstates.forEach((e)=>e.delete());
        };
        n_prototype.reset = function() {
            this.hasData = false;
            if (o("WAWebPresenceGetters").getIsGroup(this)) {
                this.chatstates.forEach((e)=>{
                    e.type = "unavailable";
                });
                this.groupOnlineCount = 0;
            } else if (o("WAWebPresenceGetters").getIsUser(this)) {
                this.chatstate.unset("t");
                this.chatstate.unset("deny");
            }
            this.chatstate.set({
                id: o("WAWebPresenceGetters").getIsGroup(this) ? "" : this.id,
                type: "unavailable",
                t: undefined,
                deny: undefined
            });
        };
        n_prototype.getGroupSubtitleText = function(n) {
            if (!this.hasData) {
                return null;
            }
            if (!o("WAWebPresenceGetters").getIsGroup(this)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupSubtitleText: presence not a group"
                ]))).sendLogs("getGroupSubtitleText-not-group");
                return null;
            }
            const a = n?.elevatedPushNamesEnabled ?? false;
            const isTypingIndicatorMessageBubbleEnabled = n?.isTypingIndicatorMessageBubbleEnabled ?? false;
            return E({
                chatstateType: this.chatstate.type,
                elevatedPushNamesEnabled: a,
                groupOnlineCount: this.groupOnlineCount,
                isTypingIndicatorMessageBubbleEnabled,
                recordingUserIds: this.recordingUserIds,
                typingUserIds: this.typingUserIds
            });
        };
        n_prototype.$PresenceImpl$p_3 = function() {
            const e = this.chatstate.id;
            if (e) {
                return o("WAWebContactCollection").ContactCollection.get(e);
            }
            return null;
        };
        n_prototype.getUserSubtitleText = function(t = false) {
            if (!this.hasData) {
                return null;
            }
            if (!o("WAWebPresenceGetters").getIsUser(this)) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getUserSubtitleText is used when presence is not for a user"
                ]))).sendLogs("getUserSubtitleText-not-user");
                return null;
            }
            switch(this.chatstate.type){
                case "available":
                    return T();
                case "typing":
                    if (t) {
                        return this.$PresenceImpl$p_4();
                    }
                    return s._("typing…");
                case "recording_audio":
                    if (t) {
                        return this.$PresenceImpl$p_4();
                    }
                    return s._("recording audio…");
                case "unavailable":
                    return this.$PresenceImpl$p_5();
            }
        };
        n_prototype.$PresenceImpl$p_4 = function() {
            if (this.isOnline) {
                return T();
            }
            return this.$PresenceImpl$p_5();
        };
        n_prototype.$PresenceImpl$p_5 = function() {
            const chatstate = this.chatstate;
            const { deny, t: t_1 } = chatstate;
            if (deny || t_1 == null) {
                return null;
            }
            return o("WAWebClock").Clock.lastSeenStr(t_1);
        };
        n_prototype.getFormattedString = function(t) {
            if (this.hasData) {
                if (o("WAWebPresenceGetters").getIsGroup(this)) {
                    const e = this.getGroupSubtitleText(t);
                    if (e != null) {
                        return {
                            text: e.text,
                            ariaLabel: e.ariaLabel
                        };
                    }
                } else if (o("WAWebPresenceGetters").getIsUser(this)) {
                    return {
                        text: this.getUserSubtitleText()
                    };
                }
            } else {
                return null;
            }
            return null;
        };
        n_prototype.getGroupStages = function(t) {
            let e;
            let r;
            const a = [];
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(t.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && (e = t.groupMetadata) != null && e.participants.iAmMember()) {
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.CommunityName);
            }
            if (t?.groupMetadata?.participants.iAmAdmin() && (r = t.groupMetadata) != null && r.announce) {
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.OnlyAdminsCanSend);
                if (o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() && t != null && o("WAWebFrontendChatGetters").getIsE2ee(t)) {
                    a.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE);
                }
            } else if (o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() && t != null && o("WAWebFrontendChatGetters").getIsE2ee(t)) {
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE);
            } else {
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.Info);
            }
            if (o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled()) {
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen);
            }
            a.push(o("WAWebPresenceEnum").WithholdDisplayStage.None);
            return a;
        };
        n_prototype.$PresenceImpl$p_1 = function() {
            if (o("WAWebPresenceGetters").getIsGroup(this) && o("WAWebGroupPresenceUtils").isSmallGroupPresenceEnabled()) {
                const t = o("WAWebChatCollection").ChatCollection.get(this.id);
                const n = t?.groupMetadata?.participants;
                if (n != null && !(n.length > o("WAWebGroupPresenceUtils").getSmallGroupPresenceThreshold())) {
                    let r = 0;
                    n.forEach(({ id })=>{
                        if (!o("WAWebUserPrefsMeUser").isMeAccount(id) && !id.isBot() && id.isLid()) {
                            const n = o("WAWebPresenceCollection").PresenceCollection.get(id);
                            if (n?.isOnline === true) {
                                r += 1;
                            }
                        }
                    });
                    const groupOnlineCount = r >= 1 ? r + 1 : 0;
                    if (this.groupOnlineCount !== groupOnlineCount || !this.hasData) {
                        this.set({
                            groupOnlineCount,
                            hasData: true
                        });
                    }
                }
            }
        };
        n_prototype.$PresenceImpl$p_2 = function() {
            const chatActive = this.chatActive;
            if (chatActive) {
                try {
                    this.$PresenceImpl$p_6();
                } catch (error) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "presence: failed to update on chat active change"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("presence-chat-active-update-failed");
                }
            } else {
                b.delete(this);
                if (this.withholdDisplayTimer != null && this.withholdDisplayTimer !== 0) {
                    self.clearTimeout(this.withholdDisplayTimer);
                    this.withholdDisplayTimer = undefined;
                }
                if (this.forceDisplayTimer != null && this.forceDisplayTimer !== 0) {
                    self.clearTimeout(this.forceDisplayTimer);
                    this.forceDisplayTimer = undefined;
                }
            }
        };
        n_prototype.$PresenceImpl$p_6 = function() {
            const e = this;
            if (o("WAWebPresenceGetters").getIsGroup(this)) {
                this.$PresenceImpl$p_1();
            }
            const t = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(this.id).length > 0;
            const n = this.$PresenceImpl$p_3();
            const r = n && o("WAWebContactGetters").getIsMe(n);
            let a = [];
            const i = this.$PresenceImpl$p_7();
            if (i != null && o("WAWebChatGetters").getIsGroup(i)) {
                a = this.getGroupStages(i);
            } else if (r === true) {
                if (o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() && i != null && o("WAWebFrontendChatGetters").getIsE2ee(i)) {
                    a.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE);
                }
                a.push(o("WAWebPresenceEnum").WithholdDisplayStage.Self);
                S(this, a);
            } else {
                const l = o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(i?.id) != null;
                const s = n != null && o("WAWebContactGetters").getShowAsMetaVerified(n) && n.verifiedName != null && n.verifiedName !== "";
                const u = l && !s && o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled();
                let c = u;
                if (this.hasData) {
                    if (o("WAWebChatAssignmentUtils").canAssignChat(i) && t) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment);
                    }
                    if (n?.isBusiness === true) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.Business);
                    }
                    if (o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled()) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen);
                    }
                    a.push(o("WAWebPresenceEnum").WithholdDisplayStage.None);
                } else {
                    if (o("WAWebChatAssignmentUtils").canAssignChat(i) && t) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.ChatAssignment);
                    }
                    if (n?.isBusiness === true) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.Business);
                    }
                    const d = o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() && i != null && o("WAWebFrontendChatGetters").getIsE2ee(i);
                    if (d) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE);
                        c = false;
                    } else {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.Info);
                    }
                    if (o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled()) {
                        a.push(o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen);
                    }
                    a.push(o("WAWebPresenceEnum").WithholdDisplayStage.None);
                }
                if (c) {
                    a = R(a);
                }
            }
            S(this, a);
            this.forceDisplayTimer = self.setTimeout(function() {
                e.set({
                    forceDisplay: true,
                    forceDisplayTimer: undefined
                });
            }, f);
        };
        n_prototype.subscribe = function() {
            return this.getCollection().find(this.id);
        };
        n_prototype.restartOrgMemberTagStage = function() {
            if (this.chatActive) {
                const e = v(this);
                if (this.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.E2EE && this.withholdDisplayTimer != null) {
                    self.clearTimeout(this.withholdDisplayTimer);
                    S(this, [
                        o("WAWebPresenceEnum").WithholdDisplayStage.E2EE
                    ].concat(e));
                    return;
                }
                if (this.withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.Business && this.withholdDisplayTimer != null) {
                    self.clearTimeout(this.withholdDisplayTimer);
                    S(this, [
                        o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag,
                        o("WAWebPresenceEnum").WithholdDisplayStage.Business
                    ].concat(e));
                    return;
                }
                if (this.withholdDisplayStage !== o("WAWebPresenceEnum").WithholdDisplayStage.None && this.withholdDisplayStage !== o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag && this.withholdDisplayTimer != null) {
                    b.set(this, R(e));
                    return;
                }
                if (this.withholdDisplayTimer != null) {
                    self.clearTimeout(this.withholdDisplayTimer);
                }
                S(this, [
                    o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag
                ].concat(e));
            }
        };
        n_prototype.getCollection = function() {
            return o("WAWebPresenceCollection").PresenceCollection;
        };
        n_prototype.$PresenceImpl$p_7 = function() {
            if (o("WAWebPresenceGetters").getIsGroup(this)) {
                return o("WAWebChatCollection").ChatCollection.get(this.id);
            }
            if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                return o("WAWebChatCollection").ChatCollection.get(this.id);
            }
            const e = this.id;
            if (e.isLid()) {
                return o("WAWebChatCollection").ChatCollection.getChatByAccountLid(e);
            }
            if (e.isRegularUserPn()) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "pn presence model: ",
                    ""
                ])), this.id.toString()).sendLogs("non-lid-presence-model");
            }
            return null;
        };
        return n;
    })(m.BaseModel);
    C.Proxy = "presence";
    C.idClass = r("WAWebWid");
    var b = new WeakMap;
    function v(e) {
        const n = (b.get(e) ?? []).filter((e)=>e !== o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag);
        if (n.length === 0) {
            return [
                o("WAWebPresenceEnum").WithholdDisplayStage.None
            ];
        }
        return n;
    }
    function S(e, t) {
        if (t.length !== 0) {
            const withholdDisplayStage = t[0];
            const r = babelHelpers.arrayLikeToArray(t).slice(1);
            b.set(e, r);
            e.set({
                withholdDisplayStage,
                withholdDisplayTimer: withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.None ? null : self.setTimeout(function() {
                    S(e, b.get(e) ?? []);
                }, withholdDisplayStage === o("WAWebPresenceEnum").WithholdDisplayStage.Business ? _ : p)
            });
        }
    }
    function R(e) {
        if (e.includes(o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag)) {
            return Array.from(e);
        }
        return [
            o("WAWebPresenceEnum").WithholdDisplayStage.OrgMemberTag
        ].concat(e);
    }
    const L = m.defineModel(C);
    function E({ chatstateType, elevatedPushNamesEnabled, groupOnlineCount, isTypingIndicatorMessageBubbleEnabled, recordingUserIds, typingUserIds }) {
        if (!isTypingIndicatorMessageBubbleEnabled && chatstateType === "typing" && typingUserIds.length > 0) {
            return k(typingUserIds, elevatedPushNamesEnabled);
        }
        if (!isTypingIndicatorMessageBubbleEnabled && chatstateType === "recording_audio" && recordingUserIds.length > 0) {
            const l = I(recordingUserIds[recordingUserIds.length - 1], elevatedPushNamesEnabled);
            const { accessibleName, name } = l;
            return {
                text: s._("{member} is recording audio…", [
                    s._param("member", name)
                ]),
                ariaLabel: s._("{member} is recording audio…", [
                    s._param("member", accessibleName)
                ])
            };
        }
        if (groupOnlineCount > 1) {
            const d = s._("_j{\"*\":\"{count} online\",\"_1\":\"1 online\"}", [
                s._plural(groupOnlineCount, "count")
            ]);
            return {
                text: d,
                ariaLabel: d
            };
        }
        return null;
    }
    function k(typingUserIds, elevatedPushNamesEnabled) {
        const e_length = typingUserIds.length;
        if (e_length === 1) {
            const r = I(typingUserIds[typingUserIds.length - 1], elevatedPushNamesEnabled);
            const { accessibleName, name } = r;
            return {
                text: s._("{member} is typing…", [
                    s._param("member", name)
                ]),
                ariaLabel: s._("{member} is typing…", [
                    s._param("member", accessibleName)
                ])
            };
        }
        return {
            text: s._("{count} people typing…", [
                s._param("count", e_length)
            ]),
            ariaLabel: s._("{count} people are typing", [
                s._param("count", e_length)
            ])
        };
    }
    function I(e, elevatedPushNamesEnabled) {
        const n = o("WAWebContactCollection").ContactCollection.get(e);
        if (n == null) {
            const r = o("WAWebWidFormat").widToFormattedUser(e);
            return {
                name: r,
                accessibleName: r
            };
        }
        if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(n) && elevatedPushNamesEnabled) {
            const a = o("WAWebContactGetters").getNotifyName(n);
            return {
                name: o("WAWebChatContactUtils").getFormattedNotifyName(a),
                accessibleName: o("WAWebChatContactUtils").getAccessibleNotifyName(a)
            };
        }
        const i = o("WAWebFrontendContactGetters").getFormattedShortName(n);
        return {
            name: i,
            accessibleName: i
        };
    }
    function T() {
        return s._("online");
    }
    l.processStagesRecursively = S;
    l.Presence = L;
    l.Chatstate = h;
}, 226);