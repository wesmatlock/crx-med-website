---
layout: home
title: "CRX"
description: "CRX is an iOS medication management app built for clarity, calm, and confidence. Track doses, get smart reminders, check drug interactions, and share safely with caregivers — private by design."
---

<section class="hero" id="hero">
  <div class="hero-content">
    <img
      src="{{ '/assets/images/app-icon.png' | relative_url }}"
      alt="CRX App Icon"
      class="hero-app-icon animate-fade-in-up"
      width="120"
      height="120"
    >

    {% if site.app.status == "coming_soon" %}
    <div class="coming-soon-label">
      <span class="pulse-dot" aria-hidden="true"></span>
      Coming Soon to iOS
    </div>
    {% endif %}

    <h1 class="hero-title">CRX</h1>
    <p class="hero-subtitle">Medication Management</p>
    <p class="hero-description">
      {{ site.app.tagline }}
    </p>

    <div class="hero-stats">
      <div class="hero-stat-card reveal">
        <span class="stat-icon" aria-hidden="true">💊</span>
        <span class="stat-value">Every Dose, Tracked</span>
        <span class="stat-label">Reminders, widgets, Live Activity</span>
      </div>
      <div class="hero-stat-card reveal reveal-delay-1">
        <span class="stat-icon" aria-hidden="true">♿️</span>
        <span class="stat-value">Accessibility First</span>
        <span class="stat-label">Designed for everyone</span>
      </div>
      <div class="hero-stat-card reveal reveal-delay-2">
        <span class="stat-icon" aria-hidden="true">🔒</span>
        <span class="stat-value">Privacy Focused</span>
        <span class="stat-label">No ads, no tracking, no data sales</span>
      </div>
    </div>

    <div class="notify-card reveal">
      <h3>Be the first to know</h3>
      <p>CRX is coming to the App Store soon. Email us and we'll let you know when it launches.</p>
      <a href="mailto:{{ site.email }}?subject=CRX Launch Notification" class="btn btn-primary">Notify Me</a>
      <p class="privacy-note">No spam. We only use your email to tell you about the launch.</p>
    </div>
  </div>
</section>

<section class="features-section" id="features">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Features</span>
      <h2 class="section-title gradient">Built for your health journey</h2>
      <p class="section-subtitle">
        Everything you need to manage medications with confidence — for yourself, or for someone you care for.
      </p>
    </div>

    <div class="features-grid">
      <div class="card-feature reveal">
        <span class="card-icon" aria-hidden="true">⏰</span>
        <h3 id="scheduling">Dose Tracking &amp; Smart Reminders</h3>
        <p>Daily, weekly, interval, and as-needed schedules with reminders at the times you choose. The Today view shows what's next, what's later, and what's done.</p>
      </div>
      <div class="card-feature reveal reveal-delay-1">
        <span class="card-icon" aria-hidden="true">📱</span>
        <h3>Widgets &amp; Live Activity</h3>
        <p>See your next dose on the Home Screen and log it from the Lock Screen — with interactive widgets and a Live Activity dose timer.</p>
      </div>
      <div class="card-feature reveal reveal-delay-2">
        <span class="card-icon" aria-hidden="true">🛡️</span>
        <h3 id="safety">AI Drug-Safety Checks</h3>
        <p>Optional AI analysis flags potential drug-drug, drug-allergy, and food interactions across your whole list, in plain language. Informational only — always confirm with your doctor or pharmacist.</p>
      </div>
      <div class="card-feature reveal reveal-delay-3">
        <span class="card-icon" aria-hidden="true">👨‍👩‍👧</span>
        <h3>Caregiver Sharing</h3>
        <p>Invite someone you trust to see your schedule, get alerts, or help log doses. You choose their permission level and can revoke access anytime. Premium caregiver features come with CRX Plus.</p>
      </div>
      <div class="card-feature reveal">
        <span class="card-icon" aria-hidden="true">📷</span>
        <h3>Label &amp; Barcode Scanning</h3>
        <p>Point your camera at a prescription label or package barcode and CRX fills in the medication details — less typing, fewer errors.</p>
      </div>
      <div class="card-feature reveal reveal-delay-1">
        <span class="card-icon" aria-hidden="true">📊</span>
        <h3>Symptoms &amp; Insights</h3>
        <p>Log how you feel, track adherence over time, spot patterns, and export a summary PDF for your next doctor visit.</p>
      </div>
    </div>
  </div>
</section>

<section class="screenshots-section" id="screenshots">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Preview</span>
      <h2 class="section-title">Screenshots coming soon</h2>
      <p class="section-subtitle">
        A clean, calm interface — screenshots arrive with the App Store launch.
      </p>
    </div>

    <div class="screenshots-placeholder-grid">
      <div class="screenshot-placeholder reveal">
        <span class="placeholder-icon" aria-hidden="true">💊</span>
        <span class="placeholder-label">Today View</span>
        <p class="placeholder-desc">Your day's doses at a glance</p>
      </div>
      <div class="screenshot-placeholder reveal reveal-delay-1">
        <span class="placeholder-icon" aria-hidden="true">🛡️</span>
        <span class="placeholder-label">Safety Report</span>
        <p class="placeholder-desc">Interaction checks in plain language</p>
      </div>
      <div class="screenshot-placeholder reveal reveal-delay-2">
        <span class="placeholder-icon" aria-hidden="true">👨‍👩‍👧</span>
        <span class="placeholder-label">Caregiver View</span>
        <p class="placeholder-desc">Support someone you love</p>
      </div>
      <div class="screenshot-placeholder reveal reveal-delay-3">
        <span class="placeholder-icon" aria-hidden="true">📊</span>
        <span class="placeholder-label">Insights</span>
        <p class="placeholder-desc">Adherence and symptom patterns</p>
      </div>
    </div>
  </div>
</section>

<section class="accessibility-section" id="accessibility">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Accessibility is not an afterthought</h2>
      <p class="section-subtitle">
        CRX is designed for everyone — especially older adults and anyone managing several medications. Accessibility is built into every screen.
      </p>
    </div>

    <div class="accessibility-grid">
      <div class="accessibility-card reveal">
        <span class="card-icon" aria-hidden="true">🔊</span>
        <h3>VoiceOver Ready</h3>
        <p>Full VoiceOver support across every screen. Navigate your medications without looking.</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-1">
        <span class="card-icon" aria-hidden="true">Aa</span>
        <h3>Dynamic Type</h3>
        <p>Text scales from small to accessibility sizes. Every label and button adapts.</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-2">
        <span class="card-icon" aria-hidden="true">🌍</span>
        <h3>7 Languages</h3>
        <p>English, German, Spanish, French, Italian, Dutch, and Portuguese (Brazil).</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-3">
        <span class="card-icon" aria-hidden="true">🎯</span>
        <h3>Large Touch Targets</h3>
        <p>Generously sized tap targets make CRX easy to use with tremor and dexterity challenges.</p>
      </div>
    </div>
  </div>
</section>

<section class="privacy-section" id="privacy">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Privacy</span>
      <h2 class="section-title gradient">Your health data stays yours</h2>
      <p class="section-subtitle">
        Medication data is deeply personal. CRX uses it only to run the app for you — nothing else.
      </p>
    </div>

    <div class="privacy-features">
      <div class="privacy-feature-item reveal">
        <span class="item-icon" aria-hidden="true">🚫</span>
        <div>
          <h4>No Ads, No Tracking, No Data Sales</h4>
          <p>CRX shows no ads, uses no advertising identifiers, and never sells your health information.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-1">
        <span class="item-icon" aria-hidden="true">🤝</span>
        <div>
          <h4>Sharing Only With Your Consent</h4>
          <p>Caregivers see your information only after you approve them — with the permission level you choose, revocable anytime.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-2">
        <span class="item-icon" aria-hidden="true">📵</span>
        <div>
          <h4>Works Offline</h4>
          <p>View your schedule and log doses without a connection. Your data syncs securely when you're back online.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-3">
        <span class="item-icon" aria-hidden="true">🗑️</span>
        <div>
          <h4>Delete Anytime</h4>
          <p>Delete your account right in the app, and your data is removed from our servers. Optional AI safety checks can run on-device with Apple Intelligence, or be turned off entirely.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-coming-soon">
  <div class="container">
    <h2>Be the first to know when CRX launches</h2>
    <p>The medication manager built for clarity, calm, and everyone — coming soon to the App Store.</p>
    <a href="mailto:{{ site.email }}?subject=CRX Early Access" class="btn-white">
      Get Notified
    </a>
    <p style="margin-top: 2rem; font-size: 0.85rem; opacity: 0.85; max-width: 640px; margin-left: auto; margin-right: auto;">
      CRX is not a medical device and does not provide medical advice. Always consult your physician or pharmacist about your medications. In an emergency, call 911. Reminders depend on your device and are not guaranteed.
    </p>
  </div>
</section>
