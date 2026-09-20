import { photos } from './photos';
import { resolveAssetUrl } from '../utils/assetHelper';

export type PhotoStyle = 'polaroid' | 'cinematic' | 'masonry' | 'filmstrip' | 'scrapbook' | 'carousel';

export interface PhotoMemory {
  id: number;
  src: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  style: PhotoStyle;
  alt: string;
  tag?: string;
  note?: string; // handwritten note for scrapbook/polaroid
}

export interface GiftItem {
  id: string;
  title: string;
  subtitle: string;
  iconType: 'letter' | 'memories' | 'surprise';
  badge: string;
  modalTitle: string;
  modalDescription: string;
  revealContent: {
    heading: string;
    subheading: string;
    quote: string;
    details: string[];
  };
}

export interface BirthdayData {
  config: {
    herName: string;
    herNickname: string;
    myName: string;
    birthdayYear: string;
    specialDate: string;
    relationshipMilestone: string;
  };

  hero: {
    greeting: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    dateBadge: string;
  };

  question: {
    promptLead: string;
    questionText: string;
    yesButtonText: string;
    noButtonStages: string[];
    congratulationsText: string;
    congratulationsSubtext: string;
  };

  question2?: {
    promptLead: string;
    questionText: string;
  };

  loveMatch: {
    promptLead: string;
    questionText: string;
    myLoveLabel: string;
    myLoveValue: string;
    yourLoveLabel: string;
    dragPrompt: string;
    matchSuccessText: string;
    continueButtonText: string;
  };

  appreciation: {
    line1: string;
    line2: string;
    line3: string;
    durationSeconds: number;
  };

  birthdayReveal: {
    preTitle: string;
    title: string;
    sparkleText: string;
    message: string;
    wishes: string[];
  };

  memoryIntro: {
    title: string;
    quoteLine1: string;
    quoteLine2: string;
    subtext: string;
  };

  music: {
    songTitle: string;
    artist: string;
    album: string;
    audioSrc: string;
    albumArt: string;
    personalNote: string;
  };

  gifts: GiftItem[];

  letter: {
    envelopeLabel: string;
    date: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postscript?: string;
  };

  finalSurprise: {
    suspenseText: string;
    mainTitle: string;
    heartfeltMessage: string[];
    closingPromise: string;
    replayCta: string;
  };

  photos: PhotoMemory[];
}

export const birthdayData: BirthdayData = {
  config: {
    herName: "Proma",
    herNickname: "My Favorite Person",
    myName: "[MY_NAME]",
    birthdayYear: "2026",
    specialDate: "20 September 2026",
    relationshipMilestone: "Another beautiful chapter together",
  },

  hero: {
    greeting: "Happy Birthday, Proma",
    subtitle: "Today isn't just another day.",
    description: "It's a little celebration of you — your smile, your warmth, and the immense light you bring into my world every single day.",
    ctaButton: "Begin the surprise",
    dateBadge: "A Special Celebration • 20 September 2026",
  },

  question: {
    promptLead: "Before we continue…",
    questionText: "Do you know how special you are to me?",
    yesButtonText: "YES ❤️",
    noButtonStages: [
      "NO 🙈",
      "Are you sure? 🥺",
      "Really? 😳",
      "Think again! 💗",
      "Nope 😭",
      "Try again 🙈",
      "You don't mean that 🥺",
      "Hmm... really? 👀",
      "Nice try 😌",
      "Absolutely not? 🥺",
      "Wait... think again 💕",
      "Still no? 😭",
      "I'm not accepting that 🙈",
      "One more try? 🥹",
    ],
    congratulationsText: "I knew it. ❤️",
    congratulationsSubtext: "You make life brighter just by existing. Let's see what's waiting for you...",
  },

  question2: {
    promptLead: "BEFORE WE CONTINUE...",
    questionText: "Am I special to you?",
  },

  loveMatch: {
    promptLead: "HOW MUCH?",
    questionText: "How much am I special to you?",
    myLoveLabel: "MY LOVE",
    myLoveValue: "100%",
    yourLoveLabel: "YOUR LOVE",
    dragPrompt: "Drag the heart →",
    matchSuccessText: "Perfect match",
    continueButtonText: "Continue",
  },

  appreciation: {
    line1: "Oh, really?",
    line2: "I knew it. ♡",
    line3: "Thank you, truly.",
    durationSeconds: 10,
  },

  birthdayReveal: {
    preTitle: "It's your day, Proma.",
    title: "Happy Birthday ✨",
    sparkleText: "A day made for the most wonderful girl",
    message: "May this year bring you all the warmth, happiness, laughter, and endless dreams you so richly deserve.",
    wishes: [
      "Endless Smiles",
      "Warm Hugs & Laughter",
      "Unforgettable Adventures",
      "All My Love",
    ],
  },

  memoryIntro: {
    title: "Our Story in Chapters",
    quoteLine1: "Some moments disappear into time…",
    quoteLine2: "But somehow, the little moments with you stay.",
    subtext: "So I kept a few of them here — 32 memories that make my heart smile every time I look back.",
  },

  music: {
    songTitle: "This Song Is Only For You",
    artist: "",
    album: "Memories Edition • 2026",
    audioSrc: resolveAssetUrl('/music/birthday-song.mp3'),
    albumArt: photos.photo01,
    personalNote: "Every time this song plays, it feels like time stops for a second and brings me back to us.",
  },

  gifts: [
    {
      id: "gift-1",
      title: "A Sealed Letter",
      subtitle: "Written from the heart, just for you",
      iconType: "letter",
      badge: "Gift No. 01",
      modalTitle: "A Heartfelt Letter",
      modalDescription: "A letter containing all the words I sometimes struggle to say out loud.",
      revealContent: {
        heading: "To My Dearest Proma",
        subheading: "A little preview before you open the envelope below",
        quote: "“You are my favorite thought at the start of the day and my calmest peace at the end of it.”",
        details: [
          "Every word written with pure love and gratitude.",
          "Keep scrolling to unlock the full wax-sealed envelope.",
          "A keepsake you can read whenever you need a reminder of how cherished you are.",
        ],
      },
    },
    {
      id: "gift-2",
      title: "32 Precious Memories",
      subtitle: "A digital reel of our greatest smiles",
      iconType: "memories",
      badge: "Gift No. 02",
      modalTitle: "Moments We'll Never Forget",
      modalDescription: "From quiet cozy coffee mornings to late-night talks under the stars.",
      revealContent: {
        heading: "Our Unfiltered Happiness",
        subheading: "Captured across 6 cinematic galleries below",
        quote: "“The best thing to hold onto in life is each other.”",
        details: [
          "Polaroids, 35mm film strips, scrapbook keepsakes, and cinematic reels.",
          "Each photo holds an unwritten chapter of us.",
          "Click any picture to relive it in full resolution.",
        ],
      },
    },
    {
      id: "gift-3",
      title: "One More Surprise",
      subtitle: "An unwritten promise for the future",
      iconType: "surprise",
      badge: "Gift No. 03",
      modalTitle: "A Birthday Promise Voucher",
      modalDescription: "Redeemable anytime, anywhere, with zero expiration date!",
      revealContent: {
        heading: "Lifetime VIP Friendship Pass 🎟️",
        subheading: "Valid for endless laughs, favorite snacks, and spontaneous adventures",
        quote: "“Good for unlimited laughter, random adventures, heartfelt conversations, and all the little moments that make our friendship unforgettable.”",
        details: [
          "Unlimited validity across all our adventures.",
          "Includes 100% honest conversations, endless laughs, and always having each other’s back.",
          "Non-transferable — reserved exclusively for Proma.",
        ],
      },
    },
  ],

  letter: {
    envelopeLabel: "For Proma • On Your Birthday",
    date: "20 September 2026",
    salutation: "Dearest Proma,",
    paragraphs: [
      "Happy Birthday, Proma. As I sit down to write this, I find myself thinking about all the little ways you've made my world softer, brighter, and infinitely more meaningful.",
      "You have this quiet, effortless grace — the kind that turns ordinary Tuesdays into memories I cherish, and simple conversations into moments I replay with a smile.",
      "Some friendships become a collection of little things — random conversations, uncontrollable laughter, shared memories, silly moments, and the comfort of knowing someone will always be there. I hope this little corner of your birthday keeps a few of those moments safe, because they are memories I’ll always be grateful for. No matter where life takes us, I hope we continue making many more moments worth remembering. 💗",
      "Thank you for being the sweetest, most thoughtful, and radiant person I know. On this birthday and every one that follows, my only wish is to see you happy, confident, thriving, and deeply loved.",
      "May this year bring you closer to all your dreams, and may every step of the journey remind you how truly special you are.",
    ],
    closing: "Always cheering for you,",
    signature: "",
    postscript: "P.S. Turn the page — there's one final secret waiting for you.",
  },

  finalSurprise: {
    suspenseText: "There's one more thing…",
    mainTitle: "Happy Birthday, Proma. ❤️",
    heartfeltMessage: [
      "No matter where life takes us, or how many birthdays pass by,",
      "I will always be cheering for you, admiring you,",
      "and loving you more with every passing day.",
    ],
    closingPromise: "More memories are waiting for us.",
    replayCta: "Start Again ♥",
  },

  // 32 Curated Photo Entries across 6 distinct presentation styles
  photos: [
    // STYLE 1: POLAROID MEMORY (Photos 1-5)
    {
      id: 1,
      src: photos.photo01,
      title: "Golden Light, Gentle Breeze",
      caption: "A quiet moment under the open sky, where the sunlight feels almost as warm as your smile.",
      date: "Spring Memories",
      location: "Our Favorite Spot",
      style: "polaroid",
      alt: "Golden Light, Gentle Breeze - Proma",
      tag: "Polaroid 01",
      note: "A moment of sunshine",
    },
    {
      id: 2,
      src: photos.photo02,
      title: "Wrapped in Sunshine",
      caption: "Dressed in grace, surrounded by green hills and endless sky — a moment that feels straight out of a dream.",
      date: "Quiet Morning",
      location: "The Little Cafe",
      style: "polaroid",
      alt: "Wrapped in Sunshine - Proma",
      tag: "Polaroid 02",
      note: "A day worth remembering",
    },
    {
      id: 3,
      src: photos.photo03,
      title: "That Little Smile",
      caption: "Sometimes, nothing needs to be said. A smile, a little sparkle, and suddenly the whole moment feels brighter.",
      date: "Breezy Afternoon",
      location: "Park Walk",
      style: "polaroid",
      alt: "That Little Smile - Proma",
      tag: "Polaroid 03",
      note: "Simply you",
    },
    {
      id: 4,
      src: photos.photo04,
      title: "Lost Among the Trees",
      caption: "Hidden beneath towering trees and soft morning light, you turned an ordinary place into a beautiful memory.",
      date: "Weekend Stroll",
      location: "Bakery Street",
      style: "polaroid",
      alt: "Lost Among the Trees - Proma",
      tag: "Polaroid 04",
      note: "Where time felt slower",
    },
    {
      id: 5,
      src: photos.photo05,
      title: "Happiness by the Water",
      caption: "Barefoot, carefree, and playing with the water — one of those little moments that deserves to be remembered forever.",
      date: "Sunset Walk",
      location: "Lakeside Pier",
      style: "polaroid",
      alt: "Happiness by the Water - Proma",
      tag: "Polaroid 05",
      note: "Pure, unfiltered happiness",
    },

    // STYLE 2: FULLSCREEN CINEMATIC (Photos 6-10)
    {
      id: 6,
      src: photos.photo06,
      title: "Little Moments, Beautifully Kept",
      caption: "A quiet collection of notes, little details, and an ordinary moment worth remembering.",
      date: "Summer Twilight",
      location: "Rooftop Garden",
      style: "cinematic",
      alt: "Little Moments, Beautifully Kept - Proma",
      tag: "Cinema Frame 01",
    },
    {
      id: 7,
      src: photos.photo07,
      title: "Lost in the Morning Mist",
      caption: "Wrapped in soft fog and endless green, she found a moment that felt wonderfully far away from everything.",
      date: "Midnight Walk",
      location: "Downtown Lights",
      style: "cinematic",
      alt: "Lost in the Morning Mist - Proma",
      tag: "Cinema Frame 02",
    },
    {
      id: 8,
      src: photos.photo08,
      title: "Where the Sky Opens Wide",
      caption: "A quiet view beneath the open sky, where flags rise into the evening air and the world feels still.",
      date: "Quiet Evening",
      location: "Hilltop Lookout",
      style: "cinematic",
      alt: "Where the Sky Opens Wide - Proma",
      tag: "Cinema Frame 03",
    },
    {
      id: 9,
      src: photos.photo09,
      title: "Beneath the Misty Giants",
      caption: "Looking up through towering trees and drifting mist, a small moment becomes something almost dreamlike.",
      date: "Sunday Solitude",
      location: "Cozy Balcony",
      style: "cinematic",
      alt: "Beneath the Misty Giants - Proma",
      tag: "Cinema Frame 04",
    },
    {
      id: 10,
      src: photos.photo10,
      title: "A Quiet Place to Be",
      caption: "Sunlight, greenery, and a little time to herself — one of those simple moments that feels completely enough.",
      date: "Road Trip",
      location: "Scenic Highway",
      style: "cinematic",
      alt: "A Quiet Place to Be - Proma",
      tag: "Cinema Frame 05",
    },

    // STYLE 3: MASONRY MEMORY WALL (Photos 11-16)
    {
      id: 11,
      src: photos.photo11,
      title: "Above the Valley",
      caption: "Standing among the rocks with the hills stretching quietly into the distance.",
      date: "Mountain Escape",
      location: "Open Skies",
      style: "masonry",
      alt: "Above the Valley - Proma",
      tag: "Mosaic 01",
    },
    {
      id: 12,
      src: photos.photo13,
      title: "Where the Water Falls",
      caption: "A little adventure beside the waterfall, surrounded by green hills, rushing water, and open air.",
      date: "Waterfall Day",
      location: "Into the Wild",
      style: "masonry",
      alt: "Where the Water Falls - Proma",
      tag: "Mosaic 02",
    },
    {
      id: 13,
      src: photos.photo15,
      title: "Dancing Through the Mist",
      caption: "A carefree moment in the mist, where the green hills turned an ordinary walk into a little adventure.",
      date: "Misty Morning",
      location: "Mountain Air",
      style: "masonry",
      alt: "Dancing Through the Mist - Proma",
      tag: "Mosaic 03",
    },
    {
      id: 14,
      src: photos.photo14,
      title: "The Ivy-Covered Hideaway",
      caption: "An old-world retreat wrapped in ivy, waiting quietly among the trees and mountain air.",
      date: "Hidden Retreat",
      location: "Green Hills",
      style: "masonry",
      alt: "The Ivy-Covered Hideaway - Proma",
      tag: "Mosaic 04",
    },
    {
      id: 15,
      src: photos.photo12,
      title: "A Quiet Road Ahead",
      caption: "Taking a pause on the road, with mountain views, blue skies, and nowhere to rush to.",
      date: "Roadside Pause",
      location: "Mountain View",
      style: "masonry",
      alt: "A Quiet Road Ahead - Proma",
      tag: "Mosaic 05",
    },
    {
      id: 16,
      src: photos.photo16,
      title: "A Timeless Portrait",
      caption: "A quiet portrait in monochrome, capturing her smile, elegance, and a moment worth remembering.",
      date: "Monochrome",
      location: "Timeless Moment",
      style: "masonry",
      alt: "A Timeless Portrait - Proma",
      tag: "Mosaic 06",
    },

    // STYLE 4: 35MM FILM STRIP (Photos 17-21)
    {
      id: 17,
      src: photos.photo17,
      title: "By the River",
      caption: "A quiet little moment beside the water, captured in the middle of an unplanned day.",
      date: "Water & Wander",
      location: "Quiet Afternoon",
      style: "filmstrip",
      alt: "By the River - Proma",
      tag: "Reel #01A",
    },
    {
      id: 18,
      src: photos.photo18,
      title: "Golden Traditions",
      caption: "Dressed in white and surrounded by the warmth of a traditional celebration, every detail feels timeless.",
      date: "Tradition & Grace",
      location: "Celebration Day",
      style: "filmstrip",
      alt: "Golden Traditions - Proma",
      tag: "Reel #02A",
    },
    {
      id: 19,
      src: photos.photo19,
      title: "Her Quiet Glow",
      caption: "A timeless black-and-white portrait, capturing a soft expression and the elegance of a fleeting moment.",
      date: "Monochrome Portrait",
      location: "Golden Memory",
      style: "filmstrip",
      alt: "Her Quiet Glow - Proma",
      tag: "Reel #03A",
    },
    {
      id: 20,
      src: photos.photo20,
      title: "Chasing the Breeze",
      caption: "Hair in the wind, greenery rushing past, and one of those spontaneous moments that feels impossible to recreate.",
      date: "Open Road",
      location: "Autumn Escape",
      style: "filmstrip",
      alt: "Chasing the Breeze - Proma",
      tag: "Reel #04A",
    },
    {
      id: 21,
      src: photos.photo21,
      title: "Into the Green",
      caption: "A peaceful pause among the trees, surrounded by misty hills and the calm of the outdoors.",
      date: "Forest Escape",
      location: "Quiet Morning",
      style: "filmstrip",
      alt: "Into the Green - Proma",
      tag: "Reel #05A",
    },

    // STYLE 5: SCRAPBOOK JOURNEY (Photos 22-26)
    {
      id: 22,
      src: photos.photo22,
      title: "Colors We Shared",
      caption: "A little sunshine, a little mischief, and a whole lot of color shared between us.",
      date: "Trip Day",
      location: "Central Station",
      style: "scrapbook",
      alt: "Colors We Shared - Proma",
      tag: "Keepsake 01",
      note: "A whole lot of color ✨",
    },
    {
      id: 23,
      src: photos.photo23,
      title: "Painted in Sunshine",
      caption: "A face full of color, a bright blue sky above, and a moment that needed no filter.",
      date: "Sunday Lawn",
      location: "Botanical Garden",
      style: "scrapbook",
      alt: "Painted in Sunshine - Proma",
      tag: "Keepsake 02",
      note: "A moment that needed no filter 🌿",
    },
    {
      id: 24,
      src: photos.photo24,
      title: "Where the Water Falls",
      caption: "A quiet escape surrounded by green hills, falling water, and the kind of beauty worth stopping for.",
      date: "Diner Night",
      location: "Corner Booth",
      style: "scrapbook",
      alt: "Where the Water Falls - Proma",
      tag: "Keepsake 03",
      note: "Beauty worth stopping for 🌿",
    },
    {
      id: 25,
      src: photos.photo25,
      title: "A Quiet Day Away",
      caption: "An old house, a little greenery, and a peaceful day somewhere away from the usual rush.",
      date: "December Chill",
      location: "Holiday Market",
      style: "scrapbook",
      alt: "A Quiet Day Away - Proma",
      tag: "Keepsake 04",
      note: "Away from the usual rush 🍃",
    },
    {
      id: 26,
      src: photos.photo26,
      title: "Postcards From Your Adventures",
      caption: "Little photographs, forgotten notes, and pieces of places that became part of our story.",
      date: "Lantern Night",
      location: "Riverbank",
      style: "scrapbook",
      alt: "Postcards From Your Adventures - Proma",
      tag: "Keepsake 05",
      note: "Pieces of our story 💌",
    },

    // STYLE 6: MEMORY CAROUSEL (Photos 27-32)
    {
      id: 27,
      src: photos.photo27,
      title: "A Night in Red & Gold",
      caption: "Wrapped in crimson and gold, with laughter, elegance, and a little bit of celebration in every frame.",
      date: "Celebration Night",
      location: "Grand Ballroom",
      style: "carousel",
      alt: "A Night in Red & Gold - Proma",
      tag: "Reel 01",
    },
    {
      id: 28,
      src: photos.photo28,
      title: "Blue-Hued Sisterhood",
      caption: "Two smiles, matching colors, and one simple moment that somehow became a favorite memory.",
      date: "Cozy Dinner",
      location: "Candlelit Patio",
      style: "carousel",
      alt: "Blue-Hued Sisterhood - Proma",
      tag: "Reel 02",
    },
    {
      id: 29,
      src: photos.photo29,
      title: "Whispers Under the Lights",
      caption: "A little secret, a lot of laughter, and the kind of moment that feels like a scene from our own story.",
      date: "Hiking Adventure",
      location: "Summit Peak",
      style: "carousel",
      alt: "Whispers Under the Lights - Proma",
      tag: "Reel 03",
    },
    {
      id: 30,
      src: photos.photo30,
      title: "Three Smiles, One Night",
      caption: "Under the evening lights, three friends, endless laughter, and a moment worth keeping forever.",
      date: "Beach Day",
      location: "Coral Bay",
      style: "carousel",
      alt: "Three Smiles, One Night - Proma",
      tag: "Reel 04",
    },
    {
      id: 31,
      src: photos.photo31,
      title: "Miles, Memories & Boarding Passes",
      caption: "From airport smiles to spontaneous photographs, every ticket marked another little adventure we shared.",
      date: "Dusk Hours",
      location: "Bridge Crossing",
      style: "carousel",
      alt: "Miles, Memories & Boarding Passes - Proma",
      tag: "Reel 05",
    },
    {
      id: 32,
      src: photos.photo32,
      title: "Where the Green Meets Us",
      caption: "A day surrounded by endless green, quiet hills, and four friends making another memory together.",
      date: "Your Birthday Eve",
      location: "Always Together",
      style: "carousel",
      alt: "Where the Green Meets Us - Proma",
      tag: "Reel 06",
    },
  ],
};
