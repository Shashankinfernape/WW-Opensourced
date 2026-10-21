__d("CurrentUser", [
    "Cookie",
    "CurrentUserInitialData"
], function(t, n, r, o, a, i) {
    let e;
    var l = {
        getID: function() {
            return (e || (e = n("CurrentUserInitialData"))).USER_ID;
        },
        getAccountID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ACCOUNT_ID;
        },
        getPossiblyNonFacebookUserID: function() {
            return (e || (e = n("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID ?? l.getID();
        },
        getEIMU: function() {
            return (e || (e = n("CurrentUserInitialData"))).IG_USER_EIMU ?? "0";
        },
        getEmployeeWorkUserID: function() {
            return (e || (e = n("CurrentUserInitialData"))).WORK_USER_ID;
        },
        getName: function() {
            return (e || (e = n("CurrentUserInitialData"))).NAME;
        },
        getShortName: function() {
            return (e || (e = n("CurrentUserInitialData"))).SHORT_NAME;
        },
        getAbraID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ABRA_ID ?? "0";
        },
        getAbraStorageID: function() {
            return (e || (e = n("CurrentUserInitialData"))).ABRA_STORAGE_ID ?? "0";
        },
        getARID: function() {
            return (e || (e = n("CurrentUserInitialData"))).AR_ID ?? "0";
        },
        getEPOU: function() {
            return (e || (e = n("CurrentUserInitialData"))).EPOU_ID ?? "0";
        },
        getEOCPU: function() {
            return (e || (e = n("CurrentUserInitialData"))).EOCPU_ID ?? "0";
        },
        isLoggedIn: function() {
            return l.getPossiblyNonFacebookUserID() !== "0";
        },
        isLoggedInNow: function() {
            if (l.isLoggedIn()) {
                if ((e || (e = n("CurrentUserInitialData"))).IS_INTERN_SITE || (e || (e = n("CurrentUserInitialData"))).IS_ABRA_USER || (e || (e = n("CurrentUserInitialData"))).IS_ENTERPRISE_USER || (e || (e = n("CurrentUserInitialData"))).IS_FRL_USER || (e || (e = n("CurrentUserInitialData"))).IS_IMAGINE_USER || (e || (e = n("CurrentUserInitialData"))).IS_INSTAGRAM_USER || (e || (e = n("CurrentUserInitialData"))).IS_META_SPARK_USER || (e || (e = n("CurrentUserInitialData"))).IS_OCULUS_USER || (e || (e = n("CurrentUserInitialData"))).IS_THREADS_USER || (e || (e = n("CurrentUserInitialData"))).IS_TOGETHER_APP_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORK_USER || (e || (e = n("CurrentUserInitialData"))).IS_WORKROOMS_USER || (e || (e = n("CurrentUserInitialData"))).IS_ANONYMOUS_CASTING_USER || (e || (e = n("CurrentUserInitialData"))).IS_META_CAREERS_USER) {
                    return true;
                }
                if ((e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") {
                    return (e || (e = n("CurrentUserInitialData"))).ORIGINAL_USER_ID === n("Cookie").get("c_user");
                }
                if ((e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === true) {
                    return (e || (e = n("CurrentUserInitialData"))).USER_ID == n("Cookie").get("c_user");
                }
                return (e || (e = n("CurrentUserInitialData"))).USER_ID === (n("Cookie").get("i_user") ?? n("Cookie").get("c_user"));
            }
            return false;
        },
        isEmployee: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_EMPLOYEE;
        },
        isAccountEmployee: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_ACCOUNT_EMPLOYEE;
        },
        isContingentWorker: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_CONTINGENT;
        },
        isTestUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_TEST_USER;
        },
        hasWorkUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).HAS_WORK_USER;
        },
        isWorkUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_WORK_USER;
        },
        isWorkroomsUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_WORKROOMS_USER;
        },
        isGray: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_GRAY;
        },
        isUnderage: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_UNDERAGE;
        },
        isManagedMetaAccount: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MANAGED_META_ACCOUNT;
        },
        isMessengerOnlyUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER;
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER;
        },
        isMessengerCallGuestUser: function() {
            return !!(e || (e = n("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER;
        },
        isBusinessPersonAccount: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT;
        },
        hasSecondaryBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON;
        },
        getAppID: function() {
            return (e || (e = n("CurrentUserInitialData"))).APP_ID;
        },
        isFacebookWorkAccount: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT;
        },
        isInstagramBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_INSTAGRAM_BUSINESS_PERSON;
        },
        isWabaBusinessPerson: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_WABA_BUSINESS_PERSON;
        },
        isBusinessDomain: function() {
            return (e || (e = n("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN;
        },
        getPageMessagingMailboxId: function() {
            return String((e || (e = n("CurrentUserInitialData"))).PAGE_MESSAGING_MAILBOX_ID ?? "0");
        }
    };
    a.exports = l;
}, null);