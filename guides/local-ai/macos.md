# Local AI on macOS

Apple Silicon Macs share memory between CPU and GPU, which makes memory capacity especially important for model size.

## Install and verify

1. Download Ollama from <https://ollama.com/download/mac>.
2. Open Terminal and run:

```bash
ollama --version
ollama
```

Browse <https://ollama.com/library>, pick a small model, then use `ollama run <model-name>`.

## Practical guidance

- Prefer native arm64 applications on Apple Silicon.
- Leave memory for macOS and other applications; a model that nominally fits can still cause swapping.
- Monitor memory pressure in Activity Monitor.
- Bind local servers to loopback unless remote access is intentionally secured.
