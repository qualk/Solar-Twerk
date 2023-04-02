
# Solar Twerk

Solar Twerk is a tweaking tool for Lunar Client, offering a wide range of modifications, including the ability to use mods which are unavailable by default. We are dedicated to providing our users with the most up-to-date patches and updates, and we are proud to have a large user base of over 200,000 individuals who have downloaded and used our tool.

Please note that the use of Solar Twerk is at your own risk. Any changes done to the source code of Lunar Client is in violation of their terms of service. We advise you to review Lunar Client's terms of service by clicking [here](https://www.lunarclient.com/terms) before proceeding. We cannot be held responsible for any damages that may occur as a result of using Solar Twerk.

# Installing

You can download the latest version of Solar Twerk from the [Releases](https://github.com/qualk/Solar-Twerk/releases) page. You need to download the version corresponding to your operating system (OS).

# Usage

Launching the app will present with a user interface that closely resembles the original Lunar Client Launcher. This design choice has been implemented to ensure a seamless transition for users who may wish to switch between the two launchers, reducing confusion and improving ease of use.

**Please note that Solar Twerk is not a replacement for Lunar Client. Solar Twerk is a tweaking tool for Lunar Client**

Customize and personalize your Lunar Client experience by navigating to the **"Engine"** tab within the app. Additionally, the **"Settings"** tab allows for customization of launcher and JRE preferences. The game can be launched at any time by utilizing the green launch button, which is accessible from any tab.

# Building from source

Solar Twerk is fully open-source, allowing for users to obtain the source code and make their own modifications. To do so, the repository can be cloned using the command:
```bash
$ git clone https://github.com/qualk/Solar-Twerk
```
Once the repository is downloaded, navigate to the directory and install the necessary dependencies using the commands:
```bash
$ cd Solar-Twerk
$ npm install
```
For development purposes, run this command to build the app and start it. Hot reload is included for easier development and testing.
```bash
$ npm run serve
```
To build the final version of the app, run this command. The resulting executables, installers, etc. will be located in the dist directory.
```bash
$ npm run build
```

**Note:** If you are a receiving an error like this `"error:0308010C:digital envelope routines::unsupported"`, then before running any `npm run` commands, run `set NODE_OPTIONS=--openssl-legacy-provider` in Command Prompt on Windows or `export NODE_OPTIONS=--openssl-legacy-provider` on Linux. 
