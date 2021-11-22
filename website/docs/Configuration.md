---
sidebar_position: 4
---

# Configuration

## moonwave.toml

You can customize how Moonwave behaves by creating a `moonwave.toml` file in the root of your project.

Here's a sample `moonwave.toml` with default properties. Every property listed here is optional.

:::tip
Options annotated with the comment `# From Git` mean that property is automatically filled in from your Git repository.
:::

```toml
title = "MyProjectName"  # From Git
gitRepoUrl = "https://github.com/UpliftGames/moonwave" # From Git

gitSourceBranch = "master"
changelog = true
classOrder = []

[docusaurus]
onBrokenLinks = "throw"
onBrokenMarkdownLinks = "warn"
favicon = ""

# From git:
organizationName = "AuthorName"
projectName = "MyProjectName"
url = "https://AuthorName.github.io"
baseUrl = "/MyProjectName"
tagline = "Your project's tagline"

[navbar]
hideableSidebar = true

[footer]
style = "dark"
copyright = "Copyright © 2021 AuthorName. Built with Moonwave and Docusaurus"

[[footer.links]]
label = "link text"
html = "https://google.com"
```

See [the publishing guide](/docs/Publishing) for details on the `url` and `baseUrl` options.

## Docusaurus options

The options in the `[docusaurus]` section are directly passed to the Docusaurus options. For more information, please see the [Docusaurus docs](https://docusaurus.io/docs/docusaurus.config.js)

## Custom navbar options

You can add custom navbar options like so:

```toml
[[navbar.items]]
href = "https://discord.gg/abcdefghijk"
label = "Discord"
position = "right"

[[navbar.items]]
href = "https://???"
label = "Something Else"
```

## API Class Order

You can customize the order that classes appear in the API section with the `classOrder` option. In `moonwave.toml`, specify:

```toml
classOrder = [
	"MyClass",
	"Sample"
]
```

Any classes not listed here will be alphabetized and added to the end of the list. Listing a class that doesn't exist is an error.

### Sections

You can categorize your API pages with sections. Instead of the above style, you can do this:

```toml
[[classOrder]]
section = "Section name"
classes = ["Class1", "Class2"]

[[classOrder]]
section = "Another section name"
classes = ["Class3", "Class4"]

[[classOrder]]
# No section name will link classes at the root level of the sidebar
classes = ["Class5", "Class6"]

[[classOrder]]
section = "Yet another section name"
collapsed = false # Determines with the section grouping is collapsed or expanded on page load. Defaults to true.
classes = ["Class7", "ClassAte", "Class9"]
```

### Table of Contents (TOC)

You can customize categories in the Table of Contents of each API page. To create a category, first tag all items that should be included in the category with the `@tag` tag.

```lua
--[=[
	This is a very fancy function that adds a couple numbers.

	@param a number -- The first number you want to add
	@param b number -- The second number you wanna add
	@return number -- Returns the sum of `a` and `b`
	@tag utility
]=]
function MyFirstClass:taggedFunction(a, b)
	return a + b
end
```

Then, specify those tags under the `apiCategories` option in your `moonwave.toml` file.

```toml
apiCategories = [
    "constructor",
    "utility",
    "random"
]
```

## Custom home page

By default your project's README is used as the homepage. To use a custom homepage, simply set `enabled` to `true` in the `[home]` section:

```toml
[home]
enabled = true
includeReadme = true # Optional

[[home.features]]
title = "Feature 1"
description = "This is a feature"
image = "https://url

[[home.features]]
title = "Feature 2"
description = "This is a second feature"
image = "https://url
```

Optionally, you can include `includeReadme = true`, which will append your project's README to the end of the home page.

If your project's README begins with some content that you don't want included in your home page, you can place an HTML comment in your project's README that will not include any content before it.

```html
Project Logo, Project Name, Etc
<!--moonwave-hide-before-this-line-->
My project is amazing and it does everything you could ever want.
```

Only the content underneath the HTML comment will be included in your Moonwave homepage.
