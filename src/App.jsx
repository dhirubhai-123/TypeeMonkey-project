import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const words = [
    // "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
    // "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    // "this", "but", "his", "by", "from", "they", "we", "say", "her",
    // "or", "an", "will", "my", "one", "would", "there", "their",
    // "what", "so", "up", "out", "if", "about", "who", "which",
    // "me", "when", "make", "like", "time", "no", "just", "him", "know",
    // "people", "into", "year", "your", "good", "some", "could", "them", "see",
    // "other", "than", "then", "now", "look", "only", "its", "over", "think",
    // "also", "back", "after", "use", "two", "how", "our", "work", "first", "well",
    // "way", "even", "new", "want", "because", "any", "these", "give", "day", "most",
    // "us", "are", "is", "was", "were", "being", "been", "am", "might",
    // "down", "go", "she", "take", "get", "come", "all", "more", "can",
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "person", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "is", "are", "was", "were", "has", "had", "been", "said", "did", "more", "may", "here", "people", "man", "where", "aberration", "acquiesce", "ambiguous", "anachronistic", "auspicious", "benevolent", "boisterous", "camaraderie", "capitulate", "circumspect", "cognizant", "conundrum", "credibility", "debilitating", "dichotomy", "disparage", "ebullient", "eclectic", "elucidate", "empathy", "ephemeral", "exacerbate", "facetious", "fortuitous", "gregarious", "idiosyncratic", "impeccable", "incorrigible", "indigenous", "intrepid", "juxtapose", "lackadaisical", "lament", "loquacious", "magnanimous", "meticulous", "munificent", "nebulous", "nonchalant", "obfuscate", "ostentatious", "paradigm", "pedantic", "perfunctory", "perspicacious", "precocious", "quintessential", "recalcitrant", "redolent", "reprehensible", "sagacious", "scrupulous", "serendipity", "soliloquy", "sophomoric", "sporadic", "stigmatize", "substantiate", "supercilious", "surreptitious", "taciturn", "tantamount", "temerity", "tenacity", "trepidation", "ubiquitous", "unilateral", "unprecedented", "unscrupulous", "venerable", "vicarious", "vindicate", "vitriolic", "vociferous", "volition", "voracious", "wanton", "whimsical", "xenophile", "zealous", "bellicose", "brevity", "candor", "chicanery", "disenfranchise", "enervate", "fastidious", "fatuous", "fecund", "guile", "imminent", "impecunious", "inchoate", "inimical", "insipid", "intransigent", "inveterate", "lachrymose", "abundance", "adventure", "alliance", "amplify", "ballet", "biodiversity", "bravery", "calamity", "cerulean", "champion", "charisma", "clandestine", "commemorate", "compassion", "crescendo", "curiosity", "decipher", "diligence", "elixir", "enigma", "epiphany", "euphoria", "fathom", "fortitude", "glimmer", "grace", "harmony", "heliotrope", "horizon", "iconoclast", "inception", "infinitesimal", "innovation", "inspiration", "jubilant", "labyrinth", "luminescence", "mellifluous", "metamorphosis", "mirage", "mirth", "mosaic", "nuance", "oblivion", "opulence", "pandemonium", "paragon", "perennial", "perseverance", "philosophy", "pinnacle", "placid", "radiance", "rejuvenate", "resonance", "reverence", "solitude", "sophisticated", "spectacle", "sublime", "symphony", "tangible", "tantalize", "tempestuous", "transcendent", "tranquility", "unfathomable", "vanguard", "venerate", "vicinity", "vigilance", "vivacious", "wilderness", "zephyr", "zenith", "zeal", "aesthetic", "anachronism", "believe", "catalyst", "demure", "embellish", "grandeur", "idyllic", "quixotic", "serene", "vestige"
  ];

  // const words = ["dhiraj", "lotan", "khedkar"]

  const numbers = [
    "444", "555", "666", "777", "888", "999",
    "433", "2354", "435", "676", "467", "776", "898", "567",
    "8583", "4847", "3933", "9484", "3883", "3383", "4094", "3038", "393839",
    "39380", "4403", "38330", "29283", "3444", "54656", "34354", "7645",
    "4334", "93839", "3938", "837337", "337849", "937948", "3837394", "83733",
    "343", "657", "346", "38338", "5894", "39383", "1545", "3343", "3443",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
    "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
    "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
    "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",
    "101", "102", "103", "104", "105", "106", "107", "108", "109", "110",
    "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
    "121", "122", "123", "124", "125", "126", "127", "128", "129", "130",
    "131", "132", "133", "134", "135", "136", "137", "138", "139", "140",
    "141", "142", "143", "144", "145", "146", "147", "148", "149", "150",
    "151", "152", "153", "154", "155", "156", "157", "158", "159", "160",
    "161", "162", "163", "164", "165", "166", "167", "168", "169", "170",
    "171", "172", "173", "174", "175", "176", "177", "178", "179", "180",
    "181", "182", "183", "184", "185", "186", "187", "188", "189", "190",
    "191", "192", "193", "194", "195", "196", "197", "198", "199", "200",
    "201", "202", "203", "204", "205", "206", "207", "208", "209", "210",
    "211", "212", "213", "214", "215", "216", "217", "218", "219", "220",
    "221", "222", "223", "224", "225", "226", "227", "228", "229", "230",
    "231", "232", "233", "234", "235", "236", "237", "238", "239", "240",
    "241", "242", "243", "244", "245", "246", "247", "248", "249", "250",
    "251", "252", "253", "254", "255", "256", "257", "258", "259", "260",
    "261", "262", "263", "264", "265", "266", "267", "268", "269", "270",
    "271", "272", "273", "274", "275", "276", "277", "278", "279", "280",
    "281", "282", "283", "284", "285", "286", "287", "288", "289", "290",
    "291", "292", "293", "294", "295", "296", "297", "298", "299", "300"
  ]

  const punctuations = [
    // ".", ",", "!", "?", "'", "\"", ";",
    // "]", "{", "}", "...", "@", "#", "$",
    // "%", "^", "&", "*", "_", "=", "+",
    // "/", "\\", "|", "<", ">", "~", "`",
    // ":", "-", "—", "(", ")",

    "hello,", "world!", "naughty\\", "wow:", "yes?", "no.", "however-", "therefore,", "indeed!", "amazing;", "great:", "perhaps?", "sure.", "certainly;", "yet!", "maybe;", "thus:", "why?", "because.", "naturally,", "incredible!", "fabulous;", "fantastic:", "obviously?", "remarkable.", "perfect,", "great!", "wonderful;", "exceptional:", "definitely?", "unbelievable.", "certainly,", "brilliant!", "marvelous;", "outstanding:", "surely?", "unquestionable.", "exciting,", "beautiful!", "gorgeous;", "lovely:", "charming?", "delightful.", "graceful,", "pretty!", "magnificent;", "elegant:", "splendid?",
    "facetious!", "fortuitous:", "gregarious,", "idiosyncratic.", "impeccable", "incorrigible\"", "indigenous\"", "intrepid!", "juxtapose:", "debilitating", "dichotomy", "disparage", "ebullient", "eclectic", "elucidate", "empathy", "ephemeral", "exacerbate", "facetious", "fortuitous", "gregarious", "idiosyncratic\"", "impeccable\'", "incorrigible", "indigenous", "intrepid", "juxtapose", "lackadaisical", "lamentesh", "loquacious", "magnanimous!", "meticulous,", "munificent", "nebulous", "nonchalant", "obfuscate", "ostentatious-", "paradigm", "pedantic", "perfunctory", "perspicacious", "\'precocious\'", "quintessential", "recalcitrant.", "redolent", "reprehensible\"", "sagacious'", "scrupulous.", "serendipity\'", "soliloquy\"", "sophomoric.", "sporadic:", "stigmatize", "substantiate", "supercilious", "surreptitious", "taciturn", "tantamount:", "temerity;", "tenacity:", "trepidation!", "ubiquitously", "unilateral", "unprece-dented", "unscrupulous", "venerable:", "vicarious?", "vindicate!", "vitriolic", "vociferous", "volition\"", "voracious-;", "wanton:", "whimsical'", "xenophile", "zealous", "bellicose", "brevitious", "candor", "chicanery", "disenfranchise?", "enervate-", "fastidious:", "fatuous", "fecundy", "guile-", "imminent", "impecunious?", "inchoation", "inimical?", "insipid?", "intran-sigent", "inveterately:", "lackadaisical:", "lament", "loquacious.", "magnanimous;", "meticulous", "munificent!", "nebulous:", "nonchalant?", "obfuscate,", "ostentatious", "paradigm:", "pedantic-", "perfunctory!", "perspicacious:", "precocious", "quintessential.", "recalcitrant\"", "redolent?", "reprehensible!", "sagacious:", "scrupulous", "serendipity.", "soliloquy", "sophomoric", "sporadic", "stigmatize!", "substantiate:", "supercilious,", "surreptitious.", "taciturn\"", "tantamount\"", "temerity", "tenacity!", "trepidation:", "ubiquitous", "unilateral.", "unprecedented\"", "unscrupulous?", "venerable", "vicarious!", "vindicate:", "vitriolic\"", "vociferous\"", "volition", "voracious", "wanton", "whimsical", "xenophile!", "zealous:", "bellicose\"", "brevity", "candor.", "chicanery,", "disenfranchise", "enervate", "fastidious!", "fatuous:", "fecund", "guile", "imminent.", "impecunious", "inchoate", "inimical", "insipid\"", "intransigent!", "inveterate:", "lachrymose.,", "abundance", "adventure,", "alliance", "amplify\"", "ballet", "biodiversity!", "bravery:", "calamity", "cerulean`", "champion\"", "charisma.", "clandestine", "commemorate.", "compassion!", "crescendo:", "curiosity", "decipher,", "diligence", "elixir,", "enigma.", "epiphany", "euphoria.", "fathom.", "fortitude", "glimmer", "grace\"", "harmony", "heliotrope", "horizon", "iconoclast", "inception\"", "infinitesimal", "innovation", "inspiration.", "jubilant\"", "labyrinth", "luminescence.", "mellifluous\"", "metamorphosis", "mirage", "mirth?", "mosaic", "nuance?", "oblivion", "opulence", "pandemonium", "paragon", "perennial,", "perseverance\"", "philosophy", "pinnacle", "placid", "radiance\"", "rejuvenate", "resonance", "reverence", "solitude", "sophisticated", "spectacle", "sublime", "symphony", "tangible", "tantalize", "tempestuous.", "transcendent", "tranquility,", "unfathomable", "vanguard", "venerate\"", "vicinity:", "vigilance\"", "\'vivacious\'", "wilderness\'", "zephyr\"", "zenith", "zeal", "aesthetic", "anachronism;", "believe", "catalyst", "demure", "embellish?", "grandeur", "idyllic", "quixotic", "serene", "vestige"
  ];

  // const quotes = [
  //   "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  //   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  //   "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  //   "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt",
  //   "Whether you think you can or you think you can't, you're right. - Henry Ford",
  //   "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  //   "It is never too late to be what you might have been. - George Eliot",
  //   "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  //   "The best way to predict the future is to invent it. - Alan Kay", "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  //   "You miss 100% of the shots you don't take. - Wayne Gretzky",
  //   "The best revenge is massive success. - Frank Sinatra",
  //   "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  //   "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
  //   "Act as if what you do makes a difference. It does. - William James",
  //   "Believe you can and you're halfway there. - Theodore Roosevelt", "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  //   "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar", "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  //   "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
  //   "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  //   "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  //   "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  //   "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  //   "The way to get started is to quit talking and begin doing. - Walt Disney",
  //   "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  //   "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  //   "It does not matter how slowly you go as long as you do not stop. - Confucius",
  //   "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
  //   "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails. - William Arthur Ward",
  //   "Difficulties in life are intended to make us better, not bitter. - Dan Reeves",
  //   "In the middle of every difficulty lies opportunity. - Albert Einstein",
  //   "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  //   "Don't let the fear of losing be greater than the excitement of winning. - Robert Kiyosaki",
  //   "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  //   "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. - Conrad Hilton",
  //   "The only way to do great work is to love what you do. - Steve Jobs",
  //   "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  //   "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  //   "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  //   "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  //   "Try not to become a man of success, but rather try to become a man of value. - Albert Einstein",
  //   "The best revenge is massive success. - Frank Sinatra",
  //   "If you can dream it, you can do it. - Walt Disney"
  // ]

  const colorThemes = {
    "Dark Theme": {
      "background": ["bg-gray-900", "bg-gray-800"],
      "text": ["text-white", "text-gray-400"],
      "button": ["bg-blue-600", "hover:bg-blue-700", "text-white"],
      "accent": ["bg-indigo-500", "hover:bg-indigo-600"],
      "border": ["border-gray-700"],
      "wrong": ["bg-red-700", "text-white"],
      "correct": ["bg-green-700", "text-white"]
    },
    "Light Theme": {
      "background": ["bg-white", "bg-gray-100"],
      "text": ["text-gray-900", "text-gray-700"],
      "button": ["bg-green-500", "hover:bg-green-600", "text-white"],
      "accent": ["bg-yellow-400", "hover:bg-yellow-500"],
      "border": ["border-gray-300"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    },
    "Blue Theme": {
      "background": ["bg-blue-50", "bg-blue-100"],
      "text": ["text-blue-900", "text-blue-700"],
      "button": ["bg-blue-500", "hover:bg-blue-600", "text-white"],
      "accent": ["bg-blue-300", "hover:bg-blue-400"],
      "border": ["border-blue-200"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    },
    "Green Theme": {
      "background": ["bg-green-50", "bg-green-100"],
      "text": ["text-green-900", "text-green-700"],
      "button": ["bg-green-600", "hover:bg-green-700", "text-white"],
      "accent": ["bg-green-400", "hover:bg-green-500"],
      "border": ["border-green-200"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    },
    "Purple Theme": {
      "background": ["bg-purple-50", "bg-purple-100"],
      "text": ["text-purple-900", "text-purple-700"],
      "button": ["bg-purple-600", "hover:bg-purple-700", "text-white"],
      "accent": ["bg-purple-400", "hover:bg-purple-500"],
      "border": ["border-purple-200"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    },
    "Red Theme": {
      "background": ["bg-red-50", "bg-red-100"],
      "text": ["text-red-900", "text-red-700"],
      "button": ["bg-red-500", "hover:bg-red-600", "text-white"],
      "accent": ["bg-red-300", "hover:bg-red-400"],
      "border": ["border-red-200"],
      "wrong": ["bg-red-700", "text-white"],
      "correct": ["bg-green-700", "text-white"]
    },
    "Orange Theme": {
      "background": ["bg-orange-50", "bg-orange-100"],
      "text": ["text-orange-900", "text-orange-700"],
      "button": ["bg-orange-500", "hover:bg-orange-600", "text-white"],
      "accent": ["bg-orange-300", "hover:bg-orange-400"],
      "border": ["border-orange-200"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    },
    "Gray Theme": {
      "background": ["bg-gray-50", "bg-gray-100"],
      "text": ["text-gray-900", "text-gray-700"],
      "button": ["bg-gray-600", "hover:bg-gray-700", "text-white"],
      "accent": ["bg-gray-400", "hover:bg-gray-500"],
      "border": ["border-gray-200"],
      "wrong": ["bg-red-500", "text-white"],
      "correct": ["bg-green-500", "text-white"]
    }
  };


  //Sound Variables
  // const [wrong, updateWrong] = useState('src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\mega-bass-sub-drop-effect-240472.mp3')
  // const [audio, updateAudio] = useState("src\\assets\\MediaForTypeeMonkey\\ClickSounds\\mech-keyboard-02-102918.mp3");

  // const sounds = [
  //   { name: 'Click Sound 1', url: 'src\\assets\\MediaForTypeeMonkey\\ClickSounds\\click-151673.mp3' },
  //   { name: 'Click Sound 2', url: 'src\\assets\\MediaForTypeeMonkey\\ClickSounds\\mech-keyboard-02-102918.mp3' },
  //   { name: 'Click Sound 3', url: 'src\\assets\\MediaForTypeeMonkey\\ClickSounds\\mouse-click-117076.mp3' },
  //   { name: 'Click Sound 4', url: 'src\\assets\\MediaForTypeeMonkey\\ClickSounds\\mouse-click-153941.mp3' },
  //   { name: 'Click Sound 5', url: 'src\\assets\\MediaForTypeeMonkey\\ClickSounds\\mouse-click-sound-233951.mp3' },
  //   { name: 'Error Sound 1', url: 'src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\error-126627.mp3' },
  //   { name: 'Error Sound 2', url: 'src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\mega-bass-sub-drop-effect-240472.mp3' },
  //   { name: 'Error Sound 3', url: 'src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\metal-hit-sound-effect-241374.mp3' },
  //   { name: 'Error Sound 4', url: 'src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\surprise-sound-effect-99300.mp3' },
  //   { name: 'Error Sound 5', url: 'src\\assets\\MediaForTypeeMonkey\\ErrorSounds\\sword-swing-whoosh-sound-effect-1-241824.mp3' }
  // ];

  const [typingScript, updateTypingScript] = useState(words)
  const [testStarted, updateTestStarted] = useState(false)

  const [testEnded, updateTestEnded] = useState(false)

  const [correctWordsTyped, updateCorrectWordsTyped] = useState(1)
  const [wrongWordsTyped, updateWrongWordsTyped] = useState(1)

  const [timeTakenToCompleteTest, updateTimeTakenToCompleteTest] = useState(0)

  //state for managing the time throught the buttons in navigation bar
  // const [testTimeByUser, updateTestTimeByUser] = useState(0)
  // const [buttonStartTest, updateButtonStartTest] = useState('Click To Start')

  //State which has the current words index which is user is typing
  const [currentlyTypingWordsIndex, updateCurrentlyTypingWordsIndex] = useState(0)

  //State to monitize if user has chosen for one minute test
  const [oneMinuteTest, updateOneMinuteTest] = useState(false)

  //useState variable is made for continously monitizing the time taken by the user to complete the test
  // const [quotes, updateQuoteState] = useState()

  const [defaultTheme, updateDefaultTheme] = useState(colorThemes["Purple Theme"])
  const [showContactModal, updateShowContactModal] = useState(false)
  const [showTwitterModal, updateShowTwitterModal] = useState(false)
  const [showSecurityModal, updateShowSecurityModal] = useState(false)
  const [showTermsModal, updateShowTermsModal] = useState(false)
  const [showGitHubModal, updateShowGitHubModal] = useState(false)
  const [showVersionModal, updateShowVersionModal] = useState(false)
  const [showCustomModal, updateShowCustomModal] = useState(false)

  const [value, setValue] = useState("start typing here...")

  // const [settingsHovered, updateSettingsHovered] = useState(false)
  // const [settingsClicked, updateSettingsClicked] = useState(false)

  const [infoClicked, updateInfoClicked] = useState(false)
  const [logoHovered, updateLogoHovered] = useState(false)
  const [homeHovered, updateHomeHovered] = useState(false)
  const [startTestHovered, updateStartTestHovered] = useState(false)
  const [accountHovered, updateAccountHovered] = useState(false)
  const [notificationsHovered, updateNotificationsHovered] = useState(false)
  const [infoHovered, updateInfoHovered] = useState(false)

  const handleValueChange = (e) => {
    setValue(e.target.value);
    // playSound(audio);
  }

  const newTrimmedValue = useRef('')
  const correctWorsIndexes = useRef([])
  const typingSpeed = useRef(0)
  const intervalId = useRef(0)

  //function to update typing script whenever the numbers are clicked in secondary navbar
  // const playSound = (url) => {
  //   const audio = new Audio(url);
  //   audio.play();
  // };

  useEffect(() => {

    if (value.endsWith(' ')) {
      // code down here checks the user typed value is correct or not
      newTrimmedValue.current = value.trim();
      // console.log(newTrimmedValue.current)
      if (currentlyTypingWordsIndex === typingScript.length - 1) {
        // console.log("Your test has Ended")

        //Printing the result for user
        // console.log("time taken to complete ", timeTakenToCompleteTest, "correct words typed ", correctWorsIndexes.current.length)

        updateTimeTakenToCompleteTest((timeTakenToCompleteTest) => { timeTakenToCompleteTest = timeTakenToCompleteTest / 60 })
        // console.log(timeTakenToCompleteTest)
        typingSpeed.current = ((correctWorsIndexes.current.length) / timeTakenToCompleteTest) * 100;
        // console.log("Your Typing speed is ", Math.floor(typingSpeed.current), timeTakenToCompleteTest)

        //Reseting all the mandatory states
        updateTestEnded(true)
        updateOneMinuteTest(false)

        // console.log(typingScript[currentlyTypingWordsIndex], testStarted, testEnded,)
      }

      if (newTrimmedValue.current === typingScript[currentlyTypingWordsIndex]) {

        updateCorrectWordsTyped((correctWordsTyped) => correctWordsTyped = correctWordsTyped + 1)
        correctWorsIndexes.current.push(currentlyTypingWordsIndex)
        // console.log("correct", correctWordsTyped, correctWorsIndexes.current)

        // code down here checks the value if its the last 
        // console.log(newTrimmedValue.current, currentlyTypingWordsIndex, typingScript.length - 1, typingScript[typingScript.length - 1])

      } else {
        // playSound(wrong);
        updateWrongWordsTyped((wrongWordsTyped) => wrongWordsTyped = wrongWordsTyped + 1)
        // console.log("wrong", wrongWordsTyped)
      }

      updateCurrentlyTypingWordsIndex(currentlyTypingWordsIndex + 1)
      setValue('')

    } else {
      // console.log('not ended yet', value)
    }
  }, [value])


  useEffect(() => {
    // let intervalId;
    if (testStarted) {
      intervalId.current = setInterval(() => {
        updateTimeTakenToCompleteTest((prevCount) => prevCount + 1);
      }, 1000);

    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId); // Cleanup interval on component unmount or when `isRunning` changes }, [isRunning]);
  }, [testStarted])

  useEffect(() => {
    if (testStarted && oneMinuteTest) {
      if (timeTakenToCompleteTest === 60) {
        if (clearInterval(intervalId.current)) {
          // console.log("interval is cleared")
        } else {
          // console.log("interval is not cleared");
          updateTestEnded(true);
          updateOneMinuteTest(false)
          updateTimeTakenToCompleteTest((timeTakenToCompleteTest) => { timeTakenToCompleteTest = timeTakenToCompleteTest / 60 })
          // console.log(timeTakenToCompleteTest)
          typingSpeed.current = ((correctWorsIndexes.current.length) / timeTakenToCompleteTest) * 100;
          // console.log("Your Typing speed is ", Math.floor(typingSpeed.current), timeTakenToCompleteTest)
          // updateTimeTakenToCompleteTest(0);
        }
      }
    }
  }, [timeTakenToCompleteTest])

  return (
    <>
      {/* These part is shown to the user only if dispaly is small */}
      <div className="md:hidden block border-2 font-semibold border-red text-center m-auto p-2 border-dashed border-red-400 shadow-md">These website is only available for large displays(Try using it on laptop/tablets)</div>
      {/* End of small display content */}

      <div className={`min-h-screen min-w-full ${defaultTheme.background[1]} hidden md:block`}>


        {/* Main navbar of the website is starts here */}
        <nav className={`${defaultTheme.button[0]} p-1 flex justify-around items-center w-auto gap-96`}>
          <div className="">
            <ul className="flex flex-row justify-around items-center space-x-6">
              <li className="hover:cursor-pointer" onClick={() => {
                updateTypingScript(typingScript)
                // console.log(typingScript)
                updateTestStarted(false)
                updateTestEnded(false)
                updateCorrectWordsTyped(1)
                updateWrongWordsTyped(1)
                updateTimeTakenToCompleteTest(0)
                updateCurrentlyTypingWordsIndex(0)
                updateOneMinuteTest(false)
              }}
                onMouseEnter={() => {
                  setTimeout(() => {
                    updateLogoHovered(true)
                  }, 500)
                }
                }
                onMouseLeave={() => { updateLogoHovered(false) }}
              >
                <div className={`absolute mt-6 text-yellow-400 bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${logoHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > TypeeMonkey </div>
                <img className="h-[15vh] min-w-32 rounded-2xl"
                  src="src\assets\MediaForTypeeMonkey\WebLogos\TypeeMonkeyLogo.png" alt="can't load" /></li>

              <li className="hover:invert hover:cursor-pointer" onClick={() => {
                updateTypingScript(typingScript)
                // console.log(typingScript)
                updateTestStarted(true)
                updateTestEnded(false)
                updateCorrectWordsTyped(1)
                updateWrongWordsTyped(1)
                updateTimeTakenToCompleteTest(0)
                updateCurrentlyTypingWordsIndex(0)
                setValue("start typing here...")
                newTrimmedValue.current = ''
                correctWorsIndexes.current = []
                typingSpeed.current = 0
              }
              }
                onMouseEnter={() => updateStartTestHovered(true)} onMouseLeave={() => updateStartTestHovered(false)}
              >
                <div className={`absolute mt-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${startTestHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > StartTest </div>
                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=60677&format=png&color=000000" alt="" /></li>

              <li className="hover:invert hover:cursor-pointer"
                onMouseEnter={() => {
                  updateHomeHovered(true)
                }
                }
                onMouseLeave={() => { updateHomeHovered(false) }}
                onClick={() => {
                  updateTypingScript(typingScript)
                  // console.log(typingScript)
                  updateTestStarted(false)
                  updateTestEnded(false)
                  updateCorrectWordsTyped(1)
                  updateWrongWordsTyped(1)
                  updateTimeTakenToCompleteTest(0)
                  updateCurrentlyTypingWordsIndex(0)
                  updateOneMinuteTest(false)
                }}
              >
                <div className={`absolute  top-0 ml-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${homeHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > Home </div>
                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000" alt="can't load" />
              </li>

              {/* <li className="hover:invert hover:cursor-pointer"
                onMouseEnter={() => { updateSettingsHovered(true); }}
                onMouseLeave={() => { updateSettingsHovered(false); }}
                onClick={() => { settingsClicked ? updateSettingsClicked(false) : updateSettingsClicked(true) }}
              >
                <div className={`absolute mt-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${settingsHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > Settings </div>

                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=2969&format=png&color=000000" alt="can't load" />

              </li> */}

              {/* Here we show the settings for audios */}
              {/* <li>
                <div>
                  {
                    settingsClicked ? (
                      <div className="bg-black text-white border mt-2 p-2 rounded shadow-lg max-h-16 overflow-y-auto ">
                        <ul className="space-y-2"> {
                          sounds.map((sound, index) => (
                            <li key={index} className="flex items-center justify-between gap-2">
                              <span>{sound.name}</span>
                              <button onClick={() => playSound(sound.url)} className="bg-pink-600 text-white px-1 rounded hover:bg-pink-700 hover:text-black"> Play </button>
                              <button onClick={() => { updateAudio(sound.url); alert(`Sound effect updated for Typing ${sound.name}`) }} className="bg-green-600 hover:bg-green-700 text-white rounded px-1 hover:text-black">type</button>
                              <button onClick={() => { updateWrong(sound.url); alert(`Sound effect updated for Wrong words ${sound.name}`) }} className="bg-orange-500 hover:bg-orange-600 text-white rounded px-1 hover:text-black">wrong</button>
                            </li>))}
                        </ul>
                      </div>)
                      : null
                  }
                </div>
              </li> */}
              {/* Audio settings ends here */}


              <li className="hover:invert hover:cursor-pointer"
                onMouseEnter={() => updateInfoHovered(true)} onMouseLeave={() => updateInfoHovered(false)}
                onClick={() => { updateInfoClicked(!infoClicked) }}
              >
                <div className={`absolute top-0 ml-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${infoHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                > Info </div>
                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=37303&format=png&color=000000" alt="can't load" />
              </li>
            </ul>
          </div>

          {infoClicked && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-[80vw] m-auto">
                <h2 className="text-2xl font-bold mb-4">Information</h2>
                <h1 className="text-3xl font-bold mb-4 text-center">TypeeMonkey - The Ultimate Typing Website</h1> <p className="mb-4 text-lg text-gray-700"> Welcome to <span className="font-semibold text-blue-600">TypeeMonkey</span>, a highly customizable typing website built with React and styled with Tailwind CSS. Our platform offers a seamless typing experience tailored to improve your typing skills efficiently. </p> <h2 className="text-2xl font-semibold mt-6 mb-3">Features</h2> <ul className="list-disc pl-5 space-y-2 text-gray-700"> <li>Real-time typing speed and accuracy tracking.</li> <li>Customizable themes to personalize your typing environment.</li> <li>Interactive lessons and exercises to enhance your typing proficiency.</li> <li>User-friendly interface optimized for both beginners and advanced typists.</li> </ul> <h2 className="text-2xl font-semibold mt-6 mb-3">Why TypeeMonkey?</h2> <p className="text-lg text-gray-700"> <span className="font-semibold">TypeeMonkey</span> stands out by providing a customizable, engaging, and effective learning experience. Whether you're looking to increase your typing speed or reduce errors, our platform is designed to help you achieve your goals.</p>
                <button onClick={() => updateInfoClicked(!infoClicked)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
              </div>
            </div>)}

          <div>
            <ul className="flex flex-row space-x-6">

              <li className="hover:invert hover:cursor-pointer"
                onMouseEnter={() => updateNotificationsHovered(true)} onMouseLeave={() => updateNotificationsHovered(false)}>
                <div className={`absolute mt-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${notificationsHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > notifications </div>
                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=nJRLlq8KqcX5&format=png&color=000000" alt="" />
              </li>

              <li className="hover:invert hover:cursor-pointer"
                onMouseEnter={() => updateAccountHovered(true)} onMouseLeave={() => updateAccountHovered(false)}>
                <div className={`absolute ml-6 text-white bg-black text-xs rounded py-1 px-2 transition-opacity duration-300 ${accountHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} > Account </div>
                <img className="h-6 w-auto"
                  src="https://img.icons8.com/?size=100&id=82751&format=png&color=000000" alt="" /></li>

            </ul>
          </div>
        </nav >
        {/* Main Navbar of the website ends here */}

        {/* Showing the Timer if the user has chosen the one minute test */}
        {
          oneMinuteTest && <div className={`text-3xl font-bold w-full text-center`}>
            <span className={`border-2 ${defaultTheme.text[0]}  border-dashed p-2 px-3 rounded-lg min-h-8`}>{timeTakenToCompleteTest}/60 secs
            </span>
          </div>
        }
        {/* Showing the Timer if the user has chosen the one minute test -- End */}

        {/* Secondary Navbar of the website starts here */}
        {
          testStarted ? null :
            <nav className={`my-5 flex justify-center`}>

              <div className={`flex ${defaultTheme.background[0]} ${defaultTheme.text[0]} shadow-lg rounded-md px-3 py-1`}>

                <div>
                  <ul className="flex space-x-3 mx-4 w-auto">
                    <li><button className="hover:invert" onClick={() => {
                      updateTypingScript(punctuations)
                      // console.log(typingScript)
                    }}>&#64; punctuation</button></li>
                    <li><button className="hover:invert" onClick={() => {
                      updateTypingScript(numbers)
                      // console.log(typingScript)
                    }}>&#35; numbers</button></li>
                  </ul>
                </div>

                <div className={`h-auto w-auto border border-black rounded-lg bg-slate-600 hover:invert cursor-default`}>&nbsp;</div>

                <div>
                  <ul className="flex space-x-4 mx-5 justify-center items-center">

                    <li className={`flex justify-around items-center gap-1 hover:border ${defaultTheme.accent[1]} hover:rounded-md hover:relative hover:bottom-1 hover:shadow-2xl px-2`}
                      onClick={() => { updateOneMinuteTest(true) }}>
                      <button>
                        <img className="h-5 w-auto hover:invert" src="https://img.icons8.com/?size=100&id=79412&format=png&color=000000"
                          alt="" />
                      </button>
                      <button className={` hover:invert`}>time</button>
                    </li>

                    <li className={`flex justify-around items-center gap-1 hover:border ${defaultTheme.accent[1]} hover:rounded-md hover:relative hover:bottom-1 hover:shadow-2xl px-2`}
                      onClick={() => {
                        updateTypingScript(words)
                        // console.log(typingScript)
                      }}>
                      <button><img className="h-5 w-auto hover:invert "
                        src="https://img.icons8.com/?size=100&id=RMKSx5VsaVye&format=png&color=000000" alt="" />
                      </button>
                      <button className={` hover:invert`}>words</button>
                    </li>

                    <li className={`flex justify-around items-center gap-1 hover:border ${defaultTheme.accent[1]} hover:rounded-md hover:relative hover:bottom-1 hover:shadow-2xl px-2`}
                      onClick={() => {
                        // updateTypingScript(quotes) 
                        alert("Sorry Quotes are not available now !!")
                      }}>
                      <button><img className="h-5 w-auto hover:invert"
                        src="https://img.icons8.com/?size=100&id=61893&format=png&color=000000" alt="" />
                      </button>
                      <button className={` hover:invert`} >quotes</button>
                    </li>

                    {/* <li className={`flex justify-around items-center gap-1 hover:border ${defaultTheme.accent[1]} hover:rounded-md hover:relative hover:bottom-1 hover:shadow-2xl px-2`}
                      onClick={() => {
                        updateZenMode(true);
                      }}
                    >
                      <button><img className="h-5 w-auto hover:invert"
                        src="https://img.icons8.com/?size=100&id=DLSBAMwXhy4c&format=png&color=000000" alt="" />
                      </button>
                      <button className={` hover:invert`}>zen</button>
                    </li> */}

                    {/* <li className="flex justify-around items-center gap-1 hover:border hover:invert hover:border-white hover:rounded-md hover:px-1">
                      <button><img className="h-5 w-auto hover:invert"
                        src="https://img.icons8.com/?size=100&id=11151&format=png&color=000000" alt="" />
                      </button>
                      <button className=" hover:text-pink-200">custome</button>
                    </li> */}

                  </ul>
                </div>

                <div className={`h-auto w-auto border border-black rounded-lg bg-slate-600 hover:invert cursor-default`}>&nbsp;</div>

                <div>
                  <ul className="flex space-x-3 mx-4">
                    {/* <li><button className=" hover:text-pink-200">10</button></li> */}
                    <li
                      onClick={() => {
                        updateTypingScript(typingScript.slice(0, 25))
                        // console.log(typingScript, typingScript.length)
                      }}>
                      <button className="hover:invert" >25</button></li>

                    <li onClick={() => {
                      updateTypingScript(typingScript.slice(0, 50))
                      // console.log(typingScript, typingScript.length)
                    }
                    }><button className="hover:invert">50</button></li>

                    <li onClick={() => {
                      updateTypingScript(typingScript.slice(0, 100))
                      // console.log(typingScript, typingScript.length)
                    }
                    }><button className="hover:invert">100</button></li>

                    <li onClick={() => {
                      updateTypingScript(typingScript.slice(0, 200))
                      // console.log(typingScript, typingScript.length)
                    }
                    }><button className="hover:invert">200</button></li>

                    <li onClick={() => {
                      updateTypingScript(typingScript.slice(0, 300))
                      // console.log(typingScript, typingScript.length)
                    }
                    }><button className="hover:invert">300</button></li>
                    {/* <li><button className="hover:invert"><img className="h-5 w-auto"
                      src="https://img.icons8.com/?size=100&id=a8JJBNFNaKMu&format=png&color=000000" alt="" /></button>
                    </li> */}
                  </ul>
                </div>

              </div>

            </nav>
        }
        {/* Secondary Navbar of the website ends here */}

        {/* button to change the language - start */}
        {
          testStarted ? null :
            <div className="my-3 text-center flex justify-center align-middle space-x-1 hover:invert w-auto" >
              <div className="flex justify-center " onClick={() => { alert("Currently the only support English language !!") }}>
                <button>
                  <img className="h-5 w-auto hover:invert" src="https://img.icons8.com/?size=100&id=59795&format=png&color=000000"
                    alt="" />
                </button>
              </div>

              <div>
                <button onClick={() => { alert("Currently TypeeMonkey only support's English language !!") }}>
                  english
                </button>
              </div>

            </div>
        }
        {/* button to change the language - end */}

        {/* typing script to practise starts here  */}

        {/* <div className="text-2xl w-full m-auto ">
          {
            testEnded && <div >WPM {typingSpeed.current}</div>
          }
        </div> */}



        {
          !testEnded ?
            testStarted ?
              <div className="flex flex-wrap text-3xl mx-10 mt-5 overflow-hidden">

                <input type="text" value={value}
                  onClick={() => {
                    updateTestStarted(true)
                    setValue('');
                  }
                  }
                  onChange={(e) => { handleValueChange(e) }} className={`text-center m-auto py-2 rounded-md my-2 ${defaultTheme.text[0]} ${defaultTheme.background[1]} shadow-2xl`}
                  placeholder={typingScript[currentlyTypingWordsIndex]} />

                {currentlyTypingWordsIndex >= 120 ?
                  <div className={`${defaultTheme.text[0]} mx-10 p-2`}>{typingScript[currentlyTypingWordsIndex]}</div>
                  : null}

                {/* input ends here */}

                <div className="flex flex-wrap">

                  {
                    typingScript.map((item, index) => {
                      if (item === typingScript[currentlyTypingWordsIndex]) {
                        // if (currentlyTypingWordsIndex === lastIndexOfScript.current) {
                        //   updateTestEnded(true);
                        //   console.log("Your test has Ended")
                        // }

                        return <span className={`invert scale-110 font-bold mx-2 relative bottom-2 px-3`} key={item}>{item}&nbsp;</span>
                      } else if (index < currentlyTypingWordsIndex) {
                        if (correctWorsIndexes.current.includes(index)) {
                          return <span className="text-green-400 font-bold " key={item}>
                            {item}&nbsp;
                          </span>
                        } else {
                          return <span className="text-red-400 font-bold line-through" key={item}>
                            {item}&nbsp;
                          </span>
                        }

                      } else {
                        return <span key={item} className={`${defaultTheme.text[0]}`} >{item}&nbsp;</span>
                      }

                    })
                  }
                </div>

              </div>

              :

              <div className="flex flex-wrap mx-48 text-3xl h-28 overflow-hidden">
                <div className="flex justify-center">
                </div>

                {/* start - input for typing script */}
                <input type="text" value={value}
                  onClick={() => {
                    updateTestStarted(true)
                    setValue('');
                  }
                  }
                  onChange={(e) => { handleValueChange(e) }} className={`text-center m-auto py-2 rounded-md my-2 ${defaultTheme.text[0]} ${defaultTheme.background[1]} shadow-2xl`}
                  placeholder={typingScript[currentlyTypingWordsIndex]} />

                {/* end - input for typing script */}

                <div >
                  {
                    typingScript.map((item) => {
                      return <span key={item} className={`${defaultTheme.text[1]}`} >{item}&nbsp;</span>
                    })
                  }
                </div>

              </div>
            :
            <div className="text-center mx-auto py-2 rounded-md my-2 text-3xl font-bold shadow-md">{Math.round(typingSpeed.current)} WPM</div>
        }


        {/* typing script to practise ends here  */}

        {/* reload button starts here */}
        <div className="my-7 text-center">
          <button><img
            onClick={() => {
              updateTypingScript(typingScript)
              // console.log(typingScript)
              updateTestStarted(true)
              updateTestEnded(false)
              updateCorrectWordsTyped(1)
              updateWrongWordsTyped(1)
              updateTimeTakenToCompleteTest(0)
              updateCurrentlyTypingWordsIndex(0)
              setValue("start typing here...")
              newTrimmedValue.current = ''
              correctWorsIndexes.current = []
              typingSpeed.current = 0
            }
            }
            className="h-5 w-auto hover:invert "
            src="https://img.icons8.com/?size=100&id=86209&format=png&color=000000" alt="" /></button>
        </div>
        {/* reload button ends here */}

        {/* Last navbar starts here */}
        <nav className="mt-28 flex justify-around">
          <div>

            <ul className={`flex justify-center space-x-2 items-center gap-2`}>

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => { updateShowContactModal(!showContactModal) }}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=jOjH1Mt48Fp1&format=png&color=000000"
                  alt="" /></button>
                <button>contact</button>
              </div>

              {showContactModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p>Email: dhirajkhedkar123@gmail.com</p>
                    <button onClick={() => { updateShowContactModal(!showContactModal) }} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              {/* <div className="hover:invert flex justify-center space-x-1">
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=114423&format=png&color=000000"
                  alt="" /></button><button>support</button>
              </div> */}

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => updateShowGitHubModal(!showGitHubModal)}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=2778&format=png&color=000000"
                  alt="" /></button>
                <button>github</button>
              </div>

              {showGitHubModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold mb-4">GitHub</h2>
                    <h4>(Note:After clicking these link you will be redirected to external site)</h4>
                    <p className="text-center text-blue-500 hover:underline"><a href="https://github.com/dhirubhai-123/">click here</a></p>
                    <button onClick={() => updateShowGitHubModal(!showGitHubModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              {/* <div className="hover:invert flex justify-center space-x-1">
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000"
                  alt="" /></button>
                <button>discord</button>
              </div> */}

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => { updateShowTwitterModal(!showTwitterModal) }}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"
                  alt="" /></button>
                <button>twitter</button>
              </div>

              {showTwitterModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold mb-4">Twitter</h2>
                    <p className="text-center">Sorry Twitter Account not available right now !!</p>
                    <button onClick={() => updateShowTwitterModal(!showTwitterModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => { updateShowTermsModal(!showTermsModal) }}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=100947&format=png&color=000000"
                  alt="" /></button>
                <button>terms</button>
              </div>

              {showTermsModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold mb-4">Terms and Policy</h2>
                    <div>
                      <p>1.Welcome to [Your Typing Website]. These terms and conditions outline the rules and regulations for the use of our website.</p>
                      <p>2.By accessing this website, you agree to comply with these terms and conditions. If you disagree with any part of these terms, please do not use our website.</p>
                      <p>3.You are granted a non-exclusive, non-transferable, and revocable license to access and use the website strictly in accordance with these terms.</p>
                      <p>
                        4.You agree not to use the website for any illegal or unauthorized purpose.</p>
                      <p>5.If you have any questions or concerns about these terms and conditions, please contact us at: <span className="font-bold text-lg">dhirajkhedkar123@gmail.com</span></p>
                    </div>
                    {/* <p className="text-center">Sorry Twitter Account not available right now !!</p> */}
                    <button onClick={() => updateShowTermsModal(!showTermsModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => updateShowSecurityModal(!showSecurityModal)} >
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=59176&format=png&color=000000"
                  alt="" /></button>
                <button>security</button>
              </div>

              {showSecurityModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 " >
                  <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90vw]" >
                    <h2 className="text-2xl font-bold mb-4">Security</h2>
                    <div>
                      <p>1.To access certain features of the website, you may be required to create an account.
                      </p>
                      <p>
                        2.You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
                      </p>
                      <p>
                        3.You agree to accept responsibility for all activities that occur under your account.
                      </p>
                      <p>
                        4.The content, layout, design, data, databases, and graphics on this website are protected by copyright and intellectual property laws.
                      </p>
                      <p>5.You may not modify, reproduce, distribute, create derivative works of, publicly display, or in any way exploit any of the content, in whole or in part, except as expressly authorized by us.
                      </p>
                    </div>
                    <button onClick={() => updateShowSecurityModal(!showSecurityModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              {/* <div className="hover:invert flex justify-center space-x-1">
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=61060&format=png&color=000000"
                  alt="" /></button>
                <button>privacy</button>
              </div> */}
            </ul>

          </div>

          <div>
            <ul className="flex justify-center space-x-2 items-center gap-2">
              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => updateShowCustomModal(!showCustomModal)}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=vtUrwWHRs3yd&format=png&color=000000"
                  alt="" /></button>
                <button>custom</button>
              </div>

              {showCustomModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 ">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-y-auto w-max-[70vw]" onClick={() => updateShowCustomModal(!showCustomModal)}>
                    <h2 className="text-2xl font-bold mb-4">Customizations</h2>
                    {Object.keys(colorThemes).map(themeName => (
                      <div key={themeName} className="grid grid-cols-2 my-1">
                        <div className="flex justify-center items-center gap-2">
                          <h2 className="text-xl font-bold ">{themeName}</h2>
                          <button className="bg-blue-500 font-bold hover:bg-blue-600 px-2 hover:text-white rounded-md"
                            onClick={() => { updateDefaultTheme(colorThemes[themeName]) }}
                          >Select</button>
                        </div>

                        <div className="flex justify-center gap-2"> {
                          Object.keys(colorThemes[themeName]).map(property => (
                            <span key={property} className="rounded-full">
                              {/* <span className="text-center">{property}</span> */}
                              {/* <h3 className="text-lg font-semibold">{property.charAt(0).toUpperCase() + property.slice(1)}</h3> */}
                              <ul className="list-disc flex justify-center items-center">
                                {
                                  colorThemes[themeName][property].map((colorClass, index) => (
                                    <li key={index} className={`${colorClass} flex justify-center rounded-full m-1 p-2`}>&nbsp;
                                      {colorClass.startsWith('hover') ? 'h' : ' '}
                                    </li>
                                  ))}
                              </ul>
                            </span>))}
                        </div>
                      </div>))}

                    <button onClick={() => updateShowCustomModal(!showCustomModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

              <div className={`hover:invert flex justify-center space-x-1 ${defaultTheme.text[1]}`} onClick={() => updateShowVersionModal(!showVersionModal)}>
                <button><img className="h-4 w-auto" src="https://img.icons8.com/?size=100&id=33295&format=png&color=000000 "
                  alt="" /></button>
                <button>version</button>
              </div>

              {showVersionModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                  <div className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h2 className="text-2xl font-bold mb-4">Version</h2>
                    <p className="text-center">current version is v.0.0.01</p>
                    <h3 className="text-center font-semibold">TypeeMonkey - Typing Legacy</h3>
                    <button onClick={() => updateShowVersionModal(!showVersionModal)} className="absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white rounded-full p-2" > X </button>
                  </div>
                </div>)}

            </ul>
          </div>
        </nav>
        {/* Last navbar ends here */}

      </div >
    </>
  )
}


export default App