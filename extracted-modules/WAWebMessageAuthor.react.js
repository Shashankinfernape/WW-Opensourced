__d("WAWebMessageAuthor.react", [
    "fbt",
    "WALogger",
    "WAWebBotProfileGetters",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentAuthorName",
    "WAWebGroupAgentOwnerLabel.react",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupChatProfilePicture.react",
    "WAWebGroupHoverCardGatingUtils",
    "WAWebGroupHoverCardLoadable",
    "WAWebKeyboardIsKeyActivation",
    "WAWebLidMigrationDebugUI",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebMessageAuthorUnknownUserContext",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterAdminProfileDetailsDrawerLoadable",
    "WAWebNewsletterAdminProfilePicture.react",
    "WAWebNewsletterGatingUtils",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebPopover.react",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStylesEnv",
    "WAWebUnknownUserDisplayEnricher",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWid",
    "WDSFocusStateStyles",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "fbs",
    "isStringNullOrEmpty",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebMsgValues",
    "useWAWebOptionalBotProfileValues",
    "useWAWebOrgMemberIdentity"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const c_useRef = c.useRef;
    const p = {
        marginBlock3: {
            marginTop: "x7r5mf7",
            marginBottom: "xahult9",
            $$css: true
        }
    };
    function _({ groupWid, isBotFutureproofPlaceholder, isStatus, name }) {
        if (isBotFutureproofPlaceholder) {
            return s._("Meta AI").toString();
        }
        if (isStatus) {
            return `${name} · ${s._("Status").toString()}`;
        }
        if (groupWid) {
            const i = o("WAWebChatCollection").ChatCollection.get(groupWid);
            const l = i ? i.formattedTitle : s._("Group").toString();
            if (l) {
                return `${name} · ${l}`;
            }
            return name;
        }
        return name;
    }
    const f = {
        author: {
            display: "x3nfvp2",
            maxWidth: "x193iq5w",
            fontSize: "xj9w6cj",
            lineHeight: "x19v9tvf",
            fontWeight: "xk50ysn",
            $$css: true
        },
        name: {
            flex: "xkz0k9k",
            paddingInlineStart: "xyiysdx",
            marginInlineStart: "xe9ewy2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        psaName: {
            color: "x1v5yvga",
            $$css: true
        },
        number: {
            flex: "x3psx0u",
            direction: "xzt5al7",
            $$css: true
        },
        screenName: {
            marginInlineStart: "x13fj5qh",
            fontWeight: "x1fcty0u",
            color: "xhslqc4",
            "::before_content": "x1knvif",
            $$css: true
        },
        screenNameMac: {
            WebkitFontSmoothing: "xvmahel",
            MozOsxFontSmoothing: "xlh3980",
            $$css: true
        },
        networkScreenName: {
            "::before_content": "xnahlnb",
            $$css: true
        },
        screenNameElevatedPushNames: {
            display: "x1lliihq",
            minWidth: "x12tqqkd",
            paddingInlineEnd: "x11lfxj5",
            flex: "x98rzlu",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            "::before_content": "x7edwua",
            textDecoration: "xt0b8zv",
            $$css: true
        },
        numberElevatedPushNames: {
            fontSize: "x1ncwhqj",
            display: "x1lliihq",
            whiteSpace: "xuxw1ft",
            marginInlineEnd: "x11t971q",
            flex: "x1okw0bk",
            fontWeight: "x1fcty0u",
            color: "xhslqc4",
            $$css: true
        },
        numberElevatedPushNamesMac: {
            WebkitFontSmoothing: "xvmahel",
            MozOsxFontSmoothing: "xlh3980",
            $$css: true
        },
        picInBubble: {
            position: "x1n2onr6",
            $$css: true
        },
        authorElevatedPushNames: {
            display: "x78zum5",
            $$css: true
        },
        authorLabel: {
            lineHeight: "x1fc57z9",
            $$css: true
        },
        label: {
            color: "x1bvqhpb",
            lineHeight: "x1d3mw78",
            fontWeight: "x1fcty0u",
            $$css: true
        },
        groupHistoryMessage: {
            filter: "x1olsc1v",
            $$css: true
        },
        hoverableUnderline: {
            textDecoration: "xt0b8zv",
            $$css: true
        },
        focusableRounding: {
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        }
    };
    const g = {
        verticalAlignTop: {
            verticalAlign: "x16dsc37",
            $$css: true
        }
    };
    function HComponent(t) {
        const a = o("react-compiler-runtime").c(178);
        const { albumId, chat, disableClick, displayType, msgKey, quotedRemoteJid, senderNameColorOverride, showMemberLabel, stopClickPropagation } = t;
        const $ = showMemberLabel === undefined ? true : showMemberLabel;
        const P = stopClickPropagation === undefined ? false : stopClickPropagation;
        let N;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            let M;
            N = [
                (M = o("WAWebMsgGetters")).getSender,
                M.getType,
                M.getIsLive,
                M.getIsStatus,
                M.getId,
                M.getQuotedMsg,
                o("WAWebFrontendMsgGetters").getShouldDisplaySelf,
                M.getIsGroupHistoryMessageInOwnChat,
                M.getNewsletterAdminProfile,
                M.getIsBotFutureproofPlaceholder,
                M.getIsGroupStatus,
                o("WAWebFrontendMsgGetters").getIsMemberLabelEligible,
                M.getIsNewsletterMsg
            ];
            a[0] = N;
        } else {
            N = a[0];
        }
        const w = o("useWAWebMsgValues").useMsgValues(msgKey, N);
        const A = w[0];
        const F = w[1];
        const O = w[3];
        const B = w[4];
        const W = w[6];
        const q = w[7];
        const newsletterAdminProfile = w[8];
        const isBotFutureproofPlaceholder = w[9];
        const H = w[10];
        const G = w[11];
        const z = w[12];
        let j;
        if (a[1] !== A) {
            j = A == null ? A : o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(A) ?? A;
            a[1] = A;
            a[2] = j;
        } else {
            j = a[2];
        }
        const Q = j;
        const X = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, z);
        const Y = chat || X;
        let J;
        if (a[3] !== t.contact.id) {
            J = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(t.contact.id) ?? t.contact.id;
            a[3] = t.contact.id;
            a[4] = J;
        } else {
            J = a[4];
        }
        const agentWid = J;
        let te;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            let ne;
            te = [
                (ne = o("WAWebContactGetters")).getId,
                o("WAWebFrontendContactGetters").getFormattedNameAndType,
                ne.getIsSupportAccount,
                ne.getName,
                ne.getNotifyName,
                ne.getPushname,
                ne.getVerifiedLevel,
                ne.getVerifiedName
            ];
            a[5] = te;
        } else {
            te = a[5];
        }
        const re = o("useWAWebContactValues").useContactValues(agentWid, te);
        const oe = re[0];
        const ae = re[1];
        const ie = re[2];
        const le = re[3];
        const se = re[4];
        const pushname = re[5];
        const ce = re[6];
        const de = re[7];
        let me;
        if (a[6] !== agentWid) {
            me = agentWid.isFbidBot() ? agentWid : null;
            a[6] = agentWid;
            a[7] = me;
        } else {
            me = a[7];
        }
        let pe;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            pe = [
                o("WAWebBotProfileGetters").getProduct,
                o("WAWebBotProfileGetters").getCreatorLid,
                o("WAWebBotProfileGetters").getName
            ];
            a[8] = pe;
        } else {
            pe = a[8];
        }
        const _e = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(me, pe);
        const fe = _e[0];
        const creatorLid = _e[1];
        const profileName = _e[2];
        const attribution = Y != null && o("WAWebChatGetters").getIsGroup(Y) ? o("WAWebGroupAgentOwnerLabel.react").getGroupAgentAttribution(agentWid, Y, {
            creatorLid,
            product: fe
        }) : null;
        const Ce = o("WAWebGroupAgentAuthorName").shouldUseGroupAgentAuthorName({
            agentWid,
            chat: Y,
            product: fe,
            profileName
        });
        const be = S(Y, displayType, H) || R(Y, displayType);
        const ve = r("useWAWebOrgMemberIdentity")(be ? t.contact : null, be ? L(Y, A) : null);
        const Se = E(Y, ve);
        let Re;
        if (a[9] !== le || a[10] !== agentWid || a[11] !== fe || a[12] !== profileName || a[13] !== Ce || a[14] !== Se.authorName || a[15] !== pushname) {
            Re = Ce ? o("WAWebGroupAgentAuthorName").getGroupAgentAuthorName({
                agentWid,
                product: fe,
                profileName,
                pushname
            }) : Se.authorName ?? le;
            a[9] = le;
            a[10] = agentWid;
            a[11] = fe;
            a[12] = profileName;
            a[13] = Ce;
            a[14] = Se.authorName;
            a[15] = pushname;
            a[16] = Re;
        } else {
            Re = a[16];
        }
        const Ee = Re;
        const Se_screenName = Se.screenName;
        const Ie = r("useWAWebContactFormattedUsernameOrPhoneByChat")(X, t.contact);
        const { formattedUsernameOrPhone, isPhoneNumberForceMasked, type } = Ie;
        const ae_displayName = ae.displayName;
        const Pe = X != null && o("WAWebChatGetters").getIsGroup(X);
        const Ne = (nameRendered)=>{
            if (Pe && type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER) {
                o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed(o("WAWebMessageAuthorUnknownUserContext").getMessageAuthorUnknownUserContext({
                    displayType,
                    isAnnouncementGroup: X != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(X),
                    isCommunityGroup: X?.groupMetadata?.parentGroup != null,
                    isPhoneNumberForceMasked,
                    isCommunityLoaded: X?.groupMetadata?.getParentGroupChat()?.groupMetadata?.participants != null,
                    nameRendered
                }), t.contact.id);
            }
        };
        const disableClick_1 = !!disableClick || isPhoneNumberForceMasked === true;
        const we = c_useRef(null);
        const Ae = c_useRef(null);
        const Fe = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(X);
        const Oe = displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || displayType === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE || v(newsletterAdminProfile);
        const Be = function(n) {
            let e = Q;
            if (e != null) {
                if (X != null) {
                    const r = o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(t.contact.id, X);
                    if (o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(r, t.contact, X, "messageAuthor")) {
                        if (P) {
                            n.stopPropagation();
                        }
                        return;
                    }
                }
                if (X != null && o("WAWebChatGetters").getIsGroup(X)) {
                    e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(e, "message_author_handle_click");
                }
                if (e != null) {
                    if (P) {
                        n.stopPropagation();
                    }
                    o("WAWebFindChatAction").findOrCreateLatestChat(e, "messageAuthor").then(({ chat })=>{
                        const sourceGroupChatOrNewsletter = X != null && (o("WAWebChatGetters").getIsGroup(X) || o("WAWebChatGetters").getIsNewsletter(X)) ? X : undefined;
                        o("WAWebCmd").Cmd.chatInfoDrawer(chat, {
                            sourceGroupChatOrNewsletter
                        });
                    });
                }
            }
        };
        if (!Y) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!"
            ]))).sendLogs("author-with-no-chat");
        }
        const We = disableClick_1 || isBotFutureproofPlaceholder ? null : Be;
        let qe;
        if (a[17] !== We) {
            qe = function(t) {
                if (We != null && r("WAWebKeyboardIsKeyActivation")(t)) {
                    t.preventDefault();
                    We(t);
                }
            };
            a[17] = We;
            a[18] = qe;
        } else {
            qe = a[18];
        }
        const handleKeyDown = qe;
        const tabbable = We != null;
        const He = tabbable ? "0" : undefined;
        const Ge = tabbable ? "button" : undefined;
        let ze;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            ze = o("WAWebGroupHoverCardGatingUtils").isGroupHoverCardEnabled();
            a[19] = ze;
        } else {
            ze = a[19];
        }
        const Ke = ze && We != null && !W && !Oe && X != null && o("WAWebChatGetters").getIsGroup(X);
        const Qe = Ke ? "hover-popover" : "controllable";
        const Xe = Ke ? d.jsx(o("WAWebGroupHoverCardLoadable").GroupHoverCardLoadable, {
            contact: t.contact,
            chatWid: Y?.id,
            source: "messageAuthor"
        }) : <div/>;
        let Ye;
        if (a[20] !== Qe || a[21] !== Xe) {
            Ye = {
                target: Ae,
                hoverTarget: we,
                position: o("WAWebPopover.react").PopoverPosition.Top,
                alignment: o("WAWebPopover.react").PopoverAlignment.Start,
                initHandling: Qe,
                openingDelay: 300,
                transitionName: "fade-fast",
                element: Xe,
                name: "MessageAuthorHoverCard",
                dismissable: false
            };
            a[20] = Qe;
            a[21] = Xe;
            a[22] = Ye;
        } else {
            Ye = a[22];
        }
        const Je = o("WAWebPopover.react").usePopoverElement(Ye);
        const Je_popover = Je.popover;
        const Component = r("WAWebMemberLabelRenderer.react");
        const et = $ && o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForMsg(G, X) ? <Component memberLabelArgs={{
            from: "message",
            chat: X,
            sender: A
        }} onClick={Be}/> : null;
        const tt = o("useWAWebDefaultProfileColors").useDefaultProfileColors(Q, newsletterAdminProfile?.name);
        const tt_foreground = tt.foreground;
        const rt = o("useWAWebGroupColors").useGroupsColorStyle(1, "color");
        const ot = (u || (u = r("stylex")))(f.author, Fe && f.authorElevatedPushNames, (F === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || F === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT || F === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION || F === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE) && o("WDSPaddings.stylex").wdsPaddings.paddingStart4, Oe && f.picInBubble, senderNameColorOverride ?? tt_foreground ?? rt, q && f.groupHistoryMessage, t.rootXstyle);
        let at;
        if (W) {
            let it;
            if (a[23] !== isBotFutureproofPlaceholder || a[24] !== O || a[25] !== quotedRemoteJid) {
                it = _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name: r("fbs")._("You").toString()
                });
                a[23] = isBotFutureproofPlaceholder;
                a[24] = O;
                a[25] = quotedRemoteJid;
                a[26] = it;
            } else {
                it = a[26];
            }
            let lt;
            if (a[27] !== it) {
                lt = d.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: it
                });
                a[27] = it;
                a[28] = lt;
            } else {
                lt = a[28];
            }
            at = lt;
        } else if (v(newsletterAdminProfile)) {
            const st = newsletterAdminProfile?.name;
            let ut;
            if (a[29] !== isBotFutureproofPlaceholder || a[30] !== O || a[31] !== quotedRemoteJid || a[32] !== st) {
                ut = _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name: st
                });
                a[29] = isBotFutureproofPlaceholder;
                a[30] = O;
                a[31] = quotedRemoteJid;
                a[32] = st;
                a[33] = ut;
            } else {
                ut = a[33];
            }
            let ct;
            if (a[34] === Symbol.for("react.memo_cache_sentinel")) {
                ct = (u || (u = r("stylex")))(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f.focusableRounding);
                a[34] = ct;
            } else {
                ct = a[34];
            }
            let dt;
            if (a[35] !== newsletterAdminProfile) {
                dt = function() {
                    const Component = o("WAWebNewsletterAdminProfileDetailsDrawerLoadable").NewsletterAdminProfileDetailsDrawerLoadable;
                    return o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component newsletterAdminProfile={newsletterAdminProfile} onClose={o("WAWebDrawerManager").closeDrawerRight}/>);
                };
                a[35] = newsletterAdminProfile;
                a[36] = dt;
            } else {
                dt = a[36];
            }
            let mt;
            if (a[37] !== ut || a[38] !== dt) {
                const Component = o("WAWebEmojiText.react").EmojiText;
                mt = <Component text={ut} className={ct} role="button" onClick={dt} tabIndex="0"/>;
                a[37] = ut;
                a[38] = dt;
                a[39] = mt;
            } else {
                mt = a[39];
            }
            at = mt;
        } else if (Ee || H || de && ce !== 0 || ie) {
            const pt = o("WAWebLidMigrationDebugUI").getShouldShowLidDebugUI(oe);
            let _t = Ee ?? de;
            if (H) {
                _t = pushname;
            }
            _t = pt ? `${_t} [LID]` : _t;
            const ft = ie ? ae_displayName : _t;
            let gt;
            if (a[40] !== isBotFutureproofPlaceholder || a[41] !== O || a[42] !== quotedRemoteJid || a[43] !== ft) {
                gt = _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name: ft
                });
                a[40] = isBotFutureproofPlaceholder;
                a[41] = O;
                a[42] = quotedRemoteJid;
                a[43] = ft;
                a[44] = gt;
            } else {
                gt = a[44];
            }
            let ht;
            if (a[45] !== We) {
                ht = (u || (u = r("stylex")))(f.name, We != null && f.hoverableUnderline, We != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, We != null && f.focusableRounding);
                a[45] = We;
                a[46] = ht;
            } else {
                ht = a[46];
            }
            let yt;
            if (a[47] !== Ge || a[48] !== He || a[49] !== We || a[50] !== gt || a[51] !== ht) {
                const Component = o("WAWebEmojiText.react").EmojiText;
                yt = <Component key="author" text={gt} className={ht} emojiXstyle={g.verticalAlignTop} testid="author" onClick={We} tabIndex={He} role={Ge}/>;
                a[47] = Ge;
                a[48] = He;
                a[49] = We;
                a[50] = gt;
                a[51] = ht;
                a[52] = yt;
            } else {
                yt = a[52];
            }
            const Ct = y(agentWid, Y?.id) ? <C key="authorCheckMark"/> : null;
            let bt;
            if (a[53] !== yt || a[54] !== Ct) {
                bt = [
                    yt,
                    Ct
                ];
                a[53] = yt;
                a[54] = Ct;
                a[55] = bt;
            } else {
                bt = a[55];
            }
            at = bt;
        } else if (r("WAWebWid").isPSA(oe)) {
            let vt;
            if (a[56] !== We) {
                vt = (u || (u = r("stylex")))(f.name, f.psaName, We != null && f.hoverableUnderline, We != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, We != null && f.focusableRounding);
                a[56] = We;
                a[57] = vt;
            } else {
                vt = a[57];
            }
            const St = vt;
            const name = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) ? "WhatsApp Business" : "WhatsApp";
            let Lt;
            if (a[58] !== isBotFutureproofPlaceholder || a[59] !== O || a[60] !== quotedRemoteJid) {
                Lt = _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name
                });
                a[58] = isBotFutureproofPlaceholder;
                a[59] = O;
                a[60] = quotedRemoteJid;
                a[61] = Lt;
            } else {
                Lt = a[61];
            }
            let Et;
            if (a[62] !== St || a[63] !== Ge || a[64] !== He || a[65] !== We || a[66] !== Lt) {
                const Component = o("WAWebEmojiText.react").EmojiText;
                Et = <Component key="author" text={Lt} className={St} emojiXstyle={g.verticalAlignTop} testid="author" onClick={We} tabIndex={He} role={Ge}/>;
                a[62] = St;
                a[63] = Ge;
                a[64] = He;
                a[65] = We;
                a[66] = Lt;
                a[67] = Et;
            } else {
                Et = a[67];
            }
            let kt;
            if (a[68] === Symbol.for("react.memo_cache_sentinel")) {
                kt = <C key="authorCheckMark"/>;
                a[68] = kt;
            } else {
                kt = a[68];
            }
            let It;
            if (a[69] !== Et) {
                It = [
                    Et,
                    kt
                ];
                a[69] = Et;
                a[70] = It;
            } else {
                It = a[70];
            }
            at = It;
        } else if (Fe) {
            at = [];
            let Tt;
            if (a[71] !== oe || a[72] !== Se_screenName || a[73] !== se || a[74] !== pushname) {
                Tt = oe?.isBot() === true ? s._("Meta AI").toString() : Se_screenName ?? se ?? pushname;
                a[71] = oe;
                a[72] = Se_screenName;
                a[73] = se;
                a[74] = pushname;
                a[75] = Tt;
            } else {
                Tt = a[75];
            }
            const xt = Tt;
            let $t;
            if (a[76] !== xt || a[77] !== O) {
                $t = !O && !r("isStringNullOrEmpty")(xt);
                a[76] = xt;
                a[77] = O;
                a[78] = $t;
            } else {
                $t = a[78];
            }
            const Pt = $t;
            const Nt = b({
                handleKeyDown,
                nameRendered: Pt,
                onClick: We,
                tabbable
            });
            const { phoneInteractiveProps, phoneIsTheControl } = Nt;
            if (Pt) {
                let At;
                if (a[79] !== albumId || a[80] !== B) {
                    At = r("isStringNullOrEmpty")(albumId) ? `${B.toString()}-push-name` : `${albumId}-push-name`;
                    a[79] = albumId;
                    a[80] = B;
                    a[81] = At;
                } else {
                    At = a[81];
                }
                const Ft = At;
                let Ot;
                if (a[82] !== Se_screenName || a[83] !== We) {
                    Ot = (u || (u = r("stylex")))(f.screenNameElevatedPushNames, Se_screenName != null && f.networkScreenName, We != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, We != null && f.focusableRounding);
                    a[82] = Se_screenName;
                    a[83] = We;
                    a[84] = Ot;
                } else {
                    Ot = a[84];
                }
                let Bt;
                if (a[85] !== xt) {
                    Bt = o("WAWebMessageUiUtils").getAriaLabelForMaybeName(xt);
                    a[85] = xt;
                    a[86] = Bt;
                } else {
                    Bt = a[86];
                }
                let Wt;
                if (a[87] !== xt || a[88] !== Ge || a[89] !== He || a[90] !== Ft || a[91] !== We || a[92] !== Ot || a[93] !== Bt) {
                    const Component = o("WAWebEmojiText.react").EmojiText;
                    Wt = <Component key={Ft} className={Ot} testid="author" onClick={We} tabIndex={He} role={Ge} direction="auto" ellipsify text={xt} ariaLabel={Bt}/>;
                    a[87] = xt;
                    a[88] = Ge;
                    a[89] = He;
                    a[90] = Ft;
                    a[91] = We;
                    a[92] = Ot;
                    a[93] = Bt;
                    a[94] = Wt;
                } else {
                    Wt = a[94];
                }
                at = [
                    Wt
                ];
            }
            let qt;
            if (a[95] !== oe || a[96] !== formattedUsernameOrPhone || a[97] !== isBotFutureproofPlaceholder || a[98] !== O || a[99] !== quotedRemoteJid) {
                qt = oe != null && oe.isLid() ? formattedUsernameOrPhone : _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name: formattedUsernameOrPhone
                });
                a[95] = oe;
                a[96] = formattedUsernameOrPhone;
                a[97] = isBotFutureproofPlaceholder;
                a[98] = O;
                a[99] = quotedRemoteJid;
                a[100] = qt;
            } else {
                qt = a[100];
            }
            const Ut = qt;
            Ne(Pt);
            const Vt = (u || (u = r("stylex")))(f.numberElevatedPushNames, o("WAWebStylesEnv").isOSMac && f.numberElevatedPushNamesMac, We != null && f.hoverableUnderline, phoneIsTheControl && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, phoneIsTheControl && f.focusableRounding);
            let Ht;
            if (a[101] !== B) {
                Ht = B.toString();
                a[101] = B;
                a[102] = Ht;
            } else {
                Ht = a[102];
            }
            const Gt = `${Ht}-number`;
            let zt;
            if (a[103] !== phoneInteractiveProps || a[104] !== Ut || a[105] !== Vt || a[106] !== Gt) {
                zt = <span key={Gt} {...babelHelpers.extends({
                    className: Vt,
                    "data-testid": "author"
                }, phoneInteractiveProps, {
                    children: Ut
                })}/>;
                a[103] = phoneInteractiveProps;
                a[104] = Ut;
                a[105] = Vt;
                a[106] = Gt;
                a[107] = zt;
            } else {
                zt = a[107];
            }
            at.push(zt);
        } else {
            let Kt;
            if (a[108] !== oe || a[109] !== formattedUsernameOrPhone || a[110] !== isBotFutureproofPlaceholder || a[111] !== O || a[112] !== quotedRemoteJid) {
                Kt = oe != null && oe.isLid() ? formattedUsernameOrPhone : _({
                    groupWid: quotedRemoteJid,
                    isStatus: O,
                    isBotFutureproofPlaceholder,
                    name: formattedUsernameOrPhone
                });
                a[108] = oe;
                a[109] = formattedUsernameOrPhone;
                a[110] = isBotFutureproofPlaceholder;
                a[111] = O;
                a[112] = quotedRemoteJid;
                a[113] = Kt;
            } else {
                Kt = a[113];
            }
            const Qt = Kt;
            let Xt = null;
            if (!O) {
                if (oe?.isBot() === true) {
                    let Yt;
                    if (a[114] === Symbol.for("react.memo_cache_sentinel")) {
                        Yt = s._("Meta AI").toString();
                        a[114] = Yt;
                    } else {
                        Yt = a[114];
                    }
                    Xt = Yt;
                } else {
                    if (Se_screenName != null) {
                        Xt = Se_screenName;
                    } else if (r("isStringNullOrEmpty")(se)) {
                        Xt = pushname;
                    } else {
                        Xt = se;
                    }
                }
            }
            let Jt;
            if (a[115] !== Xt) {
                Jt = r("isStringNullOrEmpty")(Xt);
                a[115] = Xt;
                a[116] = Jt;
            } else {
                Jt = a[116];
            }
            const Zt = !Jt;
            Ne(Zt);
            let en;
            let tn;
            if (a[117] !== Zt || a[118] !== handleKeyDown || a[119] !== We || a[120] !== tabbable) {
                const nn = b({
                    handleKeyDown,
                    nameRendered: Zt,
                    onClick: We,
                    tabbable
                });
                const { phoneInteractiveProps, phoneIsTheControl } = nn;
                en = phoneInteractiveProps;
                tn = (u || (u = r("stylex")))(f.number, We != null && f.hoverableUnderline, phoneIsTheControl && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, phoneIsTheControl && f.focusableRounding);
                a[117] = Zt;
                a[118] = handleKeyDown;
                a[119] = We;
                a[120] = tabbable;
                a[121] = en;
                a[122] = tn;
            } else {
                en = a[121];
                tn = a[122];
            }
            let an;
            if (a[123] !== B) {
                an = B.toString();
                a[123] = B;
                a[124] = an;
            } else {
                an = a[124];
            }
            const ln = `${an}-number`;
            let sn;
            if (a[125] !== en || a[126] !== Qt || a[127] !== tn || a[128] !== ln) {
                sn = <span key={ln} {...babelHelpers.extends({
                    className: tn,
                    "data-testid": "author"
                }, en, {
                    children: Qt
                })}/>;
                a[125] = en;
                a[126] = Qt;
                a[127] = tn;
                a[128] = ln;
                a[129] = sn;
            } else {
                sn = a[129];
            }
            const un = sn;
            if (a[130] !== albumId || a[131] !== Xt || a[132] !== Zt || a[133] !== B || a[134] !== Ge || a[135] !== He || a[136] !== Se_screenName || a[137] !== We || a[138] !== un) {
                at = [
                    un
                ];
                const cn = at;
                if (Zt) {
                    const dn = r("isStringNullOrEmpty")(albumId) ? `${B.toString()}-push-name` : `${albumId}-push-name`;
                    const Component = o("WAWebEmojiText.react").EmojiText;
                    cn.push(<Component key={dn} className={(u || (u = r("stylex")))(f.screenName, o("WAWebStylesEnv").isOSMac && f.screenNameMac, Se_screenName != null && f.networkScreenName, We != null && f.hoverableUnderline, We != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, We != null && f.focusableRounding)} testid="author" onClick={We} tabIndex={He} role={Ge} direction="auto" ellipsify text={Xt}/>);
                }
                a[130] = albumId;
                a[131] = Xt;
                a[132] = Zt;
                a[133] = B;
                a[134] = Ge;
                a[135] = He;
                a[136] = Se_screenName;
                a[137] = We;
                a[138] = un;
                a[139] = at;
            } else {
                at = a[139];
            }
        }
        const mn = attribution != null && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS && o("WAWebGroupAgentOwnerLabel.react").hasGroupAgentLabel(attribution, o("WAWebGroupAgentOwnerLabel.react").GroupAgentLabelSurface.MESSAGE_AUTHOR) ? d.jsx(o("WAWebGroupAgentOwnerLabel.react").WAWebGroupAgentOwnerLabel, {
            attribution,
            surface: o("WAWebGroupAgentOwnerLabel.react").GroupAgentLabelSurface.MESSAGE_AUTHOR
        }) : null;
        if (Oe) {
            let _n = mn;
            let fn;
            if (a[140] !== displayType || a[141] !== Q || a[142] !== Y?.groupMetadata?.participants) {
                let gn;
                fn = displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT && Q != null && !!(!(Y == null || (gn = Y.groupMetadata) == null || (gn = gn.participants) == null || (gn = gn.get(Q)) == null) && gn.isAdmin);
                a[140] = displayType;
                a[141] = Q;
                a[142] = Y?.groupMetadata?.participants;
                a[143] = fn;
            } else {
                fn = a[143];
            }
            const yn = fn;
            if (yn) {
                let Cn;
                if (a[144] === Symbol.for("react.memo_cache_sentinel")) {
                    Cn = s._("Community admin");
                    a[144] = Cn;
                } else {
                    Cn = a[144];
                }
                _n = Cn;
            }
            let bn;
            if (a[145] !== yn || a[146] !== newsletterAdminProfile) {
                bn = ({
                    0: {
                        className: "x19dbzi3"
                    },
                    1: {
                        className: "x19dbzi3 x1k70j0n xzueoph"
                    }
                })[!!(yn || v(newsletterAdminProfile)) << 0];
                a[145] = yn;
                a[146] = newsletterAdminProfile;
                a[147] = bn;
            } else {
                bn = a[147];
            }
            let vn;
            if (a[148] !== disableClick_1 || a[149] !== newsletterAdminProfile || a[150] !== t.contact || a[151] !== Y) {
                vn = v(newsletterAdminProfile) ? d.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, {
                    newsletterAdminProfile
                }) : d.jsx(r("WAWebGroupChatProfilePicture.react"), {
                    userContact: t.contact,
                    chatWid: r("nullthrows")(Y).id,
                    disableClick: disableClick_1,
                    usePicInBubbleLayout: true
                });
                a[148] = disableClick_1;
                a[149] = newsletterAdminProfile;
                a[150] = t.contact;
                a[151] = Y;
                a[152] = vn;
            } else {
                vn = a[152];
            }
            let Sn;
            if (a[153] !== bn || a[154] !== vn) {
                Sn = <div {...babelHelpers.extends({}, bn, {
                    children: vn
                })}/>;
                a[153] = bn;
                a[154] = vn;
                a[155] = Sn;
            } else {
                Sn = a[155];
            }
            let Rn;
            if (a[156] === Symbol.for("react.memo_cache_sentinel")) {
                Rn = {
                    className: "x78zum5 xdt5ytf x1cy8zhl xl56j7k x6ikm8r x10wlt62"
                };
                a[156] = Rn;
            } else {
                Rn = a[156];
            }
            let Ln;
            if (a[157] !== _n) {
                Ln = _n != null && <div {...babelHelpers.extends({
                    "data-testid": "group-agent-owner-label-container"
                }, (u || (u = r("stylex"))).props(f.label, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginBottom4), {
                    children: _n
                })}/>;
                a[157] = _n;
                a[158] = Ln;
            } else {
                Ln = a[158];
            }
            return <div className={ot} role={t.role || ""}>{Sn}<div {...babelHelpers.extends({}, Rn, {
                children: [
                    <div {...babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.authorLabel, Fe && f.authorElevatedPushNames, v(newsletterAdminProfile) ? p.marginBlock3 : o("WDSMargins.stylex").wdsMargins.marginTop4, !v(newsletterAdminProfile) && o("WDSMargins.stylex").wdsMargins.marginBottom2), {
                        children: at
                    })}/>,
                    Ln,
                    et
                ]
            })}/></div>;
        }
        let En;
        if (a[159] !== mn) {
            En = mn == null ? null : <span data-testid="group-agent-owner-label-container" className="x2lah0s x1hvl878 x13fj5qh x6ikm8r x10wlt62 xlyipyv xuxw1ft x1fcty0u x1bvqhpb">{mn}</span>;
            a[159] = mn;
            a[160] = En;
        } else {
            En = a[160];
        }
        const kn = En;
        let In;
        if (a[161] !== Ke) {
            In = Ke && <div ref={Ae} className="xk2xgvr x16hy4bp xifccgj xeawwkn xqtp20y x6ikm8r x10wlt62"/>;
            a[161] = Ke;
            a[162] = In;
        } else {
            In = a[162];
        }
        const Tn = t.role || "";
        let Dn;
        if (a[163] !== at || a[164] !== kn || a[165] !== Ke) {
            Dn = Ke ? <span ref={we} className="x78zum5 x98rzlu xeuugli">{at}{kn}</span> : <>{at}{kn}</>;
            a[163] = at;
            a[164] = kn;
            a[165] = Ke;
            a[166] = Dn;
        } else {
            Dn = a[166];
        }
        let xn;
        if (a[167] !== ot || a[168] !== Tn || a[169] !== Dn) {
            xn = <div className={ot} role={Tn}>{Dn}</div>;
            a[167] = ot;
            a[168] = Tn;
            a[169] = Dn;
            a[170] = xn;
        } else {
            xn = a[170];
        }
        let $n;
        if (a[171] !== et) {
            $n = <div>{et}</div>;
            a[171] = et;
            a[172] = $n;
        } else {
            $n = a[172];
        }
        const Pn = Ke && Je_popover;
        let Nn;
        if (a[173] !== In || a[174] !== xn || a[175] !== $n || a[176] !== Pn) {
            Nn = <>{In}{xn}{$n}{Pn}</>;
            a[173] = In;
            a[174] = xn;
            a[175] = $n;
            a[176] = Pn;
            a[177] = Nn;
        } else {
            Nn = a[177];
        }
        return Nn;
    }
    function y(agentWid, t) {
        if (t == null) {
            return false;
        }
        if (o("WAWebBotUtils").isMetaAiBot(agentWid)) {
            return o("WAWebBotUtils").isMetaAiBot(t);
        }
        if (o("WAWebBotUtils").isBotChannelFBID(agentWid)) {
            return o("WAWebBotUtils").isBotChannelFBID(t);
        }
        return false;
    }
    function C() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div className="x1rg5ohu x3psx0u xwklpps xvijh9v xxymvpz">{o("WAWebMiscGatingUtils").isBlueEnabled() ? d.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                height: 18,
                testid: "psa-verified-blue",
                width: 18,
                xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
            }) : d.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                height: 18,
                testid: "psa-verified",
                width: 18,
                xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
            })}</div>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function b({ handleKeyDown, nameRendered, onClick, tabbable }) {
        const phoneIsTheControl = tabbable && !nameRendered;
        const phoneInteractiveProps = onClick != null ? {
            onClick,
            onKeyDown: phoneIsTheControl ? handleKeyDown : undefined,
            role: phoneIsTheControl ? "button" : undefined,
            tabIndex: phoneIsTheControl ? 0 : undefined
        } : {};
        return {
            phoneInteractiveProps,
            phoneIsTheControl
        };
    }
    function v(newsletterAdminProfile) {
        return newsletterAdminProfile != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled();
    }
    function S(e, displayType, n) {
        return e != null && o("WAWebChatGetters").getIsGroup(e) && !n && (displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION || displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || displayType === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG);
    }
    function R(e, displayType) {
        return e != null && !o("WAWebChatGetters").getIsGroup(e) && displayType === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG;
    }
    function L(e, t) {
        if (e == null || o("WAWebChatGetters").getIsGroup(e)) {
            return t;
        }
        return e.accountLid ?? t;
    }
    function E(e, t) {
        if (e != null && o("WAWebChatGetters").getIsGroup(e)) {
            return {
                authorName: t.displayName,
                screenName: null
            };
        }
        const r = t.membership?.memberName.trim();
        return {
            authorName: null,
            screenName: t.displayName == null || r == null || r === "" ? null : r
        };
    }
    l.default = HComponent;
}, 226);