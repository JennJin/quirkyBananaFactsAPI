module.exports = async function (context, req) {
    context.log('This is a comment printed to the log for ease of tracking changes.');

    // Valid fruit values
    var fruitTypes = [ "banana", "apple"];
    // Don't forget to add the name of your fruit to the list of fruitTypes

    // Add your own fruit facts here. Replace "myfruit" with a fruit name
    /*  
    var myfruitFACTS = [
        "fact #1",
        "fact #2",
    ];
    */

    // List of Banana Facts
    var bananaFACTS = [
        "Did you know there are ancient Egyptian hieroglyphs that depict people with bananas?",
        "Bananas have been around as early back as 6th century B.C. (this is when they were first mentioned in literature)",
        "Miss Chiquita first appeared on the famous banana labels in 1963.",
        "Did you know there is a museum in Auburn, Washington dedicated to bananas? It's called the Washington Banana Museum.",
        "The banana plant reaches its full height of 15 to 30 feet in about one year. The trunk of a banana plant is made of sheaths of tightly overlapping leaves.",
        "Did you know bananas, apples & watermelons float in water?",
        "You can use the inside of a banana peel to polish patent leather shoes.",
        "The average American eats 27 pounds of bananas each year!",
        "A man in India once ate 81 bananas in a half an hour.",
        "Bananas don't grow on trees. They're actually a giant herb.",
        "Bananas are one of the few foods to contain the 6 major vitamin groups.",
        "If you peel a banana from the bottom up you won't get the string things.",
        "Those stringy things are called phloem (pronounced FLOM).",
        "The word banana comes from an Arab word 'banan' meaning finger.",
        "An individual banana is called a finger. A bunch of bananas is called a hand.",
        "The scientific name for banana is musa sapientum, which mean fruit of the wise men.",
        "Bananas are a very rich source of vitamin B6, which your brain needs to function properly and make you wise.",
        "The phrase 'going bananas' was first recorded in the Oxford English Dictionary because of the banana's connection with monkeys."
    ];

    // List of Apple Facts
    var appleFACTS = [
        "The crabapple is the only apple native to North America.",
        "Apples come in all shades of reds, greens, and yellows.",
        "Two pounds of apples make one 9-inch pie.",
        "Apple blossom is the state flower of Michigan.",
        "2,500 varieties of apples are grown in the United States.",
        "7,500 varieties of apples are grown throughout the world.",
        "100 varieties of apples are grown commercially in the United States.",
        "Apples are grown commercially in 36 states.",
        "Apples are grown in all 50 states.",
        "Apples are fat, sodium, and cholesterol free.",
        "A medium apple is about 80 calories.",
        "Apples are a great source of the fiber pectin. One apple has five grams of fiber.",
        "The pilgrims planted the first United States apple trees in the Massachusetts Bay Colony.",
        "The science of apple growing is called pomology.",
        "Apple trees take four to five years to produce their first fruit.",
        "Most apples are still picked by hand in the fall.",
        "Apple varieties range in size from a little larger than a cherry to as large as a grapefruit.",
        "Apples are propagated by two methods: grafting or budding.",
        "The apple tree originated in an area between the Caspian and the Black Sea.",
        "Apples were the favorite fruit of ancient Greeks and Romans.",
        "Apples are a member of the rose family.",
        "Apples harvested from an average tree can fill 20 boxes that weigh 42 pounds each.",
        "The largest apple picked weighed three pounds.",
        "Europeans eat about 46 pounds of apples annually.",
        "The average size of a United States orchard is 50 acres.",
        "Many growers use dwarf apple trees."
    ];

    // Default Banana fruit fact if no quirky parameter is passed.
    var factIndex = Math.floor(Math.random() * bananaFACTS.length);
    var theFact = bananaFACTS[factIndex];

    // Checks to see if there's a query parameter
    if (req.query.fruit) {
        var factResponse;

        // Checks to see if the fruit value passed is a in the fruitType list 
        if (fruitTypes.includes(req.query.fruit)) {
           
            var fruitFacts = eval(req.query.fruit+"FACTS");
            var fruitIndex = Math.floor(Math.random() * fruitFacts.length);
            factResponse = fruitFacts[fruitIndex];

        } else {
            factResponse = "Sorry, I don't have any facts for "+req.query.fruit+"s. ";
        }

        // Sends the fact or error message back in the response 
        context.res = {
            body: factResponse
        };
    
    }
    else {
        // Sends a Banana Fact as the default if there's no fruit parameter passed.
        context.res = {
            body: theFact
        };
    }
};