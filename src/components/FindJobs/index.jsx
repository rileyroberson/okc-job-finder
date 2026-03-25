import DistrictMap from './DistrictMap.jsx'

const DISTRICTS = [
  {
    name: 'Oklahoma City Public Schools',
    note: 'Largest district in OKC — frequently posts paraprofessional and TA openings',
    url: 'https://www.applitrack.com/okcps/onlineapp/default.aspx',
  },
  {
    name: 'Putnam City Schools',
    note: 'NW OKC — large district, regular para openings',
    url: 'https://www.applitrack.com/putnamcity/onlineapp/',
  },
  {
    name: 'Edmond Public Schools',
    note: 'North OKC metro — competitive pay, high demand for classroom support',
    url: 'https://www.edmondschools.net/departments/human-resources/employment/',
  },
  {
    name: 'Moore Public Schools',
    note: 'South OKC metro — frequently hiring instructional assistants',
    url: 'https://www.mooreschools.com/cms/one.aspx?portalId=93220&pageId=96590',
  },
  {
    name: 'Midwest City–Del City Schools',
    note: 'East metro — look for Educational Technician and Para listings',
    url: 'https://www.mid-del.net/domain/24',
  },
  {
    name: 'Mustang Public Schools',
    note: 'SW metro growth area — active hiring',
    url: 'https://www.mustangps.org/departments/human_resources/employment_opportunities',
  },
  {
    name: 'Yukon Public Schools',
    note: 'West OKC — smaller district, check for support staff openings',
    url: 'https://www.yukonps.com/page/human-resources',
  },
  {
    name: 'Deer Creek Schools',
    note: 'North metro — growing district with newer facilities',
    url: 'https://www.dcsok.org/page/employment',
  },
  {
    name: 'Western Heights Public Schools',
    note: 'West OKC — smaller district with community-focused programs',
    url: 'https://www.westernheights.k12.ok.us/page/employment',
  },
  {
    name: 'Choctaw-Nicoma Park Schools',
    note: 'East OKC metro — check support staff listings',
    url: 'https://www.cnpschools.org/page/human-resources',
  },
  {
    name: 'Crooked Oak Public Schools',
    note: 'South OKC — smaller district, call HR directly if no online posting',
    url: 'https://www.crookedoak.k12.ok.us/',
  },
  {
    name: 'Luther Public Schools',
    note: 'NE metro — rural adjacent, check for para support roles',
    url: 'https://www.lutherps.org/',
  },
]

const JOB_BOARDS = [
  {
    name: 'OKJobMatch (Oklahoma Works)',
    note: 'Oklahoma\'s official state job board — filter by "Education, Training & Library"',
    url: 'https://okjobmatch.com/jobs/results/?q=paraprofessional&location=Oklahoma+City%2C+OK&radius=25',
  },
  {
    name: 'Indeed',
    note: 'Largest general job board — aggregates district listings and private school openings',
    url: 'https://www.indeed.com/jobs?q=paraprofessional+teacher+assistant&l=Oklahoma+City%2C+OK&radius=25',
  },
  {
    name: 'LinkedIn Jobs',
    note: 'Good for charter schools and nonprofits — set alerts for "paraprofessional Oklahoma City"',
    url: 'https://www.linkedin.com/jobs/search/?keywords=paraprofessional%20teacher%20assistant&location=Oklahoma%20City%2C%20Oklahoma',
  },
  {
    name: 'SchoolSpring',
    note: 'Education-only job board — specifically designed for K-12 positions',
    url: 'https://www.schoolspring.com/jobs?q=paraprofessional&location=Oklahoma+City%2C+OK',
  },
  {
    name: 'Frontline Recruiting (AppliTrack)',
    note: 'Many OKC districts use this platform — one login, multiple districts',
    url: 'https://www.frontlineeducation.com/solutions/recruiting-hiring/',
  },
  {
    name: 'ZipRecruiter',
    note: 'Worth checking — private and charter schools often post here',
    url: 'https://www.ziprecruiter.com/Jobs/Paraprofessional/--in-Oklahoma-City,OK',
  },
  {
    name: 'Oklahoma State Dept. of Education — Job Listings',
    note: 'Official OSDE job board — state-funded programs and special education positions',
    url: 'https://sde.ok.gov/employment-opportunities',
  },
]

const PRIVATE_ORGS = [
  {
    name: 'Heartspring (Tulsa — worth the drive for right candidate)',
    note: 'Special education school — always seeking paraprofessionals with behavioral support experience',
    url: 'https://www.heartspring.org/careers',
  },
  {
    name: 'Community Based Support Services (CBSS)',
    note: 'OKC-area developmental disabilities org — hires classroom and home support staff',
    url: 'https://cbssok.org/careers',
  },
  {
    name: 'Easter Seals Oklahoma',
    note: 'Disability services — hiring for early intervention and classroom support roles',
    url: 'https://www.eastersealsok.org/join-our-team',
  },
  {
    name: 'YMCA of Greater Oklahoma City',
    note: 'Before/after school programs — similar role to TA, can build classroom experience',
    url: 'https://www.ymcaokc.org/jobs',
  },
]

function LinkCard({ name, note, url }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs mt-0.5">{note}</p>
        </div>
      </div>
      <div className="mt-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-[#003087] text-white px-3 py-1.5 rounded hover:bg-blue-800 transition-colors"
        >
          Visit Jobs Page
        </a>
      </div>
    </div>
  )
}

export default function FindJobs() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Find Jobs</h2>
        <p className="text-sm text-gray-600 mt-1">
          Direct links to OKC-area school district job boards and general job sites.
          Most districts use Frontline/AppliTrack — create one account and apply to multiple.
        </p>
      </div>

      <section>
        <DistrictMap />
      </section>

      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#003087] inline-block" />
          OKC Area School Districts
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {DISTRICTS.map((d) => <LinkCard key={d.name} {...d} />)}
        </div>
      </section>

      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8102E] inline-block" />
          General Job Boards
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {JOB_BOARDS.map((d) => <LinkCard key={d.name} {...d} />)}
        </div>
      </section>

      <section>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
          Private & Nonprofit Organizations
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          Similar roles to paraprofessional — great for building special ed experience or transitioning from one setting to another.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PRIVATE_ORGS.map((d) => <LinkCard key={d.name} {...d} />)}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>Pro tip:</strong> Create a Frontline Education account once at{' '}
        <a href="https://www.applitrack.com" target="_blank" rel="noopener noreferrer" className="underline">
          applitrack.com
        </a>{' '}
        — your application, resume, and references carry over to every district that uses it (OKCPS, Edmond, Moore, Putnam City, and more).
      </div>
    </div>
  )
}
