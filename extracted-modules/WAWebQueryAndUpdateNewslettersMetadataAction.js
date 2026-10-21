__d("WAWebQueryAndUpdateNewslettersMetadataAction", [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebContactProfilePicThumbBridge",
    "WAWebCreateChat",
    "WAWebDBBulkPersistProfilePic",
    "WAWebNewsletterChatListUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGetAdminCapabilitiesJob",
    "WAWebNewsletterGetAdminInfoJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterRoleIdentifier",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessagesAction",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebNoop",
    "WAWebProfilePicThumbCollection",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    function y(messageCount) {
        return messageCount != null && Number.isInteger(messageCount) && messageCount > 0;
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][queryAndUpdateNewsletterMetadataAction] Start"
            ])));
            try {
                const l = o("WAWebNewsletterRoleIdentifier").getRoleByIdentifier(t);
                const c = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(t, l, n?.fields);
                if (c == null) {
                    return;
                }
                const d = o("WAWebNewsletterModelUtils").mapNewsletterToChat(c);
                const m = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(c);
                const p = c.newsletterPictureMetadataMixin?.picture;
                const pics = p ? [
                    o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(t, p)
                ] : [];
                const f = yield v(t, n?.adminFields);
                const { adminCount, adminProfile, adminProfilesSettingEnabled } = f;
                let C;
                if (n?.adminFields?.capabilities === true) {
                    C = yield o("WAWebNewsletterGetAdminCapabilitiesJob").getNewsletterAdminCapabilities(t);
                }
                yield R({
                    chats: [
                        d
                    ],
                    metadata: [
                        babelHelpers.extends({}, m, {
                            adminCount,
                            adminProfile,
                            adminProfilesSettingEnabled,
                            capabilities: C
                        })
                    ],
                    pics,
                    messageCount: n?.messageCount
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][queryAndUpdateNewsletterMetadataAction] End"
                ])));
                return r("WAWebNewsletterCollection").get(c.idJid);
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.statusCode === 405) {
                    return;
                }
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateNewsletterMetadataAction] fetch failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-retrieve-newsletter");
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t ?? {};
            const { adminCount, adminProfileData, adminProfilesSettingEnabled } = n;
            if (adminCount !== true && adminProfileData !== true && adminProfilesSettingEnabled !== true) {
                return {
                    adminCount: undefined,
                    adminProfile: undefined,
                    adminProfilesSettingEnabled: undefined
                };
            }
            const l = yield o("WAWebNewsletterGetAdminInfoJob").getNewsletterAdminInfo(e);
            return {
                adminCount: adminCount ? l.adminCount : undefined,
                adminProfile: adminProfileData ? l.adminProfile : undefined,
                adminProfilesSettingEnabled: adminProfilesSettingEnabled ? l.adminProfilesSettingEnabled : undefined
            };
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ addSystemMsgs, chats, messageCount, metadata, pics, qplEvent }) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][updateCollections] Start"
            ])));
            const C = o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() ? o("WAWebNewsletterChatListUtils").getNewsletterChatsWithLatestTimestamps(chats) : chats;
            const b = E(C, metadata, pics);
            const { filteredChats, filteredMetadata, filteredPics } = b;
            qplEvent?.addPoint("updateNewsletterChatRecords_start");
            yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords(filteredChats.map(o("WAWebCreateChat").createNewsletterObjectForStorage));
            qplEvent?.addPoint("updateNewsletterChatRecords_end");
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][updateCollections][chat] Persist changes to DB"
            ])));
            qplEvent?.addPoint("updateNewsletterMetadata_start");
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(filteredMetadata.map(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage));
            qplEvent?.addPoint("updateNewsletterMetadata_end");
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[updateCollections][metadata] persisted to DB"
            ])));
            qplEvent?.addPoint("bulkPersistProfilePicChanges_start");
            yield o("WAWebDBBulkPersistProfilePic").bulkPersistProfilePicChanges(r("compactMap")(filteredPics, function(e) {
                if (Object.prototype.hasOwnProperty.call(e, "eurl")) {
                    const i = o("WAWebWidFactory").createWid(e.id.toString());
                    return o("WAWebContactProfilePicThumbBridge").mapProfilePictureToProfilePicThumbRowType(i, {
                        id: i,
                        tag: e.tag ?? undefined,
                        eurl: e.eurl ?? undefined,
                        previewEurl: e.previewEurl ?? undefined,
                        stale: e.stale,
                        eurlStale: false,
                        timestamp: e.timestamp ?? Date.now()
                    });
                }
            }));
            qplEvent?.addPoint("bulkPersistProfilePicChanges_end");
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[updateCollections][picture] persisted to DB"
            ])));
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction] update model"
            ])));
            r("WAWebNewsletterMetadataCollection").add(metadata, {
                merge: true
            });
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(pics, {
                merge: true
            });
            r("WAWebNewsletterCollection").add(C, {
                merge: true
            });
            qplEvent?.addPoint("pullNewsletterMessagesFromServer_start");
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction][msg] start"
            ])));
            if (y(messageCount)) {
                yield (h || (h = n("Promise"))).all(r("WAWebNewsletterCollection").filter(({ newsletterMetadata })=>newsletterMetadata == null || !o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(newsletterMetadata)).map((e)=>o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(e, {
                        messageCount,
                        resetUnreadCount: true
                    }).then((n)=>{
                        if (!n.some((e)=>e.isWamoSub !== true || o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e.viewMode)) && addSystemMsgs === true) {
                            return o("WAWebNewsletterSystemMessagesAction").addSystemMessagesToChat(e);
                        }
                    }).catch(r("WAWebNoop"))));
            }
            qplEvent?.addPoint("pullNewsletterMessagesFromServer_end");
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction][msg] end"
            ])));
            qplEvent?.addPoint("contactUpdates_start");
            const L = metadata.filter((e)=>e.name).map((e)=>({
                    id: e.id,
                    name: e.name
                }));
            o("WAWebContactCollection").ContactCollection.add(L, {
                merge: true
            });
            qplEvent?.addPoint("contactUpdates_end");
        });
        return L.apply(this, arguments);
    }
    function E(e, metadata, pics) {
        const a = metadata.filter((e)=>{
            if (e.membershipType != null) {
                return e.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
            }
            const t = r("WAWebNewsletterMetadataCollection").get(e.id);
            if (t == null) {
                return false;
            }
            return t.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
        }).map((e)=>e.id);
        const filteredChats = e.filter((e)=>!a.includes(e.id));
        const filteredMetadata = metadata.filter((e)=>!a.includes(e.id));
        const filteredPics = pics.filter((e)=>!a.includes(e.id));
        return {
            filteredChats,
            filteredMetadata,
            filteredPics
        };
    }
    l.NewsletterMetadataUpdateEntryPoint = o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint;
    l.queryAndUpdateNewsletterMetadataAction = C;
    l.updateCollections = R;
}, 98);