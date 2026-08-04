<p align="center">
  <img src="assets/free-ai-atlas.svg" alt="Free AI Atlas" width="760">
</p>

<p align="center">
  <strong>Find, learn, build, and run AI for free — with evidence.</strong>
</p>

<p align="center">
  <a href="README.fr.md">Français</a> ·
  <a href="CATALOG.md">Full catalog</a> ·
  <a href="guides/start-here/README.md">Start here</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

<p align="center">
  <img alt="Resources" src="https://img.shields.io/badge/resources-20-7c5cff">
  <img alt="Categories" src="https://img.shields.io/badge/categories-11-19c6a3">
  <img alt="Latest verification" src="https://img.shields.io/badge/latest%20verification-2026-08-04-f4b942">
  <img alt="Content license CC0" src="https://img.shields.io/badge/data%20%26%20content-CC0-0b7285">
  <img alt="Code license MIT" src="https://img.shields.io/badge/code-MIT-0b7285">
</p>

---

Free AI Atlas is not another giant list of links. It is a structured, reviewable catalog of AI resources that can be used at zero cost, plus practical paths for newcomers and builders.

Every entry records what “free” means, its real limits, privacy model, required account or payment card, commercial-use posture, official evidence, and verification date.

> [!IMPORTANT]
> Free plans change quickly. A green link is not proof that an offer is still free. Use the official evidence and `last_verified` date before relying on any resource for important work.

## Choose your path

| I want to… | Start with |
|---|---|
| Try useful AI without installing anything | [Zero-cost starter stack](stacks/zero-cost-starter.md) |
| Run a private chatbot on my own computer | [Local private AI stack](stacks/local-private-ai.md) |
| Install local AI on Windows, macOS, or Linux | [Local AI guides](guides/local-ai/) |
| Build with free model APIs | [Free API stack](guides/advanced/free-api-stack.md) |
| Generate images locally | [Image generation stack](stacks/image-generation.md) |
| Chat with private documents | [RAG and documents stack](stacks/rag-and-documents.md) |
| Learn AI from the beginning | [Learning path](guides/start-here/README.md#learn-the-foundations) |
| Compare everything | [Full catalog](CATALOG.md) or open `site/index.html` |

## What the labels mean

- **Open source:** the software itself is available under a source license; model licenses and hardware still matter.
- **Free tier:** an ongoing zero-cost hosted plan with provider-defined limits.
- **Freemium:** useful zero-cost access exists, with substantial capabilities behind paid plans.
- **Free compute:** hosted CPU/GPU/TPU access at no charge, but availability is limited or dynamic.

## Verified catalog

| Resource | Category | Free access | Access | Level | Verified |
|---|---|---|---|---|---|
| [Gemini Developer API](https://ai.google.dev/) | api | Free tier | cloud | intermediate | 2026-08-04 |
| [GitHub Models](https://github.com/marketplace/models) | api | Free tier | cloud | intermediate | 2026-08-04 |
| [Groq API Free Plan](https://console.groq.com/) | api | Free tier | cloud | intermediate | 2026-08-04 |
| [OpenRouter Free Models](https://openrouter.ai/models?pricing=free) | api | Free tier | cloud | intermediate | 2026-08-04 |
| [ChatGPT](https://chatgpt.com/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Claude](https://claude.ai/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Gemini](https://gemini.google.com/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Perplexity](https://www.perplexity.ai/) | assistant | Freemium | cloud | beginner | 2026-08-04 |
| [Google Colab](https://colab.research.google.com/) | compute | Free compute | cloud | beginner | 2026-08-04 |
| [Kaggle Notebooks](https://www.kaggle.com/code) | compute | Free compute | cloud | beginner | 2026-08-04 |
| [ComfyUI](https://github.com/comfy-org/ComfyUI) | image-generation | Open source | local | intermediate | 2026-08-04 |
| [vLLM](https://github.com/vllm-project/vllm) | inference-server | Open source | local | advanced | 2026-08-04 |
| [Open WebUI](https://github.com/open-webui/open-webui) | interface | Open source | hybrid | intermediate | 2026-08-04 |
| [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1) | learning | Free tier | cloud | intermediate | 2026-08-04 |
| [Practical Deep Learning for Coders](https://course.fast.ai/) | learning | Free tier | cloud | intermediate | 2026-08-04 |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | local-runtime | Open source | local | advanced | 2026-08-04 |
| [Ollama](https://ollama.com/) | local-runtime | Open source | local | beginner | 2026-08-04 |
| [Hugging Face Model Hub](https://huggingface.co/models) | model-hub | Freemium | hybrid | intermediate | 2026-08-04 |
| [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | rag | Open source | hybrid | beginner | 2026-08-04 |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | speech | Open source | local | intermediate | 2026-08-04 |

## Trust model

Free AI Atlas uses three separate checks:

1. **Schema validation** catches missing, contradictory, or malformed records.
2. **Daily reachability audits** detect dead or blocked official links.
3. **Evidence review** confirms pricing, limits, privacy, and licensing before `last_verified` changes.

Automation may open issues or pull requests with evidence. It does not silently rewrite material claims or merge them without review. See [VERIFICATION.md](VERIFICATION.md).

## Run it locally

No third-party package is required:

```bash
python scripts/validate.py
python scripts/build.py --check
python -m unittest discover -s tests -v
python -m http.server 8000
```

Then visit <http://localhost:8000/site/>.

## Contributing

Found a new free resource or a changed limit? Open the matching issue form. For pull requests, edit one file in `data/resources/`, run the checks, and include an official source.

Read [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md), and the [Code of Conduct](CODE_OF_CONDUCT.md).

## Scope

Included resources must provide meaningful ongoing value at zero monetary cost. Short trials, piracy, leaked keys, quota bypasses, “free” offers requiring mandatory paid credit, and unsafe license circumvention are out of scope.

Free AI Atlas does not endorse a provider, guarantee availability, or provide legal advice. Always review the provider’s current terms before commercial or sensitive use.
