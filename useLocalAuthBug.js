This bug occurs when using the Expo `useLocalAuthentication` hook with a custom prompt message.  The expected behavior is that the prompt message should be displayed to the user, but instead, a default system prompt is shown. This happens inconsistently, sometimes showing the custom message and sometimes not. The issue seems to be related to the timing and how the authentication process handles the prompt message within its internal mechanisms.