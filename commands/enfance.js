module.exports = {
    name: 'enfance',
    aliases: ['wtfg', 'wtfgif', 'wtf'],
    usage: ``,
    description: `merci l\'Internet.`,
    execute(message, args) {
      let alea = parseInt(Math.random() * 22);
      
    	let possibilites = [['Level up!',`https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/0.gif`]];
    	possibilites.push(['C\'est donc à ça que les jambes servent ... ', 
                           'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/1.gif']);      
    	possibilites.push(['Miam! ...', 'https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/2.gif']);
    	possibilites.push(['I\'m so high man','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/3.gif']);
    	possibilites.push(['Fin de l\'histoire!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/4.gif']);
    	possibilites.push(['Et paf, ça fait des chocapics!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/5.gif']);
    	possibilites.push(['Wiishhhh','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/6.gif']);
    	possibilites.push(['...','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/7.gif']);
    	possibilites.push(['N\'oubliez pas, le sommeil oui, mais avec modération.','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/8.gif']);
    	possibilites.push(['Et après on s\'étonne de faire des rêves bizarres...','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/9.gif']);
    	possibilites.push(['Un smecta?','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/10.gif']);
    	possibilites.push(['Heu...','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/11.gif']);
    	possibilites.push(['Bah quoi?','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/12.gif']);
    	possibilites.push(['So beautiful !','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/13.gif']);
    	possibilites.push(['Smoutch','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/14.gif']);
    	possibilites.push(['Je sais pas ... D:','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/15.gif']);
    	possibilites.push(['Hihihi','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/16.gif']);
    	possibilites.push(['Shake shake shake !','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/17.gif']);
    	possibilites.push(['T\'en a trop pris!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/18.gif']);
    	possibilites.push(['Fin de l\'histoire (bis)!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/19.gif']);
    	possibilites.push(['Hoooooooo !!!','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/20.gif']);
        possibilites.push(['des truites.','https://raw.githubusercontent.com/Krysthalia/aiko-proto/master/img/enfance.jpg']);

        let res = possibilites[alea];
      message.channel.send(res[0], {
              file : res[1]
          });

      },
};
