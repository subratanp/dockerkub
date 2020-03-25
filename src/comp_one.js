

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dataframe from './Dataframe.js' ;


//var eln = document.getElementById("parent_one");
//var lbl = document.createElement("div");
//lbl.innerHTML="This is great";
//lbl.setAttribute("style","color:blue;font-weight:bold");
//eln.appendChild(lbl);

ReactDom.render(<Dataframe></Dataframe>,document.getElementById("parent_one")  );
