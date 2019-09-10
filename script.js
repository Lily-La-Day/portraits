
document.addEventListener("DOMContentLoaded", function(event) {
  // select all clickable photos
  var photos = document.querySelectorAll('.photoBtn');

  // loop the photos
  for (var i = 0; i < photos.length; i++) {
    // add click event to photos (calls artAppear() and passes photo number)
    photos[i].addEventListener("click", function(){
      toggleArt(this);
    }, false);
  }
});


function toggleArt(photo) {
  // toggle class 'clicked'
    photo.classList.toggle('clicked');
};

// function artAppear2() {
//     document.getElementById("photo2").style.opacity = 0;
// };
// function artAppear3() {
//     document.getElementById("photo3").style.opacity = 0;
// };
// function artAppear4() {
//     document.getElementById("photo4").style.opacity = 0;
// };
// function artAppear5() {
//     document.getElementById("photo5").style.opacity = 0;
// };
// function artAppear6() {
//     document.getElementById("photo6").style.opacity = 0;
// };
// function artAppear7() {
//     document.getElementById("photo7").style.opacity = 0;
// };
// function artAppear8() {
//     document.getElementById("photo8").style.opacity = 0;
// };
// function artAppear9() {
//     document.getElementById("photo9").style.opacity = 0;
// };
// function artAppear10() {
//     document.getElementById("photo10").style.opacity = 0;
// };
// function artAppear11() {
//     document.getElementById("photo11").style.opacity = 0;
// };
// function artAppear12() {
//     document.getElementById("photo12").style.opacity = 0;
// };
// function artAppear13() {
//     document.getElementById("photo13").style.opacity = 0;
// };
// function artAppear14() {
//     document.getElementById("photo14").style.opacity = 0;
// };
// function artAppear15() {
//     document.getElementById("photo15").style.opacity = 0;
// };
// function artAppear16() {
//     document.getElementById("photo16").style.opacity = 0;
// };
// function artAppear17() {
//     document.getElementById("photo17").style.opacity = 0;
// };
// function artAppear18() {
//     document.getElementById("photo18").style.opacity = 0;
// };
// function artAppear19() {
//     document.getElementById("photo19").style.opacity = 0;
// };
// function artAppear20() {
//     document.getElementById("photo20").style.opacity = 0;
// };
// function artAppear21() {
//     document.getElementById("photo21").style.opacity = 0;
// };
// function artAppear22() {
//     document.getElementById("photo22").style.opacity = 0;
// };
// function artAppear23() {
//     document.getElementById("photo23").style.opacity = 0;
// };
// function artAppear24() {
//     document.getElementById("photo24").style.opacity = 0;
// };
// function artAppear25() {
//     document.getElementById("photo25").style.opacity = 0;
// };
// function artAppear26() {
//     document.getElementById("photo26").style.opacity = 0;
// };
// function artAppear27() {
//     document.getElementById("photo27").style.opacity = 0;
// };
// function artAppear28() {
//     document.getElementById("photo28").style.opacity = 0;
// };
// function artAppear29() {
//     document.getElementById("photo29").style.opacity = 0;
// };
// function artAppear30() {
//     document.getElementById("photo30").style.opacity = 0;
// };
// function artAppear31() {
//     document.getElementById("photo31").style.opacity = 0;
// };
// function artAppear32() {
//     document.getElementById("photo32").style.opacity = 0;
// };
// function artAppear33() {
//     document.getElementById("photo33").style.opacity = 0;
// };
// function artAppear34() {
//     document.getElementById("photo34").style.opacity = 0;
// };
// function artAppear35() {
//     document.getElementById("photo35").style.opacity = 0;
// };
// function artAppear36() {
//     document.getElementById("photo36").style.opacity = 0;
// };
// function artAppear37() {
//     document.getElementById("photo37").style.opacity = 0;
// };
// function artAppear38() {
//     document.getElementById("photo38").style.opacity = 0;
// };
// function artAppear39() {
//     document.getElementById("photo39").style.opacity = 0;
// };
// function artAppear40() {
//     document.getElementById("photo40").style.opacity = 0;
// };
// function artAppear41() {
//     document.getElementById("photo41").style.opacity = 0;
// };
// function artAppear42() {
//     document.getElementById("photo42").style.opacity = 0;
// };
// function artAppear43() {
//     document.getElementById("photo43").style.opacity = 0;
// };
// function artAppear44() {
//     document.getElementById("photo44").style.opacity = 0;
// };
// function artAppear45() {
//     document.getElementById("photo45").style.opacity = 0;
// };
// function artAppear46() {
//     document.getElementById("photo46").style.opacity = 0;
// };
// function artAppear47() {
//     document.getElementById("photo47").style.opacity = 0;
// };
// function artAppear48() {
//     document.getElementById("photo48").style.opacity = 0;
// };
// function artAppear49() {
//     document.getElementById("photo49").style.opacity = 0;
// };
// function artAppear50() {
//     document.getElementById("photo50").style.opacity = 0;
// };
// function artAppear51() {
//     document.getElementById("photo51").style.opacity = 0;
// };
// function artAppear52() {
//     document.getElementById("photo52").style.opacity = 0;
// };
// function artAppear53() {
//     document.getElementById("photo53").style.opacity = 0;
// };
// function artAppear54() {
//     document.getElementById("photo54").style.opacity = 0;
// };
// function artAppear55() {
//     document.getElementById("photo55").style.opacity = 0;
// };
// function artAppear56() {
//     document.getElementById("photo56").style.opacity = 0;
// };
// function artAppear57() {
//     document.getElementById("photo57").style.opacity = 0;
// };
// function artAppear58() {
//     document.getElementById("photo58").style.opacity = 0;
// };
// function artAppear59() {
//     document.getElementById("photo59").style.opacity = 0;
// };
// function artAppear60() {
//     document.getElementById("photo60").style.opacity = 0;
// };
// function artAppear61() {
//     document.getElementById("photo61").style.opacity = 0;
// };
// function artAppear62() {
//     document.getElementById("photo62").style.opacity = 0;
// };
// function artAppear63() {
//     document.getElementById("photo63").style.opacity = 0;
// };
// function artAppear68() {
//     document.getElementById("photo68").style.opacity = 0;
// };
// function artAppear69() {
//     document.getElementById("photo69").style.opacity = 0;
// };
// function artAppear64() {
//     document.getElementById("photo64").style.opacity = 0;
// };
// function artAppear65() {
//     document.getElementById("photo65").style.opacity = 0;
// };
// function artAppear66() {
//     document.getElementById("photo66").style.opacity = 0;
// };

document.addEventListener("DOMContentLoaded", function(event) {
  // select all elements with a data attribute of 'data-answer'
  var buttons = document.querySelectorAll('[data-answer]');

  // loop all the elements
  for (var i = 0; i < buttons.length; i++) {
    //asign click event
    buttons[i].addEventListener("click", function(){
      // call the answerAppear function whilst passing in the value of the 'data-answer' attribute as a parameter
      answerAppear(this.getAttribute('data-answer'));
    }, false);
  }
});

function answerAppear(answer) {
    // get all elements with this classname
    var letter = document.querySelectorAll("." + answer);

    // loop all elements
    for (var i = 0; i < letter.length; i++) {
      // hide the elements
      letter[i].style.opacity = 1;
    }
};

function answerAppear4a() {
    document.getElementById("painter").style.opacity = 1;
    document.getElementById("ainter").style.opacity = 1
    document.getElementById("ainter").style.opacity = 1
    document.getElementById("inter").style.opacity = 1
    document.getElementById("nter").style.opacity = 1
    document.getElementById("ter").style.opacity = 1
    document.getElementById("er").style.opacity = 1
    document.getElementById("r").style.opacity = 1

};

function answerAppear9() {
    document.getElementById("signs").style.opacity = 1
    document.getElementById("amaritan").style.opacity = 1
    document.getElementById("maritan").style.opacity = 1
    document.getElementById("aritan").style.opacity = 1
      document.getElementById("rwinism").style.opacity = 1
        document.getElementById("itan").style.opacity = 1
    document.getElementById("tan").style.opacity = 1
    document.getElementById("an").style.opacity = 1
    document.getElementById("n").style.opacity = 1
};

function answerAppear10() {
    document.getElementById("muser").style.opacity = 1;
    document.getElementById("user").style.opacity = 1
    document.getElementById("ser").style.opacity = 1
    document.getElementById("er2").style.opacity = 1
    document.getElementById("r2").style.opacity = 1

};

function answerAppear11() {
    document.getElementById("gns").style.opacity = 1;
    document.getElementById("enii").style.opacity = 1
    document.getElementById("nii").style.opacity = 1
    document.getElementById("ni").style.opacity = 1
    document.getElementById("inism").style.opacity = 1

};

function answerAppear12() {
    document.getElementById("utilisers").style.opacity = 1;
    document.getElementById("tilisers").style.opacity = 1
    document.getElementById("ilisers").style.opacity = 1
    document.getElementById("lisers").style.opacity = 1
    document.getElementById("isers").style.opacity = 1
    document.getElementById("sers").style.opacity = 1
    document.getElementById("ers").style.opacity = 1
    document.getElementById("rs").style.opacity = 1
    document.getElementById("s2").style.opacity = 1

};

function answerAppear13() {
    document.getElementById("s").style.opacity = 1;
    document.getElementById("panish").style.opacity = 1
    document.getElementById("anish").style.opacity = 1
    document.getElementById("nish").style.opacity = 1
    document.getElementById("ism").style.opacity = 1
    document.getElementById("sh").style.opacity = 1
    document.getElementById("h").style.opacity = 1

};

function answerAppear15() {
    document.getElementById("drum").style.opacity = 1;
    document.getElementById("rum").style.opacity = 1
    document.getElementById("um").style.opacity = 1
    document.getElementById("m2").style.opacity = 1


};

function answerAppear17() {
    document.getElementById("salmon").style.opacity = 1;
    document.getElementById("almon").style.opacity = 1
    document.getElementById("lmon").style.opacity = 1
    document.getElementById("m").style.opacity = 1
    document.getElementById("on").style.opacity = 1
    document.getElementById("n3").style.opacity = 1


};

function answerAppear18() {
    document.getElementById("raves").style.opacity = 1;
    document.getElementById("aves").style.opacity = 1
    document.getElementById("ves").style.opacity = 1
    document.getElementById("es2").style.opacity = 1
    document.getElementById("s3").style.opacity = 1;
  };

  function answerAppear21() {
      document.getElementById("portraits").style.opacity = 1;
      document.getElementById("ortraits").style.opacity = 1
      document.getElementById("rtraits").style.opacity = 1
      document.getElementById("traits").style.opacity = 1
      document.getElementById("raits").style.opacity = 1
      document.getElementById("aits").style.opacity = 1
      document.getElementById("its").style.opacity = 1
      document.getElementById("ts").style.opacity = 1
      document.getElementById("s4").style.opacity = 1

  };

  function answerAppear23() {
      document.getElementById("learn").style.opacity = 1;
      document.getElementById("earn").style.opacity = 1
      document.getElementById("arn").style.opacity = 1
      document.getElementById("rn").style.opacity = 1
      document.getElementById("n2").style.opacity = 1;
    };

    function answerAppear25() {
        document.getElementById("brovado").style.opacity = 1;
        document.getElementById("rovado").style.opacity = 1
        document.getElementById("ovado").style.opacity = 1
        document.getElementById("vado").style.opacity = 1
        document.getElementById("ado").style.opacity = 1
        document.getElementById("do").style.opacity = 1
        document.getElementById("o").style.opacity = 1


    };

    function answerAppear27() {
        document.getElementById("pride").style.opacity = 1;
        document.getElementById("ride").style.opacity = 1
        document.getElementById("ide").style.opacity = 1
        document.getElementById("de2").style.opacity = 1
        document.getElementById("e2").style.opacity = 1
            };

            function answerAppear28() {
                document.getElementById("hacking").style.opacity = 1;
                document.getElementById("acking").style.opacity = 1
                document.getElementById("cking").style.opacity = 1
                document.getElementById("king").style.opacity = 1
                document.getElementById("ing").style.opacity = 1
                document.getElementById("ng").style.opacity = 1
                document.getElementById("g").style.opacity = 1


            };
            function answerAppear29() {
                document.getElementById("erases").style.opacity = 1;
                document.getElementById("rases").style.opacity = 1
                document.getElementById("ases").style.opacity = 1
                document.getElementById("ses").style.opacity = 1
                document.getElementById("es3").style.opacity = 1
                document.getElementById("s5").style.opacity = 1
};


function answerAppear1d() {
  var designs = document.querySelectorAll(".designs");
  for (var i = 0; i < designs.length; i++) {
    designs[i].style.opacity = 1;
  }
    //
    // document.getElementById("decode").style.opacity = 1;
    // document.getElementById("esigns").style.opacity = 1
    // document.getElementById("signs").style.opacity = 1
    // document.getElementById("igns").style.opacity = 1
    // document.getElementById("gns").style.opacity = 1
    // document.getElementById("ns").style.opacity = 1
    // document.getElementById("s").style.opacity = 1
};

function answerAppear2() {
    document.getElementById("code").style.opacity = 1;
    document.getElementById("umin").style.opacity = 1
    document.getElementById("maritan").style.opacity = 1
    document.getElementById("in").style.opacity = 1
    document.getElementById("nii").style.opacity = 1

};

function answerAppear3() {
    document.getElementById("de").style.opacity = 1
    document.getElementById("arwinism").style.opacity = 1
    document.getElementById("rwinism").style.opacity = 1
    document.getElementById("winism").style.opacity = 1
      document.getElementById("inism").style.opacity = 1
        document.getElementById("nism").style.opacity = 1
    document.getElementById("ism").style.opacity = 1
    document.getElementById("sm").style.opacity = 1
    document.getElementById("m").style.opacity = 1
};

function answerAppear4() {
    document.getElementById("painter").style.opacity = 1;
    document.getElementById("encil").style.opacity = 1
    document.getElementById("n").style.opacity = 1
    document.getElementById("cil").style.opacity = 1
    document.getElementById("ilisers").style.opacity = 1
    document.getElementById("l").style.opacity = 1

};

function answerAppear5() {
    document.getElementById("inter").style.opacity = 1;
    document.getElementById("ambi").style.opacity = 1
    document.getElementById("muser").style.opacity = 1
    document.getElementById("bi").style.opacity = 1
    document.getElementById("isers").style.opacity = 1


};

function answerAppear6() {
    document.getElementById("ter").style.opacity = 1
    document.getElementById("astebuds").style.opacity = 1
    document.getElementById("ser").style.opacity = 1
    document.getElementById("tebuds").style.opacity = 1
      document.getElementById("ers").style.opacity = 1
        document.getElementById("buds").style.opacity = 1
    document.getElementById("um").style.opacity = 1
    document.getElementById("ds").style.opacity = 1
    document.getElementById("s3").style.opacity = 1
};

function answerAppear7() {
    document.getElementById("r").style.opacity = 1;
    document.getElementById("arest").style.opacity = 1
    document.getElementById("r2").style.opacity = 1
    document.getElementById("est").style.opacity = 1
    document.getElementById("s2").style.opacity = 1
    document.getElementById("t").style.opacity = 1

};

function answerAppear9d() {
    document.getElementById("tan").style.opacity = 1;
    document.getElementById("oughen").style.opacity = 1
    document.getElementById("utilisers").style.opacity = 1
    document.getElementById("ghen").style.opacity = 1
    document.getElementById("h").style.opacity = 1
    document.getElementById("en").style.opacity = 1
document.getElementById("n3").style.opacity = 1
};

function answerAppear14() {
    document.getElementById("anish").style.opacity = 1
    document.getElementById("naerobic").style.opacity = 1
    document.getElementById("almon").style.opacity = 1
    document.getElementById("erobic").style.opacity = 1
      document.getElementById("rtraits").style.opacity = 1
        document.getElementById("obic").style.opacity = 1
    document.getElementById("brovado").style.opacity = 1
    document.getElementById("ic").style.opacity = 1
    document.getElementById("cking").style.opacity = 1
};

function answerAppear15d() {
    document.getElementById("drum").style.opacity = 1
    document.getElementById("eveloper").style.opacity = 1
    document.getElementById("ves").style.opacity = 1
    document.getElementById("eloper").style.opacity = 1
      document.getElementById("learn").style.opacity = 1
        document.getElementById("oper").style.opacity = 1
    document.getElementById("pride").style.opacity = 1
    document.getElementById("er3").style.opacity = 1
    document.getElementById("rases").style.opacity = 1
};

function answerAppear16() {
    document.getElementById("bristol").style.opacity = 1;
    document.getElementById("raves").style.opacity = 1
    document.getElementById("istol").style.opacity = 1
    document.getElementById("s4").style.opacity = 1
    document.getElementById("tol").style.opacity = 1
    document.getElementById("o").style.opacity = 1
document.getElementById("l2").style.opacity = 1
};

function answerAppear19() {
    document.getElementById("sinless").style.opacity = 1;
    document.getElementById("inless").style.opacity = 1
    document.getElementById("n2").style.opacity = 1
    document.getElementById("less").style.opacity = 1
    document.getElementById("e2").style.opacity = 1
    document.getElementById("ss").style.opacity = 1
document.getElementById("s5").style.opacity = 1
};

function answerAppear20() {
    document.getElementById("uppish").style.opacity = 1;
    document.getElementById("portraits").style.opacity = 1
    document.getElementById("pish").style.opacity = 1
    document.getElementById("ish").style.opacity = 1
    document.getElementById("sh2").style.opacity = 1
    document.getElementById("hacking").style.opacity = 1

};



function answerAppear22() {
    document.getElementById("raits").style.opacity = 1
    document.getElementById("oo").style.opacity = 1
    document.getElementById("ovado").style.opacity = 1
  }

  function answerAppear24() {
      document.getElementById("arn").style.opacity = 1;
      document.getElementById("lias").style.opacity = 1
      document.getElementById("ide").style.opacity = 1
      document.getElementById("as").style.opacity = 1
      document.getElementById("ses").style.opacity = 1

  };

  function answerAppear26() {
      document.getElementById("vado").style.opacity = 1
      document.getElementById("in2").style.opacity = 1
      document.getElementById("ng").style.opacity = 1
    }
