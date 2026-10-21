__d("WAWebVoipVideoCaptureWebGPU", [
    "Promise",
    "WALogger",
    "WAWebUA",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipGpuDeviceLiveness",
    "WAWebVoipVideoCaptureCanvas",
    "WAWebVoipVideoCaptureWebGL",
    "WAWebVoipVideoCaptureWithConverter",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = 1000;
    const L = 500;
    function E(e) {
        if (e instanceof HTMLVideoElement) {
            return true;
        }
        const n = e.ownerDocument?.defaultView;
        return n != null && e instanceof n.HTMLVideoElement;
    }
    function k(useYPacking) {
        if (useYPacking) {
            return "\nstruct Uniforms {\n  width: u32,\n  height: u32,\n  ySize: u32,\n}\n\n@group(0) @binding(0) var inputTexture: texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\n\n// Convert RGB to Y' using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst OFFSET_Y: f32 = 0.06275;\nconst R_Y: f32 = 0.2568;\nconst G_Y: f32 = 0.5041;\nconst B_Y: f32 = 0.0979;\n\n// Convert RGB to CbCr using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst R_U: f32 = -0.1482;\nconst G_U: f32 = -0.291;\nconst B_U: f32 = 0.4392;\nconst R_V: f32 = 0.4392;\nconst G_V: f32 = -0.3678;\nconst B_V: f32 = -0.0714;\n\n// 16x16 workgroup size - GPU workgroup size for 2D operations\n// that balances GPU occupancy with memory access patterns and cache utilization\n@compute @workgroup_size(16, 16)\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n  let x = id.x;\n  let y = id.y;\n  let width = uniforms.width;\n  let height = uniforms.height;\n\n  // Process Y plane - pack 4 adjacent horizontal pixels into one u32\n  if (x % 4u == 0u && x < width && y < height) {\n    var y0: u32 = 0u;\n    var y1: u32 = 0u;\n    var y2: u32 = 0u;\n    var y3: u32 = 0u;\n\n    if (x < width) {\n      let rgba0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n      let yValue0 = R_Y * rgba0.r + G_Y * rgba0.g + B_Y * rgba0.b + OFFSET_Y;\n      y0 = u32(yValue0 * 255.0);\n    }\n\n    if (x + 1u < width) {\n      let rgba1 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n      let yValue1 = R_Y * rgba1.r + G_Y * rgba1.g + B_Y * rgba1.b + OFFSET_Y;\n      y1 = u32(yValue1 * 255.0);\n    }\n\n    if (x + 2u < width) {\n      let rgba2 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);\n      let yValue2 = R_Y * rgba2.r + G_Y * rgba2.g + B_Y * rgba2.b + OFFSET_Y;\n      y2 = u32(yValue2 * 255.0);\n    }\n\n    if (x + 3u < width) {\n      let rgba3 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);\n      let yValue3 = R_Y * rgba3.r + G_Y * rgba3.g + B_Y * rgba3.b + OFFSET_Y;\n      y3 = u32(yValue3 * 255.0);\n    }\n\n    // Pack 4 Y values into a single u32: [y0|y1|y2|y3]\n    let packed = y0 | (y1 << 8u) | (y2 << 16u) | (y3 << 24u);\n    let packedWidth = width / 4u;\n    let yIndex = y * packedWidth + (x / 4u);\n    outputNV12[yIndex] = packed;\n  }\n\n  // Process UV plane - pack 2 UV pairs (4 values) into one u32\n  // UV data written at offset uniforms.ySize (in u32 elements)\n  if (x % 4u == 0u && y % 2u == 0u && x < width && y < height) {\n    // Process first 2x2 block at (x, y) - unrolled sampling\n    let rgba00_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let rgba10_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n    let rgba01_0 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);\n    let rgba11_0 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);\n\n    let avg0 = (rgba00_0 + rgba10_0 + rgba01_0 + rgba11_0) * 0.25;\n    let u0 = u32((R_U * avg0.r + G_U * avg0.g + B_U * avg0.b + 0.5) * 255.0);\n    let v0 = u32((R_V * avg0.r + G_V * avg0.g + B_V * avg0.b + 0.5) * 255.0);\n\n    // Process second 2x2 block at (x+2, y) - unrolled sampling\n    let rgba00_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y)), 0);\n    let rgba10_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y)), 0);\n    let rgba01_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 2u), i32(y + 1u)), 0);\n    let rgba11_1 = textureLoad(inputTexture, vec2<i32>(i32(x + 3u), i32(y + 1u)), 0);\n\n    let avg1 = (rgba00_1 + rgba10_1 + rgba01_1 + rgba11_1) * 0.25;\n    let u1 = u32((R_U * avg1.r + G_U * avg1.g + B_U * avg1.b + 0.5) * 255.0);\n    let v1 = u32((R_V * avg1.r + G_V * avg1.g + B_V * avg1.b + 0.5) * 255.0);\n\n    // Pack 2 UV pairs into a single u32: [u0|v0|u1|v1]\n    let packed = u0 | (v0 << 8u) | (u1 << 16u) | (v1 << 24u);\n    let uvY = y / 2u;\n    let uvPackedWidth = width / 4u;\n    let uvIndex = uniforms.ySize + uvY * uvPackedWidth + (x / 4u);\n    outputNV12[uvIndex] = packed;\n  }\n}\n";
        }
        return "\nstruct Uniforms {\n  width: u32,\n  height: u32,\n  ySize: u32,\n}\n\n@group(0) @binding(0) var inputTexture: texture_2d<f32>;\n@group(0) @binding(1) var<storage, read_write> outputNV12: array<u32>;\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\n\n// Convert RGB to Y' using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst OFFSET_Y: f32 = 0.06275;\nconst R_Y: f32 = 0.2568;\nconst G_Y: f32 = 0.5041;\nconst B_Y: f32 = 0.0979;\n\n// Convert RGB to CbCr using BT.601 formula for limited range.\n// https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion\nconst R_U: f32 = -0.1482;\nconst G_U: f32 = -0.291;\nconst B_U: f32 = 0.4392;\nconst R_V: f32 = 0.4392;\nconst G_V: f32 = -0.3678;\nconst B_V: f32 = -0.0714;\n\n// 16x16 workgroup size - GPU workgroup size for 2D operations\n// that balances GPU occupancy with memory access patterns and cache utilization\n@compute @workgroup_size(16, 16)\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n  let x = id.x;\n  let y = id.y;\n  let width = uniforms.width;\n  let height = uniforms.height;\n\n  // Process Y plane - every pixel\n  if (x < width && y < height) {\n    let rgba = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let yValue = R_Y * rgba.r + G_Y * rgba.g + B_Y * rgba.b + OFFSET_Y;\n    let yIndex = y * width + x;\n    outputNV12[yIndex] = u32(yValue * 255.0);\n  }\n\n  // Process UV plane - every 2x2 block with unrolled sampling\n  // UV data written at offset uniforms.ySize (in u32 elements)\n  if (x % 2u == 0u && y % 2u == 0u && x < width && y < height) {\n    // Unrolled 2x2 block sampling\n    let rgba00 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y)), 0);\n    let rgba10 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y)), 0);\n    let rgba01 = textureLoad(inputTexture, vec2<i32>(i32(x), i32(y + 1u)), 0);\n    let rgba11 = textureLoad(inputTexture, vec2<i32>(i32(x + 1u), i32(y + 1u)), 0);\n\n    // Average the 2x2 block\n    let avg = (rgba00 + rgba10 + rgba01 + rgba11) * 0.25;\n\n    // Convert to UV with 128 offset\n    let uValue = R_U * avg.r + G_U * avg.g + B_U * avg.b + 0.5;\n    let vValue = R_V * avg.r + G_V * avg.g + B_V * avg.b + 0.5;\n\n    // Store interleaved UV values at offset uniforms.ySize\n    let uvX = x / 2u;\n    let uvY = y / 2u;\n    let uvWidth = width / 2u;\n    let uvIndex = uniforms.ySize + (uvY * uvWidth + uvX) * 2u;\n\n    outputNV12[uvIndex] = u32(uValue * 255.0);\n    outputNV12[uvIndex + 1u] = u32(vValue * 255.0);\n  }\n}\n";
    }
    const I = (()=>{
        function t(t, n, r) {
            const a = this;
            this.pipeline = null;
            this.bindGroup = null;
            this.videoTexture = null;
            this.outputBufferNV12 = null;
            this.readbackBufferNV12 = null;
            this.retiredReadbackBuffers = new Set;
            this.uniformBuffer = null;
            this.useYPacking = true;
            this.useUVPacking = true;
            this.isCleaningUp = false;
            this.pendingConversion = null;
            this.deviceLost = false;
            this.onDeviceLost = null;
            this.isAlive = function() {
                return !a.deviceLost && !a.isCleaningUp;
            };
            this.device = t;
            this.width = n;
            this.height = r;
            this.isCleaningUp = false;
            t.lost.then((t)=>{
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPU device lost: ",
                    " (reason: ",
                    ")"
                ])), t.message, t.reason);
                a.deviceLost = true;
                a.isCleaningUp = true;
                a.onDeviceLost?.();
            });
            if (n % 4 !== 0 || r % 2 !== 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPU Y/UV packing disabled, bad dim: ",
                    "x",
                    ""
                ])), n, r);
                this.useYPacking = false;
                this.useUVPacking = false;
            }
            if (this.useYPacking) {
                this.yPackedWidth = Math.floor(n / 4);
            } else {
                this.yPackedWidth = n;
            }
            const i = Math.floor(n / 2);
            if (this.useUVPacking) {
                this.uvPackedWidth = Math.floor(i / 2);
            } else {
                this.uvPackedWidth = i;
            }
            const l = n * r;
            const u = n / 2 * (r / 2) * 2;
            this.yData = new Uint8Array(l);
            this.uvData = new Uint8Array(u);
            this.nv12Data = new Uint8Array(l + u);
        }
        t.create = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, a) {
                const l = globalThis.navigator?.gpu;
                if (l == null) {
                    throw r("err")("WebGPU not available");
                }
                const s = yield l.requestAdapter();
                if (!s) {
                    throw r("err")("Failed to get WebGPU adapter");
                }
                const u = yield s.requestDevice();
                if (!u) {
                    throw r("err")("Failed to get WebGPU device");
                }
                const c = new t(u, e, a);
                yield (S || (S = n("Promise"))).resolve();
                if (!c.isAlive()) {
                    throw new (o("WAWebVoipGpuDeviceLiveness")).DeviceLostError("WebGPU device lost before initialize");
                }
                yield c.initialize();
                if (!c.isAlive()) {
                    throw new (o("WAWebVoipGpuDeviceLiveness")).DeviceLostError("WebGPU device lost during initialize");
                }
                return c;
            });
            function a(t, n) {
                return e.apply(this, arguments);
            }
            return a;
        })();
        const t_prototype = t.prototype;
        t_prototype.createReadbackBuffer = function(t) {
            const globalThis_GPUBufferUsage = globalThis.GPUBufferUsage;
            return this.device.createBuffer({
                size: t,
                usage: globalThis_GPUBufferUsage.MAP_READ | globalThis_GPUBufferUsage.COPY_DST
            });
        };
        t_prototype.destroyRetiredReadbackBuffer = function(t) {
            if (this.retiredReadbackBuffers.has(t)) {
                try {
                    t.destroy();
                } catch (error) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGPUCapture: failed to destroy retired readback buffer: ",
                        ""
                    ])), error);
                }
                this.retiredReadbackBuffers.delete(t);
            }
        };
        t_prototype.destroyRetiredReadbackBuffers = function() {
            const e = this;
            Array.from(this.retiredReadbackBuffers).forEach((t)=>{
                e.destroyRetiredReadbackBuffer(t);
            });
        };
        t_prototype.retireTimedOutReadbackBuffer = function(t, n, r) {
            const e = this;
            if (this.readbackBufferNV12 === t) {
                this.readbackBufferNV12 = this.createReadbackBuffer(r);
                this.retiredReadbackBuffers.add(t);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPUCapture: retired timed-out readback buffer and created replacement"
                ])));
                n.then(()=>{
                    if (e.retiredReadbackBuffers.has(t)) {
                        t.unmap();
                    }
                }).catch((e)=>{
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGPUCapture: retired readback buffer mapAsync settled with error: ",
                        ""
                    ])), e);
                }).then(()=>{
                    e.destroyRetiredReadbackBuffer(t);
                });
            }
        };
        t_prototype.initialize = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const device = this.device;
                const width = this.width;
                const height = this.height;
                const { GPUTextureUsage, GPUBufferUsage } = globalThis;
                const l = device.createShaderModule({
                    code: k(this.useYPacking)
                });
                this.videoTexture = device.createTexture({
                    size: {
                        width,
                        height
                    },
                    format: "rgba8unorm",
                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
                });
                const s = 4;
                const u = this.useYPacking ? this.yPackedWidth * height * s : width * height * s;
                const c = this.useUVPacking ? this.uvPackedWidth * (height / 2) * s : width / 2 * (height / 2) * 2 * s;
                const d = u + c;
                this.outputBufferNV12 = device.createBuffer({
                    size: d,
                    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
                });
                this.readbackBufferNV12 = this.createReadbackBuffer(d);
                this.uniformBuffer = device.createBuffer({
                    size: 12,
                    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                });
                const uniformBuffer = this.uniformBuffer;
                const p = u / s;
                const _ = new Uint32Array([
                    width,
                    height,
                    p
                ]);
                device.queue.writeBuffer(uniformBuffer, 0, _);
                const g = device.createComputePipeline({
                    layout: "auto",
                    compute: {
                        module: l,
                        entryPoint: "main"
                    }
                });
                this.pipeline = g;
                if (!this.videoTexture || !this.outputBufferNV12 || !this.uniformBuffer) {
                    throw r("err")("Failed to initialize GPU resources");
                }
                const videoTexture = this.videoTexture;
                const outputBufferNV12 = this.outputBufferNV12;
                const uniformBuffer_1 = this.uniformBuffer;
                this.bindGroup = device.createBindGroup({
                    layout: g.getBindGroupLayout(0),
                    entries: [
                        {
                            binding: 0,
                            resource: videoTexture.createView()
                        },
                        {
                            binding: 1,
                            resource: {
                                buffer: outputBufferNV12
                            }
                        },
                        {
                            binding: 2,
                            resource: {
                                buffer: uniformBuffer_1
                            }
                        }
                    ]
                });
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPUCapture: Initialized for ",
                    "x",
                    ""
                ])), width, height);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.convertVideoToNV12 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (!this.isAlive()) {
                    throw new (o("WAWebVoipGpuDeviceLiveness")).DeviceLostError("Cannot convert video: WebGPU converter is not alive");
                }
                const device = this.device;
                const width = this.width;
                const height = this.height;
                const globalThis_GPUMapMode = globalThis.GPUMapMode;
                if (!this.videoTexture || !this.outputBufferNV12 || !this.readbackBufferNV12) {
                    throw r("err")("WebGPU resources not initialized");
                }
                const videoTexture = this.videoTexture;
                const outputBufferNV12 = this.outputBufferNV12;
                const readbackBufferNV12 = this.readbackBufferNV12;
                const m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    let n = e;
                    if (o("WAWebUA").UA.isFirefox && E(e)) {
                        try {
                            n = yield createImageBitmap(e);
                        } catch (error) {
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: WebGPU failed to create ImageBitmap from video: ",
                                ""
                            ])), String(error));
                            throw r("err")("Failed to convert video element to ImageBitmap for Firefox");
                        }
                    }
                    try {
                        device.queue.copyExternalImageToTexture({
                            source: n,
                            flipY: false
                        }, {
                            texture: videoTexture
                        }, {
                            width,
                            height
                        });
                        const m = device.createCommandEncoder();
                        const p = m.beginComputePass();
                        if (!t.pipeline || !t.bindGroup) {
                            throw r("err")("WebGPU pipeline not initialized");
                        }
                        const { pipeline, bindGroup } = t;
                        p.setPipeline(pipeline);
                        p.setBindGroup(0, bindGroup);
                        const y = 16;
                        const C = Math.ceil(width / y);
                        const b = Math.ceil(height / y);
                        p.dispatchWorkgroups(C, b);
                        p.end();
                        const v = 4;
                        const S = t.useYPacking ? t.yPackedWidth * height * v : width * height * v;
                        const L = t.useUVPacking ? t.uvPackedWidth * (height / 2) * v : width / 2 * (height / 2) * 2 * v;
                        const k = S + L;
                        m.copyBufferToBuffer(outputBufferNV12, 0, readbackBufferNV12, 0, k);
                        device.queue.submit([
                            m.finish()
                        ]);
                        if (t.isCleaningUp) {
                            throw r("err")("Cannot convert video: WebGPU converter is being cleaned up");
                        }
                        const I = readbackBufferNV12.mapAsync(globalThis_GPUMapMode.READ);
                        try {
                            yield o("WAWebVoipGpuDeviceLiveness").withDeviceLiveness(I, {
                                label: "WebGPU mapAsync",
                                lostPromise: device.lost,
                                timeoutMs: R
                            });
                        } catch (error) {
                            if (error instanceof o("WAWebVoipGpuDeviceLiveness").DeviceLivenessTimeoutError && t.isAlive()) {
                                try {
                                    t.retireTimedOutReadbackBuffer(readbackBufferNV12, I, k);
                                } catch (err) {
                                    t.isCleaningUp = true;
                                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: WebGPUCapture: failed to replace timed-out readback buffer: ",
                                        ""
                                    ])), err);
                                }
                            } else {
                                t.isCleaningUp = true;
                            }
                            throw error;
                        }
                        if (t.isCleaningUp) {
                            readbackBufferNV12.unmap();
                            throw r("err")("Cannot convert video: WebGPU converter is being cleaned up");
                        }
                        try {
                            if (t.useYPacking && t.useUVPacking) {
                                const T = readbackBufferNV12.getMappedRange();
                                t.nv12Data.set(new Uint8Array(T));
                                readbackBufferNV12.unmap();
                            } else {
                                const D = new Uint32Array(readbackBufferNV12.getMappedRange());
                                const x = S / v;
                                for(let $ = 0; $ < t.yData.length; $++){
                                    t.yData[$] = D[$] & 255;
                                }
                                for(let P = 0; P < t.uvData.length; P++){
                                    t.uvData[P] = D[x + P] & 255;
                                }
                                readbackBufferNV12.unmap();
                                const N = width * height;
                                t.nv12Data.set(t.yData, 0);
                                t.nv12Data.set(t.uvData, N);
                            }
                        } catch (error) {
                            throw t.isCleaningUp ? r("err")("Cannot convert video: WebGPU converter is being cleaned up") : error;
                        }
                        return t.nv12Data;
                    } finally{
                        if (n instanceof ImageBitmap) {
                            n.close();
                        }
                    }
                })();
                this.pendingConversion = m;
                try {
                    const p = yield m;
                    if (this.pendingConversion === m) {
                        this.pendingConversion = null;
                    }
                    return p;
                } catch (error) {
                    if (this.pendingConversion === m) {
                        this.pendingConversion = null;
                    }
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.cleanup = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                this.isCleaningUp = true;
                if (this.deviceLost) {
                    this.pendingConversion = null;
                    this.videoTexture = null;
                    this.outputBufferNV12 = null;
                    this.readbackBufferNV12 = null;
                    this.retiredReadbackBuffers.clear();
                    this.uniformBuffer = null;
                    o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: WebGPUCapture: skipping cleanup, device already lost"
                    ])));
                    return;
                }
                const pendingConversion = this.pendingConversion;
                if (pendingConversion != null) {
                    try {
                        yield o("WAWebVoipGpuDeviceLiveness").withDeviceLiveness(pendingConversion, {
                            label: "WebGPU cleanup pendingConversion",
                            lostPromise: this.device.lost,
                            timeoutMs: L
                        });
                    } catch (error) {
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: WebGPUCapture: conversion failed in cleanup: ",
                            ""
                        ])), error);
                    }
                }
                if (this.videoTexture) {
                    this.videoTexture.destroy();
                }
                if (this.outputBufferNV12) {
                    this.outputBufferNV12.destroy();
                }
                if (this.readbackBufferNV12) {
                    this.readbackBufferNV12.destroy();
                }
                this.destroyRetiredReadbackBuffers();
                if (this.uniformBuffer) {
                    this.uniformBuffer.destroy();
                }
                this.device.destroy();
                o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WebGPUCapture: Cleaned up"
                ])));
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getConverterName = function() {
            return "webgpu";
        };
        return t;
    })();
    const T = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createConverter = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WAWebVoipConverterPrewarm").consumePrewarmedConverter(e, t);
                return n ?? (yield I.create(e, t));
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.createFallbackConverter = function(t, n) {
            try {
                return new (o("WAWebVoipVideoCaptureWebGL")).WebGLVideoConverter(t, n);
            } catch (e) {
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:WebGPU] WebGL fallback unavail, using Canvas"
                ])));
                return new (o("WAWebVoipVideoCaptureCanvas")).CanvasVideoConverter(t, n);
            }
        };
        t.isAvailable = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const t = globalThis.navigator?.gpu;
                    if (t == null) {
                        return false;
                    }
                    const n = yield t.requestAdapter();
                    if (!n) {
                        return false;
                    }
                    const r = new OffscreenCanvas(1, 1);
                    const o = r.getContext("webgpu");
                    return o != null;
                } catch (e) {
                    return false;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })(o("WAWebVoipVideoCaptureWithConverter").WAWebVoipVideoCaptureWithConverter);
    l.WebGPUVideoConverter = I;
    l.WAWebVoipVideoCaptureWebGPU = T;
}, 98);