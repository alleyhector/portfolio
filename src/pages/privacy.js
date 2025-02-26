import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fonts, navDelay } = theme;

const StyledMainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${colors.accent};
  font-family: ${fonts.Highlight};
  font-size: 12vw;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const AstroPage = ({ location }) => {
  const [$isMounted, set$isMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => set$isMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location}>
      <TransitionGroup component={null}>
        {$isMounted && (
          <CSSTransition timeout={500} classNames="fade">
            <StyledMainContainer>
              <main>
                <div id="pp">
                  <p class="p1">
                    <span class="s1">
                      <b>PRIVACY POLICY</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p3">
                    <span class="s1">
                      <b>Last updated November 18, 2024</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      This Privacy Notice for Astrosnax (“<b>we</b>,” “<b>us</b>,” or “<b>our</b>“),
                      describes how and why we might access, collect, store, use, and/or share (“
                      <b>process</b>“) your personal information when you use our services (“
                      <b>Services</b>“), including when you:
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">
                        Download and use our mobile application (Astrosnax), or any other
                        application of ours that links to this Privacy Notice
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">
                        Engage with us in other related ways, including any sales, marketing, or
                        events
                      </span>
                    </li>
                  </ul>
                  <p class="p4">
                    <span class="s2">
                      <b>Questions or concerns? </b>Reading this Privacy Notice will help you
                      understand your privacy rights and choices. We are responsible for making
                      decisions about how your personal information is processed. If you do not
                      agree with our policies and practices, please do not use our Services. If you
                      still have any questions or concerns, please contact us at privacy@qpdx.com.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p5">
                    <span class="s2">
                      <b>SUMMARY OF KEY POINTS</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>
                          This summary provides key points from our Privacy Notice, but you can find
                          out more details about any of these topics by clicking the link following
                          each key point or by using our 
                        </i>
                      </b>
                      <a href="#toc">
                        <span class="s4">
                          <b>
                            <i>table of contents</i>
                          </b>
                        </span>
                      </a>
                      <b>
                        <i> below to find the section you are looking for.</i>
                      </b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>What personal information do we process?</b> When you visit, use, or
                      navigate our Services, we may process personal information depending on how
                      you interact with us and the Services, the choices you make, and the products
                      and features you use. Learn more about 
                      <a href="#personalinfo">
                        <span class="s4">personal information you disclose to us</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>Do we process any sensitive personal information? </b>Some of the
                      information may be considered “special” or “sensitive” in certain
                      jurisdictions, for example your racial or ethnic origins, sexual orientation,
                      and religious beliefs. We do not process sensitive personal information.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>Do we collect any information from third parties?</b> We do not collect any
                      information from third parties.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>How do we process your information?</b> We process your information to
                      provide, improve, and administer our Services, communicate with you, for
                      security and fraud prevention, and to comply with law. We may also process
                      your information for other purposes with your consent. We process your
                      information only when we have a valid legal reason to do so. Learn more about 
                      <a href="#infouse">
                        <span class="s4">how we process your information</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        {' '}
                        In what situations and with which parties do we share personal
                        information?{' '}
                      </b>
                       We may share information in specific situations and with specific third
                      parties. Learn more about 
                      <a href="#whoshare">
                        <span class="s4">
                          when and with whom we share your personal information
                        </span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>How do we keep your information safe?</b> We have
                      adequate organizational and technical processes and procedures in place to
                      protect your personal information. However, no electronic transmission over
                      the internet or information storage technology can be guaranteed to be 100%
                      secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                      other unauthorized third parties will not be able to defeat our security and
                      improperly collect, access, steal, or modify your information. Learn more
                      about 
                      <a href="#infosafe">
                        <span class="s4">how we keep your information safe</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>What are your rights?</b> Depending on where you are located
                      geographically, the applicable privacy law may mean you have certain rights
                      regarding your personal information. Learn more about 
                      <a href="#privacyrights">
                        <span class="s4">your privacy rights</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>How do you exercise your rights?</b> The easiest way to exercise your
                      rights is by submitting a 
                      <a href="https://app.termly.io/notify/4c910af4-3fc5-44ce-b2ff-57fb2ad013b0">
                        <span class="s4">data subject access request</span>
                      </a>
                      , or by contacting us. We will consider and act upon any request in accordance
                      with applicable data protection laws.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Want to learn more about what we do with any information we collect? 
                      <a href="#toc">
                        <span class="s4">Review the Privacy Notice in full</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="toc" class="p6">
                    <span class="s2">
                      <b>TABLE OF CONTENTS</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#infocollect">
                        {' '}
                        1. WHAT INFORMATION DO WE COLLECT?<span class="s6"></span>{' '}
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#infouse">
                        {' '}
                        2. HOW DO WE PROCESS YOUR INFORMATION?<span class="s6"></span>{' '}
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#legalbases">
                        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                        <span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p8">
                    <span class="s5">
                      <a href="#whoshare">
                        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                        <span class="s4"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#cookies">
                        5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                        <span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#inforetain">
                        6. HOW LONG DO WE KEEP YOUR INFORMATION?<span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#infosafe">
                        7. HOW DO WE KEEP YOUR INFORMATION SAFE?<span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#infominors">
                        8. DO WE COLLECT INFORMATION FROM MINORS?<span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p8">
                    <span class="s5">
                      <a href="#privacyrights">
                        {' '}
                        9. WHAT ARE YOUR PRIVACY RIGHTS?<span class="s4"></span>{' '}
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#DNT">
                        {' '}
                        10. CONTROLS FOR DO-NOT-TRACK FEATURES<span class="s6"></span>{' '}
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#uslaws">
                        11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                        <span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#policyupdates">
                        12. DO WE MAKE UPDATES TO THIS NOTICE?<span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p9">
                    <span class="s5">
                      <a href="#contact">
                        13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?<span class="s7"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p7">
                    <span class="s5">
                      <a href="#request">
                        14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        <span class="s6"></span>
                      </a>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="infocollect" class="p5">
                    <span class="s2">
                      <b>1. WHAT INFORMATION DO WE COLLECT?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Personal information you disclose to us</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>We collect personal information that you provide to us.</i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We collect personal information that you voluntarily provide to us when
                      you express an interest in obtaining information about us or our products and
                      Services, when you participate in activities on the Services, or otherwise
                      when you contact us.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>Sensitive Information.</b> We do not process sensitive information.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      All personal information that you provide to us must be true, complete, and
                      accurate, and you must notify us of any changes to such personal information.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Information automatically collected</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        Some information — such as your Internet Protocol (IP) address and/or
                        browser and device characteristics — is collected automatically when you
                        visit our Services.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We automatically collect certain information when you visit, use, or navigate
                      the Services. This information does not reveal your specific identity (like
                      your name or contact information) but may include device and usage
                      information, such as your IP address, browser and device characteristics,
                      operating system, language preferences, referring URLs, device name, country,
                      location, information about how and when you use our Services, and other
                      technical information. This information is primarily needed to maintain the
                      security and operation of our Services, and for our internal analytics and
                      reporting purposes.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">The information we collect includes:</span>
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <i></i>
                      </span>
                      <span class="s2">
                        <i>Log and Usage Data.</i> Log and usage data is service-related,
                        diagnostic, usage, and performance information our servers automatically
                        collect when you access or use our Services and which we record in log
                        files. Depending on how you interact with us, this log data may include your
                        IP address, device information, browser type, and settings and information
                        about your activity in the Services
                      </span>
                      <span class="s8"> </span>
                      <span class="s2">
                        (such as the date/time stamps associated with your usage, pages and files
                        viewed, searches, and other actions you take such as which features you
                        use), device event information (such as system activity, error reports
                        (sometimes called “crash dumps”), and hardware settings).
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <i></i>
                      </span>
                      <span class="s2">
                        <i>Device Data.</i> We collect device data such as information about your
                        computer, phone, tablet, or other device you use to access the Services.
                        Depending on the device used, this device data may include information such
                        as your IP address (or proxy server), device and application identification
                        numbers, location, browser type, hardware model, Internet service provider
                        and/or mobile carrier, operating system, and system configuration
                        information.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <i></i>
                      </span>
                      <span class="s2">
                        <i>Location Data.</i> We collect location data such as information about
                        your device’s location, which can be either precise or imprecise. How much
                        information we collect depends on the type and settings of the device you
                        use to access the Services. For example, we may use GPS and other
                        technologies to collect geolocation data that tells us your current location
                        (based on your IP address). You can opt out of allowing us to collect this
                        information either by refusing access to the information or by disabling
                        your Location setting on your device. However, if you choose to opt out, you
                        may not be able to use certain aspects of the Services.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="infouse" class="p11">
                    <span class="s2">
                      <b>2. HOW DO WE PROCESS YOUR INFORMATION?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        We process your information to provide, improve, and administer our
                        Services, communicate with you, for security and fraud prevention, and to
                        comply with law. We may also process your information for other purposes
                        with your consent.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        We process your personal information for a variety of reasons, depending on
                        how you interact with our Services, including:
                      </b>
                    </span>
                  </p>
                  <p class="p12">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p12">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p12">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p12">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>To save or protect an individual’s vital interest.</b>
                      </span>
                      <span class="s2">
                         We may process your information when necessary to save or protect an
                        individual’s vital interest, such as to prevent harm.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="legalbases" class="p5">
                    <span class="s2">
                      <b>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        We only process your personal information when we believe it is necessary
                        and we have a valid legal reason (i.e., legal basis) to do so under
                        applicable law, like with your consent, to comply with laws, to provide you
                        with services to enter into or fulfill our contractual obligations, to
                        protect your rights, or to fulfill our legitimate business interests.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s5">
                      <b>
                        <i>If you are located in the EU or UK, this section applies to you.</i>
                      </b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      The General Data Protection Regulation (GDPR) and UK GDPR require us to
                      explain the valid legal bases we rely on in order to process your personal
                      information. As such, we may rely on the following legal bases to process your
                      personal information:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <b></b>
                      </span>
                      <span class="s2">
                        <b>Consent. </b>We may process your information if you have given us
                        permission (i.e., consent) to use your personal information for a specific
                        purpose. You can withdraw your consent at any time. Learn more about 
                        <a href="#withdrawconsent">
                          <span class="s4">withdrawing your consent</span>
                        </a>
                        .
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Legal Obligations.</b>
                      </span>
                      <span class="s2">
                         We may process your information where we believe it is necessary for
                        compliance with our legal obligations, such as to cooperate with a law
                        enforcement body or regulatory agency, exercise or defend our legal rights,
                        or disclose your information as evidence in litigation in which we are
                        involved.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Vital Interests.</b>
                      </span>
                      <span class="s2">
                         We may process your information where we believe it is necessary to protect
                        your vital interests or the vital interests of a third party, such as
                        situations involving potential threats to the safety of any person.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s5">
                      <b>
                        <i>If you are located in Canada, this section applies to you.</i>
                      </b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p13">
                    <span class="s2">
                      We may process your information if you have given us specific permission
                      (i.e., express consent) to use your personal information for a specific
                      purpose, or in situations where your permission can be inferred (i.e., implied
                      consent). You can 
                      <a href="#withdrawconsent">
                        <span class="s11">withdraw your consent</span>
                      </a>
                       at any time.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p13">
                    <span class="s2">
                      In some exceptional cases, we may be legally permitted under applicable law to
                      process your information without your consent, including, for example:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        If collection is clearly in the interests of an individual and consent
                        cannot be obtained in a timely way
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">For investigations and fraud detection and prevention</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        {' '}
                        For business transactions provided certain conditions are met{' '}
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        If it is contained in a witness statement and the collection is necessary to
                        assess, process, or settle an insurance claim
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        For identifying injured, ill, or deceased persons and communicating with
                        next of kin
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        If we have reasonable grounds to believe an individual has been, is, or may
                        be victim of financial abuse
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        If it is reasonable to expect collection and use with consent would
                        compromise the availability or the accuracy of the information and the
                        collection is reasonable for purposes related to investigating a breach of
                        an agreement or a contravention of the laws of Canada or a province
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        If disclosure is required to comply with a subpoena, warrant, court order,
                        or rules of the court relating to the production of records
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">
                        If it was produced by an individual in the course of their employment,
                        business, or profession and the collection is consistent with the purposes
                        for which the information was produced
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">
                        If the collection is solely for journalistic, artistic, or literary purposes
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">
                        If the information is publicly available and is specified by the regulations
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="whoshare" class="p11">
                    <span class="s2">
                      <b>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short:</i>
                      </b>
                      <i>
                         We may share information in specific situations described in this section
                        and/or with the following third parties.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may need to share your personal information in the following situations:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <b></b>
                      </span>
                      <span class="s2">
                        <b>Business Transfers.</b> We may share or transfer your information in
                        connection with, or during negotiations of, any merger, sale of company
                        assets, financing, or acquisition of all or a portion of our business to
                        another company.
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="cookies" class="p11">
                    <span class="s2">
                      <b>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short:</i>
                      </b>
                      <i>
                         We may use cookies and other tracking technologies to collect and store
                        your information.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may use cookies and similar tracking technologies (like web beacons and
                      pixels) to gather information when you interact with our Services. Some online
                      tracking technologies help us maintain the security of our Services, prevent
                      crashes, fix bugs, save your preferences, and assist with basic site
                      functions.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We also permit third parties and service providers to use online tracking
                      technologies on our Services for analytics and advertising, including to help
                      manage and display advertisements, to tailor advertisements to your interests,
                      or to send abandoned shopping cart reminders (depending on your communication
                      preferences). The third parties and service providers use their technology to
                      provide advertising about products and services tailored to your interests
                      which may appear either on our Services or on other websites.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      To the extent these online tracking technologies are deemed to be
                      a “sale”/”sharing” (which includes targeted advertising, as defined under the
                      applicable laws) under applicable US state laws, you can opt out of these
                      online tracking technologies by submitting a request as described below under
                      section “
                      <a href="#uslaws">
                        <span class="s11">
                          {' '}
                          DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?{' '}
                        </span>
                      </a>
                      “
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Specific information about how we use such technologies and how you can refuse
                      certain cookies is set out in our Cookie Notice.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Google Analytics</b>
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may share your information with Google Analytics to track and analyze the
                      use of the Services. The Google Analytics Advertising Features that we may use
                      include: Google Display Network Impressions Reporting. To opt out of being
                      tracked by Google Analytics across the Services, visit 
                      <a href="https://tools.google.com/dlpage/gaoptout">
                        <span class="s4">https://tools.google.com/dlpage/gaoptout</span>
                      </a>
                    </span>
                    <span class="s12">.</span>
                    <span class="s2">
                       You can opt out of Google Analytics Advertising Features through 
                      <a href="https://adssettings.google.com/">
                        <span class="s4">Ads Settings</span>
                      </a>
                       and Ad Settings for mobile apps. Other opt out means include 
                      <a href="http://optout.networkadvertising.org/">
                        <span class="s4">http://optout.networkadvertising.org/</span>
                      </a>
                       and 
                      <a href="http://www.networkadvertising.org/mobile-choice">
                        <span class="s4">http://www.networkadvertising.org/mobile-choice</span>
                      </a>
                      . For more information on the privacy practices of Google, please visit the 
                      <a href="https://policies.google.com/privacy">
                        <span class="s4">Google Privacy &amp; Terms page</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="inforetain" class="p11">
                    <span class="s2">
                      <b>6. HOW LONG DO WE KEEP YOUR INFORMATION?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        We keep your information for as long as necessary to fulfill the purposes
                        outlined in this Privacy Notice unless otherwise required by law.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We will only keep your personal information for as long as it is necessary for
                      the purposes set out in this Privacy Notice, unless a longer retention period
                      is required or permitted by law (such as tax, accounting, or other legal
                      requirements).
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      When we have no ongoing legitimate business need to process your personal
                      information, we will either delete or anonymize such information, or, if this
                      is not possible (for example, because your personal information has been
                      stored in backup archives), then we will securely store your personal
                      information and isolate it from any further processing until deletion is
                      possible.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="infosafe" class="p11">
                    <span class="s2">
                      <b>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        We aim to protect your personal information through a system
                        of organizational and technical security measures.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We have implemented appropriate and reasonable technical
                      and organizational security measures designed to protect the security of any
                      personal information we process. However, despite our safeguards and efforts
                      to secure your information, no electronic transmission over the Internet or
                      information storage technology can be guaranteed to be 100% secure, so we
                      cannot promise or guarantee that hackers, cybercriminals, or
                      other unauthorized third parties will not be able to defeat our security and
                      improperly collect, access, steal, or modify your information. Although we
                      will do our best to protect your personal information, transmission of
                      personal information to and from our Services is at your own risk. You should
                      only access the Services within a secure environment.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="infominors" class="p11">
                    <span class="s2">
                      <b>8. DO WE COLLECT INFORMATION FROM MINORS?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short:</i>
                      </b>
                      <i>
                         We do not knowingly collect data from or market to children under 18 years
                        of age.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We do not knowingly collect, solicit data from, or market to children under 18
                      years of age, nor do we knowingly sell such personal information. By using the
                      Services, you represent that you are at least 18 or that you are the parent or
                      guardian of such a minor and consent to such minor dependent’s use of the
                      Services. If we learn that personal information from users less than 18 years
                      of age has been collected, we will deactivate the account and take reasonable
                      measures to promptly delete such data from our records. If you become aware of
                      any data we may have collected from children under age 18, please contact us
                      at privacy@qpdx.com.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="privacyrights" class="p11">
                    <span class="s2">
                      <b>9. WHAT ARE YOUR PRIVACY RIGHTS?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short:</i>
                      </b>
                      <i>
                         Depending on your state of residence in the US or in some regions, such
                        as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and
                        Canada, you have rights that allow you greater access to and control over
                        your personal information. You may review, change, or terminate your account
                        at any time, depending on your country, province, or state of residence.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      In some regions (like the EEA, UK, Switzerland, and Canada), you have certain
                      rights under applicable data protection laws. These may include the right (i)
                      to request access and obtain a copy of your personal information, (ii) to
                      request rectification or erasure; (iii) to restrict the processing of your
                      personal information; (iv) if applicable, to data portability; and (v) not to
                      be subject to automated decision-making. In certain circumstances, you may
                      also have the right to object to the processing of your personal information.
                      You can make such a request by contacting us by using the contact details
                      provided in the section “
                      <a href="#contact">
                        <span class="s4">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
                      </a>
                      “ below.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We will consider and act upon any request in accordance with applicable data
                      protection laws.
                    </span>
                  </p>
                  <p class="p15">
                    <span class="s2"> </span>
                  </p>
                  <p class="p4">
                    <span class="s2">
                      If you are located in the EEA or UK and you believe we are unlawfully
                      processing your personal information, you also have the right to complain to
                      your 
                      <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                        <span class="s13">Member State data protection authority</span>
                      </a>
                       or 
                      <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
                        <span class="s4">UK data protection authority</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      If you are located in Switzerland, you may contact the 
                      <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                        <span class="s4">Federal Data Protection and Information Commissioner</span>
                      </a>
                      .
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s5">
                      <b>Withdrawing your consent:</b>
                    </span>
                    <span class="s2">
                       If we are relying on your consent to process your personal information, which
                      may be express and/or implied consent depending on the applicable law, you
                      have the right to withdraw your consent at any time. You can withdraw your
                      consent at any time by contacting us by using the contact details provided in
                      the section “
                      <a href="#contact">
                        <span class="s4">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
                      </a>
                      “ below.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      However, please note that this will not affect the lawfulness of the
                      processing before its withdrawal nor, when applicable law allows, will it
                      affect the processing of your personal information conducted in reliance on
                      lawful processing grounds other than consent.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p13">
                    <span class="s2">
                      If you have questions or comments about your privacy rights, you may email us
                      at 
                    </span>
                    <span class="s10">privacy@qpdx.com</span>
                    <span class="s2">.</span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="DNT" class="p11">
                    <span class="s2">
                      <b>10. CONTROLS FOR DO-NOT-TRACK FEATURES</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Most web browsers and some mobile operating systems and mobile applications
                      include a Do-Not-Track (“DNT”) feature or setting you can activate to signal
                      your privacy preference not to have data about your online browsing activities
                      monitored and collected. At this stage, no uniform technology standard
                      for recognizing and implementing DNT signals has been finalized. As such, we
                      do not currently respond to DNT browser signals or any other mechanism that
                      automatically communicates your choice not to be tracked online. If a standard
                      for online tracking is adopted that we must follow in the future, we will
                      inform you about that practice in a revised version of this Privacy Notice.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      California law requires us to let you know how we respond to web browser DNT
                      signals. Because there currently is not an industry or legal standard
                      for recognizing or honoring DNT signals, we do not respond to them at this
                      time.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="uslaws" class="p11">
                    <span class="s2">
                      <b>11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        If you are a resident of California, Colorado, Connecticut, Delaware,
                        Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New
                        Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may
                        have the right to request access to and receive details about the personal
                        information we maintain about you and how we have processed it, correct
                        inaccuracies, get a copy of, or delete your personal information. You may
                        also have the right to withdraw your consent to our processing of your
                        personal information. These rights may be limited in some circumstances by
                        applicable law. More information is provided below.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p16">
                    <span class="s2">
                      <b>Categories of Personal Information We Collect</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We have collected the following categories of personal information in the past
                      twelve (12) months:
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <table cellspacing="0" cellpadding="0" class="t1">
                    <tbody>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">
                              <b>Category</b>
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              <b>Examples</b>
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p17">
                            <span class="s2">
                              <b>Collected</b>
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">A. Identifiers</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Contact details, such as real name, alias, postal address, telephone
                              or mobile contact number, unique personal identifier, online
                              identifier, Internet Protocol address, email address, and account name
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <table cellspacing="0" cellpadding="0" class="t1">
                    <tbody>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">
                              B. Personal information as defined in the California Customer Records
                              statute
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Name, contact information, education, employment, employment history,
                              and financial information
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <table cellspacing="0" cellpadding="0" class="t1">
                    <tbody>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">
                              C. Protected classification characteristics under state or federal law
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Gender, age, date of birth, race and ethnicity, national origin,
                              marital status, and other demographic data
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">D. Commercial information</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Transaction information, purchase history, financial details, and
                              payment information
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">E. Biometric information</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">Fingerprints and voiceprints</span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">F. Internet or other similar network activity</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Browsing history, search history, online behavior, interest data, and
                              interactions with our and other websites, applications, systems, and
                              advertisements
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">G. Geolocation data</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">Device location</span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">YES</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">
                              {' '}
                              H. Audio, electronic, sensory, or similar information{' '}
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Images and audio, video or call recordings created in connection with
                              our business activities
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">
                              I. Professional or employment-related information
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">
                              Business contact details in order to provide you our Services at a
                              business level or job title, work history, and professional
                              qualifications if you apply for a job with us
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td1">
                          <p class="p4">
                            <span class="s2">J. Education Information</span>
                          </p>
                        </td>
                        <td valign="middle" class="td2">
                          <p class="p4">
                            <span class="s2">Student records and directory information</span>
                          </p>
                        </td>
                        <td valign="middle" class="td3">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td4">
                          <p class="p4">
                            <span class="s2">
                              {' '}
                              K. Inferences drawn from collected personal information{' '}
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td5">
                          <p class="p4">
                            <span class="s2">
                              Inferences drawn from any of the collected personal information listed
                              above to create a profile or summary about, for example, an
                              individual’s preferences and characteristics
                            </span>
                          </p>
                        </td>
                        <td valign="middle" class="td6">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td valign="middle" class="td7">
                          <p class="p4">
                            <span class="s2">L. Sensitive personal Information</span>
                          </p>
                        </td>
                        <td valign="middle" class="td8">
                          <p class="p19">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                        <td valign="middle" class="td9">
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                          <p class="p17">
                            <span class="s2">NO</span>
                          </p>
                          <p class="p18">
                            <span class="s1"></span>
                            <br />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may also collect other personal information outside of these categories
                      through instances where you interact with us in person, online, or by phone or
                      mail in the context of:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">Receiving help through our customer support channels;</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">Participation in customer surveys or contests; and</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Facilitation in the delivery of our Services and to respond to your
                        inquiries.
                      </span>
                    </li>
                  </ul>
                  <p class="p4">
                    <span class="s2">
                      We will use and retain the collected personal information as needed to provide
                      the Services or for:
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3"></span>
                      <span class="s2">Category G – 6 months</span>
                    </li>
                  </ul>
                  <p class="p10">
                    <span class="s2">
                      <b>Sources of Personal Information</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Learn more about the sources of personal information we collect in “
                      <a href="#infocollect">
                        <span class="s13">WHAT INFORMATION DO WE COLLECT?</span>
                      </a>
                      “
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p16">
                    <span class="s2">
                      <b>How We Use and Share Personal Information</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p13">
                    <span class="s2">
                      Learn more about how we use your personal information in the section, “
                      <a href="#infouse">
                        <span class="s11">HOW DO WE PROCESS YOUR INFORMATION?</span>
                      </a>
                      “
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>Will your information be shared with anyone else?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may disclose your personal information with our service providers pursuant
                      to a written contract between us and each service provider. Learn more about
                      how we disclose personal information to in the section, “
                      <a href="#whoshare">
                        <span class="s11">
                          {' '}
                          WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?{' '}
                        </span>
                      </a>
                      “
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may use your personal information for our own business purposes, such as
                      for undertaking internal research for technological development and
                      demonstration. This is not considered to be “selling” of your personal
                      information.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We have not disclosed, sold, or shared any personal information to third
                      parties for a business or commercial purpose in the preceding twelve (12)
                      months. We will not sell or share personal information in the future belonging
                      to website visitors, users, and other consumers.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Your Rights</b>
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      You have rights under certain US state data protection laws. However, these
                      rights are not absolute, and in certain cases, we may decline your request as
                      permitted by law. These rights include:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Right to know</b>
                      </span>
                      <span class="s2"> whether or not we are processing your personal data</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <b></b>
                      </span>
                      <span class="s2">
                        <b>Right to access </b>
                      </span>
                      <span class="s8">your personal data</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Right to correct </b>
                      </span>
                      <span class="s2">inaccuracies in your personal data</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Right to request</b>
                      </span>
                      <span class="s2"> the deletion of your personal data</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Right to obtain a copy </b>
                      </span>
                      <span class="s2">of the personal data you previously shared with us</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li4">
                      <span class="s3">
                        <b></b>
                      </span>
                      <span class="s2">
                        <b>Right to non-discrimination</b>
                      </span>
                      <span class="s8"> for exercising your rights</span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s9">
                        <b></b>
                      </span>
                      <span class="s10">
                        <b>Right to opt out</b>
                      </span>
                      <span class="s2">
                         of the processing of your personal data if it is used for targeted
                        advertising (or sharing as defined under California’s privacy law), the sale
                        of personal data, or profiling in furtherance of decisions that produce
                        legal or similarly significant effects (“profiling”)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Depending upon the state where you live, you may also have the following
                      rights:
                    </span>
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to access the categories of personal data being processed (as
                        permitted by applicable law, including Minnesota’s privacy law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to obtain a list of the categories of third parties to which we have
                        disclosed personal data (as permitted by applicable law,
                        including California’s and Delaware’s privacy law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to obtain a list of specific third parties to which we have disclosed
                        personal data (as permitted by applicable law, including Minnesota’s and
                        Oregon’s privacy law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to review, understand, question, and correct how personal data has
                        been profiled (as permitted by applicable law, including Minnesota’s privacy
                        law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to limit use and disclosure of sensitive personal data (as permitted
                        by applicable law, including California’s privacy law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <ul class="ul1">
                    <li class="li13">
                      <span class="s3"></span>
                      <span class="s2">
                        Right to opt out of the collection of sensitive data and personal data
                        collected through the operation of a voice or facial recognition feature (as
                        permitted by applicable law, including Florida’s privacy law)
                      </span>
                    </li>
                  </ul>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>How to Exercise Your Rights</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      To exercise these rights, you can contact us by submitting a 
                      <a href="https://app.termly.io/notify/4c910af4-3fc5-44ce-b2ff-57fb2ad013b0">
                        <span class="s11">data subject access request</span>
                      </a>
                      , by emailing us at privacy@qpdx.com, or by referring to the contact details
                      at the bottom of this document.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Under certain US state data protection laws, you can designate
                      an authorized agent to make a request on your behalf. We may deny a request
                      from an authorized agent that does not submit proof that they have been
                      validly authorized to act on your behalf in accordance with applicable laws.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Request Verification</b>
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Upon receiving your request, we will need to verify your identity to determine
                      you are the same person about whom we have the information in our system. We
                      will only use personal information provided in your request to verify your
                      identity or authority to make the request. However, if we cannot verify your
                      identity from the information already maintained by us, we may request that
                      you provide additional information for the purposes of verifying your identity
                      and for security or fraud-prevention purposes.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      If you submit the request through an authorized agent, we may need to collect
                      additional information to verify your identity before processing your request
                      and the agent will need to provide a written and signed permission from you to
                      submit such request on your behalf.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>Appeals</b>
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Under certain US state data protection laws, if we decline to take action
                      regarding your request, you may appeal our decision by emailing us
                      at privacy@qpdx.com. We will inform you in writing of any action taken or not
                      taken in response to the appeal, including a written explanation of the
                      reasons for the decisions. If your appeal is denied, you may submit a
                      complaint to your state attorney general.
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p10">
                    <span class="s2">
                      <b>California “Shine The Light” Law</b>
                    </span>
                  </p>
                  <p class="p14">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      California Civil Code Section 1798.83, also known as the “Shine The
                      Light” law, permits our users who are California residents to request and
                      obtain from us, once a year and free of charge, information about categories
                      of personal information (if any) we disclosed to third parties for direct
                      marketing purposes and the names and addresses of all third parties with which
                      we shared personal information in the immediately preceding calendar year. If
                      you are a California resident and would like to make such a request, please
                      submit your request in writing to us by using the contact details provided in
                      the section “
                      <a href="#contact">
                        <span class="s11">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
                      </a>
                      “
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="policyupdates" class="p11">
                    <span class="s2">
                      <b>12. DO WE MAKE UPDATES TO THIS NOTICE?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      <b>
                        <i>In Short: </i>
                      </b>
                      <i>
                        Yes, we will update this notice as necessary to stay compliant with relevant
                        laws.
                      </i>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      We may update this Privacy Notice from time to time. The updated version will
                      be indicated by an updated “Revised” date at the top of this Privacy Notice.
                      If we make material changes to this Privacy Notice, we may notify you either
                      by prominently posting a notice of such changes or by directly sending you a
                      notification. We encourage you to review this Privacy Notice frequently to be
                      informed of how we are protecting your information.
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="contact" class="p11">
                    <span class="s2">
                      <b>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      If you have questions or comments about this notice, you may email us at
                      privacy@qpdx.com
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p id="request" class="p11">
                    <span class="s2">
                      <b>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</b>
                    </span>
                  </p>
                  <p class="p2">
                    <span class="s1"></span>
                    <br />
                  </p>
                  <p class="p4">
                    <span class="s2">
                      Based on the applicable laws of your country or state of residence in the US,
                      you may have the right to request access to the personal information we
                      collect from you, details about how we have processed it, correct
                      inaccuracies, or delete your personal information. You may also have the right
                      to withdraw your consent to our processing of your personal information. These
                      rights may be limited in some circumstances by applicable law. To request to
                      review, update, or delete your personal information, please fill out and
                      submit a 
                      <a href="https://app.termly.io/notify/4c910af4-3fc5-44ce-b2ff-57fb2ad013b0">
                        <span class="s4">data subject access request</span>
                      </a>
                      .
                    </span>
                  </p>
                </div>
              </main>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

AstroPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default AstroPage;
