__d("VisualCompletionLogger", [
    "CLS",
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LCP",
    "LateMutationUtilities",
    "ReactStackUtils",
    "ResourceDownloadLogger",
    "ResourceTimingAPI",
    "VisibilityState",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "manualVCPointCandidate";
    const c = "firstContentfulPaintInHTRoot";
    const d = "largestContentfulPaintInHTRoot";
    let m = 1;
    function p() {
        return {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        };
    }
    function _(paint, element) {
        const e_rectangle = paint.rectangle;
        return {
            data: {
                height: Math.floor(e_rectangle.bottom - e_rectangle.top),
                mutationType: paint.mutationType,
                pixels: paint.pixels,
                tagName: o("VisualCompletionUtil").getTagName(element),
                type: paint.type,
                veid: paint.veid,
                width: Math.floor(e_rectangle.right - e_rectangle.left),
                x: Math.floor(e_rectangle.left),
                y: Math.floor(e_rectangle.top)
            },
            element: paint.element,
            timestamp: paint.timestamp
        };
    }
    class f {
        constructor(e, t, n, a, i){
            var l;
            this.bgCheckCount = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.cssBgScanOverhead = 0;
            this.mutationProcessingOverhead = 0;
            this.trackedImages = new WeakSet;
            this.initialScrollY = 0;
            this.scrolledVC = 0;
            this.reported = false;
            this.measureOriginalViewport = true;
            this.mutationRoots = new (r("IteratableElementWeakSet"));
            this.mutatedElementCount = 0;
            this.lateMutationIgnoreElements = new WeakSet;
            this.config = i;
            this.$3 = new (l = r("IteratableElementWeakMap"));
            this.$6 = new l;
            this.$4 = new l;
            this.$5 = [];
            this.$1 = [];
            this.$2 = [];
            this.cssBgElements = new l;
            this.visualChangeRecordList = [];
            this.$10 = new (r("IteratableElementWeakSet"));
            this.startTime = e;
            this.$7 = {
                height: 0,
                width: 0
            };
            this.initialScrollY = a === "INITIAL_LOAD" ? 0 : o("VisualCompletionUtil").getScrollPosition(this).scrollY;
            this.$11 = this.initialScrollY;
            this.currentScrollY = this.initialScrollY;
            this.navSequence = t;
            this.traceID = n;
            this.markerPoints = new Map;
            this.stateLog = new Map;
            this.annotations = {
                string: {},
                int: {},
                double: {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            };
            this.tagSet = new Map;
            this.navDone = false;
            this.interactionType = a;
            this.scrolled = false;
            this.$12 = o("CLS").getCLSCallback();
            if (a === "INITIAL_LOAD") {
                this.$13 = o("LCP").getLCPCallback();
            }
            r("VisualCompletionTraceObserver").emitStart(a);
        }
        addAnnotation(t, n) {
            r("addAnnotations")(this.annotations, {
                string: {
                    [t]: n
                }
            });
        }
        addAnnotationInt(t, n) {
            r("addAnnotations")(this.annotations, {
                int: {
                    [t]: n
                }
            });
        }
        addAnnotationDouble(t, n) {
            r("addAnnotations")(this.annotations, {
                double: {
                    [t]: n
                }
            });
        }
        addAnnotationBoolean(t, n) {
            r("addAnnotations")(this.annotations, {
                bool: {
                    [t]: n
                }
            });
        }
        addAnnotationIntArray(t, n) {
            r("addAnnotations")(this.annotations, {
                int_array: {
                    [t]: n
                }
            });
        }
        addAnnotationDoubleArray(t, n) {
            r("addAnnotations")(this.annotations, {
                double_array: {
                    [t]: n
                }
            });
        }
        addAnnotationStringArray(t, n) {
            r("addAnnotations")(this.annotations, {
                string_array: {
                    [t]: n
                }
            });
        }
        addAnnotationBooleanArray(t, n) {
            r("addAnnotations")(this.annotations, {
                bool_array: {
                    [t]: n
                }
            });
        }
        addFirstMarkerPoint(t, n, r = {}) {
            const e = this.markerPoints.get(t);
            if (n >= this.startTime && (!e || e.timestamp > n)) {
                this.markerPoints.set(t, {
                    data: r,
                    timestamp: n
                });
            }
        }
        addMarkerPoint(t, n, r = {}) {
            if (n >= this.startTime) {
                this.markerPoints.set(t, {
                    data: r,
                    timestamp: n
                });
            }
        }
        addVCPointCandidate(t, n = {}) {
            this.addMarkerPoint(u, t, n);
        }
        addVisualElement(mutationSeq, n, r, a, paintTime, l, rectAtMutation, imgLoadStart, imgLoadEnd) {
            if (this.scrolled) {
                this.currentScrollY = o("VisualCompletionUtil").getScrollPosition(this).scrollY;
                this.scrolled = false;
            }
            let visibleAtMutation = l;
            if (l === true && rectAtMutation != null && (rectAtMutation.bottom === rectAtMutation.top || rectAtMutation.left === rectAtMutation.right)) {
                visibleAtMutation = false;
            }
            const d = {
                element: new (o("WebAPIs")).WeakRef(n),
                record: {
                    detached: false,
                    imgLoadEnd,
                    imgLoadStart,
                    isMediaVCElement: false,
                    mutationSeq,
                    mutationTime: a,
                    mutationType: r,
                    paintTime,
                    rectAtMutation,
                    scrollY: this.currentScrollY,
                    veid: m++,
                    visibleAtMutation,
                    visibleAtTraceEnd: false
                }
            };
            o("VisualCompletionUtil").getImageNaturalSize(n, d);
            this.visualChangeRecordList.push(d);
        }
        logLoadingElementStart(t, n, r) {
            this.$4.set(t, {
                start: r,
                rectangle: o("VisualCompletionUtilCommon").castToRect(n)
            });
        }
        logLoadingElementEnd(t, n) {
            const e = this.$4.get(t);
            if (e) {
                this.$5.push(babelHelpers.extends({}, e, {
                    end: n
                }));
                this.$4.delete(t);
            }
        }
        trackPagelet(t, n, r, a, pageletTypeName) {
            this.$6.set(t, {
                data: {},
                element: new (o("WebAPIs")).WeakRef(t),
                mutationSeq: 0,
                name: n,
                pageletTypeName,
                points: {
                    hydration: r - this.startTime
                },
                vcCallback: a
            });
        }
        addTag(t, n) {
            if (!this.tagSet.has(t)) {
                this.tagSet.set(t, new Set);
            }
            const e = this.tagSet.get(t);
            if (e) {
                e.add(n);
            }
        }
        checkViewport() {
            this.$7 = o("VisualCompletionUtil").getViewportSize(this);
        }
        calculate(n = false) {
            const t = this;
            this.checkViewport();
            const a = (e || (e = r("performanceNow")))();
            this.$9 = 0;
            this.initTree();
            if (!n && o("ResourceTimingAPI").canUseResourceTimingAPI()) {
                this.getBackgroundImages();
            }
            this.calculatePaintedPixels();
            const i = {
                annotations: this.annotations,
                cssBgScanOverhead: this.cssBgScanOverhead,
                bgChecked: this.bgCheckCount,
                bgNum: 0,
                bgPixels: 0,
                vcCalculationOverhead: 0,
                mutationProcessingOverhead: this.mutationProcessingOverhead,
                compNum: 0,
                compPixels: 0,
                cssBgElements: Array.from(this.cssBgElements.values()),
                elements: this.$2,
                finalScrollY: this.$11,
                imgNum: 0,
                imgPixels: 0,
                initialScrollY: this.initialScrollY,
                interactionType: this.interactionType,
                loadingElements: this.$5,
                markerPoints: this.markerPoints,
                navComplete: e(),
                navSequence: this.navSequence,
                pagelets: Array.from(this.$6.values()),
                paintedPixels: this.$9,
                scrollY: o("VisualCompletionUtil").getScrollPosition(this).scrollY,
                scrolledVC: this.scrolledVC,
                speedIndex: 0,
                startTime: this.startTime,
                tagSet: this.tagSet,
                totalPixels: this.$8,
                traceId: this.traceID,
                tracePolicy: this.tracePolicy,
                stateLog: this.stateLog,
                vcWithoutImage: 0,
                viewport: this.$7,
                visuallyComplete: 0
            };
            r("addAnnotations")(this.annotations, {
                int: {
                    mutationRootCount: this.mutationRoots.size(),
                    mutatedElementCount: this.mutatedElementCount,
                    visualChangeRecordCount: this.visualChangeRecordList.length,
                    paintedElementCount: this.$2.length
                }
            });
            let l = null;
            let s = null;
            if (this.$2.length) {
                this.addMarkerPoint("FP", this.$2[this.$2.length - 1].timestamp);
                this.$2.forEach((paint)=>{
                    const n = o("WebAPIs").derefOnlyAttachedElement(paint.element);
                    if (n) {
                        if (t.config.log_contentful_paint_in_ht_root === true && paint.pixels > 0 && t.isOutsideLoadingStateInHTRoot(n)) {
                            if (l == null || paint.timestamp < l.paint.timestamp) {
                                l = {
                                    element: n,
                                    paint
                                };
                            }
                            if (s == null || paint.pixels > s.paint.pixels || paint.pixels === s.paint.pixels && paint.timestamp > s.paint.timestamp) {
                                s = {
                                    element: n,
                                    paint
                                };
                            }
                        }
                        const r = paint.pagelet;
                        if (i.vcWithoutImage === 0 && paint.type === "component") {
                            const a = {
                                height: Math.floor(paint.rectangle.bottom - paint.rectangle.top),
                                mutationType: paint.mutationType,
                                tagName: o("VisualCompletionUtil").getTagName(n),
                                type: paint.type,
                                width: Math.floor(paint.rectangle.right - paint.rectangle.left),
                                x: Math.floor(paint.rectangle.left),
                                y: Math.floor(paint.rectangle.top)
                            };
                            if (r) {
                                a.pagelet = r.name;
                            }
                            i.vcWithoutImage = paint.latency;
                            i.markerPoints.set("vcWithoutImage", {
                                data: a,
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.latency + t.startTime
                            });
                            i.markerPoints.set("lastMutationBeforeVC", {
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.mutationTimestamp
                            });
                        }
                        if (i.visuallyComplete === 0) {
                            const u = {
                                height: Math.floor(paint.rectangle.bottom - paint.rectangle.top),
                                mutationType: paint.mutationType,
                                tagName: o("VisualCompletionUtil").getTagName(n),
                                type: paint.type,
                                width: Math.floor(paint.rectangle.right - paint.rectangle.left),
                                x: Math.floor(paint.rectangle.left),
                                y: Math.floor(paint.rectangle.top)
                            };
                            if (r) {
                                u.pagelet = r.name;
                            }
                            i.visuallyComplete = paint.latency;
                            i.markerPoints.set("visuallyComplete", {
                                data: u,
                                element: new (o("WebAPIs")).WeakRef(n),
                                timestamp: paint.latency + t.startTime
                            });
                            i.scrollY = paint.scrollY;
                        }
                        i.speedIndex += paint.pixels / t.$9 * paint.latency;
                        switch(paint.type){
                            case "component":
                                i.compNum++;
                                i.compPixels += paint.pixels;
                                break;
                            case "img":
                                i.imgNum++;
                                i.imgPixels += paint.pixels;
                                break;
                            case "bg":
                                i.bgNum++;
                                i.bgPixels += paint.pixels;
                                break;
                        }
                    }
                });
            }
            if (l != null) {
                i.markerPoints.set(c, _(l.paint, l.element));
            }
            if (s != null) {
                i.markerPoints.set(d, _(s.paint, s.element));
            }
            this.logPagelets();
            this.logPixelProgress();
            if (n) {
                i.visuallyComplete = i.vcWithoutImage = (e || (e = r("performanceNow")))() - this.startTime;
                i.markerPoints.set("visuallyComplete", {
                    data: {},
                    timestamp: i.visuallyComplete + this.startTime
                });
                i.markerPoints.set("vcWithoutImage", {
                    data: {},
                    timestamp: i.vcWithoutImage + this.startTime
                });
            }
            const u = e();
            i.vcCalculationOverhead = u - a;
            this.setupMetaData(i);
            this.logCssBgElementsMetaData();
            this.reported = true;
            const vcMetaDataLoggingLatency = e() - u;
            r("addAnnotations")(i.annotations, {
                double: {
                    vcMetaDataLoggingLatency,
                    vcTotalLoggingOverhead: vcMetaDataLoggingLatency + i.cssBgScanOverhead + i.mutationProcessingOverhead + i.vcCalculationOverhead
                }
            });
            return i;
        }
        isOutsideLoadingStateInHTRoot(t) {
            return o("VisualCompletionUtil").isOutsideLoadingStateInHTRoot(t, this);
        }
        cleanupPaintedElements() {
            const e = new Set;
            for(const t = [].concat(this.$2); t.length > 0;){
                const n = t.pop();
                if (!e.has(n)) {
                    e.add(n);
                    delete n.element;
                    t.push(...n.children);
                }
            }
        }
        tearDown() {
            this.$3.clear();
            this.$1 = [];
            this.visualChangeRecordList = [];
            this.$10.clear();
            if (!this.config.enableInstrumentationCorrectnessLogging) {
                this.mutationRoots.clear();
            }
            this.$4.clear();
            this.$5 = [];
            if (!this.config.retain_element_reference) {
                this.cleanupPaintedElements();
                this.cssBgElements.forEach((e)=>{
                    delete e.element;
                });
                this.$6.forEach((e)=>{
                    delete e.element;
                });
            }
            this.$6.clear();
            this.markerPoints.forEach((e)=>{
                delete e.element;
            });
            this.cssBgElements.clear();
        }
        findPagelet(t) {
            for(let e = t; e;){
                if (this.$6.has(e)) {
                    return this.$6.get(e);
                }
                e = e.parentElement;
            }
            return null;
        }
        findParent(t) {
            for(let e = t.parentElement; e;){
                if (this.$3.has(e)) {
                    return this.$3.get(e);
                }
                e = e.parentElement;
            }
            return null;
        }
        checkExcluded(t) {
            for(let e = t; e;){
                if (this.$10.has(e)) {
                    return true;
                }
                if (this.$3.has(e) || this.mutationRoots.has(e)) {
                    return false;
                }
                if (o("VisualCompletionUtil").checkDOMElementAttributeValue(e, (s || (s = r("VisualCompletionConstants"))).IGNORE)) {
                    return true;
                }
                e = e.parentElement;
            }
            return false;
        }
        getBackgroundImages() {
            const e = this;
            this.cssBgElements.forEach((t)=>{
                if (t.element) {
                    const a = o("WebAPIs").derefOnlyAttachedElement(t.element);
                    if (!a) {
                        return;
                    }
                    const parent = e.findParent(a);
                    if (!parent) {
                        return;
                    }
                    const l = o("VisualCompletionUtil").offsetTop(a, e);
                    const s = e.getRelativeBoundingClientRect(a, e.measureOriginalViewport ? l : undefined);
                    const u = o("VisualCompletionUtilCommon").getRectIntersection(s, parent.rectangle);
                    const pixels = o("VisualCompletionUtilCommon").getPixels(u);
                    if (pixels === 0 || e.measureOriginalViewport && l > e.$7.height) {
                        return;
                    }
                    if (t.resourceTiming?.responseEnd == null) {
                        t.resourceTiming = o("ResourceTimingAPI").getResourceTiming(t.url);
                    }
                    if (t.resourceTiming?.responseEnd != null) {
                        const d = t.resourceTiming;
                        const p = d.responseEnd;
                        const _ = e.findPagelet(a);
                        if (d.startTime >= e.startTime && p > parent.timestamp) {
                            const f = {
                                children: [],
                                element: new (o("WebAPIs")).WeakRef(a),
                                hadLateMutationExpected: false,
                                hadLateMutationUnexpected: false,
                                latency: p - e.startTime,
                                mutationSeq: parent.mutationSeq,
                                mutationType: "bg",
                                mutationTimestamp: parent.mutationTimestamp,
                                offsetTop: l,
                                pagelet: _,
                                parent,
                                pixels,
                                rectangle: u,
                                scrollY: parent.scrollY,
                                timestamp: p,
                                type: "bg",
                                veid: String(m++)
                            };
                            parent.children.push(f);
                            e.$3.set(a, f);
                            e.$2.push(f);
                        }
                    }
                }
            });
        }
        getRelativeBoundingClientRect(t, n) {
            const r = o("VisualCompletionUtil").getMeasuredRect(t) ?? p();
            return {
                bottom: n != null ? n + (r.bottom - r.top) : r.bottom,
                left: r.left,
                right: r.right,
                top: n ?? r.top
            };
        }
        findFirstVisibleChild(t) {
            const e = this;
            let a;
            for(var n = [
                t
            ], r = ()=>{
                let t = [];
                let r = 0;
                let v;
                n.forEach((n)=>{
                    const i = o("VisualCompletionUtil").getMeasuredRect(n);
                    if (i != null) {
                        const l = o("VisualCompletionUtilCommon").getPixels(i);
                        if (!(l > 0 && (i.bottom <= 0 || i.right <= 0 || i.left >= e.$7.width || i.top >= e.$7.height))) {
                            if (l > r && !e.checkExcluded(n)) {
                                r = l;
                                v = n;
                            }
                            if (n.children != null) {
                                t = t.concat(Array.from(n.children));
                            }
                        }
                    }
                });
                if (r > 0 && v) {
                    return {
                        v
                    };
                }
                n = t;
            }; n && n.length;){
                a = r();
                if (a) {
                    return a.v;
                }
            }
            return null;
        }
        getRectangle(t, n) {
            const e = this.findFirstVisibleChild(t);
            if (e == null) {
                return p();
            }
            const r = this.getRelativeBoundingClientRect(e);
            const { bottom, left, right, top } = r;
            const u = {
                bottom,
                left,
                right,
                top
            };
            return o("VisualCompletionUtilCommon").getRectIntersection(u, n);
        }
        excludeElement(t) {
            this.$10.add(t);
        }
        initTree() {
            const e = this;
            const t = {
                bottom: this.$7.height,
                left: 0,
                right: this.$7.width,
                top: -this.initialScrollY
            };
            this.visualChangeRecordList = this.visualChangeRecordList.sort((e, t)=>e.record.paintTime - t.record.paintTime);
            o("VisualCompletionUtil").processMediaVCImage(this);
            this.visualChangeRecordList.forEach(({ element, record })=>{
                const i = o("WebAPIs").derefOnlyAttachedElement(element);
                if (i == null) {
                    record.detached = true;
                    record.finalState = "detached";
                    return;
                }
                let l = i;
                let s = o("VisualCompletionUtil").offsetTop(i, e);
                record.offsetTop = s;
                let u = e.getRelativeBoundingClientRect(i, e.measureOriginalViewport ? s : undefined);
                record.rectAtTraceEnd = u;
                if (record.visibleAtMutation === false) {
                    if (e.config.useIntersectionObserverForVisibility === true) {
                        return;
                    }
                    l = e.findFirstVisibleChild(i);
                }
                if (l == null) {
                    record.finalState = u.bottom - u.top > 0 && u.right - u.left > 0 ? "offscreen" : "invisible";
                    return;
                }
                if (l !== i) {
                    record.nonEmptyChildFound = true;
                    s = o("VisualCompletionUtil").offsetTop(l, e);
                    record.offsetTop = s;
                    u = e.getRelativeBoundingClientRect(l, e.measureOriginalViewport ? s : undefined);
                    record.rectAtTraceEnd = u;
                }
                if (e.inAboveTheFold(l)) {
                    const c = o("VisualCompletionUtilCommon").getRectIntersection(u, t);
                    if (record.paintTime - e.startTime > e.scrolledVC) {
                        e.scrolledVC = record.paintTime - e.startTime;
                        e.$11 = record.scrollY;
                    }
                    if (e.measureOriginalViewport && s > e.$7.height) {
                        record.finalState = "offscreen";
                        return;
                    }
                    const d = e.findPagelet(l);
                    const m = {
                        children: [],
                        element: new (o("WebAPIs")).WeakRef(l),
                        hadLateMutationExpected: false,
                        hadLateMutationUnexpected: false,
                        imgLoadStart: record.imgLoadStart != null ? record.imgLoadStart - e.startTime : undefined,
                        latency: record.paintTime - e.startTime,
                        mutationSeq: record.mutationSeq,
                        mutationType: record.mutationType,
                        mutationTimestamp: record.mutationTime,
                        offsetTop: s,
                        pagelet: d,
                        parent: null,
                        pixels: o("VisualCompletionUtilCommon").getPixels(c),
                        rectangle: c,
                        scrollY: record.scrollY,
                        timestamp: record.paintTime,
                        type: record.mutationType === "imgLoad" || record.mutationType === "mutationImageAttribute" ? "img" : "component",
                        veid: String(record.veid)
                    };
                    record.visibleAtTraceEnd = true;
                    record.finalState = "visible";
                    e.$3.set(l, m);
                }
            });
            this.$3.forEach((t)=>{
                const n = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (n) {
                    const r = e.findParent(n);
                    if (r) {
                        if (t.type !== "component") {
                            t.scrollY = r.scrollY;
                        }
                        r.children.push(t);
                        t.parent = r;
                    } else {
                        e.$1.push(t);
                    }
                }
            });
            this.$3.forEach((t, n)=>{
                for(let r = t.parent; r;){
                    if (t.timestamp < r.timestamp) {
                        e.$3.delete(n);
                        return;
                    }
                    r = r.parent;
                }
                e.$2.push(t);
            });
        }
        logPixelProgress() {
            const e = this;
            const t = new Map([
                [
                    "vc98",
                    0.02
                ],
                [
                    "vc95",
                    0.05
                ]
            ]);
            let n = 0;
            let r = 0;
            for(var o = ()=>{
                const o = e.$2[a];
                n += o.pixels;
                if (t.size === 0) {
                    return 1;
                }
                t.forEach((t, r)=>{
                    if (!e.markerPoints.has(r) && n / e.$9 >= t) {
                        e.addMarkerPoint(r, o.latency + e.startTime);
                    }
                });
                if (o.type === "component") {
                    r += o.pixels;
                    o.children.forEach((e)=>{
                        if (e.type !== "component") {
                            r += e.pixels;
                        }
                    });
                    t.forEach((n, a)=>{
                        if (!e.markerPoints.has(`${a}WithoutImage`) && r / e.$9 >= n) {
                            e.addMarkerPoint(`${a}WithoutImage`, o.latency + e.startTime);
                            t.delete(a);
                        }
                    });
                }
            }, a = 0; a < this.$2.length && !o(); a++);
        }
        logPagelets() {
            const e = this;
            this.$6.forEach((t, n)=>{
                if (!e.inViewport(n)) {
                    if (t.vcCallback != null) {
                        t.vcCallback(null, null, t.data);
                    }
                    e.$6.delete(n);
                    return;
                }
                const r = e.$3.has(n) ? e.$3.get(n) : e.findParent(n);
                const a = o("WebAPIs").derefOnlyAttachedElement(t.element);
                if (a != null && e.config.log_pagelet_size === true) {
                    const i = e.getRelativeBoundingClientRect(a);
                    t.data.height = Math.floor(i.bottom - i.top);
                    t.data.width = Math.floor(i.right - i.left);
                }
                if (r) {
                    const l = r.latency + e.startTime;
                    t.points.firstPaint = l;
                    t.points.visuallyComplete = l;
                    t.points.vcWithoutImage = l;
                    t.mutationSeq = r.mutationSeq;
                }
            });
            this.$2.forEach((t)=>{
                for(let n = t.pagelet; n != null;){
                    const a = t.latency + e.startTime;
                    n.points.visuallyComplete = Math.max(n.points.visuallyComplete ?? 0, a);
                    if (t.type === "component") {
                        n.points.vcWithoutImage = Math.max(n.points.vcWithoutImage ?? 0, a);
                    }
                    const l = o("WebAPIs").derefOnlyAttachedElement(n.element);
                    n = l?.parentElement != null ? e.findPagelet(l?.parentElement) : null;
                }
            });
            this.$6.forEach((t)=>{
                if (t.points.visuallyComplete != null && t.pageletTypeName != null && t.pageletTypeName !== "") {
                    e.markerPoints.set(`${t.pageletTypeName}VC`, {
                        timestamp: t.points.visuallyComplete
                    });
                }
                if (t.points.vcWithoutImage != null) {
                    e.markerPoints.set(`VC_${t.name}`, {
                        data: t.data,
                        timestamp: t.points.vcWithoutImage
                    });
                }
                if (t.vcCallback != null && t.points.visuallyComplete != null && t.points.vcWithoutImage != null) {
                    t.vcCallback(t.points.visuallyComplete, t.points.vcWithoutImage, t.data);
                }
                if (!e.config.retain_element_reference) {
                    delete t.element;
                }
            });
        }
        calculatePaintedPixels() {
            const e = this;
            this.$2 = this.$2.sort((e, t)=>t.latency - e.latency);
            this.$2.forEach((t)=>{
                let t_pixels = t.pixels;
                for(var r = t.parent; r;){
                    t.rectangle = o("VisualCompletionUtilCommon").getRectIntersection(t.rectangle, r.rectangle);
                    t.pixels = o("VisualCompletionUtilCommon").getPixels(t.rectangle);
                    t_pixels = Math.min(t_pixels, t.pixels, r.pixels);
                    r = r.parent;
                }
                t.pixels = t_pixels;
                for(r = t.parent; r;){
                    r.pixels -= t_pixels;
                    r = r.parent;
                }
                e.$9 += t_pixels;
            });
            this.$8 = this.$9;
        }
        inAboveTheFold(t) {
            const e = o("VisualCompletionUtil").getViewportSize(this);
            const n = o("VisualCompletionUtilCommon").getPixels(this.getRectangle(t, {
                bottom: e.height,
                left: 0,
                right: e.width,
                top: -o("VisualCompletionUtil").getScrollPosition(this).scrollY
            }));
            return n > 0;
        }
        inOriginalViewport(t) {
            return this.inAboveTheFold(t) && o("VisualCompletionUtil").offsetTop(t, this) <= this.$7.height;
        }
        inViewport(t) {
            if (this.measureOriginalViewport) {
                return this.inOriginalViewport(t);
            }
            return this.inAboveTheFold(t);
        }
        setInitialScrollY(t) {
            this.initialScrollY = t;
            this.currentScrollY = t;
        }
        setTracePolicy(t) {
            this.tracePolicy = t;
        }
        setupMetaData(t) {
            const e = this;
            const n = this.markerPoints.get(u);
            if (n && n.timestamp > t.visuallyComplete + t.startTime) {
                t.visuallyComplete = n.timestamp - t.startTime;
                this.markerPoints.set("visuallyComplete", n);
                r("addAnnotations")(t.annotations, {
                    int: {
                        isVCOverriden: 1
                    }
                });
            }
            if (t.tracePolicy != null && t.tracePolicy !== "") {
                r("addAnnotations")(t.annotations, {
                    string: {
                        tracePolicy: t.tracePolicy
                    }
                });
            }
            r("addAnnotations")(t.annotations, {
                string: {
                    interactionId: t.traceId
                },
                int: {
                    height: t.viewport.height,
                    width: t.viewport.width,
                    scrollY: t.scrollY
                }
            });
            o("VisualCompletionUtil").addPlatformMetaData(t, this);
            r("addAnnotations")(t.annotations, {
                double: {
                    vcCalculationOverhead: t.vcCalculationOverhead,
                    mutationProcessingOverhead: t.mutationProcessingOverhead,
                    cssBgScanOverhead: t.cssBgScanOverhead
                },
                int: {
                    finalScrollY: t.finalScrollY,
                    initialScrollY: t.initialScrollY
                }
            });
            t.markerPoints.set("logVC", {
                timestamp: t.navComplete
            });
            if (t.speedIndex > 0) {
                t.markerPoints.set("speedIndex", {
                    timestamp: t.speedIndex + t.startTime
                });
            }
            if (t.elements.length && this.measureOriginalViewport && t.scrolledVC > 0) {
                t.markerPoints.set("scrolledVC", {
                    timestamp: t.scrolledVC + t.startTime
                });
            }
            const a = o("VisibilityState").getHiddenSpans(t.startTime, t.visuallyComplete + t.startTime);
            if (a.length > 0) {
                this.addMarkerPoint("backgrounded", a[0].start);
            }
            r("addAnnotations")(t.annotations, {
                int: {
                    hidden: Number(o("VisibilityState").wasHidden(t.startTime, t.visuallyComplete + t.startTime))
                }
            });
            const i = r("ResourceDownloadLogger")(t.startTime, t.startTime + t.visuallyComplete);
            i.forEach((e, n)=>{
                r("addAnnotations")(t.annotations, {
                    int: {
                        [n]: e
                    }
                });
            });
            o("WebAPIs").unavailableAPIs.forEach((t)=>{
                e.addTag("unavailableAPIs", t);
            });
            o("LateMutationUtilities").logLateMutationData(this, t);
            if (this.$12) {
                const CLS = this.$12();
                r("addAnnotations")(t.annotations, {
                    double: {
                        CLS
                    }
                });
            }
            if (this.$13) {
                const s = this.$13();
                if (s != null) {
                    const p = this.config.log_lcp_metadata === true ? {
                        lcpClassname: s.className ?? "",
                        lcpElement: s.element ?? "",
                        lcpWasPreloaded: s.preloaded,
                        lcpSize: s.size ?? ""
                    } : undefined;
                    if (p != null && this.config.log_lcp_image_url === true) {
                        p.lcpUrl = s.url ?? "";
                    }
                    if (p != null && s.elementRef != null && this.config.getMeaningfulReactComponentName != null) {
                        const f = this.config.getMeaningfulReactComponentName(s.elementRef);
                        if (f != null) {
                            p.lcpReactComponentName = f;
                        }
                    }
                    const g = s.elementRef;
                    if (p != null && g != null && this.config.logLCPReactStack) {
                        if (this.config.getReactComponentStackFromDOMElement != null) {
                            const h = o("ReactStackUtils").getTrimmedReactStack(g, "HeroPagelet", this.config.getReactComponentStackFromDOMElement);
                            if (h != null && h.length > 0) {
                                p.lcpReactStack = h.join(",");
                            }
                        }
                        if (this.config.getWrapperComponentPropArrayFromDOMElement != null) {
                            const y = this.config.getWrapperComponentPropArrayFromDOMElement(g, "HeroPagelet", "name");
                            if (y != null && y.length > 0) {
                                p.lcpPageletName = y[0];
                            }
                        }
                    }
                    if (p != null && s.elementRef instanceof HTMLImageElement) {
                        p.lcpNaturalSize = s.elementRef.naturalWidth * s.elementRef.naturalHeight;
                    }
                    this.addMarkerPoint("LCP", s.timestamp, p);
                }
            }
        }
        logCssBgElementsMetaData() {
            let cssBgTimingCount = 0;
            this.cssBgElements.forEach((t)=>{
                if (t.resourceTiming?.responseEnd != null) {
                    cssBgTimingCount++;
                }
            });
            r("addAnnotations")(this.annotations, {
                int: {
                    cssBgElementCount: this.cssBgElements.size(),
                    cssBgTimingCount
                }
            });
        }
    }
    l.default = f;
}, 98);