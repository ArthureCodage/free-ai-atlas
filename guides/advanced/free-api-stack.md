# Build with a free AI API

Free hosted APIs are excellent for prototypes, teaching, and low-volume personal tools. They are not a substitute for production capacity planning.

## Choose a provider

| Provider | Good starting use | Main catch |
|---|---|---|
| OpenRouter free models | One OpenAI-compatible API for rotating free models | Low daily limit and variable availability |
| Gemini Developer API | Multimodal prototypes and AI Studio | Free-tier data terms and model-specific quotas |
| Groq API | Fast inference for supported models | Organization and model-specific rate limits |
| GitHub Models | Prototyping inside GitHub workflows | Plan, model, and context-dependent limits |

## Safe key handling

1. Create the key in the provider's official console.
2. Store it in an environment variable, never in source code.
3. Add `.env` to `.gitignore` if you use one locally.
4. Give production keys separate scopes and budgets.
5. Rotate a key immediately if it reaches a commit, log, screenshot, or chat.

The [stdlib Python recipe](../../recipes/free-api-python/README.md) demonstrates an OpenAI-compatible request without adding a dependency.

## Design for disappearing free capacity

- Keep provider and model names in configuration.
- Handle `429`, timeouts, unavailable models, and quota exhaustion.
- Cache only when privacy rules permit it.
- Set maximum input and output sizes.
- Show the user when a fallback model was selected.
- Do not design a business-critical service around an uncontracted free tier.
