# droid-use

Local ADB and Shizuku shell toolkit for Android

## Overview
droid-use is a local-only Android appbundle that provides a streamlined interface for managing ADB and Shizuku shell access without cloud dependencies. It is designed for developers who need reliable, on-device debugging capabilities and want to avoid the friction of manual command-line setup for common shell tasks.

## Use cases
- Quickly verifying if Shizuku is active and reconnecting the service after a reboot without opening a terminal emulator
- Deploying custom helper scripts to the device's local shell environment to automate repetitive ADB commands
- Diagnosing local shell permission issues by checking current access levels and restarting the Shizuku helper process

## How to use
1. Download the .aab file and install it on your Android device using a package installer or by converting to APK if required by your toolchain
2. Launch the app and grant necessary permissions, then enable Shizuku via its companion app or wireless debugging mode
3. Use the built-in interface to check shell status or deploy your pre-written scripts to the local environment

## What is included
- Check local shell access
- Reconnect helper
- Deploy helper scripts

## License
Personal use. Redistribution not permitted.
