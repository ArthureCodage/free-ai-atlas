# Verified catalog

Every claim below points to an official source. Limits can change; check the verification date.

## Gemini Developer API

Google's developer API offers free input and output tokens on selected models with rate limits, plus access through Google AI Studio.

- **Best for:** Building prototypes with a generous hosted API
- **Free access:** Free tier
- **Limits:** Only selected models and features have a free tier; quotas and feature availability vary by model and region.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://ai.google.dev/gemini-api/docs/pricing)

**Caveats**

- The official pricing page states that free-tier content may be used to improve Google's products; review the current data terms.

## GitHub Models

A GitHub-hosted model catalog and playground for rate-limited prototyping, with SDK examples and access controlled by the user's GitHub plan and model tier.

- **Best for:** Testing model APIs inside a GitHub workflow
- **Free access:** Free tier
- **Limits:** Free prototyping is rate-limited; limits vary by model, context size, request type, and Copilot plan.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://docs.github.com/en/github-models/use-github-models/prototyping-with-ai-models)

**Caveats**

- Model-specific licenses, acceptable-use policies, and preview conditions still apply.

## Groq API Free Plan

A hosted inference API focused on fast responses, with model-specific free-plan request and token limits published in the official console documentation.

- **Best for:** Fast experimentation with supported open models
- **Free access:** Free tier
- **Limits:** Limits are applied at organization level and vary by model across requests per minute/day and tokens per minute/day.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://console.groq.com/docs/rate-limits)

**Caveats**

- Exact limits shown in the account can differ from the public summary and may change.

## OpenRouter Free Models

An OpenAI-compatible hosted API and chat interface that routes requests to a rotating collection of zero-cost models through free variants and a free-model router.

- **Best for:** Trying several hosted models through one API
- **Free access:** Free tier
- **Limits:** The base free plan lists 25+ free models and 50 requests per day; model availability and provider capacity can change.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://openrouter.ai/pricing)

**Caveats**

- Free models are intended for experimentation and low-volume use, not reliable production workloads.
- Data policies and licenses can differ by routed provider and model.

## ChatGPT

A general-purpose hosted assistant with web search and limited access to files, data analysis, images, voice, and research features on the free plan.

- **Best for:** A first all-purpose AI assistant
- **Free access:** Freemium
- **Limits:** The $0 plan includes limited access to advanced models and features; availability and caps can change.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://openai.com/chatgpt/pricing)

**Caveats**

- Do not upload sensitive data before reviewing the current data controls and terms.

## Claude

Anthropic's hosted assistant offers a free version for supported locations, with usage that is lower and more availability-dependent than paid plans.

- **Best for:** Writing, analysis, and careful document work
- **Free access:** Freemium
- **Limits:** Free usage is session-limited and can vary with demand, conversation length, files, and model capacity.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan)

**Caveats**

- Claude API usage is separate and is not included with the consumer free plan.

## Gemini

Google's hosted assistant provides standard access without an AI subscription, including chat and selected multimodal features under compute-based limits.

- **Best for:** Google ecosystem users and multimodal exploration
- **Free access:** Freemium
- **Limits:** Standard limits are compute-based, refresh over time, and may change with testing, demand, and feature availability.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://support.google.com/gemini/answer/16275805?hl=en)

**Caveats**

- Feature and model availability varies by country, account type, and age.

## Perplexity

An answer engine whose Standard free plan offers practically unlimited basic searches, search history, limited file uploads, and very limited Pro searches.

- **Best for:** Quick web research with visible sources
- **Free access:** Freemium
- **Limits:** Basic searches are practically unlimited; Pro searches and file uploads are tightly limited on Standard.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you)

**Caveats**

- Citations still need to be opened and checked; an attached source does not guarantee a correct answer.

## Google Colab

A hosted Jupyter notebook environment requiring no setup, with free-of-charge access to compute that can include GPUs and TPUs when available.

- **Best for:** Learning and short notebook experiments without local setup
- **Free access:** Free compute
- **Limits:** Free resources are not guaranteed or unlimited; hardware, idle timeouts, maximum runtime, and usage caps fluctuate.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://research.google.com/colaboratory/faq.html)

**Caveats**

- The free managed runtime restricts remote-control and primarily web-UI-driven workloads, among other activities.

## Kaggle Notebooks

A hosted notebook environment with free accelerator access for machine-learning work, integrated with Kaggle datasets, competitions, and community examples.

- **Best for:** Structured GPU notebook practice and competitions
- **Free access:** Free compute
- **Limits:** The official guide describes a weekly GPU quota around 30 hours or sometimes higher, depending on demand and resources.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://www.kaggle.com/docs/efficient-gpu-usage)

**Caveats**

- Accelerator type, quota, and availability can change; actively stop unused sessions.

## ComfyUI

A node-based interface, API, and backend for diffusion image workflows, offering detailed control over generation pipelines and reusable graphs.

- **Best for:** Powerful local image-generation workflows
- **Free access:** Open source
- **Limits:** Speed, resolution, and supported workflows depend heavily on GPU VRAM, system RAM, and the selected models.
- **License:** GPL-3.0
- **Privacy:** local
- **Verified:** 2026-08-04 — [official source](https://github.com/comfy-org/ComfyUI)

**Caveats**

- Custom nodes execute code on your machine; install only trusted extensions.
- Generated-output rights depend on model licenses and applicable law.

## vLLM

A high-throughput, memory-efficient inference and serving engine for language models, with an OpenAI-compatible API and production-oriented batching.

- **Best for:** Serving open models efficiently on GPUs
- **Free access:** Open source
- **Limits:** Practical use usually requires a compatible accelerator, sufficient VRAM, and careful model-specific configuration.
- **License:** Apache-2.0
- **Privacy:** local
- **Verified:** 2026-08-04 — [official source](https://github.com/vllm-project/vllm)

**Caveats**

- The engine license and the served model license are separate.

## Open WebUI

A self-hosted chat and AI platform that can work offline with Ollama and OpenAI-compatible providers, including user management and RAG features.

- **Best for:** A polished shared interface for local models
- **Free access:** Open source
- **Limits:** Self-hosted use is hardware-limited; cloud providers connected to it may charge separately or process submitted data.
- **License:** Open WebUI License
- **Privacy:** configurable
- **Verified:** 2026-08-04 — [official source](https://github.com/open-webui/open-webui/blob/main/LICENSE)

**Caveats**

- Current releases include a branding-protection clause; read the full license before rebranding or redistribution.
- Installing third-party tools or functions expands the security boundary.

## Hugging Face LLM Course

A free, ad-free course covering transformers, datasets, tokenizers, model sharing, fine-tuning, demos, dataset curation, and reasoning models.

- **Best for:** Developers progressing from LLM basics to fine-tuning
- **Free access:** Free tier
- **Limits:** The course is free and self-paced; running exercises may require a local environment or a separate notebook service.
- **License:** Apache-2.0
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://huggingface.co/learn/llm-course/chapter1/1)

**Caveats**

- Good Python knowledge is expected, and an introductory deep-learning course is recommended first.

## Practical Deep Learning for Coders

A free, example-first deep-learning course for people with coding experience, covering vision, NLP, tabular data, deployment, foundations, and diffusion.

- **Best for:** Learning practical deep learning by building
- **Free access:** Free tier
- **Limits:** Course material is free; hands-on work uses local or third-party notebook compute with its own limits.
- **License:** Variable or proprietary
- **Privacy:** provider-processed
- **Verified:** 2026-08-04 — [official source](https://course.fast.ai/)

**Caveats**

- The course expects coding experience, preferably Python, and basic high-school mathematics.

## llama.cpp

A dependency-light C and C++ inference engine for GGUF language models with CPU, GPU, hybrid offload, quantization, and an OpenAI-compatible server.

- **Best for:** Maximum control and broad hardware support
- **Free access:** Open source
- **Limits:** Performance and maximum model size depend on CPU features, RAM, GPU backend, VRAM, and quantization.
- **License:** MIT
- **Privacy:** local
- **Verified:** 2026-08-04 — [official source](https://github.com/ggml-org/llama.cpp)

**Caveats**

- Model files have independent licenses and may impose additional restrictions.

## Ollama

A local model runner and API for downloading and using open models on Windows, macOS, Linux, and Docker with a compact command-line workflow.

- **Best for:** The easiest path to a local LLM API
- **Free access:** Open source
- **Limits:** Inference is limited by your RAM, VRAM, storage, electricity, and the license of each downloaded model.
- **License:** MIT
- **Privacy:** local
- **Verified:** 2026-08-04 — [official source](https://github.com/ollama/ollama)

**Caveats**

- The Ollama software license does not replace the separate license attached to each model.

## Hugging Face Model Hub

A community platform for discovering, storing, downloading, and sharing model checkpoints that integrate with many machine-learning libraries.

- **Best for:** Finding downloadable models and model cards
- **Free access:** Freemium
- **Limits:** Public discovery and many downloads are free; gated models, hosted inference, storage, and compute have separate rules and limits.
- **License:** Variable or proprietary
- **Privacy:** configurable
- **Verified:** 2026-08-04 — [official source](https://huggingface.co/docs/hub/en/models-the-hub)

**Caveats**

- Every repository can use a different license; 'available on Hugging Face' does not mean open source or commercially usable.

## AnythingLLM

A local-first desktop and Docker application for chatting with documents, connecting local or cloud models, and building agent and RAG workflows.

- **Best for:** Private document chat with minimal setup
- **Free access:** Open source
- **Limits:** Local use depends on hardware and chosen models; external model, embedding, or vector providers may have separate costs.
- **License:** MIT
- **Privacy:** configurable
- **Verified:** 2026-08-04 — [official source](https://github.com/Mintplex-Labs/anything-llm)

**Caveats**

- Privacy becomes provider-dependent when cloud model or embedding APIs are enabled.

## whisper.cpp

A C and C++ implementation of Whisper for local speech recognition and transcription across desktop, mobile, WebAssembly, and server environments.

- **Best for:** Offline speech-to-text and transcription
- **Free access:** Open source
- **Limits:** Transcription speed and accuracy depend on model size, language, audio quality, CPU, GPU support, and available memory.
- **License:** MIT
- **Privacy:** local
- **Verified:** 2026-08-04 — [official source](https://github.com/ggml-org/whisper.cpp)

**Caveats**

- You are responsible for consent and privacy when recording or transcribing people.
