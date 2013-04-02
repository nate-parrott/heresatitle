Here's a Title: Questionably Valuable Inspiration
================================================

This app generates random titles for hypothetical works of culture.

The file `words.json` contains a list of words from the [Brown Corpus](http://en.wikipedia.org/wiki/Brown_Corpus) for each part-of-speech. (`generate_words_json.py` can be run from a machine with `nltk` installed and the corpus downloaded to generate this file.)

`generate.js`, which runs on the server, loads this file and picks random words from it based on their part-of-speech, to produce (usually) gramatically-correct, but completely incoherent, titles.

It's live on [heresatitle.herokuapp.com](http://heresatitle.herokuapp.com).
