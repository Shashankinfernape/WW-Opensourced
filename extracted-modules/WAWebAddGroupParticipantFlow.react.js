__d("WAWebAddGroupParticipantFlow.react", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebCommunityAddParticipantModal.react",
    "WAWebConfirmPopup.react",
    "WAWebContactModel",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawerLoadable",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupHistorySentOnceAction",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "WAWebGroupHistorySpeedBumpConfirmedTimesAction",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebParticipantListUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendHistoryBundleAction",
    "WAWebText.react",
    "WAWebUim",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumBundleSendSource",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebAddGroupParticipantMuseAgent",
    "useWAWebCommunityRestrictedAddCandidates",
    "useWAWebFilteredContacts",
    "useWAWebFilteredOutContacts",
    "useWAWebFlow",
    "useWAWebGroupDiscardGuard",
    "useWAWebGroupMemberSuggestions",
    "useWAWebListener",
    "useWAWebLogEventOnce"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { use, useCallback, useEffect, useRef, useState } = p;
    const C = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const b = {
        disclaimer: {
            backgroundColor: "x1280gxy",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function V3Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, testid } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = (c || (c = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, C.paddingBlock6, b.disclaimer);
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== children) {
            const Component = o("WAWebText.react").WAWebTextSmall;
            l = <Component color="secondary">{children}</Component>;
            t[1] = children;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] !== l || t[4] !== testid) {
            s = <div {...babelHelpers.extends({
                "data-testid": testid
            }, i, {
                children: l
            })}/>;
            t[3] = l;
            t[4] = testid;
            t[5] = s;
        } else {
            s = t[5];
        }
        return s;
    }
    const S = n("$InternalEnum").Mirrored([
        "SelectParticipant",
        "ConfirmGroupParticipant",
        "ConfirmCommunityParticipant"
    ]);
    function RComponent(t) {
        const t_entryPoint = t.entryPoint;
        const d = t_entryPoint === undefined ? o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_ADD_MEMBER_ENTRY_POINT_OTHER : t_entryPoint;
        const { onBack, reopenAddGroupFlowCallback } = t;
        const b = o("useWAWebFlow").useFlow(S.SelectParticipant, {
            onEnd: onBack
        });
        const K = b[0];
        const flow = b[1];
        const T = useState(function() {
            return new (r("WAWebGroupMemberAddingUserJourneyLogger"))({
                entryPoint: d,
                isAdmin: t.chat.iAmAdmin()
            });
        });
        const D = T[0];
        const x = r("useWAWebFilteredContacts")();
        o("useWAWebLogEventOnce").useLogEventOnce(function() {
            return D.contactsPickerOpened();
        });
        const $ = r("useWAWebGroupMemberSuggestions")({
            chat: t.chat,
            onLoaded: function(suggestions) {
                return D.contactsLoaded({
                    suggestions
                });
            },
            pickerContactCount: x.length
        });
        const P = useState([]);
        const N = P[0];
        const M = P[1];
        const w = useState([]);
        const A = w[0];
        const F = w[1];
        const O = r("useWAWebFilteredOutContacts")();
        const B = use(r("WAWebAddGroupParticipantGroupHistoryContext.react"));
        const { enterFlowTimestamp, hasUserToggledGroupHistory, messageCountPromise, selectedMessageCount, shouldSendGroupHistory } = B;
        const { chat, communityName } = t;
        const j = o("WAWebWidFactory").asGroupWidOrThrow(chat.id);
        const chat_groupMetadata = chat.groupMetadata;
        const Q = chat_groupMetadata?.parentGroup != null || chat_groupMetadata?.isParentGroup === true;
        const X = o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        const Y = chat_groupMetadata?.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        const J = chat_groupMetadata?.isLidAddressingMode === true;
        const Z = r("useWAWebCommunityRestrictedAddCandidates")(chat_groupMetadata);
        const eeRef = useRef();
        const te = useState(0);
        const ne = te[0];
        const re = te[1];
        const oe = useState(0);
        const ae = oe[0];
        const ie = oe[1];
        const leRef = useRef([]);
        const se = useState(function() {
            return {
                onDiscard: function() {
                    return D.discardDialogDiscardClicked();
                },
                onShown: function() {
                    return D.discardDialogShown();
                },
                onStay: function() {
                    return D.discardDialogCancelClicked();
                }
            };
        });
        const ue = se[0];
        const ce = o("useWAWebGroupDiscardGuard").useAddMemberDiscardGuard(ne + ae, ue);
        const de = useCallback(function(e) {
            D.backButtonClicked({
                selectedContacts: leRef.current
            });
            ce(e);
        }, [
            D,
            ce
        ]);
        const me = useCallback(function() {
            return de(function() {
                return flow.pop();
            });
        }, [
            de,
            flow
        ]);
        const pe = useCallback(function() {
            return de(o("WAWebModalManager").closeModalManager);
        }, [
            de
        ]);
        const onSelectionChanged = useCallback(function({ item, selected, selectedItems }) {
            re(selectedItems.length);
            leRef.current = selectedItems.flatMap((e)=>{
                if (e instanceof r("WAWebContactModel")) {
                    return [
                        e
                    ];
                }
                return [];
            });
            if (item instanceof r("WAWebContactModel")) {
                D.contactSelectionChanged({
                    contact: item,
                    selected
                });
            }
        }, [
            D
        ]);
        const onOutContactSelectionChanged = useCallback(function(e) {
            ie(e.length);
        }, []);
        const ge = useCallback(function(e) {
            if (e === o("WAWebUim").DismissReason.UIM_INTERACTION && flow.step === S.SelectParticipant) {
                de(o("WAWebModalManager").closeModalManager);
            } else {
                flow.pop();
            }
        }, [
            flow,
            de
        ]);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
            flow.pop();
        });
        const HeComponent = function() {
            flow.pop();
            const Component = o("WAWebExistingGroupPermissionsDrawerLoadable").ExistingGroupPermissionsDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={chat} groupMetadata={r("nullthrows")(chat.groupMetadata, "groupMetadata must be nonnull for us to reach here")} onClose={function() {
                if (reopenAddGroupFlowCallback) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                    reopenAddGroupFlowCallback();
                } else {
                    o("WAWebModalManager").ModalManager.open(<RComponent chat={chat} communityName={communityName} entryPoint={d}/>);
                }
            }}/>);
        };
        const getInitialOutContacts = function() {
            return A;
        };
        const handleUsernameContactRowClicked = function({ searchStartsWithAt, username }) {
            return o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                username,
                searchLogContext: {
                    contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP,
                    searchStartsWithAt
                },
                stackOverExistingModal: true
            });
        };
        let disclaimer = null;
        const ve = chat_groupMetadata?.canSetGroupProperty() ?? false;
        if (communityName != null) {
            disclaimer = Y ? s._("All members can add community members to this group. {Clickable text for editing group permissions}", [
                s._param("Clickable text for editing group permissions", ve ? <EComponent onClick={HeComponent}/> : null)
            ]) : s._("Only admins can add community members to this group. {Clickable text for editing group permissions}", [
                s._param("Clickable text for editing group permissions", ve ? <EComponent onClick={HeComponent}/> : null)
            ]);
        } else {
            disclaimer = Y ? s._("All members are able to add others to this group. {Clickable text for editing group permissions}", [
                s._param("Clickable text for editing group permissions", ve ? <EComponent onClick={HeComponent}/> : null)
            ]) : s._("Only admins are able to add others to this group. {Clickable text for editing group permissions}", [
                s._param("Clickable text for editing group permissions", ve ? <EComponent onClick={HeComponent}/> : null)
            ]);
        }
        const Se = chat_groupMetadata?.participants.length ?? 0;
        const Re = o("WAWebMiscGatingUtils").getGroupSizeLimit(o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(chat_groupMetadata));
        const maxItemsExceedErrorMsg = s._("_j{\"*\":\"Can't add more than {participants_limit} members\",\"_1\":\"Can't add more than 1 member\"}", [
            s._plural(Re, "participants_limit")
        ]);
        let customHeader;
        if (Z != null) {
            customHeader = <V3Component testid="community-add-restricted-notice">{s._("Only community admins can add new members based on this community's settings.")}</V3Component>;
        } else if (chat.groupMetadata?.isNonAdminAndACAGJREnabled() === true) {
            customHeader = <V3Component>{s._("Admins need to approve new members based on this group's settings.")}</V3Component>;
        }
        const ke = (t)=>{
            if (t.isLid() && o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled()) {
                return t;
            }
            if (J) {
                return o("WAWebLidMigrationUtils").toLid(t);
            }
            return t;
        };
        const Ie = function(t) {
            const e = ke(t.id);
            return !!(e != null && chat_groupMetadata != null && chat_groupMetadata.participants.get(e));
        };
        const Te = ()=>{
            const e = X ? s._("Already added to community") : s._("Already added to group");
            return e.toString();
        };
        const customSecondaryText = function(t) {
            const e = ke(t);
            if (e != null && chat_groupMetadata != null && chat_groupMetadata.participants.get(e)) {
                return Te();
            }
            return null;
        };
        const xe = Z ?? x;
        const $e = r("useWAWebAddGroupParticipantMuseAgent")(chat, xe);
        const { confirmWithMuseNotice, pickerContacts } = $e;
        const Me = function(t) {
            D.addButtonClicked({
                selectedContacts: t.selectedItems
            });
            confirmWithMuseNotice(t, Ae);
        };
        const we = (t)=>L(t) > 0 && shouldSendGroupHistory && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(j);
        var Ae = function({ outContacts, selectedItems }) {
            const r = selectedItems;
            const a = outContacts ?? [];
            M(r);
            F(a);
            if (r.length === 0 && a.length > 0) {
                Oe([], a);
                return;
            }
            if (Q) {
                flow.push(S.ConfirmCommunityParticipant);
                return;
            }
            if (we(r) && !o("WAWebGroupHistorySpeedBumpConfirmedTimesAction").isGroupHistorySpeedBumpNeeded()) {
                Oe(r, a);
                return;
            }
            flow.push(S.ConfirmGroupParticipant);
            if (we(r)) {
                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.speedBumpDialogDisplayed({
                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                });
            }
        };
        const Fe = (t, n)=>{
            const e = r("WAWebFbtIntlList")(t.map((e)=>o("WAWebFrontendContactGetters").getFormattedShortName(e) || e.shortName), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
            if (we(t)) {
                return s._("_j{\"*\":\"Add {members} to \\\"{subject}\\\" group? You are sending message history to the selected members.\",\"_1\":\"Add {members} to \\\"{subject}\\\" group? You are sending message history to the selected member.\"}", [
                    s._plural(L(t)),
                    s._param("members", e),
                    s._param("subject", n)
                ]);
            }
            const a = chat_groupMetadata != null && o("WAWebGroupMetadataGetters").getIsCag(chat_groupMetadata) || !!(chat_groupMetadata != null && chat_groupMetadata.isParentGroup);
            if (a) {
                return s._("Add {members} to \"{subject}\" community?", [
                    s._param("members", e),
                    s._param("subject", n)
                ]);
            }
            return s._("Add {members} to \"{subject}\" group?", [
                s._param("members", e),
                s._param("subject", n)
            ]);
        };
        var Oe = (r, a)=>{
            if (a.length === 0) {
                o("WAWebModalManager").ModalManager.close();
            }
            o("WAWebModifyParticipantsGroupAction").addParticipants(chat, r, a).then((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    o("WAWebGroupHistoryShareToggleDefaultAction").persistGroupHistoryShareToggleDefaultOnAdd(j, shouldSendGroupHistory, hasUserToggledGroupHistory);
                    if (!!shouldSendGroupHistory && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(j)) {
                        const n = t.participants.filter(({ code })=>code === "200").map(({ userWid })=>userWid);
                        if (n.length !== 0) {
                            const r = o("WAWebGroupHistoryRestrictionHelper").filterParticipants(n);
                            const { historyReceivers, nonHistoryReceivers } = r;
                            if (historyReceivers.length !== 0 && (yield messageCountPromise) !== 0) {
                                if (o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                                    o("WAWebGroupHistorySentOnceAction").markGroupHistorySentOnce();
                                }
                                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.bundleMessageSent({
                                    bundleSendSource: o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                                    groupHistoryMessagesCount: selectedMessageCount,
                                    recipientCount: historyReceivers.length,
                                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                                });
                                o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.noticeMessageSent({
                                    bundleSendSource: o("WAWebWamEnumBundleSendSource").BUNDLE_SEND_SOURCE.IQ_RESPONSE,
                                    recipientCount: historyReceivers.length,
                                    uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                                });
                                o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(o("WAWebWidToJid").widToGroupJid(chat.id), historyReceivers, nonHistoryReceivers, selectedMessageCount, enterFlowTimestamp).catch((t)=>{
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[group-history] failed to send history bundle: ",
                                        ""
                                    ])), t).sendLogs("group-history-add-participant-send-failed");
                                });
                            }
                        }
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[add-group-participant] failed to add participants"
                ]))).catching(e).sendLogs("add-group-participant-failed");
            });
        };
        useEffect(function() {
            if (flow.step === S.ConfirmGroupParticipant) {
                eeRef.current?.focus();
            }
        }, [
            flow.step
        ]);
        let Be = null;
        if (flow.step == null) {
            return null;
        }
        const Component = o("WAWebSelectModal.react").SelectModal;
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        const Component_2 = o("WAWebCommunityAddParticipantModal.react").CommunityAddParticipantModal;
        switch(flow.step){
            case S.SelectParticipant:
                Be = <Component tsNavigationData={{
                    surface: "group-member-add-existing-group"
                }} handleUsernameContactRowClicked={handleUsernameContactRowClicked} getInitialItems={function() {
                    return N;
                }} getInitialOutContacts={getInitialOutContacts} onConfirm={Me} onBack={onBack ? me : undefined} onCancel={pe} onOverlayClick={pe} onSelectionChanged={onSelectionChanged} onOutContactSelectionChanged={onOutContactSelectionChanged} contacts={pickerContacts} suggestedContacts={Z == null ? $?.contacts : undefined} outContacts={Z == null ? O : []} outContactInviteEntryPoint={o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR} title={s._("Add member")} isDisabled={Ie} isSelected={Ie} customHeader={customHeader} customSecondaryText={customSecondaryText} listType={o("WAWebSelectModal.react").ListType.ParticipantManageModal} singleSelectionFooterType={o("WAWebSelectModalFooter.react").FooterType.CONFIRM} multipleSelectionFooterType={o("WAWebSelectModalFooter.react").FooterType.CONFIRM} shouldShowSelectionSummary={false} disclaimer={disclaimer} maxItems={Re - Se} maxItemsExceedErrorMsg={maxItemsExceedErrorMsg} groupWid={j}/>;
                break;
            case S.ConfirmGroupParticipant:
                Be = <Component_1 tsNavigationData={{
                    surface: "unknown",
                    viewName: "add-group-participant"
                }} onOK={function() {
                    if (we(N)) {
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.speedBumpDialogContinued({
                            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                        });
                        o("WAWebGroupHistorySpeedBumpConfirmedTimesAction").recordGroupHistorySpeedBumpConfirmed();
                    }
                    Oe(N, A);
                }} okText={s._("_j{\"*\":\"Add members\",\"_1\":\"Add member\"}", [
                    s._plural(N.length)
                ])} onCancel={function() {
                    if (we(N)) {
                        o("WAWebGroupHistorySenderUserJourneyLogger").GroupHistorySenderUserJourneyLogger.speedBumpDialogCanceled({
                            uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP
                        });
                    }
                    flow.pop();
                }} cancelText={r("WAWebFbtCommon")("Cancel")} ref={eeRef}>{m.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: Fe(N, chat_groupMetadata != null && o("WAWebGroupMetadataGetters").getIsUnnamed(chat_groupMetadata) ? o("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(chat_groupMetadata) : chat.contact.name)
                })}</Component_1>;
                break;
            case S.ConfirmCommunityParticipant:
                Be = <Component_2 onOK={function() {
                    return Oe(N, A);
                }} onCancel={function() {
                    return flow.pop();
                }} contacts={N}/>;
                break;
        }
        return <K flow={flow} requestDismiss={ge}>{Be}</K>;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    function L(e) {
        return e.filter((e)=>!e.id.isBot()).length;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_onClick = e.onClick;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("Edit group permissions");
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_onClick) {
            const Component = o("WAWebText.react").WAWebClickableText;
            a = <Component onClick={e_onClick} color="green">{r}</Component>;
            t[1] = e_onClick;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = RComponent;
}, 226);