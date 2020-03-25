var html = require("html-webpack-plugin");
var path = require("path");

module.exports={

      entry :path.resolve(__dirname,"src")+"\\comp_one.js" ,
      output: {  
       filename:"[name]_bundle.js",
       path:path.resolve(__dirname,"builds")
       


      } ,

      plugins:[
            
        new html({   
            title:"discovery.html",
            template:path.resolve(__dirname,"src")+"\\discovery.html" ,
            filename:"discovery.html"

        }),

        

      ],

      module:{

          rules:[
              {
              test:/.js$/,
              exclude:"/node_modules/",
              use:{
                 loader:"babel-loader",
                 options: {

                 presets:["@babel/preset-env" , "@babel/preset-react" ,
                 {
                  plugins: [
                    '@babel/plugin-proposal-class-properties'
                  ]
                }
                
                
                
                ]

                 }


              }

              },
              {
                test:/\.css$/,
                use: [  "style-loader","css-loader"]


              },
              

             
          ]



      }




};