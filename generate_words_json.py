from nltk.corpus import brown as the_corpus
from collections import defaultdict

words_for_tags = defaultdict(set)
for word, tag in the_corpus.tagged_words():
    words_for_tags[tag].add(word)
words_for_tags = {tag: list(words) for (tag, words) in words_for_tags.iteritems()}

# export to file:
import json
open('words.json', 'w').write(json.dumps(words_for_tags))
