"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
    ChevronRight,
    ArrowLeft,
    ArrowRight,
    MessageCircle,
    Link2,
    Flame,
    BookOpen,
    Heart,
    Star,
    Users,
    Shield,
    Lightbulb,
    Clock,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png"
import dp from "@/public/images/blogs/ahlulbayt.jpg"
// ─── SHARE ICONS ──────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}
function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}
function XIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TOC_ITEMS = [
    { id: "who-are-ahlulbayt", label: "Who Are the Ahlulbayt (ع)?" },
    { id: "lesson-knowledge", label: "Lesson 1: Seek Knowledge Always" },
    { id: "lesson-character", label: "Lesson 2: Guard Your Character" },
    { id: "lesson-patience", label: "Lesson 3: The Power of Patience" },
    { id: "lesson-relationships", label: "Lesson 4: Honour Relationships" },
    { id: "lesson-dunya", label: "Lesson 5: Do Not Be Enslaved by Dunya" },
    { id: "lesson-action", label: "Lesson 6: Let Deeds Speak" },
    { id: "lesson-forgiveness", label: "Lesson 7: Forgive & Purify the Heart" },
    { id: "apply-today", label: "Applying These Lessons Today" },
    { id: "conclusion", label: "Conclusion" },
];

const IMAMS_INTRO = [
    { name: "Imam Ali (ع)", title: "1st Imam · Nahjul Balagha", emoji: "🏛️", color: "from-amber-950 to-stone-900" },
    { name: "Imam Hasan (ع)", title: "2nd Imam · The Patient One", emoji: "🌿", color: "from-emerald-950 to-stone-900" },
    { name: "Imam Husain (ع)", title: "3rd Imam · Master of Martyrs", emoji: "🏴", color: "from-red-950 to-stone-900" },
    { name: "Imam Zayn al-Abidin (ع)", title: "4th Imam · Sahifa Sajjadiyya", emoji: "📿", color: "from-teal-950 to-stone-900" },
    { name: "Imam al-Baqir (ع)", title: "5th Imam · Opener of Knowledge", emoji: "📖", color: "from-indigo-950 to-stone-900" },
    { name: "Imam al-Sadiq (ع)", title: "6th Imam · Greatest Scholar", emoji: "✨", color: "from-yellow-950 to-stone-900" },
];

const LESSONS = [
    {
        id: "lesson-knowledge",
        num: "01",
        icon: Lightbulb,
        emoji: "💡",
        title: "Seek Knowledge Always",
        imam: "Imam Ali (ع)",
        arabic: "اطْلُبُوا الْعِلْمَ وَلَوْ بِالصِّيْنِ",
        translation: "Seek knowledge, even if it be in China.",
        source: "Attributed to Prophet Muhammad (ص) & Imam Ali (ع)",
        body: [
            "The Ahlulbayt (ع) placed knowledge above almost everything else — not worldly knowledge alone, but knowledge of the self, of Allah, and of the truth. Imam Ali (ع) said: 'Ask me about the paths of the heavens, for I know them better than the paths of the earth.'",
            "In our age of information overload, this lesson takes a deeper meaning. The Imams (ع) were not encouraging the collection of data — they were urging the seeking of wisdom. True knowledge leads to Taqwa, humility, and action. A scholar who does not act on his knowledge is like a library that no one reads.",
        ],
        highlight: {
            arabic: "كَفَى بِالْعِلْمِ شَرَفًا أَنْ يَدَّعِيَهُ مَنْ لَا يُحْسِنُهُ",
            translation: "It is sufficient proof of knowledge's nobility that even those who lack it claim to have it.",
            source: "Imam Ali (ع) — Nahjul Balagha, Wisdom 107",
            bg: "from-indigo-900 to-indigo-950",
            accent: "text-indigo-300",
        },
        modernLesson: "Stop scrolling endlessly and start learning purposefully. Dedicate 20 minutes daily to Islamic knowledge — tafseer, history, fiqh. Real knowledge transforms you.",
        color: "border-indigo-200 dark:border-indigo-900/40",
        badgeBg: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    },
    {
        id: "lesson-character",
        num: "02",
        icon: Star,
        emoji: "⭐",
        title: "Guard Your Character",
        imam: "Imam Hasan (ع)",
        arabic: "لَا تُصَاحِبِ الْمُرَائِيَ وَلَا تُعَاشِرِ الْكَذَّابَ",
        translation: "Do not accompany the hypocrite and do not live with the liar.",
        source: "Imam Hasan al-Mujtaba (ع)",
        body: [
            "Imam Hasan (ع) — the embodiment of patience and nobility — taught that character is the mirror of the soul. He accepted hardships with a smile and forgave those who wronged him repeatedly, saying that it was more honourable to forgive than to take revenge when one has the power.",
            "In today's world, where social media rewards arrogance and provocation, guarding one's character is a revolutionary act. The person who controls their tongue, their anger, and their ego in a world designed to provoke is a true follower of Ahlulbayt (ع).",
        ],
        highlight: {
            arabic: "إِنَّ أَكْرَمَ النَّاسِ مَنْ عَفَا عِنْدَ الْقُدْرَةِ",
            translation: "Verily the most noble of people is the one who forgives when he has the power to punish.",
            source: "Imam Hasan al-Mujtaba (ع)",
            bg: "from-amber-900 to-amber-950",
            accent: "text-amber-300",
        },
        modernLesson: "Before responding to provocation online or in person — pause. Ask yourself: what would Imam Hasan (ع) do? Silence, forgiveness, and dignity are stronger than any comeback.",
        color: "border-amber-200 dark:border-amber-900/40",
        badgeBg: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
        id: "lesson-patience",
        num: "03",
        icon: Shield,
        emoji: "🛡️",
        title: "The Power of Patience",
        imam: "Imam Husain (ع)",
        arabic: "اَلصَّبْرُ مِنَ الإِيمَانِ كَالرَّأْسِ مِنَ الْجَسَدِ",
        translation: "Patience is to faith what the head is to the body.",
        source: "Imam Husain (ع)",
        body: [
            "On the plains of Karbala, Imam Husain (ع) demonstrated the highest form of patience humanity has ever witnessed. He lost everything — his companions, his family, his water, and finally his life — and yet he did not waver in his faith or his mission.",
            "His final words were words of gratitude and submission to Allah. The lesson of Karbala is not just about sacrifice — it is about patience in the face of injustice, steadfastness in the face of overwhelming odds, and the unshakeable belief that truth will ultimately prevail.",
        ],
        highlight: {
            arabic: "هَيْهَاتَ مِنَّا الذِّلَّةُ",
            translation: "How far is humiliation from us!",
            source: "Imam Husain (ع) — Karbala, 61 AH",
            bg: "from-red-900 to-red-950",
            accent: "text-red-300",
        },
        modernLesson: "When life becomes unbearable — job loss, illness, family struggles — return to Karbala. If Imam Husain (ع) could stand with gratitude on the day he lost everything, your hardship has a way out through patience.",
        color: "border-red-200 dark:border-red-900/40",
        badgeBg: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    {
        id: "lesson-relationships",
        num: "04",
        icon: Users,
        emoji: "🤝",
        title: "Honour Your Relationships",
        imam: "Imam Zayn al-Abidin (ع)",
        arabic: "حَقُّ أُمِّكَ أَنْ تَعْلَمَ أَنَّهَا حَمَلَتْكَ حَيْثُ لَا يَحْمِلُ أَحَدٌ أَحَدًا",
        translation: "The right of your mother is that you know she carried you where no one carries another.",
        source: "Imam Zayn al-Abidin (ع) — Risalat al-Huquq",
        body: [
            "Imam Zayn al-Abidin (ع) composed the most comprehensive treatise on human rights and relationships in Islamic history — Risalat al-Huquq (The Treatise of Rights). In it, he outlines the rights of Allah, parents, children, siblings, neighbours, teachers, students, and even one's own body.",
            "He taught that a believer is not judged only by their worship — but by how they treat the people around them. The one who prays all night but ignores their parents' needs has missed the point of Islam entirely. Relationships are our greatest test and our greatest opportunity for reward.",
        ],
        highlight: {
            arabic: "حَقُّ جَارِكَ حِفْظُهُ غَائِبًا وَإِكْرَامُهُ شَاهِدًا",
            translation: "The right of your neighbour is to protect him in his absence and to honour him in his presence.",
            source: "Imam Zayn al-Abidin (ع) — Risalat al-Huquq",
            bg: "from-teal-900 to-teal-950",
            accent: "text-teal-300",
        },
        modernLesson: "Call your parents today. Check on your neighbour. Reply to that message you've been ignoring. The Imam (ع) taught that every relationship carries rights — and neglecting them is a spiritual wound.",
        color: "border-teal-200 dark:border-teal-900/40",
        badgeBg: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    },
    {
        id: "lesson-dunya",
        num: "05",
        icon: Clock,
        emoji: "⏳",
        title: "Do Not Be Enslaved by Dunya",
        imam: "Imam Muhammad al-Baqir (ع)",
        arabic: "مَثَلُ الْحَرِيصِ عَلَى الدُّنْيَا كَمَثَلِ دُودَةِ الْقَزِّ",
        translation: "The one greedy for the world is like a silkworm — the more it wraps itself in silk, the harder it is to escape.",
        source: "Imam al-Baqir (ع)",
        body: [
            "Imam Muhammad al-Baqir (ع) — known as the 'Splitter of Knowledge' — warned extensively about the spiritual danger of attachment to this world. He did not say wealth itself is evil. Rather, it is the attachment to wealth, the obsession with status, and the forgetting of the Hereafter that destroys a person.",
            "He lived a life of complete contentment. Despite being the great-grandson of the Prophet (ص) and possessing unparalleled knowledge, he was humble in his dress, simple in his needs, and generous beyond measure. His entire life was a demonstration of freedom from the dunya.",
        ],
        highlight: {
            arabic: "لَيْسَ الزُّهْدُ فِي الدُّنْيَا بِتَحْرِيمِ الْحَلَالِ",
            translation: "Asceticism in the world does not mean making the lawful forbidden.",
            source: "Imam al-Baqir (ع)",
            bg: "from-stone-800 to-stone-900",
            accent: "text-stone-300",
        },
        modernLesson: "You can own a phone, a house, and a car — but they must not own you. Ask yourself: 'If I lost this tomorrow, would it shatter my peace?' If yes, your heart is too attached. Detach through Dhikr and gratitude.",
        color: "border-stone-200 dark:border-stone-700",
        badgeBg: "bg-stone-50 text-stone-700 dark:bg-stone-800/60 dark:text-stone-400",
    },
    {
        id: "lesson-action",
        num: "06",
        icon: BookOpen,
        emoji: "📜",
        title: "Let Your Deeds Speak",
        imam: "Imam Ja'far al-Sadiq (ع)",
        arabic: "كُونُوا دُعَاةً لِلنَّاسِ بِغَيْرِ أَلْسِنَتِكُمْ",
        translation: "Call people to Islam through means other than your tongues — let them see your deeds.",
        source: "Imam Ja'far al-Sadiq (ع) — Al-Kafi",
        body: [
            "Imam Ja'far al-Sadiq (ع) — the sixth Imam and one of the greatest scholars in Islamic history — trained thousands of students across all disciplines of knowledge. Yet his most powerful lesson was the simplest: your actions are your greatest sermon.",
            "He said: 'Be an adornment for us, not a cause of shame.' Meaning — if you call yourself a follower of Ahlulbayt (ع), let your honesty, your kindness, your integrity, and your character be the proof. Words without deeds are hollow.",
        ],
        highlight: {
            arabic: "كُونُوا زَيْنًا لَنَا وَلَا تَكُونُوا شَيْنًا عَلَيْنَا",
            translation: "Be an adornment for us and not a source of shame upon us.",
            source: "Imam al-Sadiq (ع) — Al-Kafi, Vol. 2",
            bg: "from-yellow-900 to-yellow-950",
            accent: "text-yellow-300",
        },
        modernLesson: "Before posting another Islamic quote online — ask yourself: does my daily life reflect this? The Imam (ع) said your behaviour is your da'wah. Be the kind of Muslim that makes people ask: 'What makes you different?'",
        color: "border-yellow-200 dark:border-yellow-900/40",
        badgeBg: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
    {
        id: "lesson-forgiveness",
        num: "07",
        icon: Heart,
        emoji: "❤️",
        title: "Forgive & Purify the Heart",
        imam: "Imam Ali al-Ridha (ع)",
        arabic: "أَفْضَلُ الْعِبَادَةِ الصَّبْرُ وَالصَّمْتُ وَانْتِظَارُ الْفَرَجِ",
        translation: "The best worship is patience, silence, and waiting for relief from Allah.",
        source: "Imam Ali al-Ridha (ع)",
        body: [
            "Imam Ali al-Ridha (ع) — the eighth Imam who was forced into the court of the Abbasid caliph al-Ma'mun — demonstrated forgiveness and inner peace in some of the most politically dangerous circumstances imaginable. He was surrounded by enemies, watched constantly, and yet he remained generous, wise, and kind to all.",
            "He taught that the purification of the heart — removing hatred, jealousy, arrogance, and grudges — is the highest form of jihad. A heart filled with resentment has no room for Allah. Forgiveness is not weakness. It is the ultimate act of spiritual strength.",
        ],
        highlight: {
            arabic: "مَنْ لَمْ يَشْكُرِ الْمُنْعِمَ مِنَ الْمَخْلُوقِينَ لَمْ يَشْكُرِ اللَّهَ",
            translation: "Whoever does not thank the one who does good among creation has not thanked Allah.",
            source: "Imam Ali al-Ridha (ع) — Uyun Akhbar al-Ridha",
            bg: "from-emerald-900 to-emerald-950",
            accent: "text-emerald-300",
        },
        modernLesson: "Write down one person you have been carrying resentment towards. Forgive them in your heart — not for their sake, but for your own spiritual freedom. An open heart is the home of Allah's mercy.",
        color: "border-emerald-200 dark:border-emerald-900/40",
        badgeBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
];

const APPLY_STEPS = [
    { icon: "📖", title: "Read one saying daily", desc: "Pick a book of Ahlulbayt wisdom like Bihar al-Anwar or Al-Kafi. Read one narration every morning." },
    { icon: "🪞", title: "Reflect on one lesson weekly", desc: "Each week, choose one of these lessons and actively apply it in your interactions, speech, and decisions." },
    { icon: "📝", title: "Journal your progress", desc: "Keep a small notebook. Write how you applied the lesson and what changed in you." },
    { icon: "🕌", title: "Attend Majalis", desc: "Gatherings that remember the Ahlulbayt (ع) are schools of wisdom. Make them a regular part of your life." },
];

const RELATED_ARTICLES = [
    { title: "How to Connect with the Quran in Daily Life", date: "May 12, 2024", readTime: "5 min read", imgBg: "from-amber-950 via-stone-900 to-amber-800", emoji: "📖", slug: "how-to-connect-with-quran" },
    { title: "Sermons of Imam Ali (ع) for Today's World", date: "May 20, 2024", readTime: "8 min read", imgBg: "from-stone-900 via-amber-950 to-stone-800", emoji: "🏛️", slug: "what-imam-ali-sermons-teach-modern-society" },
    { title: "The Importance of Taqwa in Today's World", date: "Apr 28, 2024", readTime: "4 min read", imgBg: "from-teal-950 via-stone-900 to-teal-800", emoji: "🌿", slug: "the-importance-of-taqwa-in-todays-world" },
    { title: "Virtues and Benefits of Ziyarat Ahlulbayt (ع)", date: "May 12, 2024", readTime: "5 min read", imgBg: "from-red-950 via-stone-900 to-red-900", emoji: "🕌", slug: "virtues-of-ziyarat-ahlulbayt" },
    { title: "Patience and Gratitude: A Path to Inner Peace", date: "Apr 2, 2024", readTime: "5 min read", imgBg: "from-yellow-950 via-stone-900 to-yellow-800", emoji: "🕊️", slug: "patience-and-gratitude" },
];

// ─── SHARE BUTTONS ────────────────────────────────────────────────────────────

function ShareButtons() {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const base =
        "flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400";
    return (
        <div className="flex items-center gap-3">
            <a href="https://wa.me/?text=Check+this+article" target="_blank" rel="noreferrer"
                className={`${base} hover:border-green-400 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-400`}>
                <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className={`${base} hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400`}>
                <FacebookIcon className="h-4 w-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer"
                className={`${base} hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100`}>
                <XIcon className="h-4 w-4" />
            </a>
            <button onClick={handleCopy}
                className={`${base} hover:border-emerald-400 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400`}
                title={copied ? "Copied!" : "Copy link"}>
                <Link2 className="h-4 w-4" />
            </button>
            {copied && <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Copied!</span>}
        </div>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LifeLessonsAhlulbaytPage() {
    const [activeSection, setActiveSection] = useState("who-are-ahlulbayt");
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
            { rootMargin: "-25% 0px -60% 0px" }
        );
        TOC_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white dark:bg-[#030102] transition-colors duration-300">

            {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
            <section className="relative min-h-[360px] overflow-hidden bg-[#EAE4D6] dark:bg-[#0A0804] sm:min-h-[400px]">

                <div className="relative z-10 flex md:flex-row-reverse justify-between mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
                    {/* Breadcrumb */}
                    <div className="w-80 h-80 overflow-hidden rounded-xl mr-10 md:block hidden">
                        <Image src={dp} alt="" className="w-full object-cover h-full" placeholder="blur" />
                    </div>
                    <div>
                        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                            <Link href="/" className="transition hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
                            <ChevronRight className="h-3 w-3 opacity-40" />
                            <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">Blog</Link>
                            <ChevronRight className="h-3 w-3 opacity-40" />
                            <Link href="/blogs" className="transition hover:text-gray-700 dark:hover:text-gray-300">Articles &amp; Insights</Link>
                            <ChevronRight className="h-3 w-3 opacity-40" />
                            <span className="max-w-[200px] truncate text-gray-700 dark:text-gray-400">Life Lessons from the Sayings of Ahlulbayt (ع)</span>
                        </nav>

                        <span className="mb-4 inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold text-white dark:bg-emerald-700">
                            Ahlulbayt (عليهم السلام)
                        </span>

                        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                            Life Lessons from the Sayings<br />
                            <span className="text-emerald-800 dark:text-emerald-500">of Ahlulbayt (عليهم السلام)</span>
                        </h1>

                        <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                            Seven timeless lessons from the Imams of the Prophet's household — words that have
                            guided millions across centuries and speak directly to our lives today.
                        </p>

                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center">
                                <Image src={logo} width={200} height={200} alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Shia Quran Pak Academy</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                    <span>May 5, 2024</span>
                                    <span className="h-1 w-1 rounded-full bg-gray-400" />
                                    <span>6 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
          CONTENT + SIDEBAR
      ══════════════════════════════════════════ */}
            <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="flex flex-col gap-10 xl:flex-row xl:gap-12">

                    {/* ── LEFT: Article body ── */}
                    <div ref={contentRef} className="min-w-0 flex-1">

                        {/* Featured banner */}
                        <div className="mb-8 overflow-hidden rounded-2xl">
                            <div className="relative h-64 w-full sm:h-80 lg:h-[380px] bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center gap-4">
                                <span className="text-7xl opacity-40"></span>
                                <p
                                    className="px-6 text-center text-2xl leading-loose text-amber-300 sm:text-3xl"
                                    dir="rtl"
                                    style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                                >
                                    إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا
                                </p>
                                <p className="text-xs tracking-widest text-amber-600 uppercase">Surah Al-Ahzab 33:33</p>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </div>

                        {/* Intro */}
                        <p className="mb-5 text-sm leading-[1.9] text-gray-700 dark:text-gray-300 sm:text-base">
                            Allah says in the Quran: <em>&ldquo;Indeed Allah wishes to remove all impurity from you,
                                O People of the House, and to purify you completely.&rdquo;</em> (33:33) The Ahlulbayt (ع)
                            are not just historical figures — they are the{" "}
                            <strong className="font-bold text-gray-900 dark:text-gray-100">living embodiment of the Quran's teachings</strong>,
                            preserved in their lives, letters, and sayings for every generation until the Day of Judgement.
                        </p>
                        <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            This article draws seven life-changing lessons from the words of six of the Fourteen
                            Infallibles (ع) — lessons that cut through the noise of the modern world and speak
                            directly to the struggles we face today.
                        </p>

                        {/* Opening ayah box */}
                        <div className="mb-10 flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900/60">
                            <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2.5 dark:bg-emerald-900/30">
                                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                            </div>
                            <div>
                                <p className="mb-1 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                                    &ldquo;I am leaving behind two weighty things — the Book of Allah and my Ahlulbayt.
                                    They will not separate until they meet me at the Hawd. So see how you deal with them
                                    after me.&rdquo;
                                </p>
                                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500">
                                    — Prophet Muhammad (ص) — Hadith al-Thaqalayn [Sahih Muslim, Tirmidhi, and others]
                                </p>
                            </div>
                        </div>

                        {/* ── Who Are Ahlulbayt ── */}
                        <h2 id="who-are-ahlulbayt" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                            Who Are the Ahlulbayt (ع)?
                        </h2>
                        <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            The Ahlulbayt (ع) — the People of the Prophet's House — are the Prophet Muhammad (ص),
                            Lady Fatimah al-Zahra (س), and the twelve Imams beginning with Imam Ali (ع). They were
                            chosen by Allah and explicitly named and confirmed by the Prophet (ص) as the guardians
                            of his message after him.
                        </p>
                        <p className="mb-6 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            The six Imams whose wisdom shapes this article each lived in different centuries, under
                            different pressures — and yet their messages are remarkably consistent, universal, and
                            urgently relevant today.
                        </p>

                        {/* Imam cards grid */}
                        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {IMAMS_INTRO.map((imam) => (
                                <div key={imam.name} className={`overflow-hidden rounded-xl bg-gradient-to-br ${imam.color} p-4`}>
                                    <span className="mb-2 block text-3xl">{imam.emoji}</span>
                                    <p className="text-sm font-bold text-white">{imam.name}</p>
                                    <p className="mt-0.5 text-[11px] leading-snug text-gray-400">{imam.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* ── SEVEN LESSONS ── */}
                        {LESSONS.map((lesson) => (
                            <div key={lesson.id} className="mb-14">
                                <h2
                                    id={lesson.id}
                                    className="mb-4 scroll-mt-24 flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl"
                                >
                                    <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-black ${lesson.badgeBg}`}>
                                        {lesson.num}
                                    </span>
                                    {lesson.title}
                                </h2>

                                {/* Imam badge */}
                                <span className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${lesson.badgeBg}`}>
                                    <span>{lesson.emoji}</span>
                                    {lesson.imam}
                                </span>

                                {/* Body */}
                                <div className="mb-4 space-y-3">
                                    {lesson.body.map((para, i) => (
                                        <p key={i} className="text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                                            {para}
                                        </p>
                                    ))}
                                </div>

                                {/* Pull quote */}
                                <div className={`mb-5 relative overflow-hidden rounded-2xl bg-gradient-to-br ${lesson.highlight.bg} p-5 shadow-md`}>
                                    <div className="pointer-events-none absolute -right-3 -top-3 text-[90px] leading-none opacity-20 select-none">&ldquo;</div>
                                    <p
                                        className={`relative mb-2 text-xl leading-loose sm:text-2xl ${lesson.highlight.accent}`}
                                        dir="rtl"
                                        style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                                    >
                                        {lesson.highlight.arabic}
                                    </p>
                                    <p className="relative mb-1.5 text-sm italic leading-relaxed text-gray-200">
                                        &ldquo;{lesson.highlight.translation}&rdquo;
                                    </p>
                                    <p className="relative text-xs font-semibold text-gray-400">— {lesson.highlight.source}</p>
                                </div>

                                {/* Modern lesson callout */}
                                <div className={`flex items-start gap-3 rounded-xl border ${lesson.color} bg-white p-4 dark:bg-gray-900`}>
                                    <span className="mt-0.5 flex-shrink-0 text-lg">🔑</span>
                                    <div>
                                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                            For Us Today
                                        </p>
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                            {lesson.modernLesson}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mt-10 border-t border-gray-100 dark:border-gray-800" />
                            </div>
                        ))}

                        {/* ── Apply Today ── */}
                        <h2 id="apply-today" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                            Applying These Lessons Today
                        </h2>
                        <p className="mb-5 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            Wisdom without action is like a map without legs. Here are four practical ways to
                            bring the lessons of Ahlulbayt (ع) into your daily life:
                        </p>

                        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {APPLY_STEPS.map((step) => (
                                <div key={step.title} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                    <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl dark:bg-gray-800">
                                        {step.icon}
                                    </span>
                                    <div>
                                        <p className="mb-1 text-sm font-bold text-gray-900 dark:text-gray-100">{step.title}</p>
                                        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── Conclusion ── */}
                        <h2 id="conclusion" className="mb-3 scroll-mt-24 text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                            Conclusion
                        </h2>
                        <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            The Ahlulbayt (ع) are not a topic to be studied once and set aside. They are a
                            school — a living, breathing, eternal school of wisdom, character, and nearness to Allah.
                            Every saying they uttered was a gift to us. Every hardship they endured was a lesson
                            written in blood and patience.
                        </p>
                        <p className="mb-4 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            The question is not whether their lessons are relevant. They are timeless. The question
                            is whether we are willing to sit at their feet, learn from their words, and transform
                            our lives accordingly.
                        </p>
                        <p className="mb-8 text-sm leading-[1.9] text-gray-600 dark:text-gray-400 sm:text-base">
                            May Allah grant us the love of Ahlulbayt (عليهم السلام), the ability to act on their
                            wisdom, and the honour of being their true followers — not just in declaration, but in
                            character and deed. Ameen.
                        </p>

                        {/* Closing Arabic quote */}
                        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
                            <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 p-6 text-center">
                                <p
                                    className="text-2xl leading-loose text-amber-300 sm:text-3xl"
                                    dir="rtl"
                                    style={{ fontFamily: "'Scheherazade New','Amiri',serif" }}
                                >
                                    اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 text-center dark:bg-gray-900/60">
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">
                                    O Allah, send blessings upon Muhammad and the family of Muhammad.
                                </p>
                            </div>
                        </div>

                        {/* Course CTA */}
                        <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 text-center sm:flex-row sm:text-left">
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl">✨</div>
                            <div className="flex-1">
                                <p className="mb-1 text-sm font-bold text-white">Want to Go Deeper into Ahlulbayt Wisdom?</p>
                                <p className="text-xs leading-relaxed text-emerald-300">
                                    Explore our <strong className="text-white">Life of Imam Ali (ع)</strong>,{" "}
                                    <strong className="text-white">Ziyarat Studies</strong>, and{" "}
                                    <strong className="text-white">Aqaid</strong> courses — taught by qualified scholars.
                                </p>
                            </div>
                            <Link href="/courses"
                                className="flex-shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50">
                                Explore Courses →
                            </Link>
                        </div>

                        {/* Share */}
                        <div className="mb-10 border-t border-gray-200 pt-6 dark:border-gray-800">
                            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Share this article</p>
                            <ShareButtons />
                        </div>

                        {/* Prev / Next */}
                        <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-800 sm:flex-row sm:justify-between">
                            <Link href="/blogs/how-to-connect-with-quran"
                                className="group flex max-w-xs items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                                <div>
                                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Previous Article</p>
                                    <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                                        How to Connect with the Quran in Daily Life
                                    </p>
                                </div>
                            </Link>
                            <Link href="/blogs/the-importance-of-taqwa-in-todays-world"
                                className="group flex max-w-xs flex-row-reverse items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-emerald-600">
                                <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-400 transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                                <div className="sm:text-right">
                                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">Next Article</p>
                                    <p className="text-xs font-semibold leading-snug text-gray-800 dark:text-gray-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition">
                                        The Importance of Taqwa in Today&apos;s World
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* ── RIGHT: Sticky sidebar ── */}
                    <aside className="w-full xl:w-[300px] 2xl:w-[340px]">
                        <div className="sticky top-24 space-y-6">

                            {/* TOC */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">On This Page</h3>
                                <ul className="relative space-y-1 pl-4">
                                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />
                                    {TOC_ITEMS.map((item) => {
                                        const isActive = activeSection === item.id;
                                        return (
                                            <li key={item.id}>
                                                <a href={`#${item.id}`}
                                                    className={`relative flex items-center gap-2 rounded-md py-1.5 pl-3 pr-2 text-xs transition
                            ${isActive ? "font-semibold text-emerald-700 dark:text-emerald-400" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"}`}>
                                                    <span className={`absolute -left-[9px] h-2 w-2 rounded-full border-2 transition-all
                            ${isActive ? "border-emerald-600 bg-emerald-600 dark:border-emerald-400 dark:bg-emerald-400" : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"}`} />
                                                    {item.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Share */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-100">Share this article</h3>
                                <ShareButtons />
                            </div>


                            {/* CTA */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600">
                                        <MessageCircle className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Have Questions?</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">We&apos;re here to help you on your learning journey.</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/+923394022926" target="_blank" rel="noreferrer"
                                    className="mb-2 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-700 px-4 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white">
                                    <MessageCircle className="h-4 w-4" />
                                    Chat on WhatsApp
                                </a>
                                <p className="text-center text-sm font-bold text-emerald-900 dark:text-emerald-500">+92 339 4022926</p>
                            </div>

                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}