# lets-talk

Lets-Talk is a language cognition framework written en javascript. The dictionnary is based on the work of 
Dat Quoc Nguyen, Dai Quoc Nguyen, Dang Duc Pham and Son Bao Pham published at https://github.com/datquocnguyen/RDRPOSTagger.

# 1. The tokenizer :

The input string is fist tokenized in words and symbols. The separation '-' is treated like a space, so "anti-pollution" will 
be two words : "anti" and "polution". If the word is at a line end and splitter with a "-", it will be ignored and will result in
a single word.

Each word will be transformed in lower case so the texts lookups will be faster and if the texts comes from a voice recognition 
it will work the same way.

The second step is to build sentences. Each sentence has a mode depending on the type of the sentence 
(question, exclamation, affirmation...)

When you use the sentence break like ";" or ":" then it will result in two sentences, and the mode will contain de breaking token.

# 2. Tagging words

Each word will be initialized with his commonly used grammatical function. The words are then corrected by the rdr definitions.
