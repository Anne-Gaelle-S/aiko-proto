module.exports = {
    name: 'enfance',
    aliases: ['wtfg', 'wtfgif', 'wtf'],
    usage: ``,
    description: `merci l\'Internet.`,
    execute(message, args) {
      let alea = parseInt(Math.random() * 5);
      
    	let possibilites = [['Level up!',`https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/0.gif`]];
    	possibilites.push(['C\'est donc à ça que les jambes servent ... ', 
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/1.gif']);      
    	possibilites.push(['Miam! ...', 'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/2.gif']);
    	possibilites.push(['I\'m so high man','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/3.gif']);
    	possibilites.push(['Fin de l\'histoire!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/4.gif']);

        let res = possibilites[alea];
      message.channel.send(res[0], {
              file : res[1]
          });

      },
};
