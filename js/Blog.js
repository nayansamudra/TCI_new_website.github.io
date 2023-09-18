fetch_blog_list = () => {
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

    if (sessionStorage.getItem("clicked_category") != null) {
        distinctValue = sessionStorage.getItem("clicked_category");
        distinctData = getDistinctData(All_Blog, distinctValue);
        console.log(distinctData);
        sessionStorage.removeItem("clicked_category");
    }
    else {
        distinctValue = 'TCI'
        distinctData = All_Blog
    }

    displayBlogs()

}

// Helper Function
function getDistinctData(arr, distinctValue) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][2] === distinctValue) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Displaying data
displayBlogs = () => {
    for (let i = 0; i < distinctData.length; i++) {
        console.log(i)
        $('#category_blog').append(`<div class="col-md-6 card-1 wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="800ms"
            style="visibility: visible; animation-duration: 800ms; animation-delay: 100ms; animation-name: fadeInUp;">
                <div class="rt-post-overlay rt-post-overlay-md layout-6 Blog_ID" id="${distinctData[i][0]}">
                    <div class="post-img">
                        <a href="mainBlogPage.html" class="img-link">
                            <img src="${distinctData[i][3]}" alt="post-xl_37" width="900" height="600">
                        </a>
                    </div>
                    <div class="post-content">
                        <a href="blog.html" class="life-style">${distinctData[i][2]}</a>
                        <h3 class="post-title">
                            <a href="mainBlogPage.html">${distinctData[i][1]}</a>
                        </h3>
                        <div class="post-meta">
                            <ul>
                                <li>
                                    <span class="rt-meta">
                                        by <a href="" class="name">TCI</a>
                                    </span>
                                </li>
                                <li>
                                    <span class="rt-meta">
                                        <i class="far fa-calendar-alt icon"></i>
                                        ${moment.unix(distinctData[i][0]).format("MMMM DD, YYYY")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>`)
    }

    $('#heading').text(distinctValue + ' Blog')
}

$(document).ready(function () {

    $.ajaxSetup({ async: false }); // to stop async

    counter_for_click = 0

    counter_for_each_category = 0
    Final_All_Category = []

    root = "https://tradingduniya.com";
    main_route = "/blogs";

    $.post(root + main_route + '/fetch_blog_list', { catg: 'all' }, function (data, status) {
        console.log("Status: " + status);
        All_Blog = data
        console.log(All_Blog)
    }).done(function () {
        if (All_Blog.length != 0) {
            fetch_blog_list()
        }
    })


    $('.category').on('click', function () {
        clicked_category = $(this).text()
        sessionStorage.setItem("clicked_category", clicked_category);
    });

    $('.life-style').on('click', function () {
        clicked_category = $(this).text()
        sessionStorage.setItem("clicked_category", clicked_category);
    });

    $('.Blog_ID').on('click', function () {
        Blog_ID = parseFloat($(this).attr('id'))
        sessionStorage.setItem("Blog_ID", Blog_ID);
    });

    setTimeout(() => {
        if (sessionStorage.getItem("clicked_tag") != null) {
            clicked_tag = sessionStorage.getItem("clicked_tag");
            $('#search-input').val(clicked_tag)
            const searchInput = document.getElementById('search-input');
            const searchTerm = searchInput.value.toLowerCase();
            filteredData = All_Blog.filter(item => {
                const [id, heading, category] = item;
                return heading.toLowerCase().includes(searchTerm) || category.toLowerCase().includes(searchTerm);
            });
            console.log(filteredData)
            distinctData = filteredData
            
            setTimeout(() => {
                $('#category_blog').empty()
                displayBlogs()
                sessionStorage.removeItem("clicked_tag")
            }, 1000);
        }
    }, 500);


    // ------------ Search Box
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        filteredData = All_Blog.filter(item => {
            const [id, heading, category] = item;
            return heading.toLowerCase().includes(searchTerm) || category.toLowerCase().includes(searchTerm);
        });

        console.log(filteredData)

        distinctData = filteredData

        setTimeout(() => {
            $('#category_blog').empty()
            displayBlogs()
        }, 2000);
    });

})