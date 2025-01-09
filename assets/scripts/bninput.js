

/*
Keymap for reference:


a  অ  A আ  i  ই  I   ঈ
u  উ   U ঊ  R  ঋ
e  এ  E  ঐ  o  ও  O   ঔ 

aa া
i ি
ii ী
u  ু
uu  ূ
RRi  ৃ
e ে
ai ৈ
o  ো
au  ৌ
hasanta  ্


k ক kh খ g গ gh ঘ G ঙ 
c চ ch ছ j জ jh ঝ J ঞ
t ত t. ৎ th থ d দ dh ধ n ন
T ট Th ঠ D ড Dh ঢ N ণ
p প ph ফ b ব bh ভ m ম
y য r র l ল
sh শ Sh ষ s স h হ

H ঃ
M ং
C ঁ


*/

// internal keymap

keymap = {
    "0":"০", "1":"১", "2":"২", "3":"৩", "4":"৪", "5":"৫", "6":"৬", "7":"৭", "8":"৮", "9":"৯",
    "a":"অ", "A":"আ", "i":"ই", "I":"ঈ", "u":"উ", "U":"ঊ",
    "e":"এ", "E":"ঐ", "o":"ও", "O":"ঔ", "R":"ঋ",
    "amatra":"", "Amatra":"া", "imatra":"ি", "Imatra":"ী", "umatra":"ু", "Umatra":"ূ",
    "ematra":"ে", "Ematra":"ৈ", "omatra":"ো", "Omatra":"ৌ", "Rmatra":"ৃ", "hasanta":"্",
    "k":"ক", "kh":"খ", "g":"গ", "gh":"ঘ", "G":"ঙ",
    "c":"চ", "ch":"ছ", "j":"জ", "jh":"ঝ", "J":"ঞ",
    "t":"ত", "q":"ৎ", "th":"থ", "d":"দ", "dh":"ধ", "n":"ন",
    "T":"ট", "Th":"ঠ", "D":"ড", "Dh":"ঢ", "N":"ণ",
    "p":"প", "ph":"ফ", "b":"ব", "bh":"ভ", "m":"ম",
    "y":"য", "r":"র", "l":"ল",
    "sh":"শ", "S":"ষ", "s":"স", "h":"হ",
    "H":"ঃ", "M":"ং", "C":"ঁ",
    "Y":"য়", "X":"ড়", "Z":"ঢ়",
    "|":"।",
    "#":"‌" 	// ZWNJ
}

function mreplace(s, prv, nxt)
{
    while (s.indexOf(prv) > -1)
        s = s.replace(prv, nxt);
    return s;
}


/* probably better if usage is correct

isn't because . matches wildcard

function mreplace(s, prv, nxt)
{
    re = new RegExp(prv, 'g');
    return s.replace(re, nxt);
}

*/


// we allow more 'phonetic' input, and convert to internal keymap first

function romanToBengali(intext) {

      ans = '';

      intext = mreplace(intext, 'aa', 'A');
      intext = mreplace(intext, 'ii', 'I');
      intext = mreplace(intext, 'ee', 'I');
      intext = mreplace(intext, 'uu', 'U');
      intext = mreplace(intext, 'ai', 'E');
      intext = mreplace(intext, 'au', 'O');
      intext = mreplace(intext, 'RRi', 'R');
      intext = mreplace(intext, 'Ri', 'R');   // needed ?

      intext = mreplace(intext, 'chh', 'TMPUNIKSTR');
      intext = mreplace(intext, 'ch', 'c');
      intext = mreplace(intext, 'TMPUNIKSTR', 'ch');
      intext = mreplace(intext, 'GN', 'G');
      intext = mreplace(intext, 'JN', 'J');
      intext = mreplace(intext, 'Sh', 'S');
      intext = mreplace(intext, '.n', 'M');
      intext = mreplace(intext, '.N', 'C');
      intext = mreplace(intext, '.y', 'Y');
      intext = mreplace(intext, '.Dh', 'Z');
      intext = mreplace(intext, '.D', 'X');
      intext = mreplace(intext, 'Dh.', 'Z');
      intext = mreplace(intext, 'D.', 'X');
      intext = mreplace(intext, ':', 'H');

      intext = mreplace(intext, 't.', 'q'); // khanda ta
      intext = mreplace(intext, 'f', 'ph');
      intext = mreplace(intext, 'v', 'b');

      intext = mreplace(intext, 'b ', 'ba ');
      intext = mreplace(intext, 'c ', 'ca ');
      intext = mreplace(intext, 'd ', 'da ');
      intext = mreplace(intext, 'f ', 'fa ');
      intext = mreplace(intext, 'g ', 'ga ');
      intext = mreplace(intext, 'h ', 'ha ');
      intext = mreplace(intext, 'j ', 'ja ');
      intext = mreplace(intext, 'k ', 'ka ');
      intext = mreplace(intext, 'l ', 'la ');
      intext = mreplace(intext, 'm ', 'ma ');
      intext = mreplace(intext, 'n ', 'na ');
      intext = mreplace(intext, 'p ', 'pa ');
      // intext = mreplace(intext, 'q ', 'qa ');
      intext = mreplace(intext, 'r ', 'ra ');
      intext = mreplace(intext, 's ', 'sa ');
      intext = mreplace(intext, 't ', 'ta ');
      intext = mreplace(intext, 'v ', 'va ');
      intext = mreplace(intext, 'y ', 'ya ');

      intext = mreplace(intext, 'D ', 'Da ');
      intext = mreplace(intext, 'G ', 'Ga ');
      intext = mreplace(intext, 'J ', 'Ja ');
      intext = mreplace(intext, 'N ', 'Na ');
      intext = mreplace(intext, 'S ', 'Sa ');
      intext = mreplace(intext, 'T ', 'Ta ');
      intext = mreplace(intext, 'Y ', 'Ya ');

      intext = mreplace(intext, '.', '');
      intext = mreplace(intext, '_', '');

      if (intext.indexOf('|') > -1) {

           intext = mreplace(intext, 'b|', 'ba|');
           intext = mreplace(intext, 'c|', 'ca|');
           intext = mreplace(intext, 'd|', 'da|');
           intext = mreplace(intext, 'f|', 'fa|');
           intext = mreplace(intext, 'g|', 'ga|');
           intext = mreplace(intext, 'h|', 'ha|');
           intext = mreplace(intext, 'j|', 'ja|');
           intext = mreplace(intext, 'k|', 'ka|');
           intext = mreplace(intext, 'l|', 'la|');
           intext = mreplace(intext, 'm|', 'ma|');
           intext = mreplace(intext, 'n|', 'na|');
           intext = mreplace(intext, 'p|', 'pa|');
           // intext = mreplace(intext, 'q|', 'qa|');
           intext = mreplace(intext, 'r|', 'ra|');
           intext = mreplace(intext, 's|', 'sa|');
           intext = mreplace(intext, 't|', 'ta|');
           intext = mreplace(intext, 'v|', 'va|');
           intext = mreplace(intext, 'y|', 'ya|');

           intext = mreplace(intext, 'D|', 'Da|');
           intext = mreplace(intext, 'G|', 'Ga|');
           intext = mreplace(intext, 'J|', 'Ja|');
           intext = mreplace(intext, 'N|', 'Na|');
           intext = mreplace(intext, 'S|', 'Sa|');
           intext = mreplace(intext, 'T|', 'Ta|');
           intext = mreplace(intext, 'Y|', 'Ya|');

      }

      var i = 0;
      var len = intext.length;
      var cur;
      var next;
      var comb;

      while (i < len) {

           var cur = intext.charAt(i);
           if (i+1 < len) {
               next = intext.charAt(i+1);
           }
           else {
               next = '';
           }
           comb = cur + next;

           if (cur == 'a' || cur == 'A' || cur == 'i' || cur == 'I' ||
               cur == 'u' || cur == 'U' || cur == 'e' || cur == 'E' ||
               cur == 'o' || cur == 'O' || cur == 'R' || cur == 'M' ||
               cur == 'H' || cur == 'C' || cur == 'q' || cur == '|' || 
               cur == '#' || (cur >= '0' && cur <= '9')) {
               ans += keymap[cur];
               i++;
           }
           else if (cur == 'k' || cur == 'g' || cur == 'G' || cur == 'c' ||
                    cur == 'j' || cur == 'J' || cur == 't' || cur == 'd' ||
                    cur == 'n' || cur == 'T' || cur == 'D' || cur == 'N' ||
                    cur == 'p' || cur == 'b' || cur == 'm' || cur == 's' ||
                    cur == 'h' || cur == 'y' || cur == 'r' || cur == 'l' ||
                    cur == 'X' || cur == 'Y' || cur == 'Z' || cur == 'S') {

               if (comb == 'kh' || comb == 'gh' || comb == 'ch' ||
                   comb == 'jh' || comb == 'th' || comb == 'dh' ||
                   comb == 'Th' || comb == 'Dh' || comb == 'ph' ||
                   comb == 'bh' || comb == 'sh') {

                   cur = comb;
                   i++;
                   if (i+1 < len) next = intext.charAt(i+1);
                   else next = '';
               }

               if (next == 'a' || next == 'A' || next == 'i' || next == 'I' ||
                   next == 'u' || next == 'U' || next == 'e' || next == 'E' ||
                   next == 'o' || next == 'O' || next == 'R') { // vowel-matra

                   ans += (keymap[cur] + keymap[next+'matra']);
                   i+=2;
               }
               else {
                   ans += (keymap[cur] + keymap['hasanta']);
                   i+=1;
               }
           }
           else {
               ans += cur;
               i++;
           }
      }
      return ans;
}




