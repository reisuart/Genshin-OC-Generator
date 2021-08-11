// RANDOM STATS

var rarity = [
  '<span style="color: #C179B9">★★★★</span>',
  '<span style="color: orange">★★★★★</span>'
];

var element = [
  '<span>Anemo</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046123331522640/UI_Buff_Element_Wind.png" width="15px" height="auto">',
  '<span>Geo</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046114380877904/UI_Buff_Element_Roach.png" width="15px" height="auto">',
  '<span>Electro</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046108760539146/UI_Buff_Element_Elect.png" width="15px" height="auto">',
  '<span>Dendro</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046112942252083/UI_Buff_Element_Grass.png" width="15px" height="auto">',
  '<span>Hydro</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046119678296184/UI_Buff_Element_Water.png" width="15px" height="auto">',
  '<span>Pyro</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046110903820328/UI_Buff_Element_Fire.png" width="15px" height="auto">',
  '<span>Cryo</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875046111591690260/UI_Buff_Element_Frost.png" width="15px" height="auto">'
];

var weapon = [
  '<span>Bow</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875049266979164170/Skill_A_02.png" width="18px" height="auto">',
  '<span>Catalyst</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875049276022079558/Skill_A_Catalyst_MD.png" width="18px" height="auto">',
  '<span>Claymore</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875049272935063632/Skill_A_04.png" width="18px" height="auto">',
  '<span>Polearm</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875049268484927558/Skill_A_03.png" width="18px" height="auto">',
  '<span>Sword</span>&nbsp;<img src="https://media.discordapp.net/attachments/708458209576484896/875049266115125248/Skill_A_01.png" width="18px" height="auto">'
];

var nation = [
  "Mondstadt",
  "Liyue",
  "Inazuma",
  "Sumeru",
  "Fontaine",
  "Natlan",
  "Snezhnaya",
  "Khaenri'ah"
];

var role = ["DPS", "Sub-dps", "Support", "Healer", "Hybrid"];

var gender = ["She/Her", "He/Him", "They/Them", "She/They", "He/They", "None"];

function oc() {
  var Rrarity = Math.floor(Math.random() * rarity.length);
  var Rgender = Math.floor(Math.random() * gender.length);
  var Relement = Math.floor(Math.random() * element.length);
  var Rweapon = Math.floor(Math.random() * weapon.length);
  var Rrole = Math.floor(Math.random() * role.length);
  var Rnation = Math.floor(Math.random() * nation.length);

  var strrarity = rarity[Rrarity];
  var strgender = gender[Rgender];
  var strelement = element[Relement];
  var strweapon = weapon[Rweapon];
  var strrole = role[Rrole];
  var strnation = nation[Rnation];

  document.getElementById("randomrarity").innerHTML = strrarity;
  document.getElementById("randomgender").innerHTML = strgender;
  document.getElementById("randomelement").innerHTML = strelement;
  document.getElementById("randomweapon").innerHTML = strweapon;
  document.getElementById("randomrole").innerHTML = strrole;
  document.getElementById("randomnation").innerHTML = strnation;
}

function ocrarity() {
  var Rrarity = Math.floor(Math.random() * rarity.length);

  var strrarity = rarity[Rrarity];

  document.getElementById("randomrarity").innerHTML = strrarity;
}

function ocgender() {
  var Rgender = Math.floor(Math.random() * gender.length);

  var strgender = gender[Rgender];

  document.getElementById("randomgender").innerHTML = strgender;
}

function ocelement() {
  var Relement = Math.floor(Math.random() * element.length);

  var strelement = element[Relement];

  document.getElementById("randomelement").innerHTML = strelement;
}

function ocweapon() {
  var Rweapon = Math.floor(Math.random() * weapon.length);

  var strweapon = weapon[Rweapon];

  document.getElementById("randomweapon").innerHTML = strweapon;
}

function ocrole() {
  var Rrole = Math.floor(Math.random() * role.length);

  var strrole = role[Rrole];

  document.getElementById("randomrole").innerHTML = strrole;
}

function ocnation() {
  var Rnation = Math.floor(Math.random() * nation.length);

  var strnation = nation[Rnation];

  document.getElementById("randomnation").innerHTML = strnation;
}

// RANDOM FEATURES

var height = ["Tall", "Medium", "Short"];

function featuresheight() {
  var Rheight = Math.floor(Math.random() * height.length);

  var strheight = height[Rheight];

  document.getElementById("random-height").innerHTML = strheight;
}

var skincolor = ["Light", "Tan", "Dark", "Fantasy"];

function featuresskincolor() {
  var Rskincolor = Math.floor(Math.random() * skincolor.length);

  var strskincolor = skincolor[Rskincolor];

  document.getElementById("random-skin-color").innerHTML = strskincolor;
}

var eyecolor = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White"];

function featureseyecolor() {
  var Reyecolor = Math.floor(Math.random() * eyecolor.length);

  var streyecolor = eyecolor[Reyecolor];

  document.getElementById("random-eye-color").innerHTML = streyecolor;
}

var haircolor = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White"];

function featureshaircolor() {
  var Rhaircolor = Math.floor(Math.random() * haircolor.length);

  var strhaircolor = haircolor[Rhaircolor];

  document.getElementById("random-hair-color").innerHTML = strhaircolor;
}

var hairlength = ["Short", "Medium", "Long"];

function featureshairlength() {
  var Rhairlength = Math.floor(Math.random() * hairlength.length);

  var strhairlength = hairlength[Rhairlength];

  document.getElementById("random-hair-length").innerHTML = strhairlength;
}

var hairtype = ["Straight", "Wavy", "Curly", "Spiky"];

function featureshairtype() {
  var Rhairtype = Math.floor(Math.random() * hairtype.length);

  var strhairtype = hairtype[Rhairtype];

  document.getElementById("random-hair-type").innerHTML = strhairtype;
}


function features() {
  var Rheight = Math.floor(Math.random() * height.length);
  var Rskincolor = Math.floor(Math.random() * skincolor.length);
  var Reyecolor = Math.floor(Math.random() * eyecolor.length);
  var Rhaircolor = Math.floor(Math.random() * haircolor.length);
  var Rhairlength = Math.floor(Math.random() * hairlength.length);
  var Rhairtype = Math.floor(Math.random() * hairtype.length);

  var strheight = height[Rheight];
  var strskincolor = skincolor[Rskincolor];
  var streyecolor = eyecolor[Reyecolor];
  var strhaircolor = haircolor[Rhaircolor];
  var strhairlength = hairlength[Rhairlength];
  var strhairtype = hairtype[Rhairtype];

  document.getElementById("random-height").innerHTML = strheight;
  document.getElementById("random-skin-color").innerHTML = strskincolor;
  document.getElementById("random-eye-color").innerHTML = streyecolor;
  document.getElementById("random-hair-color").innerHTML = strhaircolor;
  document.getElementById("random-hair-length").innerHTML = strhairlength;
  document.getElementById("random-hair-type").innerHTML = strhairtype;
}



// RANDOM PALETTE

function getRandomColor() {
  var r = (Math.round(Math.random() * 255) + 10).toString(16);
  var g = (Math.round(Math.random() * 127) + 127).toString(16);
  var b = (Math.round(Math.random() * 127) + 127).toString(16);
  return "#" + r + g + b;
}

function setRandomColor() {
  $("#colorpad1").css("background-color", getRandomColor());
  $("#colorpad2").css("background-color", getRandomColor());
  $("#colorpad3").css("background-color", getRandomColor());
  $("#colorpad4").css("background-color", getRandomColor());
  $("#colorpad5").css("background-color", getRandomColor());
}
