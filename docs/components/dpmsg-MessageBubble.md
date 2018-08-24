---
title: Message Bubble
---

# Incoming
```html @preview
<div class="dpmsg-MessageBubble">
  <div class="dpmsg-MessageBubbleRow is-incoming">
    <div class="dpmsg-AvatarCol">
      <img src="/messenger-style/img/dp-logo.svg" alt="">
    </div>
    <div class="dpmsg-BubbleCol">
      <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
    </div>
  </div>
</div>
```

# Outgoing
```html @preview
<div class="dpmsg-MessageBubble">
  <div class="dpmsg-MessageBubbleRow is-outgoing">
    <div class="dpmsg-AvatarCol is-rounded">
      <img src="/messenger-style/img/docs/avatar.png" alt="">
    </div>
    <div class="dpmsg-BubbleCol">
      <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
    </div>
  </div>
</div>
```

# Typing
```html @preview
<div class="dpmsg-MessageBubble">
  <div class="dpmsg-MessageBubbleRow is-outgoing">
    <div class="dpmsg-AvatarCol is-rounded">
      <img src="/messenger-style/img/docs/avatar.png" alt="">
    </div>
    <div class="dpmsg-BubbleCol is-center">
      <span class="dpmsg-BubbleItem is-typing">...</span>
    </div>
  </div>
</div>
```

# Notification
```html @preview
<span class="dpmsg-BubbleNotification is-left">Nick Green joined the conversation (12.47pm)</span>
<span class="dpmsg-BubbleNotification is-right">John Doe ended the conversation (13.02pm)</span>
```

# Message Bubble example
```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper">
    <span class="dpmsg-BlockHeader">Your conversations</span>
    <div class="dpmsg-AvatarHeadsList">
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-AvatarHeadsIcon">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
    </div>
    <div class="dpmsg-MessageBubbleRow is-incoming">
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
      </div>
    </div>
    <div class="dpmsg-MessageBubbleRow is-incoming">
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">How can we help you today?</span>
      </div>
    </div>
    <div class="dpmsg-MessageBubbleRow is-outgoing">
      <div class="dpmsg-AvatarCol is-rounded">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">Hi, need help with a ticket please.</span>
      </div>
    </div>
    <span class="dpmsg-BubbleNotification is-left">Nick Green joined the conversation (12.47pm)</span>
    <div class="dpmsg-MessageBubbleRow is-incoming">
      <div class="dpmsg-AvatarCol is-rounded">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
      </div>
    </div>
    <div class="dpmsg-MessageBubbleRow is-outgoing">
      <div class="dpmsg-AvatarCol is-rounded">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">It’s AW874KGY9056.</span>
      </div>
    </div>
    <span class="dpmsg-BubbleNotification is-right">John Doe ended the conversation (13.02pm)</span>
    <div class="dpmsg-MessagePrompt">
      <div class="dpmsg-PromptHeader">
        <i class="dpmsg-IconNotes"></i>
        <span class="dpmsg-PromptHeaderText">Would you like an email transcript?</span>
      </div>
      <div class="dpmsg-PromptContentAgree">
        <a class="dpmsg-PromptBtn is-agdee" href="#">Yes</a>
        <a class="dpmsg-PromptBtn is-disagree" href="#">No</a>
      </div>
    </div>
    <div class="dpmsg-MessagePrompt">
      <div class="dpmsg-PromptHeader">
        <span class="dpmsg-PromptHeaderText">Rate your conversation with Nick</span>
      </div>
      <div class="dpmsg-PromptContentEvaluation">
        <button class="dpmsg-Button Button-LimitedWidth Button--success">Helpful</button>
        <button class="dpmsg-Button Button-LimitedWidth Button--danger">Unhelpful</button>
      </div>
    </div>
    <div class="dpmsg-WrapTextarea">
      <span class="dpmsg-MainTextarea" placeholder="" contenteditable="true"></span>
      <div class="dpmsg-TextareaActions dpmsg-Level">
        <div class="dpmsg-LevelLeft">
          <a href="#">
            <i class="dpmsg-IconSmile"></i>
          </a>
          <a href="#">
            <i class="dpmsg-IconAttach"></i>
          </a>  
        </div>
        <div class="dpmsg-LevelRight">
          <a href="#">
            <i class="dpmsg-IconSend"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

<div class="dpmsg-ScreenWrap">
  <div class="dpmsg-Screen is-blue">
    <div class="dpmsg-ScreenHeder">
      <div class="dpmsg-ScreenControls dpmsg-Level">
        <a class="dpmsg-BackBtn dpmsg-LevelLeft" href="#"><i class="dpmsg-IconArrow iconArrow--left"></i> back</a>
        <a class="dpmsg-LevelRight" href="#"><i class="dpmsg-IconMute"></i></a>
      </div>
      <div class="dpmsg-ScreenHederLogo">
        <img src="/messenger-style/img/deskpro-logo-white.svg" alt="">
      </div>
      <span class="dpmsg-ScreenHederTitle">Get in touch</span>
      <span class="dpmsg-ScreenHederText">Helping organizations provide their customers with better support.</span>
    </div>
    <div class="dpmsg-ScreenContent">
      <div class="dpmsg-Block">
        <div class="dpmsg-BlockWrapper">
          <span class="dpmsg-BlockHeader">Your conversations</span>
          <div class="dpmsg-AvatarHeadsList">
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-AvatarHeadsIcon">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
          </div>
          <div class="dpmsg-MessageBubbleRow is-incoming">
            <div class="dpmsg-BubbleCol">
              <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
            </div>
          </div>
          <div class="dpmsg-MessageBubbleRow is-incoming">
            <div class="dpmsg-BubbleCol">
              <span class="dpmsg-BubbleItem">How can we help you today?</span>
            </div>
          </div>
          <div class="dpmsg-MessageBubbleRow is-outgoing">
            <div class="dpmsg-AvatarCol is-rounded">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-BubbleCol">
              <span class="dpmsg-BubbleItem">Hi, need help with a ticket please.</span>
            </div>
          </div>
          <span class="dpmsg-BubbleNotification is-left">Nick Green joined the conversation (12.47pm)</span>
          <div class="dpmsg-MessageBubbleRow is-incoming">
            <div class="dpmsg-AvatarCol is-rounded">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-BubbleCol">
              <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
            </div>
          </div>
          <div class="dpmsg-MessageBubbleRow is-outgoing">
            <div class="dpmsg-AvatarCol is-rounded">
              <img src="/messenger-style/img/docs/avatar.png" alt="">
            </div>
            <div class="dpmsg-BubbleCol">
              <span class="dpmsg-BubbleItem">It’s AW874KGY9056.</span>
            </div>
          </div>
          <span class="dpmsg-BubbleNotification is-right">John Doe ended the conversation (13.02pm)</span>
          <div class="dpmsg-MessagePrompt">
            <div class="dpmsg-PromptHeader">
              <i class="dpmsg-IconNotes"></i>
              <span class="dpmsg-PromptHeaderText">Would you like an email transcript?</span>
            </div>
            <div class="dpmsg-PromptContentAgree">
              <a class="dpmsg-PromptBtn is-agdee" href="#">Yes</a>
              <a class="dpmsg-PromptBtn is-disagree" href="#">No</a>
            </div>
          </div>
          <div class="dpmsg-MessagePrompt">
            <div class="dpmsg-PromptHeader">
              <span class="dpmsg-PromptHeaderText">Rate your conversation with Nick</span>
            </div>
            <div class="dpmsg-PromptContentEvaluation">
              <button class="dpmsg-Button Button-LimitedWidth Button--success">Helpful</button>
              <button class="dpmsg-Button Button-LimitedWidth Button--danger">Unhelpful</button>
            </div>
          </div>
          <div class="dpmsg-MessagePrompt">
            <div class="dpmsg-PromptHeader">
              <span class="dpmsg-PromptHeaderText">Thank you for your feedback</span>
            </div>
            <div class="dpmsg-PromptContentEvaluation">
              <i class="dpmsg-IconSmile is-blue"></i>
            </div>
          </div>
      <div class="dpmsg-WrapTextarea">
        <span class="dpmsg-MainTextarea" placeholder="" contenteditable="true"></span>
        <div class="dpmsg-TextareaActions dpmsg-Level">
          <div class="dpmsg-LevelLeft">
            <a href="#">
              <i class="dpmsg-IconSmile"></i>
            </a>
            <a href="#">
              <i class="dpmsg-IconAttach"></i>
            </a>  
          </div>
          <div class="dpmsg-LevelRight">
            <a href="#">
              <i class="dpmsg-IconSend"></i>
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <div class="dpmsg-ScreenFooter">
      <span class="dpmsg-ScreenLine"></span>
      <span class="dpmsg-ScreenFooterText">Powered by</span>
      <span class="dpmsg-VertLine"></span>
      <img class="dpmsg-ScreenFooterLogo" src="/messenger-style/img/deskpro-logo.svg" alt="">
      <span class="dpmsg-ScreenLine"></span>
    </div>
  </div>
  <div class="dpmsg-ScreenIconRow is-left">
    <button class="dpmsg-TriggerBtn is-blue">
      <i class="dpmsg-Icon dpmsg-IconClose"></i>
    </button>
  </div>
</div>