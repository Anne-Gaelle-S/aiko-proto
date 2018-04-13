module.exports = {
    name: 'gif',
    usage: `<lea> | <nicolas> | <gael> | <elio> | <ohayo> | <ez>`,
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

      message.channel.send(args.size);  
        message.channel.send("ok");
        
      if (args.size<1) {
         let alea = parseInt(Math.random() * 7);
         let res = possibilites[alea];
         message.channel.send(res[0], {
            file : res[1]
          });
      } else {
          let a = args[0].toUpperCase();
          if( a == 'LEA' || a == 'KAINNALY') {
                   let alea = parseInt(Math.random() * 2);
                   let res = possibilites[alea];
                   message.channel.send(res[0], {
                    file : res[1]
                  });
          } else if ( a == 'NICO' || a == 'NICOLAS' || a == 'KORNAKH') {
                let res = possibilites[2];
                message.channel.send(res[0], {
                    file : res[1]
                  });
          } else if ( a == 'GAEL' || a == 'ZORG') {
                let res = possibilites[3];
                message.channel.send(res[0], {
                    file : res[1]
                  });
          } else if ( a == 'ELIO' || a == 'SINISTAG') {
                let res = possibilites[4];
                message.channel.send(res[0], {
                    file : res[1]
                  });
          }  else if ( a == 'OHAYO' || a == 'KONNICHIWA' || a == 'KONBAWA') {
                let res = possibilites[5];
                message.channel.send(res[0], {
                    file : res[1]
                  });
          } else if ( a == 'EZ' || a == 'SIMPLE' || a == 'BASIQUE') {
                let res = possibilites[6];
                message.channel.send(res[0], {
                    file : res[1]
                  });
          } else {
             let alea = parseInt(Math.random() * 7);
             let res = possibilites[alea];
             message.channel.send(res[0], {
                file : res[1]
              });
          }
      }

    },
};
