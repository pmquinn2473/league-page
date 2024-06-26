/*   STEP 1   */
export const leagueID = "1101407304802574336"; // your league ID
export const leagueName = "Lakeview Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Are you ready?</p>
  <p>Welcome to the Lakeview Pod Dynasty League</p> 
  <p>Hosted by Michael Lake and Kevin Lake, </p>
  <p></p> 
  <p></p>
  <p></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
//     // {
//     //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
//     // {
//     //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
//     // {
//     //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
//     //   "name": "Your Name",
//     //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//     //   "location": "Brooklyn", // (optional)
//     //   "bio": "Lorem ipsum...",
//     //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//     //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//     //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//     //   "rival": {
//     //     name: "Rival", // Can be anything (usually your rival's name)
//     //     link: 6, // manager array number within this array, or null to link back to all managers page
//     //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//     //   },
//     //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//     //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//     //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//     //   "philosophy": "Your fantasy team's philosophy",
//     //   "tradingScale": 10, // 1 - 10
//     //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     // },
  
  
  
//   /*   !!  !!  IMPORTANT  !!  !! */
//   /*
//   Below is the most up to-date version of a manager. Please leave this commented out
//   and don't delete it. This will be updated if any fields are added, removed or changed
//   and will allow updates without causing merge conflicts
//   */

// //Mike Lake
//     {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "852266560109293568",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Michael Lake",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Riley's House, New Jersey", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Indigestion", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Your fantasy team's philosophy", // (optional)
//       "tradingScale": 10, // 1 - 10 (optional)
//       "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Kevin Lake
//     {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "852642665873940480",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Kevin Lake",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Maryland", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 9229, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Trade Now, Win Now", // (optional)
//       "tradingScale": 10, // 1 - 10 (optional)
//       "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Mike Phillips
//     {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "701582850595577856",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Michael Phillips",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //John Altmire
//     {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "406304443991126016",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "John Altmire",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "ten", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Stuff", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 9508, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 7, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Brian McAloon
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "852263741075611648",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Brian McAloon",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Blank", // (optional)
//       "tradingScale": 10, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Paul Quinn
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "852623581539045376",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Paul Quinn",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Everyone", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //NickAltmire
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "867790949214994432",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "NickAltmire",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Everyone", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Blank", // (optional)
//       "tradingScale": 2, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //EdwardAltmire
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "890051661535105024",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "EdwardAltmire",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Blank", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Bob Phillips
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "911858813945528320",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Bob Phillips",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Katey Phillips
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "973377246796771328",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Katey Phillips",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Everyone", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Anthony Pallone
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "973723195154980864",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Mr. Pallone",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //John Phillips
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "974112322165735424",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "John Phillips",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Ed Quinn
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "976544589903368192",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Ed Quinn",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "Pennsylvania", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Enemies of the US Navy", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

// //Ryan Steffen
//       {
// //      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "managerID": "976972767528644608",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "name": "Ryan Steffen",
// //      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": "New Jersey", // (optional)
//       "bio": "Coming Soon...",
//       "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
//       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Everyone", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Coming Soon...", // (optional)
//       "tradingScale": 4, // 1 - 10 (optional)
// //      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },

//Mike Lake
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "852266560109293568",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Mike Lake",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/mLake.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4866, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
 //Kevin Lake
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "852642665873940480",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kevin Lake",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Kevin Lake", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/kLake.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 9, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
//John Phillips
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "974112322165735424",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "John Phillips",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pennsylvania", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/jPhillips.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Sleeper",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
//Bob Phillips
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "911858813945528320",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Bob Phillips",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Pittsburgh", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/bPhillips.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 9757, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
//Gil
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "862148445476081664",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Gil",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "United States", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/gil.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 6, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

//Jason Slutsky
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "852254555294019584",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jason Slutsky",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/jSlutsky.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5870, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "WhatsApp",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

//Brian McAloon
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "852263741075611648",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Brian McAloon",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Lansdale", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/bMcaloon.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Phone",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

//Mike Sauter
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "694249360803848192",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Mike Sauter",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/mSauter.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 7, // 1 - 10 (optional)
      "preferredContact": "Phone",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
//Byron
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "454869184224948224",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Byron",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "United States", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/byron.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 2, // 1 - 10 (optional)
      "preferredContact": "Email",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

//Paul Quinn
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "852623581539045376",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Paul Quinn",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New Jersey", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/pQuinn.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 5859, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Discord",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

//Paul Prendergast
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "790036237204447232",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Paul Prendergast",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "DC", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/pPrendergast.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Discord",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

  
//Matt Murphy
      {
//      "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "313560442465169408",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Matt Murphy",
//      "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "United States", // (optional)
      "bio": "Coming Soon...",
      "photo": "/managers/mMurphy.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Everyone", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7525, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Coming Soon...", // (optional)
      "tradingScale": 4, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },

   
]
