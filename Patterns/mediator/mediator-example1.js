//Ref: http://www.dofactory.com/javascript/mediator-design-pattern

var Participant = function(name) {
  this.name = name;
  this.chatroom = null;
};

Participant.prototype = {
  send : function(message, to) {
    this.chatroom.send(message, this,  to);
  },
  receive : function(message, from) {
//     this.chatroom.receive(message, this, from);
    log.add('2 '+this.name+' : @'+from.name+' says:'+message+"\r\n");
  }
};

var Chatroom = function() {

  var participants = {};

  return {
      register: function(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
      },

      send : function(message, from, to) {
        if (to) {
          to.receive(message, from);
        } else {
          for (var key in participants) {
              participants[key].receive(message, from);
          }
        }
      }

  };

};

  var log = (function(){
      var log = '';

      return {
        add : function(message) {
          log += message;
        },
        show : function() {
          alert(log);
          return log;
        }
      };
  })();


  var yoko = new Participant("yoko");
  var ono = new Participant("ono");

var room = new Chatroom();
room.register(yoko);
room.register(ono);

yoko.send("Hey", ono);
ono.send("Sup");
log.show();
