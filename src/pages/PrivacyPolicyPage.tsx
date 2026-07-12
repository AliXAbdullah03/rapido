import { LegalPage, LegalSection } from "../components/LegalPage";

export function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 12, 2026">
      <LegalSection title="Who we are">
        <p>
          RAPIDO is an emergency QR identity product operated by <strong>Bushra Tech</strong>. This
          Privacy Policy explains what information RAPIDO handles, how it is used, and the choices you
          have. Contact:{" "}
          <a href="mailto:ceo@bushratech.com" className="font-semibold text-primary hover:underline">
            ceo@bushratech.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Our privacy principle">
        <p>
          RAPIDO is designed to be <strong>privacy-first</strong>. Your emergency profile is meant to
          stay under your control. We do not sell your medical details or emergency contacts, and we
          do not use them for advertising.
        </p>
      </LegalSection>

      <LegalSection title="Information you provide">
        <p>Depending on how you use RAPIDO, you may provide:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Account details (such as name and email) if you register</li>
          <li>
            Emergency profile data (for example blood type, age, allergies, conditions, medications,
            medical notes, insurance or NHS identifiers, and preferences such as organ donor or DNR
            status)
          </li>
          <li>Emergency contact names, relationships, and phone numbers</li>
          <li>Country or region information used to show local emergency numbers</li>
          <li>Optional location data when you enable live location or map features</li>
          <li>Messages you send to RAPIDO support or the in-app assistant</li>
        </ul>
      </LegalSection>

      <LegalSection title="Information created when you use RAPIDO">
        <ul className="list-disc space-y-2 pl-5">
          <li>QR codes and related emergency identity payloads you generate</li>
          <li>Device and app diagnostics needed to keep the service reliable (for example crash or performance signals, where enabled)</li>
          <li>Basic server logs if you contact our APIs (such as timestamps and technical request metadata)</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide emergency profile, QR, sticker, and related safety features</li>
          <li>Show responders the details you chose to make available when your QR is scanned</li>
          <li>Support account access, sync, and offline readiness where applicable</li>
          <li>Improve reliability, security, and user experience</li>
          <li>Respond to support requests and legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection title="What responders see">
        <p>
          When someone scans your RAPIDO QR, they may see the emergency information you included in
          your profile—typically medical essentials and contacts you selected. You decide what to
          include. Do not put information in your profile that you are not willing to share in an
          emergency.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>We do not sell personal data. We may share information only when:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You direct RAPIDO to make it available via your QR or sharing features</li>
          <li>A service provider helps us operate RAPIDO under appropriate safeguards</li>
          <li>Required by law, regulation, or valid legal process</li>
          <li>Needed to protect rights, safety, or security in good faith</li>
        </ul>
      </LegalSection>

      <LegalSection title="Retention">
        <p>
          We keep information only as long as needed to provide RAPIDO, comply with law, resolve
          disputes, and enforce our terms. You may delete or update profile information in the app
          where those controls are available, or request help at{" "}
          <a href="mailto:ceo@bushratech.com" className="font-semibold text-primary hover:underline">
            ceo@bushratech.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use reasonable technical and organizational measures to protect information. No method
          of transmission or storage is perfectly secure. Please protect your device and account
          credentials.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          RAPIDO is not directed at children under 13 (or the minimum age required in your region).
          If you believe a child has provided personal information, contact us and we will take
          appropriate steps.
        </p>
      </LegalSection>

      <LegalSection title="International users">
        <p>
          RAPIDO may be used across regions. If data is processed in another country, we take steps
          appropriate to the context of the service and applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <ul className="list-disc space-y-2 pl-5">
          <li>Edit or remove emergency profile fields in the app</li>
          <li>Control what appears when your QR is scanned by limiting what you store</li>
          <li>Disable optional location features when not needed</li>
          <li>Contact us to ask questions or request account-related assistance</li>
        </ul>
      </LegalSection>

      <LegalSection title="This website">
        <p>
          The RAPIDO marketing website may collect basic technical data needed to operate downloads,
          forms, and site reliability. Waitlist or contact submissions you send (such as email) are
          used only to respond to you about RAPIDO.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          will change when we do. Continued use of RAPIDO after an update means you acknowledge the
          revised policy.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
