__d("WAWebNewsletterAdminProfilePicture.react", [
    "$InternalEnum",
    "WAWebDrawerManager",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebNewsletterAdminProfileDetailsDrawerLoadable",
    "WAWebNewsletterModelUtils",
    "WAWebUnstyledButton.react",
    "WDSIconIcPersonFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        contactIcon: {
            width: "xh8yej3",
            height: "x5yr21d",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            backgroundColor: "x1od0jb8",
            color: "xhslqc4",
            outline: "x4u6w88",
            outlineOffset: "x1g40iwv",
            $$css: true
        },
        button: {
            width: "x14qfxbe",
            height: "xc9qbxq",
            $$css: true
        },
        pttAvatar: {
            width: "xnfjc3l",
            height: "x14h49td",
            $$css: true
        },
        newsletterSettings: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        buttonFill: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    const c = n("$InternalEnum")({
        DEFAULT: 0,
        CONTACT_LIST: 1,
        PREVIEW: 2,
        PTT_AVATAR: 3,
        NEWSLETTER_SETTINGS: 4
    });
    function d(e) {
        const t = o("react-compiler-runtime").c(24);
        const { disabled, newsletterAdminProfile, onClick, theme } = e;
        const d = disabled === undefined ? false : disabled;
        const m = theme === undefined ? c.DEFAULT : theme;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                height: 40,
                width: 40,
                x: -8,
                y: -8
            };
            t[0] = p;
        } else {
            p = t[0];
        }
        let _;
        if (t[1] !== newsletterAdminProfile || t[2] !== m) {
            _ = s.jsx(r("WDSIconIcPersonFilled.react"), {
                iconXstyle: u.contactIcon,
                "aria-hidden": true,
                height: 212,
                testid: "default-contact-refreshed",
                viewBox: p,
                width: 212
            });
            let f;
            if (t[4] !== newsletterAdminProfile) {
                f = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(newsletterAdminProfile);
                t[4] = newsletterAdminProfile;
                t[5] = f;
            } else {
                f = t[5];
            }
            const g = f;
            if (g.firstInitial != null || g.secondInitial != null) {
                let h;
                if (t[6] !== newsletterAdminProfile.name || t[7] !== m) {
                    h = m === c.PREVIEW ? {
                        backgroundColorId: 7
                    } : {
                        name: newsletterAdminProfile.name
                    };
                    t[6] = newsletterAdminProfile.name;
                    t[7] = m;
                    t[8] = h;
                } else {
                    h = t[8];
                }
                _ = s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, babelHelpers.extends({
                    initialsData: g,
                    theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture
                }, h));
            }
            t[1] = newsletterAdminProfile;
            t[2] = m;
            t[3] = _;
        } else {
            _ = t[3];
        }
        let C;
        if (t[9] !== newsletterAdminProfile.pictureDirectPath) {
            C = o("WAWebNewsletterModelUtils").formatProfilePictureURL(newsletterAdminProfile.pictureDirectPath);
            t[9] = newsletterAdminProfile.pictureDirectPath;
            t[10] = C;
        } else {
            C = t[10];
        }
        const b = C;
        let v;
        if (t[11] !== m) {
            v = m === c.DEFAULT || m === c.PREVIEW ? u.button : m === c.CONTACT_LIST ? u.buttonFill : m === c.PTT_AVATAR ? u.pttAvatar : m === c.NEWSLETTER_SETTINGS ? u.newsletterSettings : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${m}`);
            })();
            t[11] = m;
            t[12] = v;
        } else {
            v = t[12];
        }
        const S = v;
        let R;
        if (t[13] !== newsletterAdminProfile || t[14] !== onClick) {
            R = function(t) {
                if (onClick) {
                    t?.stopPropagation();
                    onClick();
                    return;
                }
                const Component = o("WAWebNewsletterAdminProfileDetailsDrawerLoadable").NewsletterAdminProfileDetailsDrawerLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component newsletterAdminProfile={newsletterAdminProfile} onClose={o("WAWebDrawerManager").closeDrawerRight}/>);
            };
            t[13] = newsletterAdminProfile;
            t[14] = onClick;
            t[15] = R;
        } else {
            R = t[15];
        }
        const L = R;
        let E;
        if (t[16] !== _ || t[17] !== b) {
            const Component = r("WAWebImg.react");
            E = b == null ? _ : <Component src={b} hasPrivacyChecks crossOrigin={false} className="x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23" draggable={false} renderError={function() {
                return _;
            }}/>;
            t[16] = _;
            t[17] = b;
            t[18] = E;
        } else {
            E = t[18];
        }
        let k;
        if (t[19] !== S || t[20] !== d || t[21] !== L || t[22] !== E) {
            const Component = r("WAWebUnstyledButton.react");
            k = <Component xstyle={S} disabled={d} onClick={L}>{E}</Component>;
            t[19] = S;
            t[20] = d;
            t[21] = L;
            t[22] = E;
            t[23] = k;
        } else {
            k = t[23];
        }
        return k;
    }
    l.NewsletterAdminProfilePictureTheme = c;
    l.WAWebNewsletterAdminProfilePicture = d;
}, 98);