      Parse.initialize("K01Op0Qn3IWAjMOyguYrlkOg7HxzHiSn0JP31sIt", "vCoLgj60axmnn70AVJmL75JKDHx0sZALYGzzDFQx");
 

      var Questions = Parse.Object.extend("Questions");
      var Events = Parse.Object.extend("Events");
      var Talks = Parse.Object.extend("Talks");
      var innerQuery = new Parse.Query(Events);

    function getQuestions(){
      var query = new Parse.Query(Questions);

                query.equalTo("active", true);
                var d = new Date();
                var d1 = new Date(d - 1000 * 60 * 60 * 24 * 50);
                query.greaterThan("createdAt",d1);
                query.descending("createdAt");
                query.include("questioning");
                query.include("talk");


                query.find({

        success: function (results){
          var output = "";
            for (var i in results){
                var talk = results[i].get("talk");
                var title = talk.get("title");
                var question = results[i].get("question");
                var questioning = results[i].get("questioning");
                var full_name = questioning.get("full_name");
                var email = questioning.get("email");

                output += "<tr><td>"+question+"</td>";
                output += "<td>"+full_name+"</td>";
                output += "<td>"+email+"</td>";
                output += "<td>"+title+"</td></tr>";
                
            }
            $("#questions-parse").html(output);
        }, error: function (error){
            console.log("Query Error:"+error.message);
        }
      });
    }


    getQuestions();
