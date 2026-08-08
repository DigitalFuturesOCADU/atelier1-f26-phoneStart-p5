# Studio Settings

Change this setting to control how often OpenCode pauses for your feedback.

```yaml
feedback_frequency: after-each-slice
```

Choose one value:

| Value                | What the agent does                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `after-each-change`  | Stops after one meaningful code or design change and asks before continuing. Slowest, most hands-on.                    |
| `after-each-slice`   | Stops after one small, testable implementation slice. This is the default.                                              |
| `at-decision-points` | Continues through straightforward work but asks when there is a consequential visual, interaction, or technical choice. |
| `only-when-blocked`  | Asks only when it cannot responsibly continue. Fastest, least hands-on.                                                 |

This is a workflow setting, not a command. You can change it as your confidence changes. Tell the agent to continue after changing it so it reads the new setting.
