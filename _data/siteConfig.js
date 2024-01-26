// require("dotenv").config();
let url = "http://localhost:8080/"; // Dev URL
if(process.env.ENVIRONMENT === "production") url = "https://notes.binnyva.com/";

module.exports = {
    title: `Digital Zen Garden`,
    description: `My Digital Garden, My Zettelkasten Note Drawer, A place that holds my thoughts...`,
    url: url,
    author: "Binny V A",
    pathPrefix: "/", // If your Digital Garden is not published at the root of your website, use this. Requires a ending '/'
    homeNote: 'Readme', // If you want to set one note as the Home page, set the file name here
    headerMenu: [
      {type: 'page', item: '', title: 'Home'},
      // {type: 'page', item: 'sitemap', title: 'Sitemap'},
      // {type: 'link', item: 'https://github.com/binnyva/11-garden', title: '11 Garden'},
      {
        type: 'page', item: 'tags', title: 'Tags',
        menu: [
          {type: 'tag',item: 'zettelkasten'},
          {type: 'tag',item: 'psychology'},
          {type: 'tag',item: 'framework'},
          {type: 'tag',item: 'productivity'},
          {type: 'tag',item: 'philosophy'},
        ]
      },
    ],
};
