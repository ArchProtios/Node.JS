const path = require('path')

// it is used as a seperator (/ => this is a seperator ex:- ./components/Navabr)
// it is used because different os has different seperator for ex:- 'windows uses /' & 'unix uses \'
console.log(path.sep);

// it is used to add diff file paths together in such a way that it is compatible across diff os
console.log(path.join('/1','2','3.txt')); //output :- /1/2/3.txt

// it is used to extract last portion of the file path
console.log(path.basename('/1/2/3.txt')); //output :- 3.txt

// it is used to combine two or more path and return one absolute(that points to the exact location of a file or directory) path
console.log(path.resolve('/1/2/3.txt')); // This will log the absolute path




// resolve vs join :-
// path.resolve(): Always returns an absolute path. It resolves the provided path segments into an absolute path, starting from the root directory.
// path.join(): Combines the provided path segments into a single path, but does not guarantee that the resulting path will be absolute. It simply joins the segments together using the platform-specific separator.