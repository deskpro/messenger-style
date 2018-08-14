---
title: Book Time
---

```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <a href="#" class="dpmsg-BlockHeader dpmsg-Level"><span class="dpmsg-LevelLeft">Book a meeting</span><span class="dpmsg-LevelRight"><i class="dpmsg-IconArrow iconArrow--right iconArrow--blue"></i></span></a>
  </div>
</div>
```

```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <span class="dpmsg-BlockHeader">Book a meeting</span>
    <div class="dpmsg-BookTime">
      <div class="dpmsg-BookAvatar">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <span class="dpmsg-BookName is-bold">Nick Green</span>
      <span class="dpmsg-BookPost is-italic">Sales</span>
      <div class="dpmsg-Level dpmsg-BookHeader">
        <span class="dpmsg-LevelLeft">Select a day</span>
      </div>
      <a href="#" class="dpmsg-Level">
        <span class="dpmsg-LevelLeft">
          <span class="is-bold">Monday</span>
          <span>May 21, 2018</span>
        </span>
        <div class="dpmsg-LevelRight">
          <i class="dpmsg-IconArrowCircle"></i>
        </div>
      </a>
      <a href="#" class="dpmsg-Level">
        <span class="dpmsg-LevelLeft">
          <span class="is-bold">Tuesday</span>
          <span>May 22, 2018</span>
        </span>
        <div class="dpmsg-LevelRight">
          <i class="dpmsg-IconArrowCircle"></i>
        </div>
      </a>
      <a href="#" class="dpmsg-Level">
        <span class="dpmsg-LevelLeft">
          <span class="is-bold">Wednesday</span>
          <span>May 23, 2018</span>
        </span>
        <div class="dpmsg-LevelRight">
          <i class="dpmsg-IconArrowCircle"></i>
        </div>
      </a>
      <a href="#" class="dpmsg-Level">
        <span class="dpmsg-LevelLeft">
          <span class="is-bold">Thursday</span>
          <span>May 23, 2018</span>
        </span>
        <div class="dpmsg-LevelRight">
          <i class="dpmsg-IconArrowCircle"></i>
        </div>
      </a>
      <a href="#" class="dpmsg-Level">
        <span class="dpmsg-LevelLeft">
          <span class="is-bold">Friday</span>
          <span>May 23, 2018</span>
        </span>
        <div class="dpmsg-LevelRight">
          <i class="dpmsg-IconArrowCircle"></i>
        </div>
      </a>
      <div class="dpmsg-Level dpmsg-BookFooter">
        <a href="#" class="dpmsg-LevelLeft">Before 21st May</a>
        <a href="#" class="dpmsg-LevelRight">After 25th May</a>
      </div>
    </div>
  </div>
</div>
```

```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <span class="dpmsg-BlockHeader">Book a meeting</span>
    <div class="dpmsg-BookTime">
      <a class="dpmsg-BackBtn dpmsg-LevelLeft" href="#"><i class="dpmsg-IconArrow iconArrow--left iconArrow--blue"></i> back</a>
      <div class="dpmsg-BookAvatar">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <span class="dpmsg-BookName is-bold">Nick Green</span>
      <span class="dpmsg-BookPost is-italic">Sales</span>
      <div class="dpmsg-Level dpmsg-BookHeader">
        <span class="dpmsg-LevelLeft">Select a day</span>
        <div class="dpmsg-LevelRight">
          <label class="dpmsg-WrapInput">
            <input type="checkbox" class="dpmsg-InputCheckbox">
            <span class="dpmsg-InputCustomCheckbox">
              <span class="dpmsg-InputCheckboxText is-first">am/pm</span>
              <i class="dpmsg-InputCheckboxMarker"></i>
              <span class="dpmsg-InputCheckboxText">24hr</span>
            </span>
          </label>
        </div>
      </div>
      <div class="dpmsg-BtnRow">
        <button class="dpmsg-Button Button-Time">11.30am</button>
        <button class="dpmsg-Button Button-Confirm">Confirm</button>
      </div>
      <div class="dpmsg-BtnRow">
        <button class="dpmsg-Button Button-Time">12.00am</button>
        <button class="dpmsg-Button Button-Confirm">Confirm</button>
      </div>
      <div class="dpmsg-BtnRow for-confirm">
        <button class="dpmsg-Button Button-Time">12.30am</button>
        <button class="dpmsg-Button Button-Confirm">Confirm</button>
      </div>
      <div class="dpmsg-BtnRow">
        <button class="dpmsg-Button Button-Time">1.00am</button>
        <button class="dpmsg-Button Button-Confirm">Confirm</button>
      </div>
      <div class="dpmsg-BtnRow">
        <button class="dpmsg-Button Button-Time">1.30am</button>
        <button class="dpmsg-Button Button-Confirm">Confirm</button>
      </div>
      <div class="dpmsg-Level dpmsg-BookFooter">
        <a href="#" class="dpmsg-LevelLeft">Earlier</a>
        <a href="#" class="dpmsg-LevelRight">Later</a>
      </div>
    </div>
  </div>
</div>
```

```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <span class="dpmsg-BlockHeader">Book a meeting</span>
    <div class="dpmsg-BookTime">
      <a class="dpmsg-BackBtn dpmsg-LevelLeft" href="#"><i class="dpmsg-IconArrow iconArrow--left iconArrow--blue"></i> back</a>
      <div class="dpmsg-BookAvatar">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <span class="dpmsg-BookName is-bold">Nick Green</span>
      <span class="dpmsg-BookPost is-italic">Sales</span>
      <div class="dpmsg-Level dpmsg-BookHeader">
        <span class="dpmsg-LevelLeft">Confirm your meeting</span>
      </div>
      <span class="dpmsg-DateMeeting is-bold">Wednesday 23rd May at 12.30pm</span>
      <label>
        <span class="dpmsg-LabelInputText">Name</span>
        <input class="dpmsg-Input" placeholder="john doe">
      </label>
      <label>
        <span class="dpmsg-LabelInputText">Email</span>
        <input class="dpmsg-Input" placeholder="john.doe@company.com">
      </label>
      <button class="dpmsg-Button Button-FullWidth Button--primary submit-bookTime">Schedule meeting</button>
    </div>
  </div>
</div>
```

```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <span class="dpmsg-BlockHeader">Book a meeting</span>
    <div class="dpmsg-BookTime">
      <a class="dpmsg-BackBtn dpmsg-LevelLeft" href="#"><i class="dpmsg-IconArrow iconArrow--left iconArrow--blue"></i> back</a>
      <div class="dpmsg-BookAvatar">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <span class="dpmsg-BookName is-bold">Nick Green</span>
      <span class="dpmsg-BookPost is-italic">Sales</span>
      <div class="dpmsg-Level dpmsg-BookHeader">
      </div>
      <span class="dpmsg-ConfirmDateMeeting">
        Your meeting is booked for <br>
        <span class="is-bold">Wednesday 23rd May</span> at <span class="is-bold">12.30pm</span>
      </span>
      <a href="#" class="dpmsg-BookTimeLink">change</a>
    </div>
  </div>
</div>
```
