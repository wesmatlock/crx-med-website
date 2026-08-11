---
layout: home
title: "CRX"
description: "CRX is an iOS medication management app built for clarity, calm, and confidence. Track doses, get smart reminders, check drug interactions, and share safely with caregivers — private by design."
---

<section class="hero" id="hero">
  <div class="hero-content">
    <img
      src="{{ '/assets/images/app-icon-240.png' | relative_url }}"
      alt="CRX App Icon"
      class="hero-app-icon"
      width="120"
      height="120"
      fetchpriority="high"
    >

    {% if site.app.status == "coming_soon" %}
    <div class="coming-soon-label">
      <span class="pulse-dot" aria-hidden="true"></span>
      Coming Soon to iOS
    </div>
    {% endif %}

    <h1 class="hero-title">Medication management, made calm.</h1>
    <p class="hero-description">
      CRX is an iOS app that tracks every dose, reminds you at the right time, checks for drug interactions, and keeps caregivers in the loop — private by design.
    </p>

    <ul class="hero-pills reveal" role="list">
      <li><span aria-hidden="true">💊</span> Every dose, tracked</li>
      <li><span aria-hidden="true">👨‍👩‍👧</span> Caregivers in the loop</li>
      <li><span aria-hidden="true">🔒</span> No ads, no tracking</li>
    </ul>

    <div class="notify-card reveal">
      <p class="notify-title">Be the first to know</p>
      <p>CRX is coming to the App Store soon. Email us and we'll let you know when it launches.</p>
      <a href="mailto:{{ site.email }}?subject=CRX Launch Notification" class="btn btn-primary">Notify Me at Launch</a>
      <p class="privacy-note">No spam. We only use your email to tell you about the launch.</p>
    </div>
  </div>
</section>

<section class="screenshots-section" id="screenshots">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Preview</span>
      <h2 class="section-title">See CRX at a glance</h2>
      <p class="section-subtitle">
        Illustrative previews — App Store screenshots arrive at launch.
      </p>
    </div>

    <div class="mockups-grid">
      <figure class="app-mockup reveal">
        <div class="device-frame" aria-hidden="true">
          <div class="device-screen" data-screen="today">
            <div class="screen-status"><span>9:41</span><span>●●●</span></div>
            <span class="screen-title">Today</span>
            <div class="screen-card">
              <div class="screen-row">
                <span class="med-dot"></span>
                <span class="screen-med-name">Lisinopril 10 mg</span>
                <span class="screen-chip chip-time">8:00 AM</span>
              </div>
              <div class="screen-take-btn">Take</div>
            </div>
            <span class="screen-section-label">Morning</span>
            <div class="screen-card screen-row">
              <span class="screen-med-name">Metformin 500 mg</span>
              <span class="screen-chip chip-success">✓ Taken</span>
            </div>
            <span class="screen-section-label">Evening</span>
            <div class="screen-card screen-row">
              <span class="screen-med-name">Atorvastatin 20 mg</span>
              <span class="screen-chip chip-time">9:00 PM</span>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="mockup-title">Today View</span>
          <span class="mockup-desc">Your day's doses at a glance</span>
        </figcaption>
      </figure>

      <figure class="app-mockup reveal reveal-delay-1">
        <div class="device-frame" aria-hidden="true">
          <div class="device-screen" data-screen="safety">
            <div class="screen-status"><span>9:41</span><span>●●●</span></div>
            <span class="screen-title">Safety Report</span>
            <div class="screen-card screen-card-success">
              <span class="screen-med-name">✓ No critical interactions</span>
              <span class="screen-sub">8 medications checked</span>
            </div>
            <div class="screen-card">
              <div class="screen-row">
                <span class="screen-med-name">Metformin</span>
                <span class="screen-chip chip-warning">Take with food</span>
              </div>
              <span class="screen-sub">Food helps absorption</span>
            </div>
            <div class="screen-card">
              <div class="screen-row">
                <span class="screen-med-name">Ibuprofen</span>
                <span class="screen-chip chip-warning">Check timing</span>
              </div>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="mockup-title">Safety Report</span>
          <span class="mockup-desc">Interaction checks in plain language</span>
        </figcaption>
      </figure>

      <figure class="app-mockup reveal reveal-delay-2">
        <div class="device-frame" aria-hidden="true">
          <div class="device-screen" data-screen="caregiver">
            <div class="screen-status"><span>9:41</span><span>●●●</span></div>
            <span class="screen-title">Caring For</span>
            <div class="screen-card screen-row">
              <span class="screen-avatar">E</span>
              <span class="screen-med-name">Eleanor<span class="screen-sub">Sharing with you</span></span>
            </div>
            <div class="screen-ring"><span>86%</span></div>
            <span class="screen-big-label">This week's adherence</span>
            <div class="screen-card screen-row">
              <span class="screen-med-name">Missed-dose alerts</span>
              <span class="screen-chip chip-success">On</span>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="mockup-title">Caregiver View</span>
          <span class="mockup-desc">Support someone you love — with CRX Plus</span>
        </figcaption>
      </figure>

      <figure class="app-mockup reveal reveal-delay-3">
        <div class="device-frame" aria-hidden="true">
          <div class="device-screen" data-screen="insights">
            <div class="screen-status"><span>9:41</span><span>●●●</span></div>
            <span class="screen-title">Insights</span>
            <span class="screen-big-stat">94%</span>
            <span class="screen-big-label">30-day adherence</span>
            <div class="screen-bars">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="screen-card screen-row">
              <span class="screen-med-name">Streak</span>
              <span class="screen-chip chip-success">12 days</span>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="mockup-title">Insights</span>
          <span class="mockup-desc">Adherence and symptom patterns</span>
        </figcaption>
      </figure>
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

    <div class="feature-mini-grid">
      <div class="feature-mini">
        <span aria-hidden="true">🌅</span>
        <div><strong>Today View</strong> Your whole day at a glance</div>
      </div>
      <div class="feature-mini">
        <span aria-hidden="true">🏪</span>
        <div><strong>Pharmacy &amp; Refills</strong> Refill reminders a week before you run out</div>
      </div>
      <div class="feature-mini">
        <span aria-hidden="true">❤️</span>
        <div><strong>Apple Health</strong> Optional HealthKit sync, under your control</div>
      </div>
      <div class="feature-mini">
        <span aria-hidden="true">📄</span>
        <div><strong>Doctor Visit Export</strong> Medication summary PDF for appointments</div>
      </div>
      <div class="feature-mini">
        <span aria-hidden="true">📵</span>
        <div><strong>Works Offline</strong> View and log without a connection</div>
      </div>
      <div class="feature-mini">
        <span aria-hidden="true">🌍</span>
        <div><strong>7 Languages</strong> Plus full VoiceOver support</div>
      </div>
    </div>

    <p class="features-more"><a href="/features/">See all features →</a></p>
  </div>
</section>

<section class="plus-section">
  <div class="container">
    <div class="notify-card plus-card reveal">
      <p class="notify-title">Free for you. CRX Plus for the people who help.</p>
      <p>CRX is free to download and use for managing your own medications. CRX Plus is an optional subscription that unlocks premium caregiver features — sharing with someone you trust, missed-dose alerts, and caregiver notes. Managed and billed through your Apple ID, cancel anytime in Settings. Pricing will be announced at launch.</p>
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
          <h3>No Ads, No Tracking, No Data Sales</h3>
          <p>CRX shows no ads, uses no advertising identifiers, and never sells your health information.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-1">
        <span class="item-icon" aria-hidden="true">🤝</span>
        <div>
          <h3>Sharing Only With Your Consent</h3>
          <p>Caregivers see your information only after you approve them — with the permission level you choose, revocable anytime.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-2">
        <span class="item-icon" aria-hidden="true">📵</span>
        <div>
          <h3>Works Offline</h3>
          <p>View your schedule and log doses without a connection. Your data syncs securely when you're back online.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-3">
        <span class="item-icon" aria-hidden="true">🗑️</span>
        <div>
          <h3>Delete Anytime</h3>
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
    <a href="mailto:{{ site.email }}?subject=CRX Launch Notification" class="btn-white">
      Notify Me at Launch
    </a>
  </div>
</section>
