class Quiz {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
      
    }
  }

  play(){
    
    //write code to change the background color here
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    this.title2 = createElement('h3');
    this.title2.html("RESULTS OF THE QUIZ");
    this.title2.position(350,0)

    //call getContestantInfo( ) here
  Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if( allContestants !==undefined){
      fill("blue");
      textSize(15);
      text("**NOTE : CONTESTANTS WHO HAVE ANSWERED CORRECTLY ARE HIGHLIGHTED IN GREEN",50,350);

    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }else{
        fill("red")
      }
    }
  }

}
