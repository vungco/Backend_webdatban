<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $customer = Customer::create($request->all());
        
        return response()->json([
            "message" => "đã tạo khách hàng thành công",
            "data" => $customer,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $customer->update($request->all());

        return response()->json([
            "message" => "đã sửa khách hàng thành công",
            "data" => $customer,
        ]); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();

        return response()->json([
            "message" => "đã xóa khách hàng thành công"
        ]); 
    }

    public function getBy_iduser(Request $request)
    {
        $user_id = $request->user()->id;
        $customer = Customer::where(['UserID'=>$user_id])->first();

        if($customer){
            return response()->json([
                "message" => "đã lấy khách hàng thành công",
                "data" => $customer,
            ]); 
        }else{
            return response()->json([
                "message" => "tài khoản này chưa có khách hàng",
            ],404); 
        }
        
    }
}
