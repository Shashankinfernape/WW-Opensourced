__d("WAWebGroupMemberAddingUserJourneyLogger", [
    "WARandomHex",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebGroupMemberAddingUserJourneyWamEvent",
    "WAWebGroupMemberSuggestions",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupMemberAddingActionType",
    "WAWebWamEnumGroupMemberAddingMemberType",
    "WAWebWamEnumTsSurface"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor({ entryPoint, isAdmin }){
            this.$1 = o("WARandomHex").randomHex(16);
            this.$4 = o("WAWebGroupMemberSuggestions").NO_GROUP_MEMBER_SUGGESTIONS;
            this.$2 = entryPoint;
            this.$3 = isAdmin;
        }
        contactsPickerOpened() {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACTS_PICKER_OPENED
            });
        }
        contactsLoaded({ suggestions }) {
            this.$4 = suggestions;
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACTS_LOADED,
                groupMemberAddingMemberType: c(suggestions.contacts),
                suggestedContactsCount: suggestions.contacts.length
            });
        }
        contactSelectionChanged({ contact, selected }) {
            const r = this.$4;
            const { contacts, frequentContacts, recentContacts } = r;
            const suggestedContactsIndex = contacts.indexOf(contact);
            this.$5({
                groupMemberAddingActionType: s({
                    isSuggested: suggestedContactsIndex !== -1,
                    selected
                }),
                frequentlyContactedIndex: u(frequentContacts, contact),
                groupMemberAddingMemberType: c([
                    contact
                ]),
                recentlyContactedIndex: u(recentContacts, contact),
                suggestedContactsCount: contacts.length,
                suggestedContactsIndex
            });
        }
        addButtonClicked({ selectedContacts }) {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_MEMBER_ADD_BUTTON_CLICKED,
                groupMemberAddingMemberType: c(selectedContacts),
                selectedMemberCnt: selectedContacts.length
            });
        }
        backButtonClicked({ selectedContacts }) {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.MEMBER_SELECTOR_BACK_BUTTON_CLICKED,
                groupMemberAddingMemberType: c(selectedContacts)
            });
        }
        discardDialogShown() {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_SHOWN
            });
        }
        discardDialogDiscardClicked() {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_DISCARD_CLICKED
            });
        }
        discardDialogCancelClicked() {
            this.$5({
                groupMemberAddingActionType: o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_CANCEL_CLICKED
            });
        }
        $5(t) {
            new (o("WAWebGroupMemberAddingUserJourneyWamEvent")).GroupMemberAddingUserJourneyWamEvent(babelHelpers.extends({}, t, {
                groupAddMemberEntryPoint: this.$2,
                isAdmin: this.$3,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.GROUP_MEMBER_ADD_EXISTING_GROUP,
                unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
                userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
                userJourneyFunnelId: this.$1
            })).commit();
        }
    }
    function s({ isSuggested, selected }) {
        if (isSuggested) {
            if (selected) {
                return o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_SUGGESTED_CLICKED;
            }
            return o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_SUGGESTED_UNCLICKED;
        }
        if (selected) {
            return o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_NOT_SUGGESTED_CLICKED;
        }
        return o("WAWebWamEnumGroupMemberAddingActionType").GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_NOT_SUGGESTED_UNCLICKED;
    }
    function u(e, contact) {
        const n = e.indexOf(contact);
        if (n === -1) {
            return undefined;
        }
        return n;
    }
    function c(e) {
        return e.map((e)=>d(e)).find((e)=>e !== o("WAWebWamEnumGroupMemberAddingMemberType").GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER) ?? o("WAWebWamEnumGroupMemberAddingMemberType").GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER;
    }
    function d(e) {
        if (o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)) {
            return o("WAWebWamEnumGroupMemberAddingMemberType").GROUP_MEMBER_ADDING_MEMBER_TYPE.TEE_BOT;
        }
        if (o("WAWebBotUtils").isMetaAiBot(e.id)) {
            return o("WAWebWamEnumGroupMemberAddingMemberType").GROUP_MEMBER_ADDING_MEMBER_TYPE.OPEN_META_AI;
        }
        return o("WAWebWamEnumGroupMemberAddingMemberType").GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER;
    }
    l.default = e;
}, 98);