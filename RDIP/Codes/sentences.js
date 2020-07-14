function display()
{
    document.getElementById("d1").innerHTML = "";                                                      
    document.getElementById("check").innerHTML = "";                                                    
    document.getElementById("reform").innerHTML = "";                                                    
    document.getElementById("created_sentence").innerHTML = "";                                               
    document.getElementById("bee").innerHTML = ""; 
                                                       
    for (var k = 0; k < 10; k++) {
        document.getElementById(k).value = " ";                                                          
    }
    count = 0;
    if (document.getElementById("language").value == "English")
    {
        answers="";
        finalsentence="";
        document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";

        var text = '{"eng1":[' +
            '{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},' +
            '{"a":"John and Mary went to church","b":"Mary and John went to church"},' +
            '{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},' +
            '{"a":"did he go to market","b":"he did go to market"},'+
            '{"a":"some students like to study in the night","b":"at night some students like to study"},' +
            '{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},' +
            '{"a":"John goes to the library and studies","b":"John studies and goes to the library"},' +
            '{"a":"John ate an apple so did she","b":"she ate an apple so did John"},' +
            '{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":" after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},' +
            '{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]}';
            var x = Math.floor(Math.random() * 9);
            obj = JSON.parse(text);
            var t = obj.eng1[x].a;
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

        else if (document.getElementById("language").value === "Hindi")
        {
            answers="";
        finalsentence="";
            document.getElementById("dis_sen").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
            document.getElementById("dis_sub").innerHTML = "(select the buttons in proper order)";
    
            var hin = '{"hin1":[' +
                '{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार ","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},' +
                '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},' +
                '{"a":"मैंने उसे बताया कि राम सो रहा है","b":" मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},' +
                '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},' +
                '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":" मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},' +
                '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},' +
                '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}';
    
            var x = Math.floor(Math.random() * 6);
            obj = JSON.parse(hin);
            var t = obj.hin1[x].a;
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
        document.getElementById("d1").value += u ;
        document.getElementById("d1").innerHTML +=u+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
        document.getElementById(k).innerHTML = " ";
        document.getElementById("created_sentence").innerHTML = "created Sentence";
        document.getElementById("bee").innerHTML = " (after selecting the words): ";
        document.getElementById("reform").innerHTML = "<button>" + "Re-form the sentence" + "</button>";
        count++;
        var len = document.getElementById("created_sentence").value;
        if (count === len) {
        document.getElementById("check").innerHTML ="<center><button id='correctness'  onclick='compares()'>Check the correctness</button></center>"
    }
    }
function reformsen() 
    {
        count=0;
        document.getElementById("d1").innerHTML = " ";
        document.getElementById("created_sentence").innerHTML = " ";
        document.getElementById("bee").innerHTML = " ";
        document.getElementById("reform").innerHTML = " ";
        document.getElementById("check").innerHTML = "";
        for (var i = 0; i < 10; i++)
        {
            var a = document.getElementById(i).value
            if (a != "") {
                document.getElementById(i).innerHTML = "<button>" + a + "</button>";
            }
        }
    
    } 
    var answers="";
    function compares(){

        var str= document.getElementById("created_sentence").value;
        str2=str.trim();
    for(let i=0;i<comarray.length;i++){
        var str1 = comarray[i];
         console.log(i, str1.localeCompare(str2), str2, str2.length, str1, str1.length)
        var n = str1.localeCompare(str2);
        if (n == 0) {
            document.getElementById("d3").innerHTML = "RIGHT";

            return;
        }
    }
    document.getElementById("d4").innerHTML = "WRONG";

}