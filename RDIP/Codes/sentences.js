var text = '{"eng1":[' +
            '{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
            '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
            '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
            '{"a":"did he go to market","b":"he did go to market"},' +
            '{"a":"some students like to study in the night","b":"in the night some students like to study"},' +
            '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
            '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},' +
            '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
            '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
            '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';

var hin = '{"hin1":[' + '{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार ","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},' +
                '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},' +
                '{"a":"मैंने उसे बताया कि राम सो रहा है","b":" मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},' +
                '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},' +
                '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":" मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
                '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},' +
                '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';
    
function display()
{
    document.getElementById("getthecorrectsen").innerHTML = ""; 
    document.getElementById("answers").innerHTML = ""; 
    document.getElementById("d1").innerHTML = ""; 
    document.getElementById("d1").value = ""; 
    document.getElementById("rightanswer").innerHTML = ""; 
    document.getElementById("wronganswer").innerHTML = "";                                                      
    document.getElementById("check").innerHTML = "";                                                    
    document.getElementById("reform").innerHTML = "";                                                    
    document.getElementById("created_sentence").innerHTML = "";                                               
    document.getElementById("bee").innerHTML = ""; 
    document.getElementById("hide").innerHTML = ""; 
                                                      
    for (var k = 0; k < 10; k++) {
        document.getElementById(k).value = " ";                                                          
    }
    count = 0;
    if (document.getElementById("language").value == "English")
    {
        
        document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";
            var x = Math.floor(Math.random() * 10);
            obj = JSON.parse(text);
            var t = obj.eng1[x].a;
            document.getElementById("remo").value = x;
            var q = t.split(" ");
            document.getElementById("created_sentence").value = q.length;
            var b = [];
            var i = 0;
            do {
                var x = Math.floor(Math.random() * q.length)
                if (b.includes(x) == false) {
                    b.push(x);
                }
                i++;
            }
            while (q.length != b.length);
            for (var k = 0; k < q.length; k++) {
                document.getElementById(k).value = q[b[k]];
                document.getElementById(k).innerHTML = "<button>" + q[b[k]] + "</button>"
            }
            for (var j = q.length; j < 10; j++) {
                document.getElementById(j).innerHTML =" ";
            }
        }

        else 
        {
            
            document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";
            var x = Math.floor(Math.random() * 7);
            obj = JSON.parse(hin);
            var t = obj.hin1[x].a;
            document.getElementById("remo").value = x;
            var q = t.split(" ");
            document.getElementById("created_sentence").value = q.length;
            var b = [];
            var i = 0;
            do {
                var x = Math.floor(Math.random() * q.length)
                if (b.includes(x) == false)
                {
                    b.push(x);
                }
                i++;
            }
            while (q.length != b.length);
            for (var k = 0; k < q.length; k++)
            {
                document.getElementById(k).value = q[b[k]];
                document.getElementById(k).innerHTML = "<button>" + q[b[k]] + "</button>"
            }
            for (var j = q.length; j < 10; j++) {
                document.getElementById(j).innerHTML =" ";
            }
        }

    }
    var count=0;
function newsentence(k)
    {
        var u = document.getElementById(k).value
        document.getElementById("d2").value += u+"" ;
        document.getElementById("d1").innerHTML +=u+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
        document.getElementById(k).innerHTML = " ";
        document.getElementById("created_sentence").innerHTML = "created Sentence";
        document.getElementById("bee").innerHTML = " (after selecting the words): ";
        document.getElementById("reform").innerHTML = "<button>" + "Re-form the sentence" + "</button>";
        count++;
        var len = document.getElementById("created_sentence").value;
        if (count === len) {
            document.getElementById("check").innerHTML = "<button>" + "Check the correctness of this sentence" + "</button>";
    }
    }
function reformsen() 
    {
        count=0;
        document.getElementById("answers").innerHTML = "";
        document.getElementById("d1").innerHTML = " ";
        document.getElementById("d2").innerHTML = " ";
        document.getElementById("rightanswer").innerHTML = " ";
        document.getElementById("wronganswer").innerHTML = " ";
        document.getElementById("created_sentence").innerHTML = " ";
        document.getElementById("bee").innerHTML = " ";
        document.getElementById("reform").innerHTML = " ";
        document.getElementById("check").innerHTML = "";
        document.getElementById("getthecorrectsen").innerHTML = "";
        document.getElementById("hide").innerHTML = "";
        for (var i = 0; i < 10; i++)
        {
            var a = document.getElementById(i).value
            if (a != "") {
                document.getElementById(i).innerHTML = "<button>" + a + "</button>";
            }
        }
    
    } 
   
 function compares(){
        if (document.getElementById("language").value == "English") {
            var z = document.getElementById("remo").value;
            var d = document.getElementById("d2").value;
            d = d.trim();
            if (d == obj.eng1[z].a ||  d== obj.eng1[z].b || d == obj.eng1[z].c || d == obj.eng1[z].d || d == obj.eng1[z].e || d == obj.eng1[z].f || d == obj.eng1[z].g || d == obj.eng1[z].h)
                document.getElementById("rightanswer").innerHTML = "Right answer!!!";
            else {
                document.getElementById("wronganswer").innerHTML = "Wrong answer!!!";
                document.getElementById("getthecorrectsen").innerHTML = "<button>" + "Get Correct Sentence" + "</button>";
            }
        }
        else {
            var z = document.getElementById("remo").value;
            var d = document.getElementById("d2").value;
            d = d.trim();
            if (d == obj.hin1[z].a || d == obj.hin1[z].b || d == obj.hin1[z].c || d == obj.hin1[z].d || d == obj.hin1[z].e || d == obj.hin1[z].f || d == obj.hin1[z].g || d == obj.hin1[z].h || d == obj.hin1[z].i || d == obj.hin1[z].j || d == obj.hin1[z].k || d == obj.hin1[z].l)
    
                document.getElementById("rightanswer").innerHTML = "Right answer!!!";
    
            else
            {
                document.getElementById("wronganswer").innerHTML = "Wrong answer!!!";
                document.getElementById("getthecorrectsen").innerHTML = "<button>" + "Get Correct Sentence " + "</button>";
            }
        }
    
    }
    function getanswer() {

        if (document.getElementById("language").value == "English") {
            var n = document.getElementById("remo").value;
            document.getElementById("getthecorrectsen").innerHTML = " ";
            document.getElementById("hide").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";
    
    
            switch (n) {
                case 0: document.getElementById("answers").innerHTML = obj.eng1[0].a + "<br>" + obj.eng1[0].b + "<br>" + obj.eng1[0].c; break;
                case 1: document.getElementById("answers").innerHTML = obj.eng1[1].a + "<br>" + obj.eng1[1].b; break;
                case 2: document.getElementById("answers").innerHTML = obj.eng1[2].a + "<br>" + obj.eng1[0].b + "<br>" + obj.eng1[0].c; break;
                case 3: document.getElementById("answers").innerHTML = obj.eng1[3].a + "<br>" + obj.eng1[3].b; break;
                case 4: document.getElementById("answers").innerHTML = obj.eng1[4].a + "<br>" + obj.eng1[4].b; break;
                case 5: document.getElementById("answers").innerHTML = obj.eng1[5].a + "<br>" + obj.eng1[5].b + "<br>" + obj.eng1[5].c + "<br>" + obj.eng1[5].d; break;
                case 6: document.getElementById("answers").innerHTML = obj.eng1[6].a + "<br>" + obj.eng1[6].b; break;
                case 7: document.getElementById("answers").innerHTML = obj.eng1[7].a + "<br>" + obj.eng1[7].b; break;
                case 8: document.getElementById("answers").innerHTML = obj.eng1[8].a + "<br>" + obj.eng1[8].b + "<br>" + obj.eng1[8].c + "<br>" + obj.eng1[8].d + "<br>" + obj.eng1[8].e + "<br>" + obj.eng1[8].f + "<br>" + obj.eng1[8].g + "<br>" + obj.eng1[8].h; break;
                case 9: document.getElementById("answers").innerHTML = obj.eng1[9].a + "<br>" + obj.eng1[9].b + "<br>" + obj.eng1[9].c + "<br>" + obj.eng1[9].d + "<br>" + obj.eng1[9].e + "<br>" + obj.eng1[9].f; break;
    
            }
        }
        else {
            var n = document.getElementById("remo").value;
            document.getElementById("getthecorrectsen").innerHTML = " ";
            document.getElementById("hide").innerHTML = "<button>" + "Hide the correct sentence " + "</button>";
    
            switch (n) {
                case 0: document.getElementById("answers").innerHTML = obj.hin1[0].a + "<br>" + obj.hin1[0].b + "<br>" + obj.hin1[0].c + "<br>" + obj.hin1[0].d; break;
                case 1: document.getElementById("answers").innerHTML = obj.hin1[1].a + "<br>" + obj.hin1[1].b + "<br>" + obj.hin1[1].c + "<br>" + obj.hin1[1].d; break;
                case 2: document.getElementById("answers").innerHTML = obj.hin1[2].a + "<br>" + obj.hin1[2].b + "<br>" + obj.hin1[2].c + "<br>" + obj.hin1[2].d + "<br>" + obj.hin1[2].e + "<br>" + obj.hin1[2].f + "<br>" + obj.hin1[2].g + "<br>" + obj.hin1[2].h + "<br>" + obj.hin1[2].i + "<br>" + obj.hin1[2].j + "<br>" + obj.hin1[2].k + "<br>" + obj.hin1[2].l; break;
                case 3: document.getElementById("answers").innerHTML = obj.hin1[3].a + "<br>" + obj.hin1[3].b + "<br>" + obj.hin1[3].c + "<br>" + obj.hin1[3].d + "<br>" + obj.hin1[3].e + "<br>" + obj.hin1[3].f; break;
                case 4: document.getElementById("answers").innerHTML = obj.hin1[4].a + "<br>" + obj.hin1[4].b + "<br>" + obj.hin1[4].c + "<br>" + obj.hin1[4].d + "<br>" + obj.hin1[4].e + "<br>" + obj.hin1[4].f + "<br>" + obj.hin1[4].g + "<br>" + obj.hin1[4].h; break;
                case 5: document.getElementById("answers").innerHTML = obj.hin1[5].a + "<br>" + obj.hin1[5].b + "<br>" + obj.hin1[5].c + "<br>" + obj.hin1[5].d; break;
                case 6: document.getElementById("answers").innerHTML = obj.hin1[6].a + "<br>" + obj.hin1[6].b + "<br>" + obj.hin1[6].c + "<br>" + obj.hin1[6].d + "<br>" + obj.hin1[6].e + "<br>" + obj.hin1[6].f + "<br>" + obj.hin1[6].g + "<br>" + obj.hin1[6].h; break;
    
            }
        }  
    }
    function hideanswer()
    {
    
        document.getElementById("getthecorrectsen").innerHTML = "<button>" + "Get Answers " + "</button>";
        document.getElementById("answers").innerHTML = " ";
        document.getElementById("hide").innerHTML = " ";
    } 