# JS Build Info Generator

This is a very simple npm command that allows you to generate a JSON build info file as part of your build process.

Typically this would go into the CI process as a post-build step.

## Usage

    generate-build-info --file ./public/build-info.json --sha  a3cb219c --build "v1.2.32.0" --comment "Release to Test" --author "spenceclark"

Parameters are:

- **file** - The output filename - if not supplied it default to "build-info.json" in current directory
- **sha** - The SHA of the commit that caused the build to be generated
- **build** - Any build number/tag from the commit
- **comment** - Any comment you want to supply to the file
- **author** - The Person who triggered the build

**All parameters are optional**

## Example output

    {
        "sha": "a3cb219c",
        "build": "v1.2.32.0",
        "buildTime": "2019-10-25T11:26:09.593Z",
        "comment": "Release to Test",
        "author": "spenceclark"
    }

