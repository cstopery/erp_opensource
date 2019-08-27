/**
 +------------------------------------------------------------------------------
 * purchase界面js
 +------------------------------------------------------------------------------
 * @category	js/project/purchase
 * @package		purchase
 * @subpackage  Exception
 * @author		lzhil <zhiliang.lu@witsion.com>
 * @version		1.0
 +------------------------------------------------------------------------------
 */
 
if (typeof importFile === 'undefined')  importFile = new Object();

importFile={
	showImportModal:function(title,form_action_url ,template_path , callback ){
		
		html = '<div id = "import_excel_body">'+
					'<form id="form_import_file"; action="'+form_action_url+'" method="post" enctype="multipart/form-data">'+
						'<input type="file" id="input_import_file" name="input_import_file">'+
					'</form>'+
					'<p>'+Translator.t('XLS示例文件下载')+' <a href="'+template_path+'">'+Translator.t('例子下载')+'</a></p>'+
					'<br><br>'+
					'<input type="button" value="'+Translator.t('excel上传采购产品指引')+'" id="help_toggle" class="btn btn-info" />'+
				'</div>';
		
		importFile_bootbox = bootbox.dialog({
			className:"import_excelFlie_dialog",
			title: title,
			message: html,
			//show : false,
			buttons:{
				Cancel: {  
					label: Translator.t("返回"),  
					className: "btn-default",  
					callback : function(){
					}
				}, 
				OK: {  
					label: Translator.t("保存"),  
					className: "btn-success",  
					callback : function(){
						//callback();
						importFile.importExcelFile(callback);
					}
				}, 
			}
		});
		
		var help_Html = '<div class="purchase_import_excel_help alert alert-warning" role="alert" style="margin:10px;display:none; text-align:left;">'+
							Translator.t('1. 系统支持上传excel文件 批量导入需要采购的产品。其中"产品SKU"、"采购数量" 均是必须的，"采购单价"为空时，自动读取报价信息，"备注"可以为空。')+'<br>'+
							Translator.t('2. 格式示例入下图：')+'<br>'+
							'<div style="clear:both;text-align:center;"><img src="/images/purchase/purchase_import_text_help.png" width="100%"></div>'+'<br>'+
							Translator.t('3. 系统对填入的产品sku进行识别，如果有sku不在阁下的产品列表中，提交时会返回提示信息并中止操作。')+'<br>'+
							Translator.t('4. "采购数量" 列只能填入数字，否则也会出现提示信息并中止操作。')+'<br>'+
							Translator.t('5. 如果出现重复sku,则相同sku会合并,数量为多个的和，取最后出现的一个采购单价为产品单价。')+'<br>'+
							Translator.t('6. 一张单只能导入一个文件的数据或保存复制粘贴excel格式一次，重复这两种操作都会导致新数据覆盖旧数据，而不会叠加！')+
						'</div>';
		$('#import_excel_body').parent().parent().parent().append(help_Html);
		$('#import_excel_body').parent().parent().parent().find('.modal-footer').css('text-align','center');

		$("#help_toggle").click(function(){
			$(".purchase_import_excel_help").toggle(100);
		});
	},
	
	importExcelFile:function(callback){
		if ($('#input_import_file').val().length ==0){
			bootbox.alert(Translator.t("请选择需要的上传文件!"));
			return false;
		}
		
		$('#import_excel_body').css('display','none');
		$('#import_excel_body').parent().addClass('bg_loading');
		if (typeof(importFile_bootbox) != "undefined"){
			importFile_bootbox.find('.btn-primary').attr('data-loading-text',Translator.t('上传中'));
			importFile_bootbox.find('.btn-primary').button('loading');
		}
		
		//供应商名称
		var supplier_name = $("select#supplier_name").val();
		
		$.showLoading();
		$.ajaxFileUpload({  
			url: $('#form_import_file').attr('action'),//请求路径
			secureuri:false,
			isUploadFile:true,
			isNotCheckFile:true,
			fileElementId:'input_import_file',//file控件的name属性值，所有批量上传的file控件name必须一致
			dataType: 'json',//返回数据的类型
			data:{suppliername:supplier_name},
			//data:{"desc":desc},//上传文件时可同时附带其他数据
			success: function (result){ 
			//debugger;
				$('#import_excel_body').css('display','block');
				$('#import_excel_body').parent().removeClass('bg_loading');
				$('#btn-import-file').button('reset');
				callback(result);
			},  
			error: function (){
				$.hideLoading();
				bootbox.alert( "<b class='red-tips'>"+Translator.t("后台无返回任何数据,请重试或联系客服")+"</b>" );
			}  
		});
	},
}