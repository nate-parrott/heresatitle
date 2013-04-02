var fs = require('fs');
var wordsForTags = JSON.parse(fs.readFileSync("words.json"));

var phraseTemplates = [
	"'A'|'The' JJ NN", // A little car
	"'The'? JJ NNS", // The little cars
	"NP+HVZ JJ NN", // John's little car
	"'The' RBT NN", // the best house
	"VBG 'for' NPS", // writing for dummies
	"VBG 'and' VBG", // cooking and cleaning
	"NP 'the' JJ", // John the benevolent
	"NP 'and' 'the' JJ? NN", // John and the little? beanstalk
	"CD JJ NNS|NPS", // 130 happy dogs|romans,
	"NP 'and' 'the' CD NNS", // john and the 37 dwarves
	"'of'? NPS 'and' NPS", // of? republicans and french
	"PN$ NN", // nobody's frog
	"RBR|JJR 'than' NP", // further than John
	"UH ',' NP '!'?", // Goodbye, John !?
	"'The'|NP+HVZ JJS|JJT NN", // the|John's northernmost duckling
	"'The'|'An' QL JJ NN", // The/a reasonably fast turtle
	"NP ',' 'the' QL JJ NN" // John, the reasonably fast turtle
];

var pick1 = function(list) {
	return list[Math.floor(Math.random()*list.length)];
}

var phraseFromTemplate = function(template) {
	var words = [];
	template.split(' ').forEach(function(term) {
		if (term[term.length-1]=='?') {
			if (Math.random() < 0.5) return;
			else term = term.substring(0, term.length-1);
		}
		var term = pick1(term.split('|'));
		if (term[0]=="'") {
			words.push(term.substring(1, term.length-1));
		} else {
			words.push(pick1(wordsForTags[term]));
		}
	})
	var text = words.join(' ');
	text = text.replace(/\bA ([AEIOUaeiou])/g, "An $2");
	text = text.replace(/(^| |\-)([a-z])/g, function(match, lead, letter) {
		return lead + letter.toUpperCase();
	})
	text = text.replace(/ (\!|\?|\,|\.)/g, "$1");
	text = text.replace(/ (And|Of|A|An|The|Than)\b/g, function(match, word) {
		return ' '+word.toLowerCase();
	});
	return text;
}

exports.idea = function() {
	return phraseFromTemplate(pick1(phraseTemplates));
}
