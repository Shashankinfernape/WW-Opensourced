__d("WAWebBusinessProfileSMBUserJourneyLogger", [
    "$InternalEnum",
    "WAWebBusinessProfileUtils",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        ABOUT_INFO: "about_info",
        ADD_ANOTHER_WEBSITE: "add_another_website",
        ADDRESS: "address",
        BACK: "back",
        BIZ_DESCRIPTION: "biz_description",
        BIZ_HOURS: "biz_hours",
        BIZ_NAME: "biz_name",
        CATALOG_PRODUCT: "catalog_product",
        CATEGORY: "category",
        CONFIRM_DIALOG_CANCEL_BUTTON: "confirm_dialog_cancel_button",
        CONFIRM_DIALOG_CONTINUE_BUTTON: "confirm_dialog_continue_button",
        COVER_PHOTO: "cover_photo",
        EMAIL: "email",
        ERROR_DIALOG_OK_BUTTON: "error_dialog_ok_button",
        FB_ACCOUNT: "fb_account",
        FB_IG_ACCOUNT: "fb_ig_account",
        IG_ACCOUNT: "ig_account",
        MANAGE_CATALOG: "manage_catalog",
        MANAGE_SERVICES: "manage_services",
        PHONE_NUMBER: "phone_number",
        PRICE_RANGE: "price_range",
        PROFILE_PHOTO: "profile_photo",
        SAVE_ABOUT_INFO: "save_about_info",
        SAVE_ADDRESS: "save_address",
        SAVE_BIZ_DESCRIPTION: "save_biz_description",
        SAVE_BIZ_HOURS: "save_biz_hours",
        SAVE_BIZ_NAME: "save_biz_name",
        SAVE_CATEGORY: "save_category",
        SAVE_COVER_PHOTO: "save_cover_photo",
        SAVE_EMAIL: "save_email",
        SAVE_FB_ACCOUNT: "save_fb_account",
        SAVE_FIELDS_GRAPHQL: "save_fields_graphql",
        SAVE_FIELDS_GRAPHQL_ERROR: "save_fields_graphql_error",
        SAVE_FIELDS_GRAPHQL_MUTATION: "save_fields_graphql_mutation",
        SAVE_IG_ACCOUNT: "save_ig_account",
        SAVE_MANAGE_SERVICES: "save_manage_services",
        SAVE_PHONE_NUMBER: "save_phone_number",
        SAVE_PRICE_RANGE: "save_price_range",
        SAVE_PRIMARY_WEBSITE: "save_primary_website",
        SAVE_PROFILE_PHOTO: "save_profile_photo",
        SAVE_SECONDARY_WEBSITE: "save_secondary_website",
        SAVE_USER_NAME: "save_user_name",
        SAVE_WEBSITE: "save_website",
        USER_NAME: "user_name",
        WEBSITE: "website"
    };
    const s = n("$InternalEnum")({
        ADD: "add",
        MODIFY: "modify",
        REMOVE: "remove",
        UNCHANGED: "unchanged"
    });
    class u {
        viewProfile(entryPoint) {
            this.$1(babelHelpers.extends({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW
            }, entryPoint != null ? {
                entryPoint
            } : {}));
        }
        clickBusinessName() {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                userActionTarget: e.BIZ_NAME
            });
        }
        saveBusinessName(biz_name_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    biz_name_edit_op
                },
                userActionTarget: e.SAVE_BIZ_NAME
            });
        }
        clickBusinessHours(has_biz_hours) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_biz_hours
                },
                userActionTarget: e.BIZ_HOURS
            });
        }
        saveBusinessHours(biz_hour_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    biz_hour_edit_op
                },
                userActionTarget: e.SAVE_BIZ_HOURS
            });
        }
        clickCategory() {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                userActionTarget: e.CATEGORY
            });
        }
        saveCategory(category_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    category_edit_op
                },
                userActionTarget: e.SAVE_CATEGORY
            });
        }
        clickAddress(has_address) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_address
                },
                userActionTarget: e.ADDRESS
            });
        }
        clickDescription(has_biz_description) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_biz_description
                },
                userActionTarget: e.BIZ_DESCRIPTION
            });
        }
        clickEmail(has_email) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_email
                },
                userActionTarget: e.EMAIL
            });
        }
        clickPriceRange(has_price_range) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_price_range
                },
                userActionTarget: e.PRICE_RANGE
            });
        }
        clickWebsite(n) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_website: n
                },
                userActionTarget: e.WEBSITE
            });
        }
        clickAddAnotherWebsite(n) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_website: n
                },
                userActionTarget: e.ADD_ANOTHER_WEBSITE
            });
        }
        clickAboutInfo(has_about_info) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_about_info
                },
                userActionTarget: e.ABOUT_INFO
            });
        }
        saveProfilePhoto(profile_photo_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    profile_photo_edit_op
                },
                userActionTarget: e.SAVE_PROFILE_PHOTO
            });
        }
        saveCoverPhoto(cover_photo_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    cover_photo_edit_op
                },
                userActionTarget: e.SAVE_COVER_PHOTO
            });
        }
        clickProfilePhoto(has_profile_photo) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_profile_photo
                },
                userActionTarget: e.PROFILE_PHOTO
            });
        }
        clickCoverPhoto(has_cover_photo) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    has_cover_photo
                },
                userActionTarget: e.COVER_PHOTO
            });
        }
        saveBizDescription(biz_description_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    biz_description_edit_op
                },
                userActionTarget: e.SAVE_BIZ_DESCRIPTION
            });
        }
        saveAddress(address_edit_op, r, a) {
            const extraAttributes = {
                address_edit_op
            };
            if (r != null) {
                extraAttributes.radius = r;
            }
            if (a != null) {
                extraAttributes.has_location_notes = a;
            }
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes,
                userActionTarget: e.SAVE_ADDRESS
            });
        }
        savePriceRange(price_range_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    price_range_edit_op
                },
                userActionTarget: e.SAVE_PRICE_RANGE
            });
        }
        saveEmail(email_edit_op) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    email_edit_op
                },
                userActionTarget: e.SAVE_EMAIL
            });
        }
        savePrimaryWebsite(n) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    website_edit_op: n
                },
                userActionTarget: e.SAVE_PRIMARY_WEBSITE
            });
        }
        saveSecondaryWebsite(n) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    website_edit_op: n
                },
                userActionTarget: e.SAVE_SECONDARY_WEBSITE
            });
        }
        clickSaveFieldsGraphQL() {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                userActionTarget: e.SAVE_FIELDS_GRAPHQL
            });
        }
        callSaveFieldsGraphQLMutation() {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                userActionTarget: e.SAVE_FIELDS_GRAPHQL_MUTATION
            });
        }
        saveFieldsGraphQLError(n) {
            this.$1({
                action: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                extraAttributes: {
                    error_message: String(n)
                },
                userActionTarget: e.SAVE_FIELDS_GRAPHQL_ERROR
            });
        }
        logProfileFieldsSave(t, n) {
            const e = o("WAWebBusinessProfileUtils").getEditOperationType(t.description, n.description);
            if (e != null) {
                this.saveBizDescription(e);
            }
            const r = o("WAWebBusinessProfileUtils").getEditOperationType(t.address, n.address);
            const a = t.serviceAreaRadius !== n.serviceAreaRadius;
            const i = t.locationNotes !== n.locationNotes;
            if (r != null || a || i) {
                const l = n.locationNotes != null && n.locationNotes !== "";
                this.saveAddress(r ?? s.UNCHANGED, n.serviceAreaRadius, l);
            }
            const u = o("WAWebBusinessProfileUtils").getEditOperationType(t.email, n.email);
            if (u != null) {
                this.saveEmail(u);
            }
            const c = o("WAWebBusinessProfileUtils").getEditOperationType(t.primaryWebsite, n.primaryWebsite);
            if (c != null) {
                this.savePrimaryWebsite(c);
            }
            const d = o("WAWebBusinessProfileUtils").getEditOperationType(t.secondaryWebsite, n.secondaryWebsite);
            if (d != null) {
                this.saveSecondaryWebsite(d);
            }
            const m = (priceTier)=>{
                if (priceTier === "0") {
                    return "";
                }
                return priceTier;
            };
            const p = o("WAWebBusinessProfileUtils").getEditOperationType(m(t.priceTier), m(n.priceTier));
            if (p != null) {
                this.savePriceRange(p);
            }
        }
        $1(t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                entryPoint: t.entryPoint,
                extraAttributes: t.extraAttributes,
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_PROFILE,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.EDIT_BIZ_PROFILE,
                userActionTarget: t.userActionTarget,
                userActionType: t.action
            });
        }
    }
    const c = new u;
    l.OperationType = s;
    l.BusinessProfileUserJourneyLogger = c;
}, 98);