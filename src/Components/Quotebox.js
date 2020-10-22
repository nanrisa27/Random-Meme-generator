import React, { Component } from 'react';
import "../Styles/styles.scss";

class Quotebox extends Component {
    constructor(props){
        super(props);
        this.state={
            quoteText:"",
            quoteAuthor:"",
            curColor:this.props.color,
            tweetUrl:"https://twitter.com/intent/tweet/?text-"
        }
        this.getNewQuote();
         // Bind handles and functions
    this.getNewQuote=this.getNewQuote.bind(this);
    this.handleNewQuote=this.handleNewQuote.bind(this);
    }
   
    // Get a quote and Author from API and state
     
     getNewQuote(){const app=this;
     fetch("https://type.fit/api/quotes")
     .then((response)=> response.json())
     .then((data)=>{
         const index=Math.floor(Math.random()* data.length);
         app.setState({
             quoteText:data[index].text,
             quoteAuthor:data[index].author,
             tweetUrl:"https://twitter.com/intent/tweet/?text-" + data[index].text.replace(/ /g,"+")
         });
         
     });
     
     
     }
      handleNewQuote(){
          const colors=["gray","blue","purple","green","red"];
          let color= colors[Math.floor(Math.random()* colors.length)];
          while(color===this.state.color){
              color= color= colors[Math.floor(Math.random()* colors.length)];
          }

          this.props.onChangeAppColor("red");
         this.getNewQuote();
     }
    render() {
        
        return (
            <div className="quote-box">
            <div className="quote-content">
             <div className="text">{this.state.quoteText}</div>
             <div className="author">{this.state.quoteAuthor}</div>
            </div>
             <a  id ="tweet-quote"href={this.state.tweetUrl}> share on Twitter</a>
             <button onClick={this.handleNewQuote} id="get-new-quote" target="_blank">Get Quote</button>

           
                
            </div>
        );
    }
}

export default Quotebox;
