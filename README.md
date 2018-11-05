# Accordimate
A simple vanilla JavaScript library that applies CSS classes to items on view

## Installation
1. Download either the _accordimate.js_ or _accordimate.min.js_ and place the JavaScript file in a location of your choice, within your project directory.
2. In the `<head>` tag of your HTML file, link to the location of the Accordimate JavaScript file using a `<script>` tag. For example:
```html
<script src="accordimate.js" type="text/javascript"></script>
```
3. Just before the closing `<body>` tag, add a `<script>` tag which fires the main Accordimate function. For example:
```html
<script>
  accordimate();
</script>
</body>
```

## Setup
In order for Accordimate to detect which items need Accordimate-ing, the attribute `aim` must be added to the item. For example:
```html
<p aim>I'm some text that does nothing (for now) when in view</p>
```
To add a specific class to an item when it's in view, the attribute `aim-class=[CLASS NAME HERE]` is used. For example:
```html
<p aim aim-class="hello">The class 'hello' is added when I'm in view</p>
```
If the class you're adding is an animation, you can delay the animation using the attribute `aim-delay=[TIME IN SECONDS]`. For example:
```html
<p aim aim-class="hello" aim-delay="1.2">The class 'hello' is added when I'm in view, with the animation firing 1.2 seconds later</p>
```
### Full list of attributes
| Attribute Name | Example | Action |
| --- | --- | --- |
| `aim` | `<p aim>` | Required by Accordimate to detect which items are to be Accordimated
| `aim-class` | `<p aim aim-class="hello">` | The class that is applied to the item when in view
| `aim-class-mob` | `<p aim aim-class-mob="helloMobile">` | The class that is applied to the item when in view on mobile (When the screen width is less than 770px by default)
| `aim-delay` | `<p aim aim-delay="1">` | A CSS `transition-delay` is added to the item when in view. The value is the time in seconds.
| `aim-delay-mob` | `<p aim aim-delay-mob="1">` | A CSS `transition-delay` is added to the item when in view on mobile (When the screen width is less than 770px by default). The value is the time in seconds.
| `aim-forget` | `<p aim aim-forget>` | Accordimate will remove the classes added when the item is no longer in view anymore, and then reapply then once they're in view again. 

## Options
You can extend the functionality of Accordimate by adding extra options to the main Accordimate function. For example:
```html
<script>
  accordimate({
      viewHeight: 1,
      viewHeightMob: 0.9,
      makeOpaque: false,
      globalClass: "animated",
      forget: true
  });
</script>
</body>
```
### Full list of Options
| Option | Default Value | Action |
| --- | --- | --- |
| viewHeight | 0.75 | The percentage of how much of an item is in view until the in view specific classes are added
| viewHieghtMob | 0.75 | The percentage of how much of an item is in view on mobile until the in view specific classes are added
| makeOpaque | true | Set all items with the attribute `aim` to have an opacity of 0
| globalClass | null | The name of a class which is applied to all items when in view
| mobileWidth | 770 | The width in pixels whereby the mobile specific attributes will be used instead
| forget | false | Make Accordimate remove all the in view specific classes of an item when it is no longer in view

## Credits
**Created by Julian Smith**

**LinkedIn** = https://www.linkedin.com/in/julianrsmith95/
