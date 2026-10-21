__d("WAWebFormatParticipantNames", [
    "fbt",
    "WAWebBotFrontendUtils",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFbtIntlList",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "WAWebL10NEnumeration.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebPairList",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSuspendedCommunityUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "fbs",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        linkColor: {
            color: "x1bvqhpb",
            $$css: true
        }
    };
    function d(e, t) {
        return function(n) {
            if (n) {
                n.preventDefault();
                n.stopPropagation();
            }
            o("WAWebFindChatAction").findOrCreateLatestChat(e, "formatParticipantNames").then(({ chat })=>{
                if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked() && !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                    chat,
                    contact: chat.contact
                })) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
                    return;
                }
                if (t === "sibling_group_link") {
                    new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                        action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_SYSTEM_MESSAGE_CLICK,
                        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                        chat
                    }).commit();
                }
                o("WAWebCmd").Cmd.openChatFromUnread({
                    chat,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage
                }).then((e)=>{
                    if (e) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                    }
                });
            });
        };
    }
    function m(e) {
        return function(t) {
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
            o("WAWebCmd").Cmd.openCommunityHome(e, undefined);
        };
    }
    function p(e) {
        return function(t) {
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
            o("WAWebCmd").Cmd.openCommunityTabbedInfo(e, undefined, false, true);
        };
    }
    function _(e) {
        return function(t) {
            if (t) {
                t.preventDefault();
                t.stopPropagation();
            }
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                surface: "unknown",
                viewName: "format-participant-names"
            }} onOK={o("WAWebModalManager").closeModalManager}>{s._("You are no longer a member of the community \"{community}\"", [
                s._param("community", u.jsx(o("WAWebName.react").Name, {
                    contact: e
                }))
            ])}</Component>);
        };
    }
    function f() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("This community no longer exists")
        }));
    }
    function GComponent(e, t) {
        if (t) {
            const Component = r("WAWebClickableLink.react");
            return <Component onClick={f} xstyle={c.linkColor}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: e
            })}</Component>;
        }
        return e;
    }
    function HComponent({ asString, clickable, communityName, jid }) {
        const i = o("WAWebContactCollection").ContactCollection.get(jid.toString());
        if (asString === false && i != null) {
            return LComponent(jid, clickable ? m(jid) : null);
        }
        if (communityName == null || communityName === "") {
            return null;
        }
        if (asString === false && clickable) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            return <Component text={communityName} onClick={o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal}/>;
        }
        return communityName;
    }
    function y(jid, t = false) {
        const n = o("WAWebContactCollection").ContactCollection.get(jid.toString());
        if (!n) {
            return null;
        }
        if (t) {
            return n.name;
        }
        const a = r("WAWebGroupMetadataCollection").get(jid);
        let i = m(jid);
        if (!(a != null && a.joinedSubgroups.length)) {
            i = _(n);
        }
        return LComponent(jid, i);
    }
    function C(e, t) {
        if (t) {
            return r("fbs")._("\"{community-name}\"", [
                r("fbs")._param("community-name", e)
            ]);
        }
        return <span className="xuxw1ft">{s._("\"{community-name}\"", [
            s._param("community-name", e)
        ])}</span>;
    }
    function b({ alternativeStringName, asString = false, jid }) {
        const i = y(jid, asString);
        if (i == null && alternativeStringName) {
            return GComponent(alternativeStringName, !asString);
        }
        if (typeof i === "string" && !asString) {
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: i
            });
        }
        return i;
    }
    function v(e, t = false, n) {
        if (o("WAWebContactCollection").ContactCollection.get(e.toString()) != null && !t) {
            return LComponent(e, d(e, n));
        }
        const a = r("WAWebUnjoinedSubgroupMetadataCollection").get(e.toString());
        if (a != null && a.subject) {
            return a.subject;
        }
        return null;
    }
    function S({ asString = false, groups, subtype }) {
        const l = o("WAWebPairList").unFlattenPairList(groups).map(([t, r])=>{
            const o = v(t, asString, subtype);
            if (o !== "" && o != null) {
                return o;
            }
            return r;
        });
        return r("WAWebL10NEnumeration.react")(l, asString);
    }
    function R({ clickable = true, jid, subtype, tabIndex, unknownUserLogContext }) {
        if (!jid.isUser()) {
            return LComponent(jid, clickable ? d(jid, subtype) : null, tabIndex, unknownUserLogContext);
        }
        const l = clickable ? d(jid, subtype) : null;
        return LComponent(jid, l, tabIndex, unknownUserLogContext);
    }
    function LComponent(e, t, n, a) {
        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)) {
            const i = o("WAWebBotFrontendUtils").getMetaAiTEEBotDisplayName();
            if (t) {
                const Component = r("WAWebClickableLink.react");
                return <Component onClick={t} xstyle={c.linkColor}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: i
                })}</Component>;
            }
            return u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: i
            });
        }
        const l = o("WAWebContactCollection").ContactCollection.gadd(e, {
            silent: true
        });
        const Component = o("WAWebName.react").Name;
        return <Component contact={l} showNotifyName elevatedPushNamesEnabled onClick={t} tabIndex={n} unknownUserLogContext={a}/>;
    }
    LComponent.displayName = `${LComponent.name} [from ${i.id}]`;
    function E(e, t = true, n = false, o, a) {
        if (!Array.isArray(e)) {
            return R({
                clickable: t,
                jid: e,
                tabIndex: o,
                unknownUserLogContext: a
            });
        }
        const i = e.map((e)=>R({
                clickable: t,
                jid: e,
                tabIndex: o,
                unknownUserLogContext: a
            }));
        return r("WAWebFbtIntlList")(i, n ? r("WAWebFbtIntlList").CONJUNCTIONS.NONE : r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
    }
    l.openCommunity = m;
    l.openCommunityInfo = p;
    l.getClickableDeactivatedCommunityName = GComponent;
    l.getClickableIntegrityDeactivateCommunityName = HComponent;
    l.getCommunityNameInQuotationMarks = C;
    l.getFormattedCommunityNameWithAlternative = b;
    l.getFormattedNameIfExists = v;
    l.getFormattedGroupListForCommunity = S;
    l.getFormattedName = R;
    l.getFormattedNames = E;
}, 226);