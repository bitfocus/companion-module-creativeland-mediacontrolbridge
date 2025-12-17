# Media Control Bridge

This module connects to [Media Control Bridge](https://github.com/tomhillmeyer/media-control-bridge) that runs on macOS or Windows and bridges the OS-level media controls and information into a basic HTTP API and WebSockets. That means this module has play, pause, forward, and back media control actions and song title, artist, album, and album art as variables and feedback.


## Current Compatibility
|                                                  	| macOS + Spotify 	| macOS + Apple Music 	| macOS + Others 	| Windows 	|
|--------------------------------------------------	|-----------------	|---------------------	|----------------	|---------	|
| Play, Pause, Next, Previous controls             	| ✅               	| ✅                   	| ✅              	| ✅       	|
| Title, Artist, Album, App Name, Connected Status 	| ✅               	| ✅                   	| ✅              	| ✅       	|
| Duration, Playback Position                      	| ✅               	| ✅                   	| ❌              	| ❌       	|
| Album Artwork                                    	| ✅               	| ❌                   	| ❌              	| ❌       	|