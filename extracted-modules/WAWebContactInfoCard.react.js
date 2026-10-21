__d("WAWebContactInfoCard.react", [
    "fbt",
    "Promise",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddContactLabel",
    "WAWebAuthAgentAffiliationUtils",
    "WAWebAuthAgentConsumerJourneyLogger",
    "WAWebBizCtwaAGMUtils",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBusinessProfileGetters",
    "WAWebButton.react",
    "WAWebCheckmarkInfoModal.react",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebFMXGatingUtils",
    "WAWebFMXTrustSignals",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGetPrioritizedCommonGroupsAction",
    "WAWebInfoFlowLoadable",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebOrgMemberOfText.react",
    "WAWebOrgNameWithIcon.react",
    "WAWebPsFmxActionWamEvent",
    "WAWebSafetyToolsModal.react",
    "WAWebSignupGating",
    "WAWebSignupLoadingState",
    "WAWebSocialMediaTrustSignals.react",
    "WAWebStateUtils",
    "WAWebSubscriptionsGatingUtils",
    "WAWebSuspiciousConsumerCard.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUseBusinessProfile.react",
    "WAWebUsernameGatingUtils",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWidToJid",
    "WDSButtonGroup.react",
    "WDSIconIcBlock.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPrivacyTip.react",
    "WDSIconIcStore.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebAsync",
    "useWAWebBusinessProfileValues",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebEventTargetValue",
    "useWAWebPrimaryOrgMembershipForContact"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useMemo } = d;
    const f = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebContactInfoCard.react");
    const g = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebContactInfoCard.react");
    const h = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebContactInfoCard.react");
    const y = 50;
    const C = {
        buttonGroup: {
            minWidth: "x5w4yej",
            $$css: true
        },
        container: {
            maxWidth: "xlnrm6",
            width: "xh8yej3",
            boxSizing: "x9f619",
            $$css: true
        }
    };
    function b(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_chat = e.chat;
        const n_contact = e_chat.contact;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendContactGetters").getIsMyContact,
                o("WAWebContactGetters").getShortName,
                o("WAWebFrontendContactGetters").getFormattedUserAndType
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebContactValues").useContactValues(n_contact.id, a);
        const l = i[0];
        const s = i[1];
        const u = i[2];
        if (e_chat.id.isAiHub()) {
            return null;
        }
        if (l) {
            const contactName = s != null && s !== "" ? s : u.displayName;
            let m;
            if (t[1] !== contactName) {
                m = <V2Component contactName={contactName}/>;
                t[1] = contactName;
                t[2] = m;
            } else {
                m = t[2];
            }
            return m;
        }
        let p;
        if (t[3] !== e_chat) {
            p = <SComponent chat={e_chat}/>;
            t[3] = e_chat;
            t[4] = p;
        } else {
            p = t[4];
        }
        return p;
    }
    function V2Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_contactName = e.contactName;
        let a;
        if (t[0] !== e_contactName) {
            const Component = r("WDSText.react");
            a = <Component colorName="systemsBubbleContentDeemphasized" testid="fmx-card-contact-system-message" type="Body3">{s._("{contact} is a contact", [
                s._param("contact", e_contactName)
            ])}</Component>;
            t[0] = e_contactName;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    function SComponent(t) {
        let v;
        const t_chat = t.chat;
        const S_contact = t_chat.contact;
        const D = L(t_chat);
        const x = o("useWAWebChatValues").useChatValues(t_chat.id, [
            o("WAWebFrontendChatGetters").getTrusted
        ]);
        const $ = x[0];
        const P = ()=>{
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "info_flow",
                chat: o("WAWebStateUtils").unproxy(t_chat)
            } : c.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                chat: o("WAWebStateUtils").unproxy(t_chat)
            }, `info-${t_chat.id.toString()}`));
        };
        const N = o("useWAWebContactValues").useContactValues(S_contact.id, [
            (v = o("WAWebContactGetters")).getId,
            v.getNotifyName,
            o("WAWebFrontendContactGetters").getIsContactBlocked,
            v.getIsSmb,
            o("WAWebFrontendContactGetters").getCommonGroups,
            o("WAWebFrontendContactGetters").getIsMyContact,
            v.getIsEnterprise,
            v.getBusinessProfile
        ]);
        const M = N[0];
        const w = N[1];
        const A = N[2];
        const F = N[3];
        const O = N[4];
        const B = N[5];
        const W = N[6];
        const q = N[7];
        o("WAWebUseBusinessProfile.react").useBusinessProfile(S_contact.id);
        const U = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(S_contact.id, [
            o("WAWebBusinessProfileGetters").getIsAuthorizedAgent
        ]) ?? [];
        const V = U[0];
        const H = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(S_contact.id, [
            o("WAWebBusinessProfileGetters").getParentCompanyName,
            o("WAWebBusinessProfileGetters").getObaPhoneNumber
        ]) ?? [];
        const G = H[0];
        const z = H[1];
        const j = V === true;
        const K = z ?? null;
        const Q = j && G != null && G !== "";
        const X = o("WAWebAuthAgentAffiliationUtils").getAuthAgentParentWid(K);
        const Y = useCallback(function() {
            if (!(G == null || X == null)) {
                o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationTap(M.user, G, K);
                o("WAWebFindChatAction").findOrCreateLatestChat(X, "agentAffiliationRow").then(({ chat })=>{
                    o("WAWebCmd").Cmd.chatInfoDrawer(chat);
                }).catch(r("WAWebNoop"));
            }
        }, [
            M.user,
            G,
            K,
            X
        ]);
        const J = Q && G != null && X != null ? Y : null;
        const S_contact_id = S_contact.id;
        const ee = o("WAWebContactManagementGating").shouldShowAddContactButton(S_contact_id, B, o("WAWebContactManagementGating").addContactFMXCardEnabled());
        const te = r("useWAWebAsync")(function() {
            return o("WAWebFMXTrustSignals").getCountryCodeTrustSignal(S_contact);
        }, [
            S_contact
        ]);
        const te_value = te.value;
        const countryShown = k(D, te_value);
        const oe = countryShown ? te_value?.label : null;
        const ae = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!F) {
                return o("WAWebGetPrioritizedCommonGroupsAction").getPrioritizedCommonGroups(S_contact);
            }
        }), [
            S_contact,
            F
        ]);
        const ae_value = ae.value;
        const commonGroupNum = ae_value?.commonGroups.length ?? 0;
        const highlightGroupType = ae_value?.priority?.wamEnum;
        const ue = o("WAWebFMXTrustSignals").getContactTrustSignal(S_contact);
        const ce = o("WAWebFMXTrustSignals").getNewAccountTrustSignal(t_chat);
        const de = useCallback(function(e) {
            new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
                fmxEvent: e,
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
                commonGroupNum,
                countryShown,
                isDifferentCountry: te_value?.isDifferentCountry ?? undefined,
                notAContactShown: !!ue,
                isSenderSmb: F
            }).commit();
        }, [
            commonGroupNum,
            countryShown,
            te_value?.isDifferentCountry,
            ue,
            F
        ]);
        useEffect(function() {
            if (D == null) {
                new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
                    fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.HIGHLIGHT_GROUP_NAME,
                    fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
                    highlightGroupType
                }).commit();
            }
        }, [
            highlightGroupType,
            D
        ]);
        useEffect(function() {
            if (Q && G != null) {
                o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationImpression(M.user, G, K);
            }
        }, [
            M,
            Q,
            G,
            K
        ]);
        const me = function() {
            de(o("WAWebWamEnumFmxEvent").FMX_EVENT.SAFETY_TOOLS);
            o("WAWebSafetyToolsModal.react").displaySafetyToolsModal(S_contact, t_chat);
        };
        const pe = function() {
            de(o("WAWebWamEnumFmxEvent").FMX_EVENT.CONTACT_INFO);
            P();
        };
        let _e;
        const hasCommonGroups = commonGroupNum > 0;
        const ge = useMemo(function() {
            return o("WAWebBizCtwaAGMUtils").isCtWAInitiatedChat(t_chat);
        }, [
            t_chat
        ]);
        const he = r("useWAWebEventTargetValue")(o("WAWebSignupLoadingState").getSignupLoadingEmitter(), o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT, function() {
            return o("WAWebSignupLoadingState").isSignupLoading(t_chat.id.toString());
        });
        const isSignupChat = useMemo(function() {
            if (!o("WAWebSignupGating").isSignupAGMEnabled()) {
                return false;
            }
            if (he) {
                return true;
            }
            const e = t_chat.msgs.getModelsArray();
            return e.slice(-y).some((e)=>e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup);
        }, [
            t_chat.msgs,
            he
        ]);
        if (ae_value != null && D == null) {
            if (!hasCommonGroups) {
                _e = s._("No common groups");
            } else {
                const be = function() {
                    de(o("WAWebWamEnumFmxEvent").FMX_EVENT.COMMON_GROUPS);
                    P();
                };
                const ve = ae_value?.priority?.group;
                if (ve != null) {
                    if (commonGroupNum > 1) {
                        let Se;
                        const Component = o("WAWebText.react").WAWebClickableText;
                        _e = (Se = s._plural(commonGroupNum, "number_common_groups"), s._("_j{\"*\":\"You're both in {=m2}\"}", [
                            Se,
                            s._implicitParam("=m2", <Component color="teal" dataTab={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} onClick={be}>{s._("_j{\"*\":\"{number_common_groups} groups including {group-name}\",\"_1\":\"1 group including {group-name}\"}", [
                                Se,
                                s._param("group-name", ve.name)
                            ])}</Component>)
                        ]));
                    } else {
                        const Component = o("WAWebText.react").WAWebClickableText;
                        _e = s._("You're both in the group {=m1}", [
                            s._implicitParam("=m1", <Component color="teal" dataTab={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} onClick={be}>{s._("{group-name}", [
                                s._param("group-name", ve.name)
                            ])}</Component>)
                        ]);
                    }
                } else {
                    const Component = o("WAWebText.react").WAWebClickableText;
                    _e = <Component color="teal" dataTab={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} onClick={be}>{s._("_j{\"*\":\"{number_common_groups} groups in common\",\"_1\":\"1 group in common\"}", [
                        s._plural(commonGroupNum, "number_common_groups")
                    ])}</Component>;
                }
            }
        }
        const Re = o("WAWebSubscriptionsGatingUtils").isMetaVerifiedContextCardEnabled() && o("WAWebContactGetters").getShowAsMetaVerified(S_contact);
        const Le = o("WAWebFrontendContactGetters").getFormattedUserAndType(S_contact);
        const Ee = Le.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME;
        const ke = R({
            hasCommonGroups,
            isSmb: F,
            showAsMetaVerified: Re,
            isSignupChat,
            orgMembership: D
        });
        let Ie = true;
        let Te;
        let De;
        let trustSignals;
        const $e = [
            oe,
            ce,
            ue,
            I(D, ae_value, _e),
            D != null ? c.jsx(r("WAWebOrgMemberOfText.react"), {
                membership: D
            }) : null
        ].filter(Boolean);
        const Pe = q?.memberSinceText;
        const socialMediaSignals = new Map;
        if (q?.fbPage?.likes != null && q.fbPage.likes > 0) {
            socialMediaSignals.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.FACEBOOK, r("WAWebL10N").n(q.fbPage.likes));
        }
        if (q?.igProfessional?.followers != null && q.igProfessional.followers > 0) {
            socialMediaSignals.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.INSTAGRAM, r("WAWebL10N").n(q.igProfessional.followers));
        }
        const Me = s._("Business account");
        const we = Q ? s._("Representative at {company}", [
            s._param("company", <span className="x3nfvp2 x6s0dn4 x1trrmfo x117nqv4">{G}{c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                height: 12,
                testid: "psa-verified-blue",
                width: 12,
                xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
            })}</span>)
        ]) : null;
        if (Re) {
            if (o("WAWebMiscGatingUtils").isBlueEducationEnabled()) {
                De = function() {
                    o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCheckmarkInfoModal.react"), {}));
                };
            }
            const Ae = s._("Meta Verified");
            const Component = o("WAWebText.react").WAWebClickableText;
            const Component_1 = r("WDSText.react");
            const Fe = o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? <Component color="primary" onClick={De}>{Ae}</Component> : <span className="xk50ysn xt0psk2"><Component_1 type="Body2" colorName="contentDefault">{Ae}</Component_1></span>;
            let Oe = E(S_contact, D != null);
            if (Oe == null && w != null) {
                Oe = w;
            }
            if (Oe != null) {
                const Component = r("WDSText.react");
                Te = <Component type="Body2" colorName="contentDeemphasized">{Oe}</Component>;
            }
            Ie = false;
            trustSignals = [
                Fe,
                Me,
                Pe
            ].filter(Boolean);
        } else if (F || W || Ee || D != null) {
            const Be = E(S_contact, D != null);
            if (Be != null) {
                const Component = r("WDSText.react");
                Te = <Component type="Body2" colorName="contentDeemphasized" testid="fmx-card-secondary-subtitle">{Be}</Component>;
                Ie = false;
            }
            trustSignals = F || W ? [
                Me,
                Pe
            ].filter(Boolean) : $e;
        } else {
            trustSignals = $e;
        }
        const We = !$ && !A && t_chat.isSenderSuspicious === true && !F && !W && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
        if (We) {
            return c.jsx(r("WAWebSuspiciousConsumerCard.react"), {
                chat: t_chat,
                trustSignals
            });
        }
        const QeComponent = ()=>{
            const Component = o("WAWebButton.react").WAWebButtonSecondaryDestructive;
            const t = <Component onClick={function() {
                o("WAWebBlockContactUtils").handleBlock(t_chat, t_chat.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious);
                de(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
            }} icon={r("WDSIconIcBlock.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="fmx-card-block-btn">{r("WAWebFbtCommon")("Block")}</Component>;
            const Component_1 = o("WAWebButton.react").WAWebButtonSecondary;
            const a = ee ? <Component_1 tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} onClick={function() {
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield (e || (e = n("Promise"))).all([
                        f.load(),
                        h.load(),
                        g.load()
                    ]);
                    const openContactEditDrawer = t[0].openContactEditDrawer;
                    const getContactDataFromContactModel = t[1].getContactDataFromContactModel;
                    const ContactSourceType = t[2].ContactSourceType;
                    openContactEditDrawer(getContactDataFromContactModel(S_contact), ContactSourceType.FMXCard);
                })();
                de(o("WAWebWamEnumFmxEvent").FMX_EVENT.ADD_CONTACT);
            }} icon={r("WDSIconIcPersonAdd.react")} testid="fmx-card-add-contact-btn">{o("WAWebAddContactLabel").getAddToContactsLabel()}</Component_1> : null;
            if (isSignupChat) {
                return null;
            }
            if ((F || W) && ge) {
                return a;
            }
            if (W) {
                return <>{c.jsx(r("WDSButtonGroup.react"), {
                    width: "hug",
                    orientation: "horizontal",
                    secondaryButtonProps: {
                        variant: "outline",
                        type: "destructive",
                        onPress: function() {
                            o("WAWebBlockContactUtils").handleBlock(t_chat, t_chat.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious);
                            de(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
                        },
                        Icon: r("WDSIconIcBlock.react"),
                        tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
                        testid: "fmx-card-block-btn",
                        label: r("WAWebFbtCommon")("Block")
                    },
                    primaryButtonProps: {
                        variant: "outline",
                        type: "default",
                        onPress: pe,
                        Icon: r("WDSIconIcStore.react"),
                        tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
                        testid: "fmx-card-profile-btn",
                        label: s._("Profile")
                    }
                })}{a}</>;
            }
            const Component_2 = o("WAWebButton.react").ButtonGroup;
            return <Component_2 direction="vertical" align="center">{t}{a}</Component_2>;
        };
        const Ue = QeComponent();
        const Component = o("WAWebDetailImage.react").DetailImage;
        const Component_1 = o("WAWebName.react").Name;
        const Component_2 = r("WAWebOrgNameWithIcon.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebText.react").WAWebClickableText;
        const Component_6 = r("WDSText.react");
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebButton.react").WAWebButtonSimplified;
        const Component_9 = o("WAWebButton.react").WAWebButtonSecondary;
        const Component_10 = o("WAWebButton.react").ButtonGroup;
        const Component_11 = o("WAWebFlex.react").FlexColumn;
        return <Component_11 align="center" padding={[
            24,
            12
        ]} xstyle={C.container}><Component_7 align="center"><Component id={M} size={o("WAWebDetailImage.react").DetailImageSize.Medium} quality={o("WAWebDetailImage.react").DetailImageQuality.High} onClick={pe} tabIndex={0} ariaLabel={s._("Profile picture. Click to view contact info")}/><div className="x1y1aw1k"><Component_3 type="Headline2" colorName="contentDefault"><Component_2 membership={D}><Component_1 contact={S_contact} onClick={De} showBusinessCheckmark={Re} makeCheckmarkClickable={Re}/></Component_2></Component_3></div>{Te}{Ie && w != null && <Component_4 type="Body2" colorName="contentDeemphasized">{`~${w}`}</Component_4>}<div className="x1y1aw1k" data-testid="fmx-card-trust-signals"><Component_6 type="Body2" colorName="contentDeemphasized">{trustSignals.map((e, t)=><span key={t}>{e}{t < trustSignals.length - 1 && <> • </>}</span>)}{we != null && <span className="x1lliihq">{trustSignals.length > 0 && <>• </>}{J != null ? <Component_5 color="teal" onClick={J}>{we}</Component_5> : we}</span>}</Component_6></div>{socialMediaSignals.size > 0 && c.jsx(o("WAWebSocialMediaTrustSignals.react").WAWebSocialMediaTrustSignals, {
            socialMediaSignals
        })}</Component_7><Component_10 direction="vertical" align="center" paddingTop={16} xstyle={C.buttonGroup}>{!ke && <Component_8 onClick={me} icon={r("WDSIconIcPrivacyTip.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="fmx-card-safety-tools-btn">{s._("Safety tools")}</Component_8>}{A ? <Component_9 onClick={function() {
            o("WAWebBlockContactUtils").handleUnblock(t_chat.contact, t_chat.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious);
            de(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
        }} tabOrder={o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD} testid="fmx-card-unblock-btn">{r("WAWebFbtCommon")("Unblock")}</Component_9> : Ue}</Component_10></Component_11>;
    }
    SComponent.displayName = `${SComponent.name} [from ${i.id}]`;
    function R({ hasCommonGroups, isSignupChat, isSmb, orgMembership, showAsMetaVerified }) {
        return hasCommonGroups && orgMembership == null || isSmb || showAsMetaVerified || isSignupChat;
    }
    function L(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] !== e.accountLid) {
            n = function() {
                return e.accountLid;
            };
            t[0] = e.accountLid;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e) {
            a = [
                e
            ];
            t[2] = e;
            t[3] = a;
        } else {
            a = t[3];
        }
        const i = r("useWAWebEventTargetValue")(e, "change", n, a);
        let l;
        if (t[4] !== i) {
            l = i == null ? null : o("WAWebWidToJid").userLidtoLidUserJid(i);
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return r("useWAWebPrimaryOrgMembershipForContact")(l);
    }
    function E(e, t) {
        if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && !t) {
            return null;
        }
        const n = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType(e);
        const n_displayName = n.displayName;
        if (n_displayName === e.name) {
            return null;
        }
        return n_displayName;
    }
    function k(e, t) {
        return e == null && t?.shown === true;
    }
    function I(e, t, n) {
        if (e == null) {
            return n;
        }
        if (t == null) {
            return null;
        }
        return s._("_j{\"*\":\"{number_common_groups} groups in common\",\"_1\":\"1 group in common\"}", [
            s._plural(t.commonGroups.length, "number_common_groups")
        ]);
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    l.default = b;
}, 226);