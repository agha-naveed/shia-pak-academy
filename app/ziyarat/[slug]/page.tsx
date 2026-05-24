"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Pause, RotateCcw, FastForward, Volume2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const ZIYARAT_E_ASHURA = [
  { type: "segment", arabic: "بِسْمِ اللهِ الرّحْمٰنِ الرّحِیْمِ", transliteration: "bismillahi alrrahmani alrraheemi", translation: "In the name of Allah, the Most Merciful, the Most Compassionate" },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا أَبَا عَبْدِ ٱللَّهِ", transliteration: "alssalamu `alayka ya aba `abdillahi", translation: "Peace be upon you, O Abu-`Abdullah." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا بْنَ رَسُولِ ٱللَّهِ", transliteration: "alssalamu `alayka yabna rasuli allahi", translation: "Peace be upon you, O son of Allah's Messenger." },
  { type: "segment", arabic: "السَّلاَمُ عَلَيكَ يَا خِيَرَةِ ٱللَّهِ وَٱبْنَ خَيرَتِهِ", transliteration: "alssalamu `alayka ya khiyarata allahi wabna khiyaratihi", translation: "Peace be upon you, O choicest of Allah and son of His choicest." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا بْنَ أَمِيرِ ٱلْمُؤْمِنِينَ", transliteration: "alssalamu `alayka yabna amiri almu'minina", translation: "Peace be upon you, O son of the Commander of the Faithful" },
  { type: "segment", arabic: "وَٱبْنَ سَيِّدِ ٱلْوَصِيِّينَ", transliteration: "wabna sayyidi alwasiyyina", translation: "and son of the chief of the Prophets' successors." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا بْنَ فَاطِمَةَ", transliteration: "alssalamu `alayka yabna fatimata", translation: "Peace be upon you, O son of Fatimah" },
  { type: "segment", arabic: "سَيِّدَةِ نِسَاءِ ٱلْعَالَمِينَ", transliteration: "sayyidati nisa'i al`alamina", translation: "the doyenne of the women of the worlds." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا ثَارَ ٱللَّهِ وَٱبْنَ ثَارِهِ وَٱلْوِتْرَ ٱلْمَوْتُورَ", transliteration: "alssalamu `alayka ya thara allahi wabna tharihi walwitra almawtura", translation: "Peace be upon you, O vengeance of Allah, son of His vengeance, and the unavenged so far." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ وَعَلَىٰ ٱلأَرْوَاحِ ٱلَّتِي حَلَّتْ بِفِنَائِكَ", transliteration: "alssalamu `alayka wa `ala al-arwahi allati hallat bifina'ika", translation: "Peace be upon you and upon the souls that resided in your courtyard." },
  { type: "segment", arabic: "عَلَيْكُمْ مِنِّي جَمِيعاً سَلاَمُ ٱللَّهِ أَبَداً", transliteration: "`alaykum minni jami`an salamu allahi abadan", translation: "Peace of Allah be upon all of you from me forever" },
  { type: "segment", arabic: "مَا بَقيتُ وَبَقِيَ ٱللَّيْلُ وَٱلنَّهَارُ", transliteration: "ma baqitu wa baqiya allaylu walnnaharu", translation: "as long as I am existent and as long as there are day and night." },
  { type: "segment", arabic: "يَا أَبَا عَبْدِ ٱللَّهِ", transliteration: "ya aba `abdillahi", translation: "O Abu-`Abdullah," },
  { type: "segment", arabic: "لَقَدْ عَظُمَتِ ٱلرَّزِيَّةُ", transliteration: "laqad `azumat alrraziyyatu", translation: "unbearable is the sorrow" },
  { type: "segment", arabic: "وَجَلَّتْ وَعَظُمَتِ ٱلْمُصيبَةُ بِكَ", transliteration: "wa jallat wa `azumat almusibatu bika", translation: "and excruciating and unbearable is the misfortune of you" },
  { type: "segment", arabic: "عَلَيْنَا وَعَلَىٰ جَمِيعِ أَهْلِ ٱلإِسْلاَمِ", transliteration: "`alayna wa `ala jami`i ahli al-islami", translation: "for us and for all the people of Islam." },
  { type: "segment", arabic: "وَجَلَّتْ وَعَظُمَتْ مُصيبَتُكَ", transliteration: "wa jallat wa `azumat musibatuka", translation: "Excruciating and unbearable has been your misfortune" },
  { type: "segment", arabic: "فِي ٱلسَّمَاوَاتِ عَلَىٰ جَمِيعِ أَهْلِ ٱلسَّمَاوَاتِ", transliteration: "fi alssamawati `ala jami`i ahli alssamawati", translation: "in the heavens for all the inhabitants of the heavens." },
  { type: "segment", arabic: "فَلَعَنَ ٱللَّهُ أُمَّةً أَسَّسَتْ أَسَاسَ ٱلظُّلْمِ وَٱلْجَوْرِ عَلَيْكُمْ أَهْلَ ٱلْبَيْتِ", transliteration: "fala`ana allahu ummatan assasat asasa alzzulmi waljawri `alaykum ahla albayti", translation: "So, may Allah curse the people who laid the basis of persecution and wronging against you, O Members of the Household." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ أُمَّةً دَفَعَتْكُمْ عَنْ مَقَامِكُمْ", transliteration: "wa la`ana allahu ummatan dafa`atkum `an maqamikum", translation: "May Allah curse the people who drove you away from your position" },
  { type: "segment", arabic: "وَأَزَالَتْكُمْ عَنْ مَرَاتِبِكُمُ ٱلَّتِي رَتَّبَكُمُ ٱللَّهُ فِيهَا", transliteration: "wa azalatkum `an maratibikum allati rattabakum allahu fiha", translation: "and removed you away from your ranks that Allah has put you in." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ أُمَّةً قَتَلَتْكُمْ", transliteration: "wa la`ana allahu ummatan qatalatkum", translation: "May Allah curse the people who slew you." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ ٱلْمُمَهِّدِينَ لَهُمْ", transliteration: "wa la`ana allahu almumahhidina lahum", translation: "May Allah curse those who paved the way for them to do so" },
  { type: "segment", arabic: "بِٱلتَّمْكِينِ مِنْ قِتَالِكُمْ", transliteration: "bilttamkini min qitalikum", translation: "and who made possible for them to fight against you." },
  { type: "segment", arabic: "بَرِئْتُ إِلَىٰ ٱللَّهِ وَإِلَيْكُمْ مِنْهُمْ", transliteration: "bari'tu ila allahi wa ilaykum minhum", translation: "I repudiate them in the presence of Allah and You" },
  { type: "segment", arabic: "وَمِنْ أَشْيَاعِهِمْ وَأَتْبَاعِهِمْ وَأَوْلِيَائِهِمْ", transliteration: "wa min ashya`ihim wa atba`ihim wa awliya'ihim", translation: "and I repudiate their devotees, followers, and loyalists." },
  { type: "segment", arabic: "يَا أَبَا عَبْدِ ٱللَّهِ", transliteration: "ya aba `abdillahi", translation: "O Abu-`Abdullah," },
  { type: "segment", arabic: "إِنِّي سِلْمٌ لِمَنْ سَالَمَكُمْ", transliteration: "inni silmun liman salamakum", translation: "I am at peace with those who are at peace with you" },
  { type: "segment", arabic: "وَحَرْبٌ لِمَنْ حَارَبَكُمْ إِلَىٰ يَوْمِ ٱلْقِيَامَةِ", transliteration: "wa harbun liman harabakum ila yawmi alqiyamati", translation: "and I am at war against those who have fought against you up to the Resurrection Day." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ آلَ زِيَادٍ وَآلَ مَرْوَانَ", transliteration: "wa la`ana allahu ala ziyadin wa ala marwana", translation: "May Allah also curse the family of Ziyad and the family of Marwan." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ بَنِي أُمَيَّةَ قَاطِبَةً", transliteration: "wa la`ana allahu bani umayyata qatibatan", translation: "May Allah also curse the descendants of Umayyah altogether." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ ٱبْنَ مَرْجَانَةَ", transliteration: "wa la`ana allahu ibna marjanata", translation: "May Allah also curse the son of Marjanah." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ عُمَرَ بْنَ سَعْدٍ", transliteration: "wa la`ana allahu `umara bna sa`din", translation: "May Allah also curse `Umar the son of Sa`d." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ شِمْراً", transliteration: "wa la`ana allahu shimran", translation: "May Allah also curse Shimr." },
  { type: "segment", arabic: "وَلَعَنَ ٱللَّهُ أُمَّةً أَسْرَجَتْ وَأَلْجَمَتْ", transliteration: "wa la`ana allahu ummatan asrajat wa aljamat", translation: "May Allah also curse the people who saddled up, gave reins to their horses," },
  { type: "segment", arabic: "وَتَنَقَّبَتْ لِقِتَالِكَ", transliteration: "wa tanaqqabat liqitalika", translation: "and masked their faces in preparation for fighting against you." },
  { type: "segment", arabic: "بِأَبِي أَنْتَ وَأُمِّي", transliteration: "bi'abi anta wa ummi", translation: "May my father and mother be ransoms for you." },
  { type: "segment", arabic: "لَقَدْ عَظُمَ مُصَابِي بِكَ", transliteration: "laqad `azuma musabi bika", translation: "Extremely insufferable is my commiserations with you;" },
  { type: "segment", arabic: "فَأَسْأَلُ ٱللَّهَ ٱلَّذِي أَكْرَمَ مَقَامَكَ وَأَكْرَمَنِي بِكَ", transliteration: "fa'as'alu allaha alladhi akrama maqamaka wa akramani bika", translation: "so, I beseech Allah Who has honored your position and honored me because of you" },
  { type: "segment", arabic: "أَنْ يَرْزُقَنِي طَلَبَ ثَأْرِكَ", transliteration: "an yarzuqani talaba tha'rika", translation: "to endue me with the chance to avenge you" },
  { type: "segment", arabic: "مَعَ إِمَامٍ مَنْصُورٍ مِنْ أَهْلِ بَيْتِ مُحَمَّدٍ", transliteration: "ma`a imamin mansurin min ahli bayti muhammadin", translation: "with a (Divinely) supported leader from the Household of Muhammad," },
  { type: "segment", arabic: "صَلَّىٰ ٱللَّهُ عَلَيْهِ وَآلِهِ", transliteration: "salla allahu `alayhi wa alihi", translation: "peace of Allah be upon him and his Household." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱجْعَلْنِي عِنْدَكَ وَجِيهاً", transliteration: "allahumma ij`alni `indaka wajihan", translation: "O Allah, (please) make me illustrious in Your sight" },
  { type: "segment", arabic: "بِٱلْحُسَيْنِ عَلَيْهِ ٱلسَّلاَمُ فِي ٱلدُّنْيَا وَٱلآخِرَةِ", transliteration: "bilhusayni `alayhi alssalamu fi alddunya wal-akhirati", translation: "in the name of al-Husayn, peace be upon him, in this world and in the Hereafter." },
  { type: "segment", arabic: "يَا أَبَا عَبْدِ ٱللَّهِ", transliteration: "ya aba `abdillahi", translation: "O Abu-`Abdullah," },
  { type: "segment", arabic: "إِنِّي أَتَقَرَّبُ إِلَىٰ ٱللَّهِ وَإِلَىٰ رَسُولِهِ", transliteration: "inni ataqarrabu ila allahi wa ila rasulihi", translation: "I do seek nearness to Allah, to His Messenger," },
  { type: "segment", arabic: "وَإِلَىٰ أَمِيرِ ٱلْمُؤْمِنِينَ وَإِلَىٰ فَاطِمَةَ", transliteration: "wa ila amiri almu'minina wa ila fatimata", translation: "to the Commander of the Faithful, to Fatimah," },
  { type: "segment", arabic: "وَإِلَىٰ ٱلْحَسَنِ وَإِلَيْكَ بِمُوَالاَتِكَ", transliteration: "wa ila alhasani wa ilayka bimuwalatika", translation: "to al-Hasan, and to you by means of loyalty to you" },
  { type: "segment", arabic: "وَبِٱلْبَرَاءَةِ مِمَّنْ قَاتَلَكَ", transliteration: "wa bilbara'ati mimman qatalaka", translation: "and by means of repudiation of those who fought against you" },
  { type: "segment", arabic: "وَنَصَبَ لَكَ ٱلْحَرْبَ", transliteration: "wa nasaba laka alharba", translation: "and incurred your hostility," },
  { type: "segment", arabic: "وَبِٱلْبَرَاءَةِ مِمَّنْ أَسَّسَ أَسَاسَ ٱلظُّلْمِ وَٱلْجَوْرِ عَلَيْكُمْ", transliteration: "wa bilbara'ati mimman assasa asasa alzzulmi waljawri `alaykum", translation: "and repudiation of those who laid the basis of persecution and wronging against you all." },
  { type: "segment", arabic: "وَأَبْرَأُ إِلَىٰ ٱللَّهِ وَإِلَىٰ رَسُولِهِ", transliteration: "wa abra'u ila allahi wa ila rasulihi", translation: "I also repudiate, in the presence of Allah and His Messenger," },
  { type: "segment", arabic: "مِمَّنْ أَسَّسَ أَسَاسَ ذٰلِكَ", transliteration: "mimman assasa asasa dhalika", translation: "those who laid the basis of all that," },
  { type: "segment", arabic: "وَبَنَىٰ عَلَيْهِ بُنْيَانَهُ", transliteration: "wa bana `alayhi bunyanahu", translation: "established their foundations on it," },
  { type: "segment", arabic: "وَجَرَىٰ فِي ظُلْمِهِ وَجَوْرِهِ عَلَيْكُمْ وَعلىٰ أَشْيَاعِكُمْ", transliteration: "wa jara fi zulmihi wa jawrihi `alaykum wa `ala ashya`ikum", translation: "and continued in wronging and persecuting you and your adherents." },
  { type: "segment", arabic: "بَرِئْتُ إِلَىٰ ٱللَّهِ وَإِلَيْكُمْ مِنْهُمْ", transliteration: "bari'tu ila allahi wa ilaykum minhum", translation: "In the presence of Allah and you all do I repudiate these." },
  { type: "segment", arabic: "وَأَتَقَرَّبُ إِلَىٰ ٱللَّهِ ثُمَّ إِلَيْكُمْ", transliteration: "wa ataqarrabu ila allahi thumma ilaykum", translation: "And I seek nearness to Allah and then to you all" },
  { type: "segment", arabic: "بِمُوَالاَتِكُمْ وَمُوَالاَةِ وَلِيِّكُمْ", transliteration: "bimuwalatikum wa muwalati waliyyikum", translation: "by means of declaring loyalty to you and to your loyalists" },
  { type: "segment", arabic: "وَبِٱلْبَرَاءَةِ مِنْ أَعْدَائِكُمْ", transliteration: "wa bilbara'ati min a`da'ikum", translation: "and declaring repudiation of your enemies" },
  { type: "segment", arabic: "وَٱلنَّاصِبِينَ لَكُمُ ٱلْحَرْبَ", transliteration: "walnnasibina lakum alharba", translation: "and those who incur animosity of you" },
  { type: "segment", arabic: "وَبِٱلْبَرَاءَةِ مِنْ أَشْيَاعِهِمْ وَأَتْبَاعِهِمْ", transliteration: "wa bilbara'ati min ashya`ihim wa atba`ihim", translation: "and repudiation of their adherents and followers." },
  { type: "segment", arabic: "إِنِّي سِلْمٌ لِمَنْ سَالَمَكُمْ", transliteration: "inni silmun liman salamakum", translation: "I am verily at peace with those who have been at peace with you," },
  { type: "segment", arabic: "وَحَرْبٌ لِمَنْ حَارَبَكُمْ", transliteration: "wa harbun liman harabakum", translation: "I am at war against those who fought against you," },
  { type: "segment", arabic: "وَوَلِيٌّ لِمَنْ وَالاَكُمْ", transliteration: "wa waliyyun liman walakum", translation: "loyalist to those who have been loyalist to you," },
  { type: "segment", arabic: "وَعَدُوٌّ لِمَنْ عَادَاكُمْ", transliteration: "wa `aduwwun liman `adakum", translation: "and enemy of those who have shown enmity towards you." },
  { type: "segment", arabic: "فَأَسْأَلُ ٱللَّهَ ٱلَّذِي أَكْرَمَنِي بِمَعْرِفَتِكُمْ", transliteration: "fa'as'alu allaha alladhi akramani bima`rifatikum", translation: "So, I beseech Allah Who has endued me with the honor of recognizing you" },
  { type: "segment", arabic: "وَمَعْرِفَةِ أَوْلِيَائِكُمْ", transliteration: "wa ma`rifati awliya'ikum", translation: "and recognizing your loyalists" },
  { type: "segment", arabic: "وَرَزَقَنِيَ ٱلْبَرَاءَةَ مِنْ أَعْدَائِكُمْ", transliteration: "wa razaqani albara'ata min a`da'ikum", translation: "and Who conferred upon me with repudiation of your enemies," },
  { type: "segment", arabic: "أَنْ يَجْعَلَنِي مَعَكُمْ فِي ٱلدُّنْيَا وَٱلآخِرَةِ", transliteration: "an yaj`alani ma`akum fi alddunya wal-akhirati", translation: "to include me with you in this world and in the Hereafter" },
  { type: "segment", arabic: "وَأَنْ يُثَبِّتَ لِي عِنْدَكُمْ قَدَمَ صِدْقٍ", transliteration: "wa an yuthabbita li `indakum qadama sidqin", translation: "and to make firm step of honesty for me with you" },
  { type: "segment", arabic: "فِي ٱلدُّنْيَا وَٱلآخِرَةِ", transliteration: "fi alddunya wal-akhirati", translation: "in this world and in the Hereafter." },
  { type: "segment", arabic: "وَأَسْأَلُهُ أَنْ يُبَلِّغَنِيَ ٱلْمَقَامَ ٱلْمَحْمُودَ لَكُمْ عِنْدَ ٱللَّهِ", transliteration: "wa as'aluhu an yuballighani almaqama almahmuda lakum `inda allahi", translation: "I also beseech Him to make me attain the praiseworthy status that you enjoy with Allah" },
  { type: "segment", arabic: "وَأَنْ يَرْزُقَنِي طَلَبَ ثَأْرِي", transliteration: "wa an yarzuqani talaba tha'ri", translation: "and to bestow upon me with the chance to take my own vengeance" },
  { type: "segment", arabic: "مَعَ إِمَامِ هُدىًٰ ظَاهِرٍ", transliteration: "ma`a imami hudan zahirin", translation: "with a leader of true guidance who is (Divinely) sustained" },
  { type: "segment", arabic: "نَاطِقٍ بِٱلْحَقِّ مِنْكُمْ", transliteration: "natiqin bilhaqqi minkum", translation: "and expressing the truth from among you." },
  { type: "segment", arabic: "وَأَسْأَلُ ٱللَّهَ بِحَقِّكُمْ", transliteration: "wa as'alu allaha bihaqqikum", translation: "I also beseech Allah in your names" },
  { type: "segment", arabic: "وَبِٱلشَّأْنِ ٱلَّذِي لَكُمْ عِنْدَهُ", transliteration: "wa bilshsha'ni alladhi lakum `indahu", translation: "and in the name of the standing that you enjoy with Him" },
  { type: "segment", arabic: "أَنْ يُعْطِيَنِي بِمُصَابِي بِكُمْ", transliteration: "an yu`tiyani bimusabi bikum", translation: "to recompense me for my commiserations for you" },
  { type: "segment", arabic: "أَفْضَلَ مَا يُعْطِي مُصَاباً بِمُصِيبَتِهِ", transliteration: "afdala ma yu`ti musaban bimusibatihi", translation: "with the most favorite thing that He ever gives as compensation for misfortunes that has afflicted anyone." },
  { type: "segment", arabic: "مُصِيبَةً مَا أَعْظَمَهَا", transliteration: "musibatan ma a`zamaha", translation: "(Your) misfortune has been so astounding" },
  { type: "segment", arabic: "وَأَعْظَمَ رَزِيَّتَهَا فِي ٱلإِسْلاَمِ", transliteration: "wa a`zama raziyyataha fi al-islami", translation: "and so catastrophic for Islam" },
  { type: "segment", arabic: "وَفِي جَمِيعِ ٱلسَّمَاوَاتِ وَٱلأَرْضِ", transliteration: "wa fi jami`i alssamawati wal-ardi", translation: "and for all the heavens and the entire earth." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱجْعَلْنِي فِي مَقَامِي هٰذَا", transliteration: "allahumma ij`alni fi maqami hadha", translation: "O Allah, (please) make me in this situation of mine" },
  { type: "segment", arabic: "مِمَّنْ تَنَالُهُ مِنْكَ صَلَوَاتٌ وَرَحْمَةٌ وَمَغْفِرَةٌ", transliteration: "mimman tanaluhu minka salawatun wa rahmatun wa maghfiratun", translation: "one of those who receive blessings, mercy, and forgiveness from You." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱجْعَلْ مَحْيَايَ مَحْيَا مُحَمَّدٍ وَآلِ مُحَمَّدٍ", transliteration: "allahumma ij`al mahyaya mahya muhammadin wa ali muhammadin", translation: "O Allah, (please) make me live my lifetime in the same way as Muhammad and Muhammad's Household lived" },
  { type: "segment", arabic: "وَمَمَاتِي مَمَاتَ مُحَمَّدٍ وَآلِ مُحَمَّدٍ", transliteration: "wa mamati mamata muhammadin wa ali muhammadin", translation: "and make me die on the same principles on which Muhammad and Muhammad's Household died." },
  { type: "segment", arabic: "اَللَّهُمَّ إِنَّ هٰذَا يَوْمٌ", transliteration: "allahumma inna hadha yawmun", translation: "O Allah, this day" },
  { type: "segment", arabic: "تَبَرَّكَتْ بِهِ بَنُو أُمَيَّةَ", transliteration: "tabarrakat bihi banu umayyata", translation: "has been regarded as blessed day by the descendants of Umayyah" },
  { type: "segment", arabic: "وَٱبْنُ آكِلَةِ ٱلأَكبَادِ", transliteration: "wabnu akilati al-akbadi", translation: "and by the son of the liver-eater woman," },
  { type: "segment", arabic: "ٱللَّعِينُ ٱبْنُ ٱللَّعِينِ", transliteration: "alla`inu ibnu alla`ini", translation: "the accursed and son of the accursed" },
  { type: "segment", arabic: "عَلَىٰ لِسَانِكَ وَلِسَانِ نَبِيِّكَ", transliteration: "`ala lisanika wa lisani nabiyyika", translation: "by the tongue of You and by the tongue of Your Prophet," },
  { type: "segment", arabic: "صَلَّىٰ ٱللَّهُ عَلَيْهِ وَآلِهِ", transliteration: "salla allahu `alayhi wa alihi", translation: "Allah's peace be upon him," },
  { type: "segment", arabic: "فِي كُلِّ مَوْطِنٍ وَمَوْقِفٍ", transliteration: "fi kulli mawtinin wa mawqifin", translation: "on every occasion and in every situation," },
  { type: "segment", arabic: "وَقَفَ فِيهِ نَبِيُّكَ صَلَّىٰ ٱللَّهُ عَلَيْهِ وَآلِهِ", transliteration: "waqafa fihi nabiyyuka salla allahu `alayhi wa alihi", translation: "which Your Prophet, Allah's peace be upon him, attended." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱلْعَنْ أَبَا سُفْيَانَ وَمُعَاوِيَةَ وَيَزيدَ بْنَ مُعَاوِيَةَ", transliteration: "allahumma il`an aba sufyana wa mu`awiyata wa yazida bna mu`awiyata", translation: "O Allah, pour curses upon Abu-Sufyan, Mu`awiyah, and Yazid son of Mu`awiyah." },
  { type: "segment", arabic: "عَلَيْهِمْ مِنْكَ ٱللَّعْنَةُ أَبَدَ ٱلآبِدِينَ", transliteration: "`alayhim minka alla`natu abada al-abidina", translation: "May Your curse be upon them incessantly and everlastingly." },
  { type: "segment", arabic: "وَهٰذَا يَوْمٌ فَرِحَتْ بِهِ آلُ زِيَادٍ وَآلُ مَرْوَانَ", transliteration: "wa hadha yawmun farihat bihi alu ziyadin wa alu marwana", translation: "This is the day on which the family of Ziyad and the family of Marwan gloated" },
  { type: "segment", arabic: "بِقَتْلِهِمُ ٱلْحُسَيْنَ صَلَوَاتُ ٱللَّهِ عَلَيْهِ", transliteration: "biqatlihim alhusayna salawatu allahi `alayhi", translation: "because they had killed al-Husayn, Allah's blessings be upon him." },
  { type: "segment", arabic: "اَللَّهُمَّ فَضَاعِفْ عَلَيْهِمُ ٱللَّعْنَ مِنْكَ", transliteration: "allahumma fada`if `alayhim alla`na minka", translation: "So, O Allah, pour frequent curses upon them" },
  { type: "segment", arabic: "وَٱلْعَذَابَ ٱلأَلِيمَ", transliteration: "wal`adhaba al-alima", translation: "and double for them the painful chastisement." },
  { type: "segment", arabic: "اَللَّهُمَّ إِنِّي أَتَقَرَّبُ إِلَيْكَ فِي هٰذَا ٱلْيَوْمِ", transliteration: "allahumma inni ataqarrabu ilayka fi hadha alyawmi", translation: "O Allah, I do seek nearness to You on this day," },
  { type: "segment", arabic: "وَفِي مَوْقِفِي هٰذَا", transliteration: "wa fi mawqifi hadha", translation: "on this occasion," },
  { type: "segment", arabic: "وَأَيَّامِ حَيَاتِي", transliteration: "wa ayyami hayati", translation: "and on all the days of my lifetime," },
  { type: "segment", arabic: "بِٱلْبَرَاءَةِ مِنْهُمْ وَٱللَّعْنَةِ عَلَيْهِمْ", transliteration: "bilbara'ati minhum walla`nati `alayhim", translation: "by repudiating these and invoking Your curses upon them," },
  { type: "segment", arabic: "وَبِٱلْمُوَالاَةِ لِنَبِيِّكَ وَآلِ نَبِيِّكَ", transliteration: "wa bilmuwalati linabiyyika wa ali nabiyyika", translation: "and by declaring loyalty to Your Prophet and Your Prophet's Household," },
  { type: "segment", arabic: "عَلَيْهِ وَعَلَيْهِمُ ٱلسَّلاَمُ", transliteration: "`alayhi wa `alayhim alssalamu", translation: "peace be upon him and them." },
  { type: "note", text: "You may then repeat the following Laan one hundred times (or once):" },
  { type: "segment", arabic: "اَللَّهُمَّ ٱلْعَنْ أَوَّلَ ظَالِمٍ", transliteration: "allahumma il`an awwala zalimin", translation: "O Allah, pour curses upon the foremost persecutor" },
  { type: "segment", arabic: "ظَلَمَ حَقَّ مُحَمَّدٍ وَآلِ مُحَمَّدٍ", transliteration: "zalama haqqa muhammadin wa ali muhammadin", translation: "who usurped the right of Muhammad and Muhammad's Household" },
  { type: "segment", arabic: "وَآخِرَ تَابِعٍ لَهُ عَلَىٰ ذٰلِكَ", transliteration: "wa akhira tabi`in lahu `ala dhalika", translation: "and the last follower who acceded to his deed." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱلْعَنِ ٱلْعِصَابَةَ ٱلَّتِي جَاهَدَتِ ٱلْحُسَيْنَ", transliteration: "allahumma il`an al`isabata allati jahadat alhusayna", translation: "O Allah, pour curses upon the gang that struggled against al-Husayn" },
  { type: "segment", arabic: "وَشَايَعَتْ وَبَايَعَتْ وَتَابَعَتْ عَلَىٰ قَتْلِهِ", transliteration: "wa shaya`at wa baya`at wa taba`at `ala qatlihi", translation: "and who supported each other against him, paid homage to his enemies, and participated in slaying him." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱلْعَنْهُمْ جَمِيعاً", transliteration: "allahumma il`anhum jami`an", translation: "O Allah, pour curses upon all of them." },
  { type: "note", text: "You may then repeat the following Salam one hundred times (or once):" },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَيْكَ يَا أَبَا عَبْدِ ٱللَّهِ", transliteration: "alssalamu `alayka ya aba `abdillahi", translation: "Peace be upon you, O Abu-`Abdullah" },
  { type: "segment", arabic: "وَعَلَىٰ ٱلأَرْوَاحِ ٱلَّتِي حَلَّتْ بِفِنَائِكَ", transliteration: "wa `ala al-arwahi allati hallat bifina'ika", translation: "and upon the souls that gathered in your courtyard." },
  { type: "segment", arabic: "عَلَيْكَ مِنِّي سَلاَمُ ٱللَّهِ أَبَداً", transliteration: "`alayka minni salamu allahi abadan", translation: "Peace of Allah be upon you from me forever" },
  { type: "segment", arabic: "مَا بَقيتُ وَبَقِيَ ٱللَّيْلُ وَٱلنَّهَارُ", transliteration: "ma baqitu wa baqiya allaylu walnnaharu", translation: "as long as I am existent and as long as there are day and night." },
  { type: "segment", arabic: "وَلاَ جَعَلَهُ ٱللَّهُ آخِرَ ٱلْعَهْدِ مِنِّي لِزِيَارَتِكُمْ", transliteration: "wa la ja`alahu allahu akhira al`ahdi minni liziyaratikum", translation: "May Allah not cause this (visit) to be the last of my visit to you (all)." },
  { type: "segment", arabic: "اَلسَّلاَمُ عَلَىٰ ٱلْحُسَيْنِ", transliteration: "alssalamu `ala alhusayni", translation: "Peace be upon al-Husayn," },
  { type: "segment", arabic: "وَعَلَىٰ عَلِيِّ بْنِ ٱلْحُسَيْنِ", transliteration: "wa `ala `aliyyi bni alhusayni", translation: "upon `Ali ibn al-Husayn," },
  { type: "segment", arabic: "وَعَلَىٰ أَوْلاَدِ ٱلْحُسَيْنِ", transliteration: "wa `ala awladi alhusayni", translation: "upon the sons of al-Husayn," },
  { type: "segment", arabic: "وَعَلَىٰ أَصْحَابِ ٱلْحُسَيْنِ", transliteration: "wa `ala ashabi alhusayni", translation: "and upon the companions of al-Husayn." },
  { type: "note", text: "You may then say the following:" },
  { type: "segment", arabic: "اَللَّهُمَّ خُصَّ أَنْتَ أَوَّلَ ظَالِمٍ بِٱللَّعْنِ مِنِّي", transliteration: "allahumma khussa anta awwala zalimin billa`ni minni", translation: "O Allah, pour special curses on the foremost persecutor" },
  { type: "segment", arabic: "وَٱبْدَأْ بِهِ أَوَّلًا", transliteration: "wabda' bihi awwalan", translation: "and begin with him first," },
  { type: "segment", arabic: "ثُمَّ ٱلْعَنِ ٱلثَّانِيَ وَٱلثَّالِثَ وَٱلرَّابِعَ", transliteration: "thumma il`an alththaniya walththalitha walrrabi`a", translation: "and then pour curses on the second, the third, and the fourth." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱلْعَنْ يَزِيدَ خَامِساً", transliteration: "allahumma il`an yazida khamisan", translation: "O Allah, curse Yazid fifthly," },
  { type: "segment", arabic: "وَٱلْعَنْ عُبَيْدَ ٱللَّهِ بْنَ زِيَادٍ وَٱبْنَ مَرْجَانَةَ", transliteration: "wal`an `ubaydallahi bna ziyadin wabna marjanata", translation: "and curse `Ubaydullah ibn Ziyad, the son of Marjanah," },
  { type: "segment", arabic: "وَعُمَرَ بْنَ سَعْدٍ وَشِمْراً", transliteration: "wa `umara bna sa`din wa shimran", translation: "`Umar ibn Sa`d, Shimr," },
  { type: "segment", arabic: "وَآلَ أَبِي سُفْيَانَ وَآلَ زِيَادٍ وَآلَ مَرْوَانَ", transliteration: "wa ala abi sufyana wa ala ziyadin wa ala marwana", translation: "the family of Abu-Sufyan, the family of Ziyad, and the family of Marwan" },
  { type: "segment", arabic: "إِلَىٰ يَوْمِ ٱلْقِيَامَةِ", transliteration: "ila yawmi alqiyamati", translation: "up to the Resurrection Day." },
  { type: "prostration", text: "You may then prostrate yourself and say the following words:" },
  { type: "segment", arabic: "اَللَّهُمَّ لَكَ ٱلْحَمْدُ", transliteration: "allahumma laka alhamdu", translation: "O Allah, all praise be to You;" },
  { type: "segment", arabic: "حَمْدَ ٱلشَّاكِرِينَ لَكَ عَلَىٰ مُصَابِهِمْ", transliteration: "hamda alshshakirina laka `ala musabihim", translation: "the praise of those who thank You for their misfortunes." },
  { type: "segment", arabic: "اَلْحَمْدُ لِلَّهِ عَلَىٰ عَظِيمِ رَزِيَّتِي", transliteration: "alhamdu lillahi `ala `azimi raziyyati", translation: "All praise be to Allah for my great misfortune." },
  { type: "segment", arabic: "اَللَّهُمَّ ٱرْزُقْنِي شَفَاعَةَ ٱلْحُسَيْنِ يَوْمَ ٱلْوُرُودِ", transliteration: "allahumma irzuqni shafa`ata alhusayni yawma alwurudi", translation: "O Allah, (please) grant me the intercession of al-Husayn on the Day of Coming (to You)" },
  { type: "segment", arabic: "وَثَبِّتْ لِي قَدَمَ صِدْقٍ عِنْدَكَ", transliteration: "wa thabbit li qadama sidqin `indaka", translation: "and make for me with You a firm step of honesty" },
  { type: "segment", arabic: "مَعَ ٱلْحُسَيْنِ وَأَصْحَابِ ٱلْحُسَيْنِ", transliteration: "ma`a alhusayni wa ashabi alhusayni", translation: "with al-Husayn and the companions of al-Husayn" },
  { type: "segment", arabic: "ٱلَّذينَ بَذَلُوٱ مُهَجَهُمْ دُونَ ٱلْحُسَيْنِ عَلَيْهِ ٱلسَّلاَمُ", transliteration: "alladhina badhalu muhajahum duna alhusayni", translation: "who sacrificed their souls in defense of al-Husayn, peace be upon him." },
];
const ZIYARAT_AMEENULLAH = [
  // ── Main Ziyarat ──────────────────────────────────────────────────────────
  { type: "segment", arabic: "اَلسَّلَامُ عَلَیْكَ یَا اَمِیْنَ اللّٰهِ فِیْ اَرْضِهٖ", transliteration: "alssalamu `alayka ya amina allahi fi ardihi", translation: "Peace be upon you, O trustee of Allah on His lands" },
  { type: "segment", arabic: "وَ حُجَّتَهٗ عَلٰی عِبَادِهٖ", transliteration: "wa hujjatahu `ala `ibadihi", translation: "and argument of Allah against His servants." },
  { type: "segment", arabic: "اَلسَّلَامُ عَلَیْكَ یَا اَمِیْرَ الْمُؤْمِنِیْنَ", transliteration: "alssalamu `alayka ya amira almu'minina", translation: "Peace be upon you, O Commander of the Faithful." },
  { type: "segment", arabic: "اَشْهَدُ اَنَّكَ جَاهَدْتَ فِی اللّٰهِ حَقَّ جِهَادِهٖ", transliteration: "ashhadu annaka jahadta fi allahi haqqa jihadihi", translation: "I bear witness that you strove for the sake of Allah as it ought to be striven," },
  { type: "segment", arabic: "وَ عَمِلْتَ بِكِتَابِهٖ", transliteration: "wa `amilta bikitabihi", translation: "acted upon His Book," },
  { type: "segment", arabic: "وَ اتَّبَعْتَ سُنَنَ نَبِیِّهٖ", transliteration: "wattba`ta sunana nabiyyihi", translation: "and followed the instructions of His Prophet," },
  { type: "segment", arabic: "صَلَّی اللّٰهُ عَلَیْهِ وَ اٰلِهٖ", transliteration: "salla allahu `alayhi wa alihi", translation: "peace of Allah be upon him and his Household," },
  { type: "segment", arabic: "حَتّٰی دَعَاكَ اللّٰهُ اِلیٰ جِوَارِهٖ", transliteration: "hatta da`aka allahu ila jiwarihi", translation: "until Allah called you to be in His vicinity." },
  { type: "segment", arabic: "فَقَبَضَكَ اِلَیْهِ بِاِخْتِیَارِهٖ", transliteration: "faqabadaka ilayhi bikhtiyarihi", translation: "So, He grasped you to Him by His will" },
  { type: "segment", arabic: "وَ اَلْزَمَ اَعْدَاۤئَكَ الْحُجَّۃَ", transliteration: "wa alzama a`da'aka alhujjata", translation: "and put your enemies under the claim" },
  { type: "segment", arabic: "مَعَ مَالَكَ مِنَ الْحُجَجِ الْبَالِغَۃِ عَلٰی جَمِیْعِ خَلْقِهٖ", transliteration: "ma`a ma laka min alhujaji albalighati `ala jami`i khalqihi", translation: "although you have inclusive claims against all of His creatures." },
  { type: "segment", arabic: "اَللّٰهُمَّ فَاجْعَلْ نَفْسِیْ مُطْمَئِنَّۃً بِقَدَرِكَ", transliteration: "allahumma faj`al nafsi mutma'innatan biqadarika", translation: "O Allah, (please do) cause my soul to be fully tranquil with Your decrees," },
  { type: "segment", arabic: "رَاضِیَۃً بِقَضَاۤئِكَ", transliteration: "radiyatan biqada'ika", translation: "satisfied with Your acts," },
  { type: "segment", arabic: "مُوْلَعَۃً بِذِكْرِكَ وَ دُعَاۤئِكَ", transliteration: "mula`atan bidhikrika wa du`a'ika", translation: "fond of mentioning and praying to You," },
  { type: "segment", arabic: "مُحِبَّۃً لِصَفْوَۃِ اَوْلِیَاۤئِكَ", transliteration: "muhibbatan lisafwati awliya'ika", translation: "bearing love for the choicest of Your intimate servants," },
  { type: "segment", arabic: "مَحْبُوْبَۃً فِیْ اَرْضِكَ وَ سَمَاۤئِكَ", transliteration: "mahbubatan fi ardika wa sama'ika", translation: "beloved in Your lands and heavens," },
  { type: "segment", arabic: "صَابِرَۃً عَلٰی نُزُوُلِ بَلَاۤئِكَ", transliteration: "sabiratan `ala nuzuli bala'ika", translation: "steadfast against the affliction of Your tribulations," },
  { type: "segment", arabic: "شَاكِرَۃً لِفَوَاضِلِ نَعْمَاۤئِكَ", transliteration: "shakiratan lifawadili na`ma'ika", translation: "thankful for Your graceful bounties," },
  { type: "segment", arabic: "ذَاكِرَۃً لِسَوَابِغِ اٰلَاۤئِكَ", transliteration: "dhakiratan lisawabighi ala'ika", translation: "always bearing in mind Your incessant gifts," },
  { type: "segment", arabic: "مُشْتَاقَۃً اِلیٰ فَرْحَتِ لِقَاۤئِكَ", transliteration: "mushtaqatan ila farhati liqa'ika", translation: "longing for the gladness of meeting You," },
  { type: "segment", arabic: "مُتَزَوِّدَۃً التَّقْوٰی لِیَوْمِ جَزَاۤئِكَ", transliteration: "mutazawwidatan alttaqwa liyawmi jaza'ika", translation: "supplied with piety for the day of Your rewarding," },
  { type: "segment", arabic: "مُسْتَنَّۃً بِسُنَنِ اَوْلِیَاۤئِكَ", transliteration: "mustannatan bisunani awliya'ika", translation: "pursuing the morals of Your intimate servants," },
  { type: "segment", arabic: "مُفَارِقَۃً لِاَخْلَاقِ اَعْدَاۤئِكَ", transliteration: "mufariqatan li'akhlaqi a`da'ika", translation: "quitting the conducts of Your enemies," },
  { type: "segment", arabic: "مَشْغُوْلَۃً عَنِ الدُّنْیَا بِحَمْدِكَ وَ ثَنَاۤئِكَ", transliteration: "mashghulatan `an alddunya bihamdika wa thana'ika", translation: "and distracted from this world by praising and thanking You." },
  { type: "segment", arabic: "اَللّٰهُمَّ اِنَّ قُلُوْبَ الْمُخْبِتِیْنَ اِلَیْكَ وَالِهَۃٌ", transliteration: "allahumma inna quluba almukhbitina ilayka walihatun", translation: "O Allah, the hearts of those humbling themselves to You are fascinated," },
  { type: "segment", arabic: "وَ سُبُلَ الرَّاغِبِیْنَ اِلَیْكَ شَارِعَۃٌ", transliteration: "wa subula alrraghibina ilayka shari`atun", translation: "the paths of those desiring for You are open," },
  { type: "segment", arabic: "وَ اَعْلَامَ الْقَاصِدِیْنَ اِلَیْكَ وَاضِحَۃٌ", transliteration: "wa a`lama alqasidina ilayka wadihatun", translation: "the signs of those directing to You are evident," },
  { type: "segment", arabic: "وَ اَفْئِدَۃَ الْعَارِفِیْنَ مِنْكَ فَازِعَۃٌ", transliteration: "wa af'idata al`arifina minka fazi`atun", translation: "the hearts of those having recognition of You are resorting to You," },
  { type: "segment", arabic: "وَ اَصْوَاتَ الدَّاعِیْنَ اِلَیْكَ صَاعِدَۃٌ", transliteration: "wa aswata aldda`ina ilayka sa`idatun", translation: "the voices of those beseeching You are mounting up to You," },
  { type: "segment", arabic: "وَ اَبْوَابَ الْاِجَابَۃِ لَهُمْ مُفَتَّحَۃٌ", transliteration: "wa abwaba al-ijabati lahum mufattahatun", translation: "the doors of responding to them are wide open," },
  { type: "segment", arabic: "وَ دَعْوَۃَ مَنْ نَاجَاكَ مُسْتَجَابَۃٌ", transliteration: "wa da`wata man najaka mustajabatun", translation: "the prayer of him who speaks to You confidentially is responded," },
  { type: "segment", arabic: "وَ تَوْبَۃَ مَنْ اَنَابَ اِلَیْكَ مَقْبُوْلَۃٌ", transliteration: "wa tawbata man anaba ilayka maqbulatun", translation: "the repentance of him who turns to You modestly is admitted," },
  { type: "segment", arabic: "وَ عَبْرَۃَ مَنْ بَكٰی مِنْ خَوْفِكَ مَرْحُوْمَۃٌ", transliteration: "wa `abrata man baka min khawfika marhumatun", translation: "the tear of him who weeps on account of fear from You is compassionated," },
  { type: "segment", arabic: "وَ الْاِغَاثَۃَ لِمَنِ اسْتَغَاثَ بِكَ مَوْجُوْدَۃٌ", transliteration: "wal-ighathata liman istaghatha bika mawjudatun", translation: "the aid of him who seeks Your aid is available," },
  { type: "segment", arabic: "وَ الْاِعَانَۃَ لِمَنِ اسْتَعَانَ بِكَ مَبْذُوْلَۃٌ", transliteration: "wal-i`anata liman ista`ana bika mabdhulatun", translation: "the help of him who seeks Your help is obtainable," },
  { type: "segment", arabic: "وَ عِدَاتِكَ لِعِبَادِكَ مُنْجَزَۃٌ", transliteration: "wa `idatika li`ibadika munjazatun", translation: "Your promises to Your servants are fulfilled," },
  { type: "segment", arabic: "وَ زَلَلَ مَنِ اسْتَقَالَكَ مُقَالَۃٌ", transliteration: "wa zalala man istaqalaka muqalatun", translation: "the slips of him who implore You to excuse him are forgivable," },
  { type: "segment", arabic: "وَ اَعْمَالَ الْعَامِلِیْنَ لَدَیْكَ مَحْفُوْظَۃٌ", transliteration: "wa a`mala al`amilina ladayka mahfuzatun", translation: "the deeds of those who act for You are preserved," },
  { type: "segment", arabic: "وَ اَرْزَاقَكَ اِلَی الْخَلَاۤئِقِ مِنْ لَّدُنْكَ نَازِلَۃٌ", transliteration: "wa arzaqaka ila alkhala'iqi min ladunka nazilatun", translation: "Your sustenance to the creatures are descending from You," },
  { type: "segment", arabic: "وَ عَوَاۤئِدَ الْمَزِیْدِ اِلَیْھِمْ وَاصِلَۃٌ", transliteration: "wa `awa'ida almazidi ilayhim wasilatun", translation: "Your gifts for further conferrals are reaching them," },
  { type: "segment", arabic: "وَ ذُنُوْبَ الْمُسْتَغْفِرِیْنَ مَغْفُوْرَۃٌ", transliteration: "wa dhunuba almustaghfirina maghfuratun", translation: "the sins of those imploring Your forgiveness are forgiven," },
  { type: "segment", arabic: "وَ حَوَاۤئِجِ خَلْقِكَ عِنْدَكَ مَقْضِیَّۃٌ", transliteration: "wa hawa'ija khalqika `indaka maqdiyyatun", translation: "the requests of Your creatures are granted by You," },
  { type: "segment", arabic: "وَ جَوَاۤئِزَ السَّاۤئِلِیْنَ عِنْدَكَ مُوَفَّرَۃٌ", transliteration: "wa jawa'iza alssa'ilina `indaka muwaffaratun", translation: "the prizes of those begging You are offered," },
  { type: "segment", arabic: "وَ عَوَاۤئِدَ الْمَزِیْدِ مُتَوَاْتِرَۃٌ", transliteration: "wa `awa'ida almazidi mutawatiratun", translation: "Your gifts for further conferrals are uninterrupted," },
  { type: "segment", arabic: "وَ مَوَاۤئِدَ الْمُسْتَطْعِمِیْنَ مُعَدَّۃٌ", transliteration: "wa mawa'ida almustat`imina mu`addatun", translation: "the dining tables for those seeking Your feeding are prepared," },
  { type: "segment", arabic: "وَ مَنَاهِلَ الظِّمَاۤئِ مُتْرَعَۃٌ", transliteration: "wa manahila alzzama'i mutra`atun", translation: "and the springs of quenching their thirst are brimful." },
  { type: "segment", arabic: "اَللّٰهُمَّ فَاسْتَجِبْ دُعَاۤئِیْ", transliteration: "allahumma fastajib du`a'i", translation: "O Allah, (so) respond to my prayer," },
  { type: "segment", arabic: "وَ اقْبَلْ ثَنَاۤئِیْ", transliteration: "waqbal thana'i", translation: "accept my thanksgiving for You," },
  { type: "segment", arabic: "وَ اجْمَعْ بَیْنِیْ وَ بَیْنَ اَوْلِیَاۤئِیْ", transliteration: "wajma` bayni wa bayna awliya'i", translation: "and join me to my masters," },
  { type: "segment", arabic: "بِحَقِّ مُحَمَّدٍ وَّ عَلِیٍّ", transliteration: "bihaqqi muhammadin wa `aliyyin", translation: "[I beseech You] in the name of Muhammad, `Ali," },
  { type: "segment", arabic: "وَ فَاطِمَۃَ وَٱلْحَسَنِ وَٱلْحُسَيْنِ", transliteration: "wa fatimata walhasani walhusayni", translation: "Fatimah, al-Hasan, and al-Husayn." },
  { type: "segment", arabic: "اِنَّكَ وَلِیُّ نَعْمَاۤئِیْ", transliteration: "innaka waliyyu na`ma'i", translation: "You are verily the only source of my boons," },
  { type: "segment", arabic: "وَ مُنْتَهٰی مُنَایَ", transliteration: "wa muntaha munaya", translation: "the ultimate goal of my wishes," },
  { type: "segment", arabic: "وَ غَایَۃُ رَجَاۤئِیْ فِیْ مُنْقَلَبِیْ وَ مَثْوَایَ", transliteration: "wa ghayatu raja'i fi munqalabi wa mathwaya", translation: "and the target of my hope in my recourses and settlement." },

  // ── Addition from Kamil al-Ziyarat ───────────────────────────────────────
  { type: "note", text: "In the book of Kamil al-Ziyarat, the following statements are added:" },
  { type: "segment", arabic: "اَنْتَ اِلٰهِیْ وَ سَیَّدِیْ وَ مَوْلَایَ", transliteration: "anta ilahi wa sayyidi wa mawlaya", translation: "You are verily my God, Master, and Lord." },
  { type: "segment", arabic: "اغْفِرْ لِاَوْلِیَاۤئِنَا", transliteration: "ighfir li-awliya'ina", translation: "(Please) forgive our friend," },
  { type: "segment", arabic: "وَ كُفَّ عَنَّا اَعْدَاۤئَنَا", transliteration: "wa kuffa `anna a`da'ana", translation: "prevent our enemies against us," },
  { type: "segment", arabic: "وَ اشْغَلْهُمْ عَنْ اَذَانَا", transliteration: "wa ashghilhum `an adhana", translation: "distract them from harming us," },
  { type: "segment", arabic: "وَ اَظْهِرْ كَلِمَۃَ الْحَقِّ", transliteration: "wa azhir kalimata alhaqqi", translation: "give prevalence to the Word of Truth" },
  { type: "segment", arabic: "وَ اجْعَلْهَا الْعُلْیَا", transliteration: "waj`alha al`ulya", translation: "and make it the supreme," },
  { type: "segment", arabic: "وَ اَدْحِضْ كَلِمَۃَ الْبَاطِلِ", transliteration: "wa adhid kalimata albatili", translation: "and frustrate the word of falsehood" },
  { type: "segment", arabic: "وَ اجْعَلْهَا السُّفْلیٰ", transliteration: "waj`alha alssufla", translation: "and make it the lowliest." },
  { type: "segment", arabic: "اِنَّكَ عَلٰی كُلِّ شَیْئٍ قَدِیْرٌ", transliteration: "innaka `ala kulli shay'in qadirun", translation: "Verily, You have power over all things." },

  // ── Farewell Ziyarat ──────────────────────────────────────────────────────
  { type: "note", text: "Farewell Ziyarat — to be recited when departing from the shrine of the Holy Imams (a.s.):" },
  { type: "segment", arabic: "اَلسَّلَامُ عَلَيْكَ اَيُّهَا الْاِمَامُ وَ رَحْمَةُ اللهِ وَ بَرَكَاتُهٗ اَسْتَوْدِعُكَ اللهَ وَ عَلَيْكَ السَّلَامُ وَ رَحْمَةُ اللهِ وَ بَرَكَاتُهٗ", transliteration: "assalaamu `alayka ayyuhal imaamu wa rahmatullahi wa barakaatuh, astawdi`ukallaaha wa `alaykas salaamu wa rahmatullahi wa barakaatuh", translation: "Peace be on you, O the Imam and mercy of Allah and His blessings, I entrust you with Allah and upon you is peace and mercy of Allah and His blessings." },
  { type: "segment", arabic: "اٰمَنَّا بِالرَّسُوْلِ وَ بِمَا جِئْتُمْ بِهٖ وَ دَعَوْتُمْ اِلَيْهِ", transliteration: "aamannaa bir-rasoole wa bemaa ji'tum bihi wa da`awtum ilayhi", translation: "We believe in the Messenger, and in whatever you have come with and called to." },
  { type: "segment", arabic: "اَللّٰهُمَّ لَا تَجْعَلْهُ اٰخِرَ الْعَهْدِ مِنْ زِيَارَتِيْ وَلِيَّكَ", transliteration: "allahumma la taj`alhu akhiral `ahdi min ziyarati waliyyaka", translation: "O Allah! Do not make this my last visitation of Your master." },
  { type: "segment", arabic: "اَللّٰهُمَّ لَا تَحْرِمْنِيْ ثَوَابَ مَزَارِهِ الَّذِيْ اَوْجَبْتَ لَهٗ وَ يَسِّرْ لَنَا الْعَوْدَ اِلَیْہِ اِنْ شَآءَ اللهُ تَعَالٰى", transliteration: "allahumma la tahrimni thawaaba mazaarihi alladhi awjabta lahu wa yassir lanal `awda ilayhi in sha'allahu ta`ala", translation: "O Allah! Do not deprive me of the reward of his shrine which You have decided for him and make our returning to visit it easy for us, if Allah – the High – wish." },
];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ZYARAT_DATABASE: Record<string, { title: string, data: any[] }> = {
    "ziyarat-e-ashura": {
        title: "Ziyarat e Ashura",
        data: ZIYARAT_E_ASHURA
    },
    "ziyarat-e-ameenullah": {
      title: "Ziyarat e Ameenullah",
      data: ZIYARAT_AMEENULLAH
    }
}


export default function ZiyaratAshuraPage() {
  const [fontSize, setFontSize] = useState("text-2xl");
  const [showTransliteration, setShowTransliteration] = useState(true);
  
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();

  const ziyarat = ZYARAT_DATABASE[slug];
  console.log(params.slug)

  if (!ziyarat) return <div className="p-10 text-center">Ziyarat not found.</div>;
  
  // Audio Controls State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => { if (!isDragging) setCurrentTime(audio.currentTime); };
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [isDragging]);

  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.FormEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const skip = (seconds: number) => {
    if (audioRef.current) audioRef.current.currentTime += seconds;
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030102] transition-colors duration-300">
      {/* <audio   /> */}
      <audio ref={audioRef} controls preload="none">
        <source src={`/audio/${slug}.mp3`} />
      </audio>

      {/* ── HERO SECTION ── */}
      <section className="bg-emerald-950 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/ziyarat" className="mb-4 inline-flex items-center gap-1.5 text-sm text-emerald-200 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" onClick={() => router.push("/ziyarat")} /> Back to Ziyarats
          </Link>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{ziyarat.title}</h1>
        </div>
      </section>

      {/* ── Sticky Player ── */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95 shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>
              <button onClick={() => skip(-10)} className="p-2 text-gray-500 hover:text-emerald-600 transition"><RotateCcw className="h-5 w-5" /></button>
              <button onClick={() => skip(10)} className="p-2 text-gray-500 hover:text-emerald-600 transition"><FastForward className="h-5 w-5" /></button>
            </div>
            
            <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4 text-gray-400" />
                <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolume} className="w-20 h-1.5 accent-emerald-600" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 w-10">{formatTime(currentTime)}</span>
            <input 
              type="range" min="0" max={duration || 0} value={currentTime} 
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onInput={handleSeek}
              className="w-full h-1.5 bg-gray-200 rounded-lg cursor-pointer accent-emerald-600 dark:bg-gray-700"
            />
            <span className="text-xs font-mono text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-4xl px-4 py-10">
        {ziyarat.data.map((segment, index) => {
          if (segment.type === "note") {
            return (
              <div key={index} className="my-8 rounded-xl bg-emerald-50 px-6 py-4 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                <p className="text-center text-sm font-medium text-emerald-800 dark:text-emerald-400">
                  {segment.text}
                </p>
              </div>
            );
          }
          if (segment.type === "prostration") {
            return (
              <div key={index} className="my-8 rounded-xl bg-amber-50 px-6 py-4 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30">
                <p className="text-center italic text-amber-800 dark:text-amber-400">
                  {segment.text}
                </p>
              </div>
            );
          }
          return (
            <div key={index} className="mb-8 border-b border-gray-100 pb-8 dark:border-gray-800">
              {/* Arabic */}
              <p className={`mb-4 text-right font-arabic leading-loose text-gray-900 dark:text-white ${fontSize}`}>
                {segment.arabic}
              </p>
              {/* Transliteration */}
              {showTransliteration && (
                <p className="mb-4 italic text-gray-500 text-sm">
                  {segment.transliteration}
                </p>
              )}
              {/* Translation */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {segment.translation}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
}