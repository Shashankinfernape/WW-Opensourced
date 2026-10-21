__d("WAWebContactLogging", [
    "$InternalEnum",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebCompanionsContactEventWamEvent",
    "WAWebNativeContactsNuxEventWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPrimaryFeaturesModel",
    "WAWebSaveContactAction",
    "WAWebWamEnumAddContactActionType",
    "WAWebWamEnumCompanionAddContactEventType",
    "WAWebWamEnumCompanionAddContactSource",
    "WAWebWamEnumCompanionContactSaveResult",
    "WAWebWamEnumNativeContactsNuxEntryPoint",
    "WAWebWamEnumNativeContactsNuxEventType",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum").Mirrored([
        "NewChat",
        "ContactInfo",
        "GroupMemberInfo",
        "VCard",
        "ChatHeaderMenu",
        "ChatListMenu",
        "FMXCard",
        "MessageContextMenu",
        "NewChatDrawer",
        "ChatListGlobalSearch",
        "SuspiciousChatBanner"
    ]);
    function c(e) {
        switch(e){
            case u.NewChat:
                return "NEW_CHAT";
            case u.NewChatDrawer:
                return "NEW_CHAT_DRAWER";
            case u.ContactInfo:
                return "CONTACT_INFO";
            case u.ChatHeaderMenu:
                return "CHAT_HEADER";
            case u.GroupMemberInfo:
                return "GROUP_MEMBER";
            case u.ChatListMenu:
                return "CONTACT_LIST";
            case u.FMXCard:
                return "FMX_CARD";
            case u.MessageContextMenu:
                return "CONTACT_INFO";
            case u.VCard:
                return "VCARD";
            case u.ChatListGlobalSearch:
                return "CHAT_LIST_GLOBAL_SEARCH";
            case u.SuspiciousChatBanner:
                return "SUSPICIOUS_CHAT_BANNER";
        }
    }
    class d {
        constructor(e, t){
            this.sessionId = r("WAWebPonyfillsCryptoRandomUUID")();
            this.source = c(e);
            this.eventType = this.source === "CONTACT_INFO" ? "EDIT" : "CREATE_NEW";
            this.contactData = t;
        }
        $1(t) {
            const n = new (o("WAWebCompanionsContactEventWamEvent")).CompanionsContactEventWamEvent({
                companionAddContactSessionId: this.sessionId,
                companionAddContactSource: o("WAWebWamEnumCompanionAddContactSource").COMPANION_ADD_CONTACT_SOURCE[this.source],
                companionAddContactEventType: o("WAWebWamEnumCompanionAddContactEventType").COMPANION_ADD_CONTACT_EVENT_TYPE[this.eventType],
                companionIsContactSyncToOs: this.contactData?.syncToAddressbook
            });
            if (t) {
                n.companionHasUsername = this.$2();
                n.companionHasPhoneNumber = this.$3();
            }
            return n;
        }
        $4(t) {
            let e = "SUCCESS";
            if (t != null) {
                if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    e = "USYNC_UNAVAILABLE";
                } else if (t instanceof o("WAWebSaveContactAction").NetworkUnavailable) {
                    e = "NETWORK_UNAVAILABLE";
                } else {
                    e = "CLIENT_ERROR";
                }
            }
            return o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT[e];
        }
        $5(n, a) {
            if (this.$4(a) === o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.CLIENT_ERROR) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact] client-err act=",
                    " src=",
                    ""
                ])), n, this.source).catching(r("getErrorSafe")(a)).sendLogs(`companion-contact-client-error-${n}`);
            }
        }
        logOpen() {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.OPEN;
            e.commit();
        }
        logCancel() {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.CANCEL;
            e.commit();
        }
        logDelete(t) {
            const e = this.$1(true);
            e.companionContactSaveResult = this.$4(t);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.DELETE;
            e.commit();
            this.$5("delete", t);
        }
        logSave({ error, firstName, lastName, phoneNumberAutofilled, syncToAddressbook, usernameAutofilled, usernameEdited }) {
            const u = this.$1(true);
            u.companionContactSaveResult = this.$4(error);
            u.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.SAVE;
            if (usernameEdited != null) {
                u.companionUsernameEdited = usernameEdited;
            }
            if (usernameAutofilled != null) {
                u.companionUsernameAutofilled = usernameAutofilled;
            }
            if (phoneNumberAutofilled != null) {
                u.companionPhNumberAutofilled = phoneNumberAutofilled;
            }
            const contactData = this.contactData;
            if (contactData) {
                u.companionFnameEdited = firstName !== contactData.firstName;
                u.companionLnameEdited = lastName !== contactData.lastName;
                u.companionSyncSettingChanged = syncToAddressbook !== contactData.syncToAddressbook;
            }
            u.commit();
            this.$5("save", error);
        }
        logDuplicate() {
            const e = this.$1();
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.CREATE_DUPLICATE;
            e.commit();
        }
        logUsernameKeyRequired() {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.SAVE;
            e.companionContactSaveResult = o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.PIN_REQUIRED;
            e.commit();
        }
        logUsernameKeySubmit(t) {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.PIN_SUBMIT;
            e.companionContactSaveResult = t ? o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.SUCCESS : o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.WRONG_PIN;
            e.commit();
        }
        logInvalidUsername() {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.SAVE;
            e.companionContactSaveResult = o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.INVALID_USERNAME;
            e.commit();
        }
        logUsernameAndPnMismatch() {
            const e = this.$1(true);
            e.companionAddContactActionType = o("WAWebWamEnumAddContactActionType").ADD_CONTACT_ACTION_TYPE.SAVE;
            e.companionContactSaveResult = o("WAWebWamEnumCompanionContactSaveResult").COMPANION_CONTACT_SAVE_RESULT.PHONE_NUMBER_USERNAME_NOT_MATCH;
            e.commit();
        }
        $2() {
            return !r("isStringNullOrEmpty")(this.contactData?.username);
        }
        $3() {
            return this.contactData?.phoneNumber != null;
        }
    }
    function m(e) {
        switch(e){
            case u.NewChat:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CONTACT;
            case u.ContactInfo:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CONTACT_HEADER;
            case u.GroupMemberInfo:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.GROUP;
            case u.VCard:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.SHARED_CONTACT;
            case u.ChatHeaderMenu:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
            case u.ChatListMenu:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CONVERSATION_ROW;
            case u.FMXCard:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
            case u.MessageContextMenu:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
            case u.NewChatDrawer:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CHAT_SEARCH;
            case u.ChatListGlobalSearch:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT_SEARCH;
            case u.SuspiciousChatBanner:
                return o("WAWebWamEnumNativeContactsNuxEntryPoint").NATIVE_CONTACTS_NUX_ENTRY_POINT.SPAM_PROMPT;
        }
    }
    function p(e) {
        let nativeContactsNuxEventType;
        if (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.primaryHasAgreedToNativeContactsNux) {
            if (!o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isContactsBackupOn) {
                nativeContactsNuxEventType = o("WAWebWamEnumNativeContactsNuxEventType").NATIVE_CONTACTS_NUX_EVENT_TYPE.VIEW_MANAGE_CONTACTS_FROM_COMPANION_NATIVE_CONTACTS_SETTING_OFF;
            }
        } else {
            nativeContactsNuxEventType = o("WAWebWamEnumNativeContactsNuxEventType").NATIVE_CONTACTS_NUX_EVENT_TYPE.VIEW_MANAGE_CONTACTS_FROM_COMPANION;
        }
        if (!nativeContactsNuxEventType) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[contact logging] NUX eventType cannot be null"
            ])));
            return;
        }
        const n = new (o("WAWebNativeContactsNuxEventWamEvent")).NativeContactsNuxEventWamEvent({
            nativeContactsNuxEntryPoint: m(e),
            nativeContactsNuxEventType
        });
        n.commit();
    }
    l.ContactSourceType = u;
    l.AddContactEvent = d;
    l.logViewNativeContactNux = p;
}, 98);