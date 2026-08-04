# Recipe: call a free OpenAI-compatible API with Python

The example uses only Python's standard library. It defaults to OpenRouter's free-model router, but the base URL and model are configurable.

## PowerShell

```powershell
$env:AI_API_KEY = "your-key"
python client.py "Explain quantization in three sentences."
```

## Bash

```bash
export AI_API_KEY="your-key"
python client.py "Explain quantization in three sentences."
```

Optional variables:

- `AI_BASE_URL` — defaults to `https://openrouter.ai/api/v1`.
- `AI_MODEL` — defaults to `openrouter/free`.
- `AI_TIMEOUT` — defaults to 60 seconds.

Never commit the key. Free-model capacity is variable, so the script reports HTTP errors instead of pretending every request will succeed.
