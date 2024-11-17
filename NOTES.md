# Parcel Configuration

This project uses a `.parcelrc` configuration file to customize Parcel's behavior.

## .parcelrc Overview

- **Extends Default Configuration**: Inherits settings from `@parcel/config-default`.
- **Transformers**: Specifies that all `.json` files should be treated as raw strings using `@parcel/transformer-raw`.

### Usage

When importing JSON files, they will be treated as raw text instead of being parsed into JavaScript objects. This is useful in scenarios where the raw JSON format is required.
