<?php
namespace App\Helpers;


class Helper
{
    public static function paymentStatus(string $status) : string
    {
        if($status == 'paid'){
         $result = '<span class="badge badge-light-success">Paid</span>';
        }
        if($status == 'unpaid'){
            $result = '<span class="badge badge-light-danger">Unpaid</span>';
        }
        return $result;
    }

    public static function orderStatus($status)
    {
        switch ($status) {
            case $status == 'new':
                echo '<span class="badge badge-light-primary">New</span>';
                break;
            case $status == 'process':
                echo '<span class="badge badge-light-warning">Process</span>';
                break;
            case $status == 'delivered':
                echo '<span class="badge badge-light-success">Delivereds</span>';
                break;
            case $status == 'cancel':
                echo '<span class="badge badge-light-danger">Cancel</span>';
                break;
            default:
                echo '<span class="badge badge-light-primary">New</span>';
        }
    }

    public static function subTotal(int $quantity, float $amount) : float
    {
        $total = $quantity*$amount;
        return $total;
    }
}
