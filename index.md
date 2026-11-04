---
layout: home
title: "CRX"
description: "CRX is an iOS medication app. Add medications by search or scan, get dose reminders, log symptoms, and run AI-assisted interaction checks. No ads, no data sales."
---

<section class="wrap hero">
  <div>
    <h1>Medication management, made calm.</h1>
    <p class="hero-lede">CRX tracks your doses, reminds you at the times you set, and keeps a record you can bring to your doctor or pharmacist.</p>
    {% if site.app.status == "coming_soon" %}
    <div class="hero-action">
      <a class="btn" href="mailto:{{ site.email }}?subject=CRX%20Launch%20Notification">Email me when CRX launches</a>
    </div>
    <p class="hero-note">Coming soon to the App Store for iPhone and iPad. We only use your email to tell you about the launch.</p>
    {% else %}
    <div class="hero-action">
      <a class="btn" href="{{ site.app.store_url }}" target="_blank" rel="noopener">Download on the App Store</a>
    </div>
    {% endif %}
  </div>

  <div class="today" data-dose-demo role="group" aria-label="Try logging a dose with sample medications">
    <div class="today-band">
      <strong>Morning</strong>
      <span data-dose-count aria-live="polite">0 of 3 taken</span>
    </div>
    <ul>
      <li>
        <div class="today-med"><strong>Levothyroxine</strong><span>50 mcg at 7:00 AM</span></div>
        <button type="button"><span data-dose-label>Mark taken</span><span class="visually-hidden">: Levothyroxine</span></button>
      </li>
      <li>
        <div class="today-med"><strong>Lisinopril</strong><span>10 mg at 8:00 AM</span></div>
        <button type="button"><span data-dose-label>Mark taken</span><span class="visually-hidden">: Lisinopril</span></button>
      </li>
      <li>
        <div class="today-med"><strong>Metformin</strong><span>500 mg at 8:00 AM</span></div>
        <button type="button"><span data-dose-label>Mark taken</span><span class="visually-hidden">: Metformin</span></button>
      </li>
    </ul>
    <p class="today-note">Try it. These are sample medications, and nothing is saved.</p>
  </div>
</section>

<section class="moment">
  <div class="wrap moment-row">
    <div class="moment-copy">
      <h2>When a dose is due</h2>
      <p>CRX reminds you at each time you set, and logging a dose takes one tap. The Today view shows what's next and what's done.</p>
      <ul>
        <li>Daily, weekly, interval, and as-needed schedules</li>
        <li>Home Screen widgets and a Lock Screen Live Activity</li>
        <li>Siri shortcuts for logging without opening the app</li>
        <li>Your list, schedule, and logging work without a connection</li>
      </ul>
    </div>
    <figure class="phone">
      <img src="/assets/images/app/today.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX Today screen with four morning doses marked taken, and Metformin next at 8:00 PM with Taken and Skip buttons.">
    </figure>
  </div>
</section>

<section class="moment moment--flip">
  <div class="wrap moment-row">
    <div class="moment-copy">
      <h2>When you fill a prescription</h2>
      <p>Add a medication in one of three ways: scan the label on the bottle, scan the barcode on the box, or search the drug database. Check what CRX fills in, then set your times.</p>
      <ul>
        <li>Search runs on RxNorm, from the U.S. National Library of Medicine</li>
        <li>Vitamins and supplements are matched against the NIH Dietary Supplement Label Database</li>
      </ul>
    </div>
    <figure class="phone">
      <img src="/assets/images/app/add.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX Add Medication screen with three choices: Scan Prescription Label, Scan Barcode, and Enter Manually.">
    </figure>
  </div>
</section>

<section class="moment">
  <div class="wrap moment-row">
    <div class="moment-copy">
      <h2>When you need to check a pill or a refill</h2>
      <p>Each medication keeps its details together, so you can check the pill in your hand against your record and see when it's time to refill.</p>
      <ul>
        <li>Color, shape, and imprint from FDA label data, plus up to six of your own photos</li>
        <li>A reminder a week before your supply runs out, based on your days' supply</li>
        <li>Expiry dates, and saved pharmacies you can call with a tap</li>
      </ul>
    </div>
    <figure class="phone">
      <img src="/assets/images/app/details.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX detail screen for Lisinopril showing pill color, shape, and imprint, a daily 8:00 schedule, and Supply and Refill options.">
    </figure>
  </div>
</section>

<section class="moment">
  <div class="wrap moment-solo">
    <h2>When you want to check a combination</h2>
    <p>CRX uses a cloud AI model to check your list for potential drug interactions, food interactions, and conflicts with allergies you've recorded, then flags anything worth raising with your doctor or pharmacist.</p>
    <p>Before the first check, CRX shows what it sends and lets you accept or turn the checks off. The <a href="/privacy/">Privacy Policy</a> lists exactly what is sent.</p>
    <p class="notice">AI checks may not catch every interaction, and a missing warning does not mean a combination is safe. Always talk to your doctor or pharmacist before you change how you take a medication.</p>
  </div>
</section>

<section class="moment moment--flip">
  <div class="wrap moment-row moment-row--pair">
    <div class="moment-copy">
      <h2>When you want to note how you feel</h2>
      <p>Recording a symptom takes a few taps. The Insights view then charts your doses and your symptoms side by side, over 7, 30, or 90 days.</p>
      <p>If you turn on Apple Health, CRX can write your doses there and read vitals like blood pressure, glucose, weight, and heart rate.</p>
    </div>
    <div class="phone phone-pair">
      <img src="/assets/images/app/checkin.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX Today screen asking how you are today, with symptom buttons including pain, nausea, fatigue, headache, and dizziness.">
      <img src="/assets/images/app/insights.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX Insights screen showing 98 percent adherence over 30 days, a 12-day streak, and a daily adherence chart.">
    </div>
  </div>
</section>

<section class="moment">
  <div class="wrap moment-row">
    <div class="moment-copy">
      <h2>Before your appointment</h2>
      <p>The provider report puts your medications, dose history, refills, symptoms, and the drug safety analysis into one PDF for your doctor or pharmacist. You can also export your dose history as a CSV file.</p>
    </div>
    <figure class="phone">
      <img src="/assets/images/app/report.webp" width="660" height="1434" loading="lazy" decoding="async" alt="The CRX Provider Report screen with a date range of the past 30 days, template choices, and a Generate PDF button.">
    </figure>
  </div>
</section>

<section class="facts-band">
  <div class="wrap facts-band-row">
    <h2>Made to be easy to read and use</h2>
    <dl class="facts">
      <div><dt>VoiceOver</dt><dd>Controls and medication details are labeled for VoiceOver.</dd></div>
      <div><dt>Dynamic Type</dt><dd>Text scales with your iOS setting, up through the accessibility sizes.</dd></div>
      <div><dt>Tap targets</dt><dd>Built to Apple's 44-point minimum.</dd></div>
      <div><dt>Seven languages</dt><dd>English, German, Spanish, French, Italian, Dutch, and Portuguese (Brazil).</dd></div>
    </dl>
  </div>
</section>

<section class="moment">
  <div class="wrap facts-band-row">
    <h2>Your health data stays yours</h2>
    <dl class="facts">
      <div><dt>No ads, no data sales</dt><dd>CRX shows no ads, uses no advertising identifiers, does no cross-app tracking, and never sells your health information.</dd></div>
      <div><dt>Upfront about AI</dt><dd>Some AI features use the cloud. The <a href="/privacy/">Privacy Policy</a> lists what each one sends and the choices you have.</dd></div>
      <div><dt>Delete anytime</dt><dd>Delete your account right in the app, and your data is removed from our servers.</dd></div>
    </dl>
  </div>
</section>

{% if site.app.status == "coming_soon" %}
<section class="wrap closing">
  <h2>Hear when CRX launches</h2>
  <p>Send us an email and we'll let you know when CRX reaches the App Store. We only use your email for that.</p>
  <a class="btn" href="mailto:{{ site.email }}?subject=CRX%20Launch%20Notification">Email me when CRX launches</a>
</section>
{% endif %}
