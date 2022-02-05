# Twitch Bot

A general purpose twitch bot that will work with multiple channels.

## TODO

* [x] Model the data
* [x] Setup Backend
* [x] Install tmi.js
* [ ] Twitch Oauth <!-- https://dev.twitch.tv/docs/authentication -->

* [ ] Add the bot to a channel
* [ ] Bot can read and respond to messages in specified channels

# Enviroment Variable Names
- TWITCH_CLIENT_ID - Client ID for the Twitch App
- TWITCH_CLIENT_SECRET - Client OAuth Secret for the Twitch App
- TWITCH_CLIENT_REDIR_HOST - Base host for the OAuth redirect URL. 
  (`/auth/twitch/callback`)

  http://localhost:8888/auth/twitch?scope=moderation:read%20chat:read%20chat:edit%20whispers:read+whispers:edit