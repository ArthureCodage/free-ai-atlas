# Recipe: local chat with Ollama and Open WebUI

This Docker Compose recipe exposes both services only on your own machine.

## Requirements

- Docker with the Compose plugin.
- Enough system RAM and storage for the model you choose.
- Optional GPU container runtime if you intend to pass through an accelerator.

## Run

```bash
docker compose up -d
docker compose exec ollama ollama pull <model-name>
```

Open <http://127.0.0.1:3000>. The Ollama API is available at <http://127.0.0.1:11434>.

## Stop

```bash
docker compose down
```

The named volumes preserve models and application data. `docker compose down -v` deletes those volumes and is intentionally not part of the normal instructions.

## Security notes

- The Compose file binds to `127.0.0.1`; do not change it to a public interface casually.
- Create an Open WebUI administrator account on first launch.
- Review Open WebUI's current branding-protected license before redistribution or rebranding.
- Pin updates deliberately, read release notes, and back up the `open-webui` volume first.
- The included configuration is CPU-compatible. GPU passthrough is vendor and host specific.
