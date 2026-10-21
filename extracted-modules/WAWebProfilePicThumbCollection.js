__d("WAWebProfilePicThumbCollection", [
    "Promise",
    "WAComms",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebBaseCachePolicy",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactProfilePicThumbBridge",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebProfilePicThumbGetters",
    "WAWebProfilePicThumbModel",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
    "WAWebThemeSession",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebVcardParsingUtils",
    "WAWebVoipGatingUtils",
    "WAWebWid",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = new Set;
    const g = ((t)=>{
        function a() {
            let i;
            i = t.call(this) || this;
            i.findImpl = function(t) {
                let a;
                if (!(t instanceof r("WAWebWid"))) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "ProfilePicThumbCollection.findImpl non-WAWebWid id"
                    ]))).sendLogs("profile-pic-find-invalid-id");
                    return (_ || (_ = n("Promise"))).reject(r("err")("ProfilePicThumbCollection.findImpl called with a non-WAWebWid id"));
                }
                const i = t.isNewsletter() ? r("WAWebNewsletterCollection") : o("WAWebChatCollection").ChatCollection;
                const l = i.get(t);
                const s = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(l?.groupMetadata) === o("WAWebGroupType").GroupType.COMMUNITY;
                const u = r("WAWebUnjoinedSubgroupMetadataCollection").get(t.toString());
                const c = l?.newsletterMetadata;
                if (l != null && l.isReadOnly && !s && !(l != null && o("WAWebChatGetters").getIsNewsletter(l)) && u == null || l != null && (a = l.groupMetadata) != null && a.terminated || c != null && c.terminated || c != null && o("WAWebNewsletterMetadataGetters").getIsPreview(c)) {
                    return (_ || (_ = n("Promise"))).resolve({
                        id: t,
                        stale: true
                    });
                }
                if (h(t)) {
                    return (_ || (_ = n("Promise"))).resolve({
                        id: t
                    });
                }
                if ((r("WAWebWid").isUser(t) || r("WAWebWid").isGroup(t) || r("WAWebWid").isNewsletter(t)) && !r("WAWebWid").isPSA(t)) {
                    let m = s ? t : l?.groupMetadata?.parentGroup;
                    if (u != null) {
                        m = u.parentGroupId;
                    }
                    const p = o("WAWebSocketModel").Socket.stream !== o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED || o("WAWebVoipGatingUtils").isGuestViewer() && o("WAComms").isSocketConnected();
                    if (p) {
                        if (r("WAWebWid").isUser(t)) {
                            const y = o("WAWebContactCollection").ContactCollection.get(t);
                            const C = o("WAWebChatCollection").ChatCollection.get(t);
                            return o("WAWebContactProfilePicThumbBridge").requestProfilePicFromServer({
                                id: t,
                                parentGroupId: m,
                                tcToken: C?.tcToken,
                                commonGid: C?.tcToken == null ? y?.maybeCommonGroupChatModel?.id : null
                            });
                        }
                        return o("WAWebContactProfilePicThumbBridge").requestProfilePicFromServer({
                            id: t,
                            parentGroupId: m,
                            newsletterRole: t.isNewsletter() ? r("WAWebNewsletterMetadataCollection").get(t)?.membershipType : undefined
                        });
                    }
                    return (_ || (_ = n("Promise"))).resolve({
                        id: t,
                        stale: true
                    });
                }
                return (_ || (_ = n("Promise"))).resolve({
                    id: t,
                    tag: null
                });
            };
            i._getUpdatedProfilePicModel = function(e) {
                return {
                    tag: e.tag,
                    raw: undefined,
                    stale: false,
                    eurl: e.eurl,
                    eurlStale: false,
                    previewEurl: e.previewEurl,
                    previewDirectPath: e.previewDirectPath,
                    fullDirectPath: e.fullDirectPath,
                    filehash: e.filehash,
                    timestamp: Date.now()
                };
            };
            const l = n("cr:17219")?.getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebProfilePicThumbCollection);
            if (l) {
                i.listenTo(i, "add remove change:timestamp", function(e, t, n) {
                    l.pictures?.notifyUpdate(e);
                });
            }
            i.listenTo(i, "add change", function(e) {
                i._mirrorMeRow(e);
            });
            return i;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype._mirrorMeRow = function(t) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
                const e = t.id.toString();
                if (!f.has(e)) {
                    const n = o("WAWebApiContact").getMeUserWids();
                    if (!(n.length < 2)) {
                        const r = {
                            tag: t.tag,
                            eurl: t.eurl,
                            previewEurl: t.previewEurl,
                            fullDirectPath: t.fullDirectPath,
                            previewDirectPath: t.previewDirectPath,
                            filehash: t.filehash,
                            timestamp: t.timestamp,
                            stale: t.stale,
                            eurlStale: t.eurlStale
                        };
                        for (const a of n){
                            if (!a.equals(t.id)) {
                                const i = a.toString();
                                f.add(i);
                                try {
                                    const l = this.gadd(a);
                                    l.set(r);
                                } finally{
                                    f.delete(i);
                                }
                            }
                        }
                    }
                }
            }
        };
        a_prototype.get = function(n) {
            const e = t.prototype.get.call(this, n);
            if (this.isProfilePicRefreshNeeded(e?.timestamp, e?.eurlStale)) {
                if (e != null) {
                    e.markStale({
                        eurl: true
                    });
                }
            }
            this.modelClass.prototype.isIdType(n);
            return e;
        };
        a_prototype.resyncPicturesByWid = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = e.filter((e)=>!h(e));
                if (n.length !== 0) {
                    try {
                        const r = yield o("WAWebContactProfilePicThumbBridge").profilePicResync(n.map((e)=>{
                            if (e.isRegularUser()) {
                                const n = o("WAWebContactCollection").ContactCollection.get(e);
                                const r = o("WAWebChatCollection").ChatCollection.get(e);
                                return {
                                    id: e,
                                    tcToken: r?.tcToken,
                                    commonGid: r?.tcToken == null ? n?.maybeCommonGroupChatModel?.id : null
                                };
                            }
                            return {
                                id: e
                            };
                        }));
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "ProfilePicThumbStore:resyncPictures success"
                        ])));
                        r.forEach((e)=>{
                            const n = t._getUpdatedProfilePicModel(e);
                            const r = t.get(e.id);
                            if (r) {
                                r.set(n);
                            } else {
                                t.add(babelHelpers.extends({
                                    id: e.id
                                }, n));
                            }
                        });
                    } catch (error) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "ProfilePicThumbStore:resyncMyProfilePicture failed: ",
                            ""
                        ])), error);
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.resyncPictures = function(t) {
            const e = this;
            if (t.length === 0) {
                return (_ || (_ = n("Promise"))).resolve();
            }
            return o("WAWebContactProfilePicThumbBridge").profilePicResync(t.map((e)=>{
                if (e.id.isRegularUser()) {
                    const n = o("WAWebContactCollection").ContactCollection.get(e.id);
                    const r = o("WAWebChatCollection").ChatCollection.get(e.id);
                    return {
                        id: e.id,
                        tag: e.tag,
                        tcToken: r?.tcToken,
                        commonGid: r?.tcToken == null ? n?.maybeCommonGroupChatModel?.id : null
                    };
                }
                return {
                    id: e.id,
                    tag: e.tag
                };
            })).then((n)=>{
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ProfilePicThumbStore:resyncPictures success"
                ])));
                n.forEach((t)=>{
                    const n = e.get(t.id);
                    if (n) {
                        n.set(e._getUpdatedProfilePicModel(t));
                    }
                });
                t.forEach((t)=>{
                    if (t.eurlStale) {
                        e.update(t.id);
                    }
                    t.stale = false;
                });
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
                if (e.status === 423 || e.status === 429) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "ProfilePicThumbStore:resyncPictures blocked ",
                        ""
                    ])), e.status);
                } else if (e.status >= 400) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "ProfilePicThumbStore:resyncPictures dropped: ",
                        ""
                    ])), String(e));
                }
            })).catch((e)=>{
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "ProfilePicThumbStore:resyncPictures dropped"
                ]))).catching(r("getErrorSafe")(e));
            });
        };
        a_prototype.findThumbnailWid = function(t) {
            const e = this;
            return t.find((t)=>o("WAWebProfilePicThumbGetters").getMaybeImg(e.get(t)));
        };
        a_prototype.getThumbnailWidFromVcard = function(t) {
            if (!t) {
                return null;
            }
            const e = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(t).map((e)=>e);
            if (e.length > 0) {
                return this.findThumbnailWid(e) ?? e[0];
            }
            const r = o("WAWebVcardParsingUtils").vcardLidWid(t);
            return r ?? null;
        };
        a_prototype.isProfilePicRefreshNeeded = function(t, n = false) {
            if (t == null || n) {
                return true;
            }
            const e = Date.now() - t;
            return e > o("WATimeUtils").WEEK_MILLISECONDS;
        };
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebProfilePicThumbGetters").clearProfilePicThumbGetterCacheFor(e);
                }
            });
            return e;
        };
        a_prototype.reset = function() {
            this.forEach(o("WAWebProfilePicThumbGetters").clearProfilePicThumbGetterCacheFor);
            t.prototype.reset.call(this);
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    g.model = o("WAWebProfilePicThumbModel").ProfilePicThumb;
    g.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.PROFILE_PIC_THUMB_COLLECTION,
        trigger: "change:tag",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
        delay: 5000
    };
    function h(e) {
        return e.isAiHub() || o("WAWebBotUtils").isBotChannelFBID(e) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) || e.isFbidBot();
    }
    function y() {
        const e = new g;
        o("WAWebThemeSession").subscribeToThemeChanges(function(isDarkTheme) {
            e.getModelsArray().forEach((e)=>{
                if (e.id.isAiHub()) {
                    e.set({
                        isDarkTheme
                    });
                }
            });
        });
        return e;
    }
    const C = y();
    l.ProfilePicThumbCollection = C;
}, 98);