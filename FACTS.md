# Facts log — Espee Kaipo website

Researched on Thursday 26 November 2026 (Pacific/Auckland, NZDT, UTC+13).  
Rule: only verified facts from the briefed sources go on the site. Anything else is recorded here and either marked as a placeholder or listed as unused/unverified.

## Briefed sources

1. https://harcourts.net/nz/office/te-atatu-south/people/espee-kaipo  
   Plus listing pages and the office contact page under the same Harcourts Te Atatu South site (used to complete listing specs, open-home times, and office address).
2. https://www.linkedin.com/in/espee-kaipo-845031126/
3. https://www.facebook.com/espeerealestate/

## What could not be accessed

| Source | Result | What a logged-in browser pass should collect |
| --- | --- | --- |
| Facebook page `facebook.com/espeerealestate/` | WebFetch timed out. `curl` was redirected to a login wall (HTTP 400 after 302). Web search returned no public snippets. | About text, profile photo, phone/email if shown, current posts, testimonials, listing announcements, Instagram/other links, page name / handle confirmation. |
| LinkedIn profile (full page) | WebFetch returned a public preview only: name, location, headline, truncated About, activity, volunteer roles, languages, and redacted Experience/Education headings. A fuller public snippet was available via WebSearch. `curl` returned HTTP 999 (blocked). | Full About text, complete experience dates and locations, education details, featured testimonials, current contact info, and a usable profile photo (do not hotlink). |
| Cloudhi / Harcourts JSON API (`https://api.cloudhi.io/api/...`) | Root and guessed listing endpoints returned 404. `GET /api/team-members/{id}` returned `401 Authorization Token not found`. Member id on the profile is `bebc2ce3-979b-4983-b4f0-0378cdbd60c2`. | Any official API listing of further sold/current properties, sale prices, and open-home feeds. |
| Sale prices | None of the six sold listings on her Harcourts profile publish a sale price (the JSON `price` field is empty). | Confirmed sold prices Espee is happy to publish, if any. |
| Testimonials (full text) | Not present on the Harcourts profile. LinkedIn activity shows she shared RateMyAgent review *titles* (“Life Saver!”, “Espee is the best!”, “Great Experience and Highly Recommended”) about five years ago, but not the review bodies or attributions. | Permissioned, named testimonials with full wording. |
| Official position title on Harcourts | The profile `<title>` and meta literally read `Espee Kaipo – [position] \| Harcourts Te Atatu South`. | Confirm the title to use (LinkedIn and her Harcourts bio say “Real Estate Consultant”). |
| Personal logo, brand photography, domain, form endpoint, Harcourts logo artwork and brand rules | Not in the briefed sources. | See “Still needed from Espee” at the end. |

## Facts used on the site, with sources

### Identity and role

| Fact | Source |
| --- | --- |
| Name: Espee Kaipo | Harcourts profile; LinkedIn |
| Role used on the site: Real Estate Consultant | Harcourts “About Espee” bio (“Experienced Real Estate Consultant”); LinkedIn headline “Real Estate Consultant at Harcourts Real Estate” |
| Office: Harcourts Te Atatu South | Harcourts profile |
| Agency legal line: Shelter Realty Ltd Licensed under REAA 2008 | Footer of her Harcourts profile page |
| Phone: 027 818 3669 (`tel:+64278183669`) | Harcourts profile (displayed as 0278183669) |
| Email: espee.kaipo@harcourts.co.nz | Harcourts profile (`mailto:`) |
| Official portrait (used locally, not hotlinked): `https://assets.cloudhi.io/system/team-members/c77c1a5c-92bf-4bfe-94f2-247d77f28357.jpg` | Harcourts profile / `og:image`. Copied to `assets/img/espee-portrait.jpg`. This is clearly her own profile photograph. Listing property photos were **not** reused. |
| LinkedIn: https://www.linkedin.com/in/espee-kaipo-845031126/ | Brief, confirmed by fetch |
| Facebook page URL (unverified beyond the URL itself): https://www.facebook.com/espeerealestate/ | Brief; page content not retrieved |

### About (Harcourts bio, paraphrased on the site — not copied verbatim)

From the Harcourts “About Espee” section:

- Experienced real estate consultant with a demonstrated history in the industry; skilled in negotiation, sales and marketing.
- Local knowledge from living and working in West Auckland for more than 30 years.
- Has earned a reputation for integrity, honesty and professionalism (this is the agency’s own wording about her; it is not an independent award or third-party citation, and the site does not treat it as one).
- Speaks English and Filipino, and also works with investors, developers and mortgage brokers.
- Emphasises hard work and listening to clients’ needs.

### About (LinkedIn public profile / public search snippet)

- Location: Auckland, New Zealand.
- About (truncated on fetch; fuller on search snippet): “Experienced Real Estate Consultant with a demonstrated history of working in the real estate industry. Skilled in Negotiation, Sales, and Creative Entrepreneurship. Strong real estate professional and studied overseas and The University of Auckland.”
- Languages: English, Spanish, Tagalog, Visayan — Native or bilingual proficiency. (Harcourts says “English and Filipino”; Tagalog and Visayan are Philippine languages. The site mentions English, Filipino, Spanish, Tagalog and Visayan, with sources as above.)
- Experience (from the public LinkedIn search snippet; dates were redacted in the raw WebFetch):
  - Real Estate Consultant, Harcourts Real Estate — Nov 2020–present.
  - Licensed Real Estate Consultant, Ray White Universal, Auckland — Jan 2020–Nov 2020.
  - Real Estate Consultant, Barfoot & Thompson, Auckland — Nov 2017–Dec 2019.
  - Sales Manager, Shah Homes Limited — Sep 2000–Jun 2005. LinkedIn lists the location as “Henderson, Nevada, United States”. This may be a location typo (Henderson is also a West Auckland suburb). **Not used on the site.**
  - Real Estate Consultant, Harcourts Love Realty, Te Atatu South — Jan 2000–Aug 2000.
  - Real Estate Consultant, Rex Davy Real Estate, Glendene, Auckland — Jul 1997–Jan 2000.
  - Mortgage Broker, Mortgage Eliminator — Jan 1995–Jan 1997.
- Education (public search snippet):
  - University of Auckland — English Language and Literature / Letters, 2010–2013, Auckland.
  - Philippine College of Commerce — Bachelor of Science in Commerce, Accounting, Banking & Finance, Commercial Law, Management, Economics, Stenography/Secretarial; full scholar, 1972–1976.
- Volunteer (WebFetch, recorded here, **not used on the marketing site** pending Espee’s preference):
  - President in Primary, Young Women & Relief Society — The Church of Jesus Christ of Latter-day Saints.
  - Self Reliance Specialist (Mentor) — same organisation, May 2019–present. Description: facilitates self-reliance classes covering finance, work, education, food production/storage, problem solving, perseverance and integrity.
- Follower count on the public preview: 76 followers. Not used on the site.

### Office address and phones (Harcourts office contact page, not her personal profile)

Source: https://harcourts.net/nz/office/te-atatu-south/contact (same Harcourts office as her profile).

| Fact | Notes |
| --- | --- |
| Harcourts Te Atatu South, 263 Te Atatu Road, Te Atatū South, phone 09 834 3055 | Used on the site as the office address, with this source. |
| `enquiries.teatatusouth@harcourts.co.nz` | Present in the contact-page HTML; WebFetch’s visible text did not clearly show it. **Not used** — her direct email is sufficient. |
| Harcourts New Lynn, 3103 Great North Road, New Lynn, Mon–Fri 09:00 am–05:00 pm, 09 825 1000, newlynn@harcourts.co.nz | Recorded only. Auction for 2A Newham Place is listed “In Rooms 3101 Great North Road, New Lynn” (note 3101 vs 3103). |
| Harcourts Avondale, 1904 Great North Road, Avondale, 09 820 0024 | Recorded only. |

### Current listings (Harcourts profile + individual listing pages), 26 Nov 2026

Property photos were not copied or hotlinked. Cards use labelled placeholders and link to the official listing.

**2A Newham Place, Henderson, NZ 0610**  
- Type: House for sale. 4 bedrooms, 2 bathrooms. Profile card also shows 1 garage.  
- Price method: Auction 8 Dec 2026 (unless sold prior).  
- Auction: 8 December 2026, 11:00 AM, In Rooms, 3101 Great North Road, New Lynn. (Listing body also says “AUCTION – 8 DECEMBER, 11AM, at Harcourts Shelter New Lynn office”.)  
- Open homes (NZDT as published on the listing): Saturday 28 November 2026, 1:00 pm–1:30 pm; Sunday 29 November 2026, 1:00 pm–1:30 pm. Calendar payloads confirm the location as 2A Newham Place, Henderson, NZ.  
- Official URL: https://harcourts.net/nz/office/te-atatu-south/people/espee-kaipo/listing/l43741448-2a-newham-place-henderson-nz-0610  
- Marketing headline on Harcourts (“NO PLAN B! MUST BE SOLD AT AUCTION!”) was **not** reused. Site copy is factual only.  
- Listing body describes four bedrooms, two bathrooms including a master ensuite, and open-plan kitchen, dining and lounge. Not quoted verbatim.

**11/32 Brandon Road, Glen Eden, NZ 0602**  
- Type: Townhouse for sale. 3 bedrooms, 1 bathroom. Profile card third figure appears to be an “open space” icon, not clearly a garage — parking **not stated** on the site.  
- Price guide: Enquiries Over $600,000.  
- No open-home times were found on the listing page.  
- Official URL: https://harcourts.net/nz/office/te-atatu-south/people/espee-kaipo/listing/l42533348-11-32-brandon-road-glen-eden-nz-0602  
- Harcourts headline (“Vacant. Modern. Practical. Ready”) was not reused as a slogan; the listing notes it is two-level, three bedrooms upstairs, family bathroom, downstairs living, modern kitchen. Paraphrased lightly, no invented specs.  
- For rent / leased tabs on her profile: “No properties found”.

### Sold results (verified on her Harcourts profile + listing pages)

Sale prices are **not published** on these pages and are **not shown** on the site. Dates below are the “Sold Date” on each listing page.

| Address | Type | Beds / baths / parking | Sold date | Listing URL |
| --- | --- | --- | --- | --- |
| 37 Winery Way, Henderson, NZ 0610 | Townhouse | 3 bed, 2 bath, 1 garage. Floor area stated as 100 square metres on the listing. | 20 November 2024 | …/l30345671-37-winery-way-henderson-nz-0610 |
| 31 Railway Street, Papakura, NZ 2110 | House | 3 bed, 1 bath, 2 garage | 5 February 2024 | …/l25993207-31-railway-street-papakura-nz-2110 |
| 72B St Georges Road, Avondale, NZ 1026 | Townhouse | 3 bed, 2 bath, 1 garage | 26 January 2024 | …/l25993194-72b-st-georges-road-avondale-nz-1026 |
| 3/11 Reid Road, New Lynn, Auckland | Townhouse | 3 bed, 2 bath, 1 garage | 18 May 2023 | …/ts27747-3-11-reid-road-new-lynn-auckland |
| 3/5 Keeling Road, Henderson, Auckland 0612 | Unit | 2 bed, 1 bath, 1 carport | 17 May 2023 | …/ts230422-3-5-keeling-road-henderson-auckland-0612 |
| 1 Rata Street, Waiuku, Auckland 2123 | House | 3 bed, 1 bath, 1 carport (JSON). Profile also shows a garage/open-space icon — parking shown on the site as 1 carport only. | 8 August 2022 | …/ts220703-1-rata-street-waiuku-auckland-2123 |

“View more” on the profile links to the general office listings page, not a complete personal sold history. These six are what the profile itself lists.

### Testimonials

No verified testimonial text is used. The testimonials section is an honest placeholder.

## Facts found elsewhere — not used on the site

These came from pages that were **not** in the brief. Recorded so they can be confirmed later. **Do not treat them as verified for publication.**

- realestate.co.nz agent profile (https://www.realestate.co.nz/agent/676103/espee-kaipo): office line “Shelter Realty Ltd (Licensed: REAA 2008) – Harcourts, Te Atatu South”; address given as **288 Te Atatu Road, auckland** (conflicts with **263 Te Atatu Road** on the official Harcourts contact page). Extra current listings not on her Harcourts profile as of this research: Lot 56/148 McLeod Road, Te Atatu South ($729,000, 2-bed townhouse); Lot 48/250 Great North Road, Henderson ($989,000, 3 bed 2 bath townhouse); Lot 14/250 Great North Road, Henderson ($1,049,000, 3 bed 2 bath); Lot 12/250 Great North Road, Henderson ($1,069,000 townhouse); Lot 4/250 Great North Road, Henderson ($879,000, 2 bed 2 bath). Also lists 11/32 Brandon Road and 2A Newham Place (matches Harcourts).
- OneRoof (https://www.oneroof.co.nz/agent/espee-kaipo-98562): “Sales Consultant”; “16 Total sold properties” over the last 12 months (average sale price not visible in the snippet). **Not used** — third-party statistic, not from the briefed sources, and no average was even displayed.
- homes.co.nz profile: a longer bio (commerce/finance/business-law background; “clients for life”; first-home and portfolio buyers; invitation to “pop in for a cuppa”). **Not used**, because it is not from the three briefed sources.
- Trade Me agent profile snippets: “Reviews & Testimonials (13)” and truncated RateMyAgent quotes, some with addresses and prices. **Not used** — incomplete text, not from the briefed sources, and not permission-checked.
- An unofficial directory mentioned https://www.espeekaipo.co.nz/. A `curl` to that host did not complete in this environment (no HTTP response). **Not used as a live domain.**
- Search indexers stated “22 years and 9 months” or “26 years” of experience. These are calculated figures, not a first-party claim. **Not used.**

## Media used on the site

- Walkthrough reels from `/workspace/video/real-estate-walkthrough-1/`: `real-estate-walkthrough-1_v2.mp4` (1080×1920, 30 fps, 38.80 s, no audio, H.264 High, ~9.0 Mbps) and `real-estate-walkthrough-1_v2_placeholders.mp4` (same duration/size, placeholder typography `[Address]` / `[Price guide]`). Compressed copies are in `assets/video/`. Poster is a still from v2 (not the v2 contact-sheet image). The reel is presented as a property walkthrough, **not** labelled as a named current listing — the address is not verified in the briefed sources.
- Hero still: frame from the same v2 reel (porch).
- Official Harcourts profile portrait, local copy, as noted above.

## Still needed from Espee

- Approved personal or Harcourts-compliant logo / wordmark, and Harcourts brand rules for using the Harcourts name and marks.
- Additional or preferred photographs (lifestyle, office, current listing photography she is licensed to use).
- Confirmation of official job title (Harcourts profile still says `[position]`).
- Confirmation of office street address (263 vs 288 Te Atatu Road).
- Any further current listings (including the Great North Road / McLeod Road lots if they are hers), open-home times for Brandon Road, and any sold results or sale prices she wants published.
- Permissioned testimonials (full text, names, and whether a suburb may be mentioned).
- Preferred domain and whether espeekaipo.co.nz should be used.
- Form endpoint (or CRM) for the appraisal / contact form.
- Social profiles beyond LinkedIn and the Facebook URL (Instagram, TikTok, etc.), and a logged-in check of the Facebook page.
- Whether her church volunteer roles or the Shah Homes / “Henderson, Nevada” LinkedIn entry should appear anywhere.
- Whether the official profile portrait may stay on the site long term.


## Updates — Thursday 26 November 2026, evening (NZDT)

### Instagram (verified)

https://www.instagram.com/espeekaipo/ appears as Espee’s Instagram link on her official Harcourts profile page (title=“Instagram”, `fab fa-instagram`). Used in the site header, footer, About and contact sections. The office Instagram https://www.instagram.com/harcourts_shelterealty (and office Facebook, YouTube and LinkedIn) are on the same Harcourts page as Shelter Realty channels, not as her personal profiles, and are not presented as hers.

### realestate.co.nz listings (authorised additional source)

Fetched 26 November 2026 at 7:57 pm NZDT (Pacific/Auckland) from https://www.realestate.co.nz/agent/676103/espee-kaipo

- HTTP 200, public HTML (360,495 bytes). Not blocked. Listing fields also read from the page’s Next.js `self.__next_f` payload and from visible tile headings.
- JSON-LD on that page: LocalBusiness, name Espee Kaipo, telephone 027 818 3669, member “Harcourts - Te Atatu South”, address in tiles “288 Te Atatu Road, auckland”.
- Six active listings (no seventh on the agent page at this fetch). An earlier web-search snippet had also mentioned Lot 4/250 Great North Road at $879,000; that address was **not** in the six listings on the page at 7:57 pm and is not published on the Listings page.

| Address | Type | Headline (as published) | Price / method (visible tile) | Beds / baths / parking | Floor / land | Open homes | URL | Listing no. | First published (feed) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2A Newham Place, Henderson | House | NO PLAN B! MUST BE SOLD AT AUCTION! | Auction. Auction 8 Dec 2026, 11:00 AM NZDT (+13:00), in rooms 3101 Great North Road, New Lynn | 4 / 2 / 1 garage (`parkingGarageCount`: 1) | 140 m² floor, 370 m² land | Sat 28 Nov 2026 1:00–1:30 pm; Sun 29 Nov 2026 1:00–1:30 pm NZDT | https://www.realestate.co.nz/43177342/residential/sale/2a-newham-place-henderson | TS29237 | 20 Nov 2026 |
| 11/32 Brandon Road, Glen Eden | Townhouse | Vacant. Modern. Practical. Ready | Enquiries Over $600,000 | 3 / 1 / 1 “other” parking (`parkingOtherCount`: 1; not a garage) | 86 m² floor; land not in the agent-profile data | None published (`openHomes`: []) | https://www.realestate.co.nz/43130136/residential/sale/11-32-brandon-road-glen-eden | TS28998 | 17 Sep 2026 |
| Lot 56/148 McLeod Road, Te Atatu South | Townhouse | First Home Buyers to Savvy Investors | $729,000 (fixed price). The feed stored `$$729,000`; the visible tile is `$729,000` | 2 / 1 / 1 other parking | 84 m² floor, 107 m² land | None published | https://www.realestate.co.nz/42368687/residential/sale/lot-56-148-mcleod-road-te-atatu-south | NE230206 | 24 May 2023 |
| Lot 48/250 Great North Road, Henderson | Townhouse | First Home Buyers to Savvy Investors | $989,000 | 3 / 2 / parking counts all zero in the feed | 97 m² floor, 74 m² land | None published | https://www.realestate.co.nz/42306334/residential/sale/lot-48-250-great-north-road-henderson | NE230123 | 31 Jan 2023 |
| Lot 14/250 Great North Road, Henderson | Townhouse | First Home Buyers to Savvy Investors | $1,049,000 | 3 / 2 / 1 other parking | **25 m² floor** as published in the feed (unusually small for a 3-bed townhouse — flag for confirmation), 58 m² land | None published | https://www.realestate.co.nz/42306333/residential/sale/lot-14-250-great-north-road-henderson | NE230122 | 31 Jan 2023 |
| Lot 12/250 Great North Road, Henderson | Townhouse | First Home Buyers to Savvy Investors | $1,069,000 | 3 / 2 / 1 other parking | Floor and land area both `null` in the feed | None published | https://www.realestate.co.nz/42306327/residential/sale/lot-12-250-great-north-road-henderson | NE230121 | 31 Jan 2023 |

The first two listings also appear on Espee’s Harcourts profile. The McLeod Road and Great North Road lots do not appear on that Harcourts “For Sale” list (checked the same day). All six are shown on listings.html because Sam asked for every active listing on the realestate.co.nz agent page. Listing photographs were not copied or hotlinked.

Newham rates figure $3,269.95 per annum exists in the feed; not shown on the cards unless needed later.

### Colour

Harcourts official CSS (`https://resources.cloudhi.io/int/css/styles.min.css`, also reflected in page CSS and the profile HTML) uses:

- Navy `--bs-navy` / `--bs-body-color`: **#001F49** (also body text colour; 16.25:1 on white, WCAG AAA)
- Brand cyan `--bs-brand-color` / `--bs-cyan`: **#00ADEF** (2.55:1 on white — **fails AA as text**; used only as a decorative accent. 6.36:1 on navy, which is AA for text on dark bands)
- White body background
- Dark cyan **#00688F** also appears in that stylesheet and is 6.22:1 on white (AA) — used for in-body links
- Pale fills used for soft bands: #F4F8FD, #E9F0F9, #DFF7FF

The site uses white backgrounds, navy text and navy dark sections, with cyan as an accent only. The Harcourts **logo is not used**. Brand-rule approval (and any required logo artwork) remains an item Espee / Harcourts must supply.

### Social links used on the site

All used in the header, mobile menu, footer, About page and contact sections, with accessible names:

- Facebook: https://www.facebook.com/espeerealestate/ (brief; also linked from her Harcourts profile). Page body still not retrieved (login wall).
- LinkedIn: https://www.linkedin.com/in/espee-kaipo-845031126/
- Instagram: https://www.instagram.com/espeekaipo/ (Harcourts profile)
- Harcourts profile: https://harcourts.net/nz/office/te-atatu-south/people/espee-kaipo
- realestate.co.nz profile: https://www.realestate.co.nz/agent/676103/espee-kaipo

No personal TikTok or X/Twitter profile was found on the briefed pages.
