__d("WAWebVoipVideoWebGPURenderer", [
    "$InternalEnum",
    "WALogger",
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoRendererInterface",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const { GPUBufferUsage, GPUShaderStage, GPUTextureUsage } = globalThis;
    const _ = n("$InternalEnum").Mirrored([
        "Direct",
        "OffscreenTransfer",
        "OffscreenDraw"
    ]);
    class f {
        constructor(e){
            this.canvas = e;
            var t = _.OffscreenTransfer;
            this.mode = t;
            if (t === _.Direct) {
                this.renderer = new S(e);
            } else {
                this.offscreenCanvas = new OffscreenCanvas(e.width, e.height);
                this.renderer = new S(this.offscreenCanvas);
                if (t === _.OffscreenTransfer) {
                    this.transferContext = e.getContext("bitmaprenderer");
                    if (!this.transferContext) {
                        throw r("err")("Failed to create context for canvas");
                    }
                } else if (t === _.OffscreenDraw && (this.drawContext = e.getContext("2d"), !this.drawContext)) {
                    throw r("err")("Failed to create context for canvas");
                }
            }
            this.$1 = o("WAWebVoipVideoRendererInterface").onRenderCallbackNoop;
            this.$2 = false;
            this.renderer.initializeWebGPU();
        }
        static checkAvailability = (()=>{
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
        reset() {
            const e = new Uint8Array([
                0,
                0,
                0,
                255
            ]);
            this.renderFrame({
                format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
                frameBuffer: e.buffer,
                height: 1,
                isKeyFrame: false,
                mirror: false,
                orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
                timestamp: 0,
                width: 1
            });
        }
        cleanup() {
            this.renderer.cleanup();
        }
        onCanvasResize(t, n) {
            this.pendingResize = {
                width: t,
                height: n
            };
        }
        $3() {
            if (this.pendingResize != null) {
                const e = this.pendingResize;
                const { height, width } = e;
                this.pendingResize = null;
                if (this.mode !== _.Direct && this.offscreenCanvas) {
                    this.offscreenCanvas.width = width;
                    this.offscreenCanvas.height = height;
                }
                this.canvas.width = width;
                this.canvas.height = height;
            }
        }
        renderFrame({ format, frameBuffer, height, isKeyFrame, mirror, orientation, timestamp, width }) {
            this.$3();
            const u = this.renderer.render({
                coverFit: this.$2,
                data: new Uint8Array(frameBuffer),
                format,
                height,
                mirror,
                orientation,
                width
            });
            if (u) {
                if (this.mode === _.Direct || !this.offscreenCanvas) {
                    this.$1();
                    return;
                }
                const c = this.offscreenCanvas.transferToImageBitmap();
                e: {
                    const d = this.mode;
                    if (d === _.Direct) {
                        break e;
                    }
                    if (d === _.OffscreenTransfer) {
                        this.transferContext?.transferFromImageBitmap(c);
                        break e;
                    }
                    if (d === _.OffscreenDraw) {
                        this.drawContext?.drawImage(c, 0, 0);
                        c.close();
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${d}`);
                }
                this.$1();
            }
        }
        setRenderCallback(t) {
            this.$1 = t;
        }
        setCoverFit(t) {
            this.$2 = t;
        }
        setVideoEnhancement(t, n) {
            this.renderer.setVideoEnhancement(t, n);
        }
    }
    const g = "\nstruct Enhancements {\n  uBrightness: f32,\n  uSharpen: f32,\n  uTextureSize: vec2<f32>,\n}\n\n@group(0) @binding(4) var<uniform> enhancements: Enhancements;\n\nconst TOOL_ON_EPSILON: f32 = 0.01;\n\nfn bowRgbChannels(inVal: vec3<f32>, mag: f32) -> vec3<f32> {\n  var power = 1.0 + abs(mag);\n  if (mag < 0.0) {\n    power = 1.0 / power;\n  }\n  return vec3<f32>(1.0) - pow(vec3<f32>(1.0) - inVal, vec3<f32>(power));\n}\n\nfn applyEnhancements(colorIn: vec3<f32>, coord: vec2<f32>) -> vec3<f32> {\n  var color = colorIn;\n  if (abs(enhancements.uSharpen) > TOOL_ON_EPSILON) {\n    let texelSize = vec2<f32>(1.0) / enhancements.uTextureSize;\n    var blurred = vec3<f32>(0.0);\n    for (var x = -1; x <= 1; x = x + 1) {\n      for (var y = -1; y <= 1; y = y + 1) {\n        blurred = blurred + sampleRGB(coord + vec2<f32>(f32(x), f32(y)) * texelSize);\n      }\n    }\n    blurred = blurred / 9.0;\n    color = clamp(\n      color + (color - blurred) * mix(0.35, 2.5, enhancements.uSharpen),\n      vec3<f32>(0.0),\n      vec3<f32>(1.0)\n    );\n  }\n  if (abs(enhancements.uBrightness) > TOOL_ON_EPSILON) {\n    color = bowRgbChannels(\n      clamp(color, vec3<f32>(0.0), vec3<f32>(1.0)),\n      enhancements.uBrightness * 1.1\n    );\n  }\n  return color;\n}\n";
    const h = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\nstruct Uniforms {\n  transformMatrix: mat2x2<f32>,\n  fitScale: vec2<f32>,\n}\n\n@group(0) @binding(3) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 4>(\n    vec2<f32>(0.0, 0.0),\n    vec2<f32>(0.0, 1.0),\n    vec2<f32>(1.0, 0.0),\n    vec2<f32>(1.0, 1.0)\n  );\n\n  var output: VertexOutput;\n  let base = (pos[vertexIndex] * 2.0 - 1.0) * vec2<f32>(1.0, -1.0);\n  // Cover/contain fit is applied by scaling the quad in screen (NDC) axes:\n  // a scale > 1 overflows the clip volume and is clipped (cover crop); a\n  // scale < 1 letterboxes (contain). This keeps the viewport in-bounds, which\n  // Safari requires (out-of-bounds viewports are rejected — T267655580).\n  let transformedPos = (uniforms.transformMatrix * base) * uniforms.fitScale;\n  output.position = vec4<f32>(transformedPos, 0.0, 1.0);\n  output.texCoord = pos[vertexIndex];\n  return output;\n}\n";
    const y = `
struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texCoord: vec2<f32>,
}

@group(0) @binding(0) var yTexture: texture_2d<f32>;
@group(0) @binding(1) var uvTexture: texture_2d<f32>;
@group(0) @binding(2) var mySampler: sampler;

fn sampleRGB(coord: vec2<f32>) -> vec3<f32> {
  let y = textureSample(yTexture, mySampler, coord).r;
  let uv = textureSample(uvTexture, mySampler, coord).rg;

  // NV12 to RGB conversion using BT.601 (limited range)
  // Y is in range [0, 1], U and V are in range [0, 1] with 0.5 as neutral
  let yNorm = 1.164 * (y - 0.0625);
  let u = uv.r - 0.5;
  let v = uv.g - 0.5;

  let r = yNorm + 1.596 * v;
  let g = yNorm - 0.391 * u - 0.813 * v;
  let b = yNorm + 2.018 * u;

  return clamp(vec3<f32>(r, g, b), vec3<f32>(0.0), vec3<f32>(1.0));
}
${g}
@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  let color = applyEnhancements(sampleRGB(input.texCoord), input.texCoord);
  return vec4<f32>(color, 1.0);
}
`;
    const C = `
struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texCoord: vec2<f32>,
}

@group(0) @binding(0) var rgbTexture: texture_2d<f32>;
@group(0) @binding(2) var mySampler: sampler;

fn sampleRGB(coord: vec2<f32>) -> vec3<f32> {
  return textureSample(rgbTexture, mySampler, coord).rgb;
}
${g}
@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  let color = applyEnhancements(sampleRGB(input.texCoord), input.texCoord);
  return vec4<f32>(color, 1.0);
}
`;
    const b = [
        1,
        0,
        0,
        1
    ];
    const v = [
        [
            b,
            [
                0,
                -1,
                1,
                0
            ],
            [
                -1,
                0,
                0,
                -1
            ],
            [
                0,
                1,
                -1,
                0
            ]
        ],
        [
            [
                -1,
                0,
                0,
                1
            ],
            [
                0,
                1,
                1,
                0
            ],
            [
                -1,
                0,
                0,
                -1
            ],
            [
                0,
                -1,
                -1,
                0
            ]
        ]
    ];
    var S = (()=>{
        function t(e) {
            this.device = null;
            this.context = null;
            this.nv12Pipeline = null;
            this.rgbPipeline = null;
            this.nv12BindGroupLayout = null;
            this.rgbBindGroupLayout = null;
            this.sampler = null;
            this.uniformBuffer = null;
            this.enhancementBuffer = null;
            this.yTexture = null;
            this.uvTexture = null;
            this.rgbTexture = null;
            this.rgbaConversionBuffer = null;
            this.cachedNV12BindGroup = null;
            this.cachedRGBBindGroup = null;
            this.brightness = 0;
            this.sharpening = 0;
            this.swapChainFormat = "bgra8unorm";
            this.canvas = e;
            this.initialized = false;
            this.contextReconfigured = false;
            this.cachedMatrixData = new Float32Array(8);
            this.lastTransformMatrix = null;
            this.cachedEnhancementData = new Float32Array(4);
        }
        const t_prototype = t.prototype;
        t_prototype.initializeWebGPU = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const n = globalThis.navigator?.gpu;
                    if (n == null) {
                        throw r("err")("WebGPU not supported in this browser");
                    }
                    const a = yield n.requestAdapter();
                    if (!a) {
                        throw r("err")("No suitable WebGPU adapter found");
                    }
                    const device = yield a.requestDevice();
                    if (!device) {
                        throw r("err")("Failed to create WebGPU device");
                    }
                    this.device = device;
                    let l;
                    try {
                        l = this.canvas.getContext("webgpu");
                    } catch (error) {
                        throw r("err")(`Failed to get WebGPU context: ${String(error)}`);
                    }
                    if (!l) {
                        throw r("err")("Failed to get WebGPU context");
                    }
                    const s = l;
                    this.context = s;
                    this.swapChainFormat = "bgra8unorm";
                    s.configure({
                        device,
                        format: this.swapChainFormat
                    });
                    this.sampler = device.createSampler({
                        magFilter: "linear",
                        minFilter: "linear",
                        addressModeU: "clamp-to-edge",
                        addressModeV: "clamp-to-edge"
                    });
                    this.uniformBuffer = device.createBuffer({
                        size: 32,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    });
                    this.enhancementBuffer = device.createBuffer({
                        size: 16,
                        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
                    });
                    const u = device.createShaderModule({
                        code: h
                    });
                    const c = device.createShaderModule({
                        code: y
                    });
                    const p = device.createBindGroupLayout({
                        entries: [
                            {
                                binding: 0,
                                visibility: GPUShaderStage.FRAGMENT,
                                texture: {
                                    sampleType: "float"
                                }
                            },
                            {
                                binding: 1,
                                visibility: GPUShaderStage.FRAGMENT,
                                texture: {
                                    sampleType: "float"
                                }
                            },
                            {
                                binding: 2,
                                visibility: GPUShaderStage.FRAGMENT,
                                sampler: {}
                            },
                            {
                                binding: 3,
                                visibility: GPUShaderStage.VERTEX,
                                buffer: {
                                    type: "uniform"
                                }
                            },
                            {
                                binding: 4,
                                visibility: GPUShaderStage.FRAGMENT,
                                buffer: {
                                    type: "uniform"
                                }
                            }
                        ]
                    });
                    this.nv12Pipeline = device.createRenderPipeline({
                        layout: device.createPipelineLayout({
                            bindGroupLayouts: [
                                p
                            ]
                        }),
                        vertex: {
                            module: u,
                            entryPoint: "vs_main"
                        },
                        fragment: {
                            module: c,
                            entryPoint: "fs_main",
                            targets: [
                                {
                                    format: this.swapChainFormat
                                }
                            ]
                        },
                        primitive: {
                            topology: "triangle-strip"
                        }
                    });
                    this.nv12BindGroupLayout = p;
                    const _ = device.createShaderModule({
                        code: C
                    });
                    const f = device.createBindGroupLayout({
                        entries: [
                            {
                                binding: 0,
                                visibility: GPUShaderStage.FRAGMENT,
                                texture: {
                                    sampleType: "float"
                                }
                            },
                            {
                                binding: 2,
                                visibility: GPUShaderStage.FRAGMENT,
                                sampler: {}
                            },
                            {
                                binding: 3,
                                visibility: GPUShaderStage.VERTEX,
                                buffer: {
                                    type: "uniform"
                                }
                            },
                            {
                                binding: 4,
                                visibility: GPUShaderStage.FRAGMENT,
                                buffer: {
                                    type: "uniform"
                                }
                            }
                        ]
                    });
                    this.rgbPipeline = device.createRenderPipeline({
                        layout: device.createPipelineLayout({
                            bindGroupLayouts: [
                                f
                            ]
                        }),
                        vertex: {
                            module: u,
                            entryPoint: "vs_main"
                        },
                        fragment: {
                            module: _,
                            entryPoint: "fs_main",
                            targets: [
                                {
                                    format: this.swapChainFormat
                                }
                            ]
                        },
                        primitive: {
                            topology: "triangle-strip"
                        }
                    });
                    this.rgbBindGroupLayout = f;
                    this.initialized = true;
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[webgpu]: initialized with video enhancement support"
                    ])));
                } catch (error) {
                    throw r("err")(`Failed to initialize WebGPU: ${String(error)}`);
                }
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.cleanup = function() {
            if (this.yTexture != null) {
                this.yTexture.destroy();
                this.yTexture = null;
            }
            if (this.uvTexture != null) {
                this.uvTexture.destroy();
                this.uvTexture = null;
            }
            if (this.rgbTexture != null) {
                this.rgbTexture.destroy();
                this.rgbTexture = null;
            }
            if (this.uniformBuffer != null) {
                this.uniformBuffer.destroy();
                this.uniformBuffer = null;
            }
            if (this.enhancementBuffer != null) {
                this.enhancementBuffer.destroy();
                this.enhancementBuffer = null;
            }
        };
        t_prototype.setVideoEnhancement = function(t, n) {
            this.brightness = t;
            this.sharpening = n;
        };
        t_prototype.render = function({ coverFit, data, format, height, mirror, orientation, width }) {
            if (!this.initialized || this.device == null || this.context == null || this.sampler == null || this.uniformBuffer == null || this.enhancementBuffer == null) {
                return false;
            }
            const device = this.device;
            const context = this.context;
            const sampler = this.sampler;
            const uniformBuffer = this.uniformBuffer;
            const enhancementBuffer = this.enhancementBuffer;
            const C = this.canvas.width / this.canvas.height;
            const S = orientation.valueOf() % 2 === 1 ? width / height : height / width;
            let R = 1;
            let L = 1;
            if (coverFit) {
                if (C > S) {
                    L = C / S;
                } else {
                    R = S / C;
                }
            } else if (C > S) {
                R = S / C;
            } else {
                L = C / S;
            }
            const E = v[mirror ? 1 : 0][orientation.valueOf() - 1] || b;
            if (this.lastTransformMatrix !== E || this.lastFitScaleX !== R || this.lastFitScaleY !== L) {
                this.lastTransformMatrix = E;
                this.lastFitScaleX = R;
                this.lastFitScaleY = L;
                this.cachedMatrixData.set(E, 0);
                this.cachedMatrixData[4] = R;
                this.cachedMatrixData[5] = L;
                device.queue.writeBuffer(uniformBuffer, 0, this.cachedMatrixData);
            }
            if (this.lastEnhancementWidth !== width || this.lastEnhancementHeight !== height || this.lastEnhancementBrightness !== this.brightness || this.lastEnhancementSharpening !== this.sharpening) {
                this.lastEnhancementWidth = width;
                this.lastEnhancementHeight = height;
                this.lastEnhancementBrightness = this.brightness;
                this.lastEnhancementSharpening = this.sharpening;
                this.cachedEnhancementData[0] = this.brightness;
                this.cachedEnhancementData[1] = this.sharpening;
                this.cachedEnhancementData[2] = width;
                this.cachedEnhancementData[3] = height;
                device.queue.writeBuffer(enhancementBuffer, 0, this.cachedEnhancementData);
            }
            let k = null;
            let I = null;
            if (format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12) {
                const T = width * height;
                const D = data.subarray(0, T);
                const x = data.subarray(T);
                if (this.yTexture == null || this.uvTexture == null || this.lastWidth !== width || this.lastHeight !== height) {
                    if (this.yTexture != null) {
                        this.yTexture.destroy();
                    }
                    if (this.uvTexture != null) {
                        this.uvTexture.destroy();
                    }
                    const $ = device.createTexture({
                        size: {
                            width,
                            height,
                            depthOrArrayLayers: 1
                        },
                        format: "r8unorm",
                        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
                    });
                    this.yTexture = $;
                    const P = device.createTexture({
                        size: {
                            width: width / 2,
                            height: height / 2,
                            depthOrArrayLayers: 1
                        },
                        format: "rg8unorm",
                        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
                    });
                    this.uvTexture = P;
                    this.lastWidth = width;
                    this.lastHeight = height;
                    const N = this.nv12BindGroupLayout;
                    if (N == null) {
                        return false;
                    }
                    this.cachedNV12BindGroup = device.createBindGroup({
                        layout: N,
                        entries: [
                            {
                                binding: 0,
                                resource: $.createView()
                            },
                            {
                                binding: 1,
                                resource: P.createView()
                            },
                            {
                                binding: 2,
                                resource: sampler
                            },
                            {
                                binding: 3,
                                resource: {
                                    buffer: uniformBuffer
                                }
                            },
                            {
                                binding: 4,
                                resource: {
                                    buffer: enhancementBuffer
                                }
                            }
                        ]
                    });
                }
                const M = this.yTexture;
                const w = this.uvTexture;
                if (M == null || w == null) {
                    return false;
                }
                device.queue.writeTexture({
                    texture: M
                }, D, {
                    offset: 0,
                    bytesPerRow: width,
                    rowsPerImage: height
                }, {
                    width,
                    height,
                    depthOrArrayLayers: 1
                });
                device.queue.writeTexture({
                    texture: w
                }, x, {
                    offset: 0,
                    bytesPerRow: width,
                    rowsPerImage: height / 2
                }, {
                    width: width / 2,
                    height: height / 2,
                    depthOrArrayLayers: 1
                });
                k = this.nv12Pipeline;
                I = this.cachedNV12BindGroup;
            } else if (format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24 || format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA) {
                if (this.rgbTexture == null || this.lastWidth !== width || this.lastHeight !== height) {
                    if (this.rgbTexture != null) {
                        this.rgbTexture.destroy();
                    }
                    const A = device.createTexture({
                        size: {
                            width,
                            height,
                            depthOrArrayLayers: 1
                        },
                        format: "rgba8unorm",
                        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
                    });
                    this.rgbTexture = A;
                    this.rgbaConversionBuffer = new Uint8Array(width * height * 4);
                    this.lastWidth = width;
                    this.lastHeight = height;
                    const F = this.rgbBindGroupLayout;
                    if (F == null) {
                        return false;
                    }
                    this.cachedRGBBindGroup = device.createBindGroup({
                        layout: F,
                        entries: [
                            {
                                binding: 0,
                                resource: A.createView()
                            },
                            {
                                binding: 2,
                                resource: sampler
                            },
                            {
                                binding: 3,
                                resource: {
                                    buffer: uniformBuffer
                                }
                            },
                            {
                                binding: 4,
                                resource: {
                                    buffer: enhancementBuffer
                                }
                            }
                        ]
                    });
                }
                let O = data;
                if (format === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGB24) {
                    const B = width * height * 4;
                    if (this.rgbaConversionBuffer == null || this.rgbaConversionBuffer.length < B) {
                        this.rgbaConversionBuffer = new Uint8Array(B);
                    }
                    const W = this.rgbaConversionBuffer;
                    for(let q = width * height, U = 0; U < q; U++){
                        W[U * 4] = data[U * 3];
                        W[U * 4 + 1] = data[U * 3 + 1];
                        W[U * 4 + 2] = data[U * 3 + 2];
                        W[U * 4 + 3] = 255;
                    }
                    O = W;
                }
                const V = this.rgbTexture;
                if (V == null) {
                    return false;
                }
                device.queue.writeTexture({
                    texture: V
                }, O, {
                    offset: 0,
                    bytesPerRow: width * 4,
                    rowsPerImage: height
                }, {
                    width,
                    height,
                    depthOrArrayLayers: 1
                });
                k = this.rgbPipeline;
                I = this.cachedRGBBindGroup;
            } else {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[webgpu]: Invalid video format: ",
                    ""
                ])), o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(format));
                return false;
            }
            if (k == null || I == null) {
                return false;
            }
            const H = device.createCommandEncoder();
            let G;
            try {
                G = context.getCurrentTexture();
            } catch (error) {
                if (!this.contextReconfigured) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WebGPU] canvas ctx needs reconfig each frame"
                    ]))).catching(r("getErrorSafe")(error));
                    this.contextReconfigured = true;
                }
                try {
                    context.configure({
                        device,
                        format: this.swapChainFormat
                    });
                    G = context.getCurrentTexture();
                } catch (err) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "VideoRendererWorker: Failed to reconfigure canvas context"
                    ]))).catching(r("getErrorSafe")(err));
                    return false;
                }
            }
            const z = {
                colorAttachments: [
                    {
                        view: G.createView(),
                        clearValue: {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        },
                        loadOp: "clear",
                        storeOp: "store"
                    }
                ]
            };
            const j = H.beginRenderPass(z);
            j.setPipeline(k);
            j.setViewport(0, 0, this.canvas.width, this.canvas.height, 0, 1);
            j.setBindGroup(0, I);
            j.draw(4, 1, 0, 0);
            j.end();
            device.queue.submit([
                H.finish()
            ]);
            return true;
        };
        return t;
    })();
    l.default = f;
}, 98);