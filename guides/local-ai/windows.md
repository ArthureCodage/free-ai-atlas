# Local AI on Windows

The simplest beginner route is Ollama. A graphical interface such as AnythingLLM can be added later.

## 1. Check the machine

Open PowerShell:

```powershell
Get-CimInstance Win32_ComputerSystem | Select-Object TotalPhysicalMemory
Get-CimInstance Win32_VideoController | Select-Object Name,AdapterRAM
```

Windows may report dedicated GPU memory imperfectly. Your GPU vendor's control panel is the better confirmation.

## 2. Install Ollama

Use the signed installer linked from <https://ollama.com/download/windows>. After installation, open a new PowerShell window:

```powershell
ollama --version
ollama
```

The interactive launcher can help select a model. For a manual choice, browse <https://ollama.com/library>, start with a small model, then run:

```powershell
ollama run <model-name>
```

## 3. Confirm that data stays local

The local API normally listens on `http://127.0.0.1:11434`. Verify it:

```powershell
Invoke-RestMethod http://127.0.0.1:11434/api/tags
```

## 4. Add a user interface

Choose one:

- AnythingLLM desktop for document chat and a simple setup.
- Open WebUI through Docker for a multi-user browser interface.
- The terminal alone for the smallest attack surface.

Do not expose port `11434` or a chat interface to the public internet without authentication, TLS, updates, and a clear threat model.
