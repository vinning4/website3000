module.exports = {
    name: "Website3000 Web Designer",
    email: "hello@website3000.com",
    phoneForTel: "0466340941",
    phoneFormatted: "(+61) 466 340 941",
    address: {
        lineOne: "",
        lineTwo: "",
        city: "Melbourne",
        state: "VIC",
        zip: "3000",
        country: "AU",
        mapLink: "https://maps.app.goo.gl/WdupJmFuAJs84UBn9",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    
    domain: "https://www.website3000.com",
    
    // Passing the isProduction variable for use in HTML templates
    
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
