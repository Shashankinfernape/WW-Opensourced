__d("WAWebGroupChatProfilePicture.react", [
    "fbt",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebChatParticipantColor",
    "WAWebCmd",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFindChatAction",
    "WAWebGroupAgentProfileRouting",
    "WAWebGroupHoverCardGatingUtils",
    "WAWebGroupHoverCardLoadable",
    "WAWebMessageUiUtils",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebPopover.react",
    "WAWebPrivacyBlurWrapper.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebStylexVars.stylex",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    const m = {
        height: "x16ye13r",
        position: "x10l6tqk",
        insetInlineStart: "x1wnpwf8",
        left: "",
        right: "",
        zIndex: "x1vjfegm",
        $$css: true
    };
    const p = {
        groupProfilePictureSticky: function(t) {
            return [
                m,
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t.lastMessageHasReaction ? `calc(100% - ${o("WAWebStylexVars.stylex").reactionBubbleVariables.height} - ${o("WDSVars.stylex").WDSVars.spacingSinglePlus})` : `calc(100% - ${o("WDSVars.stylex").WDSVars.spacingSinglePlus})`)
                }
            ];
        },
        metaAiBotBackground: {
            backgroundColor: "x1ew7x2d",
            $$css: true
        }
    };
    function _(e) {
        const n = o("react-compiler-runtime").c(34);
        const { chatWid, disableClick, lastMessageHasReaction, sticky, usePicInBubbleLayout, userContact } = e;
        const g = disableClick === undefined ? false : disableClick;
        const lastMessageHasReaction_1 = lastMessageHasReaction === undefined ? false : lastMessageHasReaction;
        const y = sticky === undefined ? false : sticky;
        const C = usePicInBubbleLayout === undefined ? false : usePicInBubbleLayout;
        const sourceGroupChatOrNewsletter = o("WAWebChatCollection").ChatCollection.get(chatWid);
        let v;
        if (n[0] !== userContact.id) {
            v = o("WAWebBotUtils").isMetaAiBot(userContact.id) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(userContact.id);
            n[0] = userContact.id;
            n[1] = v;
        } else {
            v = n[1];
        }
        const S = v;
        const authorColor = sourceGroupChatOrNewsletter ? o("WAWebChatParticipantColor").getAssignedColor(sourceGroupChatOrNewsletter, userContact.id, `WAWebGroupChatProfilePicture-${o("WAWebQuotedMessageUserJourneyLogger").getChatType(sourceGroupChatOrNewsletter.id) ?? ""}`) : 1;
        let L;
        if (n[2] !== g || n[3] !== S) {
            L = o("WAWebGroupHoverCardGatingUtils").isGroupHoverCardEnabled() && !S && !g;
            n[2] = g;
            n[3] = S;
            n[4] = L;
        } else {
            L = n[4];
        }
        const E = L;
        const k = u_useRef(null);
        const I = function(t) {
            if (!(sourceGroupChatOrNewsletter != null && o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(userContact.id, sourceGroupChatOrNewsletter), userContact, sourceGroupChatOrNewsletter, "groupChatProfilePicture"))) {
                const e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(userContact.id, "handle_click_group_chat_profile_picture");
                if (e != null) {
                    o("WAWebFindChatAction").findOrCreateLatestChat(e, "groupChatProfilePicture").then(({ chat })=>{
                        if (chat != null) {
                            o("WAWebCmd").Cmd.chatInfoDrawer(chat, sourceGroupChatOrNewsletter != null ? {
                                sourceGroupChatOrNewsletter
                            } : undefined);
                        }
                    });
                }
            }
        };
        const isElevatedPushNamesEnabled = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(sourceGroupChatOrNewsletter);
        const D = o("WAWebMessageUiUtils").getAuthorName({
            contact: userContact,
            isElevatedPushNamesEnabled,
            sender: userContact.id
        });
        const x = E ? "hover-popover" : "controllable";
        let $;
        if (n[5] !== chatWid || n[6] !== E || n[7] !== userContact) {
            $ = E ? c.jsx(o("WAWebGroupHoverCardLoadable").GroupHoverCardLoadable, {
                contact: userContact,
                chatWid
            }) : <div/>;
            n[5] = chatWid;
            n[6] = E;
            n[7] = userContact;
            n[8] = $;
        } else {
            $ = n[8];
        }
        let P;
        if (n[9] !== x || n[10] !== $) {
            P = {
                target: k,
                position: o("WAWebPopover.react").PopoverPosition.Top,
                alignment: o("WAWebPopover.react").PopoverAlignment.Start,
                initHandling: x,
                openingDelay: 300,
                transitionName: "fade-fast",
                element: $,
                name: "GroupChatProfilePictureHoverCard",
                dismissable: false
            };
            n[9] = x;
            n[10] = $;
            n[11] = P;
        } else {
            P = n[11];
        }
        const N = o("WAWebPopover.react").usePopoverElement(P);
        const N_popover = N.popover;
        let w;
        if (n[12] !== D) {
            w = s._("Open chat details for {author-name}", [
                s._param("author-name", D)
            ]);
            n[12] = D;
            n[13] = w;
        } else {
            w = n[13];
        }
        const A = w;
        const F = u_useRef(null);
        let O;
        if (n[14] !== y) {
            O = y ? {
                className: "x5yr21d"
            } : undefined;
            n[14] = y;
            n[15] = O;
        } else {
            O = n[15];
        }
        const B = C ? "group_profile_picture_in_bubble" : "group_profile_picture";
        const W = g ? null : I;
        const q = S && p.metaAiBotBackground;
        let U;
        if (n[16] !== A || n[17] !== authorColor || n[18] !== y || n[19] !== B || n[20] !== W || n[21] !== q || n[22] !== userContact.id) {
            const Component = o("WAWebDetailImage.react").DetailImage;
            U = <div ref={k}><Component testId="group-chat-profile-picture" id={userContact.id} size={o("WAWebDetailImage.react").DetailImageSize.None} theme={B} loadAnimation={false} onClick={W} authorColor={authorColor} tabIndex={0} ariaLabel={A} groupProfilePictureSticky={y} xstyle={q}/></div>;
            n[16] = A;
            n[17] = authorColor;
            n[18] = y;
            n[19] = B;
            n[20] = W;
            n[21] = q;
            n[22] = userContact.id;
            n[23] = U;
        } else {
            U = n[23];
        }
        let V;
        if (n[24] !== O || n[25] !== U) {
            const Component = r("WAWebPrivacyBlurWrapper.react");
            V = <Component containerRef={F}><div {...babelHelpers.extends({
                ref: F
            }, O, {
                children: U
            })}/></Component>;
            n[24] = O;
            n[25] = U;
            n[26] = V;
        } else {
            V = n[26];
        }
        const H = E && N_popover;
        let G;
        if (n[27] !== V || n[28] !== H) {
            G = <>{V}{H}</>;
            n[27] = V;
            n[28] = H;
            n[29] = G;
        } else {
            G = n[29];
        }
        let z;
        if (n[30] !== lastMessageHasReaction_1 || n[31] !== y || n[32] !== G) {
            z = <F4Component lastMessageHasReaction={lastMessageHasReaction_1} sticky={y}>{G}</F4Component>;
            n[30] = lastMessageHasReaction_1;
            n[31] = y;
            n[32] = G;
            n[33] = z;
        } else {
            z = n[33];
        }
        return z;
    }
    function F4Component(t) {
        const n = o("react-compiler-runtime").c(4);
        const { children, lastMessageHasReaction, sticky } = t;
        let s;
        if (n[0] !== children || n[1] !== lastMessageHasReaction || n[2] !== sticky) {
            s = sticky ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.groupProfilePictureSticky({
                lastMessageHasReaction
            })), {
                children
            })}/> : children;
            n[0] = children;
            n[1] = lastMessageHasReaction;
            n[2] = sticky;
            n[3] = s;
        } else {
            s = n[3];
        }
        return s;
    }
    l.default = _;
}, 226);