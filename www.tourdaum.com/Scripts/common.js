// 새창
function ow_no(xurl, tar, wid, hei) {
    set = 'width=' + wid + ',height=' + hei + ',left=20,top=20,toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no';
    window.open(xurl, tar, set);
}

function ow_yes(xurl, tar, wid, hei) {
    var left = (screen.width - wid) / 2;
    var top = (screen.height - hei) / 3;

    set = 'width=' + wid + ',height=' + hei + ',left=' + left + ',top=' + top + ',toolbar=no,location=no,directory=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no';
    window.open(xurl, tar, set);
}

// modal �˾� �߰� // �̱Զ� 20110127
function ow_no_modal(xurl, wid, hei, isResize) {

    if (isResize == null) {
        isResize = "no";
    }

    set = "dialogWidth:" + wid + "px;dialogHeight:" + hei + "px;scroll:no;center:yes;help:no;status:no;resizable:" + isResize;
    var self = new Object();
    self.window = window;
    return window.showModalDialog(xurl, self, set);
}

function ow_yes_modal(xurl, wid, hei, isResize) {

    if (isResize == null) {
        isResize = "no";
    }

    set = "dialogWidth:" + wid + "px;dialogHeight:" + hei + "px;scroll:yes;center:yes;help:no;status:no;resizable:" + isResize;
    var self = new Object();
    self.window = window;
    return window.showModalDialog(xurl, self, set);
}

// flash
function flashLoad(flash_name, flash_width, flash_height, flash_id, wmd, idx) {
    document.write(" \
		<Object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' WIDTH='" + flash_width + "' HEIGHT='" + flash_height + "' id='" + flash_id + "' ALIGN=''> \
		<PARAM NAME=movie VALUE='" + flash_name + "'> \
		<PARAM NAME=quality VALUE=high> \
	");
    if (wmd == '1') {
        document.write(" \
			<PARAM NAME=wmode VALUE=transparent> \
		");
    }
    if (idx != '') {
        document.write(" \
			<param name=flashvars value='" + idx + "'> \
		");
    }
    if (wmd == '1') {
        if (idx != '') {
            document.write(" \
				<EMBED src='" + flash_name + "' flashvars='" + idx + "' wmode='transparent' quality=high  WIDTH='" + flash_width + "' HEIGHT='" + flash_height + "' NAME='" + flash_id + "' ALIGN='' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'> \
			");
        } else {
            document.write(" \
				<EMBED src='" + flash_name + "' wmode='transparent' quality=high  WIDTH='" + flash_width + "' HEIGHT='" + flash_height + "' NAME='" + flash_id + "' ALIGN='' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'> \
			");
        }
    } else {
        if (idx != '') {
            document.write(" \
				<EMBED src='" + flash_name + "' flashvars='" + idx + "' quality=high  WIDTH='" + flash_width + "' HEIGHT='" + flash_height + "' NAME='" + flash_id + "' ALIGN='' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'> \
			");
        } else {
            document.write(" \
				<EMBED src='" + flash_name + "' quality=high  WIDTH='" + flash_width + "' HEIGHT='" + flash_height + "' NAME='" + flash_id + "' ALIGN='' TYPE='application/x-shockwave-flash' PLUGINSPAGE='http://www.macromedia.com/go/getflashplayer'> \
			");
        }
    }
    document.write(" \
		</EMBED> \
		</OBJECT> \
	");
}

function setPng24(obj) {
    obj.width = obj.height = 1;
    obj.className = obj.className.replace(/\bpng24\b/i, '');
    obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "',sizingMethod='image');"
    obj.src = '';
    return '';
}

function set02Png24(obj) {
    obj.width = obj.height = 1;
    obj.className = obj.className.replace(/\bpng2402\b/i, "../../images/common/cont/blank.gif");
    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"" + obj.src + "\",sizingMethod=\"image\");"
    obj.src = "../../images/common/cont/blank.gif";
    return "";
}


function ImageOver(imgEL) {
    imgEL.src = imgEL.src.replace(".gif", "_on.gif");
}
function ImageOut(imgEL) {
    imgEL.src = imgEL.src.replace("_on.gif", ".gif");
}

function ly_show(id) {
    document.getElementById(id).style.display = 'block';
}

function ly_hide(id) {
    document.getElementById(id).style.display = 'none';
}

function select_ly(n) {
    var bx = document.getElementById("area1");
    var bx1 = document.getElementById("area2");
    if (n == 1) {
        bx.style.display = 'block';
        bx1.style.display = 'none';
    } else {
        bx.style.display = 'none';
        bx1.style.display = 'block';
    }
}

function On_replace(n) {
    var img = document.getElementById("icn_" + n);
    var txt = document.getElementById("txt_" + n);

    img.src = img.src.replace(".jpg", "_on.jpg");
    txt.src = txt.src.replace(".gif", "_on.gif");
}

function mapChange(n) {
    var i = "";
    for (i = 1; i <= 7; i++) {
        var map = document.getElementById("map_" + i);
        if (n == i) {
            map.style.display = "block";
        } else {
            map.style.display = "none";
        }
    }

}

// 공통코드 바인딩 공통함수 (pcode 사용하는 코드값)
function Set_Ctrl_Hierarchy(pcode, targetCtrlId, targetGrp, firstOption, selectedValue) {
    // 대상컨트롤 가져옴.
    var targetCtrl = $("#" + targetCtrlId);

    if (pcode == undefined || pcode == "") {
        if (firstOption == null) {
            targetCtrl.get(0).options[0] = new Option("선택", "0");
        } else {
            targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
        }
    }
    else {

        $.ajax({
            type: "POST",
            url: "/Common/CodeData",
            dataType: "json",
            data: ({ "target": targetGrp, "pcode": pcode }),
            async: false,
            success: function (data) {
                // control 데이터 삭제
                targetCtrl.empty();

                // control 기타 데이터 입력
                var isAddOption = 0;
                if (firstOption != null) {
                    targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
                    isAddOption = 1;
                }
                // control 원 데이터 입력
                for (var i = 0; i < data.length; i++) {
                    targetCtrl.get(0).options[i + isAddOption] = new Option(data[i].CodeNm, data[i].CodeId);
                }
                // 이전페이지에서 선택되어진 값을 설정한다.
                if (targetGrp == "codeVal1") {
                    targetCtrl.val(selectedValue);
                } else {
                    targetCtrl.val(selectedValue);
                }
            },
            error: function (xhr, status, error) {
                alert(xhr.responseText);
                //alert(error); 
            }
        });
    }
}

// 공통코드 바인딩 공통함수2 (pcode 사용하는 코드값)
//조회코드, 적용될 ID, 옵션 기본값, 파라미터, 선택값, 모드(null:기본, 1:code_val1, 2:code_val2, 3:code_val3)
function Set_Ctrl_Hierarchy2(pcode, targetCtrlId, firstOption, codeVal, selectedValue, mode) {
    // 대상컨트롤 가져옴.
    var targetCtrl = $("#" + targetCtrlId);

    if (pcode == undefined || pcode == "") {
        if (firstOption == null) {
            targetCtrl.get(0).options[0] = new Option("선택", "0");
        } else {
            targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
        }
    }
    else {

        $.ajax({
            type: "POST",
            url: "/Common/CodeData2",
            dataType: "json",
            data: ({ "pcode": pcode, "codeVal": codeVal, "mode": mode }),
            async: false,
            success: function (data) {
                // control 데이터 삭제
                targetCtrl.empty();

                // control 기타 데이터 입력
                var isAddOption = 0;
                if (firstOption != null) {
                    targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
                    isAddOption = 1;
                }
                // control 원 데이터 입력
                for (var i = 0; i < data.length; i++) {
                    targetCtrl.get(0).options[i + isAddOption] = new Option(data[i].CodeNm, data[i].CodeId);
                }
                // 이전페이지에서 선택되어진 값을 설정한다.
                targetCtrl.val(selectedValue);
            },
            error: function (xhr, status, error) {
                alert(xhr.responseText);
                //alert(error); 
            }
        });
    }
}

// 공통코드 바인딩 공통함수 (pcode 사용하는 코드값)
function Set_Ctrl_Hierarchy3(pcode, pcode1, targetCtrlId, targetGrp, firstOption, selectedValue) {
    // 대상컨트롤 가져옴.
    var targetCtrl = $("#" + targetCtrlId);

    if (pcode == undefined || pcode == "") {
        if (firstOption == null) {
            targetCtrl.get(0).options[0] = new Option("선택", "0");
        } else {
            targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
        }
    }
    else {

        $.ajax({
            type: "POST",
            url: "/Common/CodeData3",
            dataType: "json",
            data: ({ "target": targetGrp, "pcode": pcode, "pcode1": pcode1 }),
            async: false,
            success: function (data) {
                // control 데이터 삭제
                targetCtrl.empty();

                // control 기타 데이터 입력
                var isAddOption = 0;
                if (firstOption != null) {
                    targetCtrl.get(0).options[0] = new Option(firstOption["name"], firstOption["value"]);
                    isAddOption = 1;
                }
                // control 원 데이터 입력
                for (var i = 0; i < data.length; i++) {
                    targetCtrl.get(0).options[i + isAddOption] = new Option(data[i].CodeNm, data[i].CodeId);
                }
                // 이전페이지에서 선택되어진 값을 설정한다.
                if (targetGrp == "codeVal1") {
                    targetCtrl.val(selectedValue);
                } else {
                    targetCtrl.val(selectedValue);
                }
            },
            error: function (xhr, status, error) {
                alert(xhr.responseText);
                //alert(error); 
            }
        });
    }
}

var util = new function () {
    this.textareaId = "";

    this.setAdminEditor = function (editor, width, height) {
        $("#" + editor).tinymce({
            // Location of TinyMCE script
            script_url: '/Scripts/tinymce/jscripts/tiny_mce/tiny_mce.js',

            // General options
            mode: "textareas",
            theme: "advanced",
            language: 'ko',
            skin: "o2k7",
            skin_variant: "silver",
            forced_root_block: false,
            force_br_newlines: true,
            relative_urls: false,
            height: height,
            width: width,
            plugins: "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",

            // Theme options
            theme_advanced_buttons1: "undo,redo,|,bold,italic,underline,strikethrough,|,forecolor,backcolor,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect",
            theme_advanced_buttons2: "tablecontrols,|,link,imageEditor,code,preview,fullscreen",
            theme_advanced_buttons3: "",
            theme_advanced_buttons4: "",
            theme_advanced_toolbar_location: "top",
            theme_advanced_toolbar_align: "left",
            theme_advanced_statusbar_location: "bottom",
            theme_advanced_resizing: true,
            theme_advanced_fonts: "돋움=돋움, dotum;돋움체=돋움체,dotumche;굴림=굴림, gulim;굴림체=굴림체, gulimche;바탕=바탕, batang;바탕체=바탕체,batangche;궁서=궁서,gungsuh;Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n",
            theme_advanced_font_sizes: "7pt,8pt,9pt,10pt,12pt,13pt,14pt,16pt,18pt,20pt",
            font_size_style_values: "7pt,8pt,9pt,10pt,12pt,13pt,14pt,16pt,18pt,20pt",
            verify_html: verify_html_value,
            theme_advanced_path: false, // Path 사용여부

            // Example content CSS (should be your site CSS)
            //content_css: css_url,
            setup: function (tinyMCE) {

                // Register youtube button
                tinyMCE.addButton('imageEditor', {
                    title: 'imageEditor',
                    image: '/images/egovframework/com/imageupload.jpg',
                    onclick: function () {
                        util.imageUploadPop(editor);
                    }
                });
            }

        });
    };

    this.setSelfEditor = function (editor, width, height) {
        $("#" + editor).tinymce({
            // Location of TinyMCE script
            script_url: '/Scripts/tinymce/jscripts/tiny_mce/tiny_mce.js',

            // General options
            mode: "textareas",
            theme: "advanced",
            language: 'ko',
            skin: "o2k7",
            skin_variant: "silver",
            forced_root_block: false,  //IE에서 한글입력 문제 해결을 위해서
            force_br_newlines: true,
            force_p_newlines: false,
            relative_urls: false,
            height: height,
            width: width,
            plugins: "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",

            // Theme options
            theme_advanced_buttons1: "undo,redo,|,bold,italic,underline,strikethrough,|,forecolor,backcolor,|,justifyleft,justifycenter,justifyright,justifyfull,fontselect,fontsizeselect",
            theme_advanced_buttons2: "tablecontrols,|,link,imageEditor,code,preview,fullscreen",
            theme_advanced_buttons3: "",
            theme_advanced_buttons4: "",
            theme_advanced_toolbar_location: "top",
            theme_advanced_toolbar_align: "left",
            theme_advanced_statusbar_location: "bottom",
            theme_advanced_resizing: true,
            theme_advanced_fonts: "돋움=돋움, dotum;돋움체=돋움체,dotumche;굴림=굴림, gulim;굴림체=굴림체, gulimche;바탕=바탕, batang;바탕체=바탕체,batangche;궁서=궁서,gungsuh;Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n",
            theme_advanced_font_sizes: "7pt,8pt,9pt,10pt,12pt,13pt,14pt,16pt,18pt,20pt",
            font_size_style_values: "7pt,8pt,9pt,10pt,12pt,13pt,14pt,16pt,18pt,20pt",
            theme_advanced_path: false, // Path 사용여부
            fullscreen_new_window: false,

            // Example content CSS (should be your site CSS)
            //content_css: "/css/template.css",
            setup: function (tinyMCE) {

                // Register youtube button
                tinyMCE.addButton('imageEditor', {
                    title: 'imageEditor',
                    image: '/images/egovframework/com/imageupload.jpg',
                    onclick: function () {
                        util.imageUploadPop(editor);
                    }
                });
            }

        });
    };

    this.setUserEditor = function (editor, width, height, css_text) {

        tinymce.init({
            selector: "textarea#" + editor,
            language: "ko",
            theme: "modern",
            indentation: '20pt',
            width: width,
            height: height,
            //plugins: [
            //    "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
            //    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            //    "save table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker"
            //],

            plugins: [
                "advlist autolink autosave link lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace visualblocks visualchars code fullscreen insertdatetime nonbreaking",
                "save table contextmenu directionality template textcolor paste fullpage textcolor colorpicker"
            ],
            external_plugins: {
                //"moxiemanager": "/moxiemanager-php/plugin.js"
            },
            //content_css: "/Scripts/tinymce/js/tinymce/css/development.css",
            //content_css: "/Resources/css/common.css",
           
            add_unload_trigger: false,
            autosave_ask_before_unload: false,

            //toolbar1: "save newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
            //toolbar2: "cut copy paste pastetext | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media help code | insertdatetime preview | forecolor backcolor",
            //toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft | insertfile insertimage",

            toolbar1: "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect | code ",
            toolbar2: "cut copy paste pastetext | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink | insertdatetime preview | forecolor backcolor",
            toolbar3: "table | hr removeformat | subscript superscript | charmap | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak",
            menubar: false,
            toolbar_items_size: 'small',
            font_formats:"굴림체=Gulim;돋움체=Dotum;바탕체=Batang;궁서체=Gungsuh;나눔고딕=nanumgothic;나눔바른고딕=nanumbarungothic;나눔붓글씨=nanumbrushscript;Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;",

            style_formats: [
                { title: 'Bold text', inline: 'b' },
                { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } },
                { title: 'Red header', block: 'h1', styles: { color: '#ff0000' } },
                { title: 'Example 1', inline: 'span', classes: 'example1' },
                { title: 'Example 2', inline: 'span', classes: 'example2' },
                { title: 'Table styles' },
                { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' }
            ],

            //templates: [
            //    { title: 'My template 1', description: 'Some fancy template 1', content: 'My html' },
            //    { title: 'My template 2', description: 'Some fancy template 2', url: 'development.html' }
            //],

            spellchecker_callback: function (method, data, success) {
                if (method == "spellcheck") {
                    var words = data.match(this.getWordCharPattern());
                    var suggestions = {};

                    for (var i = 0; i < words.length; i++) {
                        suggestions[words[i]] = ["First", "second"];
                    }

                    success({ words: suggestions, dictionary: true });
                }

                if (method == "addToDictionary") {
                    success();
                }
            }


        });


    };

    this.imageUploadPop = function () {
        var win = window.open("/Scripts/FancyUpload/MultiUploader.aspx?type=image&updir=/upload/popup/&delimg=/images/common/btn/btn_close01.gif&maxsize=50",
		        "editor_win",
		        "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=343,height=262"
		   );
        win.focus();
    };

    this.setImages = function (response) {
        this.response = response;
        if (this.response.substr(0, 2) == 'OK') {
            var files = null;
            try {
                files = eval("[" + this.response.substr(3) + "]"); //substr(3):반환받은 문자에서 필요없는 문자("OK,")를 잘라낸다.
            }
            catch (e) {
                alert(e.message);
            }
            if (files != null) {
                for (var i = 0; i < files.length; i++) {
                    tinyMCE.activeEditor.execCommand(
	            			'mceInsertContent',
	            			false,
	            			"<img src='" + files[i].storageUrl + "'>"
	            	);
                }
            }
        }
        else {
            demo.innerHTML += "failed";
        }
    };

    this.replace = function () {

    };

    this.iframeResize = function (frameobj, minSize) {
        var body;
        var h;

        body = (frameobj.contentWindow.document.getElementsByTagName('BODY'))[0];
        h = parseInt(body.scrollHeight) + 5;
        frameobj.style.height = (h < minSize ? minSize : h) + 'px';
    };


    /**
    * FancyUpload와 연계된 util Function
    * attachFileUPload
    * appendToEditor
    * appendToAttachFile
    * removeAttachFile
    */

    /**
    * 파일업로드
    * type(image:에디터에 추가된 이미지 file: 첨부파일)
    * uploadDirectory - 업로드 디렉토리
    * editorUseYn - editor사용여부
    * suffix - 다중파일아이디의 경우접두사
    * imgWidth - 올린 이미지 넓이
    * imgHeight - 올린 이미지 높이
    * blnImgSize - 올린 이미지 사이즈 조절 여부 (기본 : false)
    */

    //신규 이미지 및 파일 업로드
    this.attachFileUPload = function (type, uploadDirectory, editorUseYn, suffix, thumbYN) {
        var win = window.open("/FileUpload/Index?type=" + type + "&updir=" + uploadDirectory + "&editorUseYn=" + editorUseYn + "&suffix=" + suffix + "&thumbYN=" + thumbYN + "&imgWidth=0&imgHeight=0&blnImgSize=N&delimg=/Resources/images/btn_close01.gif&maxsize=1024",
		"editor_win", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=550,height=410");

        win.focus();
    };


    //신규 이미지 올린 이미지를 미리보기시에 크기 조절하고 싶을 때(imgWidth, imgHeight, blnImgSize) 
    this.attachFileUPload2 = function (type, uploadDirectory, editorUseYn, suffix, thumbYN, imgWidth, imgHeight, blnImgSize) {
        var win = window.open("/FileUpload/Index?type=" + type + "&updir=" + uploadDirectory + "&editorUseYn=" + editorUseYn + "&suffix=" + suffix + "&thumbYN=" + thumbYN + "&imgWidth=" + imgWidth + "&imgHeight=" + imgHeight + "&blnImgSize=" + blnImgSize + "&delimg=/Resources/images/btn_close01.gif&maxsize=50",
		"editor_win", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=550,height=410");

        win.focus();
    };

    /**
    * 업로드 이미지 HTML에디터에 추가.
    */
    this.appendToEditor = function (editorAddText) {
        try {
            tinyMCE.activeEditor.execCommand('mceInsertContent', false, editorAddText);
        } catch (e) {
            //alert(e.message);
        }
    };

    /**
    *	업로드파일 첨부파일리스트에 추가하기.
    */
    this.appendToAttachFile = function (html, fileInfo, type, filePath, size, editorUseYn, suffix) {

        var arrayVal = fileInfo.split("#")
        var ext = arrayVal[0].lastIndexOf(".");
        var fileId = arrayVal[0].substring(0, ext);
        var extNm = arrayVal[0].substring(ext + 1);

        //첨부파일 리스트추가.
        if (!(editorUseYn == "Y" && type == 1)) {
            var index = $("#attachFileList" + suffix + ">option").length;
            $("#attachFileList" + suffix)[0].options[index] = new Option;
            $("#attachFileList" + suffix + ">option:eq(" + index + ")").attr({ value: fileInfo + "#" + size + "#" + extNm, text: fileInfo + "#" + type });
        }

        
        var appendObject = "<span id='V" + fileId + "' style='margin:3px;'>" + html + "</span>";
        //alert("appendObject : " + appendObject + "fileId : " + fileId);


        //type에 따른(1:에디터에 추가된 이미지 2:첨부파일)
        $("#attachFileList" + suffix + "_" + type).append(appendObject);

        //이미지 이면서 에디터를 사용 안 한다면
        if (!(editorUseYn == "Y" && type == 1)) {
            // 삭제이미지에 click Event 추가.
            $("img[name='attachFileDeleteImage" + suffix + "']").bind("click", function () {
                //alert(this.id);
                util.removeAttachFile2(this.id, filePath, suffix);
                //util.removeAttachFile2($(this).attr("id"), filePath, suffix);
            });
        } else {
            // 삭제이미지에 click Event 추가.
            $("img[name='attachFileDeleteImage" + suffix + "']").bind("click", function () {
                //alert(this.id);
                util.removeAttachFile(this.id, filePath, suffix);
                //util.removeAttachFile($(this).attr("id"), filePath, suffix);
            });
        }

    };


    this.removeAttachFile = function (attachFileInfo, filePath, suffix) {
        //attachFileInfo ( New File Name '#' Orginal File Name '#' type)
        arrayFileInfo = attachFileInfo.split("#");
        fileName = arrayFileInfo[0];
        type = arrayFileInfo[2];

        //파일명으로 ID 추출
        var ext = fileName.lastIndexOf(".");
        var fileId = fileName.substring(0, ext);
        var editIdValue = "";
        if (type == "1") {
            try {
                if (suffix != "") { //이미지 업로드를 여러 개를 쓸 경우 각각 에디터 포커스를 맞춰 준다.
                    //tinymce.execCommand('mceFocus', false, 'content2');
                    editIdValue = "content" + suffix;
                } else {
                    //tinymce.execCommand('mceFocus', false, 'content');
                    editIdValue = "content";
                }

                tinymce.execCommand("mceFocus", false, editIdValue);

                var activeEditor = tinyMCE.activeEditor;
                var editorText = activeEditor.getContent();
                $("<div id='tempEditorContent'>" + editorText + "</div>").insertAfter("#attachFileList" + suffix);
                $("#tempEditorContent #" + fileId).remove();

                activeEditor.setContent('');
                activeEditor.setContent($("#tempEditorContent").html());
                $("#tempEditorContent").remove();
            } catch (e) {
                alert(e.message);
            }
        }

        $("#V" + fileId).remove();

        // selectbox 에서 삭제
        $("#attachFileList" + suffix + ">option").each(function () {
            //alert("기존 : " + $(this).text());
            //alert("변경 : " + attachFileInfo);
            if ($(this).text() == attachFileInfo) {
                $(this).remove();
                return false;
            }
        });

        // 실제 파일 삭제
        if (fileName != "") {
        	this.attachFileDelete(fileName, filePath);
        }
    };

    //에디터 없이 이미지만 지울 때
    this.removeAttachFile2 = function (attachFileInfo, filePath, suffix) {
        //attachFileInfo ( New File Name '#' Orginal File Name '#' type)
        //alert(attachFileInfo);
        arrayFileInfo = attachFileInfo.split("#");
        fileName = arrayFileInfo[0];
        type = arrayFileInfo[2];

        //파일명으로 ID 추출
        var ext = fileName.lastIndexOf(".");
        var fileId = fileName.substring(0, ext);

        $("#V" + fileId).remove();

        // selectbox 에서 삭제
        $("#attachFileList" + suffix + ">option").each(function () {
            if ($(this).text() == attachFileInfo) {
                $(this).remove();
                return false;
            }
        });

         //실제 파일 삭제
        if (fileName != "") {
        	this.attachFileDelete(fileName, filePath);
        }
    };


    this.attachFileDelete = function (fileName, filePath) {
        $.ajax({
            type: "get",
            url: "/FileUpload/DeleteFile?uploadDir=" + filePath + "&file=" + fileName
        });
    }

    //다중파일아이디로 인해 suffix추가
    this.attachFileListToString = function (suffix) {
        var fileInfoString = "";
        $("#attachFileList" + suffix + ">option").each(function (i) {
            if (i != 0)
                fileInfoString += "|$|";
            fileInfoString += $(this).val();
        });

        return fileInfoString;
    }

    this.FileExtChk = function (arg) {
        if (val = arg.toLowerCase().match(/([^\s]+(?=\.(pdf|doc|docx|ppt|pptx|xls|xlsx|zip|alz|hwp|txt|mp3|mp4|ncp2))\.\2)/)) {
            return true;
        } else {
            alert("pdf, doc, docx, ppt, pptx, xls, xlsx, zip, alz, hwp, txt, mp3, mp4 파일만 선택해 주세요.");
            return false;
        }
    }

    this.imgFileExtChk = function (arg) {
        if (val = arg.toLowerCase().match(/([^\s]+(?=\.(jpg|gif|png))\.\2)/)) {
            return true;
        } else {
            alert("jpg, gif, png 파일만 선택해 주세요.");
            return false;
        }
    }


    this.format = function (text) {
        if (arguments.length <= 1) {
            return text;
        }
        var tokenCount = arguments.length - 2;
        for (var token = 0; token <= tokenCount; token++) {
            text = text.replace(new RegExp("\\{" + token + "\\}", "gi"),
													arguments[token + 1]);
        }
        return text;
    }

    this.formatDate = function (date, formatString) {
        var tempDateString;
        var tempMonth = date.getMonth() + 1;
        var tempDay = date.getDate();
        var tempHour = date.getHours();
        var tempMinutes = date.getMinutes();

        tempMonth = tempMonth < 10 ? "0" + tempMonth : tempMonth;
        tempDay = tempDay < 10 ? "0" + tempDay : tempDay;
        tempHour = tempHour < 10 ? "0" + tempHour : tempHour;
        tempMinutes = tempMinutes < 10 ? "0" + tempMinutes : tempMinutes;

        tempDateString = formatString.replace("yyyy", date.getFullYear());
        tempDateString = tempDateString.replace("MM", tempMonth);
        tempDateString = tempDateString.replace("dd", tempDay);
        tempDateString = tempDateString.replace("HH", tempHour);
        tempDateString = tempDateString.replace("mm", tempMinutes);

        return tempDateString;
    }

    this.replaceJSONSafeEscape = function (string) {
        return string
            .replace(
				/[\x00-\x1f\\"]/g,
				function (a) {
				    var b = stringEscape[a];
				    if (b)
				        return b;
				    else
				        return a;
				}
			);
    }

    this.padLeft = function (str, len, char) {
        len = Number(len) || 1;
        char = String(char) || " ";
        for (var i = 0; i < len; i++) str = char + str;
        return str.substr(str.length - len);
    }

    this.ajaxCall = function (obj, url, type, cache, data, callBack) {
        this.ajaxCall2(obj, url, type, cache, 'html', data, callBack);
    }

    this.ajaxCall2 = function (obj, url, type, cache, dataType, data, callBack) {
        $.ajax({
            url: url,
            type: type,
            cache: cache,
            data: data,
            dataType: dataType,
            beforeSend: function () {
                if (obj != null && typeof (obj) == "object") {
                    obj.html("<div style='width:100%; text-align:center; height:100%; vertical-align:middle;'><img src='/images/common/indicator/loading.gif' /></div>");
                }
            },
            success: function (data) {
                if (callBack != undefined && typeof (callBack) == "function") {
                    callBack(data);
                } else {
                    if (obj != null && typeof (obj) == "object")
                        obj.html(data);
                }
            },
            error: function (request, status, error) {
                if (callBack != undefined && typeof (callBack) == "function") {
                    callBack("페이지 오류");
                } else {
                    if (obj != null && typeof (obj) == "object")
                        obj.html("페이지 오류");
                }
                //alert("code : " + request.status + "\r\nmessage : " + request.responseText);
            }
        });
    }

    this.ajaxCallByJson = function (obj, url, type, cache, data, callBack) {
        $.ajax({
            url: url,
            type: type,
            cache: cache,
            data: data,
            dataType: "json",

            beforeSend: function () {
                if (obj != null && typeof (obj) == "object") {
                    obj.html("<div style='width:100%; text-align:center; height:100%; vertical-align:middle;'><img src='/images/common/indicator/loading.gif' /></div>");
                }
            },
            success: function (data) {
                if (callBack != undefined && typeof (callBack) == "function") {
                    callBack(data);
                } else {
                    obj.html(data);
                }
            },
            error: function (request, status, error) {
                if (callBack != undefined && typeof (callBack) == "function") {
                    callBack("페이지 오류");
                } else {
                    if (obj != null && typeof (obj) == "object")
                        obj.html("페이지 오류");
                }
                //alert("code : " + request.status + "\r\nmessage : " + request.responseText);
            }
        });
    }

    this.downloadExcel = function (url, param) {
        var targetUrl = url + '?' + param;
        window.open(targetUrl, '_down', 'width=0px,height=0px,left=50%,top=50%,menbar=no,resizable=no,');
    }

};

function ReplaceStr(strOriginal, strFind, strChange) {
    return strOriginal.split(strFind).join(strChange);
}


//우편번호 찾기 스크립트
function goAddr() {
    varpop = window.open("/Common/AddrPopup", "pop", "width=570,height=420, scrollbars=yes");
}
function jusoCallBack(roadFullAddr, roadAddrPart1, addrDetail, roadAddrPart2, engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn) {
    $("#roadFullAddr").val(roadFullAddr);
    $("#roadAddr1").val(roadAddrPart1);
    $("#roadAddr2").val(roadAddrPart2);
    $("#addrDetail").val(addrDetail);
    $("#roadEngAddr").val(engAddr);
    $("#addr").val(jibunAddr);
    $("#zipCode").val(zipNo);
    $("#zipCode1").val(zipNo.split('-')[0]);
    $("#zipCode2").val(zipNo.split('-')[1]);
    $("#admCd").val(admCd);
    $("#rnMgtSn").val(rnMgtSn);
    $("#bdMgtSn").val(bdMgtSn);
}



var messages = {
    "DELETE_END": "삭제 되었습니다."
, "REGIST_END": "등록이 완료 되었습니다."
, "MODIFY_END": "수정 되었습니다."
, "NORMAL_PROC": "정상 처리 되었습니다."
, "ALLOW_FILE_EXTENSION": "허용된 파일 확장자 : #{1}"
, "NEED_CHOICE": "#{1}을 선택해 주세요."
, "ABNM_TERMINATE": "비정상적으로 종료가 되었습니다. 다시한번 시도해 주세요."
, "LOGIN_ONLY_FUNCTION": "로그인을 하셔야 사용 가능합니다."
, "VALUE_CHECK": "#{1}을(를) 확인해주세요."
, "CHOOSE_VALUE_ITEM": "#{1}을(를) 선택해 주세요."
, "NOT_AUTHORIZE": "권한이 없습니다."
, "READY_ON": "서비스 준비 중입니다."
};


function gfn_alert(msgId) {
    var msg = gfn_getCommMsg.apply(null, arguments);
    alert(msg);
}

function gfn_confirm(msgId) {

    var msg = gfn_getCommMsg.apply(null, arguments);
    return confirm(msg);
}

function gfn_getCommMsg(msgId) {
    var idxcnt = 1;
    var msg = messages[msgId];
    var regex = /#{\w+}/g;

    if (isNull(msgId)) return;

    while (regex.exec(msg) != null && !isNull(arguments[idxcnt])) {
        msg = msg.replace("#{" + idxcnt + "}", arguments[idxcnt++]);
    }
    if (idxcnt == arguments.length) {
        return msg;
    }
}

/**
     * Null 값인지 확인
     * @param val
     * @returns {boolean}
     */
function isNull(val) {
    if (val == undefined) return true;
    if (val == null) return true;

    val = String(val);
    val = trim(val);
    if (val == "") return true;
    if (val.length <= 0) return true;

    return false;
}

/**
     * 공백제거
     * @param s
     * @returns {string}
     */
function trim(s) {
    var t = "";
    var from_pos = to_pos = 0;

    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == ' ')
            continue;
        else {
            from_pos = i;
            break;
        }
    }

    for (i = s.length; i >= 0; i--) {
        if (s.charAt(i - 1) == ' ')
            continue;
        else {
            to_pos = i;
            break;
        }
    }

    t = s.substring(from_pos, to_pos);
    //				alert(from_pos + ',' + to_pos + ',' + t+'.');
    return t;
}

/**
 * 자바스크립트로 PHP의 number_format 흉내를 냄
 * 숫자에 , 를 출력
 * @param data
 * @returns {string}
 */
function number_format(data) {

    var tmp = '';
    var number = '';
    var cutlen = 3;
    var comma = ',';
    var i;

    data = data + "";
    len = data.length;
    mod = (len % cutlen);
    k = cutlen - mod;
    for (i = 0; i < data.length; i++) {
        number = number + data.charAt(i);

        if (i < data.length - 1) {
            k++;
            if ((k % cutlen) == 0) {
                number = number + comma;
                k = 0;
            }
        }
    }

    return number;
}

/**
 * 자바스크립트로 PHP의 number_format 흉내를 냄
 * 숫자에 , 를 출력
 * @param data
 * @returns {string}
 */
function currency_format(data) {

    var tmp = '';
    var number = '';
    var cutlen = 3;
    var comma = ',';
    var i;

    data = data + "";
    len = data.length;
    mod = (len % cutlen);
    k = cutlen - mod;
    for (i = 0; i < data.length; i++) {
        number = number + data.charAt(i);

        if (i < data.length - 1) {
            k++;
            if ((k % cutlen) == 0) {
                number = number + comma;
                k = 0;
            }
        }
    }
    number = number+'원'
    return number;
}



/**
 * , 를 없앤다.
 * @param data
 * @returns {string}
 */
function no_comma(data) {
    var tmp = '';
    var comma = ',';
    var i;

    for (i = 0; i < data.length; i++) {
        if (data.charAt(i) != comma)
            tmp += data.charAt(i);
    }
    return tmp;
}

function isMobile() {

    if (navigator.userAgent.match(/android/i) || navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
        return true;
    }
    else {
        return false;
    }

}

function autoGo(fromId, toId, cnt) {
    if ($("#" + fromId).val().length > cnt - 1) {
        $("#" + toId).focus();
    }
}

//나이 계산(년도로만 해서 단순 나이 계산)
function computeAge(birthday) {

    var bday = parseInt(birthday.substring(6, 8));
    var bmo = (parseInt(birthday.substring(4, 6)) - 1);
    var byr = parseInt(birthday.substring(0, 4));
    //alert(byr + "-" + bmo + "-" + bday);
    var byr;
    var age;
    var now = new Date();
    tday = now.getDate();
    tmo = (now.getMonth());
    tyr = (now.getFullYear());


    //if ((tmo > bmo) || (tmo == bmo & tday >= bday)) {
    age = byr
    //} else {
    //    age = byr + 1;
    //}

    return (tyr - age)+1;
}

function chkNum(obj) {
    var txtObject = obj;
    var strInputValue = txtObject.value.substr(txtObject.value.length - 1, txtObject.value.length);

    if (isNaN(strInputValue)) {
        alert(strInputValue + " 글자를 입력하셨습니다.\r\n여기에는 숫자만 입력 가능합니다.");
        txtObject.value = '';
        return false;
    }

    return true;
}


/*
 * StringUtil Start
 */
var StringUtil = function ($) {
    "use strict";

    if (!!window.StringUtil) {
        return window.StringUtil;
    }

    //한글 바이트 수 
    var bytesKorean = 2;

    function getBytesLength(str) {
        var bytes = 0;

        if (!str) {
            return 0;
        }

        for (var i = 0, cnt = str.length; i < cnt; i++) {
            var c = str.charCodeAt(i)
            bytes += c >> 11 ? bytesKorean : c >> 7 ? 2 : 1;
        }

        return bytes;
    }

    return {
        "getBytesLength": getBytesLength

        , "substrBytes": function (str, startInBytes, lengthInBytes) {
            var resultStr = '';
            var startInChars = 0;

            if (!str) {
                return "";
            }

            for (var bytePos = 0; bytePos < startInBytes; startInChars++) {
                var ch = str.charCodeAt(startInChars);
                if (isNaN(ch)) {
                    return "";
                }
                bytePos += (ch < 128) ? 1 : getBytesLength(str[startInChars]);
            }

            var end = startInChars + lengthInBytes - getBytesLength(str[str.length - 1]);

            for (var n = startInChars; startInChars <= end; n++) {
                var ch = str.charCodeAt(n);
                if (isNaN(ch)) {
                    return resultStr;
                }
                end -= (ch < 128) ? 1 : getBytesLength(str[n]);

                resultStr += str[n];
            }

            return resultStr;
        }

        , "format": function (str, params) {
            for (var key in params) {
                var regEx = new RegExp("@\\{" + key + "\\}", "gm");
                str = str.replace(regEx, params[key]);
            }

            return str;
        }

        , "removeWhitespace": function (str) {
            return str.replace(/\s/g, '');
        }
    };
}(jQuery);
/*
 * StringUtil End
 */


/*
 * FormUtil Start
 */
var FormUtil = function ($) {
    "use strict";

    if (!!window.FormUtil) {
        return window.FormUtil;
    }
    return {

    }
}(jQuery);

; (function ($) {
    "use strict";

    $.fn.FormUtil = function () {
        var methodName = arguments[0];
        if (methodName == "on") {
            var eventName = arguments[1];
            return $.fn.FormUtil.handler[eventName].apply(this, Array.prototype.slice.call(arguments, 2));
        } else if (methodName == "off") {
            var eventName = arguments[1];
            eventName = eventName.split(" ");
            for (var i = 0, cnt = eventName.length; i < cnt; i++) {
                if (!!$.trim(eventName[i])) {
                    this.off("." + $.trim(eventName[i]));
                }
            }

            return this;
        } else {
            return $.fn.FormUtil.methods[methodName].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };

    $.fn.FormUtil.methods = {};
    $.fn.FormUtil.handler = {};

    //form 내 입력값 trim처리
    // $(obj).FormUtil("trimInputValue")
    $.fn.FormUtil.methods.trimInputValue = function () {
        this.find("input:text, textarea").each(function (idx, obj) {
            $(obj).val($.trim($(obj).val()));
        });

        return this;
    };

    //현재 커서 위치 가져오기
    // $(obj).FormUtil("getCursorPosition")
    $.fn.FormUtil.methods.getCursorPosition = function () {
        var obj = this.get(0);
        var pos = 0;
        if ('selectionStart' in obj) {
            pos = obj.selectionStart;
        } else if ('selection' in document) {
            obj.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -obj.value.length);
            pos = Sel.text.length - SelLength;
        }

        return pos;
    };

    //커서 위치 변경
    // $(obj).FormUtil("setCursorPosition", 30)
    $.fn.FormUtil.methods.setCursorPosition = function (pos) {
        return this.FormUtil('setSelectionRange', pos, pos);
    };

    // 부분 선택
    // $(obj).FormUtil("setSelectionRange", 10, 30)
    $.fn.FormUtil.methods.setSelectionRange = function (selectionStart, selectionEnd) {
        var obj = this.get(0);

        if (obj.setSelectionRange) {
            obj.setSelectionRange(selectionStart, selectionEnd);
        } else if (obj.createTextRange) {
            var range = obj.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }

        return this;
    };

    // 바이트 제한 이벤트
    // $(obj).FormUtil("on", "byteLimit", 400, {
    //     limitMsg: "글자수가 초과됨"
    //     , markLengthObj: $("#cnt")
    // });
    $.fn.FormUtil.handler.byteLimit = function (limitCnt, options) {
        var settings = $.extend({}, {
            limitMsg: ""
            , markLengthObj: null
        }, options);

        if ($.isNumeric(limitCnt) && limitCnt > -1) {
            this.on('keyup.byteLimit', function () {
                var a = $(this).val();
                if (!a) {
                    a = ""
                }

                var currLength = StringUtil.getBytesLength(a);
                if (currLength > limitCnt) {
                    if (!!settings.limitMsg) {
                        alert(settings.limitMsg);

                    }

                    var cursePosition = $(this).FormUtil('getCursorPosition');

                    $(this).val(StringUtil.substrBytes($(this).val(), 0, limitCnt));

                    $(this).FormUtil('setCursorPosition', cursePosition);

                    if (!!settings.markLengthObj) {
                        $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
                    }
                } else {
                    if (!!settings.markLengthObj) {
                        $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
                    }
                }
            });

            if (!!settings.markLengthObj) {
                $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
            }
        }

        return this;
    };


    // 바이트 제한 이벤트
    // $(obj).FormUtil("on", "byteLimit2", 400, {
    //     limitMsg: "글자수가 초과됨"
    //     , markLengthObj: $("#cnt")
    //     , markLengthMsg: $("#msg")
    //     , markLengthid: $("#id")
    // });
    $.fn.FormUtil.handler.byteLimit2 = function (limitCnt, options) {
        var settings = $.extend({}, {
            limitMsg: ""
            , markLengthObj: null
            , markLengthMsg: null
            , markLengthId: null
        }, options);

        if ($.isNumeric(limitCnt) && limitCnt > -1) {
            this.on('keyup.byteLimit', function () {
                var a = $(this).val();
                if (!a) {
                    a = ""
                }

                var currLength = StringUtil.getBytesLength(a);
                if (currLength > limitCnt) {
                    //if (!!settings.limitMsg) {
                    //    alert(settings.limitMsg);
                    //}

                    //alert 메세지를 폼 내 텍스트 보여줌으로
                    $(settings.markLengthId).addClass("inpErr");
                    $(settings.markLengthMsg).show();

                    var cursePosition = $(this).FormUtil('getCursorPosition');

                    $(this).val(StringUtil.substrBytes($(this).val(), 0, limitCnt));

                    $(this).FormUtil('setCursorPosition', cursePosition);

                    if (!!settings.markLengthObj) {
                        $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
                    }
                } else {
                    if (!!settings.markLengthObj) {
                        $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
                    }

                    //alert 메세지를 폼 내 텍스트 가림으로
                    $(settings.markLengthId).removeClass("inpErr");
                    $(settings.markLengthMsg).hide();
                }
            });

            if (!!settings.markLengthObj) {
                $(settings.markLengthObj).text(StringUtil.getBytesLength($(this).val()));
            }
        }

        return this;
    };

    //줄바꿈 제한 이벤트
    //$(obj).FormUtil("on", "newLineLimit", 5);
    $.fn.FormUtil.handler.newLineLimit = function (limitCnt) {
        if ($.isNumeric(limitCnt) && limitCnt > -1) {
            this.bind('keyup.newLineLimit change.newLineLimit', function () {
                var a = $(this).val();
                if (!a) {
                    a = ""
                }
                a = a.split("\n");

                if (a.length > limitCnt + 1) {
                    var cursePosition = $(this).FormUtil('getCursorPosition');

                    alert("줄바꿈은 " + limitCnt + "회로 제한합니다.");
                    $(this).val(a.slice(0, limitCnt + 1).join("\n"));

                    $(this).FormUtil('setCursorPosition', cursePosition);
                }
            });
        }

        return this;
    };

    //숫자만 입력
    //$(obj).FormUtil("on", "onlyNumeric");
    $.fn.FormUtil.handler.onlyNumeric = function () {
        this.bind('change.onlyNumeric input.onlyNumeric', function () {
            if (!$.isNumeric(StringUtil.removeWhitespace($(this).val()))) {
                $(this).val("");
            }

            var maxlength = $(this).attr('maxlength');
            if (maxlength && $(this).val().length > maxlength) {
                $(this).val($(this).val().slice(0, maxlength));
            }
        });

        return this;
    }
})(jQuery);
/*
 * FormUtil End
 */

//mobile maxlength check
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}

//휴대전화번호 - 넣기
function inputPhoneNumber(obj) {
    var number = obj.replace(/[^0-9]/g, "");
    var phone = "";

    if (number.length < 4) {
        return number;
    } else if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
    } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
    } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
    }
   return phone;
}
