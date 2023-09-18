
//---------- Blog Tags
const ul = document.querySelector("ul"),
    input = document.querySelector("#tags_input"),
    tagNumb = document.querySelector(".details span");

let maxTags = 10,
    tags = [];

countTags();
createTag();

function countTags() {
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}

function createTag() {
    ul.querySelectorAll("li").forEach((li) => li.remove());
    tags
        .slice()
        .reverse()
        .forEach((tag) => {
            let liTag = `<li>${tag} <i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i></li>`;
            ul.insertAdjacentHTML("afterbegin", liTag);
        });
    countTags();
}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    console.log(tags);
    countTags();
}

function addTag(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        let tag = e.target.value.replace(/\s+/g, " ");
        if (tag.length > 1 && !tags.includes(tag)) {
            if (tags.length < 10) {
                tag.split(",").forEach((tag) => {
                    tags.push(tag);
                    console.log(tags);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}

input.addEventListener("keydown", addTag);

const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () => {
    tags.length = 0;
    ul.querySelectorAll("li").forEach((li) => li.remove());
    countTags();
});


//---------- Blog Descriptions
let editorinstance;

CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
    // plugins: [ PasteFromOffice, Bold, /* ... */ ],
    toolbar: {
        items: [
            "exportPDF",
            "exportWord",
            "|",
            "findAndReplace",
            "selectAll",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "code",
            "subscript",
            "superscript",
            "removeFormat",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "|",
            "outdent",
            "indent",
            "|",
            "undo",
            "redo",
            "-",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "highlight",
            "|",
            "alignment",
            "|",
            "link",
            "insertImage",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "codeBlock",
            "htmlEmbed",
            "|",
            "specialCharacters",
            "horizontalLine",
            "pageBreak",
            "|",
            "textPartLanguage",
            "|",
            "sourceEditing",
        ],
        shouldNotGroupWhenFull: true,
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true,
        },
    },
    heading: {
        options: [
            { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
            {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
            },
            {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
            },
            {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
            },
            {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
            },
            {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
            },
            {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
            },
        ],
    },
    placeholder: "Welcome to CKEditor 5!",
    fontFamily: {
        options: [
            "default",
            "Arial, Helvetica, sans-serif",
            "Courier New, Courier, monospace",
            "Georgia, serif",
            "Lucida Sans Unicode, Lucida Grande, sans-serif",
            "Tahoma, Geneva, sans-serif",
            "Times New Roman, Times, serif",
            "Trebuchet MS, Helvetica, sans-serif",
            "Verdana, Geneva, sans-serif",
        ],
        supportAllValues: true,
    },
    fontSize: {
        options: [10, 12, 14, "default", 18, 20, 22],
        supportAllValues: true,
    },
    htmlSupport: {
        allow: [
            {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true,
            },
        ],
    },
    htmlEmbed: {
        showPreviews: true,
    },
    link: {
        decorators: {
            addTargetToExternalLinks: true,
            defaultProtocol: "https://",
            toggleDownloadable: {
                mode: "manual",
                label: "Downloadable",
                attributes: {
                    download: "file",
                },
            },
        },
    },
    mention: {
        feeds: [
            {
                marker: "@",
                feed: [
                    "@apple",
                    "@bears",
                    "@brownie",
                    "@cake",
                    "@cake",
                    "@candy",
                    "@canes",
                    "@chocolate",
                    "@cookie",
                    "@cotton",
                    "@cream",
                    "@cupcake",
                    "@danish",
                    "@donut",
                    "@dragée",
                    "@fruitcake",
                    "@gingerbread",
                    "@gummi",
                    "@ice",
                    "@jelly-o",
                    "@liquorice",
                    "@macaroon",
                    "@marzipan",
                    "@oat",
                    "@pie",
                    "@plum",
                    "@pudding",
                    "@sesame",
                    "@snaps",
                    "@soufflé",
                    "@sugar",
                    "@sweet",
                    "@topping",
                    "@wafer",
                ],
                minimumCharacters: 1,
            },
        ],
    },
    removePlugins: [
        "CKBox",
        "CKFinder",
        "EasyImage",
        "RealTimeCollaborativeComments",
        "RealTimeCollaborativeTrackChanges",
        "RealTimeCollaborativeRevisionHistory",
        "PresenceList",
        "Comments",
        "TrackChanges",
        "TrackChangesData",
        "RevisionHistory",
        "Pagination",
        "WProofreader",
        "MathType",
    ],
    addPlugins: [
        "paste"
    ]
})
    .then((editor) => {
        editorinstance = editor;
        console.log("CKEditor initialized successfully");
    })
    .catch((error) => {
        console.error(error);
    });



//---------- Add Blog
add_blog = () => {
    var title = $("#Main_Heading_input").val();
    var catg = $("#Category_input").val();
    var sh_desc = "";
    var data_dict = {};

    // input validation
    if (title == "" || catg == "") {
        alert("Please Enter all fields!");
        return;
    }

    var Image = $("#Image_input").val();
    console.log(Image);
    var Blog_Description = editorinstance.getData();
    var Author_Name = $("#Author_Name_input").val();
    var Meta_title = $("#Meta_title_input").val();
    var Meta_keywords = $("#Meta_keywords_input").val();
    var Meta_description = $("#Meta_description_input").val();
    var Meta_robots = $("#Meta_robots_input").val();
    var Meta_viewport = $("#Meta_viewport_input").val();
    var Meta_charset = $("#Meta_charset_input").val();

    data_dict = {
        Blog_Description: Blog_Description,
        Author_Name: Author_Name,
        Meta_title: Meta_title,
        Meta_keywords: Meta_keywords,
        Meta_description: Meta_description,
        Meta_robots: Meta_robots,
        Meta_viewport: Meta_viewport,
        Meta_charset: Meta_charset,
        Tags: tags,
    };

    data = JSON.stringify(data_dict);

    var formData = new FormData();
    formData.append("title", title);
    formData.append("catg", catg);
    formData.append("file", $("#Image_input")[0].files[0]);
    formData.append("sh_desc", sh_desc);
    formData.append("data", data);

    $.ajax({
        type: "POST",
        url: root + main_route + "/add_blog",
        data: formData,
        processData: false, // tell jQuery not to process the data
        contentType: false, // tell jQuery not to set contentType
        success: function (data) {
            if (data == "success") {
                alert("Post Uploaded Successfully!");
                Fetch_All_Blog();
                $(":input").val("");
                tags = [];
                createTag();
                editorinstance.setData("");
                $("#update").hide();
                $("#submit").show();
            } else {
                alert("Unable to upload blog");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) { },
    });
};



//---------- Update Blog
update_blog = (ts) => {
    var title = $("#Main_Heading_input").val();
    var catg = $("#Category_input").val();
    var sh_desc = "";
    var data_dict = {};

    // input validation
    if (title == "" || catg == "") {
        alert("Please Enter all fields!");
        return;
    }

    var Image = $("#Image_input").val();
    console.log(Image);
    var Blog_Description = editorinstance.getData();
    var Author_Name = $("#Author_Name_input").val();
    var Meta_title = $("#Meta_title_input").val();
    var Meta_keywords = $("#Meta_keywords_input").val();
    var Meta_description = $("#Meta_description_input").val();
    var Meta_robots = $("#Meta_robots_input").val();
    var Meta_viewport = $("#Meta_viewport_input").val();
    var Meta_charset = $("#Meta_charset_input").val();

    data_dict = {
        Blog_Description: Blog_Description,
        Author_Name: Author_Name,
        Meta_title: Meta_title,
        Meta_keywords: Meta_keywords,
        Meta_description: Meta_description,
        Meta_robots: Meta_robots,
        Meta_viewport: Meta_viewport,
        Meta_charset: Meta_charset,
        Tags: tags,
    };

    data = JSON.stringify(data_dict);

    if ($("#Image_input").val() == "") {
        var formData = new FormData();
        formData.append("blog_id", parseFloat(Edit_Blog[0]));
        formData.append("title", title);
        formData.append("catg", catg);
        formData.append("sh_desc", sh_desc);
        formData.append("data", data);
    } else {
        var formData = new FormData();
        formData.append("blog_id", parseFloat(Edit_Blog[0]));
        formData.append("title", title);
        formData.append("catg", catg);
        formData.append("file", $("#Image_input")[0].files[0]);
        formData.append("sh_desc", sh_desc);
        formData.append("data", data);
    }

    if (confirm("Are you Sure you want to update?")) {
        $.ajax({
            type: "POST",
            url: root + main_route + "/update_blog",
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
            success: function (data) {
                if (data == "success") {
                    alert("Post Updated Successfully!");
                    Fetch_All_Blog();
                    $(":input").val("");
                    tags = [];
                    createTag();
                    editorinstance.setData("");
                    $("#update").hide();
                    $("#submit").show();
                } else {
                    alert("Unable to upload blog");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { },
        });
    } else {
        return;
    }
};



//---------- Edit Blog
edit_blog = (ts) => {
    console.log(ts);
    $("#update").show();
    $("#submit").hide();
    for (var i = 0; i < All_Blog_1.length; i++) {
        if (ts == parseFloat(All_Blog_1[i][0])) {
            Edit_Blog = All_Blog_1[i];
            break;
        }
    }
    $("#Main_Heading_input").val(Edit_Blog[1]);
    // var optionText = Edit_Blog[2];
    // $("#myDropdown option:contains(" + optionText + ")").prop("selected", true);
    $('#Category_input').val(Edit_Blog[2])
    $("#Author_Name_input").val(JSON.parse(Edit_Blog[5])["Author_Name"]);
    $("#Meta_title_input").val(JSON.parse(Edit_Blog[5])["Meta_title"]);
    $("#Meta_keywords_input").val(JSON.parse(Edit_Blog[5])["Meta_keywords"]);
    $("#Meta_description_input").val(
        JSON.parse(Edit_Blog[5])["Meta_description"]
    );
    $("#Meta_robots_input").val(JSON.parse(Edit_Blog[5])["Meta_robots"]);
    $("#Meta_viewport_input").val(JSON.parse(Edit_Blog[5])["Meta_viewport"]);
    $("#Meta_charset_input").val(JSON.parse(Edit_Blog[5])["Meta_charset"]);
    tags = JSON.parse(Edit_Blog[5])["Tags"];
    createTag();
    editorinstance.setData(JSON.parse(Edit_Blog[5])["Blog_Description"]);
};



//---------- Delete Blog
del_blog = (ts) => {
    if (confirm("Are you Sure?")) {
    } else {
        return;
    }
    $.post(
        root + main_route + "/delete_blog",
        { blog_id: ts },
        function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
            Fetch_All_Blog();
            $(":input").val("");
            tags = [];
            createTag();
            editorinstance.setData("");
            $("#update").hide();
            $("#submit").show();
        }
    ).fail(function (response) {
        console.log("Error: " + response);
    });
};



//---------- Fetch All Blog
Fetch_All_Blog = () => {
    $.post(root + main_route + "/fetch_blog_all", function (data, status) {
        All_Blog_1 = JSON.parse(JSON.stringify(data));
        All_Blog = JSON.parse(JSON.stringify(data));
        for (var i = 0; i < All_Blog.length; i++) {
            // data pre preprocessing
            let ts = All_Blog[i][0];
            let title = All_Blog[i][1];
            let catg = All_Blog[i][2];
            let Image = All_Blog[i][3];
            let sh_desc = All_Blog[i][4];
            let full_data = All_Blog[i][5];
            All_Blog[i][0] = moment.unix(All_Blog[i][0]).format("DD-MMM HH:mm A");
            All_Blog[i][1] = ts;
            All_Blog[i][2] = title;
            All_Blog[i][3] = catg;
            All_Blog[i][4] = Image;
            All_Blog[i][5] = sh_desc;
            All_Blog[i][6] = shorten(full_data);
            var str =
                '<button class="m-2" onclick="del_blog(' +
                ts +
                ')">&nbsp;Delete&nbsp;</button><button class="m-2" onclick="edit_blog(' +
                ts +
                ')">&nbsp;Edit&nbsp;</button>';
            All_Blog[i][7] = str;
        }
        if (All_Blog) {
            if (counter_for_datatable_3 == 0) {
                counter_for_datatable_3 += 1;
                datatable_3 = $("#BlogDatatable").DataTable({
                    paging: true,
                    pageLength: 50,
                    info: false,
                    scrollX: true,
                    scrollY: 250,
                });
            }
            datatable_3.clear();
            datatable_3.rows.add(All_Blog);
            datatable_3.draw();
        }
    }).fail(function (response) {
        console.log("Error: " + response);
    });
};



//---------- Blog Submit
document.querySelector("#submit").addEventListener("click", () => {
    add_blog();
});



//---------- Blog Update
document.querySelector("#update").addEventListener("click", () => {
    update_blog(parseFloat(Edit_Blog[0]));
});



//---------- Shorten Function
shorten = (text, length = 75) => {
    if (text == null) {
        return "";
    }
    if (text.length <= length) {
        return text;
    }
    temp.push(text);
    text = text.substring(0, length);
    // last = text.lastIndexOf(" ");
    // text = text.substring(0, last);
    return text + "...";
};



//---------- Sign Out 
function signOut() {
    google.accounts.id.disableAutoSelect()
}



//---------- Log Out
td_logout = () => {
    signOut()
    localStorage.clear();
    var pastDate = new Date(0);
    document.cookie = "td_token=; expires=" + pastDate.toUTCString() + "; path=/";
    
    window.location.href = "/admin"
}



//---------- Show_Hide Table
show_hide_3 = () => {
    counter_for_show_hide_3 += 1;
    if(counter_for_show_hide_3 % 2 == 0){
        $('.wrapper_1_button_3').text('Hide')
        $('#table_datatable_3').show()
    }
    else{
        $('.wrapper_1_button_3').text('Show')
        $('#table_datatable_3').hide()
    }
}


//---------- On Ready - Refresh
$(document).ready(function () {
    $.ajaxSetup({ async: false }); // to stop async

    $("#Main_Heading_input").focus();
    root = "https://tradingduniya.com";
    main_route = "/blogs";

    $("#update").hide();
    $("#submit").show();

    counter_for_datatable_3 = 0;
    counter_for_show_hide_3 = 0;
    temp = [];

    $("input[type='file']").on("change", function () {
        try {
            if (this.files[0].size > 2000000) {
                alert("Please upload file less than 2MB. Thanks!!");
                $(this).val("");
            }
        } catch (e) {
            console.log("File Removed!");
            return;
        }

        var allowed_ext = ["jpg", "png", "jpeg", "webp", "svg"];
        var curr_ext = $("#Image_input").val();
        curr_ext = curr_ext.split(".").pop();
        curr_ext = curr_ext.toLowerCase();
        // console.log("Extension:" + curr_ext)
        if (allowed_ext.includes(curr_ext)) {
            // console.log("Ext allowed")
        } else {
            alert("Please upload a image only!");
            $(this).val("");
        }
    }); //evt finish

    Fetch_All_Blog();

    $("#addOptionButton").on("click", function () {
        var newOptionValue = prompt("Enter a value for the new option:");
        var newOptionText = prompt("Enter a display text for the new option:");
        $("#myDropdown").append(
            "<option value='" + newOptionValue + "'>" + newOptionText + "</option>"
        );
    });

    $("#BlogDatatable tbody").on("click", "td", function () {
        var cell = $(this);
        var text = cell.text();

        if (
            cell.children().length === 0 &&
            cell.contents().length === 1 &&
            cell.contents()[0].nodeType === Node.TEXT_NODE
        ) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    console.log("Text copied to clipboard: " + text);
                })
                .catch((err) => {
                    console.error("Failed to copy text: " + err);
                });
        }
    });

    $('.wrapper_2 h5').click(() => {
        td_logout()
    })


    $('#myDropdown').on('change',()=>{
        $('#Category_input').val($("#myDropdown option:selected").text())
    })
});
