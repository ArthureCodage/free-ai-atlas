# Local private AI stack

Goal: chat with a local model and optional private documents while keeping inference on your machine.

## Smallest useful stack

1. **Runtime:** Ollama.
2. **Model:** a small model selected from the Ollama library after reading its license.
3. **Interface:** the Ollama terminal, AnythingLLM desktop, or Open WebUI.
4. **Documents:** AnythingLLM or Open WebUI RAG, using local embeddings when privacy is required.

## Privacy boundary

The stack is only local when every active component is local. Check:

- chat model provider;
- embedding provider;
- speech and image providers;
- web search and agent tools;
- telemetry and crash reporting;
- cloud fallback behavior.

## Recommended rollout

1. Run a small model from the terminal.
2. Confirm the local API at `127.0.0.1:11434`.
3. Add a browser interface bound to `127.0.0.1`.
4. Index copies of non-sensitive documents first.
5. Test citations by comparing answers to source passages.
6. Back up interface data before upgrades.

For a ready Docker configuration, see [Ollama + Open WebUI](../recipes/local-chat/README.md).
