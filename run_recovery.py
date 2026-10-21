import os
import sys
import json
import subprocess
import shutil
import time

WSL_ROOT = "/mnt/c/Users/user/Desktop/El projecto/WW"
MANIFEST_PATH = os.path.join(WSL_ROOT, "exported-scripts/manifest.json")
CHUNKS_DIR = os.path.join(WSL_ROOT, "recovered-chunks")
COMBINED_DIR = os.path.join(WSL_ROOT, "recovered-modules-combined")

os.makedirs(CHUNKS_DIR, exist_ok=True)
os.makedirs(COMBINED_DIR, exist_ok=True)

with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
    manifest = json.load(f)

exported = [s for s in manifest.get("scripts", []) if s.get("content", {}).get("state") == "exported"]
print(f"Total exported scripts to recover: {len(exported)}")

env = os.environ.copy()
env["REA_WAKARU_COMMAND"] = "/root/.local/bin/wakaru"
env["REA_JAVASCRIPT_PRLIMIT_COMMAND"] = "/usr/bin/prlimit"

recovered_count = 0
total_modules = 0

for i, script in enumerate(exported):
    rel_path = script["content"]["relative_path"]
    full_input_path = os.path.join(WSL_ROOT, "exported-scripts/files", rel_path)
    
    # Safe chunk folder name
    base_name = f"chunk_{i+1:02d}_" + os.path.splitext(os.path.basename(rel_path))[0][:40]
    out_dir = os.path.join(CHUNKS_DIR, base_name)
    
    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)
        
    print(f"\n[{i+1}/{len(exported)}] Decompiling: {os.path.basename(rel_path)} ({(script['content']['bytes']/1024):.1f} KB)...")
    start = time.time()
    
    cmd = [
        "rea", "recover-javascript-sources",
        full_input_path,
        out_dir,
        "--extraction-mode", "structural",
        "--rewrite-level", "standard",
        "--json"
    ]
    
    try:
        proc = subprocess.run(cmd, env=env, capture_output=True, text=True, timeout=180)
        elapsed = time.time() - start
        
        if proc.returncode == 0:
            modules_dir = os.path.join(out_dir, "modules")
            mod_files = []
            if os.path.exists(modules_dir):
                mod_files = [f for f in os.listdir(modules_dir) if f.endswith(".js") or f.endswith(".jsx")]
                for mod in mod_files:
                    src_mod = os.path.join(modules_dir, mod)
                    dst_mod = os.path.join(COMBINED_DIR, f"{base_name}__{mod}")
                    shutil.copy2(src_mod, dst_mod)
            print(f"  -> SUCCESS ({elapsed:.2f}s): {len(mod_files)} module(s) extracted")
            total_modules += len(mod_files)
            recovered_count += 1
        else:
            print(f"  -> FAILED ({elapsed:.2f}s) exit {proc.returncode}")
            try:
                err_data = json.loads(proc.stdout)
                print(f"     Reason: {err_data.get('message', err_data.get('error', 'unknown'))}")
            except Exception:
                if proc.stderr:
                    print(f"     Stderr: {proc.stderr[:200]}")
    except subprocess.TimeoutExpired:
        print(f"  -> TIMEOUT (>180s) for {rel_path}")
    except Exception as e:
        print(f"  -> ERROR: {e}")

print(f"\n=== RECOVERY COMPLETE ===")
print(f"Successfully processed {recovered_count}/{len(exported)} chunks.")
print(f"Total decompiled modules gathered in {COMBINED_DIR}: {total_modules}")
