__d("WAWebBusinessProfileUtils", [
    "fbt",
    "WALogger",
    "WAUpperFirst",
    "WAWebBotTypes",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessProfileTypes",
    "WAWebCatalogCollection",
    "WAWebContactCollection",
    "WAWebExternalLink.react",
    "WAWebSmbUtils",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "address",
        "automated_type",
        "business_hours",
        "catalog_status",
        "commands",
        "commands_description",
        "cover_photo",
        "custom_url",
        "fb_page",
        "google_place",
        "google_place_id",
        "ig_professional",
        "is_authorized_agent",
        "legal_entity_details",
        "member_since_text",
        "oba_phone_number",
        "offerings",
        "parent_company_logo_url",
        "parent_company_name",
        "price_tier",
        "profile_is_linked",
        "profile_options",
        "prompts",
        "service_areas",
        "show_google_info",
        "show_google_reviews",
        "structured_address",
        "welcome_message_protocol_mode"
    ];
    const c = "catalog_exists";
    const d = "https://business.facebook.com/commerce/";
    function m(e, t) {
        const a = e?.trim() ?? "";
        const i = t?.trim() ?? "";
        if (a === i) {
            return null;
        }
        if (a === "" && i !== "") {
            return o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD;
        }
        if (a !== "" && i === "") {
            return o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE;
        }
        return o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY;
    }
    const p = ({ config, timezone })=>{
        const r = {};
        config.forEach((e)=>{
            const { day_of_week, mode } = e;
            if (o("WAWebBusinessProfileTypes").isBusinessHoursDayName(day_of_week)) {
                if (mode === o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS) {
                    let a;
                    const { close_time, open_time } = e;
                    if (!r[day_of_week]) {
                        r[day_of_week] = {
                            mode,
                            hours: []
                        };
                    }
                    if (open_time != null && close_time != null && (a = r[day_of_week]) != null && a.hours) {
                        r[day_of_week].hours.push([
                            open_time,
                            close_time
                        ]);
                    }
                } else {
                    r[day_of_week] = {
                        mode
                    };
                }
            }
        });
        return {
            config: r,
            timezone
        };
    };
    const _ = (t)=>t?.profile_options?.commerce_experience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || t?.profile_options?.commerce_experience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG || t?.catalog_status === c;
    function f(e) {
        if (e && e instanceof o("WAWebBusinessProfileModel").BusinessProfile) {
            return e.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || e.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG || e.catalogStatus === c;
        }
        return _(e);
    }
    function g(e) {
        let n;
        return e?.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.SHOP && !!(!(e == null || (n = e.profileOptions) == null) && n.shopURL);
    }
    function h(e) {
        return e?.profileOptions?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE || g(e) && !!e?.profileOptions?.isBanned;
    }
    function y(e) {
        const t = e?.googlePlaceId;
        return t != null && t !== "";
    }
    function C(e) {
        const n = e?.profileOptions?.shopURL;
        if (n != null && n !== "") {
            o("WAWebExternalLink.react").openExternalLink(n);
        }
    }
    function b(e) {
        const n = e?.profileOptions?.commerceManagerURL;
        const r = n != null && n !== "" ? n : d;
        o("WAWebExternalLink.react").openExternalLink(r);
    }
    const v = (profile)=>_(profile);
    const S = ({ email, landline_number, mobile_number })=>{
        const a = {
            email
        };
        if (!r("isStringNullOrEmpty")(landline_number)) {
            a.landlineNumber = landline_number;
        }
        if (!r("isStringNullOrEmpty")(mobile_number)) {
            a.mobileNumber = mobile_number;
        }
        return a;
    };
    const R = ({ email, landline_number, mobile_number })=>S({
            email,
            landline_number,
            mobile_number
        });
    const L = ({ email, landline_number, mobile_number, name })=>{
        const a = S({
            email,
            landline_number,
            mobile_number
        });
        return babelHelpers.extends({}, a, {
            name
        });
    };
    const E = ({ customer_care_details, entity_name, entity_type, entity_type_custom, grievance_officer_details, is_registered })=>{
        const s = {
            entityName: entity_name,
            entityType: entity_type,
            isRegistered: is_registered
        };
        if (!r("isStringNullOrEmpty")(entity_type_custom)) {
            s.entityTypeCustom = entity_type_custom;
        }
        if (customer_care_details) {
            s.customerCareDetails = R(customer_care_details);
        }
        if (grievance_officer_details) {
            s.grievanceOfficerDetails = L(grievance_officer_details);
        }
        return s;
    };
    const k = (profile_options)=>{
        const e = {
            commerceExperience: profile_options.commerce_experience,
            directConnection: profile_options.direct_connection
        };
        if (profile_options.cart_enabled != null) {
            e.cartEnabled = profile_options.cart_enabled;
        }
        if (profile_options.shop_url != null) {
            e.shopURL = profile_options.shop_url;
        }
        if (profile_options.commerce_manager_url != null) {
            e.commerceManagerURL = profile_options.commerce_manager_url;
        }
        if (profile_options.is_banned != null) {
            e.isBanned = profile_options.is_banned;
        }
        if (profile_options.is_profile_edit_disabled != null) {
            e.isProfileEditDisabled = profile_options.is_profile_edit_disabled;
        }
        return e;
    };
    function I({ id, profile, queryCatalog }) {
        if (!profile) {
            return {
                id
            };
        }
        const { address, automated_type, business_hours, catalog_status, commands, commands_description, cover_photo, custom_url, fb_page, google_place, google_place_id, ig_professional, is_authorized_agent, legal_entity_details, member_since_text, oba_phone_number, offerings, parent_company_logo_url, parent_company_name, price_tier, profile_is_linked, profile_options, prompts, service_areas, show_google_info, show_google_reviews, structured_address, welcome_message_protocol_mode } = profile;
        const W = babelHelpers.objectWithoutPropertiesLoose(profile, u);
        const q = {
            id
        };
        if (business_hours) {
            q.businessHours = p(business_hours);
        } else {
            q.businessHours = null;
        }
        if (member_since_text != null) {
            q.memberSinceText = member_since_text;
        }
        if (profile_options) {
            q.profileOptions = k(profile_options);
        }
        if (v(profile)) {
            q.catalogStatus = catalog_status;
            if (queryCatalog) {
                o("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(id).then((e)=>{
                    const t = Array.isArray(e) ? e[0] : e;
                    const r = o("WAWebContactCollection").ContactCollection.get(id);
                    if (r) {
                        r.businessCatalog = t;
                    }
                }).catch((t)=>o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Store:BusinessProfile:missing catalog"
                    ]))));
            }
        }
        if (structured_address) {
            q.structuredAddress = {
                streetAddress: structured_address.street_address,
                cityId: structured_address.city_id,
                localizedCityName: structured_address.localized_city_name,
                zipCode: structured_address.zip_code
            };
        } else {
            q.address = r("isStringNullOrEmpty")(address) ? null : address;
        }
        q.priceTier = price_tier ?? null;
        if (legal_entity_details) {
            q.legalEntityDetails = E(legal_entity_details);
        }
        if (fb_page) {
            q.fbPage = {
                displayName: fb_page.display_name,
                likes: fb_page.likes,
                id: fb_page.id
            };
        }
        if (ig_professional) {
            q.igProfessional = {
                handle: ig_professional.ig_handle,
                followers: ig_professional.followers
            };
        }
        if (profile_is_linked != null) {
            q.isProfileLinked = !!profile_is_linked;
        }
        if (custom_url != null) {
            q.customUrlPath = custom_url;
        }
        q.automatedType = automated_type ?? o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
        q.welcomeMsgProtocolMode = welcome_message_protocol_mode ?? o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.NONE;
        q.commandsDescription = commands_description ?? null;
        q.prompts = prompts ?? null;
        q.commands = commands ?? null;
        q.coverPhoto = cover_photo != null ? {
            id: cover_photo.id,
            url: cover_photo.url
        } : null;
        if (service_areas != null && service_areas.length > 0) {
            q.serviceAreas = service_areas;
        } else {
            q.serviceAreas = null;
        }
        if (offerings != null && offerings.length > 0) {
            q.offerings = offerings;
        } else {
            q.offerings = null;
        }
        if (is_authorized_agent != null) {
            q.isAuthorizedAgent = is_authorized_agent;
        }
        if (parent_company_name != null) {
            q.parentCompanyName = parent_company_name;
        }
        if (parent_company_logo_url != null) {
            q.parentCompanyLogoUrl = parent_company_logo_url;
        }
        if (oba_phone_number != null) {
            q.obaPhoneNumber = oba_phone_number;
        }
        if (google_place_id != null) {
            q.googlePlaceId = google_place_id;
        }
        if (show_google_reviews != null) {
            q.showGoogleReviews = show_google_reviews;
        }
        if (show_google_info != null) {
            q.showGoogleInfo = show_google_info;
        }
        if (google_place != null) {
            q.googlePlace = {
                placeName: google_place.place_name,
                formattedAddress: google_place.formatted_address,
                rating: google_place.rating,
                userRatingCount: google_place.user_rating_count,
                reviewsUri: google_place.reviews_uri,
                mapsUri: google_place.google_maps_uri,
                websiteUri: google_place.website_uri,
                weekdayHours: google_place.weekday_hours,
                googleOpenNow: google_place.google_open_now,
                latitude: google_place.latitude,
                longitude: google_place.longitude
            };
        }
        return babelHelpers.extends({}, o("WAWebBusinessProfileModel").DEFAULTS, W, q);
    }
    const T = {
        OPEN: "open",
        CLOSED: "closed",
        OPEN_TODAY: "open_today",
        CLOSED_TODAY: "closed_today",
        OPEN_APPOINTMENT: "open_appointment",
        OPEN_24H: "open_24h",
        UNKNOWN: "unknown"
    };
    function D(e, t) {
        if (e.timezone == null) {
            return {
                status: "unknown"
            };
        }
        const n = t || new Date;
        const r = new Date(n.toLocaleString("en-US", {
            timeZone: e.timezone
        }));
        const a = (n.getTime() - r.getTime()) / 1000 / 60;
        const i = e.config[o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[n.getDay()]];
        if (!i) {
            return {
                status: T.CLOSED_TODAY
            };
        }
        const i_mode = i.mode;
        switch(i_mode){
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
                return {
                    status: T.OPEN_24H
                };
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                return {
                    status: T.OPEN_APPOINTMENT
                };
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                {
                    const c = n.getHours() * 60 + n.getMinutes();
                    if (i.hours?.length === 1) {
                        const d = i.hours[0][0];
                        const m = i.hours[0][1];
                        if (c >= d && c <= m) {
                            return {
                                status: T.OPEN,
                                openUntil: x(a + m)
                            };
                        }
                        if (c <= d) {
                            return {
                                status: T.CLOSED,
                                opensAt: x(a + d)
                            };
                        }
                        return {
                            status: T.CLOSED
                        };
                    } else if (i.hours?.length === 2) {
                        const p = i.hours[0][0];
                        const _ = i.hours[0][1];
                        const f = i.hours[1][0];
                        const g = i.hours[1][1];
                        if (c >= p && c <= _) {
                            return {
                                status: T.OPEN,
                                openUntil: x(a + _),
                                additionalOpen: x(a + f),
                                additionalClose: x(a + g)
                            };
                        }
                        if (c < p) {
                            return {
                                status: T.CLOSED,
                                opensAt: x(a + p),
                                additionalOpen: x(a + f),
                                additionalClose: x(a + g)
                            };
                        }
                        if (c >= f && c <= g) {
                            return {
                                status: T.OPEN,
                                openUntil: x(a + g)
                            };
                        }
                        if (c < f) {
                            return {
                                status: T.CLOSED,
                                opensAt: x(a + f)
                            };
                        }
                        return {
                            status: T.CLOSED
                        };
                    }
                    break;
                }
        }
        return {
            status: "unknown"
        };
    }
    function x(e) {
        const t = new Date;
        const n = Math.floor(e / 60);
        t.setHours(n);
        t.setMinutes(e % 60);
        t.setSeconds(0);
        return t;
    }
    function $(e) {
        const t = D(e);
        switch(t.status){
            case T.OPEN_24H:
            case T.OPEN_APPOINTMENT:
            case T.OPEN:
                return true;
            case T.CLOSED:
            case T.CLOSED_TODAY:
            default:
                return false;
        }
    }
    function P(e) {
        const t = $(e) ? s._("We're currently *open*") : s._("We're currently *closed*");
        const n = s._("Our business hours are:");
        const a = o("WAWebSmbUtils").getBusinessHours(e, true);
        const i = a.map((e)=>`${r("WAUpperFirst")(e.day)}: ${e.hours}`).join("\n");
        return [
            t,
            n,
            i
        ].join("\n");
    }
    l.CATALOG_EXISTS = c;
    l.getEditOperationType = m;
    l.hasCatalog = f;
    l.hasShop = g;
    l.isShopBanned = h;
    l.isGoogleLinked = y;
    l.goToShop = C;
    l.goToCommerceManager = b;
    l.parseBusinessProfile = I;
    l.BUSINESS_OPEN_STATUS = T;
    l.getBusinessOpenState = D;
    l.quickReplyHoursStr = P;
}, 226);