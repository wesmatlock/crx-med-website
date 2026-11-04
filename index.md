---
layout: home
title: "CRX"
description: "CRX is an iOS medication app. Add medications by search or scan, get dose reminders, log symptoms, and run AI-assisted interaction checks. No ads, no data sales."
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
      CRX is an iOS app that tracks your doses, reminds you at the times you set, and checks your list for potential drug interactions.
    </p>

    <ul class="hero-pills reveal" role="list">
      <li><span aria-hidden="true">💊</span> Every dose, tracked</li>
      <li><span aria-hidden="true">📷</span> Scan a label or barcode</li>
      <li><span aria-hidden="true">🔒</span> No ads, no cross-app tracking</li>
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
            <span class="screen-title">Medication Safety</span>
            <div class="screen-card">
              <span class="screen-med-name">8 medications checked</span>
              <span class="screen-sub">Review with your pharmacist</span>
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
          <span class="mockup-title">Medication Safety</span>
          <span class="mockup-desc">AI-assisted checks in plain language</span>
        </figcaption>
      </figure>

      <figure class="app-mockup reveal reveal-delay-2">
        <div class="device-frame" aria-hidden="true">
          <div class="device-screen" data-screen="add">
            <div class="screen-status"><span>9:41</span><span>●●●</span></div>
            <span class="screen-title">Add Medication</span>
            <div class="screen-card">
              <span class="screen-med-name">Scan Prescription Label</span>
              <span class="screen-sub">Take a photo of the bottle label</span>
            </div>
            <div class="screen-card">
              <span class="screen-med-name">Scan Barcode</span>
              <span class="screen-sub">Medication or supplement packaging</span>
            </div>
            <div class="screen-card">
              <span class="screen-med-name">Enter Manually</span>
              <span class="screen-sub">Search or type the name</span>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="mockup-title">Add a Medication</span>
          <span class="mockup-desc">Scan it, or search the drug database</span>
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
        One place to keep track of your medications, your doses, and how you feel.
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
        <p>Optional AI analysis flags potential drug-drug, drug-allergy, and food interactions across your list, in plain language. It may not catch every interaction, and a missing warning does not mean a combination is safe. Always check with your doctor or pharmacist.</p>
      </div>
      <div class="card-feature reveal reveal-delay-3">
        <span class="card-icon" aria-hidden="true">🔍</span>
        <h3>Pill Details</h3>
        <p>See the color, shape, and imprint of each pill from FDA label data, and add your own photos, so you can check the pill in your hand against your record.</p>
      </div>
      <div class="card-feature reveal">
        <span class="card-icon" aria-hidden="true">📷</span>
        <h3>Label &amp; Barcode Scanning</h3>
        <p>Point your camera at a prescription label or package barcode and CRX fills in the medication details for you to review.</p>
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
        <div><strong>7 Languages</strong> Plus VoiceOver support</div>
      </div>
    </div>

    <p class="features-more"><a href="/features/">See all features →</a></p>
  </div>
</section>

<section class="accessibility-section" id="accessibility">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Accessibility is not an afterthought</h2>
      <p class="section-subtitle">
        CRX is designed with older adults and anyone managing several medications in mind.
      </p>
    </div>

    <div class="accessibility-grid">
      <div class="accessibility-card reveal">
        <span class="card-icon" aria-hidden="true">🔊</span>
        <h3>VoiceOver Ready</h3>
        <p>Controls and medication details are labeled for VoiceOver.</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-1">
        <span class="card-icon" aria-hidden="true">Aa</span>
        <h3>Dynamic Type</h3>
        <p>Text scales with your iOS setting, up through the accessibility sizes.</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-2">
        <span class="card-icon" aria-hidden="true">🌍</span>
        <h3>7 Languages</h3>
        <p>English, German, Spanish, French, Italian, Dutch, and Portuguese (Brazil).</p>
      </div>
      <div class="accessibility-card reveal reveal-delay-3">
        <span class="card-icon" aria-hidden="true">🎯</span>
        <h3>Large Touch Targets</h3>
        <p>Tap targets are built to Apple's 44-point minimum.</p>
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
        Medication data is deeply personal. CRX uses it to run the app for you, and never sells it or uses it for advertising.
      </p>
    </div>

    <div class="privacy-features">
      <div class="privacy-feature-item reveal">
        <span class="item-icon" aria-hidden="true">🚫</span>
        <div>
          <h3>No Ads, No Cross-App Tracking, No Data Sales</h3>
          <p>CRX shows no ads, uses no advertising identifiers, and never sells your health information.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-1">
        <span class="item-icon" aria-hidden="true">🤝</span>
        <div>
          <h3>Upfront About AI</h3>
          <p>Before the first safety check, CRX shows what it sends and lets you turn the check off. Some AI features use the cloud, and the <a href="/privacy/">Privacy Policy</a> lists exactly what they send.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-2">
        <span class="item-icon" aria-hidden="true">📵</span>
        <div>
          <h3>Works Offline</h3>
          <p>View your schedule and log doses without a connection. Your data syncs over encrypted connections when you're back online.</p>
        </div>
      </div>
      <div class="privacy-feature-item reveal reveal-delay-3">
        <span class="item-icon" aria-hidden="true">🗑️</span>
        <div>
          <h3>Delete Anytime</h3>
          <p>Delete your account right in the app, and your data is removed from our servers.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-coming-soon">
  <div class="container">
    <h2>Be the first to know when CRX launches</h2>
    <p>A calm, clear medication manager, coming soon to the App Store.</p>
    <a href="mailto:{{ site.email }}?subject=CRX Launch Notification" class="btn-white">
      Notify Me at Launch
    </a>
  </div>
</section>
