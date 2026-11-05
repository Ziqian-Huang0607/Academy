# S1MPA-11 Lesson 11: String manipulation II

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

A sentence can be easier to work with after it has been separated into words. Once the words have been changed, they can be joined into a sentence again. This lesson also adds methods for changing letter case and checking what a string contains.

Separating and joining text

split() turns one string into a list of smaller strings. With no argument, it separates at whitespace and treats a run of spaces as one gap. If you provide a delimiter, it separates at that exact character or piece of text. This difference matters when there are two spaces in a row.

("a b" contains two spaces)

"a b".split() → ["a", "b"]

"a b".split(" ") → ["a", "", "b"]

join() does the reverse: it combines strings, placing its separator between them. The separator goes before .join(), and every item being joined must itself be a string.

"-".join(["a", "b", "c"])       →   "a-b-c"

Several short operations can be chained. If url holds

"http://cn.shsid.org/img/admission_btn.png", splitting at / gives the filename as the last piece. Splitting that piece at the period then removes the extension.

url.split("/")[-1].split(".")[0]        →     "admission_btn"

Letter case and character tests

upper() makes a new uppercase string, lower() makes a lowercase one, and title() capitalizes the start of each word. The methods isupper(), islower(), and istitle() check whether a string has the corresponding case and return True or False.

"chicekn".upper()     →   "CHICEKN"

Other tests check what kinds of characters are present. isalpha() accepts letters, isdigit() accepts digits, and isalnum() accepts letters and digits together. These are useful when an input field is supposed to contain only a name or a number.

"A9".isalnum()   →    True

"A9".isalpha()   →    False

A digit does not count as an uppercase or lowercase letter, so "A9".isupper() is True because its only letter is uppercase. A string with no letters that have case does not pass isupper() or islower().

Changing a sentence word by word

The Pig Latin exercise combines split(), indexing, slices, and join(). A word starting with a vowel gains yay. If it starts with one of the listed two-letter consonant blends, those two letters move to the end before ay is added. Otherwise, only the first consonant moves. The program can split the sentence, change each word, and join the words with spaces.

apple → appleyay, ship → ipshay, cat → atcay

Supplement: using string as a module

By running import string at the start of your code, you gain access to a handful of useful expressions.

Most usefully, string.digits refers to the string "0123456789", string.punctuation refers to “'!"#＄%&\'()*+,-./:;<=>?@[\\]^_`{|}~', and string.ascii_letters refers to

'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'. Using these can be a better alternative compared to trying to comprehensively list all applicable characters by hand.
