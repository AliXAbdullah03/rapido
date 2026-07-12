import { Link } from "react-router-dom";
import { LegalPage, LegalSection } from "../components/LegalPage";

export function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="July 12, 2026">
      <LegalSection title="Agreement">
        <p>
          These Terms of Service (“Terms”) govern your use of RAPIDO—the mobile app, related QR /
          emergency identity features, and this website—provided by <strong>Bushra Tech</strong>
          (“we”, “us”). By downloading, accessing, or using RAPIDO, you agree to these Terms. If you
          do not agree, do not use RAPIDO.
        </p>
        <p>
          Contact:{" "}
          <a href="mailto:ceo@bushratech.com" className="font-semibold text-primary hover:underline">
            ceo@bushratech.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What RAPIDO is">
        <p>
          RAPIDO helps you prepare emergency medical essentials and contacts so first responders or
          helpers can access them quickly by scanning a QR code. RAPIDO is a readiness and
          information tool. It does <strong>not</strong> replace emergency services, professional
          medical care, or official medical ID programs.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility">
        <p>
          You must be legally able to enter this agreement in your region. If you use RAPIDO on
          behalf of someone else (for example a family member), you confirm you have the right to
          provide and manage that information.
        </p>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide accurate emergency profile information and keep it updated</li>
          <li>Only include information you are allowed to share</li>
          <li>Keep your device, account, and QR placements reasonably secure</li>
          <li>Use RAPIDO lawfully and respectfully</li>
          <li>
            Understand that scanning parties see what you put in your profile—choose carefully
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Emergency use disclaimer">
        <p>
          In an emergency, outcomes depend on many factors outside our control—including network
          conditions, device state, scanner capability, and human response. RAPIDO may be unavailable
          or incomplete at any time. Always call local emergency services when needed. Do not rely
          solely on RAPIDO for life-critical decisions.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and downloads">
        <p>
          You may need an account for some features. You are responsible for activity under your
          credentials. Android APK downloads offered on this site are provided for convenience; you
          are responsible for enabling install permissions on your device and verifying you are
          downloading from this official RAPIDO / Bushra Tech site.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Misrepresent identity or emergency information in a harmful way</li>
          <li>Probe, abuse, or disrupt RAPIDO systems or other users</li>
          <li>Reverse engineer or copy RAPIDO except as allowed by law</li>
          <li>Use RAPIDO to harass, defraud, or violate others’ rights</li>
          <li>Upload malware or attempt unauthorized access</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          RAPIDO, including its name, branding, app, website, and related content, belongs to Bushra
          Tech or its licensors. You receive a limited, non-exclusive, non-transferable license to use
          RAPIDO for personal, lawful emergency-readiness purposes in line with these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          Our{" "}
          <Link to="/privacy" className="font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          explains how we handle information. By using RAPIDO, you also acknowledge that policy.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          RAPIDO may link to or rely on third-party services (for example maps, messaging, or app
          stores). Those services have their own terms and privacy practices. We are not responsible
          for third-party services we do not control.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of warranties">
        <p>
          RAPIDO is provided <strong>“as is”</strong> and <strong>“as available”</strong> without
          warranties of any kind, express or implied, including merchantability, fitness for a
          particular purpose, and non-infringement, to the fullest extent permitted by law. We do not
          warrant that RAPIDO will be uninterrupted, error-free, or always accessible offline or
          online.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Bushra Tech and its operators will not be liable for
          any indirect, incidental, special, consequential, or punitive damages, or any loss of data,
          profits, or goodwill, arising from your use of RAPIDO—including emergency situations where
          information was missing, delayed, incomplete, or unused. Our total liability for any claim
          relating to RAPIDO is limited to the greater of amounts you paid us for RAPIDO in the 12
          months before the claim (if any) or USD $50, except where liability cannot be limited by
          law.
        </p>
      </LegalSection>

      <LegalSection title="Indemnity">
        <p>
          You agree to defend and indemnify Bushra Tech against claims arising from your misuse of
          RAPIDO, your content, or your violation of these Terms or applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Suspension and termination">
        <p>
          We may suspend or end access to RAPIDO if you violate these Terms, if required for security
          or legal reasons, or if we discontinue the service. You may stop using RAPIDO at any time.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these Terms. The “Last updated” date will change when we do. Continued use
          after changes means you accept the updated Terms. If you do not agree, stop using RAPIDO.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws applicable to Bushra Tech’s principal place of
          business, without regard to conflict-of-law rules, unless mandatory consumer protections in
          your country say otherwise. Courts in that jurisdiction may hear disputes, subject to your
          local non-waivable rights.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For terms or product questions:{" "}
          <a href="mailto:ceo@bushratech.com" className="font-semibold text-primary hover:underline">
            ceo@bushratech.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
