fetch_blog_list = () => {
    if (All_Blog.length != 0) {
        $('#Latest_Blog_Image_1').attr('src', Latest_Blog_Image)
        $('#Latest_Blog_category_1').text(All_Blog[All_Blog.length - 1][2])
        $('#Latest_Blog_Title_1').text(All_Blog[All_Blog.length - 1][1])
        $('#Latest_Blog_Date_1').text(moment.unix(All_Blog[All_Blog.length - 1][0]).format("MMMM DD, YYYY"))

        comapre_category = All_Blog[All_Blog.length - 1][2]
        list_of_next_three_catgory_blog = []
        for (var i = (All_Blog.length - 2); i > 0; i--) {
            if (All_Blog[i][2] != comapre_category && list_of_next_three_catgory_blog.length < 3) {
                list_of_next_three_catgory_blog.push(All_Blog[i])
                comapre_category = All_Blog[i][2]
            }
        }
    }

    if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 2) {
        $('#Second_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[0][3])
        $('#Second_Blog_Category_1').text(list_of_next_three_catgory_blog[0][2])
        $('#Second_Blog_Title_1').text(list_of_next_three_catgory_blog[0][1])
        $('#Second_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[0][0]).format("MMMM DD, YYYY"))
    }
    else if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 3) {
        $('#Second_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[0][3])
        $('#Second_Blog_Category_1').text(list_of_next_three_catgory_blog[0][2])
        $('#Second_Blog_Title_1').text(list_of_next_three_catgory_blog[0][1])
        $('#Second_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[0][0]).format("MMMM DD, YYYY"))

        $('#Third_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[1][3])
        $('#Third_Blog_Category_1').text(list_of_next_three_catgory_blog[1][2])
        $('#Third_Blog_Title_1').text(list_of_next_three_catgory_blog[1][1])
        $('#Third_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[1][0]).format("MMMM DD, YYYY"))
    }
    else if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 4) {
        $('#Second_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[0][3])
        $('#Second_Blog_Category_1').text(list_of_next_three_catgory_blog[0][2])
        $('#Second_Blog_Title_1').text(list_of_next_three_catgory_blog[0][1])
        $('#Second_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[0][0]).format("MMMM DD, YYYY"))

        $('#Third_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[1][3])
        $('#Third_Blog_Category_1').text(list_of_next_three_catgory_blog[1][2])
        $('#Third_Blog_Title_1').text(list_of_next_three_catgory_blog[1][1])
        $('#Third_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[1][0]).format("MMMM DD, YYYY"))

        $('#Fourth_Blog_Image_1').attr('src', list_of_next_three_catgory_blog[2][3])
        $('#Fourth_Blog_Category_1').text(list_of_next_three_catgory_blog[2][2])
        $('#Fourth_Blog_Title_1').text(list_of_next_three_catgory_blog[2][1])
        $('#Fourth_Blog_Date_1').text(moment.unix(list_of_next_three_catgory_blog[2][0]).format("MMMM DD, YYYY"))
    }

    distinctValues = {};
    for (var i = 0; i < All_Blog.length; i++) {
        if (All_Blog[i][2] in distinctValues) {
            distinctValues[All_Blog[i][2]]++;
        } else {
            distinctValues[All_Blog[i][2]] = 1;
        }
    }
    distinctValues_1 = {};
    for (var i = 0; i < All_Blog.length; i++) {
        if (All_Blog[i][2] in distinctValues_1) {
            continue;
        } else {
            distinctValues_1[All_Blog[i][2]] = All_Blog[i];
        }
    }

    for (var i = 0; i < Object.keys(distinctValues).length; i++) {
        $('.top-categories-grid-style-1').append(`<div class="cat-item">
        <div class="rt-cart-item">
            <div class="item-img">
                <img src="${Object.values(distinctValues_1)[i][3]}" alt="cat-slider" width="696" height="491">
                <div class="item-content">
                    <h4 class="title">
                        <a href="blog.html" class="category">${Object.keys(distinctValues_1)[i]}</a>
                    </h4>
                    <p class="count">
                        <span class="anim-overflow"> (${Object.values(distinctValues)[i]}) </span>
                    </p>
                </div>
            </div>
        </div>
    </div>`)
    }
}


fetch_blog = () => {
    $('#Blog_Category').text(Blog_data[0][2])
    $('#Blog_title').text(Blog_data[0][1])
    $('#Blog_Date').text(moment.unix(Blog_data[0][0]).format("MMMM DD, YYYY"))
    $('#Blog_img').attr('src', Blog_data[0][3])
    $('.post-body').text('')
    $('.post-body').html(JSON.parse(Blog_data[0][5])['Blog_Description'])
    for (var i = 0; i < JSON.parse(Blog_data[0][5])['Tags'].length; i++) {
        $('.tag-list').append(`<a href="blog.html" class="tag-link">${JSON.parse(Blog_data[0][5])['Tags'][i]}</a>`)
    }

    if (JSON.parse(Blog_data[0][5])['Meta_description'] != "") {
        $('meta[name="description"]').attr('content', JSON.parse(Blog_data[0][5])['Meta_description']);
    }

    if (JSON.parse(Blog_data[0][5])['Meta_keywords'] != "") {
        $('meta[name="keywords"]').attr('content', JSON.parse(Blog_data[0][5])['Meta_keywords']);
    }

    if (JSON.parse(Blog_data[0][5])['Meta_title'] != "") {
        $('title').text(JSON.parse(Blog_data[0][5])['Meta_title']);
    }

    if (JSON.parse(Blog_data[0][5])['Meta_robots'] != "") {
        $('meta[name="robots"]').attr('content', JSON.parse(Blog_data[0][5])['Meta_robots']);
    }
}


prev_next = () => {
    for (var i = 0; i < All_Blog.length; i++) {
        if (Blog_data[0][0] == All_Blog[i][0]) {
            if (i == 0 && All_Blog.length != 1) {
                $('#Previous_article_heading').text(All_Blog[All_Blog.length - 1][1])
                $('#Next_article_heading').text(All_Blog[i + 1][1])
                $('#Previous_article_Date').text(moment.unix(All_Blog[All_Blog.length - 1][0]).format("MMMM DD, YYYY"))
                $('#Next_article_Date').text(moment.unix(All_Blog[i + 1][0]).format("MMMM DD, YYYY"))
                $('.Previous_Button').attr("id", All_Blog[All_Blog.length - 1][0])
                $('.Next_Button').attr("id", All_Blog[i + 1][0])
            }
            else if (i == (All_Blog.length - 1) && All_Blog.length != 1) {
                $('#Previous_article_heading').text(All_Blog[i - 1][1])
                $('#Next_article_heading').text(All_Blog[0][1])
                $('#Previous_article_Date').text(moment.unix(All_Blog[i - 1][0]).format("MMMM DD, YYYY"))
                $('#Next_article_Date').text(moment.unix(All_Blog[0][0]).format("MMMM DD, YYYY"))
                $('.Previous_Button').attr("id", All_Blog[i - 1][0])
                $('.Next_Button').attr("id", All_Blog[0][0])
            }
            else if (All_Blog.length != 1) {
                $('#Previous_article_heading').text(All_Blog[i - 1][1])
                $('#Next_article_heading').text(All_Blog[i + 1][1])
                $('#Previous_article_Date').text(moment.unix(All_Blog[i - 1][0]).format("MMMM DD, YYYY"))
                $('#Next_article_Date').text(moment.unix(All_Blog[i + 1][0]).format("MMMM DD, YYYY"))
                $('.Previous_Button').attr("id", All_Blog[i - 1][0])
                $('.Next_Button').attr("id", All_Blog[i + 1][0])
            }
        }
    }
}


main_blog_function = () => {
    $.post(root + main_route + '/fetch_blog', { blog_id: blog_id }, function (data, status) {
        console.log("Status: " + status);
        Blog_data = data
        console.log(Blog_data)
    }).done(function () {
        sessionStorage.removeItem("Blog_ID")
        fetch_blog()
        prev_next()
    })
}



$(document).ready(function () {

    $.ajaxSetup({ async: false }); // to stop async

    counter_for_click = 0
    prev_next_array = []

    root = "https://tradingduniya.com";
    main_route = "/blogs";

    $('.sidebarBtn').click(function () {
        $('.rt-slide-nav').toggle()
    })

    $.post(root + main_route + '/fetch_blog_list', { catg: 'all' }, function (data, status) {
        console.log("Status: " + status);
        All_Blog = data
        console.log(All_Blog)
        if (All_Blog.length != 0) {
            Latest_Blog_Image = All_Blog[All_Blog.length - 1][3]
        }
    }).done(function () {
        if (All_Blog.length != 0) {
            fetch_blog_list()
        }
    })

    if (All_Blog.length != 0) {
        if (sessionStorage.getItem("Blog_ID") != null) {
            blog_id = sessionStorage.getItem("Blog_ID")
        }
        else {
            blog_id = All_Blog[All_Blog.length - 1][0]
        }

        main_blog_function()
    }


    $('.category').on('click', function () {
        clicked_category = $(this).text()
        sessionStorage.setItem("clicked_category", clicked_category);
    });

    $('.tag-link').on('click', function () {
        clicked_tag = $(this).text().trim();
        sessionStorage.setItem("clicked_tag", clicked_tag);
    });

    if (All_Blog.length != 0) {
        $('.Latest_Blog').on('click', function () {
            Blog_ID = All_Blog[All_Blog.length - 1][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });
    }

    if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 2) {
        $('.Second_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[0][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });
    }
    else if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 3) {
        $('.Second_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[0][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });

        $('.Third_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[1][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });
    }
    else if (list_of_next_three_catgory_blog.length != 0 && list_of_next_three_catgory_blog.length < 4) {
        $('.Second_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[0][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });

        $('.Third_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[1][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });

        $('.Fourth_Blog').on('click', function () {
            Blog_ID = list_of_next_three_catgory_blog[2][0]
            sessionStorage.setItem("Blog_ID", Blog_ID);
        });
    }

    $('.next-prev-wrap').on('click', function () {
        blog_id = $(this).attr("id")
        main_blog_function()
    })

    height = (Object.keys(distinctValues).length / 2)
    if (height > 2) {
        height = 1000
    }
    else if (height <= 2) {
        height = (height * 150) + 100 + 600
    }

    if ($(window).width() < 1200) {
        $('.Right_Col').css('min-height', height)
    }

    $(window).resize(function () {
        if ($(window).width() < 1200) {
            $('.Right_Col').css('min-height', height)
        }
    })

    // Share on Facebook
    $('.fb').on('click', function(e) {
        e.preventDefault();
        var blogUrl = encodeURIComponent(window.location.href);
        var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + blogUrl;
        window.open(facebookUrl, '_blank');
    });

    // Share on Twitter
    $('.tw').on('click', function(e) {
        e.preventDefault();
        var blogUrl = encodeURIComponent(window.location.href);
        var twitterUrl = 'https://twitter.com/intent/tweet?url=' + blogUrl;
        window.open(twitterUrl, '_blank');
    });

    // Share on YouTube
    $('.yu').on('click', function(e) {
        e.preventDefault();
        // Replace 'YOUR_YOUTUBE_URL_HERE' with the actual URL of your YouTube video
        var youtubeUrl = 'https://www.youtube.com/watch?v=YOUR_YOUTUBE_URL_HERE';
        window.open(youtubeUrl, '_blank');
    });

    // Share on LinkedIn
    $('.li').on('click', function(e) {
        e.preventDefault();
        var blogUrl = encodeURIComponent(window.location.href);
        var linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + blogUrl;
        window.open(linkedinUrl, '_blank');
    });

    // Share on WhatsApp
    $('.wh').on('click', function(e) {
        e.preventDefault();
        var blogUrl = encodeURIComponent(window.location.href);
        var whatsappUrl = 'https://api.whatsapp.com/send?text=' + blogUrl;
        window.open(whatsappUrl, '_blank');
    });
})