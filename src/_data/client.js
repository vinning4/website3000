module.exports = {
    name: "Website3000",
    email: "hello@website3000.com",
    phoneForTel: "",
    phoneFormatted: "",
    address: {
        lineOne: "35 Collins St",
        lineTwo: "",
        city: "Melbourne",
        state: "VIC",
        zip: "3000",
        country: "AU",
        mapLink: "https://share.google/3sddD5jorIXGA8W3F",
    },
    socials: {
        instagram: "https://www.instagram.com/realWebsite3000",
    },
    
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    
    domain: "https://www.website3000.com",
    
    // Passing the isProduction variable for use in HTML templates
    
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
