{

  "name": "♲SACHIYA MD♲",

  "description": "whatsapp md bot build with nodejs",

  "repository": "https://github.com/Nipuna-apps/Blue-Lione-Bot",

  "logo": "https://i.imgur.com/XHhlqtK.jpeg",

  "keywords": ["nodejs", "bot", "whatsapp bot", "whatsapp automation", "multi device"],

  "buildpacks": [

    {

      "url": "heroku/nodejs"

    },

    {

      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"

    },

    {

      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"

    }

  ],

   "formation": {

        "worker": {

            "quantity": 1,

            "size": "free"

        }

    }

} 
