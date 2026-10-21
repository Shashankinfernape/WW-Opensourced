__d("WAWebCommonParsersParseBusinessProfile", [
    "WAWebBizProfileGatingUtils",
    "WAWebBotTypes",
    "WAWebBusinessProfileTypes",
    "cr:5664",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const l = e.maybeChild("address");
        const c = l ? l.contentString() : void 0;
        let d;
        const m = e.maybeChild("description");
        if (m) {
            d = m.contentString();
        }
        const p = e.maybeChild("email");
        const _ = p ? p.contentString() : void 0;
        const f = e.maybeChild("price_tier");
        const g = f ? f.attrString("id") : void 0;
        let h;
        let y;
        let C;
        let b;
        if (o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled()) {
            const v = e.maybeChild("place_id");
            h = v ? v.contentString() : void 0;
            const S = e.maybeChild("show_google_reviews");
            y = S ? S.contentString() === "true" : void 0;
            const R = e.maybeChild("show_google_info");
            C = R ? R.contentString() === "true" : void 0;
            const L = e.maybeChild("google_place");
            if (L) {
                const x = [];
                L.forEachChildWithTag("weekday_hours", function(e) {
                    const t = e.contentString();
                    if (t !== "") {
                        x.push(t);
                    }
                });
                const $ = L.maybeChild("rating");
                const P = L.maybeChild("user_rating_count");
                const N = L.maybeChild("latitude");
                const M = L.maybeChild("longitude");
                const w = L.maybeChild("google_open_now");
                b = {
                    place_name: L.maybeChild("place_name")?.contentString(),
                    formatted_address: L.maybeChild("formatted_address")?.contentString(),
                    rating: $ ? parseFloat($.contentString()) : void 0,
                    user_rating_count: P ? parseInt(P.contentString(), 10) : void 0,
                    reviews_uri: L.maybeChild("reviews_uri")?.contentString(),
                    google_maps_uri: L.maybeChild("google_maps_uri")?.contentString(),
                    website_uri: L.maybeChild("website_uri")?.contentString(),
                    weekday_hours: x.length > 0 ? x : void 0,
                    google_open_now: w ? w.contentString() === "true" : void 0,
                    latitude: N ? parseFloat(N.contentString()) : void 0,
                    longitude: M ? parseFloat(M.contentString()) : void 0
                };
            }
        }
        const A = e.maybeChild("latitude");
        const F = A ? parseFloat(A.contentString()) : void 0;
        const O = e.maybeChild("longitude");
        const B = O ? parseFloat(O.contentString()) : void 0;
        let W = [];
        e.forEachChildWithTag("website", function(e) {
            W.push({
                url: e.contentString()
            });
        });
        let q;
        const U = e.maybeChild("member_since_text");
        if (U) {
            q = U.contentString();
        }
        let V;
        let H;
        let G;
        let z;
        const j = e.maybeChild("authorized_agent");
        if (j) {
            V = j.maybeAttrString("is_authorized_agent") === "true";
            const K = j.maybeChild("parent_company_name");
            H = K ? K.contentString() : void 0;
            const Q = j.maybeChild("parent_company_logo_url");
            G = Q ? Q.contentString() : void 0;
            const X = j.maybeChild("oba_phone_number");
            z = X ? X.contentString() : void 0;
        }
        const Y = [];
        const J = e.maybeChild("categories");
        if (J) {
            J.forEachChildWithTag("category", function(e) {
                const t = e.attrString("id");
                Y.push({
                    id: t,
                    localized_display_name: e.contentString()
                });
            });
        }
        let Z;
        const ee = e.maybeChild("business_hours");
        if (ee) {
            const te = ee.maybeAttrString("timezone");
            const ne = [];
            ee.forEachChildWithTag("business_hours_config", function(e) {
                ne.push({
                    day_of_week: e.attrString("day_of_week"),
                    mode: e.attrString("mode"),
                    open_time: e.hasAttr("open_time") ? parseInt(e.attrString("open_time"), 10) : 0,
                    close_time: e.hasAttr("close_time") ? parseInt(e.attrString("close_time"), 10) : 0
                });
            });
            Z = {
                config: ne
            };
            if (te != null) {
                Z.timezone = te;
            }
        }
        let re;
        const oe = e.maybeChild("profile_options");
        if (oe) {
            re = {};
            const ae = oe.maybeChild("commerce_experience");
            if (ae) {
                re.commerce_experience = o("WAWebBusinessProfileTypes").CommerceExperienceTypes.cast(ae.contentString()) ?? o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE;
            }
            const le = oe.maybeChild("cart_enabled");
            if (le) {
                re.cart_enabled = le.contentString() === "true";
            }
            const se = oe.maybeChild("shop_url");
            if (se) {
                re.shop_url = se.contentString();
            }
            const ue = oe.maybeChild("commerce_manager_url");
            if (ue) {
                re.commerce_manager_url = ue.contentString();
            }
            const ce = oe.maybeChild("is_banned");
            if (ce) {
                re.is_banned = ce.contentString() === "true";
            }
            const de = oe.maybeChild("direct_connection");
            if (de) {
                re.direct_connection = de.contentString() === "true";
            }
            const me = oe.maybeChild("is_profile_edit_disabled");
            if (me) {
                re.is_profile_edit_disabled = me.contentString() === "true";
            }
        }
        const pe = e.maybeChild("direct_connection");
        let _e;
        if (pe) {
            const fe = pe.maybeChild("default_postcode");
            _e = {
                enabled: pe.maybeAttrString("enabled") === "true",
                defaultPostcode: fe ? {
                    code: fe.attrString("code"),
                    locationName: fe.attrString("location_name")
                } : void 0
            };
        }
        const ge = [];
        const he = e.maybeChild("service_areas");
        if (he) {
            he.forEachChildWithTag("service_area", function(e) {
                const t = e.maybeChild("area_radius_meters");
                const n = e.maybeChild("area_center");
                const r = e.maybeChild("area_description");
                if (t && n) {
                    const o = n.maybeChild("latitude");
                    const a = n.maybeChild("longitude");
                    if (o && a) {
                        ge.push({
                            radius: parseFloat(t.contentString()),
                            latitude: parseFloat(o.contentString()),
                            longitude: parseFloat(a.contentString()),
                            areaDescription: r?.contentString() ?? ""
                        });
                    }
                }
            });
        }
        const ye = e.maybeChild("catalog_status");
        const Ce = ye ? ye.attrString("status") : void 0;
        const be = [];
        const ve = e.maybeChild("offerings");
        if (ve) {
            ve.forEachChildWithTag("category", function(e) {
                const t = e.attrString("id");
                const n = e.attrString("name");
                const r = [];
                e.forEachChildWithTag("offering", function(e) {
                    r.push({
                        id: e.attrString("id"),
                        localized_display_name: e.contentString(),
                        is_offered: e.maybeAttrString("is_offered") === "true"
                    });
                });
                be.push({
                    id: t,
                    name: n,
                    offerings: r
                });
            });
        }
        const Se = {};
        let Re = {};
        let Le = false;
        let Ee;
        const ke = e.maybeChild("linked_accounts");
        if (ke) {
            Le = true;
            const Ie = ke.maybeChild("fb_page");
            if (Ie) {
                const Te = Ie.maybeChild("display_name");
                const De = Ie.maybeChild("likes");
                Se.display_name = Te?.contentString();
                Se.likes = De?.contentInt();
                const xe = Ie.maybeAttrString("id");
                if (xe != null) {
                    Se.id = xe;
                }
            }
            const $e = ke.maybeChild("ig_professional");
            if ($e) {
                const Pe = $e.maybeChild("ig_handle");
                const Ne = $e.maybeChild("followers");
                Re = {
                    ig_handle: Pe?.contentString(),
                    followers: Ne?.contentInt()
                };
            }
        }
        const Me = e.maybeChild("cover_photo");
        const we = Me ? {
            id: Me.attrString("id"),
            url: new URL(Me.contentString())
        } : void 0;
        const Ae = e.maybeChild("custom_url");
        if (Ae) {
            Ee = Ae.contentString();
        }
        const Fe = o("WAWebBotTypes").BizBotAutomatedType.cast(e.maybeChild("automated_type")?.contentString());
        let Oe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(e.maybeChild("welcome_message_protocol_mode")?.contentString());
        let Be;
        const We = e.maybeChild("prompts");
        if (We) {
            Be = s(We);
        }
        let qe = e.maybeChild("commands")?.maybeChild("description")?.contentString();
        let Ue;
        const Ve = e.maybeChild("commands");
        if (Ve) {
            Ue = u(Ve);
        }
        if (!r("gkx")("26258") && n("cr:5664") && n("cr:5664").debugBotConfigs.injectBizBotFields === true) {
            Oe = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.BASIC;
            d = "Hello! I'm Midjourney, your personal assistant. I'm here to assist you with anything you might need, from travel information to workout plans, and even caring for your plants. I can even sketch your imagination!";
            Be = [
                {
                    emoji: "✨",
                    text: "Create an alien world!"
                },
                {
                    emoji: "🔥",
                    text: "Show a future city!"
                },
                {
                    emoji: "✨",
                    text: "Fantasy landscape? Generate now!"
                },
                {
                    emoji: "🔥",
                    text: "Describe a mythical world filled with magical creatures and let the bot generate an image that brings it to life!"
                },
                {
                    emoji: "✨",
                    text: "Picture an enchanted forest with towering trees, sparkling fairies, and vibrant flora, and let the bot create an image that captures its magic!"
                },
                {
                    emoji: "🔥",
                    text: "Imagine yourself as a time traveler who has just stepped into an ancient civilization. You find yourself surrounded by towering structures and exotic landscapes that are unfamiliar to you. Take a moment to observe the surroundings, notice the intricate details on the buildings and the unique attire worn by the people. Now, let the bot generate an image that captures the essence of this unexplored world, bringing forth a visual representation that transcends time and space!"
                }
            ];
            qe = "Try these commands to get started";
            Ue = [
                {
                    description: "Create images with Midjourney",
                    name: "imagine"
                },
                {
                    description: "View and adjust your personal settings",
                    name: "settings"
                },
                {
                    description: "Blend images together seamlessly",
                    name: "blend"
                },
                {
                    description: "View information about your profile",
                    name: "info"
                },
                {
                    description: "Subscribe to the profile for updates",
                    name: "subscribe"
                }
            ];
            if (W.length === 0) {
                W = [
                    {
                        url: "https://meta.com"
                    }
                ];
            }
        }
        const He = {
            address: c,
            description: d,
            email: _,
            latitude: F,
            longitude: B,
            website: W,
            categories: Y,
            business_hours: Z,
            catalog_status: Ce,
            profile_options: re,
            fb_page: Se,
            ig_professional: Re,
            profile_is_linked: Le,
            directConnection: _e,
            service_areas: ge.length > 0 ? ge : void 0,
            offerings: be.length > 0 ? be : void 0,
            cover_photo: we,
            custom_url: Ee,
            prompts: Be,
            commands: Ue,
            commands_description: qe,
            automated_type: Fe,
            welcome_message_protocol_mode: Oe,
            member_since_text: q,
            price_tier: g,
            is_authorized_agent: V,
            parent_company_name: H,
            parent_company_logo_url: G,
            oba_phone_number: z,
            google_place_id: h,
            show_google_reviews: y,
            show_google_info: C,
            google_place: b
        };
        Object.keys(He).forEach((e)=>{
            if (He[e] == null) {
                delete He[e];
            }
        });
        return He;
    }
    function s(e) {
        const t = [];
        e.forEachChildWithTag("prompt", function(e) {
            const o = e.maybeChild("emoji");
            const a = o?.contentString() ?? "";
            const i = e.maybeChild("text");
            const l = i?.contentString() ?? "";
            t.push({
                emoji: a,
                text: l
            });
        });
        return t;
    }
    function u(e) {
        const t = [];
        e.forEachChildWithTag("command", function(e) {
            const o = e.maybeChild("name");
            const a = o?.contentString() ?? "";
            const i = e.maybeChild("description");
            const l = i?.contentString() ?? "";
            t.push({
                name: a,
                description: l
            });
        });
        return t;
    }
    l.default = e;
}, 98);