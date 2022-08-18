import React from "react";
import { useRouter } from "next/router";

function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="px-5 py-5 md:px-14 leading-7 md:leading-10">
      <div className="mb-10 md:leading-10 flex justify-center items-center">
        <p className="font-semibold md:text-2xl lg:text-3xl md:font-bold text-pry-color">
          Privacy Policy
        </p>
      </div>

      {/* PREAMBLE  */}
      <div>
        <div className="mb-5">
          <p className="font-semibold">THIRD-PARTY PRIVACY POLICY</p>
        </div>

        <div className="md:leading-10 leading-7">
          <p className="text-justify">
            Niish Cloud is committed to collecting, maintaining, and using
            personal information about our clients and business contacts
            responsibly. The provisions of data protection laws in Nigeria
            imposes strict conditions on the firm. The firm has made a
            commitment through its internal policies to apply a consistent
            standard across the firm when collecting, using, and managing
            personal information. <br />
            This privacy notice explains how we may collect, use and disclose
            information about clients and other business and firm contacts, and
            describes the rights you may have in respect of your own personal
            information. Please read it carefully.
          </p>
        </div>
      </div>

      {/* TOC  */}
      <div>
        <div className="mt-8 mb-3">
          <p className="font-semibold">CONTENT</p>
        </div>

        <ol className="ml-5 md:leading-10 leading-7">
          <li
            onClick={() => {
              router.push("#one");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Introduction
          </li>
          <li
            onClick={() => {
              router.push("#two");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Purpose of this Privacy Policy
          </li>
          <li
            onClick={() => {
              router.push("#three");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Who is the Controller for the personal data processed?
          </li>
          <li
            onClick={() => {
              router.push("#four");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Changes to your personal data
          </li>
          <li
            onClick={() => {
              router.push("#five");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            The information we collect and how we use it
          </li>
          <li
            onClick={() => {
              router.push("#six");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            How your personal data is collected
          </li>
          <li
            onClick={() => {
              router.push("#seven");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            How we use your data
          </li>
          <li
            onClick={() => {
              router.push("#eight");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Processing your personal data for recruitment activities
          </li>
          <li
            onClick={() => {
              router.push("#nine");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Service providers
          </li>
          <li
            onClick={() => {
              router.push("#ten");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Keeping your information up to date
          </li>
          <li
            onClick={() => {
              router.push("#eleven");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Marketing and exercising your right to opt-out of marketing
          </li>
          <li
            onClick={() => {
              router.push("#twelve");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Third party marketing
          </li>
          <li
            onClick={() => {
              router.push("#thirteen");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            With whom we share personal data
          </li>
          <li
            onClick={() => {
              router.push("#fourteen");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Data security
          </li>
          <li
            onClick={() => {
              router.push("#fifteen");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Data retention
          </li>
          <li
            onClick={() => {
              router.push("#sixteen");
            }}
            className="pl-5 cursor-pointer hover:text-pry-color"
            type="I"
          >
            {" "}
            Your rights
          </li>
        </ol>
      </div>

      {/* INTRODUCTION   */}
      <div>
        <div className="mt-10 mb-3" id="one">
          <p className="font-semibold">1. &nbsp; &nbsp; INTRODUCTION</p>
        </div>

        <p className="text-justify">
          Niish Cloud provides this privacy policy (this “Privacy Policy”) to
          inform users about our policies and procedures regarding the
          collection, use, processing, deletion, security, and disclosure of
          personal data and information that is subject to protection under
          applicable data protection, data privacy and data security laws,
          including the Nigerian Data Protection Regulation (NDPR) (such data
          and information collectively, “Personal Data”) received from users of
          the website owned and operated by Niish Cloud, including those found
          at https://www.farmsolhub.com.ng; and received from other persons or
          entities that have entered into written agreements with us that
          expressly reference this Privacy Policy (as applicable).
          <br />
          This privacy policy applies to the processing of personal data by
          Niish Cloud in connection with any: “Client Supplier”: provision of
          products and services by Niish Cloud to actual and prospective
          clients;
          <br />
          “Supplier Services”: provision of products and services to Niish Cloud
          by suppliers or service providers;
          <br />
          “Visitors Services”: provision by Niish Cloud of facilities, including
          conference rooms, local area network (for instance, Wifi) and other
          relevant facilities and services to visitors to any Niish Cloud
          offices; and
          <br />
          “Recruitment Activities”: provision of the personal data of a
          candidate or individual (whether by such candidate or individual or by
          a third party) for a position at Niish Cloud other than through Niish
          Cloud&apos;s usual recruitment process.
          <br />
          References in this notice to “you” or “your” are references to
          individuals whose personal data Niish Cloud processes in connection
          with client services, supplier services, or visitor services. For the
          avoidance of doubt:
          <br />
        </p>
        <ul className="ml-5">
          <li type="disc">
            any reference in this policy to our “clients” or “suppliers”
            includes their employees or other staff whose personal details we
            process;
          </li>

          <li type="disc">
            this privacy notice also applies to FARMSOLHUB&apos;s processing of
            personal data of individuals who could be (or could be the employees
            or staff of) transaction counterparties or rival bidders to, or
            litigants in legal proceedings involving, our actual or prospective
            clients; and
          </li>

          <li type="disc">
            if you have provided your personal data to FARMSOLHUB for
            recruitment activities (whether directly or through a third party
            this notice is only designed to provide you with information about
            how we will process your personal data up to the point that you
            apply for a position or placement with FARMSOLHUB . Details of the
            processing undertaken for recruitment activities are set out in
            Clause 8. If you have any questions about the processing of your
            personal data for recruitment purposes, please contact
            farmsolhub.com.ng
          </li>
        </ul>
        <p>
          FARMSOLHUB may from time to time update this privacy policy by posting
          an updated version of the Privacy Policy to the Website. The date on
          which this Privacy Policy was last updated is set forth above. Your
          use of the Website after any updated version is posted means that you
          accept and understand such updated Privacy Policy. In addition, the
          Website makes use of cookies as described in further detail below.
        </p>
      </div>

      {/* TWO  */}
      <div>
        <div className="mt-10 mb-3" id="two">
          <p className="font-semibold">
            2. &nbsp; &nbsp; PURPOSE OF THIS PRIVACY POLICY
          </p>
        </div>

        <p className="md:leading-10 leading-7 text-justify">
          This notice aims to give you information about how FARMSOLHUB collects
          and processes your personal data. It is important that you read this
          notice together with any other notices we may provide on specific
          occasions when we are collecting or processing your personal data, so
          that you are fully aware of how and why we are using your personal
          data. This notice supplements the other notices and is not intended to
          override them.
          <br />
          This notice can be accessed on our website but is not our website
          privacy notice or cookie policy. Our website privacy notice and cookie
          policy are accessible from the privacy section of our website.
        </p>
      </div>

      {/* THREE    */}
      <div>
        <div className="mt-10 mb-3" id="three">
          <p className="font-semibold">
            3. &nbsp; &nbsp;WHO IS THE CONTROLLER FOR THE PERSONAL DATA
            PROCESSED?
          </p>
        </div>

        <p className="md:leading-10 leading-7 text-justify">
          A “controller” is a person or organization who alone or jointly
          determines the purposes for which, and the manner in which, any
          personal data is, or is likely to be, processed. This notice is issued
          on behalf of FARMSOLHUB as controller. Unless we notify you otherwise
          FARMSOLHUB is the controller for your personal data. <br /> <br />
          Our Data Protection Officer (DPO) oversees compliance with data
          protection within FARMSOLHUB . If you have any questions about this
          notice, including any requests to exercise your rights, please contact
          our Data protection Officer using the contact details set out below:{" "}
          <br />
          Email: farmsolhub.com.ng
        </p>
      </div>

      {/* FOUR  */}
      <div>
        <div className="mt-10 mb-3" id="four">
          <p className="font-semibold">
            4. &nbsp; &nbsp;CHANGES TO YOUR PERSONAL DATA
          </p>
        </div>

        <p className="md:leading-10 leading-7 text-justify">
          It is important that the personal data we hold about you is accurate
          and current. Please keep us informed if your personal data changes
          during your relationship with us. If you wish to update your personal
          data, please contact your relationship Counsel or the person you
          usually deal with at the firm. You can also contact the firm&apos;s Data
          Protection Officer at farmsolhub.com.ng
        </p>
      </div>

      {/* FIVE  */}
      <div>
        <div className="mt-10 mb-3" id="five">
          <p className="font-semibold">
            5. &nbsp; &nbsp;THE INFORMATION WE COLLECT AND HOW WE USE IT
          </p>
        </div>

        <p className="md:leading-10 leading-7 text-justify">
          Personal data includes any information about an individual from which
          that person can be identified. It does not include personal data where
          the identity has been removed (anonymous data). FARMSOLHUB may use
          your personal information for a variety of purposes, as outlined in
          the following sections. FARMSOLHUB is committed to collecting and
          using only the personal information that is necessary for the
          provision of legal services to our clients; to establish and/or
          maintain its business relationship with business and/or firm contacts;
          to respond to your requests and inquiries, and to make individuals
          aware of and keep them informed of opportunities, services and events
          which it reasonably considers may be of interest to them and/or which
          they have otherwise confirmed their preference to receive from the
          firm. In the past 12 months, FARMSOLHUB has collected the following
          categories of personal information:
        </p>

        <ul className="ml-5">
          <li type="disc">
            Identity Data”: including your first name, middle names, maiden
            name, last name, marital status, title, date of birth, passport
            number, photographic identification and gender;
          </li>
          <li type="disc">
            “Contact Data”: including your billing address, delivery address,
            email address and telephone number;
          </li>
          <li type="disc">
            “Account Information”: including security-related information such
            as usernames and passwords, authentication methods and roles,
            service-related information, and similar data.
          </li>
          <li type="disc">
            “Financial Data”: including your bank account and payment card
            details;
          </li>
          <li type="disc">
            “Services Data”: including details about payments to and from you
            and other details of services you have purchased from us, or we have
            purchased from you;
          </li>
          <li type="disc">
            “Usage Data”: includes information about your use of our website,
            our client knowledge portal, our local area networking facilities
            (including WiFi) and similar electronic services. Additional
            information about personal data we process based on your usage of
            our website is available in the privacy notice for our website
            (which can be accessed from the privacy section of our website;
          </li>
          <li type="disc">
            “Technical Data”: includes information collected when you access our
            website, your internet protocol (IP) address, your login data,
            browser type and version, time zone setting and location, browser
            plug-in types and versions, operating system and platform and other
            technology on the devices you are using;
          </li>
          <li type="disc">
            “Marketing and Communications Data”: including your marketing and
            communication preferences. We also track when you receive and read
            marketing communications from us and which of our events you attend,
            which information we use to improve our marketing services, provide
            you with more relevant information and improve the quality of our
            marketing materials. Additional information about the personal data
            we process in connection with marketing is included with the
            marketing communications we send you. If you participate in Zoom,
            Microsoft Teams or similar online meeting, event, web conference or
            video conference, the content of the call or meeting (video and
            audio) may be recorded by FARMSOLHUB . Recordings retained by the
            firm may be used for legitimate business purposes. <br /> Events{" "}
            <br />
            If you attend an event that is run by or in association with the
            firm (whether online or in person), we will collect contact details
            as part of event registration. We may also request a delivery
            address (which may be your home address) for the purpose of sending
            a gift or other item to those attending the event. <br />
            Where an event is run in association with a partner organization or
            hosted at an external venue, we may need to share your personal
            details with the partner, event organizer or venue. This will be
            made clear to you before you sign up for the event. Only the minimum
            information will be shared as necessary for the purposes of running
            the event. <br />
            If the event is run in association with a partner organization, they
            will be responsible for informing you about any marketing they may
            wish to undertake and obtaining your consent where necessary. If the
            event is run online, we may make a video and/or audio recording. You
            will be informed about this prior to the event so that you can
            choose whether or not to attend a recorded session, or whether to
            withhold your personal details during the event.
          </li>

          <li type="disc">
            “Professional Information”: including your job title, email address,
            phone number and addresses. <br />
            Personal Information collected at our premises: if you visit our
            premises, your image may be captured on CCTV systems operated by the
            firm or the entity which manages our premises. Building access
            control systems may also capture the location, time and date of your
            entry and exit to our offices. Where required by local law or
            regulation, we may also collect health screening information
            (including temperature) or other wellness data necessary to
            facilitate the safe functioning of our offices.
          </li>
        </ul>
      </div>

      {/* SIX   */}
      <div>
        <div className="mt-10 mb-3" id="six">
          <p className="font-semibold">
            6. &nbsp; &nbsp;HOW YOUR PERSONAL DATA IS COLLECTED
          </p>
        </div>
        <p>
          We use different methods to collect personal data from and about you,
          including through the channels set out below.
          <br />
          Direct interactions: You give us your personal data in your direct
          interactions with us. Such personal data includes Identity Data,
          Contact Data, Financial Data, Services Data, Profile Data, Usage Data,
          Technical Data, Marketing and Communications Data, Professional
          Information, and/or Professional History which you give us from time
          to time (i) by filling in forms on our website; (ii) through other
          electronic platforms which we offer or which we have agreed with you
          to use, (iii) by corresponding with us by email or post, (iv) by
          speaking to us in person or over the telephone, or (v) whilst visiting
          our offices. <br />
          Such direct interactions include, for example, instances when you:
        </p>
        <ul className="ml-5">
          <li type="disc">
            enquire about or apply for our client services (for instance, when
            you sign up to our Sector Hub);
          </li>
          <li type="disc">market or provide your supplier services to us;</li>

          <li type="disc">
            give us personal data necessary for a specific client service we are
            performing for you.
          </li>

          <li type="disc">
            give us your business card at an event or a meeting, or otherwise
            personally give us your personal data (for example, by leaving your
            contact details at the reception of one of our offices);
          </li>

          <li type="disc">
            give us your personal data via an electronic platform which we make
            available or which we have agreed with you to use in connection with
            our client services (for instance, any e-billing system which you
            require us to use) or in connection with your supplier services (for
            example, an electronic platform that you supply to us);
          </li>

          <li type="disc">
            subscribe to our publications or otherwise ask for our marketing;
          </li>

          <li type="disc">
            participate in our marketing, recruitment or other promotional
            events;
          </li>

          <li type="disc">
            participate in our client seminars and similar events; or
          </li>

          <li type="disc">
            give us feedback (for example, by completing a survey). <br />
            Website, cookies, and marketing: You give us your personal data,
            which includes Profile Data, Usage Data, Technical Data,
            Professional Information and/or Marketing and Communications Data,
            when you use our website, or review the publications or marketing we
            send you. <br />
            Third-party sources: We receive Identity Data, Contact Data,
            Financial Data, Professional Information and Special Categories of
            Personal Data about you from third parties, when we:
          </li>

          <li type="disc">
            provide our client services or other parties send us your personal
            data to enable the provision of those service;
          </li>

          <li type="disc">
            you provide your personal data to a third party for the purpose of
            sharing it with us, for instance recruitment agencies and
            consultants may provide your personal data to us for recruitment
            activities; and <br />
            we interact with governmental or regulatory bodies or other
            authorities (in relation to you or on your behalf.
          </li>
        </ul>
      </div>

      {/* SEVEN  */}
      <div>
        <div className="mt-10 mb-3" id="seven">
          <p className="font-semibold">7. &nbsp; &nbsp;HOW WE USE YOUR DATA</p>
        </div>

        <p>
          We will only process (i.e., use) your personal data when the law
          allows us to, that is, when we have a legal basis for processing. We
          use your personal data in the following circumstances:
        </p>
        <ul className="ml-5">
          <li>
            “Performance of a contract”: where we need to perform a contract
            which we are about to enter into or have entered into with you as a
            party or to take steps at your request before entering into such a
            contract;
          </li>

          <li type="disc">
            “Legal or regulatory obligation”: where we need to comply with a
            legal or regulatory obligation that we are subject to;
          </li>

          <li type="disc">
            “Vital interests”: where necessary to protect your vital interest or
            that of another person.
          </li>

          <li type="disc">
            “Consent and explicit consent”: where you have provided your consent
            or explicit consent to processing your personal data. <br />
            With limited exceptions (for instance, in relation to some of our
            electronic marketing), generally we do not rely on consent as the
            legal basis for processing your personal data. You have the right to
            withdraw consent to electronic marketing at any time by following
            the unsubscribe instructions in such marketing materials or by
            contacting us at (the email address for data subjects to withdraw
            consent for receiving marketing materials) Please refer to Section
            11 (Marketing and exercising your right to opt-out of marketing) for
            more information about how we use your personal data for marketing
            purposes and your rights.
          </li>
        </ul>
      </div>

      {/* EIGHT  */}
      <div>
        <div className="mt-10 mb-3" id="seven">
          <p className="font-semibold">
            8. &nbsp; &nbsp;PROCESSING YOUR PERSONAL DATA FOR RECRUITMENT
            ACTIVITIES
          </p>
        </div>

        <p>
          When your personal data is passed to us for recruitment activities, we
          will only use this personal data in order to contact you about
          recruitment and other opportunities which you may have requested. If
          you apply for any role within FARMSOLHUB for example a position or
          Internship scheme your personal data will be processed in accordance
          with our privacy policy.
        </p>
      </div>

      {/* NINE  */}
      <div>
        <div className="mt-10 mb-3" id="nine">
          <p className="font-semibold">9. &nbsp; &nbsp;SERVICE PROVIDERS</p>
        </div>

        <p>
          Third parties providing services to FARMSOLHUB are referred to as
          “Vendors.” FARMSOLHUB will put in place contracts with Vendors which
          address the requirements of relevant privacy laws. Vendors will be
          required to use appropriate security measures to protect personal
          information and will be prohibited from using personal information
          other than as instructed by the firm. <br />
          Vendors who process personal information on behalf of the firm may be
          located in Africa, United States, Europe, the UK or other countries
          around the world. FARMSOLHUB will ensure that Vendors comply with any
          applicable legal requirements for transferring personal information
          outside the jurisdiction in which it was originally collected. <br />
          If you would like more information about the Vendors we work with,
          please contact the Data Protection Officer at farmsolhunb.com.ng
        </p>
      </div>

      {/* TEN  */}
      <div>
        <div className="mt-10 mb-3" id="ten">
          <p className="font-semibold">
            10. &nbsp; &nbsp; KEEPING YOUR INFORMATION UP TO DATE
          </p>
        </div>

        <p>
          FARMSOLHUB makes every effort to maintain the accuracy and
          completeness of the personal information held by the firm. To help us
          ensure we have the most up to date information about you, it is
          important that you inform us of any updates to your contact details or
          other personal information. Please contact your Client Relationship
          Partner or the person you usually deal with at the firm. You can also
          contact our Data Protection Officer at farmsolhunb.com.ng
        </p>
      </div>

      {/* ELEVEN  */}

      <div>
        <div className="mt-10 mb-3" id="eleven">
          <p className="font-semibold">
            11. &nbsp; &nbsp; MARKETING AND EXERCISING YOUR RIGHT TO OPT-OUT OF
            MARKETING
          </p>
        </div>

        <p>
          We will not use your personal data to send you marketing materials if
          you have requested not to receive them. If you request that we stop
          processing your personal data for marketing purposes, we shall stop
          processing your personal data for those purposes.
          <br />
          We would encourage you to make such requests via the forms and links
          provided for that purpose in the marketing materials we send you or by
          contacting our Marketing team at (The email address of our BD team).
          You may alternatively make any such request to your usual contact at
          the firm or to our Data Protection Officer at farmsolhunb.com.ng . In
          any event, such request can be made at any time free of charge.
        </p>
      </div>

      {/* TWELVE  */}
      <div>
        <div className="mt-10 mb-3" id="twelve">
          <p className="font-semibold">
            12. &nbsp; &nbsp;THIRD PARTY MARKETING
          </p>
        </div>

        <p>
          We do not share your personal data with any organizations outside of
          FARMSOLHUB for marketing purposes.
        </p>
      </div>

      {/* THIRTEEN  */}
      <div>
        <div className="mt-10 mb-3" id="thirteen">
          <p className="font-semibold">
            13. &nbsp; &nbsp;WITH WHOM WE SHARE YOUR PERSONAL DATA
          </p>
        </div>

        <p>
          We do not sell or rent any of the Personal Data we collect about you
          to third parties.
          <br />
          We may have to share your personal data with the entities and persons
          set out below for the purposes for which we collected the personal
          data, as detailed in Section 7 (How we use your personal data).
        </p>
        <ul>
          <li type="disc">
            Where required, we will (subject to our professional obligations and
            any terms of business which we may enter into with you) disclose
            your personal data to:
          </li>
          <li type="disc">
            I. any person or entity to whom we are required or requested to make
            such disclosure by any court of competent jurisdiction or by any
            governmental, taxation or other regulatory authority, law
            enforcement agency
            <br />
            II. our professional advisers or consultants, including lawyers,
            bankers, auditors, accountants and insurers providing consultancy,
            legal, banking, audit, accounting or insurance services to us;
            <br />
            III. any financial institutions providing finance to us; IV. service
            providers who provide information technology and system
            administration services to us; and
          </li>
          <li type="disc">
            If you ask us to do so in relation to the client services or visitor
            services we are providing or the supplier services you are
            providing, we may disclose your personal data to other persons or
            entities as instructed (for example, if we are acting for you in
            litigation proceedings, we will share your personal data with our
            external counsel or advisors in order to provide advice to you).
          </li>

          <li type="disc">
            We may share your personal data with persons or entities outside of
            FARMSOLHUB for the purposes of obtaining feedback or references in
            relation to client services provided to you. For example, we may
            share your corporate contact details with legal directories for the
            purpose of obtaining a reference in relation to client services
            provided to you. Where appropriate, we will confirm with you that
            you are willing to be contacted for this purpose.
            <br />
            We require any person or entity to whom we disclose personal data to
            respect the confidentiality and security of your personal data and
            to treat it in accordance with applicable laws and regulations. We
            do not allow such recipients of your personal data to use it for
            their own purposes, and we only permit them to process your personal
            data for specified purposes and in accordance with our instructions.
          </li>
        </ul>
      </div>

      {/* FOURTEEN  */}

      <div>
        <div className="mt-10 mb-3" id="fourteen">
          <p className="font-semibold">14. &nbsp; &nbsp; DATA SECURITY</p>
        </div>

        <p>
          We consider the protection of Personal Data to be a sound business
          practice, and to that end we employ commercially appropriate
          organizational, physical, technical, and procedural safeguards and
          measures to protect your Personal Data in our possession or under our
          control, to the extent possible, from unauthorized or accidental
          access and improper use.
          <br />
          Unfortunately, the transmission of information via the Internet is not
          completely secure, and we cannot guarantee the security of your
          Personal Data transmitted to or through the Website; any such
          transmission is at your own risk. Once we have received your Personal
          Data, we will use the procedures and security features described above
          to try to prevent unauthorized access of your Personal Data.
        </p>
      </div>

      {/* FIFTEEN  */}

      <div>
        <div className="mt-10 mb-3" id="fifteen">
          <p className="font-semibold">15. &nbsp; &nbsp; DATA RETENTION</p>
        </div>

        <p>
          We will only retain your personal data for as long as necessary to
          fulfil the purposes we collected it for. This includes for example the
          purposes of satisfying any legal, regulatory, accounting, reporting
          requirements, to carry out legal work, for the establishment or
          defense of legal claims. <br />
          To determine the appropriate retention period for personal data, we
          consider the amount, nature and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal requirements. <br />
          If you would like to know more about the retention periods we apply to
          your personal data, please contact us at farmsolhunb.com.ng In some
          circumstances we may anonymize your personal data (so that it can no
          longer be associated with you) for research or statistical purposes in
          which case we may use this information indefinitely without further
          notice to you.
        </p>
      </div>

      <div>
        <div className="mt-10 mb-3" id="sixteen">
          <p className="font-semibold">16. &nbsp; &nbsp; YOUR RIGHTS</p>
        </div>

        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data. It is FARMSOLHUB&apos;s policy to
          respect your rights and FARMSOLHUB will act promptly and in accordance
          with any applicable law, rule or regulation relating to the processing
          of your personal data. <br />
          Details of your rights are set out below:
          <ul>
            <li type="disc">
              right to be informed about how personal data is used - you have a
              right to be informed about how we will use and share your personal
              data. This explanation will be provided to you in a concise,
              transparent, intelligible and easily accessible format and will be
              written in clear and plain language;
            </li>

            <li type="disc">
              right to access personal data - you have a right to obtain
              confirmation of whether we are processing your personal data,
              access to your personal data and information regarding how your
              personal data is being used by us;
            </li>

            <li type="disc">
            right to have inaccurate personal data rectified - you have a right to have any inaccurate or incomplete personal data rectified. If we have disclosed the relevant personal data to any third parties, we will take reasonable steps to inform those third parties of the rectification where possible;
                      </li>
                      
                      <li type="disc">
              right to access personal data - you have a right to obtain
              confirmation of whether we are processing your personal data,
              access to your personal data and information regarding how your
              personal data is being used by us;
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;


