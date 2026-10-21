__d("WAWebInitialStartupSplash", [], function(t, n, r, o, a, i) {
    const e = 1200;
    const l = "1100";
    function s({ animate: n }) {
        const r = document.getElementById("wa_web_initial_startup");
        if (!(r == null || r.parentNode == null)) {
            const o = function() {
                if (r.parentNode != null) {
                    r.parentNode.removeChild(r);
                }
            };
            const a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
            if (!n || a) {
                o();
                return;
            }
            const i = document.getElementById("wa_web_initial_startup_logo");
            if (!(i instanceof SVGElement)) {
                o();
                return;
            }
            try {
                const s = window.getComputedStyle(i).transform;
                const u = window.getComputedStyle(r).backgroundColor;
                const c = document.getElementById("wa_web_initial_startup_footer");
                r.style.zIndex = l;
                i.style.transform = s;
                i.style.animation = "none";
                const d = i.animate([
                    {
                        easing: "ease-out",
                        offset: 0,
                        transform: s
                    },
                    {
                        easing: "ease-in-out",
                        offset: 0.35,
                        transform: "scale(1.2)"
                    },
                    {
                        offset: 1,
                        transform: "scale(0)"
                    }
                ], {
                    duration: e,
                    fill: "forwards"
                });
                r.animate([
                    {
                        backgroundColor: u,
                        offset: 0
                    },
                    {
                        backgroundColor: u,
                        offset: 0.35
                    },
                    {
                        backgroundColor: "transparent",
                        offset: 1
                    }
                ], {
                    duration: e,
                    fill: "forwards"
                });
                if (c instanceof HTMLElement) {
                    c.animate([
                        {
                            offset: 0,
                            opacity: 1
                        },
                        {
                            offset: 0.35,
                            opacity: 1
                        },
                        {
                            offset: 1,
                            opacity: 0
                        }
                    ], {
                        duration: e,
                        fill: "forwards"
                    });
                }
                d.finished.then(()=>{
                    window.requestAnimationFrame(function() {
                        window.requestAnimationFrame(o);
                    });
                }, o);
            } catch (e) {
                o();
            }
        }
    }
    i.INITIAL_STARTUP_SPLASH_EXIT_DURATION_MS = e;
    i.removeInitialStartupSplash = s;
}, 66);