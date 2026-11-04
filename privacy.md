---
layout: page
description: "What CRX collects, where it goes, which outside services process it, and the choices you have."
title: Privacy Policy
permalink: /privacy/
---

<div class="prose">

    <p><em>Last updated: November 4, 2026</em></p>
    <p><em>This page is the hosted, expanded version of the privacy summary (version 2026.07.23) that users review and accept inside CRX. The documents you accept in the app govern your use of CRX.</em></p>

    <h2>Overview</h2>
    <p>CRX is a medication management app made by Insoc ("we", "our", "us"). This policy explains what information CRX collects, why, where it goes, and the choices you have.</p>
    <p><strong>The short version: your health data is used to run the app's features for you. We do not sell your data, we do not show ads, and we do not track you across other apps or websites.</strong></p>

    <h2>Information We Collect</h2>
    <h3>Information you provide</h3>
    <ul>
      <li><strong>Account information</strong>: your name and email address (or your Apple ID email if you use Sign in with Apple), and an account identifier.</li>
      <li><strong>Health information you enter</strong>: medications, dosages, schedules, dose history, symptoms, allergies, notes, and photos of your medications.</li>
      <li><strong>Pharmacy information</strong>: pharmacy names and contact details you choose to save.</li>
    </ul>

    <h3>Information collected automatically</h3>
    <ul>
      <li><strong>Crash and diagnostic data</strong>: sent to Google Firebase Crashlytics so we can find and fix bugs.</li>
      <li><strong>Usage and performance data</strong>: app-interaction, performance, and device data, including a device identifier, sent to Firebase Analytics and Performance Monitoring and used only to improve the app. This data is not linked to your account and is not used for advertising, and CRX does not use the advertising identifier (IDFA).</li>
    </ul>

    <h3>What we do not collect</h3>
    <ul>
      <li>No advertising identifiers and no cross-app or cross-site tracking</li>
      <li>No location data</li>
      <li>No data brokers and no ad networks. CRX shows no ads.</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To run the app: store your medications, send reminders, track doses and symptoms, and sync your data across your devices</li>
      <li>To provide AI features, as described below</li>
      <li>To look up medication details in public drug databases</li>
      <li>To fix crashes and improve reliability</li>
      <li>To respond when you contact support</li>
    </ul>
    <p><strong>We never sell your personal or health information, and we never use it for advertising.</strong></p>

    <h2>Where Your Data Is Stored and Who Processes It</h2>
    <p>Your data lives on your device and is synced to our cloud backend so you can access it across devices. The services that process data on our behalf are:</p>
    <ul>
      <li><strong>Supabase</strong> hosts our backend: account sign-in (including Sign in with Apple), the database that syncs your medications, doses, symptoms, and profile, storage for medication photos, and our server functions. Photo storage is access-restricted to your account.</li>
      <li><strong>Google Firebase</strong> provides Crashlytics (crash reports), Performance Monitoring, Analytics (usage data), and Remote Config (app settings we can change remotely). No advertising features are used.</li>
      <li><strong>OpenRouter and Anthropic</strong> process cloud AI requests, as described below.</li>
      <li><strong>Apple</strong> provides Sign in with Apple, Apple Health (below), Apple Intelligence, and Private Cloud Compute (below).</li>
    </ul>

    <h2>Public Drug Databases</h2>
    <p>When you search for a medication, scan a barcode, or view medication details, the search term, barcode number, or drug identifier is sent to public databases: RxNorm and DailyMed (U.S. National Library of Medicine), openFDA (U.S. Food and Drug Administration), the NIH Dietary Supplement Label Database, and Open Food Facts. CRX does not include your name, email, or account in these requests.</p>

    <h2>AI Features</h2>
    <h3>What cloud AI receives</h3>
    <p>Cloud AI requests go through our own server-side proxy to OpenRouter, which routes them to an Anthropic Claude model. No AI key ships in the app. The proxy checks your account and counts your requests to enforce a rate limit, and it does not forward your name, email, or account to OpenRouter. We do not sell this data or use it for advertising.</p>
    <ul>
      <li><strong>Medication safety checks</strong>: your medication names, strengths, dosage forms, categories, and ingredients, plus your recorded allergies and any reactions you noted. CRX shows a privacy notice before the first check.</li>
      <li><strong>Medication explanations</strong>: the medication's name, strength, and form, when you ask CRX to explain a medication.</li>
      <li><strong>Insights summaries</strong>: which vital is being summarized, average readings for on-time and late doses, sample sizes, and a confidence level. Individual readings are not sent.</li>
    </ul>

    <h3>Your choices</h3>
    <p>Safety checks, medication explanations, and Insights summaries use cloud AI by default. The privacy notice before your first safety check lets you accept or turn safety checks off. Three current limits apply:</p>
    <ul>
      <li>This version has no setting to switch these features to on-device analysis.</li>
      <li>This version has no setting to change your safety-check choice after the first notice.</li>
      <li>Turning off safety checks does not turn off medication explanations or Insights summaries.</li>
    </ul>
    <p>If CRX runs one of these features with on-device Apple Intelligence and it isn't available on your device, the feature falls back to cloud AI.</p>

    <h3>Apple Intelligence and Private Cloud Compute</h3>
    <p>Requests handled by on-device Apple Intelligence stay on your device. On iOS 27, the default Automatic AI processing setting may send the text of AI requests, such as medication names and symptom summaries, to Apple's Private Cloud Compute. According to Apple, this data is cryptographically protected, is not stored, is not accessible to Apple, and is used only to fulfill your request. On iOS 27 you can choose On-Device Only in <strong>Profile → AI Models</strong>. Photos and scans are always processed on your device and are never sent to Private Cloud Compute.</p>

    <h2>Apple Health (HealthKit)</h2>
    <p>If you enable Apple Health, CRX writes your dose records to HealthKit and can read vitals such as blood pressure, glucose, weight, and heart rate for Insights, under your control. Health data accessed through HealthKit is used only to provide these features and is never used for advertising or sold, as required by Apple's HealthKit rules. You can turn this off at any time in the app or in iOS Settings.</p>

    <h2>Camera, Photos, and Notifications</h2>
    <p>CRX asks for camera access to scan prescription labels and barcodes and to photograph your medications, and for photo library access to let you choose medication photos. Label text is read on your device. Notification permission is used for medication reminders and can be revoked at any time in iOS Settings.</p>

    <h2>Data Retention and Deletion</h2>
    <p>We keep your data for as long as you have an account, so the app can keep working for you. You can:</p>
    <ul>
      <li><strong>Edit or delete individual records</strong> (medications, doses, symptoms, photos) at any time in the app.</li>
      <li><strong>Delete your entire account</strong> in the app (Profile → Account → Delete Account). Account deletion removes your data from our servers.</li>
    </ul>
    <p>Crash and usage data already sent to Google is not linked to your account, and is deleted or de-identified according to Google's retention schedule.</p>

    <h2>Your Rights</h2>
    <p>You can access, correct, export, or delete your information at any time through the app. Depending on where you live, including under the California Consumer Privacy Act (CCPA) and Washington's My Health My Data Act, you may have additional rights to know, correct, or delete personal and consumer health data, and to be free from discrimination for exercising those rights. We honor these rights for all users. To exercise any right you can't complete in the app, email <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
    <p>We do not sell or share your personal information for targeted advertising, so there is nothing to opt out of.</p>

    <h2>Children</h2>
    <p>CRX requires users to be at least 18 years old. The app is not directed at children, and we do not knowingly collect information from anyone under 18.</p>

    <h2>Security</h2>
    <p>Data syncs over encrypted connections, and server-side access rules restrict your records to your account.</p>

    <h2>Changes to This Policy</h2>
    <p>If we make a material change, we will notify you in the app and ask you to review and accept the updated policy, and we will update this page.</p>

    <h2>Contact</h2>
    <p>Questions about privacy? Contact us at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>

  </div>
