
<?php
use eagle\modules\util\helpers\TranslateHelper;

$this->registerJsFile(\Yii::getAlias('@web')."/js/project/platform/WishAccountsList.js", ['depends' => ['yii\web\JqueryAsset']]);
$this->registerJs("platform.WishAccountsList.initWidget();" , \yii\web\View::POS_READY);
?>
<style>
.wishAccountInfo .modal-body{
	max-height: 400px;
	overflow-y: auto;
}
</style>


<!--  open the new/edit window for Wish account -->
<a id="new-Wish-account-btn" href="#" class="btn btn-info" style="margin-top: 15px;margin-bottom:15px;"><?= TranslateHelper::t('新增账号')?></a>

<div class="account-list bs-callout bs-callout-warning">
    <table cellspacing="0" cellpadding="0" width="100%" class="table table-hover">
		<tr class="list-firstTr">
			<td width="5%"></td>
			<td width="10%"><?=$sort->link('store_name',['label'=>TranslateHelper::t('店铺名称')]) ?></td>
			<td width="20%"><?=$sort->link('token',['label'=>TranslateHelper::t('API key')]) ?></td>
			<td width="10%"><?=$sort->link('is_active',['label'=>TranslateHelper::t('是否已启用')]) ?></td>
			<td width="10%"><?=$sort->link('create_time',['label'=>TranslateHelper::t('创建时间')]) ?></td>
			<td width="10%"><?=$sort->link('update_time',['label'=>TranslateHelper::t('修改时间')]) ?></td>
			<td width="10%"><?=$sort->link('last_order_success_retrieve_time',['label'=>TranslateHelper::t('最近获取订单')]) ?></td>
			<td width="10%"><?=$sort->link('last_product_retrieve_time',['label'=>TranslateHelper::t('最近同步产品')]) ?></td>
			<td ><?= TranslateHelper::t('操作')?></td>
		</tr>
        <?php 
        $rowIndex = 1;
        foreach($WishUserInfoList as $WishUser):?>
            <tr>
	            <td><?=$rowIndex ?></td>
                <td><?=$WishUser['store_name'] ?></td>
	            <td style="word-break:break-all;"><?=$WishUser['token'] ?></td>
	            <td><?=$WishUser['is_active'] ?></td>
	            <td><?=$WishUser['create_time'] ?></td>
	            <td><?=$WishUser['update_time'] ?></td>
	            <td><?=$WishUser['last_order_success_retrieve_time'] ?></td>
	            <td><?=$WishUser['last_product_retrieve_time'] ?></td>
	            <td>
					<a class="btn btn-default btn-xs" href="#" onclick="platform.WishAccountsList.openViewWindow('<?=$WishUser['site_id'] ?>')"><?=TranslateHelper::t('查看') ?></a> 
					<a class="btn btn-default btn-xs" href="#" onclick="platform.WishAccountsList.openEditWindow('<?=$WishUser['site_id'] ?>')"><?=TranslateHelper::t('编辑') ?></a>
					<a class="btn btn-default btn-xs" href="#" onclick="platform.WishAccountsList.delWishAccount('<?=$WishUser['site_id'] ?>')"><?=TranslateHelper::t('删除') ?></a>
	            </td>
	        </tr>
	       <?php $rowIndex++;?>
        <?php endforeach;?>
    </table>
</div>


<?php if(!empty($pagination)):?>
<div>
    <?= \eagle\widgets\SizePager::widget(['pagination'=>$pagination , 'pageSizeOptions'=>array( 5 , 20 , 50 , 100 , 200 ) , 'class'=>'btn-group dropup']);?>
    <div class="btn-group" style="width: 49.6%;text-align: right;">
    	<?=\yii\widgets\LinkPager::widget(['pagination' => $pagination,'options'=>['class'=>'pagination']]);?>
	</div>
</div>
<?php endif;?>