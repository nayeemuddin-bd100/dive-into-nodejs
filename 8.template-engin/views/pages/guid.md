    <h1>Title: <%= title %></h1>
    <!-- comment2-> uporer title ta o amra dynamic data hishebe use korte pari mane title take chaile amra variable hishebe use korte pari . ei variable ta ashbe app.js tekee jekane render korsi sekane teke parametr hishebe patate pari .. ete kore render er porobotti parameter guloo dynamic data hishebe ekane ashbee! -->
    <h1>Ejs is an awesome template engine</h1>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
      delectus?
    </p>

    <!-- comment1 -> dynamic data niye kaj korar jonno amader <%= %> ei tag use korte hoi . ekhnaee new Date ekta dynamic data ja js er code eta boshanoor jonno amra ei tag ta use korlam .
    -->
    <%= new Date().toString() %>

    <!-- Condition in ejs -->

    <!-- ekhane post akare je object ta ashbe setar upor vitti kore ekta post show korate chassi ei jonno js e amra script tag use kortam bt ekane script tag kaj korbena karon script tag only for frontend. script tag sudumatro browser e kaj korbe server e kaj korbe na-->

    <!-- jokon amra kono logical code likbo ja browser e show korabonooo ei doroner code guloo <%  %> ei tag eer modde likte hobe . r jokon show korabooo tkn <%=  %> ei tag use korte hobe  -->

    <% if(post.published) { %>
    <h3>Title: <%= post.title %></h3>
    <p>Body : <%= post.body %></p>
    <% } else { %>
    <h2>Post is not published</h2>
    <% } %>

    <!-- ekhane if condition ta jehetu browser e show koorabo nah tai etake <%  %> ei tag er modde liklaam. abr post and body er dynamic data gulo jehetu show korabooo tai etake <%=  %> ei tag er modde liklaam. arekta rules hosse kono curly braces open and close koorte hoi <% %> ei tag gulor maddome .
        orthat <%= { %> Text body <% } %>

    if else er ejs er template ta hosse erokom
        <% if (condition) { %>
            <h2> data </h2>
            <% } else { %>
                <h2>data</h2>
        <% } %>



    -->



    ## For loop syntax

        <% for( let i = 0; i < array.length; i++ ) { %>

        <% } %>
