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
    <div class="dpmsg-BubbleCol">
      <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
    </div>
    <div class="dpmsg-AvatarCol">
      <img src="/messenger-style/img/docs/avatar.png" alt="">
    </div>
  </div>
</div>
```

# Typing
```html @preview
<div class="dpmsg-MessageBubble">
  <div class="dpmsg-MessageBubbleRow is-outgoing">
    <div class="dpmsg-BubbleCol">
      <span class="dpmsg-BubbleItem is-typing">...</span>
    </div>
    <div class="dpmsg-AvatarCol">
      <img src="/messenger-style/img/docs/avatar.png" alt="">
    </div>
  </div>
</div>
```

# Notification
```html @preview
<span class="dpmsg-BubbleNotification is-joined">Nick Green joined the conversation (12.47pm)</span>
<span class="dpmsg-BubbleNotification is-ended">John Doe ended the conversation (13.02pm)</span>
```

# Message Bubble example
```html @preview
<div class="dpmsg-Block">
  <div class="dpmsg-BlockWrapper" style="max-height: 700px">
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
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">Hi, need help with a ticket please.</span>
      </div>
      <div class="dpmsg-AvatarCol">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
    </div>
    <span class="dpmsg-BubbleNotification is-joined">Nick Green joined the conversation (12.47pm)</span>
    <div class="dpmsg-MessageBubbleRow is-incoming">
      <div class="dpmsg-AvatarCol">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">Our mission is to help businesses and organizations like yours provide their customers with better support across every communication channel.</span>
      </div>
    </div>
    <div class="dpmsg-MessageBubbleRow is-outgoing">
      <div class="dpmsg-BubbleCol">
        <span class="dpmsg-BubbleItem">It’s AW874KGY9056.</span>
      </div>
      <div class="dpmsg-AvatarCol">
        <img src="/messenger-style/img/docs/avatar.png" alt="">
      </div>
    </div>
    <span class="dpmsg-BubbleNotification is-ended">John Doe ended the conversation (13.02pm)</span>
    <div class="dpmsg-MessagePrompt">
      <div class="dpmsg-PromptHeader">
        <img src="/messenger-style/img/docs/prompt-icon.png" alt="">
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
  </div>
  <div class="dpmsg-WrapTextarea">
    <span class="dpmsg-MainTextarea" contenteditable="true"></span>
    <div class="dpmsg-TextareaActions dp-Level">
      <div class="dp-LevelLeft">
        <a href="#">
          <img src="/messenger-style/img/docs/smile-icon.png" alt="">
        </a>
        <a href="#">
          <img src="/messenger-style/img/docs/attach-icon.png" alt="">
        </a>  
      </div>
      <div class="dp-LevelRight">
        <a href="#">
          <img src="/messenger-style/img/docs/send-icon.png" alt="">
        </a>
      </div>
    </div>
  </div>
</div>
```