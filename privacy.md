---
layout: page
title: Privacy Policy
permalink: /privacy/
---

<div class="container">
  <div style="max-width: 720px; margin: 0 auto;">

    <p><em>Last updated: July 17, 2026</em></p>
    <p><em>This policy is consistent with the in-app privacy summary (version 2026.07.02) that users review and accept inside CRX. The documents you accept in the app govern your use of CRX; this page is the hosted, expanded version of the same policy.</em></p>

    <h2>Overview</h2>
    <p>CRX is a medication management app made by Insoc ("we", "our", "us"). This policy explains what information CRX collects, why, where it goes, and the choices you have.</p>
    <p><strong>The short version: your health data is used only to run the app for you. We do not sell your data, we do not show ads, and we do not track you across other apps or websites.</strong></p>

    <h2>Information We Collect</h2>
    <h3>Information you provide</h3>
    <ul>
      <li><strong>Account information</strong> — your name and email address (or your Apple ID email if you use Sign in with Apple), and an account identifier.</li>
      <li><strong>Health information you enter</strong> — medications, dosages, schedules, dose history, symptoms, allergies, notes, and photos of your medications.</li>
      <li><strong>Pharmacy information</strong> — pharmacy names and contact details you choose to save.</li>
      <li><strong>Caregiver connections</strong> — the people you invite or approve as caregivers, and the permission level you give them.</li>
    </ul>

    <h3>Information collected automatically</h3>
    <ul>
      <li><strong>Crash and diagnostic data</strong> — sent to Google Firebase Crashlytics so we can find and fix bugs.</li>
      <li><strong>Basic usage analytics</strong> — anonymous app-interaction and device data via Firebase Analytics, used only to improve the app. This data is not linked to your identity, is not used for advertising, and CRX does not use the advertising identifier (IDFA).</li>
    </ul>

    <h3>What we do not collect</h3>
    <ul>
      <li>No advertising identifiers and no cross-app or cross-site tracking</li>
      <li>No location data</li>
      <li>No data brokers, no ad networks — CRX shows no ads</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <ul>
      <li>To run the app: store your medications, send reminders, track doses and symptoms, and sync your data across your devices</li>
      <li>To share your information with caregivers — only the ones you explicitly approve</li>
      <li>To run AI drug-safety checks, if you enable them</li>
      <li>To fix crashes and improve reliability</li>
      <li>To respond when you contact support</li>
    </ul>
    <p><strong>We never sell your personal or health information, and we never use it for advertising.</strong></p>

    <h2>Where Your Data Is Stored and Who Processes It</h2>
    <p>Your data lives on your device and is synced to our cloud backend so you can access it across devices and share it with caregivers you authorize. The services that process data on our behalf are:</p>
    <ul>
      <li><strong>Supabase</strong> — hosts our backend: account sign-in (including Sign in with Apple), the database that syncs your medications, doses, symptoms, and profile, real-time caregiver alerts, and storage for medication photos. Photo storage is access-restricted so only your account (and caregivers you approve) can reach your files.</li>
      <li><strong>Google Firebase</strong> — Crashlytics (crash reports) and Firebase Analytics (anonymous usage data). No advertising features are used.</li>
      <li><strong>OpenRouter / Anthropic</strong> — if you enable AI drug-safety analysis with the cloud provider, your medication names, strengths, and allergies are sent through our own server-side proxy to OpenRouter, which routes the request to an Anthropic Claude model for analysis. The proxy is authenticated and rate-limited, no AI key ships in the app, and this data is used only to produce your safety report — never sold or used to train ads. You can instead choose the on-device option, or turn the feature off entirely.</li>
      <li><strong>Apple</strong> — Sign in with Apple, App Store billing for CRX Plus, and Apple Health (below). On-device AI features use Apple Intelligence and do not leave your device.</li>
    </ul>

    <h2>Apple Health (HealthKit)</h2>
    <p>If you enable Apple Health sync, CRX writes dose records and can read and write vitals through HealthKit, under your control. Health data accessed through HealthKit is used only to provide these features, stays in your Apple Health store, and is never used for advertising or sold — as required by Apple's HealthKit rules. You can turn sync off at any time in the app or in iOS Settings.</p>

    <h2>Caregiver Sharing</h2>
    <p>Caregiver sharing is entirely opt-in. Your health information is shared with a caregiver only after you explicitly approve their access. You choose one of three permission levels controlling what a caregiver can see or do, and you can revoke a caregiver's access at any time in Settings. Caregiver actions on your data are recorded in an audit log you can review.</p>

    <h2>SMS Invitations</h2>
    <p>If you invite a caregiver by text message, the invitation is sent only when you initiate it. Invites are rate-limited, and recipients can opt out of further messages by replying STOP.</p>

    <h2>Camera and Notifications</h2>
    <p>CRX asks for camera access to scan prescription labels, barcodes, and QR invite codes, and to photograph your medications. Scanning is processed on-device. Notification permission is used for medication reminders and can be revoked at any time in iOS Settings.</p>

    <h2>Data Retention and Deletion</h2>
    <p>We keep your data for as long as you have an account, so the app can keep working for you. You can:</p>
    <ul>
      <li><strong>Edit or delete individual records</strong> (medications, doses, symptoms, photos) at any time in the app.</li>
      <li><strong>Delete your entire account</strong> in the app (Profile → Settings). Account deletion removes your data from our servers.</li>
    </ul>

    <h2>Your Rights</h2>
    <p>You can access, correct, export, or delete your information at any time through the app. Depending on where you live — including under the California Consumer Privacy Act (CCPA) and Washington's My Health My Data Act — you may have additional rights to know, correct, or delete personal and consumer health data, and to be free from discrimination for exercising those rights. We honor these rights for all users. To exercise any right you can't complete in the app, email <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>
    <p>We do not sell or share your personal information for targeted advertising, so there is nothing to opt out of.</p>

    <h2>Children</h2>
    <p>CRX requires users to be at least 18 years old. The app is not directed at children, and we do not knowingly collect information from anyone under 18.</p>

    <h2>Security</h2>
    <p>Data syncs over encrypted connections, and server-side access rules restrict your records to your account and the caregivers you approve. You can additionally protect the app with Face ID or Touch ID.</p>

    <h2>Changes to This Policy</h2>
    <p>If we make a material change, we will notify you in the app and ask you to review and accept the updated policy, and we will update this page.</p>

    <h2>Contact</h2>
    <p>Questions about privacy? Contact us at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.</p>

  </div>
</div>
