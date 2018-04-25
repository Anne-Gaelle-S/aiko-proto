module.exports = {
    name: 'gif',
    usage: `<lea> | <nicolas> | <gael> | <elio> | <ohayo> | <ez> | <ag>`,
    description: `Affiche le gif choisis en paramètre, ou un aléatoirement.`,
    execute(message, args) {
      
    	let possibilites = [['N\'est elle pas mignonne?',
                             `https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/Lea.gif`]];
    	possibilites.push(['Elle te juge.', 
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/LeaJugement.gif']);      
    	possibilites.push(['De toute manière il n\'aime que l\'elixir...', 
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/nicolas.gif']);
    	possibilites.push(['En cas de problème: appeler Gaël.',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/gael.gif']);
    	possibilites.push(['Quand il est pas en cours il code. Il code souvent.',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/elio.gif']);
    	possibilites.push(['o/',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/aiko-ohayo.gif']);
    	possibilites.push(['C\'était trop simple!',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/ez.gif']);
    	possibilites.push(['Elle entree souvent des idées à la con...',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/AG.gif']);
    	possibilites.push(['Shigoto, shigoto ! ',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/TrioWork.gif']);
    	possibilites.push(['( ͡° ͜ʖ ͡°)',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/aiko-lewd.gif']);
    	possibilites.push(['( ͡° ͜ʖ ͡°)',
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/aiko-lewd2.gif']);

      if (!message.mentions.users.size) {
          
          if (args.length==0) {
             let alea = parseInt(Math.random() * possibilites.length);
             let res = possibilites[alea];
             message.channel.send(res[0], {
                file : res[1]
              });
          } else {
              let entree = args[0].toUpperCase();
              verifArg(message, possibilites, entree);
          }

      } else {
          const avatarList = message.mentions.users.map(user => {
              let p = user.username.toUpperCase();
              verifArg(message, possibilites, p);
          });
      }
        
    },
};

function verifArg(message, possibilites, entree) {
  let res;

  if( entree == 'LEA' || entree == 'KAINNALY') {
        let alea = parseInt(Math.random() * 2);
        res = possibilites[alea];
  } else if ( entree == 'NICO' || entree == 'NICOLAS' || entree == 'KORNAKH') {
        res = possibilites[2];
  } else if ( entree == 'GAEL' || entree == 'ZORG') {
        res = possibilites[3];
  } else if ( entree == 'ELIO' || entree == 'SINISTAG') {
        res = possibilites[4];
  }  else if ( entree == 'OHAYO' || entree == 'KONNICHIWA' || entree == 'KONBAWA' || entree == 'AIKO-PROTO') {
        res = possibilites[5];
  } else if ( entree == 'EZ' || entree == 'SIMPLE' || entree == 'BASIQUE' || entree == 'AIKO-PROTO') {
        res = possibilites[6];
  } else if ( entree == 'LEWD' || entree == 'PERVERS' || entree == 'REGARD' || entree == 'LENNY'|| entree == 'AIKO-PROTO') {
        let alea = parseInt(Math.random() * 2)+9;
        res = possibilites[alea];
  } else if ( entree == 'AG' || entree == 'KRYSTHALIA' || entree == 'ANNE-GAELLE') {
        res = possibilites[7];
  } else {
     let alea = parseInt(Math.random() * possibilites.length);
     res = possibilites[alea];
  }
  
  message.channel.send(res[0], {
        file : res[1]
  });

}
