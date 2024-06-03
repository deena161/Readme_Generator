
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('readmeForm');
    const output = document.getElementById('readmeContent');
    const copyButton = document.getElementById('copyButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        generateReadme();
    });

    copyButton.addEventListener('click', () => {
        copyToClipboard(output.innerHTML);
    });

    function generateReadme() {
        const name = document.getElementById('name').value.trim();
        const about = document.getElementById('about').value.trim();
        const introduction = document.getElementById('introduction').value.trim();
        const features = document.getElementById('features').value.trim();
        const installation = document.getElementById('installation').value.trim();
        const usage = document.getElementById('usage').value.trim();
        const contributing = document.getElementById('contributing').value.trim();
        const license = document.getElementById('license').value.trim();

        const skills = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

        const github = document.getElementById('github').value.trim();
        const linkedin = document.getElementById('linkedin').value.trim();
        const twitter = document.getElementById('twitter').value.trim();
        const hackerrank = document.getElementById('hackerrank').value.trim();
        const hackerearth = document.getElementById('hackerearth').value.trim();
        const leetcode = document.getElementById('leetcode').value.trim();
        const codechef = document.getElementById('codechef').value.trim();
        const geeksforgeeks = document.getElementById('geeksforgeeks').value.trim();
        const stackoverflow = document.getElementById('stackoverflow').value.trim();
        const codepen = document.getElementById('codepen').value.trim();
        const kaggle = document.getElementById('kaggle').value.trim();
        const youtube = document.getElementById('youtube').value.trim();
        const image1 = document.getElementById('image1').value.trim();
        const image2 = document.getElementById('image2').value.trim();
        const image3 = document.getElementById('image3').value.trim();
        const video = document.getElementById('video').value.trim();

        let readmeContent = `<font face="Verdana, Geneva, Tahoma, sans-serif">\n<h1 align="center"><i>Hi 👋, I'm ${name}</i></h1> \n</font>\n`;
        readmeContent+=`<h2>About</h2>\n`;
        readmeContent+=`<p>${about}</p>\n`;

        if (introduction) {
            readmeContent += `<hr>`
            readmeContent += `<br> \n<h2 style="font-weight: bold;">&nbsp; About Project</h2>\n`;
            readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; Introduction:</h3>\n`
            readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔎 ${introduction}</p>\n`;
       
              if (features) {
                  readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; Features:</h3>\n`
                  readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🌟 ${features}</p>\n`;
              }
              if (installation) {
                  readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; Installation:</h3>\n`
                  readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⬇️ ${installation}</p>\n`;
              }
              if (usage) {
                  readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; Usage:</h3>\n`
                  readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✅ ${usage}</p>\n`;
              }
              if (contributing) {
                  readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; Contributing:</h3>\n`
                  readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📌 ${contributing}</p>\n`;
              }
              if (license) {
                  readmeContent+=`<h3>&nbsp;&nbsp;&nbsp; License:</h3>\n`
                  readmeContent += `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🌐 ${license}</p>\n`;
              }
      }

////////////////////////////////////////////////////////////////////////////


        if (skills.length > 0) {
            readmeContent += `\n<h2>Skills</h2>\n`;
            skills.forEach(skill => {
                if(skill=="C")
                readmeContent += `<a href="https://devdocs.io/c/" target="_blank" cursor: pointer;><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" width="50px" height="50px" title="C"></a>\n`;

                if(skill=="C++")
                readmeContent += `<a href="https://devdocs.io/cpp/" target="_blank" cursor: pointer;><img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="50px" height="50px" title="C++"></a>\n`;

                if(skill=="Csharp")
                readmeContent += `<a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="Csharp" width="50px" height="50px" title="Csharp"></a>\n`;

                if(skill=="go")
                readmeContent += `<a href="https://go.dev/doc/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go" width="50px" height="50px" title="go"></a>\n`;

                if(skill=="Java")
                readmeContent += `<a href="https://docs.oracle.com/en/java/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="50px" height="50px" title="Java"></a>\n`;

                if(skill=="Java Script")
                readmeContent += `<a href="https://devdocs.io/javascript/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Java Script" width="50px" height="50px" title="Java Script"></a>\n`;

                if(skill=="Type Script")
                readmeContent += `<a href="https://www.typescriptlang.org/docs/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="Type Script" width="50px" height="50px" title="Type Script"></a>\n`;

                if(skill=="php")
                readmeContent += `<a href="https://www.php.net/docs.php" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="50px" height="50px" title="php"></a>\n`;

                if(skill=="Perl")
                readmeContent += `<a href="https://perldoc.perl.org/" target="_blank" cursor: pointer;><img src="https://api.iconify.design/logos-perl.svg" alt="Perl" width="50px" height="50px" title="Perl"></a>\n`;

                if(skill=="Ruby")
                readmeContent += `<a href="https://www.ruby-lang.org/en/documentation/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="Ruby" width="50px" height="50px" title="Ruby"></a>\n`;

                if(skill=="Scala")
                readmeContent += `<a href="https://docs.scala-lang.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg" alt="Scala" width="50px" height="50px" title="Scala"></a>\n`;

                if(skill=="Python")
                readmeContent += `<a href="https://www.python.org/doc/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="50px" height="50px" title="Python"></a>\n`;

                if(skill=="Swift")
                readmeContent += `<a href="https://www.swift.org/documentation/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" alt="Swift" width="50px" height="50px" title="Swift"></a>\n`;

                if(skill=="Objectivec")
                readmeContent += `<a href="#" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg" alt="Objectivec" width="50px" height="50px" title="Objectivec"></a>\n`;

                if(skill=="Clojure")
                readmeContent += `<a href="https://clojure-doc.org/" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" alt="Clojure" width="50px" height="50px" title="Clojure"></a>\n`;

                if(skill=="Haskell")
                readmeContent += `<a href="https://www.haskell.org/documentation/" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" alt="Haskell" width="50px" height="50px" title="Haskell"></a>\n`;

                if(skill=="Coffeescript")
                readmeContent += `<a href="https://coffeescript.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg" alt="Coffeescript" width="50px" height="50px" title="Coffeescript"></a>\n`;

                if(skill=="Elixir")
                readmeContent += `<a href="https://elixir-lang.org/docs.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg" alt="Elixir" width="50px" height="50px" title="Elixir"></a>\n`;

                if(skill=="Erlang")
                readmeContent += `<a href="https://www.erlang.org/docs" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/erlang/erlang-official.svg" alt="Erlang" width="50px" height="50px" title="Erlang"></a>\n`;

                if(skill=="Nim")
                readmeContent += `<a href="https://nim-lang.org/documentation.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg" alt="Nim" width="50px" height="50px" title="Nim"></a>\n`;

                if(skill=="Vuejs")
                readmeContent += `<a href="https://vuejs.org/guide/introduction.html" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="Vuejs" width="50px" height="50px" title="Vuejs"></a>\n`;

                if(skill=="React")
                readmeContent += `<a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="50px" height="50px" title="React"></a>\n`;

                if(skill=="Svelte")
                readmeContent += `<a href="https://svelte.dev/docs/introduction" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte" width="50px" height="50px" title="Svelte"></a>\n`;

                if(skill=="AngularJs")
                readmeContent += `<a href="https://docs.angularjs.org/guide" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" alt="AngularJs" width="50px" height="50px" title="AngularJs"></a>\n`;

                if(skill=="Angular")
                readmeContent += `<a href="https://v17.angular.io/docs" target="_blank" cursor: pointer;><img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="50px" height="50px" title="Angular"></a>\n`;

                if(skill=="BackboneJs")
                readmeContent += `<a href="https://backbonejs.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg" alt="BackboneJs" width="50px" height="50px" title="BackboneJs"></a>\n`;

                if(skill=="Bootstrap")
                readmeContent += `<a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" width="50px" height="50px" title="Bootstrap"></a>\n`;

                if(skill=="Vuetify")
                readmeContent += `<a href="https://vuetifyjs.com/en/" target="_blank" cursor: pointer;><img src="https://bestofjs.org/logos/vuetify.svg" alt="Vuetify" width="50px" height="50px" title="Vuetify"></a>\n`;

                if(skill=="CSS3")
                readmeContent += `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" title="CSS3"></a>\n`;

                if(skill=="HTML5")
                readmeContent += `<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" title="HTML5"></a>\n`;

                if(skill=="Pug")
                readmeContent += `<a href="https://pugjs.org/api/getting-started.html" target="_blank" cursor: pointer;><img src="https://cdn.worldvectorlogo.com/logos/pug.svg" alt="Pug" width="50px" height="50px" title="Pug"></a>\n`;

                if(skill=="Gulp")
                readmeContent += `<a href="https://gulpjs.com/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="Gulp" width="50px" height="50px" title="Gulp"></a>\n`;

                if(skill=="Sass")
                readmeContent += `<a href="https://sass-lang.com/documentation/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="50px" height="50px" title="Sass"></a>\n`;

                if(skill=="Redux")
                readmeContent += `<a href="https://redux.js.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" width="50px" height="50px" title="Redux"></a>\n`;

                if(skill=="Webpack")
                readmeContent += `<a href="https://webpack.js.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="Webpack" width="50px" height="50px" title="Webpack"></a>\n`;

                if(skill=="Babel")
                readmeContent += `<a href="https://babeljs.io/docs/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="Babel" width="50px" height="50px" title="Babel"></a>\n`;
            
                if(skill=="Tailwind")
                readmeContent += `<a href="https://v2.tailwindcss.com/docs" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" width="50px" height="50px" title="Tailwind"></a>\n`;

                if(skill=="Materialize")
                readmeContent += `<a href="https://materializecss.com/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="Materialize" width="50px" height="50px" title="Materialize"></a>\n`;

                if(skill=="Bulma")
                readmeContent += `<a href="https://bulma.io/documentation/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="Bulma" width="50px" height="50px" title="Bulma"></a>\n`;

                if(skill=="GTK")
                readmeContent += `<a href="https://www.gtk.org/docs/" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" alt="GTK" width="50px" height="50px" title="GTK"></a>\n`;

                if(skill=="QT")
                readmeContent += `<a href="https://doc.qt.io/" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" alt="QT" width="50px" height="50px" title="QT"></a>\n`;

                if(skill=="WxWidgets")
                readmeContent += `<a href="https://docs.wxwidgets.org/3.2/" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg" alt="WxWidgets" width="50px" height="50px" title="WxWidgets"></a>\n`;

                if(skill=="Ember")
                readmeContent += `<a href="https://guides.emberjs.com/release/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg" alt="Ember" width="50px" height="50px" title="Ember"></a>\n`;

                if(skill=="node")
                readmeContent += `<a href="https://nodejs.org/en" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="node" width="50px" height="50px" title="node"></a>\n`;

                if(skill=="spring")
                readmeContent += `<a href="https://docs.spring.io/spring-boot/index.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="50px" height="50px" title="spring"></a>\n`;

                if(skill=="express")
                readmeContent += `<a href="https://expressjs.com/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50px" height="50px" title="express"></a>\n`;

                if(skill=="graphql")
                readmeContent += `<a href="https://graphql.org/learn/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="50px" height="50px" title="graphql"></a>\n`;

                if(skill=="kafka")
                readmeContent += `<a href="https://kafka.apache.org/documentation/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" alt="kafka" width="50px" height="50px" title="kafka"></a>\n`;

                if(skill=="solr")
                readmeContent += `<a href="https://solr.apache.org/guide/solr/latest/index.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg" alt="solr" width="50px" height="50px" title="solr"></a>\n`;

                if(skill=="rabbitmq")
                readmeContent += `<a href="https://www.rabbitmq.com/docs" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" alt="rabbitmq" width="50px" height="50px" title="rabbitmq"></a>\n`;

                if(skill=="handoop")
                readmeContent += `<a href="https://hadoop.apache.org/docs/stable/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" alt="handoop" width="50px" height="50px" title="handoop"></a>\n`;

                if(skill=="nginx")
                readmeContent += `<a href="https://nginx.org/en/docs/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="50px" height="50px" title="nginx"></a>\n`;

                if(skill=="openresty")
                readmeContent += `<a href="https://openresty.org/en/" target="_blank" cursor: pointer;><img src="https://openresty.org/images/logo.png" alt="openresty" width="50px" height="50px" title="openresty"></a>\n`;

                if(skill=="nest")
                readmeContent += `<a href="https://docs.nestjs.com/" target="_blank" cursor: pointer;><img src="https://svg-files.pixelied.com/9496f603-8e3d-4bee-a2a5-c83dac4c2f11/thumb-256px.png" alt="nest" width="50px" height="50px" title="nest"></a>\n`;

                if(skill=="android")
                readmeContent += `<a href="https://developer.android.com/develop" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="50px" height="50px" title="android"></a>\n`;

                if(skill=="flutter")
                readmeContent += `<a href="https://docs.flutter.dev/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="50px" height="50px" title="flutter"></a>\n`;

                if(skill=="dart")
                readmeContent += `<a href="https://dart.dev/guides" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="50px" height="50px" title="dart"></a>\n`;

                if(skill=="kotlin")
                readmeContent += `<a href="https://kotlinlang.org/docs/home.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="50px" height="50px" title="kotlin"></a>\n`;

                if(skill=="nativescript")
                readmeContent += `<a href="https://nativescript.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg" alt="nativescript" width="50px" height="50px" title="nativescript"></a>\n`;

                if(skill=="xamarin")
                readmeContent += `<a href="https://dotnet.microsoft.com/en-us/apps/xamarin" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg" alt="xamarin" width="50px" height="50px" title="xamarin"></a>\n`;

                if(skill=="ionic")
                readmeContent += `<a href="https://ionicframework.com/docs" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" alt="ionic" width="50px" height="50px" title="ionic"></a>\n`;

                if(skill=="apacheCordova")
                readmeContent += `<a href="https://cordova.apache.org/docs/en/12.x/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg" alt="apacheCordova" width="50px" height="50px" title="apacheCordova"></a>\n`;
            
                if(skill=="pandas")
                readmeContent += `<a href="https://pandas.pydata.org/docs/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="50px" height="50px" title="pandas"></a>\n`;

                if(skill=="opencv")
                readmeContent += `<a href="https://opencv.org/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width="50px" height="50px" title="opencv"></a>\n`;
            
            if(skill=="mongodb")
                readmeContent += `<a href="https://www.mongodb.com/lp/cloud/atlas/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general-phrase_prosp-brand_gic-null_ww-multi_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=11295578158&adgroup=116363205048&cq_cmp=11295578158&gad_source=1&gclid=Cj0KCQjw0_WyBhDMARIsAL1Vz8t0jyc0IF6AHPbNoVGXnhprkTbDrV4JV_4LMTXUcfUcWHvn3v9499QaAnCkEALw_wcB" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50px" height="50px" title="mongodb"></a>\n`;

            if(skill=="mysql")
            readmeContent += `<a href="https://dev.mysql.com/doc/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="50px" height="50px" title="mysql"></a>\n`;

            if(skill=="oracle")
            readmeContent += `<a href="https://docs.oracle.com/en/database/oracle/oracle-database/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="50px" height="50px" title="oracle"></a>\n`;

            if(skill=="grafana")
            readmeContent += `<a href="https://grafana.com/docs/grafana/latest/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" alt="grafana" width="50px" height="50px" title="grafana"></a>\n`;

            if(skill=="bash")
            readmeContent += `<a href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="50px" height="50px" title="bash"></a>\n`;

            if(skill=="firebase")
            readmeContent += `<a href="https://firebase.google.com/docs" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50px" height="50px" title="firebase"></a>\n`;

            if(skill=="django")
            readmeContent += `<a href="https://docs.djangoproject.com/en/5.0/" target="_blank" cursor: pointer;><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="50px" height="50px" title="django"></a>\n`;

            if(skill=="dotnet")
            readmeContent += `<a href="https://learn.microsoft.com/en-us/dotnet/framework/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="50px" height="50px" title="dotnet"></a>\n`;

            if(skill=="photoshop")
            readmeContent += `<a href="https://helpx.adobe.com/in/photoshop/user-guide.html" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="50px" height="50px" title="photoshop"></a>\n`;

            if(skill=="figma")
            readmeContent += `<a href="https://www.figma.com/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="50px" height="50px" title="figma"></a>\n`;

            if(skill=="matlab")
            readmeContent += `<a href="https://www.mathworks.com/products/matlab.html" target="_blank" cursor: pointer;><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="50px" height="50px" title="matlab"></a>\n`;

            if(skill=="postman")
            readmeContent += `<a href="https://www.postman.com/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50px" height="50px" title="postman"></a>\n`;

            if(skill=="unity")
            readmeContent += `<a href="https://unity.com/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="50px" height="50px" title="unity"></a>\n`;

            if(skill=="linux")
            readmeContent += `<a href="https://www.linux.org/" target="_blank" cursor: pointer;><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="50px" height="50px" title="linux"></a>\n`;

            if(skill=="git")
            readmeContent += `<a href="https://www.git-scm.com/" target="_blank" cursor: pointer;><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50px" height="50px" title="git"></a>\n`;

            if(skill=="arduino")
            readmeContent += `<a href="https://www.arduino.cc/" target="_blank" cursor: pointer;><img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="50px" height="50px" title="arduino"></a>\n`;
            
            });

            readmeContent += `\n`;
        }

////////////////////////////////////////////////////////////////////////////

        if (github || linkedin || twitter || hackerrank || hackerearth || leetcode || codechef || geeksforgeeks || stackoverflow || codepen || kaggle || youtube || image1 || image2 || image3 || video) {
            readmeContent += `<br><h2>Connect with me</h2>\n`;
            if (github) {
                readmeContent += `<a href="${github}" target="_blank" title="github"><img src="https://svg-files.pixelied.com/ea70474d-1e22-41b9-a02a-b9f6bed76476/thumb-256px.png" alt="Github" width="50px" height="50px"></a>\n`;
            }
            if (linkedin) {
                readmeContent += `<a href="${linkedin}" target="_blank" title="linkedin"><img src="https://svg-files.pixelied.com/b1c17127-d00c-4379-a303-ad3b36dafd11/thumb-256px.png" alt="linkedin" width="50px" height="50px"></a>\n`;
            }
            if (twitter) {
                readmeContent += `<a href="${twitter}" target="_blank" title="twitter"><img src="https://svg-files.pixelied.com/a8e1b468-846f-4104-8dac-082c8e5eb148/thumb-256px.png" alt="twitter" width="50px" height="50px"></a>\n`;
            }
            if (hackerrank) {
                readmeContent += `<a href="${hackerrank}" target="_blank" title="hackerrank"><img src="https://svg-files.pixelied.com/819d418a-8f63-49d6-8f43-8eee7d52ecbe/thumb-256px.png" alt="hackerrank" width="50px" height="50px"></a>\n`;
            }
            if (hackerearth) {
                readmeContent += `<a href="${hackerearth}" target="_blank" title="hackerearth"><img src="https://svg-files.pixelied.com/3c3b338b-aa94-4dda-b6f1-cc4562430b8d/thumb-256px.png" alt="hackerearth" width="50px" height="50px"></a>\n`;
            }
            if (leetcode) {
                readmeContent += `<a href="${leetcode}" target="_blank" title="leetcode"><img src="https://www.svgrepo.com/show/330828/leetcode.svg" alt="leetcode" width="50px" height="50px"></a>\n`;
            }
            if (codechef) {
                readmeContent += `<a href="${codechef}" target="_blank" title="codechef"><img src="https://svg-files.pixelied.com/0c007bf4-6427-4426-af7b-5922af9cbff7/thumb-256px.png" alt="codechef" width="50px" height="50px"></a>\n`;
            }
            if (geeksforgeeks) {
                readmeContent += `<a href="${geeksforgeeks}" target="_blank" title="geeksforgeeks"><img src="https://svg-files.pixelied.com/f1e69a82-add1-4a66-b441-9ddd9730d971/thumb-256px.png" alt="geeksforgeeks" width="50px" height="50px"></a>\n`;
            }
            if (stackoverflow) {
                readmeContent += `<a href="${stackoverflow}" target="_blank" title="stackoverflow"><img src="https://svg-files.pixelied.com/4b142e98-9485-4eb0-821b-233dec506ffa/thumb-256px.png" alt="stackoverflow" width="50px" height="50px"></a>\n`;
            }
            if (codepen) {
                readmeContent += `<a href="${codepen}" target="_blank" title="codepen"><img src="https://svg-files.pixelied.com/711a9dcb-14bc-412b-9732-ad1a60e8c51b/thumb-256px.png" alt="codepen" width="50px" height="50px"></a>\n`;
            }
            if (kaggle) {
                readmeContent += `<a href="${kaggle}" target="_blank" title="kaggle"><img src="https://svg-files.pixelied.com/9832db67-9471-4802-a230-7ba71150d443/thumb-256px.png" alt="kaggle" width="50px" height="50px"></a>\n`;
            }
            if (youtube) {
                readmeContent += `<a href="${youtube}" target="_blank" title="youtube"><img src="https://www.svgrepo.com/show/303271/youtube-2-logo.svg" alt="youtube" width="50px" height="50px"></a>\n`;
            }
            if (image1) {
                readmeContent +=`<br><h2>Images</h2>`;
                readmeContent += `<img src="${image1}" alt="image" width="300px" height="300px">\n`;
            }
            if (image2) {
                readmeContent += `<img src="${image2}" alt="image" width="300px" height="300px">\n`;
            }
            if (image3) {
                readmeContent += `<img src="${image3}" alt="image" width="300px" height="300px">\n`;
            }
            if(video){
                readmeContent +=`<br><h2>Video</h2>`;
                readmeContent += `👉🏼 <a href="${video}">Click here for demo Video</a>\n`;
            }
            

            readmeContent += `\n<br>`;
        }

        output.innerHTML = readmeContent;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('README content copied to clipboard!');
    }
});
