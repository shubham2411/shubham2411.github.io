var Commentaries = React.createClass({displayName: "Commentaries",
  getInitialState: function(){
    return {
      rows : this.props.rows
    };

  },
  componentDidMount: function(){
    var self = this;
    console.log(this.state.rows);
    var row=this.state.rows;
    if (undefined != row){
      var url = self.props.url;
      $.ajax({
        url: url,
        success:function(data) {
          self.setState({
            rows: data.commentaries,
            ScoreBoard: true,
            commentary: false,
            stats: false
          });
        }
      });
   }else{
     console.log("in did");
   }
  },
  render: function(){
    var self=this;
    var keys=[];
    var ids=[];
    var sorted = [];
    var rows = this.state.rows.map(function(row){
      var nextComment = row.comm_commentaries.comment;
      for(var k in nextComment){
        if (nextComment.hasOwnProperty(k))
       {
        keys.push(k);
       }
      }
    var c=keys.length;
    for(i=1;i<=c;i++){
          ids.push(nextComment[i.toString()].id);
        }


        Object.keys(nextComment).sort(function(a,b){
            return nextComment[a].id < nextComment[b].id ? -1 : 1
        }).forEach(function(key){
            sorted.push(nextComment[key]);
        });
        sorted.reverse();

    });

   var comments = sorted.map(function(oneComment){

       return (
       React.createElement("div", null, 
       React.createElement("div", {style: self.outerDiv}, 
       React.createElement("div", {style: self.innerDiv}, React.createElement("b", null, oneComment.minute), " - ", oneComment.comment), 
       React.createElement("hr", null)
       )
       )
       );
     });



    return (
      React.createElement("div", {style: self.one}, 
      comments
      )
    );
  },
  one: {
    position: 'absolute',
    top: '330px'
  },
  outerDiv: {
    position: 'relative',
    left:'350px',
    width:'800px'
  },
  innerDiv: {
  fontSize:'16px'
  }
});
