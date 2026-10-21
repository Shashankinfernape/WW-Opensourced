__d("VisualCompletionUtil", [
    "ImageDownloadTracker",
    "ResourceTimingAPI",
    "VisualCompletionConstants",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performance",
    "performanceNavigationStart",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = /url\(.*(http.*)\)/gi;
    function d(t, n) {
        for(let o = t; o != null;){
            if (o.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).LOADING_STATE) {
                return false;
            }
            if (n.mutationRoots.has(o)) {
                break;
            }
            o = o.parentElement;
        }
        return true;
    }
    function m(e) {
        const t = Reflect.get(e, "getBoundingClientRect");
        if (typeof t !== "function") {
            return null;
        }
        const n = Reflect.apply(t, e, []);
        const { bottom, left, right, top } = n;
        if (typeof bottom !== "number" || typeof left !== "number" || typeof right !== "number" || typeof top !== "number") {
            return null;
        }
        return {
            bottom,
            left,
            right,
            top
        };
    }
    function p(e) {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    function _(e, t) {
        if (typeof e.getBoundingClientRect !== "function") {
            return false;
        }
        const n = p(t);
        const r = e.getBoundingClientRect();
        const { bottom, left, right, top } = r;
        const u = o("VisualCompletionUtilCommon").getPixels(o("VisualCompletionUtilCommon").getRectIntersection({
            bottom,
            left,
            right,
            top
        }, {
            bottom: n.height,
            left: 0,
            right: n.width,
            top: -f(t).scrollY
        }));
        return u > 0;
    }
    function f(e) {
        const scrollX = window.scrollX ?? 0;
        const scrollY = window.scrollY ?? 0;
        return {
            scrollX,
            scrollY
        };
    }
    function g(e, t) {
        let n = 0;
        for(var r = e; r && r.offsetParent && typeof r.offsetTop === "number";){
            n += r.offsetTop;
            r = r.offsetParent;
        }
        if (r && r.offsetParent == null && typeof r.getBoundingClientRect === "function") {
            const o = r.getBoundingClientRect();
            const a = o.top;
            if (a >= 0) {
                n += a;
            } else if (r === document.body) {
                n -= t.initialScrollY;
            }
        }
        return n;
    }
    function h(e) {
        if (e == null || e === "") {
            return false;
        }
        const t = e.replace(/ /g, "");
        return t.indexOf("display:none") >= 0 || t.indexOf("visibility:hidden") >= 0 || t.indexOf("content-visibility:hidden") >= 0;
    }
    function y(e) {
        for(let t = e; t;){
            if (typeof t.getAttribute === "function" && h(t.getAttribute("style")) || typeof t.hasAttribute === "function" && t.hasAttribute("hidden")) {
                return true;
            }
            t = t.parentElement;
        }
        return false;
    }
    function C(e, t) {
        if (t.has(e)) {
            return t.get(e) === true;
        }
        let n = false;
        if (typeof e.getAttribute === "function" && h(e.getAttribute("style")) || typeof e.hasAttribute === "function" && e.hasAttribute("hidden")) {
            n = true;
        } else if (e.parentElement != null) {
            n = C(e.parentElement, t);
        }
        t.set(e, n);
        return n;
    }
    function b(t, n, o) {
        if (n.config.useIntersectionObserverForVisibility !== true) {
            if (n.config.invisibleStyleMemoization === true && o != null) {
                if (C(t, o)) {
                    return true;
                }
            } else if (y(t)) {
                return true;
            }
        }
        for(let a = t; a;){
            if (n.mutationRoots.has(a)) {
                return false;
            }
            if (n.getPendingLoadingElements().has(a)) {
                return true;
            }
            if (typeof a.getAttribute === "function") {
                const i = a.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME);
                if (i === (e || (e = r("VisualCompletionConstants"))).IGNORE) {
                    return true;
                }
                if (a !== t && i === (e || (e = r("VisualCompletionConstants"))).IGNORE_DYNAMIC) {
                    n.excludeElement(t);
                    return true;
                }
            }
            a = a.parentElement;
        }
        return false;
    }
    function v(e, t, n) {
        if (B(t) && !b(t, e) && t.textContent != null && t.parentElement != null) {
            const r = t.parentElement;
            if (O(r)) {
                let o = t.textContent;
                if (typeof o === "string") {
                    o = o.trim();
                }
                if (o !== "") {
                    if (n != null && n.trim() === o) {
                        return null;
                    }
                    return r;
                }
            }
        }
        return null;
    }
    function S(e, t, n) {
        const r = [];
        let o = null;
        if (n.config.invisibleStyleMemoization === true) {
            o = new Map;
        }
        Array.from(e).forEach((e)=>{
            if (!(!O(e.target) && !B(e.target))) {
                const a = e.target;
                if (e.type === "childList" && e.addedNodes && e.addedNodes.length) {
                    Array.from(e.addedNodes).forEach((e)=>{
                        const a = e;
                        if (!b(a, n, o)) {
                            if (R(a)) {
                                x(n.mutationSeq, a, "imgLoad", t, n);
                                return;
                            } else if (O(a)) {
                                let i;
                                if (typeof a.querySelectorAll === "function") {
                                    D(n.mutationSeq, a, t, n, o);
                                }
                                if (n.interactionType === "INITIAL_LOAD" && (i = n.config.SSRInjectedElements) != null && i.has(a)) {
                                    r.push([
                                        a,
                                        "ssrInject"
                                    ]);
                                } else {
                                    r.push([
                                        a,
                                        "mutationAdd"
                                    ]);
                                }
                            } else if (n.config.observeTextMutation && B(a)) {
                                const l = v(n, a);
                                if (l != null) {
                                    r.push([
                                        l,
                                        "mutationTextAdd"
                                    ]);
                                }
                            }
                        }
                    });
                } else if (e.type === "attributes" && !b(a, n, o)) {
                    if (e.attributeName === "hidden") {
                        if (!a.hasAttribute("hidden")) {
                            let i;
                            if (n.interactionType === "INITIAL_LOAD" && (i = n.config.SSRInjectedElements) != null && i.has(a)) {
                                r.push([
                                    a,
                                    "ssrUnhide"
                                ]);
                            } else {
                                r.push([
                                    a,
                                    "mutationHiddenAttribute"
                                ]);
                            }
                        }
                    } else if (e.attributeName === "style") {
                        const l = a.getAttribute("style");
                        const s = e.oldValue;
                        if (h(s) && !h(l)) {
                            let u;
                            if (n.interactionType === "INITIAL_LOAD" && (u = n.config.SSRInjectedElements) != null && u.has(a)) {
                                r.push([
                                    a,
                                    "ssrUnhide"
                                ]);
                            } else {
                                r.push([
                                    a,
                                    "mutationStyleAttribute"
                                ]);
                            }
                        }
                    } else {
                        if (F(a) === "image" && e.attributeName === "href" || F(a) === "IMG" && e.attributeName === "src") {
                            x(n.mutationSeq, a, "mutationImageAttribute", t, n);
                        }
                    }
                } else if (n.config.observeTextMutation && e.type === "characterData" && B(a)) {
                    const c = v(n, a, e.oldValue);
                    if (c != null) {
                        r.push([
                            c,
                            "mutationTextUpdate"
                        ]);
                    }
                }
            }
        });
        if (n.config.invisibleStyleMemoization === true && o != null) {
            o.clear();
        }
        return r;
    }
    function R(e) {
        return F(e) === "IMG" || F(e) === "image";
    }
    function L(e) {
        return F(e) === "picture";
    }
    function E(e) {
        return R(e) || L(e);
    }
    function k(e) {
        if (typeof window.getComputedStyle !== "function") {
            return null;
        }
        const t = window.getComputedStyle(e);
        const n = t["background-image"];
        if (t.visibility !== "hidden" && n && n !== "none") {
            c.lastIndex = 0;
            const r = c.exec(n);
            if (r && r.length > 1) {
                return r[1].replace('"', "");
            }
        }
        return null;
    }
    function I(e) {
        if (!e.reported) {
            const t = (s || (s = r("performanceNow")))();
            e.checkViewport();
            e.mutationRoots.forEach((t)=>{
                if (t && typeof t.querySelectorAll === "function") {
                    const n = t.querySelectorAll("div,i,span,li");
                    Array.prototype.forEach.call(n, function(t) {
                        if (!(t.textContent || t.children.length || e.cssBgElements.has(t) || b(t, e) || !e.inViewport(t))) {
                            const n = k(t);
                            e.bgCheckCount++;
                            if (n != null) {
                                const r = {
                                    element: new (o("WebAPIs")).WeakRef(t),
                                    url: n,
                                    resourceTiming: o("ResourceTimingAPI").getResourceTiming(n)
                                };
                                e.cssBgElements.set(t, r);
                            }
                        }
                    });
                }
            });
            e.cssBgScanOverhead = s() - t;
        }
    }
    function T(t, n) {
        if (typeof t.getAttribute === "function" && t.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).LOADING_STATE) {
            n.waitLoadingState(t);
        } else if (typeof t.querySelectorAll === "function") {
            const o = t.querySelectorAll(`[${(e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME}=${e.LOADING_STATE}]`);
            Array.from(o).forEach((e)=>{
                n.waitLoadingState(e);
            });
        }
    }
    function D(e, t, n, r, o) {
        const a = t.querySelectorAll("img, image");
        Array.from(a).forEach((t)=>{
            if (!b(t, r, o)) {
                x(e, t, "imgLoad", n, r);
            }
        });
    }
    function x(t, n, o, a, i) {
        if (!i.trackedImages.has(n)) {
            i.trackedImages.add(n);
            if (n.complete) {
                if (n.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE) {
                    i.scheduleIntersectionObserver(t, n, o, a);
                }
                return;
            }
            let l = n.currentSrc || n.src;
            const u = n.crossOrigin;
            if (F(n) === "image" && typeof n.getAttribute === "function") {
                const c = n.getAttribute("xlink:href");
                if (c != null) {
                    l = c;
                }
            }
            if (!(l == null || l === "" || l.indexOf("http") !== 0)) {
                const d = function() {
                    i.imageDone(n);
                };
                const m = function() {
                    i.imageWait(n);
                };
                if (n.getAttribute("loading") === "lazy") {
                    const p = $(t, n, o, a, d, i);
                    const { errorHandler, loadHandler } = p;
                    i.scheduleElementVisibleObserver(n, function() {
                        if (!(i.reported || n.complete)) {
                            m();
                            n.addEventListener("load", loadHandler);
                            n.addEventListener("error", errorHandler);
                        }
                    }, {
                        executeOnce: true,
                        cleanAfterReport: true
                    });
                } else if (i.config.use_image_download_tracker === true) {
                    const g = (s || (s = r("performanceNow")))();
                    r("ImageDownloadTracker")(l, m, u).then(()=>{
                        const e = (s || (s = r("performanceNow")))();
                        i.scheduleIntersectionObserver(t, n, o, a, g, e);
                        d();
                    }).catch(()=>d());
                } else {
                    const h = $(t, n, o, a, d, i);
                    const { errorHandler, loadHandler } = h;
                    m();
                    n.addEventListener("load", loadHandler);
                    n.addEventListener("error", errorHandler);
                }
            }
        }
    }
    function $(e, t, n, o, a, i) {
        const l = (s || (s = r("performanceNow")))();
        const u = function() {
            const d = (s || (s = r("performanceNow")))();
            i.scheduleIntersectionObserver(e, t, n, o, l, d);
            a();
            t.removeEventListener("load", u);
            t.removeEventListener("error", c);
        };
        var c = function() {
            a();
            t.removeEventListener("load", u);
            t.removeEventListener("error", c);
        };
        return {
            loadHandler: u,
            errorHandler: c
        };
    }
    function P(t, n) {
        return typeof t.getAttribute === "function" && t.getAttribute((e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME) === n;
    }
    function N(e) {
        const t = function() {
            e.scrolled = true;
            if (!e.markerPoints.has("scroll_start")) {
                e.addMarkerPoint("scroll_start", (s || (s = r("performanceNow")))());
            }
        };
        try {
            window.addEventListener("scroll", t, {
                passive: true
            });
            e.onComplete(function() {
                window.removeEventListener("scroll", t);
            });
        } catch (error) {
            if (error.message !== "can't access dead object") {
                throw error;
            }
        }
    }
    function M(t, n) {
        if (t instanceof HTMLImageElement) {
            n.record.isMediaVCElement = P(t, (e || (e = r("VisualCompletionConstants"))).MEDIA_VC_IMAGE);
            n.record.imgNaturalWidth = t.naturalWidth;
            n.record.imgNaturalHeight = t.naturalHeight;
        }
    }
    function w(e, t) {
        if (typeof window.devicePixelRatio === "number") {
            r("addAnnotations")(e.annotations, {
                double: {
                    devicePixelRatio: window.devicePixelRatio
                }
            });
        }
        if (e.navSequence === 1 && (u || (u = r("performance"))) && (u || (u = r("performance"))).timing && (u || (u = r("performance"))).timing.responseStart) {
            e.markerPoints.set("TTFB", {
                timestamp: (u || (u = r("performance"))).timing.responseStart - r("performanceNavigationStart")()
            });
        }
        if (t.interactionType === "INITIAL_LOAD") {
            const n = (u || (u = r("performance"))) == null || (u || (u = r("performance"))).getEntriesByType == null ? undefined : (u || (u = r("performance"))).getEntriesByType("paint");
            if (n) {
                n.forEach((e)=>{
                    if (e.name === "first-contentful-paint") {
                        t.addFirstMarkerPoint("FCP", e.startTime);
                    }
                });
            }
        }
    }
    const A = {
        attributeFilter: [
            "hidden",
            "style",
            "href",
            "src"
        ],
        attributeOldValue: true,
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
    };
    function F(e) {
        return e.tagName ?? "";
    }
    function O(e) {
        return e.nodeType === Node.ELEMENT_NODE && e.tagName !== "SCRIPT" && e.tagName !== "STYLE" && e.tagName !== "LINK";
    }
    function B(e) {
        return e.nodeType === Node.TEXT_NODE;
    }
    function W(e) {
        return {
            onError: function() {},
            onLoad: function() {},
            unmountCallback: function() {}
        };
    }
    function q(e) {
        const t = 4;
        let n = 0;
        let r = 0;
        e.visualChangeRecordList = e.visualChangeRecordList.filter(({ record })=>{
            if (record.isMediaVCElement && record.visibleAtMutation === true && record.imgNaturalHeight != null && record.imgNaturalWidth != null) {
                const resolution = record.imgNaturalHeight * record.imgNaturalWidth;
                const ignored = +(resolution < n * t);
                const s = {
                    ignored,
                    resolution,
                    mutationType: record.mutationType,
                    naturalWidth: String(record.imgNaturalWidth),
                    naturalHeight: String(record.imgNaturalHeight)
                };
                if (n > 0) {
                    s.ratio = resolution / n;
                }
                e.addMarkerPoint(`mediaVCImage_${r++}`, record.paintTime, s);
                if (ignored) {
                    return false;
                }
                e.addMarkerPoint("ImageMediaVC", record.paintTime);
                n = resolution;
                return true;
            }
            return true;
        });
    }
    function U(e, t, n) {
        e.mutationRoots.forEach((e)=>{
            const r = function() {
                t(null, true);
            };
            n.push(function() {
                e.removeEventListener("click", r);
            });
            e.addEventListener("click", r);
            const o = function() {
                t(null, true);
            };
            n.push(function() {
                e.removeEventListener("keyDown", o);
            });
            e.addEventListener("keyDown", o);
        });
    }
    l.isOutsideLoadingStateInHTRoot = d;
    l.getMeasuredRect = m;
    l.getViewportSize = p;
    l.isInAboveTheFold = _;
    l.getScrollPosition = f;
    l.offsetTop = g;
    l.checkInvisibleStyle = h;
    l.checkInvisibleStyleElement = y;
    l.checkInvisibleStyleElementRecursive = C;
    l.shouldIgnoreMutation = b;
    l.getParentElementForTextNodeChange = v;
    l.extractMutationElements = S;
    l.isImage = R;
    l.isPicture = L;
    l.isImageOrPicture = E;
    l.getStyleBackground = k;
    l.scanCssBgElements = I;
    l.checkLoadingStates = T;
    l.trackAllChildImages = D;
    l.trackImage = x;
    l.getImageLoadHandlers = $;
    l.checkDOMElementAttributeValue = P;
    l.setupScrollHandler = N;
    l.getImageNaturalSize = M;
    l.addPlatformMetaData = w;
    l.mutationObserverConfig = A;
    l.getTagName = F;
    l.isElementNode = O;
    l.isTextNode = B;
    l.trackImageLoad = W;
    l.processMediaVCImage = q;
    l.subscribeUserInputForExtraMutation = U;
}, 98);