# Zero-cost AI coding stack

## Beginner

- Use a hosted assistant's free plan for explanation, tests, and small refactors.
- Keep every change in Git and review the diff before running it.
- Never paste secrets, private repositories, or proprietary code into an unapproved service.

## Local

- Run a code-capable, license-compatible model with Ollama.
- Use an editor extension that supports a configurable OpenAI-compatible or Ollama endpoint.
- Start with chat and single-file edits before enabling autonomous commands.

## Advanced prototype

- Use OpenRouter, Gemini API, Groq, or GitHub Models behind one provider adapter.
- Log model identity, latency, token usage, and fallback selection without logging sensitive prompts.
- Require tests and a human diff review before merge.

Free coding assistance changes quickly, so this stack names interfaces rather than promising a specific premium model.
