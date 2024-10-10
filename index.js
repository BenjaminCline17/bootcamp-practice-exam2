
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //

const setDigitalCode = function(array, value){
for (let i = array.length - 1; i >= 0; i -= 2){
    array[i].digitalCode = value;
} return array;  
};

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
   let genre = array.filter(function(x){
    for (let i = 0; i < x.genreTags.length; i++){
        if (x.genreTags[i] === tag){
            return x;
        }
    }
    });
    return genre;
};



// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    let result = array.filter(function(x) {
        for (let i = 0; i < x.specialFeatures.length; i++){
            if (x.specialFeatures[i]["type"] === type){
                return x;
            }
        }
    });
    return result;
};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title, index=0){
    //base
    if (index >= array.length){
        return "no matching title found";
    }
    if (array[index]["title"] === title){
        return array[index].title + " Special Feature: " + array[index].specialFeatures[0]["title"]
    }
    //recursion
    return getTopSpecialFeature(array, title, index + 1);
};


// PROBLEM #5 //

const mapTitles = function(array){
   let result = array.map(function(x){
    return x.title + " (" + x.year + ") " + "- " + "dir. " + x.director;
   });
   return result;
};



// PROBLEM #6 //

const mapSpecialFeatures = function(array){
   let result = array.map(function(x){
    let output = [];
    for (let i = 0; i < x.specialFeatures.length; i++){
        output.push(x.specialFeatures[i]["title"]);
    }
    return output;
   }); 
   return result;
};

// PROBLEM #7 //

const createNonsenseString = function(array, index){
let result = array.reduce(function(accumulator, current){
    accumulator += current.title[index];
    return accumulator;
}, "")    
    return result;
};

// PROBLEM #8 //

const getValues = function(object, props){
let output = [];
for (let i = 0; i < props.length; i++){
    for (let keys in object){
        if (keys == props[i]){
            output.push(object[keys]);
        }
    }
} return output;
};
