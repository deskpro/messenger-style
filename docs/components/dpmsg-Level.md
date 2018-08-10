---
title: Level - alignment
---

The structure of a level is the following:

<ul>
  <li>dpmsg-Level: main container</li>
  <li style="list-style: none">
    <ul>
      <li>dpmsg-LevelLeft for the left side</li>
      <li>dpmsg-LevelRight for the right side</li>
      <li style="list-style: none">
        <ul>
          <li>dpmsg-LevelItem for each individual element - centered vertically and horizontally </li>
        </ul>
      </li>
      <li>dpmsg-LevelTop for the top side</li>
      <li>dpmsg-LevelBottom for the bottom side</li>
    </ul>
  </li>
</ul>

In a dpmsg-LevelItem, you can then insert almost anything you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma level, they will always be vertically centered.

# Horizontal
```html @preview
<div class="dpmsg-Level">

  <div class="dpmsg-LevelLeft">
    <button class="dpmsg-Button">dpmsg-LevelLeft</button>
  </div>
  <div class="dpmsg-LevelItem">
    <button class="dpmsg-Button Button--small">dpmsg-LevelItem</button>
  </div>
  <div class="dpmsg-LevelRight">
    <button class="dpmsg-Button">dpmsg-LevelRight</button>
  </div>
</div>
```

# Vertical
```html @preview

<div class="dpmsg-Level">

  <div class="dpmsg-LevelTop">
    <button class="dpmsg-Button Button--small">dpmsg-LevelTop</button>
  </div>
  <div class="dpmsg-LevelItem">
    <button class="dpmsg-Button Button--large">dpmsg-LevelItem</button>
  </div>
  <div class="dpmsg-LevelBottom">
    <button class="dpmsg-Button Button--small">dpmsg-LevelBottom</button>
  </div>
</div>
```