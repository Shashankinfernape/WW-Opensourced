__d("WAWebMultiSelectContactList.react", [
    "fbt",
    "WALogger",
    "WAWebCellFrame.react",
    "WAWebChatCollection",
    "WAWebChatUnblockableContactWrapper.react",
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactSearchExperienceLogger",
    "WAWebContactSyncLogger",
    "WAWebContactUtils",
    "WAWebContactlessChatUtils",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebNonContactPushNameSearchModel",
    "WAWebOutContactCell.react",
    "WAWebOutContactConsts",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebProfileImage.react",
    "WAWebSectionHeader.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebUsernameUtils",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnknownContact"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useImperativeHandle, useMemo, useRef } = m;
    const h = {
        emptyStateFill: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            minHeight: "x2lwn1j",
            $$css: true
        }
    };
    const y = {
        YOU: "YOU",
        FREQUENTLY_CONTACTED: "FREQUENTLY_CONTACTED",
        CONTACTS: "CONTACTS",
        UNKNOWN_CONTACTS: "UNKNOWN_CONTACTS",
        FOLLOWERS: "FOLLOWERS",
        MEMBERS: "MEMBERS",
        NON_CONTACT_PUSHNAME: "NON_CONTACT_PUSHNAME"
    };
    const C = {
        ROW_CONTACTS: "ROW_CONTACTS",
        ROW_OUT_CONTACT: "ROW_OUT_CONTACT",
        ROW_USERNAME_CONTACTS: "ROW_USERNAME_CONTACTS"
    };
    function b({ allContacts, outContacts, searchText, selectedUnknownContacts }) {
        if (!searchText) {
            return {
                contacts: allContacts,
                selectedUnknownContacts,
                filteredOutContacts: outContacts != null ? [].concat(outContacts).sort(o("WAWebContactComparator").ContactComparator) : []
            };
        }
        const l = o("WAWebL10NAccentFold").accentFold(searchText);
        const s = o("WAWebPhoneNumberSearch").numberSearch(l);
        const u = (t)=>t.filter((e)=>e.searchMatchExact(l, s));
        return {
            contacts: u(allContacts),
            selectedUnknownContacts: u(selectedUnknownContacts),
            filteredOutContacts: (outContacts == null ? undefined : outContacts.filter((e)=>e.searchMatchExact(l, s) != null).sort(o("WAWebContactComparator").ContactComparator)) ?? []
        };
    }
    function V6Component({ active, allowBlockedContacts, customSecondaryText, data, handleContactClick, handleUsernameContactRowClicked, includeYouSection, isDisabled, isSelected, onOutContactToggle, outContactInviteEntryPoint, outContactSelections, selections }) {
        switch(data.type){
            case y.YOU:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: s._("You")
                });
            case y.FREQUENTLY_CONTACTED:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: s._("Frequently contacted")
                });
            case y.CONTACTS:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: s._("Contacts")
                });
            case y.MEMBERS:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: s._("Members")
                });
            case y.FOLLOWERS:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: r("WAWebFbtCommon")("Followers")
                });
            case y.UNKNOWN_CONTACTS:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: r("WAWebFbtCommon")("Not in your contacts")
                });
            case y.NON_CONTACT_PUSHNAME:
                return d.jsx(r("WAWebSectionHeader.react"), {
                    header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader()
                });
            case C.ROW_CONTACTS:
                {
                    const { data: data_1, isUnknownContact } = data;
                    const onSelect = function() {
                        return handleContactClick(data_1, isUnknownContact);
                    };
                    const k = s._("Select contact {contact-name}", [
                        s._param("contact-name", data_1.name)
                    ]);
                    const I = isSelected?.(data_1) || selections.isSelected(data_1);
                    const T = isDisabled?.(data_1) ?? false;
                    const Component = r("WAWebChatUnblockableContactWrapper.react");
                    const Component_1 = r("WAWebCheckboxSelectableWrapper.react");
                    return <Component_1 key={data_1.id.toString()} checkboxAriaLabel={k} model={data_1} selections={selections} checked={I} disabled={T} testid="multi-select-contact-list-item"><Component contact={data_1} disabled={T} onSelect={onSelect} customSecondaryText={customSecondaryText?.(data_1.id)} active={active} allowBlockedContacts={allowBlockedContacts} hideYouSuffix={includeYouSection} role="checkbox" checked={I}/></Component_1>;
                }
            case C.ROW_OUT_CONTACT:
                {
                    const D = data.data;
                    const x = outContactSelections.isSelected(D);
                    const $ = s._("Select contact {contact-name}", [
                        s._param("contact-name", D.getName())
                    ]);
                    const Component = r("WAWebCheckboxSelectableWrapper.react");
                    return <Component checkboxAriaLabel={$} model={D} selections={outContactSelections} checked={x} onClick={function() {
                        return onOutContactToggle(D);
                    }} wrapperTestid="multi-select-out-contact">{d.jsx(r("WAWebOutContactCell.react"), {
                        contact: D,
                        entryPoint: outContactInviteEntryPoint,
                        inviteFlow: data.inviteFlow,
                        theme: "chat-checkbox"
                    })}</Component>;
                }
            case C.ROW_USERNAME_CONTACTS:
                {
                    const P = data.data;
                    const { username, isUsernameSearch } = P;
                    const w = `@${username}`;
                    const A = d.jsx(r("WAWebProfileImage.react"), {});
                    const searchStartsWithAt = data.data.searchQuery.startsWith("@");
                    const contactSearchEntrypoint = handleUsernameContactRowClicked ? o("WAWebWamEnumContactSearchEntrypoint").CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP : undefined;
                    const B = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const e = o("WAWebUsernameUtils").getLIDByUsername(username);
                            const t = e != null ? o("WAWebContactCollection").ContactCollection.get(e) : null;
                            const n = t != null && o("WAWebFrontendContactGetters").getIsMyContact(t);
                            const r = e ? o("WAWebChatCollection").ChatCollection.get(e) != null : false;
                            let searchActionName;
                            if (n && r) {
                                searchActionName = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT_WITH_EXISTING_CHAT;
                            } else if (!n && r) {
                                searchActionName = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT;
                            } else if (n) {
                                searchActionName = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_CONTACT;
                            } else {
                                searchActionName = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT;
                            }
                            o("WAWebContactSearchExperienceLogger").ContactSearchExperienceLogger.log({
                                contactSearchEntrypoint,
                                searchActionName,
                                isUsernameSearch,
                                searchStartsWithAt
                            });
                            if (e) {
                                handleContactClick(o("WAWebContactCollection").ContactCollection.assertGet(e), true);
                                return;
                            }
                            const i = handleUsernameContactRowClicked ? yield handleUsernameContactRowClicked({
                                username,
                                isUsernameSearch,
                                searchStartsWithAt
                            }) : yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                                username,
                                stackOverExistingModal: true
                            });
                            if (i) {
                                handleContactClick(o("WAWebContactCollection").ContactCollection.gadd(i), true);
                            }
                        });
                        return function() {
                            return e.apply(this, arguments);
                        };
                    })();
                    const Component = r("WAWebCellFrame.react");
                    return <Component image={A} primary={w} onClick={B} focusable/>;
                }
            default:
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "UnknownDataError: invoked from WAWebMultiSelectContactList"
                ])));
                throw new (o("WAWebFlatList.react")).UnknownDataError(data);
        }
    }
    V6Component.displayName = `${V6Component.name} [from ${i.id}]`;
    function S(t) {
        const t_ref = t.ref;
        const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { active, allowBlockedContacts, allowUnknownContactSearch } = a;
        const c = allowUnknownContactSearch === undefined ? true : allowUnknownContactSearch;
        const { contacts, customSecondaryText, flatListController, getInitialItems, handleUsernameContactRowClicked, includeYouSection } = a;
        const includeYouSection_1 = includeYouSection === undefined ? false : includeYouSection;
        const { isDisabled, isSelected, maxContacts, maxContactsExceedErrorMsg, noResultsText, onLoading, onSelectionChanged, outContactInviteEntryPoint, outContacts, outContactSelections, searchText, selections, suggestedContacts } = a;
        const q = suggestedContacts === undefined ? [] : suggestedContacts;
        const a_targetWindow = a.targetWindow;
        const VRef = useRef(null);
        const HRef = useRef();
        const GRef = useRef(new Set);
        const z = useMemo(function() {
            if (c) {
                return o("WAWebNonContactPushNameSearchModel").searchNonContactPushnames(searchText);
            }
            return o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
        }, [
            c,
            searchText
        ]);
        const j = b({
            allContacts: a.contacts,
            outContacts,
            searchText,
            selectedUnknownContacts: Array.from(GRef.current)
        });
        const { contacts: contacts_1, filteredOutContacts, selectedUnknownContacts } = j;
        const Y = contacts_1.length === 0 && selectedUnknownContacts.length === 0 && c;
        const J = r("useWAWebUnknownContact")({
            phoneOrUsername: searchText,
            searchPhoneNumber: Y,
            searchUsername: Y,
            onLoading,
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN_CONTACT_SEARCH_CONTACT_LIST
        });
        const { error, loading, onRetry, unknownContactInfo } = J;
        let re;
        if (unknownContactInfo != null && unknownContactInfo.wid) {
            const { chat, wid } = unknownContactInfo;
            re = chat?.contact ?? o("WAWebContactCollection").ContactCollection.gadd(wid);
        }
        const le = useMemo(function() {
            return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(z, contacts_1, selectedUnknownContacts, re != null ? [
                re
            ] : []);
        }, [
            contacts_1,
            z,
            selectedUnknownContacts,
            re
        ]);
        useEffect(function() {
            if (getInitialItems) {
                getInitialItems().forEach((e)=>selections.setVal(e, true));
            }
        }, []);
        const se = ()=>{
            if (typeof maxContacts !== "number") {
                return false;
            }
            const length = outContactSelections.getSelected().length;
            if (selections.getSelected().length + length >= maxContacts) {
                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                    msg: maxContactsExceedErrorMsg ?? s._("_j{\"*\":\"You can only send up to {count} contacts\",\"_1\":\"You can only send up to 1 contact\"}", [
                        s._plural(maxContacts, "count")
                    ])
                }));
                return true;
            }
            return false;
        };
        const ue = ({ contact, focus, isUnknownContact, selected })=>{
            if (!(selected && se())) {
                selections.setVal(contact, selected, focus);
                active.setVal(contact, focus);
                if (onSelectionChanged) {
                    onSelectionChanged(contact, selected);
                }
                if (isUnknownContact) {
                    GRef.current.add(contact);
                }
            }
        };
        const handleContactClick = function(t, isUnknownContact) {
            if (!(isDisabled != null && isDisabled(t))) {
                const e = selections.isSelected(t);
                ue({
                    contact: t,
                    focus: false,
                    isUnknownContact,
                    selected: !e
                });
            }
        };
        const onOutContactToggle = function(t) {
            const e = outContactSelections.isSelected(t);
            if (!(!e && se())) {
                outContactSelections.setVal(t, !e);
            }
        };
        const me = function() {
            if (VRef.current) {
                r("WAWebFocusTracer").focus(VRef.current);
            }
        };
        const clearActive = function() {
            active.unset();
        };
        const selectAll = function() {
            const t = selections.getSelected();
            const n = outContactSelections.getSelected();
            const r = t.length + n.length;
            const o = contacts.length + (outContacts?.length ?? 0);
            if (r === o) {
                selections.unsetAll();
                outContactSelections.unsetAll();
            } else {
                contacts.forEach((e)=>{
                    selections.setVal(e, true, false);
                });
                if (outContacts != null) {
                    outContacts.forEach((e)=>{
                        outContactSelections.setVal(e, true, false);
                    });
                }
            }
        };
        const fe = !searchText && q.length > 0;
        const ge = function(t) {
            let e;
            let isUnknownContact = false;
            if (fe) {
                e = q[0];
            } else if (contacts_1.length) {
                e = contacts_1[0];
            } else if (selectedUnknownContacts.length) {
                e = selectedUnknownContacts[0];
                isUnknownContact = true;
            } else if (re) {
                e = re;
                isUnknownContact = true;
            } else if (le.length) {
                e = le[0];
                isUnknownContact = true;
            }
            if (e) {
                const r = !selections.isSelected(e);
                ue({
                    contact: e,
                    focus: t,
                    isUnknownContact,
                    selected: r
                });
            } else if (outContacts != null && outContacts.length > 0) {
                const o = outContacts[0];
                const a = !outContactSelections.isSelected(o);
                if (a && se()) {
                    return;
                }
                outContactSelections.setVal(o, a);
            }
        };
        const he = ()=>{
            if (a.customGetKnownContacts != null) {
                return a.customGetKnownContacts(contacts_1);
            }
            const e = [];
            if (includeYouSection_1 && !searchText) {
                const t = o("WAWebContactCollection").ContactCollection.getMeContact();
                if (t != null) {
                    e.push({
                        itemKey: y.YOU,
                        type: y.YOU
                    });
                    e.push({
                        itemKey: t.id.toString(),
                        type: C.ROW_CONTACTS,
                        data: t,
                        isUnknownContact: false
                    });
                }
            }
            const n = new Set(q);
            const i = fe ? contacts_1.filter((e)=>!n.has(e)) : contacts_1;
            if (fe) {
                e.push(...[
                    {
                        itemKey: y.FREQUENTLY_CONTACTED,
                        type: y.FREQUENTLY_CONTACTED
                    }
                ].concat(q.map((e)=>({
                        itemKey: `suggested-${e.id.toString()}`,
                        type: C.ROW_CONTACTS,
                        data: e,
                        isUnknownContact: false
                    }))));
            }
            if (filteredOutContacts.length > 0) {
                const l = o("WAWebContactUtils").mergeSortedContacts(i, filteredOutContacts);
                if (l.length > 0) {
                    e.push({
                        itemKey: y.CONTACTS,
                        type: y.CONTACTS
                    });
                    e.push(...l.map((e)=>{
                        if (e instanceof r("WAWebOutContactModel")) {
                            return {
                                itemKey: `oc-${e.id}`,
                                type: C.ROW_OUT_CONTACT,
                                data: e,
                                inviteFlow: o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite
                            };
                        }
                        return {
                            itemKey: e.id.toString(),
                            type: C.ROW_CONTACTS,
                            data: e,
                            isUnknownContact: false
                        };
                    }));
                }
            } else {
                if (i.length) {
                    e.push({
                        itemKey: y.CONTACTS,
                        type: y.CONTACTS
                    });
                    e.push(...i.map((e)=>({
                            itemKey: e.id.toString(),
                            type: C.ROW_CONTACTS,
                            data: e,
                            isUnknownContact: false
                        })));
                }
            }
            return e;
        };
        const ye = he();
        const Ce = [];
        for (const be of ye){
            if (be.type === C.ROW_CONTACTS) {
                Ce.push(be.data);
            }
        }
        Ce.push(...selectedUnknownContacts);
        if (re) {
            Ce.push(re);
        }
        Ce.push(...le);
        const ve = ()=>{
            if (le.length) {
                return [
                    {
                        itemKey: y.NON_CONTACT_PUSHNAME,
                        type: y.NON_CONTACT_PUSHNAME
                    }
                ].concat(le.map((e)=>({
                        itemKey: `non-contact-pushname-${e.id.toString()}`,
                        type: C.ROW_CONTACTS,
                        data: e,
                        isUnknownContact: true
                    })));
            }
            return [];
        };
        const Se = ()=>{
            if (selectedUnknownContacts.length) {
                return [
                    {
                        itemKey: y.UNKNOWN_CONTACTS,
                        type: y.UNKNOWN_CONTACTS
                    }
                ].concat(selectedUnknownContacts.map((e)=>({
                        itemKey: e.id.toString(),
                        type: C.ROW_CONTACTS,
                        data: e,
                        isUnknownContact: true
                    })));
            }
            if (re) {
                return [
                    {
                        itemKey: y.UNKNOWN_CONTACTS,
                        type: y.UNKNOWN_CONTACTS
                    },
                    {
                        itemKey: re.id.toString(),
                        type: C.ROW_CONTACTS,
                        data: re,
                        isUnknownContact: true
                    }
                ];
            }
            if (unknownContactInfo && unknownContactInfo.wid == null && o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
                return [
                    {
                        itemKey: y.UNKNOWN_CONTACTS,
                        type: y.UNKNOWN_CONTACTS
                    },
                    {
                        itemKey: `unknown-contact-${unknownContactInfo.username}`,
                        type: C.ROW_USERNAME_CONTACTS,
                        data: unknownContactInfo
                    }
                ];
            }
            return [];
        };
        const Re = [].concat(ye, Se(), ve());
        const Le = function(t) {
            const e = Ce[t];
            if (e != null) {
                const n = Re.findIndex((t)=>t.type === C.ROW_CONTACTS && t.data === e);
                if (n > -1) {
                    HRef.current?.scrollIntoViewIfNeeded(n);
                }
            }
        };
        let Ee;
        let ke = false;
        if (!contacts_1.length && filteredOutContacts.length === 0 && !selectedUnknownContacts.length && !le.length && !unknownContactInfo) {
            ke = true;
            if (searchText) {
                if (loading) {
                    Ee = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {});
                } else if (error) {
                    const Component = o("WAWebEmptyState.react").SearchingNonContactError;
                    Ee = <Component error={o("WAWebContactlessChatUtils").getErrorStr(error)} onClick={onRetry}/>;
                } else {
                    Ee = d.jsx(o("WAWebEmptyState.react").Search, {
                        noResultsText
                    });
                }
            } else {
                Ee = d.jsx(o("WAWebEmptyState.react").ListChats, {});
            }
        } else {
            const Component = o("WAWebFlatList.react").FlatList;
            Ee = <Component ref={HRef} flatListController={flatListController} direction="vertical" forceConsistentRenderCount={false} data={Re} targetWindow={a_targetWindow} renderItem={function(t) {
                return <V6Component handleUsernameContactRowClicked={handleUsernameContactRowClicked} data={t} active={active} handleContactClick={handleContactClick} allowBlockedContacts={allowBlockedContacts} customSecondaryText={customSecondaryText} isDisabled={isDisabled} isSelected={isSelected} onOutContactToggle={onOutContactToggle} outContactInviteEntryPoint={outContactInviteEntryPoint} outContactSelections={outContactSelections} selections={selections} includeYouSection={includeYouSection_1}/>;
            }}/>;
        }
        const Ie = le.map((e)=>e.id.toString()).join(",");
        const Te = ye.filter((e)=>e.type === C.ROW_CONTACTS).map((e)=>e.itemKey).join(",");
        useEffect(function() {
            active.init(Ce);
        }, [
            searchText,
            re,
            Ie,
            Te
        ]);
        useImperativeHandle(t_ref, function() {
            return {
                focus: me,
                clearActive,
                selectAll,
                toggleFirst: ge
            };
        });
        const Component = r("WAWebMultiSelectListHotKeys.react");
        return <Component active={a.active} onLeave={a.onLeaveList} ref={VRef} onIndexChange={Le} xstyle={ke ? h.emptyStateFill : undefined}>{Ee}</Component>;
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    const R = S;
    l.ContactListSection = y;
    l.Row = C;
    l.MultiSelectContactList = R;
}, 226);