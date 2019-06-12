
        //-------------------variable-----------------------------------------------
        var answerKey = [31, 60, 30];
        var Question = ([
            ["What is 13 + 18?", "31", "21", "1", "5"],
            ["3 multiply by 20", 123, 235, 60, 34],
            ["6 multiply by 5", 34, 30, 78, 87]
        ]);
        var correct = 0;
        var incorrect = 0;
        var noAnswer = 0;
        var count = 30;
        var i = 0
        var j = 0
        //--------------primery variable-----------------------------------
        var CQ = $("<h3>");
        CQ.text("Total Question:" + answerKey.length)
        $(".header").append(CQ);
        var NA = $("<h3>");
        NA.text("No Answer:" + noAnswer)
        $(".header").append(NA);
        var CA = $("<h3>");
        CA.text("Correct Answer:" + correct);
        $(".header").append(CA);
        var IA = $("<h3>");
        IA.text("Incorrect Answer:" + incorrect);
        $(".header").append(IA);
        //-----------------------call function-----------------------------------
        var counter = setInterval(timer, 1000);
        lop(i, j);
        selectFunction();
        nextQ();
        i++;
        //---------------creat Question--------------------------------------------------------
        function lop(i, j) {
            var Q = $("<p>");
            Q.text(i + 1 + "." + Question[i][j]);
            $(".list-group").append(Q);
            for (j = 1; j <= 4;) {
                var N = $("<button>");
                N.addClass("k");
                N.text(Question[i][j]);
                N.val(answerKey[i]);
                $(".list-group").append(N);
                j++;
            }

        }
        //----------------selectFunction------------------------
        function selectFunction() {
            $(".k").on("click", function () {
                var a = $(this).text();
                var b = $(this).val();
                if (a === b) {
                    var C = $("<h4>");
                    C.text("Good Job");
                    $(".list-group").append(C);
                    correct++;
                    $(".list-group").empty();
                    lop(i, j);
                    selectFunction();
                    i++;
                    clearTimeout();
                    console.log(correct)
                }
                else {
                    var C = $("<h4>");
                    C.text(b);
                    $(".list-group").append(C);
                    incorrect++;
                    $(".list-group").empty();
                    lop(i, j);
                    selectFunction();
                    i++;
                    clearTimeout();
                    console.log(incorrect)
                }
                CA.text("Correct Answer:" + correct);
                IA.text("Incorrect Answer:" + incorrect);

            });
        }
        //-------------Next-------------------------------------

        function nextQ() {
            $(".b").on("click", function () {
                $(".list-group").empty();
                lop(i, j);
                selectFunction();
                noAnswer++;
                i++;
                NA.text("No Answer:" + noAnswer);
            });
        }
        //------------------ timer-----------------------
        function timer() {
            count = count - 1;
            if (count <= 0) {
                $(".list-group").empty();
                $(".l").empty();
                CQ.text("Total Question:" + answerKey.length)
                CA.text("Correct Answer:" + correct);
                IA.text("Incorrect Answer:" + incorrect);
                NA.text("No Answer:" + noAnswer);
                clearInterval(counter);
            }

            document.getElementById("timer").innerHTML = "00." + count;
        }

   