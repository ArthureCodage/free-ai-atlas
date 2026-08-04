# Local AI guides

Local AI trades provider quotas for hardware limits. It is useful for privacy, offline work, experimentation, predictable latency, and learning how inference works.

## Pick a route

- [Windows](windows.md)
- [macOS](macos.md)
- [Linux](linux.md)
- [Private local stack](../../stacks/local-private-ai.md)
- [Docker recipe: Ollama + Open WebUI](../../recipes/local-chat/README.md)

## Rough memory guide

These are planning estimates, not guarantees. Context size, architecture, quantization, KV cache, and runtime overhead all matter.

| Available memory | Sensible starting point |
|---|---|
| 8 GB system RAM | 1B–3B quantized text model |
| 16 GB system RAM | 7B–8B quantized model, usually with modest context |
| 32 GB system RAM | 14B-class quantized model or larger context |
| 6–8 GB VRAM | Commonly a 7B–8B Q4-class model with some overhead constraints |
| 12–16 GB VRAM | Larger models, context, or image workflows become practical |

Start small. A model that answers in seconds is more useful for learning than a larger model that barely fits.

## Privacy checklist

- Confirm that the runtime is local and no cloud fallback is enabled.
- Keep the server bound to `127.0.0.1` unless you understand network exposure and authentication.
- Treat model files and extensions as software supply-chain inputs.
- Back up documents before indexing or transforming them.
- Read each model license; a local download is not automatically open source or commercially usable.
