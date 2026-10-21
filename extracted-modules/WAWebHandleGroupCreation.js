__d("WAWebHandleGroupCreation", [
    "Promise",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupJoinCWamEvent",
    "WAWebGroupParticipantsJob",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePushnameUpdate",
    "WAWebUserPrefsMeUser",
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
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupInfo: r, isJoinViaInviteLink: i = false, isOffline: m = false, meta: p, suppressInitialE2EENotice: f = false }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "inside handleGroupCreation"
            ]))).tags("groups");
            const { author: g, chatId: h, pushname: y } = p;
            const { creation: C, hasCapi: b, id: v, participants: S, subject: R } = r;
            if (p.author == null || !o("WAWebUserPrefsMeUser").isMeAccount(p.author)) {
                new (o("WAWebGroupJoinCWamEvent")).GroupJoinCWamEvent().commit();
            }
            if (g && y != null && y !== "") {
                o("WAWebHandlePushnameUpdate").updatePushname(g, y, m).catch((e)=>{
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupCreation: updatePushname failed: ",
                        ""
                    ])), String(e));
                });
            }
            yield (d || (d = n("Promise"))).all([
                o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([
                    r
                ]),
                o("WAWebGroupParticipantsJob").updateParticipantsJob({
                    group: v,
                    participants: S,
                    isOffline: m,
                    groupInfo: r
                })
            ]);
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "updated GroupMetadata and participants tables"
            ]))).tags("groups");
            if ((yield o("WAWebApiChatCommon").getChatRecord(h)) != null) {
                o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
                    id: h,
                    subject: R
                });
            } else {
                yield o("WAWebGroupHistoryParticipantJob").clearGroupHistoryParticipantStateForGroup(v);
                yield o("WAWebCreateChat").createChat({
                    createChatOrigin: "groupCreation",
                    destination: {
                        chatId: h
                    },
                    initialProps: babelHelpers.extends({
                        t: C,
                        pendingInitialLoading: false,
                        createdLocally: false
                    }, i === true && {
                        notSpam: true
                    }),
                    options: babelHelpers.extends({
                        createdOffline: m,
                        suppressInitialE2EENotice: f
                    }, b === true && {
                        nextPrivacyMode: {
                            actualActors: o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Capi,
                            hostStorage: o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook,
                            privacyModeTs: 0
                        }
                    })
                });
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "updated chat model and table"
                ]))).tags("groups");
                o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
                    id: v,
                    subject: R
                });
            }
            o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", r);
            o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
                profilePicThumbWid: v
            });
        });
        return p.apply(this, arguments);
    }
    l.handleGroupCreation = m;
}, 98);