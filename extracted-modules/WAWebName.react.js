__d("WAWebName.react", [
    "fbt",
    "WAArrayMoveToFirst",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebBizAiStrings",
    "WAWebBotExposedName",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebBotProfileCollection",
    "WAWebBroadcastName.react",
    "WAWebBusinessProfileTypes",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebClassnames",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGuestNameFormat",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadStageColors",
    "WAWebLeadSublistGating",
    "WAWebLidMigrationDebugUI",
    "WAWebMiscGatingUtils",
    "WAWebNewsletterName.react",
    "WAWebParticipantListUtils",
    "WAWebPrimaryFeaturesModel",
    "WAWebResolveBotProfile",
    "WAWebUserPrefsMeUser",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WDSButton.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "cr:17281",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebGroupMetadataValues",
    "useWAWebGroupOrgMembershipChanges",
    "useWAWebLeadStageFromStore",
    "useWAWebListener",
    "useWAWebLogUnknownUserDisplayed",
    "useWAWebOrgMemberDisplayName"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "chat",
        "selectable"
    ];
    const u = [
        "chat",
        "selectable"
    ];
    const c = [
        "chat"
    ];
    const d = [
        "contact"
    ];
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = {
        marginTop1: {
            marginTop: "xvijh9v",
            $$css: true
        },
        marginInlineStart3: {
            marginInlineStart: "x7phf20",
            $$css: true
        }
    };
    const h = {
        spaceBefore: {
            "::before_content": "xjuopq5",
            "::before_whiteSpace": "xulcptl",
            $$css: true
        },
        chatAssignmentIconAssignedToYou: {
            color: "x3j997e",
            $$css: true
        },
        chatAssignmentIconAssignedToOthers: {
            color: "xms21op",
            $$css: true
        },
        icon: {
            display: "x78zum5",
            flex: "x3psx0u",
            verticalAlign: "x16dsc37",
            $$css: true
        },
        smallCheckmarkButton: {
            width: "x1kky2od",
            height: "xlup9mm",
            $$css: true
        },
        largeCheckmarkButton: {
            width: "xvy4d1p",
            height: "xxk0z11",
            $$css: true
        },
        hasLabels: {
            display: "x1jfb8zj",
            overflowX: "xuce83p",
            overflowY: "x1bft6iq",
            textOverflow: "x1i7k8ik",
            whiteSpace: "xq9mrsl",
            marginInlineEnd: "x11t971q",
            $$css: true
        },
        nameContainer: {
            display: "x78zum5",
            $$css: true
        }
    };
    const y = ({ contact, elevatedPushNamesEnabled, isMyContact, orgMemberDisplayName, showMessageYourselfName, showNotifyName, useDisplayName, useLiftMeUp, useShortName, useVerifiedName, you })=>{
        const f = elevatedPushNamesEnabled && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(contact);
        if (showMessageYourselfName && o("WAWebContactGetters").getIsMe(contact)) {
            return {
                displayName: s._("{nameOrPhoneNumber}", [
                    s._param("nameOrPhoneNumber", useVerifiedName ? contact.verifiedName : contact.name ?? o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(contact))
                ]),
                isUnknownUser: false
            };
        }
        if (contact.id.isAiHub()) {
            return {
                displayName: o("WAWebBizAiStrings").getBizAiHubTitle().toString(),
                isUnknownUser: false
            };
        }
        if (contact.id.isBot() && !o("WAWebBotExposedName").shouldDisplayProfileName(contact.id, o("WAWebResolveBotProfile").resolveBotSupportInput(contact.id), o("WAWebBotProfileCollection").BotProfileCollection.get(contact.id)?.name)) {
            return {
                displayName: o("WAWebBotExposedName").getUnknownAccountName(),
                isUnknownUser: false
            };
        }
        if (orgMemberDisplayName != null) {
            const h = o("WAWebContactGetters").getName(contact);
            if (useShortName && !f && h != null && h !== "") {
                const y = o("WAWebFrontendContactGetters").getFormattedShortName(contact);
                if (y) {
                    return {
                        displayName: y,
                        isUnknownUser: false
                    };
                }
            }
            return {
                displayName: orgMemberDisplayName,
                isUnknownUser: false
            };
        }
        const C = o("WAWebFrontendContactGetters").getDisplayName(contact);
        const b = o("WAWebContactGetters").getPushname(contact);
        if (useDisplayName && C) {
            const v = o("WAWebFrontendContactGetters").getDisplayNameType(contact);
            if (v === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && useLiftMeUp && b != null) {
                return {
                    displayName: `~${b}`,
                    isUnknownUser: false
                };
            }
            return {
                displayName: C,
                isUnknownUser: v === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
            };
        }
        if (useShortName && !f) {
            const S = o("WAWebFrontendContactGetters").getFormattedShortName(contact);
            if (S) {
                return {
                    displayName: S,
                    isUnknownUser: false
                };
            }
        }
        if (useVerifiedName && contact.verifiedName) {
            return {
                displayName: contact.verifiedName,
                isUnknownUser: false
            };
        }
        if (you && o("WAWebContactGetters").getIsMe(contact)) {
            return {
                displayName: o("WAWebFrontendContactGetters").getFormattedName(contact),
                isUnknownUser: false
            };
        }
        if (elevatedPushNamesEnabled && b && !isMyContact) {
            return {
                displayName: `~${b}`,
                isUnknownUser: false
            };
        }
        if (showNotifyName && f) {
            const R = o("WAWebContactGetters").getNotifyName(contact);
            if (R != null) {
                return {
                    displayName: elevatedPushNamesEnabled ? o("WAWebChatContactUtils").getFormattedNotifyName(R) : `~${R}`,
                    displayNameAriaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(R),
                    isUnknownUser: false
                };
            }
        }
        if (!useLiftMeUp) {
            const L = o("WAWebFrontendContactGetters").getFormattedUserAndType(contact);
            const { displayName, type } = L;
            return {
                displayName,
                isUnknownUser: type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
            };
        }
        const type_1 = o("WAWebFrontendContactGetters").getFormattedUserAndType(contact).type;
        if (type_1 === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && b != null) {
            return {
                displayName: contact.verifiedName,
                isUnknownUser: false
            };
        }
        if (o("WAWebContactGetters").getIsBusiness(contact) && contact.verifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
            return {
                displayName: contact.verifiedName,
                isUnknownUser: false
            };
        }
        return {
            displayName: `~${b}`,
            isUnknownUser: false
        };
    };
    const CComponent = (t)=>{
        const e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
        let n;
        if (t.some((t)=>t.deviceId === e)) {
            const a = s._("Assigned to you");
            n = <span title={a}>{f.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
                width: 18,
                height: 18,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginEnd4,
                    h.chatAssignmentIconAssignedToYou
                ],
                "aria-label": a,
                testid: "chat-assignment"
            })}</span>;
        } else if (t.length > 0) {
            const i = s._("Assigned to {agentName}", [
                s._param("agentName", t[0].name)
            ]);
            n = <span title={i}>{f.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
                width: 18,
                height: 18,
                xstyle: [
                    o("WDSMargins.stylex").wdsMargins.marginEnd4,
                    h.chatAssignmentIconAssignedToOthers
                ],
                "aria-label": i,
                testid: "chat-assignment"
            })}</span>;
        } else {
            n = null;
        }
        return n;
    };
    function Icon(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.xstyle) {
            n = [
                e.xstyle,
                o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
            ];
            t[0] = e.xstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = f.jsx(r("WDSIconWdsIcVerifiedFilled.react"), babelHelpers.extends({}, e, {
                testid: "psa-verified-blue",
                viewBox: o("WAWebVerifiedBlueStyles.stylex").VERIFIED_BLUE_FIXED_BOX_VIEWBOX,
                xstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function V1Component(e) {
        "use no forget";
        const { contact, element } = e;
        const element_1 = element === undefined ? "span" : element;
        const { highlightText, titlify, ellipsify, breakWord, you } = e;
        const you_1 = you === undefined ? false : you;
        const { selectable, useShortName } = e;
        const useShortName_1 = useShortName === undefined ? false : useShortName;
        const e_useDisplayName = e.useDisplayName;
        const useDisplayName = e_useDisplayName === undefined ? false : e_useDisplayName;
        const { onClick, showLabelIcon } = e;
        const N = showLabelIcon === undefined ? false : showLabelIcon;
        const { showBusinessCheckmark, showNotifyName } = e;
        const showNotifyName_1 = showNotifyName === undefined ? false : showNotifyName;
        const e_elevatedPushNamesEnabled = e.elevatedPushNamesEnabled;
        const O = e_elevatedPushNamesEnabled === undefined ? false : e_elevatedPushNamesEnabled;
        const e_useLiftMeUp = e.useLiftMeUp;
        const useLiftMeUp = e_useLiftMeUp === undefined ? false : e_useLiftMeUp;
        const e_useVerifiedName = e.useVerifiedName;
        const useVerifiedName = e_useVerifiedName === undefined ? false : e_useVerifiedName;
        const { firstLabel, xstyle, showChatAssignmentIcon } = e;
        const z = showChatAssignmentIcon === undefined ? false : showChatAssignmentIcon;
        const e_assignedAgents = e.assignedAgents;
        const K = e_assignedAgents === undefined ? [] : e_assignedAgents;
        const e_skipCheckMark = e.skipCheckMark;
        const X = e_skipCheckMark === undefined ? false : e_skipCheckMark;
        const e_showMessageYourselfName = e.showMessageYourselfName;
        const showMessageYourselfName = e_showMessageYourselfName === undefined ? false : e_showMessageYourselfName;
        const { testid, isVerifiedNewsletter, makeCheckmarkClickable } = e;
        const ne = makeCheckmarkClickable === undefined ? false : makeCheckmarkClickable;
        const e_checkmarkLarge = e.checkmarkLarge;
        const oe = e_checkmarkLarge === undefined ? false : e_checkmarkLarge;
        const { truncateName, emojiXstyle, containerXstyle, tabIndex, unknownUserLogContext } = e;
        const ce = o("useWAWebContactValues").useOptionalContactValues(contact?.id, [
            o("WAWebContactGetters").getIsPSA,
            o("WAWebContactGetters").getIsIAS,
            o("WAWebContactGetters").getIsCAPISupportAccount,
            o("WAWebFrontendContactGetters").getFormattedUser,
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getFormattedShortName,
            o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
            o("WAWebFrontendContactGetters").getDisplayName,
            o("WAWebContactGetters").getLabels,
            o("WAWebContactGetters").getName,
            o("WAWebContactGetters").getNotifyName,
            o("WAWebContactGetters").getIsMe,
            o("WAWebContactGetters").getVerifiedName,
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getIsGuest
        ]);
        const de = o("useWAWebContactValues").useOptionalContactValues(contact?.id, [
            o("WAWebFrontendContactGetters").getIsMyContact
        ]) ?? [];
        const isMyContact = de[0];
        const orgMemberDisplayName = r("useWAWebOrgMemberDisplayName")(contact, contact?.id);
        const _e = (contact == null ? undefined : contact.id.isBot()) === true;
        const fe = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(_e ? o("WAWebBotProfileCollection").BotProfileCollection : null, [
            "add",
            "change:product",
            "change:isDeprecated",
            "change:isDeleted"
        ], fe);
        o("useWAWebListener").useListener(_e ? o("WAWebPrimaryFeaturesModel").PrimaryFeatures : null, o("WAWebBotPrimaryFeaturesFrontend").BOT_PRIMARY_FEATURE_CHANGE_EVENTS, fe);
        const ge = contact != null && ce != null ? y({
            contact,
            showNotifyName: showNotifyName_1,
            elevatedPushNamesEnabled: O,
            useLiftMeUp,
            useDisplayName,
            useShortName: useShortName_1,
            useVerifiedName,
            you: you_1,
            showMessageYourselfName,
            isMyContact,
            orgMemberDisplayName
        }) : null;
        o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(unknownUserLogContext, contact, ge?.isUnknownUser === true);
        const he = o("useWAWebContactValues").useOptionalContactValues(contact?.id, [
            o("WAWebContactGetters").getLabels
        ]) ?? [];
        const ye = he[0];
        const Ce = contact != null && o("WAWebLeadSublistGating").isContactEligibleForLeadSublist(contact) ? S(e.labels ?? ye) : null;
        const be = r("useWAWebLeadStageFromStore")(contact == null ? undefined : contact.id.toString(), Ce != null);
        if (contact == null || ce == null || ge == null) {
            return "";
        }
        const ve = ce[0];
        const Se = ce[1];
        const Re = ce[2];
        const Le = ce[3];
        const Ee = ce[4];
        const ke = ce[5];
        const Ie = ce[6];
        const Te = ce[7];
        const De = ce[8];
        const xe = ce[9];
        const $e = ce[10];
        const Pe = ce[11];
        const Ne = ce[12];
        const Me = ce[13];
        const we = ce[14];
        let Ae;
        if (highlightText != null && highlightText !== "") {
            const Fe = highlightText.split(/\s+/).filter(Boolean);
            Ae = o("WAWebFormatConfiguration").SearchName({
                terms: Fe
            });
        }
        const { displayName, displayNameAriaLabel } = ge;
        if (!displayName) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "displayName:",
                ",\n               formattedName:",
                ",\n               name:",
                ",\n               formattedShortName:",
                ",\n               formattedUser:",
                ""
            ])), displayName, Ee, xe, ke, Le).sendLogs("display name is null or undefined");
            return "";
        }
        const We = o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(displayName, we);
        const qe = displayNameAriaLabel != null ? o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(displayNameAriaLabel, we) : null;
        const Ue = o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUI(Me) && n("cr:17281");
        const Ve = r("WAReplaceRepeatingWhitespace")(We.toString());
        const Component = o("WAWebEmojiText.react").EmojiText;
        const He = <div {...babelHelpers.extends({}, {
            0: {
                className: "x78zum5"
            },
            1: {
                className: "xuxw1ft x6ikm8r x10wlt62 xlyipyv x78zum5"
            }
        }[!!truncateName << 0], {
            children: [
                <Component text={Ve} ariaLabel={qe != null ? r("WAReplaceRepeatingWhitespace")(qe.toString()) : undefined} element={element_1} className={o("WAWebClassnames").classnamesConvertMeToStylexPlease(null, e.className)} formatters={Ae} titlify={titlify} ellipsify={ellipsify} breakWord={breakWord} tabIndex={tabIndex} direction="auto" selectable={selectable} inlineblock onClick={onClick} role={onClick != null ? "link" : undefined} xstyle={xstyle} testid={testid} emojiXstyle={emojiXstyle}/>,
                showMessageYourselfName && f.jsx(o("WAWebEmojiText.react").EmojiText, {
                    emojiXstyle,
                    testid: "you-label",
                    text: s._("(You)"),
                    xstyle: h.spaceBefore
                }),
                Ue && n("cr:17281") && f.jsx(n("cr:17281"), {})
            ]
        })}/>;
        const Ge = e.labels || De;
        if (Ge?.length && firstLabel != null) {
            r("WAArrayMoveToFirst")(Ge, firstLabel);
        }
        const ze = N === true && Ge != null && Ge.length ? f.jsx(o("WAWebLabels.react").Labels, {
            labels: Ge,
            colorOverrides: Ce != null ? new Map([
                [
                    Ce,
                    o("WAWebLeadStageColors").getLeadStageDotColor(be ?? o("WAWebLeadStage").LeadStage.LEAD)
                ]
            ]) : null,
            showName: false,
            iconXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart4
        }) : null;
        const je = !X && (ve || Se || Re || !!showBusinessCheckmark || isVerifiedNewsletter);
        const Ke = z ? CComponent(K) : null;
        if (je === true) {
            let Qe;
            if (o("WAWebMiscGatingUtils").isBlueEnabled()) {
                const Xe = oe ? 21 : 14;
                const Component = r("WDSButton.react");
                Qe = ne && onClick ? <Component Icon={Icon} aria-label={s._("Verified information")} onPress={onClick} variant="borderless" xstyle={oe ? h.largeCheckmarkButton : h.smallCheckmarkButton}/> : f.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: Xe,
                    width: Xe,
                    testid: "psa-verified-blue",
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                });
            } else {
                Qe = f.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                    height: 18,
                    testid: "psa-verified",
                    width: 18,
                    xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                });
            }
            return <div {...babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, truncateName && h.nameContainer), {
                children: [
                    He,
                    <div {...babelHelpers.extends({}, p.props(isVerifiedNewsletter === true ? o("WAWebNewsletterName.react").styles.newsletterIcon : [
                        h.icon,
                        g.marginTop1,
                        g.marginInlineStart3
                    ]), {
                        children: Qe
                    })}/>,
                    <div className="x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37">{Ke}{ze}</div>
                ]
            })}/>;
        }
        if (Ke || ze) {
            return <div {...babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, truncateName && h.nameContainer), {
                children: [
                    He,
                    <div className="x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37">{Ke}{ze}</div>
                ]
            })}/>;
        }
        return <div {...babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, truncateName && h.nameContainer, containerXstyle), {
            children: He
        })}/>;
    }
    V1Component.displayName = `${V1Component.name} [from ${i.id}]`;
    function S(e) {
        return (e ?? []).find((e)=>o("WAWebLabelCollection").LabelCollection.get(e)?.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID);
    }
    function RComponent(e) {
        "use no forget";
        const { chat, element, highlightText, titlify, ellipsify, breakWord, onClick, showLabelIcon, firstLabel, className, xstyle, showChatAssignmentIcon } = e;
        const S = showChatAssignmentIcon === undefined ? false : showChatAssignmentIcon;
        const e_assignedAgents = e.assignedAgents;
        const L = e_assignedAgents === undefined ? [] : e_assignedAgents;
        const { testid, overrideCommunityAnnouncementGroupName } = e;
        const I = overrideCommunityAnnouncementGroupName === undefined ? false : overrideCommunityAnnouncementGroupName;
        const e_checkmarkLarge = e.checkmarkLarge;
        const D = e_checkmarkLarge === undefined ? false : e_checkmarkLarge;
        const e_truncateName = e.truncateName;
        let $;
        const P = o("useWAWebChatValues").useChatValues(e.chat.id, [
            o("WAWebFrontendChatGetters").getFormattedTitle,
            o("WAWebChatGetters").getLabels
        ]);
        const N = P[0];
        const M = P[1];
        const w = o("useWAWebGroupMetadataValues").useGroupMetadataValues(e.groupMetadata.id, [
            o("WAWebGroupMetadataGetters").getIsUnnamed,
            o("WAWebGroupMetadataGetters").getIsCag,
            o("WAWebGroupMetadataGetters").getGroupType
        ]);
        const A = w[0];
        const isCAG = w[1];
        const O = w[2];
        const B = o("useWAWebGroupMetadataValues").useGroupMetadataValues(e.groupMetadata.id, [
            o("WAWebFrontendGroupMetadataGetters").getSupport,
            o("WAWebFrontendGroupMetadataGetters").getIsLidAddressingMode,
            o("WAWebFrontendGroupMetadataGetters").getParentGroup
        ]);
        const W = B[0];
        const q = B[1];
        const U = B[2];
        const participants = e.groupMetadata.participants;
        const H = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        r("useWAWebGroupOrgMembershipChanges")(A ? e.groupMetadata : null, H);
        o("useWAWebListener").useListener(participants, [
            "bulk_add",
            "bulk_remove",
            "reset",
            "sort",
            "change:isAdmin",
            "change:isSuperAdmin",
            "remove",
            "add"
        ], H);
        if (highlightText != null && highlightText !== "") {
            const G = highlightText.split(/\s+/).filter(Boolean);
            $ = o("WAWebFormatConfiguration").SearchName({
                terms: G
            });
        }
        const z = e.labels || M;
        if (z?.length && firstLabel != null) {
            r("WAArrayMoveToFirst")(z, firstLabel);
        }
        const j = showLabelIcon === true && z != null && z.length ? f.jsx(o("WAWebLabels.react").Labels, {
            labels: z,
            showName: false,
            iconXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart4
        }) : null;
        const K = I && O === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._("Announcements") : r("WAReplaceRepeatingWhitespace")(A ? o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(e.groupMetadata, true) : chat.title());
        const Q = o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUIForGroups(q);
        const X = U;
        const Y = X ? r("WAWebGroupMetadataCollection").get(X)?.isLidAddressingMode === true : false;
        const J = o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUIForGroups(Y);
        const Component = o("WAWebEmojiText.react").EmojiText;
        const Z = <><Component text={K} element={element} className={className} xstyle={xstyle} formatters={$} titlify={titlify} ellipsify={ellipsify} breakWord={breakWord} direction="auto" inlineblock onClick={onClick} testid={testid}/>{Q && n("cr:17281") && f.jsx(n("cr:17281"), {
            isCAG
        })}{J && n("cr:17281") && f.jsx(n("cr:17281"), {
            isParentGroup: true
        })}</>;
        if (W) {
            const te = D ? 21 : 18;
            return <div {...babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, e_truncateName && h.nameContainer, !!j && h.hasLabels), {
                children: [
                    Z,
                    <div className="x78zum5 x3psx0u x16dsc37 xvijh9v x7phf20">{o("WAWebMiscGatingUtils").isBlueEnabled() ? f.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        width: te,
                        height: te,
                        testid: "psa-verified-blue",
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                    }) : f.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        height: 18,
                        testid: "psa-verified",
                        width: 18,
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                    })}</div>,
                    <div className="x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37">{j}</div>
                ]
            })}/>;
        }
        const ne = S ? CComponent(L) : null;
        if (ne || j) {
            return <div {...babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, e_truncateName && h.nameContainer, h.hasLabels), {
                children: [
                    Z,
                    <div className="x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37">{ne}{j}</div>
                ]
            })}/>;
        }
        return Z;
    }
    RComponent.displayName = `${RComponent.name} [from ${i.id}]`;
    function LComponent(t) {
        const a = o("react-compiler-runtime").c(49);
        const i = o("useWAWebChatValues").useOptionalChatValues(t.chat?.id, [
            o("WAWebChatGetters").getIsUser,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getIsBroadcast,
            o("WAWebFrontendChatGetters").getGroupMetadata,
            o("WAWebFrontendChatGetters").getFormattedTitle
        ]) ?? [
            false,
            false,
            false,
            null,
            null
        ];
        const l = i[0];
        const s = i[1];
        const m = i[2];
        const p = i[3];
        const _ = i[4];
        if (t.chat && p != null && !l && !s && !m) {
            let g;
            let h;
            if (a[0] !== t) {
                const { chat, selectable } = t;
                const b = babelHelpers.objectWithoutPropertiesLoose(t, e);
                g = chat;
                h = b;
                a[0] = t;
                a[1] = g;
                a[2] = h;
            } else {
                g = a[1];
                h = a[2];
            }
            let S;
            if (a[3] !== _) {
                S = function() {
                    return <span>{_}</span>;
                };
                a[3] = _;
                a[4] = S;
            } else {
                S = a[4];
            }
            let L;
            if (a[5] !== g || a[6] !== p || a[7] !== h) {
                L = <RComponent {...babelHelpers.extends({
                    chat: g,
                    groupMetadata: p
                }, h)}/>;
                a[5] = g;
                a[6] = p;
                a[7] = h;
                a[8] = L;
            } else {
                L = a[8];
            }
            let E;
            if (a[9] !== S || a[10] !== L) {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                E = <Component name="group-name" fallback={S}>{L}</Component>;
                a[9] = S;
                a[10] = L;
                a[11] = E;
            } else {
                E = a[11];
            }
            return E;
        }
        if (t.chat && !l && s) {
            let k;
            let I;
            let T;
            if (a[12] !== t) {
                k = t.chat;
                T = t.selectable;
                I = babelHelpers.objectWithoutPropertiesLoose(t, u);
                a[12] = t;
                a[13] = k;
                a[14] = I;
                a[15] = T;
            } else {
                k = a[13];
                I = a[14];
                T = a[15];
            }
            let D;
            if (a[16] !== k || a[17] !== I || a[18] !== T) {
                D = f.jsx(o("WAWebNewsletterName.react").NewsletterName, babelHelpers.extends({
                    chat: k,
                    selectable: T
                }, I));
                a[16] = k;
                a[17] = I;
                a[18] = T;
                a[19] = D;
            } else {
                D = a[19];
            }
            return D;
        }
        if (t.chat && m) {
            const { breakWord, chat, className, element, ellipsify, firstLabel, highlightText, labels, onClick, selectable, showLabelIcon, testid, titlify, xstyle } = t;
            let H;
            if (a[20] !== _) {
                H = function() {
                    return <span>{_}</span>;
                };
                a[20] = _;
                a[21] = H;
            } else {
                H = a[21];
            }
            let G;
            if (a[22] !== breakWord || a[23] !== chat || a[24] !== className || a[25] !== element || a[26] !== ellipsify || a[27] !== firstLabel || a[28] !== highlightText || a[29] !== labels || a[30] !== onClick || a[31] !== selectable || a[32] !== showLabelIcon || a[33] !== testid || a[34] !== titlify || a[35] !== xstyle) {
                const Component = o("WAWebBroadcastName.react").BroadcastName;
                G = <Component chat={chat} breakWord={breakWord} className={className} element={element} ellipsify={ellipsify} firstLabel={firstLabel} highlightText={highlightText} labels={labels} onClick={onClick} selectable={selectable} showLabelIcon={showLabelIcon} testid={testid} titlify={titlify} xstyle={xstyle}/>;
                a[22] = breakWord;
                a[23] = chat;
                a[24] = className;
                a[25] = element;
                a[26] = ellipsify;
                a[27] = firstLabel;
                a[28] = highlightText;
                a[29] = labels;
                a[30] = onClick;
                a[31] = selectable;
                a[32] = showLabelIcon;
                a[33] = testid;
                a[34] = titlify;
                a[35] = xstyle;
                a[36] = G;
            } else {
                G = a[36];
            }
            let z;
            if (a[37] !== H || a[38] !== G) {
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                z = <Component name="broadcast-name" fallback={H}>{G}</Component>;
                a[37] = H;
                a[38] = G;
                a[39] = z;
            } else {
                z = a[39];
            }
            return z;
        }
        let j;
        let K;
        if (t.chat) {
            let Q;
            let X;
            if (a[40] !== t) {
                Q = t.chat;
                X = babelHelpers.objectWithoutPropertiesLoose(t, c);
                a[40] = t;
                a[41] = Q;
                a[42] = X;
            } else {
                Q = a[41];
                X = a[42];
            }
            j = Q.contact;
            K = X;
        } else {
            let Y;
            let J;
            if (a[43] !== t) {
                Y = t.contact;
                J = babelHelpers.objectWithoutPropertiesLoose(t, d);
                a[43] = t;
                a[44] = Y;
                a[45] = J;
            } else {
                Y = a[44];
                J = a[45];
            }
            j = Y;
            K = J;
        }
        let Z;
        if (a[46] !== j || a[47] !== K) {
            Z = <V1Component {...babelHelpers.extends({
                contact: j
            }, K)}/>;
            a[46] = j;
            a[47] = K;
            a[48] = Z;
        } else {
            Z = a[48];
        }
        return Z;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(12);
        const { chat, contact, xstyle } = e;
        let l;
        if (t[0] !== xstyle) {
            l = (p || (p = r("stylex"))).props(xstyle);
            t[0] = xstyle;
            t[1] = l;
        } else {
            l = t[1];
        }
        const useShortName = !!contact.shortName;
        let u;
        if (t[2] !== contact || t[3] !== useShortName) {
            u = <LComponent contact={contact} useShortName={useShortName} showNotifyName elevatedPushNamesEnabled useLiftMeUp/>;
            t[2] = contact;
            t[3] = useShortName;
            t[4] = u;
        } else {
            u = t[4];
        }
        let c;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            c = <span> • </span>;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== chat) {
            d = chat.groupMetadata && <RComponent chat={chat} groupMetadata={chat.groupMetadata}/>;
            t[6] = chat;
            t[7] = d;
        } else {
            d = t[7];
        }
        let m;
        if (t[8] !== l || t[9] !== u || t[10] !== d) {
            m = <span {...babelHelpers.extends({}, l, {
                children: [
                    u,
                    c,
                    d
                ]
            })}/>;
            t[8] = l;
            t[9] = u;
            t[10] = d;
            t[11] = m;
        } else {
            m = t[11];
        }
        return m;
    }
    l.ContactName = V1Component;
    l.GroupName = RComponent;
    l.Name = LComponent;
    l.ContactAndGroupName = EComponent;
}, 226);