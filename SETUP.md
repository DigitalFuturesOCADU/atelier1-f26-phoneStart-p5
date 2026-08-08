# Before Class

Bring a laptop and a phone. Install or create the following before class.

1. [GitHub Desktop](https://desktop.github.com/)
2. [OpenCode](https://opencode.ai/)
3. [Node.js LTS](https://nodejs.org/)
4. [cloudflared](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/)
5. A GitHub account

## Check your installs

Open a terminal and run:

```sh
node --version
npx --version
cloudflared --version
```

Each command should print a version. Ask for help before class if one does not.

## OpenCode Go

In OpenCode, connect your Go subscription and run `/models`. This starter expects models with names like:

```text
opencode-go/glm-5.2
opencode-go/deepseek-v4-flash
```

If a listed model is unavailable, choose an available model in the OpenCode interface or update the matching agent file in `.opencode/agents/`.

## Public work

Your project repository and GitHub Pages site will be public. Do not commit passwords, API keys, private personal data, or media you do not have permission to publish.
