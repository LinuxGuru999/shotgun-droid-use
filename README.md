# droid-use

Local ADB and Shizuku shell toolkit for Android

## Overview
droid-use is a lightweight Android appbundle that provides a local interface for managing ADB and Shizuku shell connections without requiring a PC. It helps developers and power users streamline device debugging and script deployment by offering direct control over shell access and helper utilities directly on the device.

## Use cases
- Re-establishing Shizuku service connections after a reboot without connecting to a computer
- Deploying custom bash scripts to the local ADB shell for automated testing
- Verifying current shell permissions and user context before executing sensitive system commands

## How to use
1. Install the provided .aab file using a compatible installer like SAI or via sideloading tools
2. Launch the app and grant necessary accessibility or system permissions to enable Shizuku or ADB mode
3. Use the built-in interface to check connection status, reconnect services, or paste and execute helper scripts

## What is included
- Check local shell access
- Reconnect helper
- Deploy helper scripts

## License
Personal use. Redistribution not permitted.
