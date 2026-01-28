
import React from 'react';

const PageWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-brand-purple mb-12 text-center">{title}</h1>
    <div className="prose prose-indigo prose-sm sm:prose-base max-w-none text-gray-600 leading-relaxed space-y-8">
      {children}
    </div>
  </div>
);

export const About: React.FC = () => (
  <PageWrapper title="About Us">
    <p>
      <span className="font-bold text-brand-purple">ESGCars.com</span> is a platform that sells New Cars, Tokunbo Cars, and Nigerian Used Cars. 
      Users who buy our new cars and foreign used (Tokunbo) cars get a <span className="font-bold text-indigo-900">Free Comprehensive Insurance, Free Vehicle Tracker, Free Fire Extinguisher</span> and much more.
    </p>
    <h2 className="text-2xl font-bold text-brand-purple mt-8 mb-4">Why People Buy Cars on ESGCars.com</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Free Motor Comprehensive Insurance</li>
      <li>Free Vehicle Tracker</li>
      <li>Free Fire Extinguisher</li>
      <li>Verified Dealers & Clear Documentation</li>
    </ul>
  </PageWrapper>
);

export const Privacy: React.FC = () => (
  <PageWrapper title="Privacy Policy">
    <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8">
      <p className="text-indigo-900 font-medium">
        Thank you for choosing to be part of our community at ESG Cars (“hereinafter referred to “We”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at <a href="mailto:support@esgcars.com.ng" className="underline font-bold">support@esgcars.com.ng</a>.
      </p>
    </section>

    <div className="space-y-10">
      <section>
        <p>
          When you visit our website (App) <a href="https://esgcars.com.ng" className="text-brand-purple hover:underline">https://esgcars.com.ng</a> (“Site”) and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">What Information do we collect?</h2>
        <h3 className="text-lg font-bold text-brand-purple mb-2">PERSONAL INFORMATION YOU DISCLOSE TO US</h3>
        <p className="mb-4">
          We collect personal information that you provide to us such as name, address, contact information, passwords and security data, payment information, and social media login data.
        </p>
        <div className="grid gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-1">NAME AND CONTACT DATA</h4>
            <p className="text-sm">We collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-1">CREDENTIALS</h4>
            <p className="text-sm">We collect passwords, password hints, and similar security information used for authentication and account access.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-1">PAYMENT DATA</h4>
            <p className="text-sm">We collect data necessary to process your payment if you make purchases. All payment data is stored by our payment processor.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Information automatically collected</h2>
        <p>
          Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our websites. This information is primarily needed to maintain the security and operation of our Sites, and for our internal analytics and reporting purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Information collected through our Apps</h2>
        <p>
          We may collect information regarding your geo-location, mobile device, push notifications, and Facebook permissions when you use our apps.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">How Do We Use Your Information?</h2>
        <p className="mb-4">
          We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To fulfill and manage your orders.</li>
          <li>To post testimonials with your consent.</li>
          <li>To protect our Sites and prevent fraud.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Will Your Information Be shared With Anyone?</h2>
        <p>
          We only share information with your consent, to comply with laws, protect your rights, or fulfill business obligations. This includes sharing with vendors, consultants, affiliates, and business partners.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Do We Use Cookies And Other Tracking Technologies?</h2>
        <p>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific details are outlined in our Cookie Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">How Long Do We Keep Your Information?</h2>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, typically not longer than 2 years past the termination of your account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Do We Collect Information From Minors?</h2>
        <p>
          We do not knowingly collect data from or market to persons under 18 years of age. If you become aware of any data we have collected from persons under age 18, please contact us.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">What Are Your Privacy Rights?</h2>
        <p>
          You have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">How Can You Contact Us About This Policy?</h2>
        <p>
          If you have questions or comments about this policy, email us at <a href="mailto:support@esgcars.com.ng" className="text-brand-purple font-bold hover:underline">support@esgcars.com.ng</a>.
        </p>
      </section>
    </div>
  </PageWrapper>
);

export const Cookies: React.FC = () => (
  <PageWrapper title="Cookie Policy">
    <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8">
      <h2 className="text-lg font-bold text-brand-purple mb-2">Cookies Policy and Ad Choices</h2>
      <p className="text-indigo-900">
        This Cookies Policy describes how ESGCars.com (“we”, “our”, “us”) uses Cookies and similar technologies. For more information on our general data privacy practices, please see the Privacy Policy here.
      </p>
    </section>

    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Cookies</h2>
        <p>
          Cookies are small pieces of data that are stored on your computer, mobile phone, or other device when you first visit a page. We use cookies, web beacons, locally shared objects (sometimes called “flash cookies”), mobile identifiers and similar technologies (“Cookies”) to help us recognize you on the Platform, enhance your user experience, understand usage of the Platform, and show you relevant advertising.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">What types of Cookies do we use?</h2>
        <p>
          We use three types of Cookies on the Platform: “session cookies,” “persistent cookies,” And “third-party cookies”. Session Cookies are temporary Cookies that remain on your device until you leave the Platform. A persistent Cookie remains on your device for much longer until you manually delete it. Third-party cookies are used by us and third parties to serve ads that are relevant to your interests.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">What are Cookies used for?</h2>
        <p>
          Cookies transmit information about you and your use of the Platform, such as your browser type, search preferences, job titles, data relating to advertisements that have been displayed to you or that you have clicked on, and the date and time of your use.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4 uppercase">We use cookies for things like:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-bold">Preferences and Features</span> – To enable features and provide personalized content.</li>
          <li><span className="font-bold">Advertising</span> – To deliver, evaluate and improve advertising based on your interests.</li>
          <li><span className="font-bold">Analytics and Performance</span> – To analyse how our visitors use the Platform and monitor site performance.</li>
          <li><span className="font-bold">Ad Choices and Managing Cookies</span> – To provide personalized, interest-based advertising.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">How We Work with Third-Party Ad Partners</h2>
        <p>
          When we work with our Ad Partners to serve you personalized advertising, we do not share information with them that they can use to identify you as a specific individual unless you have instructed us to do so. We work with third parties, such as Google Analytics, to provide analytics services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Opting Out of Cookies</h2>
        <p className="mb-4">
          ESGCars.com Cookies: We use Cookies that are necessary for us to provide the services you use and you cannot opt-out of these Cookies on the Platform. You are able to disable placement of some Cookies by setting your browser to decline cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Ad Partner Cookies</h2>
        <p>
          You are able to opt out of other third-party advertiser and ad network placement of Cookies or targeted advertising generally by visiting links provided by the Network Advertising Initiative or Digital Advertising Alliance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Do Not Track Signals</h2>
        <p>
          We do not currently respond to ‘do not track’ signals and similar settings or mechanisms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">EEA Resident Rights</h2>
        <p>
          If you are a resident of the European Economic Area, you have specific data protection rights, including the right to access, correct, update or request deletion of your personal information. Contact us at <a href="mailto:info@esgcars.com" className="text-brand-purple font-bold">info@esgcars.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">How Long We Keep Your Personal Information</h2>
        <p>
          We keep your personal information only so long as we need it to provide the Platform to you and fulfill the purposes described in this Policy. Retention periods are based on legally mandated periods and operational needs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Security Safeguards</h2>
        <p>
          We employ physical, electronic, and managerial measures to safeguard the information we collect online. However, no company can fully eliminate security risks.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">International Transfer</h2>
        <p>
          Information about you that we collect is hosted on servers inside and outside the United States. By using our Platform, you consent to the transfer and processing of information in the United States.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Updates to Our Privacy or Cookie Policies</h2>
        <p>
          ESGCars.com reserves the right to change how we handle the information we collect at any time. These Policies will be updated promptly to reflect such changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-brand-purple mb-4">Contact Us</h2>
        <p>
          If you have any questions or suggestions regarding these policies, please contact us at <a href="mailto:info@esgcars.com" className="text-brand-purple font-bold hover:underline">info@esgcars.com</a>.
        </p>
      </section>
    </div>
  </PageWrapper>
);

export const Copyright: React.FC = () => (
  <PageWrapper title="Copyright Policy">
    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Copyright Infringement Policy</h2>
      <p>ESGCARS takes alleged copyright infringement very seriously. If you believe that any content on ESGCARS infringes your copyright, you may submit a notification to have the offending content removed or access to it disabled. Below is our policy and procedure for handling such claims.</p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">What kinds of works are protected?</h2>
      <p>Copyright protects original works of authorship including, but not limited to, literary works, music, images, audio, video, software, and other tangible forms of creative expression.</p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">When does ESGCARS remove content?</h2>
      <p className="mb-3">ESGCARS will remove or disable access to content if:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>The content is claimed to infringe copyright under applicable laws;</li>
        <li>The complaint is submitted in good faith by the copyright owner or someone authorized to act on their behalf;</li>
        <li>The notification includes sufficient detail for ESGCARS to locate the material on the site;</li>
        <li>The URL or location of the infringing material is clearly specified;</li>
        <li>The commenter provides contact information so that ESGCARS can respond;</li>
        <li>The notifier affirms, under penalty of perjury (or the equivalent under applicable law), that the information is accurate and that they are the owner or authorized to act for the owner of an exclusive right allegedly infringed.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">How to submit a copyright notification</h2>
      <p className="mb-4">If you believe your copyright has been infringed, please send a written notice to ESGCARS containing all of the following information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your name, address, telephone number, and email address;</li>
        <li>A description of the copyrighted work that you claim has been infringed;</li>
        <li>A description of the location (e.g. URL) of the material on ESGCARS that you claim is infringing;</li>
        <li>A statement by you that you have a good faith belief that use of the material is not authorized by the copyright owner;</li>
        <li>A statement that the information in your claim is accurate, and under penalty of perjury, that you are the copyright owner (or authorized to act on behalf of the owner); and</li>
        <li>A digital or physical signature of the copyright owner or person authorized to act on their behalf.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Counter-Notice Procedure</h2>
      <p className="mb-3">If you believe content was removed or disabled in error, you may send a counter-notice containing:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Your name, address, telephone number, and email address;</li>
        <li>A description of the material that was removed or disabled, and the location where it appeared before removal;</li>
        <li>A statement under penalty of perjury that you have a good faith belief the material was removed or disabled by mistake or misidentification;</li>
        <li>A statement consenting to the jurisdiction of your local court or applicable jurisdiction;</li>
        <li>Your signature (physical or electronic).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Repeat Infringers</h2>
      <p>ESGCARS will terminate access for users who are found to be repeat offenders under copyright law or under ESGCARS policy.</p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Notification Agent</h2>
      <p>To submit a notification of claimed infringement, you may contact us at:</p>
      <p><strong>Email:</strong> <a href="mailto:support@esgcars.com.ng" className="text-brand-purple font-bold">support@esgcars.com.ng</a></p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Governing Law</h2>
      <p>This policy is governed by the laws of Lagos State and the Federal Republic of Nigeria.</p>
    </section>

    <section>
      <h2 className="text-xl font-bold text-brand-purple mb-4">Miscellaneous</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>If any provision of this policy is found invalid under applicable law, that provision shall be removed without affecting the rest of the policy.</li>
        <li>ESGCARS may revise this policy at any time.</li>
      </ul>
      <p className="mt-8 text-sm text-gray-400">Last updated: October 2025</p>
    </section>
  </PageWrapper>
);

export const Terms: React.FC = () => (
  <PageWrapper title="Terms of Service">
    <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8">
      <h2 className="text-lg font-bold text-indigo-900 mb-2 uppercase tracking-wide">Applicability</h2>
      <p className="text-indigo-900">
        You, the consumer, by accessing this Website, have agreed to be bound by the terms and conditions set out below.
      </p>
    </section>

    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">1. GOVERNING LAW</h3>
        <p>
          You agree that in the event of any dispute of any nature that may arise between you and us, these terms and conditions shall be governed by and construed exclusively in accordance with the laws of Lagos State and the Federal Republic of Nigeria.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">2. DISCLAIMER</h3>
        <p>
          You understand and accept that to the fullest possible extent permitted in law, we accept no responsibility for any loss or damage or injury caused to you or your hardware or software whether we cause such loss or injury directly or indirectly.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">3. COPYRIGHT AND PLAGIARISM</h3>
        <p>
          You acknowledge and will respect all such copyright and other intellectual property rights we own or may own in the look and feel of the Website and its contents including any sounds, music, text, graphics, data, stills, photographs, and moving images. Such intellectual property rights shall include all registered and unregistered intellectual property rights of any type or nature including trademarks and community marks. You further agree that you will not infringe our copyright by any method or manner now known or as may exist in the future. Other than the user-generated content, under these Terms, and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">4. RESTRICTIONS</h3>
        <p className="mb-3">You are specifically restricted from all of the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>selling, sublicensing, and/or otherwise commercializing any Website material;</li>
          <li>using this Website in any way that is or may be damaging to this Website;</li>
          <li>using this Website in any way that impacts user access to this Website;</li>
          <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
          <li>engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website;</li>
          <li>using this Website to engage in any advertising or marketing.</li>
        </ul>
        <p className="mt-4 italic">
          We provide most of this website on an open-access basis. However, we may restrict access in some certain areas of this Website from you and may further restrict access by you to any areas of this Website, at any time, at absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain such access codes confidentiality as well.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">5. USER-GENERATED CONTENT</h3>
        <p className="mb-3">
          User-generated content shall refer to any audio, video text, images, or other material you choose to display on this Website. By displaying Your Content, you grant a non-exclusive, worldwide irrevocable, sub-licensable license to the website and ESGCars to use, reproduce, adapt, publish, translate and distribute such content in any and all media.
        </p>
        <p className="mb-3">
          By uploading said content, you represent and warrant that you are the original owner of the content and that such content does not infringe any third-party’s rights.
        </p>
        <p>
          Such content shall not be defamatory or offensive, untrue, racially/tribally offensive, incite racial/tribal hatred, or otherwise, breach an individual’s right to privacy or human rights under Nigerian Law. We reserve the right to remove any user-generated content from this Website at any time without notice.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">6. NO WARRANTIES</h3>
        <p>
          This Website is provided “as is,” with all faults, and express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">7. INDEMNIFICATION</h3>
        <p>
          You hereby indemnify to the fullest extent from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">8. SEVERABILITY</h3>
        <p>
          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">9. VARIATION OF TERMS</h3>
        <p>
          ESGCars is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">10. ASSIGNMENT</h3>
        <p>
          ESGCars is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">11. RIGHTS OF THIRD PARTIES</h3>
        <p>
          This agreement is between you and ESGCars and not any third party, and this agreement is not intended to confer any rights of any nature upon any party other than you and ESGCars and ESGCars legal associates.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-brand-purple mb-3">12. ENTIRE AGREEMENT</h3>
        <p>
          These Terms constitute the entire agreement between ESGCars and you in relation to your use of this Website and supersede all prior agreements and understandings. If you have any questions or comments regarding this Cookie Notice or our Privacy policy, please contact us at: <a href="mailto:support@esgcars.com.ng" className="text-brand-purple font-semibold hover:underline">support@esgcars.com.ng</a>.
        </p>
      </section>
    </div>
  </PageWrapper>
);

export const Safety: React.FC = () => (
  <PageWrapper title="Safety Tips">
    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-8">
      <h2 className="text-2xl font-bold text-brand-purple mb-2">Best Deals Are Safe Deals</h2>
      <p className="text-emerald-700 font-medium">
        At ESGCARS, we care about your safety. While we can’t be there at every stage of your communication with sellers, these tips will help you stay safe and avoid unpleasant situations.
      </p>
    </div>

    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-brand-purple mb-6 border-b border-gray-100 pb-2">General Safety Tips</h2>
        <div className="grid gap-8">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Check Feedback ⭐</h3>
            <p>Always check a seller’s feedback before making a deal. Reliable sellers usually have positive reviews. If you’ve had any experience with a seller, please share your feedback to help others too.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Avoid Sending Prepayments 💸 ⛔</h3>
            <p>Meet sellers face-to-face in a public place or request payment on delivery. Always inspect the item’s quality before paying.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Ensure That the Packed Item Is the One You’ve Inspected 📦 ✅</h3>
            <p>Inspect and confirm the item before paying. Avoid situations where the item could be swapped after inspection.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Never Give Out Financial Information 💳 ✋</h3>
            <p>Beware of scams involving fake payment services or requests for transfer fees. Never share your PIN or passwords with anyone.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-brand-purple mb-2">Use Common Sense 👀</h3>
            <p>Avoid deals that seem too good to be true — like unrealistically low prices or promises of quick profits.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-brand-purple mb-6 border-b border-gray-100 pb-2">Special Safety Tips</h2>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h3 className="text-lg font-bold text-brand-purple mb-4">If You’re Looking for a Car 🚙</h3>
          <ul className="list-disc pl-6 space-y-3 font-medium text-indigo-900">
            <li>Avoid paying inspection fees.</li>
            <li>Inspect the car thoroughly before making payment.</li>
            <li>Do a test drive and, if possible, bring a mechanic to check for hidden damages.</li>
            <li>Conduct a background check on the car before paying.</li>
            <li>Check all documents and only pay when you’re fully satisfied.</li>
          </ul>
          <p className="mt-6 text-sm italic text-indigo-700">These simple steps help you ensure that your deal is secure and trustworthy.</p>
        </div>
      </section>
    </div>
  </PageWrapper>
);
