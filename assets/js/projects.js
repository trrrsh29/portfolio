/* ================================================================
   PROJECT DATA
   EDIT: fill in your real project details here.
   This is the single source of truth — update here and it updates
   everywhere (list card + detail page).
   ================================================================ */
const PROJECTS = {
  p1: {
    num: '01',
    title: 'Memo',       // EDIT
    titleItalic: '',                   // EDIT: optional italic word e.g. 'One'
    tags: ['Branding', 'Illustration'],    // EDIT
    year: '2025',                      // EDIT
    brief: 'GRAP2001 — Studio Brief',  // EDIT: course/brief name
    role: 'Solo project',              // EDIT
    shortDesc: 'An illustration series that highlights my original style through character design, concept art, and storytelling.',  // EDIT
    longDesc: `Memo is a collectable project that explores nostalgia, connection and memory through modern branding. Each figurine is primarily made from clay, shaped by hand to preserve the personalisation of the project, then refined using digital tools.  Discussing how handicraft design can exist meaningfully and contribute to the digitalised era of design. Memo celebrates how small, crafted objects can carry vast emotional significance, serving as gentle reminders of the moments, connections, and communities that shape who we are. \n\n The main idea was to find something that would stand out in a saturated market. Researching the existing market, I found out that it depended highly on marketing, branding and storytelling behind each collectable. By studying designers and artists who prioritise emotional connection in their works, I developed an understanding of how collectable culture functions not just as a market, but as a shared social experience. Exploring memories, need for community and nostalgia.`,  // EDIT
    // EDIT: set coverImg to your image filename e.g. 'project1-cover.jpg'
    // Make sure the file is in the same folder as portfolio.html
    coverImg: 'website/ss.png',
    // EDIT: add gallery images e.g. ['project1-a.jpg','project1-b.jpg','project1-c.jpg']
    // Leave as [] if you don't have images yet
    gallery: ['website/memo-2.png', 'website/memo_4.jpg', 'website/memo-3.png'],
    prevProject: null,  // set to 'p3' if you want to link to previous
    nextProject: 'p2',
  },
  p2: {
    num: '02',
    title: 'Typography Book',
    titleItalic: '',
    tags: ['Publication', 'Typography'],
    year: '2023',
    brief: 'GRAP2050 — Publication Design',
    role: 'Solo project',
    shortDesc: 'A specimen book exploring grids, type hierarchy, and typeface.',
    longDesc: `The project involved creating a specimen book to showcase the unique qualities of the typeface Parry Grotesque. It challenged us to explore the full expressive potential of the font while adhering to strict constraints, such as using only elements already within the typeface. No additional shapes, images, or external graphics`,
    coverImg: 'website/book-1.png',
    gallery: ['website/book-6.png', 'website/book-3.png', 'website/book-4.png'],
    prevProject: 'p1',
    nextProject: 'p3',
  },
  p3: {
    num: '03',
   title: 'Light Between Us',
    titleItalic: '',
    tags: ['Branding', 'Experience'],
    year: '2025',
    brief: 'Personal project',
    role: 'Solo',
    shortDesc: 'A project exploring atmosphere, interaction, and visual storytelling in crafted spaces',
    longDesc: `The exhibition explores an interplay of light and shadow through immersive sensory installations. By transforming space through reflection, movement, and form, it invites viewers to experience the subtle shifts in perception that light and shadows create. It offers a quiet yet powerful invitation to slow down, observe, and engage with space in new ways. Challenging perception and leaving viewers with a high-end sensory experience. `,
    coverImg: 'website/Lbu-1.png',
    gallery: ['website/Lbu-5.png', 'website/Lbu-2.png', 'website/Lbu-3.png'],
    prevProject: 'p2',
    nextProject: 'p4',
  },
  p4: {
    num: '04',
    title: 'Magazine',
    titleItalic: '',
    tags: ['Publication', 'Editorial'],
    year: '2023',
    brief: 'Personal project',
    role: 'Solo',
    shortDesc: 'A magazine layout exploring grids, type hierarchy, and how image and text share a page.',
    longDesc: `Designed and developed a magazine that allowed me to explore the fundamentals of editorial design. Throughout the process, learning how to apply alignment, grids, and hierarchy to create a clear structure that guides the reader’s eye and enhances readability. Experimenting with typographic choices, layout systems, and visual balance to establish consistency while maintaining a dynamic flow across pages. `,
    coverImg: 'website/page 5.png',
    gallery: ['website/page 2.png', 'website/page-3.png', 'website/page 4.png'],
    prevProject: 'p3',
    nextProject: 'p5',
  },
  p5: {
    num: '05',
       title: 'Pearline',
    titleItalic: '',
    tags: ['Branding', 'Identity'],
    year: '2024',
    brief: 'Personal project',
    role: 'Solo',
    shortDesc: 'A branding project creating a cohesive visual identity through logo design, typography, colour, and packaging.',
    longDesc: `The brand aims to captivate its audience through engaging and thoughtfully designed packaging, ensuring the product stands out on shelves and leaves a lasting impression. The packaging is not just visually appealing but also serves as an extension of the brand’s personality. Every design element, from color choices to typography and illustrations, is carefully selected to create a sense of excitement and desirability.`,
    coverImg: 'website/Pearline-8.jpg',
    gallery: ['website/socials-01.png', 'website/Pearline-5.png', 'website/Pearline-10.png'],
    prevProject: 'p4',
    nextProject: null,
  },
};

/* ================================================================
   SMALLER / ADDITIONAL PROJECTS
   EDIT: Add entries here to populate the "More Projects" drawer.
   Each entry supports: title, tags[], year, desc, coverImg, link
   Set link to '#' if there's no external URL, or to a project id
   like 'p6' if you add it to the main PROJECTS object above.
   ================================================================ */
const SMALL_PROJECTS = {
  sp1: {
    num: 'S1',
    title: 'The Conversation',
    titleItalic: '',
    tags: ['Publication', 'Editorial'],
    year: '2026',
    brief: 'Studio project',
    role: 'Solo',
    shortDesc: 'Rebranding The Conversation in an Age of Misinformation.',
    longDesc: `The Conversation explores how editorial design can build trust in a media landscape shaped by misinformation, algorithmic content and visual noise. I reimagined the platform for a younger audience, focusing on how credibility could be communicated through structure rather than visual tropes of “authenticity.” \n\n  `,
    coverImg: 'website/conversation-4.jpg',   // EDIT: 'filename.jpg'
    gallery: ['website/conversation-3.jpg', 'website/conversation-2.png', 'website/conversation-1.png'],    // EDIT: ['img1.jpg', 'img2.jpg']
    prevProject: null,
    nextProject: 'sp2',
  },
  sp2: {
      num: 'S2',
    title: 'Future Us',
    titleItalic: '',
    tags: ['experience', 'Branding'],
    year: '2023',
    brief: 'Studio project',
    role: 'Group',
    shortDesc: 'A project done reimagining physical space for people to create and express themselves',
    longDesc: `Inviting young adults to socialise and express their creativity in a safe space by downloading (vision), and browsing their local wall user’s art photos, leave comments on other local artists, look at what’s happening on other walls in different neighbourhoods. Making a QR code to join the forum and decision page and make sure your notifications are turned on to keep updated on local events and challenges for local prizes and giveaways.`,
    coverImg: 'website/vision-4.png',
    gallery: ['website/vision-1.png', 'website/vision-3.png', 'website/vision-2.png'],
    prevProject: 'sp1',
    nextProject: 'sp4',
  },
  //sp3: {
    // num: 'S3',
  //  title: 'Motion Explorations',
  //  titleItalic: '',
    //tags: ['Motion', 'Type'],
   // year: '2024',
   // brief: 'Personal project',
   // role: 'Solo',
   // shortDesc: 'A series of type-driven motion experiments made in After Effects.',
   // longDesc: `A set of short motion pieces using only typographic elements. Each piece started with a constraint — one typeface, one word, one colour.\n\nAdd your own description here.`,
   // coverImg: '',
   // gallery: [],
   // prevProject: 'sp2',
   // nextProject: 'sp4',
 // },
  sp3: {
    num: 'S3',
    title: 'Details',         // EDIT
    titleItalic: '',
    tags: ['Photography', 'Editorial'],  // EDIT
    year: '2025',                  // EDIT
    brief: 'Personal project',     // EDIT
    role: 'Solo',
    shortDesc: 'A publication series showing the everyday details of light and movement we miss.',  // EDIT
    longDesc: `A photography publication exploring the quiet beauty of everyday life through natural light, thoughtful compositions, and subtle details. Designed to encourage slowing down, observing more closely, and appreciating the often-overlooked moments that shape our daily experiences.`,
    coverImg: 'website/photo_.jpg',   // EDIT
    gallery: ['website/photo_1.jpg', 'website/photo_2.jpg', 'website/photo_3.jpg'],    // EDIT
    prevProject: 'sp2',
    nextProject: 'sp4',
  },
  sp4: {
    num: 'S4',
    title: 'NGV Wayfinding',         // EDIT
    titleItalic: '',
    tags: ['Wayfinding', 'Experience'],  // EDIT
    year: '2025',                  // EDIT
    brief: 'Personal project',     // EDIT
    role: 'Solo',
    shortDesc: 'Reimagining the wayfinding experience at the NGV — a signage system designed to integrate into the gallery architecture rather than sit on top of it.',  // EDIT
    longDesc: `This project reimagines the wayfinding system for the National Gallery of Victoria, creating a clearer and more engaging navigation experience for visitors. The proposal combines minimalist typography, intuitive information hierarchy, and sculptural signage that integrates seamlessly with the gallery's architecture. Designed to enhance accessibility and user experience, the system guides movement naturally while preserving the visual identity of the NGV, demonstrating how thoughtful environmental graphic design can improve both functionality and visitor engagement.`,
    coverImg: 'website/ngv-1.png',   // EDIT
    gallery: ['website/ngv-3.jpg', 'website/ngv-5.png', 'website/ngv.-4.png'],   // EDIT
    prevProject: 'sp3',
    nextProject: null ,
 
  },
  // ↓ COPY THIS BLOCK TO ADD MORE SMALL PROJECTS ↓
  // sp6: {
  //   num: 'S6',
  //   title: 'Project Name',
  //   titleItalic: '',
  //   tags: ['Tag One', 'Tag Two'],
  //   year: '2025',
  //   brief: 'Personal project',
  //   role: 'Solo',
  //   shortDesc: 'Short description.',
  //   longDesc: `Longer description here.`,
  //   coverImg: '',
  //   gallery: [],
  //   prevProject: 'sp5',
  //   nextProject: null,
  // },
};

/* ================================================================
   MORE PROJECTS DRAWER + CAROUSEL
   ================================================================ */
