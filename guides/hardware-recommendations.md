# Hardware Recommendations

This document helps you choose the right local AI tools based on your hardware.

## Hardware tiers

### Basic (8GB RAM, no GPU)
- **Best for**: Small language models (3B-7B parameters)
- **Recommended**: GPT4All, Ollama
- **Models**: Phi-3 Mini, Llama 3.2 3B, Mistral 7B (quantized)
- **Use cases**: Simple chat, text generation, basic coding

### Mid-range (16GB RAM, 4GB+ VRAM)
- **Best for**: Medium language models (7B-13B parameters)
- **Recommended**: Ollama, llama.cpp, LocalAI
- **Models**: Llama 3.1 8B, Mistral 7B, CodeLlama 7B
- **Use cases**: Complex chat, coding, analysis, RAG

### High-end (32GB+ RAM, 8GB+ VRAM)
- **Best for**: Large language models (13B-70B parameters)
- **Recommended**: llama.cpp, vLLM, LocalAI
- **Models**: Llama 3.1 70B (quantized), Mixtral 8x7B
- **Use cases**: Advanced reasoning, long context, multimodal

### Professional (64GB+ RAM, 24GB+ VRAM)
- **Best for**: Very large models (70B+ parameters)
- **Recommended**: vLLM, TGI, LocalAI
- **Models**: Llama 3.1 70B (full), CodeLlama 70B
- **Use cases**: Production workloads, research, fine-tuning

## GPU considerations

### NVIDIA (CUDA)
- **Best support**: Most local runtimes support CUDA
- **VRAM**: 4GB minimum for small models, 8GB+ recommended
- **Models**: Any GGUF model with CUDA support

### AMD (ROCm)
- **Support**: llama.cpp, vLLM, Ollama (experimental)
- **VRAM**: Same as NVIDIA recommendations
- **Models**: Any GGUF model with ROCm support

### Apple Silicon (MPS)
- **Support**: llama.cpp, Ollama, MLX
- **Memory**: Unified memory architecture
- **Models**: Any GGUF model, optimized for Apple Silicon

### CPU only
- **Support**: All runtimes support CPU inference
- **Performance**: Slower but works on any hardware
- **Models**: Smaller quantized models (Q4, Q5)

## Model selection guide

| Model Size | RAM Needed | VRAM Needed | Speed | Quality |
|---|---|---|---|---|
| 3B | 4GB | 2GB | Fast | Basic |
| 7B | 8GB | 4GB | Good | Good |
| 13B | 16GB | 8GB | Moderate | Very Good |
| 30B | 32GB | 12GB | Slow | Excellent |
| 70B | 64GB | 24GB | Very Slow | Outstanding |

## Getting started

1. **Check your hardware**: RAM, GPU (if any), storage
2. **Choose a runtime**: See recommendations above
3. **Download a model**: Start with a smaller model for testing
4. **Test performance**: Run a few prompts to see if it meets your needs
5. **Upgrade if needed**: Try larger models if you have sufficient hardware

## Resources

- [Local AI guides](local-ai/)
- [Local runtime resources](../CATALOG.md)
- [Ollama documentation](https://ollama.com/library)
- [llama.cpp documentation](https://github.com/ggml-org/llama.cpp)