# Handheld p5 Studio Starter

This is a minimal starting point for making an experimental phone-based browser experience with p5.js and p5-phone.

The default sketch is a small tilt-controlled color field. It is not an assignment to preserve. It is a working example of a phone permission, sensor input, and a desktop fallback.

## Start your project

1. On GitHub, choose **Use this template** and create a repository in your own account.
2. Click **Open in GitHub Desktop** and clone your new project.
3. Open that folder in OpenCode.
4. Read `brief.md` and change the project idea into your own words.
5. Open `index.html` in a browser for a quick desktop view.

## Two starting points

`sketch.js` is the default. It has a tilt-controlled color field and a drag fallback.

`simple-sketch.js` is a deliberately plain p5 canvas. To use it, change this line in `index.html`:

```html
<script src="sketch.js"></script>
```

to:

```html
<script src="simple-sketch.js"></script>
```

## Three ways to view your work

These are different tools for different moments. They are not interchangeable.

| URL                                         | Use it for                   | Notes                                                                            |
| ------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| Local browser                               | Fast desktop visual checks   | Open `index.html`, or use the preview server below. A phone cannot use this URL. |
| `https://...trycloudflare.com`              | Fast temporary phone testing | HTTPS, public, and temporary. Requires the preview server and tunnel.            |
| `https://your-name.github.io/your-project/` | Published project            | Public stable link, deployed after a push to `main`.                             |

### Local preview

From the project folder, run:

```sh
npm run preview
```

Open the printed `http://localhost:8080` URL on your laptop. Leave this terminal running.

### Phone preview with a temporary HTTPS tunnel

In a second terminal, in the same project folder, run:

```sh
npm run phone
```

Copy or scan the `https://...trycloudflare.com` URL that appears. Open it on your phone.

The tunnel route is prepared for class but still needs to be tested on the OCAD network. The link changes whenever the tunnel stops. Anyone with the link can view your project, so do not place sensitive material in it.

Motion, camera, microphone, location, NFC, BLE, and other powerful browser features need a secure context. A `localhost` URL is secure only on the computer running it, not on your phone.

## Publish with GitHub Pages

1. In GitHub Desktop, write a short commit summary and click **Commit to main**.
2. Click **Push origin**.
3. In your repository on GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions** if it is not already selected.
5. Open the **Actions** tab and wait for **Deploy GitHub Pages** to finish.

Your project URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## OpenCode workflow

This project includes four small roles:

| Role           | Default model     | Job                                                |
| -------------- | ----------------- | -------------------------------------------------- |
| Studio Builder | DeepSeek V4 Flash | Make one small, testable change.                   |
| Studio Planner | GLM-5.2           | Make a plan without editing.                       |
| Visual Critic  | Qwen3.7 Plus      | Critique attached screenshots without editing.     |
| Git Steward    | DeepSeek V4 Flash | Make an explicit local checkpoint without pushing. |

Start with these commands in OpenCode:

```text
/project-plan Describe the experience you want to make
/first-slice Implement the first version of the interaction
/phone-check
/visual-critique Attach a screenshot and assess the interface against the brief
/checkpoint Describe the change you are saving
```

`/checkpoint` does not push. You still use GitHub Desktop to push when you are ready to publish.

### Control feedback frequency

Set `feedback_frequency` near the top of `studio-settings.md`. The default, `after-each-slice`, asks for your feedback after one small, testable piece of work. You can make the workflow more hands-on with `after-each-change`, or more independent with `at-decision-points` or `only-when-blocked`. Tell the agent to continue after changing the setting.

### Visual critique loop

After making a small change, view it on a phone or in a browser and take a screenshot. Attach that image to the OpenCode message with `/visual-critique`. The critic can see the attachment and `brief.md`, but it cannot see the running page by itself.

Use one bounded loop:

```text
make one slice -> test -> screenshot -> visual critique -> choose one revision -> retest
```

The critic gives evidence-based feedback. You decide which feedback to use. Do not ask it to revise the project automatically.

## Change the models

The pinned model assignments live at the top of these files:

```text
.opencode/agents/studio-builder.md
.opencode/agents/studio-planner.md
.opencode/agents/visual-critic.md
.opencode/agents/git-steward.md
```

Each file has a line like:

```yaml
model: opencode-go/deepseek-v4-flash
```

Change only one role at a time when comparing models. Use the same brief and request, start from the same commit, test on the same phone, and record what happened in `workflow-notes.md`.

Quit and restart OpenCode after changing `opencode.json`, an agent, a command, or a skill. OpenCode loads this project configuration when it starts.

## Phone rules

- A phone capability must start from a user tap or click.
- Use the matching `window.*Enabled` flag before reading hardware values.
- Test the experience on a real phone, not only a laptop.
- Build a useful fallback for desktop or denied permissions when possible.
- iPhone Safari does not support NFC, vibration, or torch. Android Chrome has broader support, but still needs HTTPS for many features.

## Project files

```text
index.html            Page structure and library imports
style.css             Page styles
sketch.js             Default phone-aware p5 sketch
simple-sketch.js      Plain p5 starting point
brief.md              Your concept before implementation
test-plan.md          What you tested on a phone
workflow-notes.md     What you learned from the agent workflow
studio-settings.md    How often agents pause for your feedback
.opencode/            Project-local OpenCode roles, commands, and skills
```
