import styled from "styled-components"
import { COLOR } from "../../utils/constants"

const Name = styled.h1.attrs({ className: "cv-name" })`
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 3px;
  color: ${COLOR.CLOUD_BURST};
`

const Title = styled.p.attrs({ className: "cv-title" })`
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${COLOR.PICTON_BLUE};
`

const ContactLine = styled.p.attrs({ className: "cv-contact" })`
  font-size: 13px;
  margin: 0 0 3px;
  color: #444;
`

const Divider = styled.hr.attrs({ className: "cv-divider" })`
  border: none;
  border-top: 2px solid ${COLOR.CLOUD_BURST};
  margin: 12px 0 8px;
`

const SectionTitle = styled.h2.attrs({ className: "cv-section" })`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${COLOR.CLOUD_BURST};
  margin: 16px 0 6px;
  border-bottom: 1px solid ${COLOR.MYSTIC};
  padding-bottom: 3px;
`

const JobBlock = styled.div.attrs({ className: "cv-job" })`
  margin-bottom: 12px;
`

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px;
`

const JobTitle = styled.h3.attrs({ className: "cv-job-title" })`
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  color: #1a1a2e;
`

const JobMeta = styled.span.attrs({ className: "cv-job-meta" })`
  font-size: 12px;
  color: #666;
  white-space: nowrap;
`

const Company = styled.p.attrs({ className: "cv-company" })`
  font-size: 12px;
  font-weight: 600;
  color: ${COLOR.PICTON_BLUE};
  margin: 1px 0 4px;
`

const RoleRow = styled.p.attrs({ className: "cv-role-row" })`
  font-size: 12px;
  color: #555;
  margin: 0 0 2px;
  display: flex;
  justify-content: space-between;
`

const RoleName = styled.span`
  font-style: italic;
`

const BulletList = styled.ul.attrs({ className: "cv-bullets" })`
  margin: 3px 0 0 14px;
  padding: 0;
  list-style: disc;
`

const BulletItem = styled.li.attrs({ className: "cv-bullet" })`
  margin-bottom: 2px;
  font-size: 12px;
  color: #333;
  line-height: 1.4;
`

const Summary = styled.p.attrs({ className: "cv-summary" })`
  font-size: 12px;
  color: #333;
  margin: 3px 0 0;
  line-height: 1.5;
`

const SkillsGrid = styled.div.attrs({ className: "cv-skills" })`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px 24px;
  margin-top: 4px;
`

const SkillRow = styled.div.attrs({ className: "cv-skill-row" })`
  font-size: 12px;
  color: #333;
`

const SkillLabel = styled.span`
  font-weight: 700;
  color: #1a1a2e;
`

const CVContent = () => (
  <>
    <Name>Kevin Tassi</Name>
    <Title>Forward Deployed Engineer &amp; Fullstack Developer</Title>
    <ContactLine>Belgium · <a href="https://www.screenside.be">screenside.be</a></ContactLine>

    <Divider />

    <SectionTitle>Summary</SectionTitle>
    <Summary>
      Fullstack Developer and Engineer with 10+ years of experience building web applications,
      leading engineering teams, and delivering digital products from concept to production.
      Strong background in React, Vue.js, and Node.js. Comfortable across the full stack —
      from database design to UI/UX — with a track record in fast-growing startups and enterprise
      environments. Founder of ScreenSide, a digital agency based in Belgium.
    </Summary>

    <SectionTitle>Experience</SectionTitle>

    <JobBlock>
      <JobHeader>
        <JobTitle>Atlassian</JobTitle>
        <JobMeta>Aug 2025 – Present · Remote</JobMeta>
      </JobHeader>
      <Company>Enterprise Software</Company>
      <RoleRow><RoleName>Forward Deployed Engineer</RoleName><span>Feb 2026 – Present</span></RoleRow>
      <RoleRow><RoleName>Solution Engineer</RoleName><span>Aug 2025 – Jan 2026</span></RoleRow>
      <BulletList>
        <BulletItem>Building the Feedback App integrating seamlessly with the Atlassian Suite on top of Jira Product Discovery.</BulletItem>
        <BulletItem>Transitioned to Forward Deployed Engineer, working directly with strategic customers to drive product adoption and success.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>ScreenSide</JobTitle>
        <JobMeta>Nov 2016 – Present · Belgium</JobMeta>
      </JobHeader>
      <Company>Digital Agency · Founder</Company>
      <BulletList>
        <BulletItem>Web and app development for businesses using React, Vue.js, and Node.js (custom builds, CMS, e-commerce).</BulletItem>
        <BulletItem>Web design, UI/UX, digital branding strategy, SEO, hosting, and database management (SQL, MongoDB).</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>Cycle App</JobTitle>
        <JobMeta>Mar 2022 – Sep 2024 · Brussels · Hybrid</JobMeta>
      </JobHeader>
      <Company>Product Management Tool</Company>
      <RoleRow><RoleName>Founding Product Engineer (Freelance)</RoleName><span>Jul 2023 – Sep 2024</span></RoleRow>
      <RoleRow><RoleName>Founding Engineer (Full-time)</RoleName><span>Mar 2022 – Jul 2023</span></RoleRow>
      <BulletList>
        <BulletItem>Built and led the engineering team from inception, shaping technical culture and standards.</BulletItem>
        <BulletItem>Owned end-to-end development — feature exploration, prioritisation, planning, and delivery.</BulletItem>
        <BulletItem>Contributed to product strategy and roadmap as a founding team member.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>Skipr</JobTitle>
        <JobMeta>Sep 2021 – Mar 2022 · Brussels</JobMeta>
      </JobHeader>
      <Company>Corporate Mobility Platform · Frontend Developer</Company>
      <BulletList>
        <BulletItem>Developed frontend features for a corporate mobility management platform.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>Compliment.me</JobTitle>
        <JobMeta>May 2021 – Aug 2021 · Brussels</JobMeta>
      </JobHeader>
      <Company>Vitamin &amp; Wellness Platform · Lead Developer</Company>
      <BulletList>
        <BulletItem>Led development of a personalised vitamin and supplement recommendation platform.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>Wooclap</JobTitle>
        <JobMeta>Nov 2019 – Apr 2021 · Brussels</JobMeta>
      </JobHeader>
      <Company>Interactive Learning Platform</Company>
      <RoleRow><RoleName>Growth Engineer</RoleName><span>Jan 2021 – Apr 2021</span></RoleRow>
      <RoleRow><RoleName>Developer</RoleName><span>Nov 2019 – Dec 2020</span></RoleRow>
      <BulletList>
        <BulletItem>Focused on frontend and UI/UX development, building scalable strategies to improve user journeys.</BulletItem>
        <BulletItem>Progressed to Growth Engineer: built Jamstack content sites, created shared libraries, set up analytics (Google Analytics, Segment), and drove SEO.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>fishtripr</JobTitle>
        <JobMeta>Nov 2017 – Oct 2019 · Brussels</JobMeta>
      </JobHeader>
      <Company>Fishing-trip Marketplace</Company>
      <RoleRow><RoleName>Lead Front-end Developer</RoleName><span>Jan 2019 – Oct 2019</span></RoleRow>
      <RoleRow><RoleName>Front-end Developer</RoleName><span>Jan 2018 – Jan 2019</span></RoleRow>
      <RoleRow><RoleName>Trainee</RoleName><span>Nov 2017 – Jan 2018</span></RoleRow>
      <BulletList>
        <BulletItem>Grew from trainee to lead developer on a fishing-trip marketplace connecting anglers worldwide.</BulletItem>
        <BulletItem>Stack: Vue.js, Node.js, Express, NoSQL, AWS, CI/CD.</BulletItem>
      </BulletList>
    </JobBlock>

    <JobBlock>
      <JobHeader>
        <JobTitle>FWeb</JobTitle>
        <JobMeta>Jan 2014 – Sep 2017 · Belgium</JobMeta>
      </JobHeader>
      <Company>Web Agency · Junior Developer</Company>
      <BulletList>
        <BulletItem>WordPress development for SMBs; UI/UX design, SEO, and SaaS automation integrations.</BulletItem>
      </BulletList>
    </JobBlock>

    <SectionTitle>Skills</SectionTitle>
    <SkillsGrid>
      <SkillRow><SkillLabel>Languages:</SkillLabel> JavaScript, TypeScript, HTML5, CSS3</SkillRow>
      <SkillRow><SkillLabel>Frontend:</SkillLabel> React, Vue.js, Next.js</SkillRow>
      <SkillRow><SkillLabel>Backend:</SkillLabel> Node.js, Express, REST APIs</SkillRow>
      <SkillRow><SkillLabel>Databases:</SkillLabel> SQL, MongoDB (NoSQL)</SkillRow>
      <SkillRow><SkillLabel>Tools:</SkillLabel> Git, CI/CD, AWS, Jamstack</SkillRow>
      <SkillRow><SkillLabel>Analytics:</SkillLabel> Google Analytics, Segment, SEO</SkillRow>
      <SkillRow><SkillLabel>Design:</SkillLabel> UI/UX, Responsive Design, SASS/LESS</SkillRow>
      <SkillRow><SkillLabel>Other:</SkillLabel> Project Management, Team Leadership</SkillRow>
    </SkillsGrid>
  </>
)

export default CVContent
