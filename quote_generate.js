function generate(){
    var quotes = {
       " ― Jules Renard": ' “The truly free man is the one who can turn down an invitation to dinner without giving an excuse.” ',

       "― Pierce Brown": ' “Man cannot be freed by the same injustice that enslaved it.”',

       " ― C.S. Lewis": ' “I was not born to be free---I was born to adore and obey.” ',

       " ― John Galsworthy " : ' “Life calls the tune, we dance.”' ,

       " ― Nenia Campbell" : ' “You want to be free. You also want to be mine. You canot be both.”' , 

       "-Johann Wolfgang von Goethe " : ' “None are more hopelessly enslaved than those who falsely believe they are free.” ' ,

       " -Bob Dylan" : ' “No one is free, even the birds are chained to the sky.” ' ,

       " -Charles Evans Hughes " : '  “When we lose the right to be different, we lose the privilege to be free.” ' 





 
    }
    //collection of all the authors as an arrray
    var authors = Object.keys(quotes);

    //getting each  author index randomly
    var author = authors[Math.floor(Math.random()*authors.length)];

     //quote of the author index from the object quotes
    var quote = quotes[author]
     document.getElementById("orgquote").innerHTML = quote;

     document.getElementById("orgauthor").innerHTML = author;


}