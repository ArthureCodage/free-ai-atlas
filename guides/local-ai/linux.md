# Local AI on Linux

Linux offers the broadest server and accelerator tooling, but GPU drivers remain the most common source of setup friction.

## Install Ollama

Review the official install instructions at <https://github.com/ollama/ollama>. The official quick install command is:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

Security-conscious environments should download and inspect remote install scripts before execution.

Verify the service:

```bash
ollama --version
curl http://127.0.0.1:11434/api/tags
```

## GPU checks

For NVIDIA:

```bash
nvidia-smi
```

For other accelerators, follow the runtime's current official backend documentation. Container access to a host GPU requires the vendor's container runtime and is not enabled by a regular Docker installation alone.
