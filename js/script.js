setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
  setTimeout("$('.main-desc').addClass('b-show')", 1500),
  setTimeout("$('body').addClass('add-scroll')", 3e3),
  setTimeout("$('html').addClass('add-scroll')", 3e3),
  $(".glow-button").on("click", function () {
    $(".comment-item").addClass("comment-item-show"),
      $(".glow-button").addClass("hide"),
      $(".shine-button").addClass("show");
  });
const OFFER = "«Liporeduct»";
let now = new Date(),
  mm = now.getMonth() + 1,
  day = now.getDate(),
  year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange =[
  {
    "m": "Bonjour, je m'appelle Myriam Ayman. Je suis diététicienne, nutritionniste et endocrinologue. Bienvenue sur mon site web."
  },
  {
    "m": "Ici, je propose des diagnostics gratuits en ligne et des recommandations personnalisées qui ont aidé de nombreuses personnes souffrant d'obésité à perdre du poids."
  },
  {
    "m": "Pour obtenir mes conseils sur la perte de poids, répondez à quelques questions."
  },
  { "m": '<p class="quest">Combien de kilos souhaitez-vous perdre ?</p>' },
  { "m": '<p class="quest">Quelles parties de votre corps nécessitent une correction ?</p>' },
  { "m": '<p class="quest">Quel est votre niveau d activité physique ?</p>' },
  { "m": '<p class="quest">Avez-vous une alimentation saine ?</p>' },
  { "m": '<p class="quest">Quel est votre âge ?</p>' },
  { "m": '<p class="quest">Quel est votre poids actuel ?</p>' },
  { "m": '<p class="quest">Quelle est votre taille ?</p>' },
  {
    "m": "Merci. Vous avez un excès de poids, mais vous êtes tout à fait capable d'atteindre votre objectif de perte de poids. La principale cause de votre prise de poids est un métabolisme lent. Cela est particulièrement fréquent avec la graisse viscérale, qui s'accumule autour des côtés et de l'abdomen."
  },
  {
    "m": "Recommandation personnalisée pour vous : café vert, extrait de thé vert, extrait de Garcinia Cambogia, extrait de gingembre, hibiscus."
  },
  {
    "m": "Café vert : Cet ingrédient vous aide à vous sentir rassasié plus longtemps, ce qui réduit votre consommation de calories. Il vous fournit également de l'énergie, ce qui est essentiel pour maintenir un mode de vie actif et faire de l'exercice, ce qui est crucial pour la perte de poids."
  },
  {
    "m": "Extrait de thé vert : Le thé matcha contient des antioxydants naturels et des catéchines qui peuvent accélérer votre métabolisme. Cela signifie que votre corps brûlera plus de calories, même au repos, ce qui vous aidera à perdre du poids."
  },
  {
    "m": "Extrait de Garcinia Cambogia : L'acide citrique aide votre corps à mieux absorber les nutriments des aliments, vous permettant d'en tirer le maximum et de le transformer en énergie au lieu de le stocker sous forme de graisse."
  },
  {
    "m": "Extrait de gingembre : Le gingembre est riche en protéines et en fibres alimentaires, ce qui peut améliorer votre sensation de satiété et aider à contrôler votre appétit. Cet ingrédient vous apporte également des vitamines et des minéraux bénéfiques pour votre santé globale pendant votre perte de poids."
  },
  {
    "m": "Les ingrédients mentionnés peuvent être consommés individuellement, mais il est plus pratique et efficace de les utiliser dans le cadre d'un complément alimentaire comme " + OFFER + ". Ils sont disponibles sous forme d'extraits concentrés avec une teneur maximale en substances bénéfiques."
  },
  {
    "m": "Pour une perte de poids visible, il suffit de les prendre trois fois par jour : matin, midi et soir. En seulement un mois, vous pourrez atteindre votre objectif."
  },
  {
    "m": 'Voici à quoi ressemble le produit : <br><br> <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 160px;">'
  },
  {
    "m": "Le produit contient des extraits hautement concentrés de brûleurs de graisse naturels, qui déclenchent le processus de combustion des graisses et le maintiennent actif."
  },
  {
    "m": "Ainsi, " + OFFER + " décompose et élimine efficacement la graisse viscérale, qui recouvre les parois des organes internes et les empêche de fonctionner correctement. Il débloque le métabolisme en nettoyant le corps des toxines et des impuretés."
  },
  {
    "m": "En conséquence, votre corps se débarrassera naturellement de l'excès de graisse en l'utilisant comme source d'énergie. Vous commencerez à manger moins et à ne plus ressentir la faim, ce qui renforcera l'effet de la perte de poids."
  },
  {
    "m": 'Voici les résultats de mes clients qui ont réussi à perdre du poids grâce à mes recommandations : <br> <br><img src="images/comm-photo3-135-arb.jpg"> <br> <img src="images/comm2-92a-arb.jpg"> <br> <img src="images/comm6-abb-arb.jpg">'
  },
  {
    "m": "Pendant votre utilisation du produit, votre corps sera profondément nettoyé et votre métabolisme s'améliorera."
  },
  {
    "m": "J'ai aussi une excellente nouvelle pour vous. Vous êtes mon 2000ème client diagnostiqué en ligne et, pour cette raison, vous bénéficiez d'une offre spéciale si vous commandez le produit aujourd'hui !"
  },
  {
    "m": "Vous pouvez obtenir " + OFFER + " au prix promotionnel en saisissant votre nom et votre numéro de téléphone dans le formulaire de commande sur le site officiel. Je mettrai le lien ci-dessous. Le nombre de packs promotionnels est limité, alors je vous conseille de commander rapidement."
  }
]
;
var mass_id = 0,
  length_mass = 0,
  lengt_num_mas = 0,
  text = "",
  speedtext = 0, //35
  process = !0;
function app() {
  var e = new Date(),
    s = ("0" + e.getMinutes()).slice(-2),
    t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n);
  }
  const a =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' +
    mass_id +
    '"></p><p class="message-time" id="time">' +
    t +
    "</p></div></div></div>";
  $(".chat-content-list").append(a),
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
}
function myMassange(e) {
  var s = new Date(),
    t = ("0" + s.getMinutes()).slice(-2);
  let n =
    '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass">' +
    e +
    '</p><p class="message-time" id="time"><span>' +
    ("0" + s.getHours()).slice(-2) +
    ":" +
    t +
    '</span><span class="icon_ack" data-testid="msg-dblcheck" aria-label=" Прочитано " data-icon="msg-dblcheck" ><svg viewBox="0 0 16 15" width="16" height="15" ><path fill="currentColor" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></p></div></div></div>';
  $(".chat-content-list").append(n),
    $(".content").animate({ scrollTop: $(".chat-content-list").height() }, 700),
    $("#scroll_id").addClass("hide");
}
function question1() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Jusqu à 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">De 5 à 10kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">De 10 à 15kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Plus de 15 kg</span></div></div>',
  );
}
function choise1() {
  $(".question1M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Jusqu'à 5 kg"),
      
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question1W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("De 5 à 10kg"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question1P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("De 10 à 15kg"),
        
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question1T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Plus de 15 kg"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    });
    
}
function question2() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Taille et ventre</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Cuisses et fesses</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Bras ou jambes</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Je veux perdre du poids partout</span></div></div>',
  );
}
function choise2() {
  $(".question2M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Taille et ventre"),
      $(".chat-content-buttons-gender").css("display", "none"),
      
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question2W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Cuisses et fesses"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question2P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Bras ou jambes"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question2T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Je veux perdre du poids partout"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
function question3() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Je m entraîne 3 à 5 fois par semaine</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Je m entraîne 1 à 3 fois par semaine</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Ne faites pas d exercice, essayez de marcher</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Mode de vie sédentaire</span></div></div>',
  );
}
function choise3() {
  $(".question3M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Je m'entraîne 3 à 5 fois par semaine"),
      $(".chat-content-buttons-gender").css("display", "none"),
     
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question3W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Je m'entraîne 1 à 3 fois par semaine"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question3P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Ne faites pas d'exercice, essayez de marcher"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question3T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Mode de vie sédentaire"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
function question4() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Oui, comptez les calories, pour les confiseries et pâtisseries Oui, comptez les calories, pour les confiseries ou pâtisseries</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">à propos 50/50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">J aime la restauration rapide, la malbouffe et les sucreries</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Manger les mauvais aliments</span></div></div>',
  );
}
function choise4() {
  $(".question4M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Oui, comptez les calories, pour les confiseries et pâtisseries Oui, comptez les calories, pour les confiseries ou pâtisseries"),
      $(".chat-content-buttons-gender").css("display", "none"),
      
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question4W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("à propos 50/50"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question4P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("J'aime la restauration rapide, la malbouffe et les sucreries"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question4T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Manger les mauvais aliments"),
        $(".chat-content-buttons-gender").css("display", "none"),
        
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
function question5() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Jusqu à 20 ans</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 année</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 année</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 année</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">Plus de 50 ans</span></div></div>',
  );
}
function choise5() {
  $(".question5M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Jusqu'à 20 ans"),
      $(".chat-content-buttons-gender").css("display", "none"),
     
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question5W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("20-30 année"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("31-40 année"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("41-50 année"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question5G").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Plus de 50 ans"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
function question6() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Jusqu à 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">60 - 70 kilos</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">71 - 80 kilos</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">De 81 à 90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Plus de 90 kg</span></div></div>',
  );
}
function choise6() {
  $(".question6M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Jusqu'à 60 kg"),
      $(".chat-content-buttons-gender").css("display", "none"),
    
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question6W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("60 - 70 kilos"),
        $(".chat-content-buttons-gender").css("display", "none"),
      
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("71 - 80 kilos"),
        $(".chat-content-buttons-gender").css("display", "none"),
      
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("De 81 à 90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
      
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question6O").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Plus de 90 kg"),
        $(".chat-content-buttons-gender").css("display", "none"),
      
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
function question7() {
  $(".chat-content-list").append(
    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Moins de 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">أكثر من  180 CM</span></div></div>',
  );
}
function choise7() {
  $(".question7M").click(() => {
    (document.querySelector(".chat-content-buttons-gender").style.display =
      "none"),
      myMassange("Moins de 150 cm"),
      $(".chat-content-buttons-gender").css("display", "none"),
     
      setTimeout(() => {
        process = !0;
      }, 500);
  }),
    $(".question7W").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("150-160cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7P").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("161-170cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7T").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("171-180cm"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    }),
    $(".question7G").click(() => {
      (document.querySelector(".chat-content-buttons-gender").style.display =
        "none"),
        myMassange("Más de 180 CM"),
        $(".chat-content-buttons-gender").css("display", "none"),
       
        setTimeout(() => {
          process = !0;
        }, 500);
    });
}
setTimeout(() => {
  var e = new Date(),
    s = ("0" + e.getMinutes()).slice(-2);
  const t =
    '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' +
    mass_id +
    '"></p><p class="message-time" id="time">' +
    ("0" + e.getHours()).slice(-2) +
    ":" +
    s +
    "</p></div></div></div>";
  $(".chat-content-list").append(t),
    $("#scroll_id").click(function (e) {
      $(this).removeClass("hide-q"),
        $(".content").animate({ scrollTop: $(".chat").height() }, 700);
    });
  const n = setInterval(function () {
    1 == process &&
      (lengt_num_mas != massange.length
        ? ((text += massange[lengt_num_mas].m[length_mass]),
          length_mass++,
          $("#mass" + lengt_num_mas).html(text),
          3 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question1(),
            (process = !1),
            choise1(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 400),
            $("#scroll_id").removeClass("hide-q")),
          4 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question2(),
            (process = !1),
            choise2(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          5 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question3(),
            (process = !1),
            choise3(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          6 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question4(),
            (process = !1),
            choise4(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          7 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question5(),
            (process = !1),
            choise5(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          8 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question6(),
            (process = !1),
            choise6(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          9 === lengt_num_mas &&
            length_mass === massange[lengt_num_mas].m.length - 1 &&
            (question7(),
            (process = !1),
            choise7(),
            $("#scroll_id").addClass("hide-q"),
            $(".content").animate({ scrollTop: $(".chat").height() }, 700),
            $("#scroll_id").removeClass("hide-q")),
          length_mass == massange[lengt_num_mas].m.length &&
            (lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app()))
        : (clearInterval(n),
          $("#mass" + lengt_num_mas)
            .parent()
            .parent()
            .css("display", "none"),
          $(".iframe-form").addClass("show"),
          $(".btn-top").addClass("show"),
          start_timer()));
  }, speedtext);
}, 10),
  $(".content").scroll(function () {
    "0" == document.getElementById("res").value
      ? $("#scroll_id").addClass("aba")
      : $("#scroll_id").removeClass("aba");
  });
var $marker = $("#down-box");
$(".content").scroll(function () {
  $(".content").scrollTop() + $(".content").height() >=
  $(".chat").height() + 100
    ? ((document.getElementById("res").value = "0"),
      $("#scroll_id").addClass("hide"))
    : $("#scroll_id").removeClass("hide");
});
let intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  time -= 1;
  var e = Math.floor(time / 60),
    s = time - 60 * e;
  0 == e && 0 == s && clearInterval(intr),
    (s = s >= 10 ? s : "0" + s),
    $("#min").html("0" + e),
    $("#sec").html(s);
};
