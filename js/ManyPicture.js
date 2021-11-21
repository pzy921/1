

    function initFileInput(ctrlName, uploadUrl){
	        var control = $('#'+ctrlName);
	        control.fileinput({
	            language: 'zh', //设置语言
	            uploadUrl:uploadUrl,    //上传的地址
	            allowedFileExtensions:['jpg','png'],    //接收的文件后缀
	            showUpload:true,    //是否显示上传按钮
	            showCaption:false,    //是否显示标题
	            maxFileSize: 1000,    //图片最大尺寸kb 为0不限制
	            maxFilesNum: 3,        //最多上传图片
	            overwriteInitial: false,//不覆盖已上传的图片
	            browseClass: "btn btn-info", //按钮样式 
	            dropZoneEnabled: true,//是否显示拖拽区域
	            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
	            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
	        });
	}
		//初始化fileinput控件,第一次初始化 (控件id，上传地址)
		    initFileInput("file-1", "uploadImg");
		
		   // 监听事件
		    $("#file-1").on("fileuploaded", function (event, data, previewId, index) {
		        // 上传地址
		        console.log(data);
		    });