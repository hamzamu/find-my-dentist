var causes = ["root canal treatment","dental implant","dental bridges","Teeth Whitening" ,"Crowns and Caps","Dentures","Braces","Bonding","Fillings and Repairs","Sealants"]
var cities = ["istanbul","ankara","antalya","maramris","izmir"]
var dates = ["today","tomorrow","this week","next week","next month"]
var specs = ["General Practice","Oral & Maxillofacial Surgery","Endodontics","Orthodontics & Dentofacial Orthopedics","Pediatric Dentistry","Periodontics","Prosthodontics","Oral & Maxillofacial Pathology","Dental Public Health","Oral & Maxillofacial Radiology"]
var languages = ["arabic","english","russian","dutch"]
Meteor.startup(()=>{
    App.setSetting({causes:causes,cities:cities,dates:dates,specs:specs,languages:languages})
})
