module.exports = {
    name: 'gif',
    usage: `<lea> | <nicolas> | <gael> | <elio> | <ohayo> | <ez>`,
    description: `Affiche le gif choisis en paramètre, ou un aléatoirement.`,
    execute(message, args) {
      
    	let possibilites = [['N\'est elle pas mignonne?',`https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/Léa.gif`]];
    	possibilites.push(['C\'est donc à ça que les jambes servent ... ', 
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/1.gif']);      
    	possibilites.push(['De toute manière il n\'aime que l\'elixir...', 'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/TrioWork.gif']);
    	possibilites.push(['En cas de problème: appeler Gaël.','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/TrioWork.gif']);
    	possibilites.push(['Quand il est pas en cours il code. Il code souvent.','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/TrioWork.gif']);
    	possibilites.push([':D','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/ohayo.gif']);
    	possibilites.push(['C\'était trop simple!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/ez.gif']);

          
      if (args.size < 1) {
         let alea = parseInt(Math.random() * 6);
         let res = possibilites[alea];
         message.channel.send(res[0], {
            file : res[1]
          });
      } else {
          message.channel.send(args[0]);
      }

    },
};
